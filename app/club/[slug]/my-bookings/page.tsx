"use client";

import { FormEvent, useState } from "react";
import { CalendarDays } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { StatusBadge } from "@/components/ui/Badge";
import { EmptyState } from "@/components/ui/EmptyState";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export default function MyBookingsPage({ params }: { params: { slug: string } }) {
  const [memberId, setMemberId] = useState("");
  const [rows, setRows] = useState<Array<{ id: string; startAt: string; status: string }>>([]);
  const [message, setMessage] = useState<string | null>(null);

  async function loadBookings(e: FormEvent) {
    e.preventDefault();
    const res = await fetch(`/api/club/${params.slug}/my-bookings?memberId=${memberId}`);
    const data = await res.json();
    if (!res.ok) {
      setMessage(data.error ?? "Failed to load");
      return;
    }
    setRows(data.bookings);
    setMessage(null);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://playcourt.io" },
          { name: "Club", url: `https://playcourt.io/club/${params.slug}` },
          { name: "My Bookings", url: `https://playcourt.io/club/${params.slug}/my-bookings` },
        ]}
      />
      <header className="sticky top-0 z-30 border-b border-slate-200/50 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex h-14 max-w-3xl items-center px-6">
          <h1 className="text-lg font-semibold text-slate-900">My Bookings</h1>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-8 space-y-6">
        <Card>
          <form onSubmit={loadBookings} className="flex gap-2">
            <Input
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
              placeholder="Member ID"
            />
            <Button type="submit">Load</Button>
          </form>
        </Card>

        {message && (
          <Card className="border-error/20 bg-error-light p-4">
            <p className="text-sm text-red-800">{message}</p>
          </Card>
        )}

        {rows.length > 0 ? (
          <div className="space-y-3">
            {rows.map((r) => (
              <Card key={r.id} className="flex items-center justify-between p-5">
                <div>
                  <p className="font-medium text-slate-900">
                    {new Date(r.startAt).toLocaleDateString([], {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                      hour: "numeric",
                      minute: "2-digit"
                    })}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">ID: {r.id}</p>
                </div>
                <StatusBadge status={r.status} />
              </Card>
            ))}
          </div>
        ) : !message ? (
          <EmptyState
            icon={<CalendarDays className="h-12 w-12" />}
            title="No bookings yet"
            description="Enter your Member ID above to view your bookings."
          />
        ) : null}
      </main>
    </div>
  );
}
