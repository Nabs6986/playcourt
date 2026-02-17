import { addMinutes, isBefore, parseISO } from "date-fns";

export type AvailabilityInput = {
  openTime: string;
  closeTime: string;
  slotDurationMinutes: number;
  bookedRanges: Array<{ startAt: string; endAt: string }>;
  dayISO: string;
};

function toDate(dayISO: string, hhmm: string) {
  return parseISO(`${dayISO}T${hhmm}:00.000Z`);
}

function overlaps(
  slotStart: Date,
  slotEnd: Date,
  bookedStart: Date,
  bookedEnd: Date
): boolean {
  return slotStart < bookedEnd && slotEnd > bookedStart;
}

export function getAvailableSlots(input: AvailabilityInput) {
  const open = toDate(input.dayISO, input.openTime);
  const close = toDate(input.dayISO, input.closeTime);
  const booked = input.bookedRanges.map((b) => ({
    start: parseISO(b.startAt),
    end: parseISO(b.endAt)
  }));

  const slots: Array<{ startAt: string; endAt: string }> = [];
  let cursor = open;

  while (isBefore(addMinutes(cursor, input.slotDurationMinutes), close) || addMinutes(cursor, input.slotDurationMinutes).getTime() === close.getTime()) {
    const end = addMinutes(cursor, input.slotDurationMinutes);
    const hasConflict = booked.some((range) => overlaps(cursor, end, range.start, range.end));
    if (!hasConflict) {
      slots.push({ startAt: cursor.toISOString(), endAt: end.toISOString() });
    }
    cursor = end;
  }

  return slots;
}
