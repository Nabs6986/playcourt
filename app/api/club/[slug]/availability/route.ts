import { db } from "@/lib/db";
import { getAvailableSlots } from "@/lib/booking/availability";
import { badRequest, notFound, ok, serverError } from "@/lib/http";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { searchParams } = new URL(req.url);
    const date = searchParams.get("date");

    if (!date) {
      return badRequest("date query param is required");
    }

    const club = await db.club.findUnique({
      where: { slug: params.slug },
      include: {
        settings: true,
        hours: true,
        courts: { where: { isActive: true }, orderBy: { sortOrder: "asc" } }
      }
    });

    if (!club || !club.settings) {
      return notFound("Club not found");
    }

    const dayOfWeek = new Date(`${date}T00:00:00Z`).getUTCDay();
    const hours = club.hours.find((h) => h.dayOfWeek === dayOfWeek);

    if (!hours || hours.isClosed) {
      return ok({ date, slotsByCourt: [] });
    }

    const dayStart = new Date(`${date}T00:00:00.000Z`);
    const dayEnd = new Date(`${date}T23:59:59.999Z`);

    const bookings = await db.booking.findMany({
      where: {
        clubId: club.id,
        status: { in: ["confirmed", "blocked"] },
        startAt: {
          gte: dayStart,
          lte: dayEnd
        }
      },
      select: {
        courtId: true,
        startAt: true,
        endAt: true
      }
    });

    const slotsByCourt = club.courts.map((court) => ({
      courtId: court.id,
      courtName: court.name,
      slots: getAvailableSlots({
        openTime: hours.openTime,
        closeTime: hours.closeTime,
        slotDurationMinutes: 30,
        dayISO: date,
        bookedRanges: bookings
          .filter((b) => b.courtId === court.id)
          .map((b) => ({ startAt: b.startAt.toISOString(), endAt: b.endAt.toISOString() }))
      })
    }));

    return ok({ date, slotsByCourt });
  } catch (error) {
    return serverError("Could not compute availability", String(error));
  }
}
