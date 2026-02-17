import { db } from "@/lib/db";
import { badRequest, ok, serverError } from "@/lib/http";
import { z } from "zod";

const rowSchema = z.object({
  dayOfWeek: z.number().int().min(0).max(6),
  openTime: z.string(),
  closeTime: z.string(),
  isClosed: z.boolean().default(false)
});

const schema = z.object({
  hours: z.array(rowSchema).length(7)
});

export async function GET(
  _req: Request,
  { params }: { params: { clubId: string } }
) {
  try {
    const hours = await db.operatingHour.findMany({
      where: { clubId: params.clubId },
      orderBy: { dayOfWeek: "asc" }
    });

    return ok({ hours });
  } catch (error) {
    return serverError("Unable to load operating hours", String(error));
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { clubId: string } }
) {
  try {
    const { hours } = schema.parse(await req.json());

    await db.$transaction([
      db.operatingHour.deleteMany({ where: { clubId: params.clubId } }),
      db.operatingHour.createMany({
        data: hours.map((h) => ({
          clubId: params.clubId,
          dayOfWeek: h.dayOfWeek,
          openTime: h.openTime,
          closeTime: h.closeTime,
          isClosed: h.isClosed
        }))
      })
    ]);

    return ok({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return badRequest("Invalid hours payload", error.flatten());
    }
    return serverError("Unable to save operating hours", String(error));
  }
}
