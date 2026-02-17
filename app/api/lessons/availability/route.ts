import { db } from "@/lib/db";
import { badRequest, ok, serverError } from "@/lib/http";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const clubId = searchParams.get("clubId");
    const from = searchParams.get("from");
    const to = searchParams.get("to");

    if (!clubId || !from || !to) {
      return badRequest("clubId, from, to are required");
    }

    const slots = await db.lessonSlot.findMany({
      where: {
        clubId,
        isBooked: false,
        startAt: { gte: new Date(from), lte: new Date(to) }
      },
      include: {
        lessonType: true,
        proProfile: { include: { member: { select: { id: true, name: true } } } }
      },
      orderBy: { startAt: "asc" }
    });

    return ok({ slots });
  } catch (error) {
    return serverError("Unable to load lesson availability", String(error));
  }
}
