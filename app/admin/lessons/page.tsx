"use client";

import { FormEvent, useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

export default function AdminLessonsPage() {
  const [clubId, setClubId] = useState("");
  const [from, setFrom] = useState(new Date().toISOString());
  const [to, setTo] = useState(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString());
  const [response, setResponse] = useState("");

  async function loadAvailability(e: FormEvent) {
    e.preventDefault();
    const res = await fetch(`/api/lessons/availability?clubId=${clubId}&from=${from}&to=${to}`);
    const data = await res.json();
    setResponse(JSON.stringify(data, null, 2));
  }

  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-slate-900">Lessons</h1>
        <p className="mt-1 text-sm text-slate-500">V2 scaffold for lesson scheduling and availability.</p>
      </div>

      <Card>
        <form onSubmit={loadAvailability} className="space-y-4">
          <div>
            <Label htmlFor="l-club-id">Club ID</Label>
            <Input id="l-club-id" className="mt-1.5" placeholder="Club ID" value={clubId} onChange={(e) => setClubId(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="l-from">From</Label>
            <Input id="l-from" className="mt-1.5" value={from} onChange={(e) => setFrom(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="l-to">To</Label>
            <Input id="l-to" className="mt-1.5" value={to} onChange={(e) => setTo(e.target.value)} />
          </div>
          <Button type="submit">Load Slots</Button>
        </form>
      </Card>

      {response ? <pre className="mt-6 rounded-xl bg-slate-900 p-4 text-xs text-slate-100 overflow-x-auto">{response}</pre> : null}
    </div>
  );
}
