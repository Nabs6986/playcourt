import { db } from "@/lib/db";
import { ok, serverError, unauthorized } from "@/lib/http";
import { sendEmail } from "@/lib/email/service";

function isAuthorized(req: Request) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "");
  return token && process.env.CRON_SECRET && token === process.env.CRON_SECRET;
}

export async function POST(req: Request) {
  try {
    if (!isAuthorized(req)) {
      return unauthorized();
    }

    const clubs = await db.club.findMany({ where: { isActive: true } });
    let sent = 0;

    for (const club of clubs) {
      const dayStart = new Date();
      dayStart.setHours(0, 0, 0, 0);
      const dayEnd = new Date(dayStart.getTime() + 24 * 60 * 60 * 1000);

      const [bookingCount, admins] = await Promise.all([
        db.booking.count({
          where: {
            clubId: club.id,
            startAt: { gte: dayStart, lt: dayEnd },
            status: "confirmed"
          }
        }),
        db.member.findMany({ where: { clubId: club.id, role: "admin", status: "active" } })
      ]);

      for (const admin of admins) {
        await sendEmail({
          to: admin.email,
          subject: `Daily booking summary for ${club.name}`,
          html: `<p>You have ${bookingCount} confirmed bookings today.</p>`
        });
        sent += 1;
      }
    }

    return ok({ clubs: clubs.length, sent });
  } catch (error) {
    return serverError("Unable to send daily digests", String(error));
  }
}
