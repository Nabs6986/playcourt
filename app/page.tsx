import Link from "next/link";
import { Check, X, Calendar, Users, Globe, Zap, Clock, BarChart3 } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { PricingCard } from "@/components/marketing/PricingCard";
import { FAQ } from "@/components/marketing/FAQ";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export default function HomePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://playcourt.io" },
        ]}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Stop playing phone tag.
            <br />
            <span className="text-brand-500">Start filling courts.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            TennisHQ gives your club online booking, a member website, and operations tools -- all in one platform built for tennis facilities.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/admin"
              className="rounded-lg bg-brand-500 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-brand-600 hover:shadow-brand hover:-translate-y-0.5"
            >
              Start Free Trial
            </Link>
            <Link
              href="/club/demo-club"
              className="rounded-lg border border-slate-200 bg-white px-6 py-3 text-base font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-50"
            >
              View Demo
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
            <span className="flex items-center gap-2"><Check className="h-4 w-4 text-brand-500" /> No credit card required</span>
            <span className="flex items-center gap-2"><Check className="h-4 w-4 text-brand-500" /> 14-day free trial</span>
            <span className="flex items-center gap-2"><Check className="h-4 w-4 text-brand-500" /> Setup in under 1 hour</span>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-brand-50/50 py-8">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm font-medium text-slate-600">Trusted by <span className="text-brand-600">50+</span> tennis facilities across the country</p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">Sound familiar?</h2>
            <p className="mt-3 text-lg text-slate-500">The daily struggles of running a tennis facility without modern tools.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Phone ringing off the hook for bookings",
              "Double-booked courts and angry members",
              "No-shows with no cancellation policy",
              "Spreadsheets everywhere, insights nowhere"
            ].map((pain) => (
              <div key={pain} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <X className="h-8 w-8 text-red-400" />
                <p className="mt-3 text-sm font-medium text-slate-700">{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">Everything your club needs</h2>
            <p className="mt-3 text-lg text-slate-500">Purpose-built tools for tennis facility operations.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              { icon: Calendar, title: "Online Booking", desc: "Members book courts 24/7 via your branded page. No phone calls, no back-and-forth." },
              { icon: Users, title: "Member Management", desc: "Import members, track usage, manage roles and access -- all from one dashboard." },
              { icon: Globe, title: "Club Website", desc: "Auto-generated public page with your branding, court info, and booking links." },
              { icon: BarChart3, title: "Analytics", desc: "See booking trends, popular hours, and member activity at a glance." }
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm transition-all hover:border-brand-200 hover:shadow-md group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-500 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">Up and running in 3 steps</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { step: "1", icon: Zap, title: "Set up your club", desc: "Add your courts, set operating hours, and configure booking rules." },
              { step: "2", icon: Users, title: "Import members", desc: "Upload a CSV or add members one by one. They get magic-link access instantly." },
              { step: "3", icon: Clock, title: "Go live", desc: "Share your booking page. Members book online, you manage from the dashboard." }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-xl font-bold text-brand-600">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">Simple, transparent pricing</h2>
            <p className="mt-3 text-lg text-slate-500">No hidden fees. No contracts. Cancel anytime.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 md:max-w-3xl md:mx-auto">
            <PricingCard
              name="Starter"
              price="$149"
              description="For single-location clubs getting started with online booking."
              features={[
                "Up to 8 courts",
                "Online booking page",
                "Member management",
                "Email notifications",
                "Basic analytics"
              ]}
            />
            <PricingCard
              name="Pro"
              price="$299"
              description="For clubs that want advanced features and priority support."
              features={[
                "Unlimited courts",
                "Custom branding",
                "Advanced analytics",
                "Lesson scheduling",
                "Priority support",
                "API access"
              ]}
              isPopular
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">Frequently asked questions</h2>
            <p className="mt-3 text-lg text-slate-500">Everything you need to know about TennisHQ.</p>
          </div>
          <div className="mt-12">
            <FAQ />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-brand-600 to-brand-500 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to reclaim your time?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-100">
            Join 50+ tennis facilities that switched to TennisHQ and never looked back.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/admin"
              className="rounded-lg bg-white px-6 py-3 text-base font-medium text-brand-600 shadow-sm transition-all hover:bg-brand-50 hover:-translate-y-0.5"
            >
              Start Free Trial
            </Link>
            <Link
              href="/club/demo-club"
              className="rounded-lg border border-white/30 px-6 py-3 text-base font-medium text-white transition-all hover:bg-white/10"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
