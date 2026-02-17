import { db } from "@/lib/db";
import { badRequest, created, ok, serverError } from "@/lib/http";
import { z } from "zod";

const createSchema = z.object({
  clubId: z.string().min(1),
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  role: z.enum(["admin", "member"]).default("member")
});

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const clubId = searchParams.get("clubId");
    const q = searchParams.get("q")?.trim();

    if (!clubId) {
      return badRequest("clubId is required");
    }

    const members = await db.member.findMany({
      where: {
        clubId,
        ...(q
          ? {
              OR: [
                { name: { contains: q, mode: "insensitive" } },
                { email: { contains: q, mode: "insensitive" } },
                { phone: { contains: q, mode: "insensitive" } }
              ]
            }
          : {})
      },
      orderBy: [{ role: "asc" }, { name: "asc" }]
    });

    return ok({ members });
  } catch (error) {
    return serverError("Unable to list members", String(error));
  }
}

export async function POST(req: Request) {
  try {
    const payload = createSchema.parse(await req.json());
    const member = await db.member.create({
      data: {
        clubId: payload.clubId,
        name: payload.name,
        email: payload.email.toLowerCase(),
        phone: payload.phone,
        role: payload.role
      }
    });

    return created({ member });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return badRequest("Invalid payload", error.flatten());
    }
    return serverError("Unable to create member", String(error));
  }
}
