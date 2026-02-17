import { addMinutes } from "date-fns";
import { db } from "@/lib/db";
import {
  bookingConfirmationTemplate,
  cancellationTemplate,
  sendEmail
} from "@/lib/email/service";
import { badRequest, created, notFound, ok, serverError } from "@/lib/http";
import { bookingCreateSchema, bookingUpdateSchema } from "@/lib/validation/booking";
import {
  validateAdvanceWindow,
  validateCancellationWindow,
  validateDuration,
  validateMemberDailyHours
} from "@/lib/booking/rules";
import { parseNaturalTime } from "@/lib/booking/parse-time";
import { BookingStatus, MemberRole } from "@prisma/client";

async function resolveMemberId(clubId: string, payload: { memberId?: string; memberEmail?: string }) {
  if (payload.memberId) {
    const member = await db.member.findFirst({
      where: { id: payload.memberId, clubId, status: "active" },
      select: { id: true }
    });
    return member?.id ?? null;
  }

  if (payload.memberEmail) {
    const email = payload.memberEmail.toLowerCase();
    const member = await db.member.findUnique({
      where: { clubId_email: { clubId, email } },
      select: { id: true }
    });
    if (member) return member.id;

    const createdMember = await db.member.create({
      data: {
        clubId,
        email,
        name: email.split("@")[0] ?? "Member",
        role: "member"
      },
      select: { id: true }
    });
    return createdMember.id;
  }

  return null;
}

export async function POST(
  req: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const payload = bookingCreateSchema.parse(await req.json());

    const club = await db.club.findUnique({
      where: { slug: params.slug },
      include: { settings: true }
    });

    if (!club || !club.settings) {
      return notFound("Club not found");
    }
    const settings = club.settings;

    const memberId = await resolveMemberId(club.id, {
      memberId: payload.memberId,
      memberEmail: payload.memberEmail
    });
    if (!memberId) {
      return badRequest("Active member not found for booking request");
    }

    const parsedStartAt = payload.startAt
      ? new Date(payload.startAt)
      : (() => {
          const parsed = parseNaturalTime(payload.timeText ?? "", club.timezone);
          if (!parsed.ok) {
            throw new Error(parsed.error);
          }
          return new Date(parsed.startAtUtc);
        })();

    const startAt = parsedStartAt;
    const endAt = addMinutes(startAt, payload.durationMinutes);

    validateAdvanceWindow(startAt, settings);
    validateDuration(payload.durationMinutes, settings);

    const booking = await db.$transaction(async (tx) => {
      if (payload.guestName) {
        if (!settings.allowGuestBooking) {
          throw new Error("Guest booking is disabled for this club.");
        }
        if (!payload.sponsoringMemberId) {
          throw new Error("Guest booking requires a sponsoring member.");
        }
      }

      const existing = await tx.booking.findFirst({
        where: {
          clubId: club.id,
          courtId: payload.courtId,
          status: { in: [BookingStatus.confirmed, BookingStatus.blocked] },
          startAt: { lt: endAt },
          endAt: { gt: startAt }
        }
      });

      if (existing) {
        throw new Error("Time slot is not available.");
      }

      const dayStart = new Date(startAt.toISOString().slice(0, 10));
      const dayEnd = new Date(dayStart.getTime() + 24 * 60 * 60 * 1000);

      const todayBookings = await tx.booking.findMany({
        where: {
          clubId: club.id,
          memberId,
          status: BookingStatus.confirmed,
          startAt: { gte: dayStart, lt: dayEnd }
        },
        select: { durationMinutes: true }
      });

      const usedMinutes = todayBookings.reduce((sum, b) => sum + b.durationMinutes, 0);
      validateMemberDailyHours(usedMinutes, payload.durationMinutes, settings);

      const createdBooking = await tx.booking.create({
        data: {
          clubId: club.id,
          courtId: payload.courtId,
          memberId,
          date: new Date(startAt.toISOString().slice(0, 10)),
          startAt,
          endAt,
          durationMinutes: payload.durationMinutes,
          status: BookingStatus.confirmed,
          createdByRole: MemberRole.member,
          guestName: payload.guestName,
          sponsoringMemberId: payload.sponsoringMemberId
        },
        include: {
          member: true
        }
      });

      return createdBooking;
    });

    const email = await sendEmail({
      to: booking.member.email,
      subject: `Booking confirmed at ${club.name}`,
      html: bookingConfirmationTemplate(club.name, booking.startAt.toISOString())
    });

    await db.bookingNotification.create({
      data: {
        bookingId: booking.id,
        type: "confirmation",
        providerMessageId: email.id ?? undefined
      }
    });

    return created({ booking });
  } catch (error) {
    if (error instanceof Error) {
      return badRequest(error.message);
    }
    return serverError("Unable to create booking", String(error));
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const raw = (await req.json()) as {
      bookingId?: string;
      status?: BookingStatus;
      cancellationReason?: string;
      startAt?: string;
      durationMinutes?: number;
    };
    if (!raw.bookingId) {
      return badRequest("bookingId is required");
    }

    const club = await db.club.findUnique({ where: { slug: params.slug }, include: { settings: true } });
    if (!club || !club.settings) return notFound("Club not found");

    const existing = await db.booking.findFirst({
      where: { id: raw.bookingId, clubId: club.id, status: BookingStatus.confirmed },
      include: { member: true }
    });
    if (!existing) return notFound("Booking not found");

    if (raw.status === BookingStatus.cancelled) {
      validateCancellationWindow(existing.startAt, club.settings);

      const booking = await db.booking.update({
        where: { id: existing.id },
        data: {
          status: BookingStatus.cancelled,
          cancelledAt: new Date(),
          cancellationReason: raw.cancellationReason
        },
        include: { member: true }
      });

      const sent = await sendEmail({
        to: booking.member.email,
        subject: `Booking cancelled at ${club.name}`,
        html: cancellationTemplate(club.name, booking.startAt.toISOString())
      });

      await db.bookingNotification.create({
        data: {
          bookingId: booking.id,
          type: "cancellation",
          providerMessageId: sent.id ?? undefined
        }
      });

      return ok({ booking });
    }

    const payload = bookingUpdateSchema.parse(raw);
    if (!payload.startAt || !payload.durationMinutes) {
      return badRequest("For modification, startAt and durationMinutes are required");
    }

    const startAt = new Date(payload.startAt);
    const endAt = addMinutes(startAt, payload.durationMinutes);
    validateAdvanceWindow(startAt, club.settings);
    validateDuration(payload.durationMinutes, club.settings);

    const booking = await db.$transaction(async (tx) => {
      const conflict = await tx.booking.findFirst({
        where: {
          id: { not: existing.id },
          clubId: club.id,
          courtId: existing.courtId,
          status: { in: [BookingStatus.confirmed, BookingStatus.blocked] },
          startAt: { lt: endAt },
          endAt: { gt: startAt }
        }
      });

      if (conflict) {
        throw new Error("New time slot conflicts with an existing booking.");
      }

      return tx.booking.update({
        where: { id: existing.id },
        data: {
          startAt,
          endAt,
          durationMinutes: payload.durationMinutes,
          date: new Date(startAt.toISOString().slice(0, 10))
        },
        include: { member: true }
      });
    });

    return ok({ booking });
  } catch (error) {
    if (error instanceof Error) {
      return badRequest(error.message);
    }
    return serverError("Unable to update booking", String(error));
  }
}
