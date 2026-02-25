import Link from "next/link";
import type { Route } from "next";
import {
  CalendarDays,
  Users,
  Settings,
  BarChart3,
  Globe,
  Rocket,
  CreditCard,
  GraduationCap,
  ArrowRight
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

const links: Array<{ href: Route; label: string; description: string; icon: typeof CalendarDays }> = [
  { href: "/admin/bookings", label: "Bookings", description: "View and manage court reservations", icon: CalendarDays },
  { href: "/admin/members", label: "Members", description: "Add, search, and manage club members", icon: Users },
  { href: "/admin/settings", label: "Settings", description: "Configure booking rules and hours", icon: Settings },
  { href: "/admin/analytics", label: "Analytics", description: "Booking trends and popular hours", icon: BarChart3 },
  { href: "/admin/onboarding", label: "Onboarding", description: "Step-by-step club setup wizard", icon: Rocket },
  { href: "/admin/website", label: "Website", description: "Preview your public club page", icon: Globe },
  { href: "/admin/billing", label: "Billing", description: "Manage subscription plans", icon: CreditCard },
  { href: "/admin/lessons", label: "Lessons", description: "Lesson scheduling and availability", icon: GraduationCap }
];

export default function AdminPage() {
  const greeting = new Date().getHours() < 12 ? "Good morning" : new Date().getHours() < 18 ? "Good afternoon" : "Good evening";
  const dateStr = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });

  return (
    <div className="max-w-5xl">
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://playcourt.io" },
          { name: "Admin", url: "https://playcourt.io/admin" },
        ]}
      />
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-slate-900">{greeting}</h1>
        <p className="mt-1 text-sm text-slate-500">{dateStr}</p>
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Today's Bookings", value: "--" },
          { label: "Active Members", value: "--" },
          { label: "This Week", value: "--" },
          { label: "Revenue", value: "--" }
        ].map((stat) => (
          <Card key={stat.label} className="p-5">
            <p className="text-sm text-slate-500">{stat.label}</p>
            <p className="mt-1 text-2xl font-semibold text-slate-900">{stat.value}</p>
          </Card>
        ))}
      </div>

      <h2 className="mb-4 text-lg font-semibold text-slate-900">Quick Access</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {links.map((l) => {
          const Icon = l.icon;
          return (
            <Link key={l.href} href={l.href}>
              <Card variant="feature" className="flex items-center gap-4 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-500 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-900">{l.label}</p>
                  <p className="text-sm text-slate-500 truncate">{l.description}</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition-colors group-hover:text-brand-500" />
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
