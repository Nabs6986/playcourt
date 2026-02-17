import { db } from "@/lib/db";
import { ok, serverError, unauthorized } from "@/lib/http";
import { reminderTemplate, sendEmail } from "@/lib/email/service";

function isAuthorized(req: Request) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "");
  return token && process.env.CRON_SECRET && token === process.env.CRON_SECRET;
}

export async function POST(req: Request) {
  try {
    if (!isAuthorized(req)) {
      return unauthorized();
    }

    const now = new Date();
    const min = new Date(now.getTime() + (24 * 60 - 30) * 60 * 1000);
    const max = new Date(now.getTime() + (24 * 60 + 30) * 60 * 1000);

    const bookings = await db.booking.findMany({
      where: {
        status: "confirmed",
        reminder24hSentAt: null,
        startAt: {
          gte: min,
          lte: max
        }
      },
      include: {
        member: true,
        club: true
      }
    });

    let sent = 0;
    for (const booking of bookings) {
      const email = await sendEmail({
        to: booking.member.email,
        subject: `Reminder: booking tomorrow at ${booking.club.name}`,
        html: reminderTemplate(booking.club.name, booking.startAt.toISOString())
      });

      await db.$transaction([
        db.booking.update({
          where: { id: booking.id },
          data: { reminder24hSentAt: new Date() }
        }),
        db.bookingNotification.create({
          data: {
            bookingId: booking.id,
            type: "reminder_24h",
            providerMessageId: email.id ?? undefined
          }
        })
      ]);

      sent += 1;
    }

    return ok({ scanned: bookings.length, sent });
  } catch (error) {
    return serverError("Unable to send reminders", String(error));
  }
}
