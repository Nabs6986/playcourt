import { z } from "zod";

export const bookingCreateSchema = z.object({
  courtId: z.string().min(1),
  memberId: z.string().min(1).optional(),
  memberEmail: z.string().email().optional(),
  startAt: z.string().datetime().optional(),
  timeText: z.string().min(3).optional(),
  durationMinutes: z.union([z.literal(60), z.literal(90)]),
  guestName: z.string().min(1).optional(),
  sponsoringMemberId: z.string().optional()
}).refine((v) => Boolean(v.memberId || v.memberEmail), {
  message: "memberId or memberEmail is required"
}).refine((v) => Boolean(v.startAt || v.timeText), {
  message: "startAt or timeText is required"
});

export const bookingUpdateSchema = z.object({
  startAt: z.string().datetime().optional(),
  durationMinutes: z.union([z.literal(60), z.literal(90)]).optional(),
  status: z.enum(["confirmed", "cancelled"]).optional(),
  cancellationReason: z.string().optional()
});
