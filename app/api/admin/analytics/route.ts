import { db } from "@/lib/db";
import { badRequest, ok, serverError } from "@/lib/http";

function startOfWeek(input: Date) {
  const date = new Date(input);
  const day = date.getUTCDay();
  const diff = day === 0 ? -6 : 1 - day;
  date.setUTCDate(date.getUTCDate() + diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const clubId = searchParams.get("clubId");

    if (!clubId) return badRequest("clubId is required");

    const now = new Date();
    const thisWeekStart = startOfWeek(now);
    const nextWeekStart = new Date(thisWeekStart.getTime() + 7 * 24 * 60 * 60 * 1000);
    const lastWeekStart = new Date(thisWeekStart.getTime() - 7 * 24 * 60 * 60 * 1000);

    const [thisWeek, lastWeek, bookings] = await Promise.all([
      db.booking.count({
        where: {
          clubId,
          status: "confirmed",
          startAt: { gte: thisWeekStart, lt: nextWeekStart }
        }
      }),
      db.booking.count({
        where: {
          clubId,
          status: "confirmed",
          startAt: { gte: lastWeekStart, lt: thisWeekStart }
        }
      }),
      db.booking.findMany({
        where: {
          clubId,
          status: "confirmed",
          startAt: { gte: thisWeekStart, lt: nextWeekStart }
        },
        select: { startAt: true }
      })
    ]);

    const map = new Map<number, number>();
    for (const booking of bookings) {
      const hour = booking.startAt.getUTCHours();
      map.set(hour, (map.get(hour) ?? 0) + 1);
    }

    const popularHours = [...map.entries()]
      .map(([hour, count]) => ({ hour, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    return ok({ thisWeek, lastWeek, popularHours });
  } catch (error) {
    return serverError("Unable to load analytics", String(error));
  }
}
