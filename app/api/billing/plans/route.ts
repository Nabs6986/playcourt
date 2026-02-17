import { db } from "@/lib/db";
import { badRequest, created, ok, serverError } from "@/lib/http";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  amountCents: z.number().int().nonnegative(),
  currency: z.string().default("usd"),
  interval: z.string().default("month")
});

export async function GET() {
  try {
    const plans = await db.billingPlan.findMany({ where: { isActive: true }, orderBy: { amountCents: "asc" } });
    return ok({ plans });
  } catch (error) {
    return serverError("Unable to list plans", String(error));
  }
}

export async function POST(req: Request) {
  try {
    const payload = schema.parse(await req.json());
    const plan = await db.billingPlan.create({ data: payload });
    return created({ plan });
  } catch (error) {
    if (error instanceof z.ZodError) return badRequest("Invalid payload", error.flatten());
    return serverError("Unable to create plan", String(error));
  }
}
