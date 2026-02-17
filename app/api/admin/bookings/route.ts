import { db } from "@/lib/db";
import { badRequest, ok, serverError } from "@/lib/http";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const clubId = searchParams.get("clubId");
    const from = searchParams.get("from");
    const to = searchParams.get("to");

    if (!clubId || !from || !to) {
      return badRequest("clubId, from, and to are required");
    }

    const bookings = await db.booking.findMany({
      where: {
        clubId,
        startAt: {
          gte: new Date(from),
          lte: new Date(to)
        }
      },
      include: {
        member: { select: { id: true, name: true, email: true } },
        court: { select: { id: true, name: true } }
      },
      orderBy: { startAt: "asc" }
    });

    return ok({ bookings });
  } catch (error) {
    return serverError("Unable to fetch bookings", String(error));
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { clubId, courtId, startAt, durationMinutes, reason } = body as {
      clubId?: string;
      courtId?: string;
      startAt?: string;
      durationMinutes?: number;
      reason?: string;
    };

    if (!clubId || !courtId || !startAt || !durationMinutes) {
      return badRequest("clubId, courtId, startAt, durationMinutes are required");
    }

    const start = new Date(startAt);
    const end = new Date(start.getTime() + durationMinutes * 60 * 1000);

    const block = await db.booking.create({
      data: {
        clubId,
        courtId,
        memberId: (
          await db.member.findFirstOrThrow({ where: { clubId, role: "admin" }, select: { id: true } })
        ).id,
        date: new Date(start.toISOString().slice(0, 10)),
        startAt: start,
        endAt: end,
        durationMinutes,
        status: "blocked",
        createdByRole: "admin",
        cancellationReason: reason ?? "Admin blocked"
      }
    });

    return ok({ booking: block });
  } catch (error) {
    return serverError("Unable to block slot", String(error));
  }
}
