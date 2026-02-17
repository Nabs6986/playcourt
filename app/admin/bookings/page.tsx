"use client";

import { FormEvent, useState } from "react";
import { CalendarDays } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { StatusBadge } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/EmptyState";

type BookingRow = {
  id: string;
  startAt: string;
  endAt: string;
  status: string;
  court: { id: string; name: string };
  member: { id: string; name: string; email: string };
};

export default function AdminBookingsPage() {
  const [clubId, setClubId] = useState("");
  const [from, setFrom] = useState("2026-02-17T00:00:00.000Z");
  const [to, setTo] = useState("2026-02-24T00:00:00.000Z");
  const [rows, setRows] = useState<BookingRow[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function loadBookings(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch(`/api/admin/bookings?clubId=${clubId}&from=${from}&to=${to}`);
    const data = await res.json();
    if (res.ok) setRows(data.bookings);
    setIsLoading(false);
  }

  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-slate-900">Bookings</h1>
        <p className="mt-1 text-sm text-slate-500">View and manage court reservations.</p>
      </div>

      <Card className="mb-6">
        <form onSubmit={loadBookings} className="grid gap-4 md:grid-cols-4">
          <div>
            <Label htmlFor="club-id">Club ID</Label>
            <Input id="club-id" className="mt-1.5" value={clubId} onChange={(e) => setClubId(e.target.value)} placeholder="Club ID" />
          </div>
          <div>
            <Label htmlFor="from">From</Label>
            <Input id="from" className="mt-1.5" value={from} onChange={(e) => setFrom(e.target.value)} placeholder="From ISO" />
          </div>
          <div>
            <Label htmlFor="to">To</Label>
            <Input id="to" className="mt-1.5" value={to} onChange={(e) => setTo(e.target.value)} placeholder="To ISO" />
          </div>
          <div className="flex items-end">
            <Button type="submit" className="w-full" isLoading={isLoading}>Load</Button>
          </div>
        </form>
      </Card>

      {rows.length > 0 ? (
        <Card className="overflow-hidden p-0">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-4 py-3 font-medium text-slate-500">Start</th>
                  <th className="px-4 py-3 font-medium text-slate-500">End</th>
                  <th className="px-4 py-3 font-medium text-slate-500">Court</th>
                  <th className="px-4 py-3 font-medium text-slate-500">Member</th>
                  <th className="px-4 py-3 font-medium text-slate-500">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rows.map((r) => (
                  <tr key={r.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 text-slate-900">{r.startAt}</td>
                    <td className="px-4 py-3 text-slate-600">{r.endAt}</td>
                    <td className="px-4 py-3 text-slate-600">{r.court.name}</td>
                    <td className="px-4 py-3 text-slate-900">{r.member.name}</td>
                    <td className="px-4 py-3"><StatusBadge status={r.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      ) : (
        <EmptyState
          icon={<CalendarDays className="h-12 w-12" />}
          title="No bookings loaded"
          description="Enter a Club ID and date range, then click Load to view bookings."
        />
      )}
    </div>
  );
}
