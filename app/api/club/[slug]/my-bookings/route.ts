import { db } from "@/lib/db";
import { badRequest, notFound, ok, serverError } from "@/lib/http";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { searchParams } = new URL(req.url);
    const memberId = searchParams.get("memberId");

    if (!memberId) {
      return badRequest("memberId query param is required");
    }

    const club = await db.club.findUnique({ where: { slug: params.slug } });
    if (!club) {
      return notFound("Club not found");
    }

    const bookings = await db.booking.findMany({
      where: {
        clubId: club.id,
        memberId
      },
      orderBy: { startAt: "desc" },
      select: {
        id: true,
        startAt: true,
        endAt: true,
        status: true,
        durationMinutes: true,
        court: { select: { name: true } }
      }
    });

    return ok({
      bookings: bookings.map((b) => ({
        id: b.id,
        startAt: b.startAt.toISOString(),
        endAt: b.endAt.toISOString(),
        status: b.status,
        durationMinutes: b.durationMinutes,
        courtName: b.court.name
      }))
    });
  } catch (error) {
    return serverError("Unable to fetch my bookings", String(error));
  }
}
