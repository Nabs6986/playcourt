"use client";

import { FormEvent, useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

type HourRow = {
  dayOfWeek: number;
  openTime: string;
  closeTime: string;
  isClosed: boolean;
};

function defaultHours(): HourRow[] {
  return weekdays.map((_, i) => ({ dayOfWeek: i, openTime: "07:00", closeTime: "22:00", isClosed: false }));
}

export default function AdminSettingsPage() {
  const [clubId, setClubId] = useState("");
  const [maxAdvanceDays, setMaxAdvanceDays] = useState(7);
  const [maxHoursPerMemberPerDay, setMaxHoursPerMemberPerDay] = useState(2);
  const [cancellationWindowHours, setCancellationWindowHours] = useState(12);
  const [allowGuestBooking, setAllowGuestBooking] = useState(true);
  const [hours, setHours] = useState<HourRow[]>(useMemo(() => defaultHours(), []));
  const [response, setResponse] = useState("");

  async function loadHours() {
    const res = await fetch(`/api/admin/clubs/${clubId}/hours`);
    const data = await res.json();
    if (res.ok && data.hours?.length === 7) {
      setHours(data.hours);
    } else if (!res.ok) {
      setResponse(data.error ?? "Failed to load hours");
    }
  }

  async function saveSettings(e: FormEvent) {
    e.preventDefault();
    const settingsRes = await fetch(`/api/admin/clubs/${clubId}/settings`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        maxAdvanceDays,
        maxHoursPerMemberPerDay,
        cancellationWindowHours,
        allowGuestBooking,
        bookingDurations: [60, 90]
      })
    });

    const hoursRes = await fetch(`/api/admin/clubs/${clubId}/hours`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ hours })
    });

    const settingsData = await settingsRes.json();
    const hoursData = await hoursRes.json();
    setResponse(JSON.stringify({ settings: settingsData, hours: hoursData }, null, 2));
  }

  return (
    <div className="max-w-5xl">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://playcourt.io" },
          { name: "Admin", url: "https://playcourt.io/admin" },
          { name: "Settings", url: "https://playcourt.io/admin/settings" },
        ]}
      />
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-slate-900">Settings</h1>
        <p className="mt-1 text-sm text-slate-500">Configure booking rules and operating hours.</p>
      </div>

      <form onSubmit={saveSettings} className="space-y-6">
        <Card>
          <h2 className="mb-4 text-base font-semibold text-slate-900">Club</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="s-club-id">Club ID</Label>
              <Input id="s-club-id" className="mt-1.5" placeholder="Club ID" value={clubId} onChange={(e) => setClubId(e.target.value)} />
            </div>
            <div className="flex items-end">
              <Button type="button" variant="secondary" onClick={loadHours}>Load Hours</Button>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="mb-4 text-base font-semibold text-slate-900">Booking Rules</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <Label>Max Advance Days</Label>
              <Input className="mt-1.5" type="number" min={1} value={maxAdvanceDays} onChange={(e) => setMaxAdvanceDays(Number(e.target.value))} />
            </div>
            <div>
              <Label>Max Hours / Member / Day</Label>
              <Input className="mt-1.5" type="number" min={1} value={maxHoursPerMemberPerDay} onChange={(e) => setMaxHoursPerMemberPerDay(Number(e.target.value))} />
            </div>
            <div>
              <Label>Cancellation Window Hours</Label>
              <Input className="mt-1.5" type="number" min={0} value={cancellationWindowHours} onChange={(e) => setCancellationWindowHours(Number(e.target.value))} />
            </div>
          </div>
          <label className="mt-4 flex items-center gap-2 text-sm text-slate-700">
            <input type="checkbox" className="rounded border-slate-300" checked={allowGuestBooking} onChange={(e) => setAllowGuestBooking(e.target.checked)} />
            Allow Guest Booking
          </label>
        </Card>

        <Card>
          <h2 className="mb-4 text-base font-semibold text-slate-900">Operating Hours</h2>
          <div className="space-y-2">
            {hours.map((row, idx) => (
              <div key={row.dayOfWeek} className="grid items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 p-3 md:grid-cols-5">
                <span className="text-sm font-medium text-slate-700">{weekdays[row.dayOfWeek]}</span>
                <Input type="time" value={row.openTime} onChange={(e) => setHours((prev) => prev.map((h, i) => i === idx ? { ...h, openTime: e.target.value } : h))} />
                <Input type="time" value={row.closeTime} onChange={(e) => setHours((prev) => prev.map((h, i) => i === idx ? { ...h, closeTime: e.target.value } : h))} />
                <label className="flex items-center gap-2 text-sm text-slate-600">
                  <input type="checkbox" className="rounded border-slate-300" checked={row.isClosed} onChange={(e) => setHours((prev) => prev.map((h, i) => i === idx ? { ...h, isClosed: e.target.checked } : h))} />
                  Closed
                </label>
              </div>
            ))}
          </div>
        </Card>

        <Button type="submit" size="lg">Save Settings</Button>
      </form>

      {response ? <pre className="mt-6 rounded-xl bg-slate-900 p-4 text-xs text-slate-100 overflow-x-auto">{response}</pre> : null}
    </div>
  );
}
