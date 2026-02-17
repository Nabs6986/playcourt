import { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Bell,
  Users,
  BarChart,
  Clock,
  Shield,
  Smartphone,
  Globe,
  Mail,
  Repeat,
  UserPlus,
  Settings,
  ArrowRight,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features | PlayCourt - Tennis Court Booking Software",
  description:
    "Explore PlayCourt features: online booking, automatic reminders, member management, analytics, and more. Everything you need to run a modern tennis club.",
  openGraph: {
    title: "PlayCourt Features - Tennis Court Booking Software",
    description:
      "Online booking, automatic reminders, member management, analytics, and more. Everything you need to run a modern tennis club.",
  },
};

const features = [
  {
    icon: Calendar,
    name: "Online Court Booking",
    description:
      "Members book courts 24/7 from any device. Real-time availability prevents double-bookings. Mobile-first design means booking in 3 taps.",
    highlights: ["24/7 self-service", "Real-time availability", "3-tap booking"],
    link: "/use-case/online-booking",
  },
  {
    icon: Bell,
    name: "Automatic Reminders",
    description:
      "SMS and email reminders go out automatically before each booking. Reduce no-shows by 73% without lifting a finger.",
    highlights: ["SMS + email", "Customizable timing", "73% no-show reduction"],
    link: "/use-case/reduce-no-shows",
  },
  {
    icon: Users,
    name: "Member Management",
    description:
      "Centralized member database with flexible membership types. Import existing members via CSV. Members self-update their info.",
    highlights: ["Unlimited members", "Flexible tiers", "Self-service profiles"],
    link: "/use-case/member-management",
  },
  {
    icon: BarChart,
    name: "Analytics Dashboard",
    description:
      "Understand your club with real data. Court utilization, peak times, member activity, no-show rates—all at a glance.",
    highlights: ["Utilization reports", "Peak time analysis", "Member engagement"],
    link: null,
  },
  {
    icon: Clock,
    name: "Booking Rules Engine",
    description:
      "Set advance booking windows, max duration, daily limits, and more. Different rules for different membership types.",
    highlights: ["Advance windows", "Duration limits", "Per-member rules"],
    link: null,
  },
  {
    icon: Repeat,
    name: "Recurring Bookings",
    description:
      "Block time for lessons, leagues, and clinics. Weekly, bi-weekly, or custom patterns. One-time setup, automatic scheduling.",
    highlights: ["Lesson blocks", "League scheduling", "Clinic series"],
    link: "/use-case/court-scheduling",
  },
  {
    icon: Shield,
    name: "Waitlist Management",
    description:
      "Members join waitlists for popular time slots. When someone cancels, the next person gets notified instantly.",
    highlights: ["Automatic notifications", "Fair queuing", "Instant filling"],
    link: null,
  },
  {
    icon: UserPlus,
    name: "Guest Management",
    description:
      "Track guest usage, enforce guest policies, and collect guest fees. Guests linked to sponsoring members for accountability.",
    highlights: ["Guest tracking", "Fee collection", "Policy enforcement"],
    link: null,
  },
  {
    icon: Smartphone,
    name: "Mobile-First Design",
    description:
      "Works beautifully on any device—phone, tablet, or desktop. No app download required, just open in any browser.",
    highlights: ["Any device", "No app needed", "Touch-optimized"],
    link: null,
  },
  {
    icon: Globe,
    name: "Club Website",
    description:
      "Professional club page with integrated booking. Custom domain, your branding, SEO optimized. No web design skills needed.",
    highlights: ["Custom branding", "Integrated booking", "SEO ready"],
    link: "/use-case/club-website",
  },
  {
    icon: Mail,
    name: "Email Notifications",
    description:
      "Booking confirmations, cancellation notices, and system announcements. Members stay informed, staff stays unbothered.",
    highlights: ["Auto confirmations", "Cancellation alerts", "Club announcements"],
    link: null,
  },
  {
    icon: Settings,
    name: "Admin Controls",
    description:
      "Full control over your facility. Override bookings, manage members, adjust rules, run reports. All from one dashboard.",
    highlights: ["Full override", "Role-based access", "Audit trail"],
    link: null,
  },
];

