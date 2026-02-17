import type { ClubSettings, Prisma } from "@prisma/client";

export function minutesToHours(minutes: number) {
  return minutes / 60;
}

export function validateAdvanceWindow(startAt: Date, settings: ClubSettings) {
  const now = new Date();
  const maxAllowed = new Date(now.getTime() + settings.maxAdvanceDays * 24 * 60 * 60 * 1000);
  if (startAt > maxAllowed) {
    throw new Error(`Booking exceeds max advance window (${settings.maxAdvanceDays} days).`);
  }
}

export function validateDuration(durationMinutes: number, settings: ClubSettings) {
  const allowed = Array.isArray(settings.bookingDurations)
    ? (settings.bookingDurations as Prisma.JsonArray).map((x) => Number(x))
    : [60, 90];

  if (!allowed.includes(durationMinutes)) {
    throw new Error("Duration is not allowed for this club.");
  }
}

export function validateCancellationWindow(
  bookingStart: Date,
  settings: ClubSettings,
  now = new Date()
) {
  const cutoff = new Date(now.getTime() + settings.cancellationWindowHours * 60 * 60 * 1000);
  if (bookingStart < cutoff) {
    throw new Error(
      `Cancellations require at least ${settings.cancellationWindowHours} hours notice.`
    );
  }
}

export function validateMemberDailyHours(
  minutesAlreadyBooked: number,
  requestedDuration: number,
  settings: ClubSettings
) {
  const totalHours = minutesToHours(minutesAlreadyBooked + requestedDuration);
  if (totalHours > settings.maxHoursPerMemberPerDay) {
    throw new Error("Daily booking limit exceeded for member.");
  }
}
