import { db } from "@/lib/db";
import { badRequest, created, serverError } from "@/lib/http";
import { z } from "zod";

const createClubSchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2).regex(/^[a-z0-9-]+$/),
  address: z.string().optional(),
  phone: z.string().optional(),
  timezone: z.string().default("America/New_York")
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const input = createClubSchema.parse(body);

    const club = await db.club.create({
      data: {
        name: input.name,
        slug: input.slug,
        address: input.address,
        phone: input.phone,
        timezone: input.timezone,
        settings: {
          create: {
            maxAdvanceDays: 7,
            maxHoursPerMemberPerDay: 2,
            cancellationWindowHours: 12,
            allowGuestBooking: false,
            bookingDurations: [60, 90]
          }
        }
      }
    });

    return created({ club });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return badRequest("Invalid club payload", error.flatten());
    }
    return serverError("Unable to create club", String(error));
  }
}
