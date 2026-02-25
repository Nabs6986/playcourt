import { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight, Clock, DollarSign, TrendingDown, Users } from "lucide-react";
import { ComparisonSchema } from "@/components/schema/ComparisonSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "PlayCourt vs Spreadsheets: Tennis Club Booking Software Comparison",
  description:
    "Should you ditch Excel or Google Sheets for tennis booking software? See the real cost comparison, feature breakdown, and time savings calculator for your club.",
  openGraph: {
    title: "PlayCourt vs Spreadsheets: Tennis Booking Comparison",
    description:
      "Real cost comparison, feature breakdown, and time savings analysis. Find out what spreadsheet booking is actually costing your club.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why switch from spreadsheets to tennis booking software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spreadsheets can't prevent double-bookings, send automatic reminders, or allow 24/7 member self-service booking. These gaps cost clubs an average of $10,000–$18,000 annually in staff time and no-show revenue losses. PlayCourt solves all three problems for $149–$299/month, delivering ROI in the first 30 days for most clubs.",
      },
    },
    {
      "@type": "Question",
      name: "Is PlayCourt worth it for a small tennis club?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, for clubs with 2+ courts or 30+ members. PlayCourt at $149/month costs less than one hour of staff time per week. The 73% average reduction in no-shows typically recovers more than the subscription cost within the first month. Clubs also save 5–10 hours of staff time weekly from eliminated phone and spreadsheet management.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to switch from spreadsheets to PlayCourt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clubs complete the full migration in under two hours: export your member list as CSV, import into PlayCourt, configure courts and booking rules, and send member invitations. PlayCourt is entirely self-service — no implementation team, no technical knowledge, no downtime.",
      },
    },
    {
      "@type": "Question",
      name: "Can I keep using a spreadsheet alongside PlayCourt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can, but most clubs find they stop using spreadsheets within the first week. PlayCourt's admin dashboard replaces every spreadsheet function with a more capable alternative: member directory, booking calendar, utilization analytics, and export tools. Most managers keep a read-only spreadsheet archive of historical data but stop actively maintaining it immediately.",
      },
    },
    {
      "@type": "Question",
      name: "What if my members aren't comfortable with online booking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Staff can still book on behalf of members who prefer to call — it takes 30 seconds in PlayCourt's admin panel. Clubs consistently report that even members in their 70s and 80s adopt online booking quickly because it's genuinely easier than calling. PlayCourt requires no app download and works from any device browser.",
      },
    },
  ],
};

const features = [
  { name: "Online booking (24/7)", playcourt: true, spreadsheet: false },
  { name: "Real-time availability", playcourt: true, spreadsheet: false },
  { name: "Automatic SMS reminders", playcourt: true, spreadsheet: false },
  { name: "Automatic email reminders", playcourt: true, spreadsheet: false },
  { name: "Double-booking prevention", playcourt: true, spreadsheet: false },
  { name: "Member self-service portal", playcourt: true, spreadsheet: false },
  { name: "Waitlist management", playcourt: true, spreadsheet: false },
  { name: "Court utilization analytics", playcourt: true, spreadsheet: "Manual only" },
  { name: "No-show tracking", playcourt: true, spreadsheet: "Manual only" },
  { name: "Member booking history", playcourt: true, spreadsheet: "Manual only" },
  { name: "Mobile-friendly interface", playcourt: true, spreadsheet: "Limited" },
  { name: "Multi-staff access (real-time)", playcourt: true, spreadsheet: "Conflict-prone" },
  { name: "Recurring booking support", playcourt: true, spreadsheet: "Manual" },
  { name: "Zero software cost", playcourt: false, spreadsheet: true },
  { name: "Works without internet", playcourt: false, spreadsheet: true },
];

