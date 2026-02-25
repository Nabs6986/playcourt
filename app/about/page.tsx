import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Heart, Zap } from "lucide-react";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "About PlayCourt | Tennis Court Booking Software",
  description:
    "PlayCourt is tennis court booking software built by people who actually run tennis clubs. Simple, affordable, and designed for how clubs actually work.",
  openGraph: {
    title: "About PlayCourt - Tennis Court Booking Software",
    description:
      "Tennis court booking software built by people who actually run tennis clubs.",
  },
};

const values = [
  {
    icon: Target,
    title: "Simplicity Over Features",
    description:
      "We&apos;d rather do 10 things extremely well than 100 things poorly. Every feature earns its place by making your life easier, not more complicated.",
  },
  {
    icon: Heart,
    title: "Built for Club Managers",
    description:
      "We build for the person who runs the club, not the IT department. If it requires a manual or a consultant, we&apos;ve failed.",
  },
  {
    icon: Zap,
    title: "Speed to Value",
    description:
      "You should see value in your first 10 minutes, not your first 10 weeks. Setup is fast, learning is minimal, and results are immediate.",
  },
];

const stats = [
  { value: "500+", label: "Clubs using PlayCourt" },
  { value: "50,000+", label: "Monthly bookings processed" },
  { value: "73%", label: "Average no-show reduction" },
  { value: "10 min", label: "Average setup time" },
];

export default function AboutPage() {
  // JSON-LD Schema for Organization
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PlayCourt",
    "url": "https://playcourt.io",
    "description": "Tennis court booking and club management software",
    "foundingDate": "2024",
    "sameAs": [
      "https://twitter.com/playcourt",
      "https://linkedin.com/company/playcourt",
    ],
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://playcourt.io" },
          { name: "About", url: "https://playcourt.io/about" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-24 pb-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Tennis Software, Finally Done Right
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            PlayCourt exists because tennis club software shouldn&apos;t require an IT department, 
            a six-month implementation, or a second mortgage.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Story</h2>
          <div className="prose prose-slate">
            <p className="text-slate-600 leading-relaxed mb-4">
              PlayCourt started when we tried to help a local tennis club modernize their booking system.{" "} 
              The existing options were either enterprise software costing $500+/month with months-long 
              implementations, or cobbled-together spreadsheets and phone calls.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              We thought: there has to be a better way. Small and medium tennis clubs deserve software{" "} 
              that&apos;s powerful enough to actually help, simple enough to set up in an afternoon, and{" "} 
              affordable enough to make sense.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              So we built it. PlayCourt is the tennis booking software we wished existed—designed for{" "} 
              club managers who have better things to do than wrestle with complicated software, and{" "} 
              priced for clubs that can&apos;t justify enterprise budgets.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Today, hundreds of clubs trust PlayCourt to handle their court bookings. We&apos;ve processed{" "} 
              over 50,000 bookings, reduced no-shows by an average of 73%, and saved club staff{" "} 
              thousands of hours of administrative work.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-brand-500">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-brand-100 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">What We Believe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-100 mb-4">
                  <value.icon className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PlayCourt */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Why &quot;PlayCourt&quot;?</h2>
          <p className="text-slate-600 leading-relaxed">
            We wanted a name that captures what we&apos;re about: getting people on courts, playing.{" "} 
            Not wrestling with software, not waiting on hold, not deciphering complicated dashboards—just{" "} 
            playing tennis (or pickleball, or paddle). Every feature we build serves that mission:{" "} 
            make it easier for your members to play more.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to see what tennis software should be?
          </h2>
          <p className="text-slate-600 mb-8">
            Start your free 14-day trial. No credit card required. Set up in 10 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admin"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-brand-600"
            >
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-medium text-slate-700 shadow-sm border border-slate-200 transition-all hover:bg-slate-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
