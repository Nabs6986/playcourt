import { DateTime } from "luxon";

const WEEKDAYS = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
] as const;

type ParseSuccess = {
  ok: true;
  startAtUtc: string;
  localLabel: string;
  confidence: "high" | "medium";
  warnings: string[];
};

type ParseFailure = {
  ok: false;
  error: string;
  suggestions?: string[];
};

export type ParseTimeResult = ParseSuccess | ParseFailure;

function normalizeTime(input: string) {
  const match12h = input.match(/\b(\d{1,2})(?::(\d{2}))?\s*(am|pm)\b/i);
  if (match12h) {
    let hour = Number(match12h[1]);
    const minute = Number(match12h[2] ?? "0");
    const meridiem = match12h[3].toLowerCase();

    if (hour < 1 || hour > 12 || minute > 59) return null;
    if (meridiem === "pm" && hour !== 12) hour += 12;
    if (meridiem === "am" && hour === 12) hour = 0;

    return { hour, minute, confidence: "high" as const };
  }

  const match24h = input.match(/\b([01]?\d|2[0-3]):([0-5]\d)\b/);
  if (match24h) {
    return { hour: Number(match24h[1]), minute: Number(match24h[2]), confidence: "high" as const };
  }

  const ambiguousHour = input.match(/\bat\s+(\d{1,2})\b/i);
  if (ambiguousHour) {
    const hour = Number(ambiguousHour[1]);
    if (hour >= 1 && hour <= 12) {
      return { hour, minute: 0, confidence: "medium" as const };
    }
  }

  return null;
}

function resolveDate(text: string, nowLocal: DateTime): DateTime | null {
  const lower = text.toLowerCase();

  if (lower.includes("today")) return nowLocal.startOf("day");
  if (lower.includes("tomorrow")) return nowLocal.plus({ days: 1 }).startOf("day");

  const weekdayIdx = WEEKDAYS.findIndex((d) => lower.includes(d));
  if (weekdayIdx >= 0) {
    const current = nowLocal.weekday % 7;
    const offset = (weekdayIdx - current + 7) % 7 || 7;
    return nowLocal.plus({ days: offset }).startOf("day");
  }

  const iso = lower.match(/\b(\d{4})-(\d{2})-(\d{2})\b/);
  if (iso) {
    return DateTime.fromObject(
      { year: Number(iso[1]), month: Number(iso[2]), day: Number(iso[3]) },
      { zone: nowLocal.zoneName ?? "UTC" }
    ).startOf("day");
  }

  return null;
}

export function parseNaturalTime(input: string, clubTimeZone: string): ParseTimeResult {
  const text = input.trim();
  if (!text) return { ok: false, error: "Time input is required." };

  const time = normalizeTime(text);
  if (!time) {
    return {
      ok: false,
      error: "Could not determine time from input.",
      suggestions: ["Include time like 'at 6pm' or '18:00'."]
    };
  }

  const nowLocal = DateTime.now().setZone(clubTimeZone);
  const targetDate = resolveDate(text, nowLocal);
  if (!targetDate || !targetDate.isValid) {
    return {
      ok: false,
      error: "Could not determine date from input.",
      suggestions: ["Use phrases like 'tomorrow at 6pm' or 'friday 18:00'."]
    };
  }

  const startLocal = targetDate.set({ hour: time.hour, minute: time.minute, second: 0, millisecond: 0 });
  if (!startLocal.isValid) {
    return {
      ok: false,
      error: "Could not resolve a valid local date/time.",
      suggestions: ["Try a specific time like 18:00."]
    };
  }

  const startUtc = startLocal.toUTC();

  return {
    ok: true,
    startAtUtc: startUtc.toISO({ suppressMilliseconds: false }) ?? startUtc.toISO() ?? "",
    localLabel: startLocal.toLocaleString(DateTime.DATETIME_FULL),
    confidence: time.confidence,
    warnings: time.confidence === "medium" ? ["Input time was ambiguous; verify before booking."] : []
  };
}
