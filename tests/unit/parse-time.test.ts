import { describe, expect, it } from "vitest";
import { parseNaturalTime } from "@/lib/booking/parse-time";

describe("parseNaturalTime", () => {
  it("parses tomorrow at 6pm", () => {
    const parsed = parseNaturalTime("tomorrow at 6pm", "America/New_York");
    expect(parsed.ok).toBe(true);
    if (parsed.ok) {
      expect(parsed.startAtUtc).toMatch(/T(22|23):00:00\.000Z|T(23|22):00:00\.000Z/);
    }
  });

  it("rejects incomplete input", () => {
    const parsed = parseNaturalTime("tomorrow", "America/New_York");
    expect(parsed.ok).toBe(false);
  });
});
