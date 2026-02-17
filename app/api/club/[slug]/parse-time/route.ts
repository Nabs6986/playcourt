import { db } from "@/lib/db";
import { badRequest, notFound, ok, serverError } from "@/lib/http";
import { parseNaturalTime } from "@/lib/booking/parse-time";
import { z } from "zod";

const schema = z.object({
  timeText: z.string().min(3)
});

export async function POST(
  req: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { timeText } = schema.parse(await req.json());
    const club = await db.club.findUnique({ where: { slug: params.slug } });
    if (!club) return notFound("Club not found");

    const parsed = parseNaturalTime(timeText, club.timezone);
    if (!parsed.ok) {
      return badRequest(parsed.error, parsed.suggestions ?? []);
    }

    return ok(parsed);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return badRequest("Invalid payload", error.flatten());
    }
    return serverError("Unable to parse time", String(error));
  }
}
