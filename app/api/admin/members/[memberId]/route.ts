import { db } from "@/lib/db";
import { badRequest, ok, serverError } from "@/lib/http";
import { z } from "zod";

const updateSchema = z.object({
  name: z.string().min(1).optional(),
  email: z.string().email().optional(),
  phone: z.string().nullable().optional(),
  role: z.enum(["admin", "member"]).optional(),
  status: z.enum(["active", "inactive"]).optional()
});

export async function PUT(
  req: Request,
  { params }: { params: { memberId: string } }
) {
  try {
    const payload = updateSchema.parse(await req.json());
    const member = await db.member.update({
      where: { id: params.memberId },
      data: {
        name: payload.name,
        email: payload.email?.toLowerCase(),
        phone: payload.phone,
        role: payload.role,
        status: payload.status
      }
    });

    return ok({ member });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return badRequest("Invalid payload", error.flatten());
    }
    return serverError("Unable to update member", String(error));
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: { memberId: string } }
) {
  try {
    const member = await db.member.update({
      where: { id: params.memberId },
      data: { status: "inactive" }
    });
    return ok({ member });
  } catch (error) {
    return serverError("Unable to remove member", String(error));
  }
}
