import { db } from "@/lib/db";
import { notFound, ok, serverError } from "@/lib/http";

export async function GET(
  _req: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const club = await db.club.findUnique({
      where: { slug: params.slug },
      include: {
        hours: true,
        media: { orderBy: { sortOrder: "asc" } }
      }
    });

    if (!club) {
      return notFound("Club not found");
    }

    return ok({
      club: {
        name: club.name,
        slug: club.slug,
        address: club.address,
        phone: club.phone,
        timezone: club.timezone,
        logoUrl: club.logoUrl,
        hours: club.hours,
        media: club.media
      }
    });
  } catch (error) {
    return serverError("Unable to fetch profile", String(error));
  }
}
