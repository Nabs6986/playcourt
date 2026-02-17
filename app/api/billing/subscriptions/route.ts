import { db } from "@/lib/db";
import { badRequest, created, ok, serverError } from "@/lib/http";
import { z } from "zod";

const schema = z.object({
  clubId: z.string(),
  memberId: z.string(),
  planId: z.string(),
  paymentMethodId: z.string().optional()
});

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const clubId = searchParams.get("clubId");
    if (!clubId) return badRequest("clubId is required");

    const subscriptions = await db.subscription.findMany({
      where: { clubId },
      include: { plan: true, member: { select: { id: true, name: true, email: true } } },
      orderBy: { createdAt: "desc" }
    });

    return ok({ subscriptions });
  } catch (error) {
    return serverError("Unable to list subscriptions", String(error));
  }
}

export async function POST(req: Request) {
  try {
    const payload = schema.parse(await req.json());
    const now = new Date();
    const end = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

    const subscription = await db.subscription.create({
      data: {
        clubId: payload.clubId,
        memberId: payload.memberId,
        planId: payload.planId,
        paymentMethodId: payload.paymentMethodId,
        status: "active",
        currentPeriodStart: now,
        currentPeriodEnd: end
      },
      include: { plan: true }
    });

    await db.invoice.create({
      data: {
        subscriptionId: subscription.id,
        amountCents: subscription.plan.amountCents,
        currency: subscription.plan.currency,
        status: "open",
        dueAt: end
      }
    });

    return created({ subscription });
  } catch (error) {
    if (error instanceof z.ZodError) return badRequest("Invalid payload", error.flatten());
    return serverError("Unable to create subscription", String(error));
  }
}
