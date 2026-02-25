"use client";

import { FormEvent, useState } from "react";
import { BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { EmptyState } from "@/components/ui/EmptyState";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export default function AdminAnalyticsPage() {
  const [clubId, setClubId] = useState("");
  const [data, setData] = useState<null | {
    thisWeek: number;
    lastWeek: number;
    popularHours: Array<{ hour: number; count: number }>;
  }>(null);

  async function load(e: FormEvent) {
    e.preventDefault();
    const res = await fetch(`/api/admin/analytics?clubId=${clubId}`);
    const body = await res.json();
    if (res.ok) setData(body);
  }

  const maxCount = data ? Math.max(...data.popularHours.map((h) => h.count), 1) : 1;

  return (
    <div className="max-w-4xl">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://playcourt.io" },
          { name: "Admin", url: "https://playcourt.io/admin" },
          { name: "Analytics", url: "https://playcourt.io/admin/analytics" },
        ]}
      />
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-slate-900">Analytics</h1>
        <p className="mt-1 text-sm text-slate-500">Booking trends and popular hours.</p>
      </div>

      <Card className="mb-6">
        <form onSubmit={load} className="flex gap-3">
          <div className="flex-1">
            <Label htmlFor="a-club-id">Club ID</Label>
            <Input id="a-club-id" className="mt-1.5" placeholder="Club ID" value={clubId} onChange={(e) => setClubId(e.target.value)} />
          </div>
          <div className="flex items-end">
            <Button type="submit">Load</Button>
          </div>
        </form>
      </Card>

      {data ? (
        <>
          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            <Card className="p-5">
              <p className="text-sm text-slate-500">This Week</p>
              <p className="mt-1 text-3xl font-semibold text-slate-900">{data.thisWeek}</p>
              <p className="mt-1 text-xs text-slate-400">bookings</p>
            </Card>
            <Card className="p-5">
              <p className="text-sm text-slate-500">Last Week</p>
              <p className="mt-1 text-3xl font-semibold text-slate-900">{data.lastWeek}</p>
              <p className="mt-1 text-xs text-slate-400">bookings</p>
            </Card>
          </div>

          <Card>
            <h2 className="mb-4 text-base font-semibold text-slate-900">Popular Time Bands</h2>
            <div className="space-y-2">
              {data.popularHours.map((h) => (
                <div key={h.hour} className="flex items-center gap-3">
                  <span className="w-14 text-sm font-medium text-slate-600">
                    {String(h.hour).padStart(2, "0")}:00
                  </span>
                  <div className="flex-1">
                    <div
                      className="h-6 rounded bg-brand-100 transition-all"
                      style={{ width: `${(h.count / maxCount) * 100}%`, minWidth: "4px" }}
                    >
                      <div className="flex h-full items-center pl-2">
                        <span className="text-xs font-medium text-brand-700">{h.count}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </>
      ) : (
        <EmptyState
          icon={<BarChart3 className="h-12 w-12" />}
          title="No data loaded"
          description="Enter a Club ID to view analytics."
        />
      )}
    </div>
  );
}