const comparisonFeatures = [
  { name: "Online Booking", starter: true, pro: true },
  { name: "Automatic Reminders (Email)", starter: true, pro: true },
  { name: "Automatic Reminders (SMS)", starter: "100/mo", pro: "Unlimited" },
  { name: "Member Management", starter: true, pro: true },
  { name: "Basic Analytics", starter: true, pro: true },
  { name: "Advanced Analytics", starter: false, pro: true },
  { name: "Recurring Bookings", starter: false, pro: true },
  { name: "Custom Branding", starter: false, pro: true },
  { name: "Custom Domain", starter: false, pro: true },
  { name: "API Access", starter: false, pro: true },
  { name: "Priority Support", starter: false, pro: true },
  { name: "Courts Supported", starter: "Up to 6", pro: "Unlimited" },
];

function FeatureValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check className="h-5 w-5 text-green-500 mx-auto" />;
  }
  if (value === false) {
    return <span className="text-slate-300">—</span>;
  }
  return <span className="text-sm text-slate-600">{value}</span>;
}

export default function FeaturesPage() {
  // JSON-LD for SoftwareApplication
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PlayCourt",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "description": "Tennis court booking and club management software",
    "offers": [
      {
        "@type": "Offer",
        "name": "Starter",
        "price": "149",
        "priceCurrency": "USD",
      },
      {
        "@type": "Offer",
        "name": "Pro",
        "price": "299",
        "priceCurrency": "USD",
      },
    ],
    "featureList": features.map((f) => f.name).join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-24 pb-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Everything You Need to Run a Modern Tennis Club
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Online booking, automatic reminders, member management, analytics—all in one simple platform.
            Set up in 10 minutes, no IT required.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admin"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-brand-600"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-medium text-slate-700 shadow-sm border border-slate-200 transition-all hover:bg-slate-50"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand-100 mb-4">
                  <feature.icon className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{feature.name}</h3>
                <p className="text-slate-600 text-sm mb-4">{feature.description}</p>
                <ul className="space-y-1">
                  {feature.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-sm text-slate-500">
                      <Check className="h-4 w-4 text-brand-500" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                {feature.link && (
                  <Link
                    href={feature.link as "/use-case/online-booking" | "/use-case/reduce-no-shows" | "/use-case/member-management" | "/use-case/court-scheduling" | "/use-case/club-website"}
                    className="inline-flex items-center gap-1 mt-4 text-brand-600 text-sm font-medium hover:text-brand-700"
                  >
                    Learn more
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Compare Plans
          </h2>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="py-4 px-6 text-left text-sm font-medium text-slate-600">Feature</th>
                  <th className="py-4 px-6 text-center text-sm font-medium text-slate-600">
                    Starter
                    <div className="text-brand-600 font-semibold">$149/mo</div>
                  </th>
                  <th className="py-4 px-6 text-center text-sm font-medium text-slate-600">
                    Pro
                    <div className="text-brand-600 font-semibold">$299/mo</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonFeatures.map((feature) => (
                  <tr key={feature.name}>
                    <td className="py-3 px-6 text-sm text-slate-700">{feature.name}</td>
                    <td className="py-3 px-6 text-center">
                      <FeatureValue value={feature.starter} />
                    </td>
                    <td className="py-3 px-6 text-center">
                      <FeatureValue value={feature.pro} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-brand-600 font-medium hover:text-brand-700"
            >
              See full pricing details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Integrations Coming Soon */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Coming Soon</h2>
          <p className="text-slate-600 mb-8">
            We&apos;re always adding new features based on customer feedback.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { name: "Payment Processing", status: "Q1 2026" },
              { name: "Lesson Marketplace", status: "Q2 2026" },
              { name: "Mobile App", status: "Q2 2026" },
            ].map((item) => (
              <div
                key={item.name}
                className="bg-slate-50 rounded-lg p-4 border border-slate-200"
              >
                <div className="font-medium text-slate-900">{item.name}</div>
                <div className="text-sm text-slate-500">{item.status}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-500">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to modernize your tennis club?
          </h2>
          <p className="text-brand-100 mb-8">
            Start your free 14-day trial. No credit card required. Set up in 10 minutes.
          </p>
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-medium text-brand-600 shadow-sm transition-all hover:bg-brand-50"
          >
            Start Free Trial
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
