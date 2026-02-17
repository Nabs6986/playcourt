import { db } from "@/lib/db";
import { badRequest, ok, serverError } from "@/lib/http";
import { z } from "zod";

const schema = z.object({
  maxAdvanceDays: z.number().int().positive().optional(),
  maxHoursPerMemberPerDay: z.number().int().positive().optional(),
  cancellationWindowHours: z.number().int().nonnegative().optional(),
  allowGuestBooking: z.boolean().optional(),
  bookingDurations: z.array(z.union([z.literal(60), z.literal(90)])).optional(),
  clubInfo: z
    .object({
      name: z.string().min(1).optional(),
      address: z.string().optional(),
      phone: z.string().optional(),
      timezone: z.string().optional()
    })
    .optional()
});

export async function PUT(
  req: Request,
  { params }: { params: { clubId: string } }
) {
  try {
    const input = schema.parse(await req.json());

    const [settings, club] = await Promise.all([
      db.clubSettings.upsert({
        where: { clubId: params.clubId },
        update: {
          maxAdvanceDays: input.maxAdvanceDays,
          maxHoursPerMemberPerDay: input.maxHoursPerMemberPerDay,
          cancellationWindowHours: input.cancellationWindowHours,
          allowGuestBooking: input.allowGuestBooking,
          bookingDurations: input.bookingDurations
        },
        create: {
          clubId: params.clubId,
          maxAdvanceDays: input.maxAdvanceDays ?? 7,
          maxHoursPerMemberPerDay: input.maxHoursPerMemberPerDay ?? 2,
          cancellationWindowHours: input.cancellationWindowHours ?? 12,
          allowGuestBooking: input.allowGuestBooking ?? false,
          bookingDurations: input.bookingDurations ?? [60, 90]
        }
      }),
      db.club.update({
        where: { id: params.clubId },
        data: {
          name: input.clubInfo?.name,
          address: input.clubInfo?.address,
          phone: input.clubInfo?.phone,
          timezone: input.clubInfo?.timezone
        }
      })
    ]);

    return ok({ settings, club });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return badRequest("Invalid settings payload", error.flatten());
    }
    return serverError("Unable to update settings", String(error));
  }
}
