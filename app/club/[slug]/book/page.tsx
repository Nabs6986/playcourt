"use client";

import { FormEvent, useMemo, useState } from "react";
import { Search, Clock, CalendarDays } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { EmptyState } from "@/components/ui/EmptyState";

type Slot = { startAt: string; endAt: string };
type SlotByCourt = { courtId: string; courtName: string; slots: Slot[] };

export default function BookCourtPage({ params }: { params: { slug: string } }) {
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const [date, setDate] = useState(today);
  const [memberEmail, setMemberEmail] = useState("");
  const [durationMinutes, setDurationMinutes] = useState(60);
  const [timeText, setTimeText] = useState("tomorrow at 6pm");
  const [slotsByCourt, setSlotsByCourt] = useState<SlotByCourt[]>([]);
  const [selectedCourt, setSelectedCourt] = useState("");
  const [selectedStartAt, setSelectedStartAt] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function loadAvailability() {
    const res = await fetch(`/api/club/${params.slug}/availability?date=${date}`);
    const data = await res.json();
    if (!res.ok) {
      setMessage(data.error ?? "Could not load availability");
      return;
    }
    setSlotsByCourt(data.slotsByCourt ?? []);
    setMessage(null);
  }

  async function parseTimeText(e: FormEvent) {
    e.preventDefault();
    const res = await fetch(`/api/club/${params.slug}/parse-time`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ timeText })
    });
    const data = await res.json();
    if (!res.ok) {
      setMessage(data.error ?? "Could not parse time");
      return;
    }
    setSelectedStartAt(data.startAtUtc);
    setDate(data.startAtUtc.slice(0, 10));
    setMessage(`Parsed: ${data.localLabel}`);
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setMessage(null);
    setIsLoading(true);

    const res = await fetch(`/api/club/${params.slug}/bookings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        courtId: selectedCourt,
        memberEmail,
        startAt: selectedStartAt || undefined,
        timeText: selectedStartAt ? undefined : timeText,
        durationMinutes
      })
    });

    const data = await res.json();
    setIsLoading(false);
    if (!res.ok) {
      setMessage(data.error ?? "Could not create booking");
      return;
    }

    setMessage(`Booked successfully: ${data.booking.id}`);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-slate-200/50 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex h-14 max-w-3xl items-center px-6">
          <h1 className="text-lg font-semibold text-slate-900">Book a Court</h1>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-8 space-y-6">
        {/* Natural Time Input */}
        <Card>
          <form onSubmit={parseTimeText}>
            <div className="flex items-center gap-2 mb-4">
              <Search className="h-5 w-5 text-brand-500" />
              <Label className="text-base font-semibold text-slate-900">Quick Search</Label>
            </div>
            <p className="text-sm text-slate-500 mb-3">Type a time in natural language</p>
            <div className="flex gap-2">
              <Input
                value={timeText}
                onChange={(e) => setTimeText(e.target.value)}
                placeholder="tomorrow at 6pm"
              />
              <Button type="submit" variant="secondary">Parse</Button>
            </div>
          </form>
        </Card>

        {/* Date Picker */}
        <Card>
          <div className="flex items-center gap-2 mb-4">
            <CalendarDays className="h-5 w-5 text-brand-500" />
            <Label className="text-base font-semibold text-slate-900">Browse by Date</Label>
          </div>
          <div className="flex gap-2">
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="max-w-[200px]"
            />
            <Button variant="secondary" onClick={loadAvailability} type="button">
              Check Slots
            </Button>
          </div>

          {/* Time Slots */}
          <div className="mt-6 space-y-4">
            {slotsByCourt.map((court) => (
              <div key={court.courtId}>
                <p className="text-sm font-medium text-slate-700 mb-2">{court.courtName}</p>
                <div className="flex flex-wrap gap-2">
                  {court.slots.slice(0, 12).map((slot) => {
                    const isSelected = selectedCourt === court.courtId && selectedStartAt === slot.startAt;
                    return (
                      <button
                        key={slot.startAt}
                        type="button"
                        className={`h-10 rounded-lg px-3 text-sm font-medium transition-all ${
                          isSelected
                            ? "bg-brand-500 text-white ring-2 ring-brand-500 ring-offset-2"
                            : "border border-slate-200 text-slate-700 hover:border-brand-500 hover:bg-brand-50"
                        }`}
                        onClick={() => {
                          setSelectedCourt(court.courtId);
                          setSelectedStartAt(slot.startAt);
                        }}
                      >
                        {new Date(slot.startAt).toLocaleTimeString([], {
                          hour: "numeric",
                          minute: "2-digit"
                        })}
                      </button>
                    );
                  })}
                  {court.slots.length === 0 && (
                    <span className="text-sm text-slate-400">No available slots</span>
                  )}
                </div>
              </div>
            ))}
            {slotsByCourt.length === 0 && (
              <EmptyState
                icon={<Clock className="h-10 w-10" />}
                title="No slots loaded"
                description="Select a date and click Check Slots to see availability."
                className="py-6"
              />
            )}
          </div>
        </Card>

        {/* Booking Form */}
        <Card>
          <form onSubmit={onSubmit} className="space-y-4">
            <h2 className="text-base font-semibold text-slate-900">Confirm Your Booking</h2>

            <div>
              <Label htmlFor="email">Member Email</Label>
              <Input
                id="email"
                className="mt-1.5"
                value={memberEmail}
                onChange={(e) => setMemberEmail(e.target.value)}
                placeholder="member@example.com"
              />
            </div>

            <div>
              <Label htmlFor="court-id">Selected Court ID</Label>
              <Input
                id="court-id"
                className="mt-1.5"
                value={selectedCourt}
                onChange={(e) => setSelectedCourt(e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="start-time">Selected Start (ISO)</Label>
              <Input
                id="start-time"
                className="mt-1.5"
                value={selectedStartAt}
                onChange={(e) => setSelectedStartAt(e.target.value)}
                placeholder={`${date}T18:00:00.000Z`}
              />
            </div>

            <div>
              <Label htmlFor="duration">Duration</Label>
              <select
                id="duration"
                className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                value={durationMinutes}
                onChange={(e) => setDurationMinutes(Number(e.target.value))}
              >
                <option value={60}>60 minutes</option>
                <option value={90}>90 minutes</option>
              </select>
            </div>

            <Button type="submit" size="lg" className="w-full" isLoading={isLoading}>
              Confirm Booking
            </Button>

            {message && (
              <div className={`rounded-lg p-3 text-sm ${
                message.startsWith("Booked")
                  ? "bg-success-light text-green-800"
                  : message.startsWith("Parsed")
                  ? "bg-info-light text-blue-800"
                  : "bg-error-light text-red-800"
              }`}>
                {message}
              </div>
            )}
          </form>
        </Card>
      </main>
    </div>
  );
}
