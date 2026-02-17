import { describe, expect, it } from "vitest";
import { getAvailableSlots } from "@/lib/booking/availability";

describe("availability", () => {
  it("returns slots excluding overlaps", () => {
    const slots = getAvailableSlots({
      dayISO: "2026-02-17",
      openTime: "08:00",
      closeTime: "10:00",
      slotDurationMinutes: 30,
      bookedRanges: [
        {
          startAt: "2026-02-17T08:30:00.000Z",
          endAt: "2026-02-17T09:00:00.000Z"
        }
      ]
    });

    expect(slots).toEqual([
      {
        startAt: "2026-02-17T08:00:00.000Z",
        endAt: "2026-02-17T08:30:00.000Z"
      },
      {
        startAt: "2026-02-17T09:00:00.000Z",
        endAt: "2026-02-17T09:30:00.000Z"
      },
      {
        startAt: "2026-02-17T09:30:00.000Z",
        endAt: "2026-02-17T10:00:00.000Z"
      }
    ]);
  });
});