function FeatureIcon({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="h-5 w-5 text-green-500" />;
  if (value === false) return <X className="h-5 w-5 text-red-400" />;
  return <span className="text-sm text-slate-500 italic">{value}</span>;
}

export default function VsSpreadsheets() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://playcourt.io" },
          { name: "Comparisons", url: "https://playcourt.io/vs/spreadsheets" },
          { name: "PlayCourt vs Spreadsheets", url: "https://playcourt.io/vs/spreadsheets" },
        ]}
      />
      <ComparisonSchema
        products={[
          { name: "PlayCourt", description: "Tennis court booking and club management software with online booking, automatic reminders, and member management." },
          { name: "Spreadsheets", description: "Manual court booking management using Excel or Google Sheets." },
        ]}
        url="https://playcourt.io/vs/spreadsheets"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-24 pb-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            PlayCourt vs Spreadsheets
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Which is right for your tennis club? Here&apos;s the complete breakdown —
            with real cost numbers and a time savings calculator.
          </p>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-8 bg-brand-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-brand-100">
            <h2 className="font-semibold text-slate-900 mb-2">Quick Answer</h2>
            <p className="text-slate-600">
              <strong>PlayCourt</strong> wins on every operational metric for clubs with 2+ courts or 30+
              members. Spreadsheets appear free but cost the average club $10,000–$18,000 annually in
              staff time and no-show losses. PlayCourt at $149/month delivers ROI within 30 days for
              most clubs. <strong>Spreadsheets</strong> remain reasonable only for solo operators or clubs
              with fewer than 20 members and minimal booking volume.
            </p>
          </div>
        </div>
      </section>

      {/* At a Glance */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">At a Glance</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 px-4 text-left text-sm font-medium text-slate-500"></th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-brand-600">PlayCourt</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">Spreadsheets</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 px-4 text-sm font-medium text-slate-700">Software cost</td>
                  <td className="py-3 px-4 text-sm text-slate-900 font-semibold">$149–$299/month</td>
                  <td className="py-3 px-4 text-sm text-slate-600">$0</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm font-medium text-slate-700">Real annual cost (staff + no-shows)</td>
                  <td className="py-3 px-4 text-sm text-slate-900 font-semibold">$1,788–$4,500/yr</td>
                  <td className="py-3 px-4 text-sm text-slate-600">$10,000–$18,000/yr</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm font-medium text-slate-700">Staff time on booking admin</td>
                  <td className="py-3 px-4 text-sm text-slate-900">~1 hr/week</td>
                  <td className="py-3 px-4 text-sm text-slate-600">5–10 hrs/week</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm font-medium text-slate-700">No-show rate</td>
                  <td className="py-3 px-4 text-sm text-slate-900 font-semibold">3–8% (with reminders)</td>
                  <td className="py-3 px-4 text-sm text-slate-600">15–25%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm font-medium text-slate-700">Double-booking risk</td>
                  <td className="py-3 px-4 text-sm text-slate-900">None</td>
                  <td className="py-3 px-4 text-sm text-slate-600">Common (1–3/week)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm font-medium text-slate-700">24/7 member self-booking</td>
                  <td className="py-3 px-4 text-sm text-slate-900">✓ Yes</td>
                  <td className="py-3 px-4 text-sm text-slate-600">✗ No</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm font-medium text-slate-700">Automatic reminders</td>
                  <td className="py-3 px-4 text-sm text-slate-900">✓ SMS + email</td>
                  <td className="py-3 px-4 text-sm text-slate-600">✗ Manual only</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm font-medium text-slate-700">Setup time</td>
                  <td className="py-3 px-4 text-sm text-slate-900">10 minutes</td>
                  <td className="py-3 px-4 text-sm text-slate-600">Ongoing maintenance</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm font-medium text-slate-700">Free trial</td>
                  <td className="py-3 px-4 text-sm text-slate-900">14 days (no CC)</td>
                  <td className="py-3 px-4 text-sm text-slate-600">Always free</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Time Savings Calculator */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Time Savings Calculator</h2>
          <p className="text-slate-600 mb-8">
            Find your club&apos;s estimated annual savings. Select the closest match for each variable.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Scenario A: Small Club */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-1">Small Club</h3>
              <p className="text-sm text-slate-500 mb-4">2–4 courts, 50–100 members</p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Staff time saved/year</span>
                  <span className="font-medium text-slate-900">260 hrs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">At $22/hr</span>
                  <span className="font-medium text-slate-900">$5,720</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">No-show revenue recovered</span>
                  <span className="font-medium text-slate-900">$2,100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">PlayCourt subscription</span>
                  <span className="font-medium text-slate-900">−$1,788</span>
                </div>
                <div className="pt-3 border-t border-slate-200 flex justify-between">
                  <span className="font-semibold text-slate-900">Net annual saving</span>
                  <span className="font-bold text-green-600 text-base">$6,032</span>
                </div>
              </div>
            </div>

            {/* Scenario B: Medium Club */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-1">Medium Club</h3>
              <p className="text-sm text-slate-500 mb-4">6–10 courts, 100–250 members</p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Staff time saved/year</span>
                  <span className="font-medium text-slate-900">390 hrs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">At $22/hr</span>
                  <span className="font-medium text-slate-900">$8,580</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">No-show revenue recovered</span>
                  <span className="font-medium text-slate-900">$3,942</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">PlayCourt subscription (Pro)</span>
                  <span className="font-medium text-slate-900">−$3,588</span>
                </div>
                <div className="pt-3 border-t border-slate-200 flex justify-between">
                  <span className="font-semibold text-slate-900">Net annual saving</span>
                  <span className="font-bold text-green-600 text-base">$8,934</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-500 mt-4">
            * Estimates based on industry averages: 5–7.5 hrs/week staff time saved, 73% no-show reduction,
            $25/hr average court rate, 18% baseline no-show rate.
          </p>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Feature Comparison</h2>
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">Feature</th>
                  <th className="py-3 px-4 text-center text-sm font-medium text-brand-600">PlayCourt</th>
                  <th className="py-3 px-4 text-center text-sm font-medium text-slate-600">Spreadsheets</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {features.map((feature) => (
                  <tr key={feature.name}>
                    <td className="py-3 px-4 text-sm text-slate-700">{feature.name}</td>
                    <td className="py-3 px-4 text-center">
                      <span className="inline-flex justify-center">
                        <FeatureIcon value={feature.playcourt} />
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className="inline-flex justify-center">
                        <FeatureIcon value={feature.spreadsheet} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* The Hidden Cost of Spreadsheets — detailed breakdown */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            The Hidden Cost of &quot;Free&quot; Spreadsheet Booking
          </h2>
          <p className="text-slate-600 mb-8">
            The software cost of spreadsheets is zero. The total cost is not. Here&apos;s where clubs are
            actually spending money when they manage bookings manually.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-100">
                  <Clock className="h-5 w-5 text-red-500" />
                </div>
                <h3 className="font-semibold text-slate-900">Staff Time: $5,720–$11,440/yr</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Taking booking calls, handling cancellations, updating the spreadsheet, sending manual
                reminders, resolving conflicts. The average club spends 5–10 hours per week on booking
                administration — work that PlayCourt does automatically.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-100">
                  <TrendingDown className="h-5 w-5 text-orange-500" />
                </div>
                <h3 className="font-semibold text-slate-900">No-Show Losses: $2,000–$8,000/yr</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Clubs without automatic reminders see 15–25% no-show rates. At $25/court-hour with
                8 peak bookings per court per day, empty courts cost real money. No spreadsheet sends
                a reminder automatically.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100">
                  <DollarSign className="h-5 w-5 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-slate-900">Double-Booking Conflicts: $500–$1,500/yr</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Most clubs experience 1–3 double-bookings per week during busy periods. Each incident
                takes 15–30 minutes to resolve and risks damaging member relationships. PlayCourt prevents
                them entirely through real-time locking.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-100">
                  <Users className="h-5 w-5 text-purple-500" />
                </div>
                <h3 className="font-semibold text-slate-900">Member Retention Risk: Unquantified But Real</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Booking friction — the inability to book after hours, lack of instant confirmation,
                no reminders — correlates with reduced booking frequency and higher churn at renewal.
                Convenience is among the top factors in tennis club retention decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When Spreadsheets Are Fine */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">When to Choose PlayCourt vs. Spreadsheets</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-brand-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">✅ Choose PlayCourt if…</h3>
              <ul className="space-y-3">
                {[
                  "You have 2+ courts and 30+ members",
                  "Double-bookings are causing member frustration",
                  "Staff spend hours weekly managing bookings",
                  "No-shows are costing you revenue",
                  "Members want to book after business hours",
                  "You want data on court utilization",
                  "You need automatic reminders and waitlists",
                  "You're growing and need a scalable system",
                ].map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check className="h-4 w-4 text-brand-500 mt-0.5 shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-100 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Spreadsheets are fine if…</h3>
              <ul className="space-y-3">
                {[
                  "You have fewer than 2 courts",
                  "Your membership is under 20 people",
                  "Booking volume is under 10/week",
                  "You manage the club solo with no staff",
                  "Members are all known personally",
                  "Software budget is genuinely zero",
                ].map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-slate-400 mt-0.5 shrink-0">•</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Guide Teaser */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">How the Migration Works</h2>
          <p className="text-slate-600 mb-6">
            Switching from spreadsheets to PlayCourt takes under two hours. Here&apos;s the process:
          </p>
          <div className="space-y-4">
            {[
              {
                step: 1,
                title: "Export your member list as CSV",
                desc: "From your spreadsheet, save a CSV with member names, emails, and phone numbers.",
              },
              {
                step: 2,
                title: "Sign up and import members",
                desc: "Create your PlayCourt account, upload the CSV. Your member directory is live instantly.",
              },
              {
                step: 3,
                title: "Add your courts and booking rules",
                desc: "Set court names, hours, booking duration limits, and advance booking windows. ~10 minutes.",
              },
              {
                step: 4,
                title: "Enable automatic reminders",
                desc: "Turn on 24-hour email and 2-hour SMS reminders. This single step drives 73% no-show reduction.",
              },
              {
                step: 5,
                title: "Invite members and go live",
                desc: "PlayCourt sends invitations to all imported members. Announce your go-live date and you're done.",
              },
            ].map((step) => (
              <div key={step.step} className="flex gap-4 bg-white rounded-xl p-5 shadow-sm border border-slate-200">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-500 text-white font-semibold text-sm">
                    {step.step}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/blog/ditching-spreadsheets"
              className="text-brand-600 hover:underline text-sm font-medium"
            >
              Read the full migration guide →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {jsonLd.mainEntity.map((faq, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-500">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to try PlayCourt?</h2>
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
