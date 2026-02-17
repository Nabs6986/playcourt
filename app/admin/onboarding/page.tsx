import Link from "next/link";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const steps = [
  { label: "Club name, address, phone", done: true },
  { label: "Court setup", done: true },
  { label: "Operating hours", done: false },
  { label: "Booking rules", done: false },
  { label: "Member CSV import", done: false },
  { label: "Website preview and launch", done: false }
];

export default function AdminOnboardingPage() {
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-slate-900">Onboarding Wizard</h1>
        <p className="mt-1 text-sm text-slate-500">Step-by-step club setup for new pilots.</p>
      </div>

      <Card>
        <ol className="space-y-1">
          {steps.map((step, idx) => (
            <li key={step.label} className="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-slate-50">
              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-medium ${
                step.done
                  ? "bg-brand-500 text-white"
                  : "border-2 border-slate-200 text-slate-400"
              }`}>
                {step.done ? <Check className="h-4 w-4" /> : idx + 1}
              </div>
              <span className={`text-sm ${step.done ? "text-slate-500 line-through" : "font-medium text-slate-900"}`}>
                {step.label}
              </span>
            </li>
          ))}
        </ol>
      </Card>

      <div className="mt-6">
        <Link href="/admin/settings">
          <Button>Continue to Settings</Button>
        </Link>
      </div>
    </div>
  );
}
