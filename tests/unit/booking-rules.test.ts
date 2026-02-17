import { describe, expect, it } from "vitest";
import {
  validateAdvanceWindow,
  validateCancellationWindow,
  validateDuration,
  validateMemberDailyHours
} from "@/lib/booking/rules";

const settings = {
  clubId: "c1",
  maxAdvanceDays: 7,
  maxHoursPerMemberPerDay: 2,
  cancellationWindowHours: 12,
  allowGuestBooking: false,
  bookingDurations: [60, 90],
  createdAt: new Date(),
  updatedAt: new Date()
};

describe("booking rules", () => {
  it("allows valid duration", () => {
    expect(() => validateDuration(60, settings)).not.toThrow();
  });

  it("rejects invalid duration", () => {
    expect(() => validateDuration(120, settings)).toThrow();
  });

  it("rejects over-limit daily hours", () => {
    expect(() => validateMemberDailyHours(120, 60, settings)).toThrow();
  });

  it("rejects too-far advance booking", () => {
    const farFuture = new Date(Date.now() + 20 * 24 * 60 * 60 * 1000);
    expect(() => validateAdvanceWindow(farFuture, settings)).toThrow();
  });

  it("rejects cancellation within window", () => {
    const bookingStart = new Date(Date.now() + 2 * 60 * 60 * 1000);
    expect(() => validateCancellationWindow(bookingStart, settings)).toThrow();
  });
});
