"use client";

import { FormEvent, useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Textarea } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

export default function AdminBillingPage() {
  const [payload, setPayload] = useState('{"name":"Starter","amountCents":14900,"currency":"usd","interval":"month"}');
  const [plans, setPlans] = useState<string>("");

  async function createPlan(e: FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/billing/plans", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload
    });
    const data = await res.json();
    setPlans(JSON.stringify(data, null, 2));
  }

  async function loadPlans() {
    const res = await fetch("/api/billing/plans");
    const data = await res.json();
    setPlans(JSON.stringify(data, null, 2));
  }

  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-slate-900">Billing</h1>
        <p className="mt-1 text-sm text-slate-500">V2 scaffold for subscription plan management.</p>
      </div>

      <Card>
        <form onSubmit={createPlan} className="space-y-4">
          <div>
            <Label>Plan JSON Payload</Label>
            <Textarea className="mt-1.5 h-40 font-mono" value={payload} onChange={(e) => setPayload(e.target.value)} />
          </div>
          <div className="flex gap-2">
            <Button type="submit">Create Plan</Button>
            <Button variant="secondary" type="button" onClick={loadPlans}>Load Plans</Button>
          </div>
        </form>
      </Card>

      {plans ? <pre className="mt-6 rounded-xl bg-slate-900 p-4 text-xs text-slate-100 overflow-x-auto">{plans}</pre> : null}
    </div>
  );
}
