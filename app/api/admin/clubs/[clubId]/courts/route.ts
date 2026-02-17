import { db } from "@/lib/db";
import { badRequest, created, serverError } from "@/lib/http";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  surfaceType: z.string().optional(),
  sortOrder: z.number().int().optional()
});

export async function POST(
  req: Request,
  { params }: { params: { clubId: string } }
) {
  try {
    const payload = schema.parse(await req.json());
    const court = await db.court.create({
      data: {
        clubId: params.clubId,
        name: payload.name,
        surfaceType: payload.surfaceType,
        sortOrder: payload.sortOrder ?? 0
      }
    });
    return created({ court });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return badRequest("Invalid court payload", error.flatten());
    }
    return serverError("Unable to create court", String(error));
  }
}
