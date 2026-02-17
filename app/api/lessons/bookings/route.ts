import { db } from "@/lib/db";
import { badRequest, created, serverError } from "@/lib/http";
import { z } from "zod";

const schema = z.object({
  clubId: z.string(),
  memberId: z.string(),
  lessonSlotId: z.string(),
  notes: z.string().optional()
});

export async function POST(req: Request) {
  try {
    const payload = schema.parse(await req.json());

    const booking = await db.$transaction(async (tx) => {
      const slot = await tx.lessonSlot.findFirst({
        where: {
          id: payload.lessonSlotId,
          clubId: payload.clubId,
          isBooked: false
        }
      });

      if (!slot) {
        throw new Error("Lesson slot not available");
      }

      const lessonBooking = await tx.lessonBooking.create({
        data: {
          clubId: payload.clubId,
          memberId: payload.memberId,
          proProfileId: slot.proProfileId,
          lessonTypeId: slot.lessonTypeId,
          lessonSlotId: slot.id,
          startAt: slot.startAt,
          endAt: slot.endAt,
          status: "confirmed",
          notes: payload.notes
        }
      });

      await tx.lessonSlot.update({ where: { id: slot.id }, data: { isBooked: true } });

      return lessonBooking;
    });

    return created({ booking });
  } catch (error) {
    if (error instanceof z.ZodError) return badRequest("Invalid payload", error.flatten());
    if (error instanceof Error) return badRequest(error.message);
    return serverError("Unable to create lesson booking", String(error));
  }
}
