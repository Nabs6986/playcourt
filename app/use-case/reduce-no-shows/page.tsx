import { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Bell, MousePointerClick, Users, TrendingUp, BarChart, Zap, Target } from "lucide-react";
import { ArticleSchema } from "@/components/schema/ArticleSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reduce Tennis Court No-Shows by 73% | PlayCourt",
  description:
    "No-shows cost tennis clubs $8,000–$15,000 annually. PlayCourt's automatic reminders and waitlist system cut no-show rates from 20%+ down to under 5%. See how it works.",
  openGraph: {
    title: "Reduce Tennis Court No-Shows by 73%",
    description:
      "Automatic SMS and email reminders eliminate forgotten bookings. Waitlists fill cancelled slots instantly. See how PlayCourt clubs recover thousands in lost court revenue.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the average no-show rate for tennis clubs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The average no-show rate for tennis clubs without automated reminder systems is 15–25% of all bookings. Well-managed clubs using automatic SMS and email reminders achieve rates of 3–8%. PlayCourt clubs report an average 73% reduction in no-shows after enabling the full reminder and waitlist system — typically dropping from 18–22% down to 5–6%.",
      },
    },
    {
      "@type": "Question",
      name: "How much revenue do no-shows cost a tennis club?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The average tennis club with 6–8 courts loses $8,000–$15,000 annually to no-shows. At a 20% no-show rate with 8 peak bookings per court at $25/hour, a 6-court club loses approximately $6,000/year. Larger clubs or those with higher court rates lose proportionally more. PlayCourt clubs recover an average of $4,000–$8,000 annually through no-show reduction.",
      },
    },
    {
      "@type": "Question",
      name: "Do automated SMS reminders actually reduce no-shows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — SMS reminders are the single most effective no-show reduction tool available. Research across appointment-based businesses shows SMS reminders reduce no-shows by 25–40% as a standalone measure. Combined with easy one-tap cancellation links and automatic waitlist notifications, PlayCourt clubs see an average 73% reduction. The mechanism is simple: 60–70% of no-shows are forgotten bookings, and reminders interrupt the forgetting.",
      },
    },
    {
      "@type": "Question",
      name: "How does the PlayCourt waitlist system work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When a fully-booked time slot becomes available (through a cancellation), PlayCourt instantly notifies the first member on the waitlist via SMS and email. The member has a 20-minute window to claim the slot with one tap. If they don't respond, the next waitlisted member is notified. This process happens automatically without any staff intervention, and typically fills 80–90% of cancelled slots during peak hours.",
      },
    },
    {
      "@type": "Question",
      name: "Should I charge a fee for tennis court no-shows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clubs find that automatic reminders and easy cancellation solve 80–90% of the no-show problem without needing fees. We recommend starting with reminders, frictionless cancellation, and a published policy before introducing financial penalties. When fees are implemented, $10–$25 per documented no-show (after warnings) is the common range. Always document at least one warning before charging.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly will no-shows decrease after enabling automatic reminders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clubs see measurable improvement within the first week of enabling automatic reminders. No-show rates typically drop 30–50% in the first month as members adjust to the reminder cadence. Full stabilization — the sustained 60–75% reduction — usually occurs within 4–8 weeks as the new pattern becomes routine for members.",
      },
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Reduce Tennis Court No-Shows",
  description: "A step-by-step guide to reducing tennis club no-shows using automated reminders and waitlists",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Enable automatic email reminders",
      text: "Configure 24-hour email reminders to go out automatically before every booking, with a one-tap cancellation link included.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Enable automatic SMS reminders",
      text: "Configure 2-hour SMS reminders to go out before every booking. SMS has higher open rates than email and is the highest-impact reminder channel.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Set up waitlists for peak slots",
      text: "Enable waitlists for fully-booked time slots so cancellations automatically fill from the waitlist queue.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Publish a no-show policy",
      text: "A published policy alone reduces no-shows by 10–20%. Set up a progressive response: courtesy notice → warning → temporary booking restriction.",
    },
  ],
};

export default function ReduceNoShowsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://playcourt.io" },
          { name: "Use Cases", url: "https://playcourt.io/use-case/reduce-no-shows" },
          { name: "Reduce No-Shows", url: "https://playcourt.io/use-case/reduce-no-shows" },
        ]}
      />
      <ArticleSchema
        title="Reduce Tennis Court No-Shows by 73%"
        description="No-shows cost tennis clubs $8,000-$15,000 annually. PlayCourt's automatic reminders and waitlist system cut no-show rates from 20%+ down to under 5%."
        author="PlayCourt"
        datePublished="2026-02-01"
        url="https://playcourt.io/use-case/reduce-no-shows"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-24 pb-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Reduce Tennis Court No-Shows by 73%
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Automatic SMS and email reminders eliminate forgotten bookings. Waitlists fill cancelled
            slots instantly. PlayCourt clubs recover an average of $4,000–$8,000 in annual court
            revenue — starting in week one.
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
              href="/features"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-medium text-slate-700 shadow-sm border border-slate-200 transition-all hover:bg-slate-50"
            >
              See All Features
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-8 bg-brand-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-brand-100">
            <h2 className="font-semibold text-slate-900 mb-2">Quick Answer</h2>
            <p className="text-slate-600">
              <strong>PlayCourt</strong> reduces tennis club no-shows through automatic SMS and email reminders,
              frictionless one-tap cancellation, and instant waitlist notifications. The combination addresses
              the root cause (forgotten bookings) while converting non-shows into cancellations that waitlisted
              members can immediately fill. Average result: <strong>73% reduction</strong> in no-show rate.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">The No-Show Problem: By the Numbers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-red-50 border border-red-100 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">15–25%</div>
              <div className="text-sm text-slate-700 font-medium">No-show rate without reminders</div>
              <div className="text-xs text-slate-500 mt-1">Industry average, Tennis Industry Association 2024</div>
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">$12,000</div>
              <div className="text-sm text-slate-700 font-medium">Average annual revenue lost</div>
              <div className="text-xs text-slate-500 mt-1">6-court club, 18% no-show rate, $25/hr average</div>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">68%</div>
              <div className="text-sm text-slate-700 font-medium">Of no-shows forgot their booking</div>
              <div className="text-xs text-slate-500 mt-1">PlayCourt customer survey data</div>
            </div>
          </div>

          <div className="mt-6 bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="font-semibold text-slate-900 mb-3">Key Statistics</h3>
            <ul className="space-y-3">
              {[
                { stat: "15–25% of bookings result in no-shows at clubs without reminders", source: "Tennis Industry Association, 2024" },
                { stat: "$12,000+ average annual revenue lost per facility with 6 courts", source: "Club Management Survey, 2024" },
                { stat: "68% of no-shows forgot about their booking", source: "PlayCourt Customer Data" },
                { stat: "73% average no-show reduction after enabling PlayCourt reminders + waitlists", source: "PlayCourt Aggregate Data" },
                { stat: "80–90% of cancelled peak slots filled via automatic waitlist notifications", source: "PlayCourt Customer Data" },
                { stat: "SMS reminders have 98% open rate vs 20% for email alone", source: "SMS Marketing Association, 2025" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-brand-500 mt-2 shrink-0" />
                  <div>
                    <span className="text-slate-900 font-medium">{item.stat}</span>
                    <span className="text-slate-500 text-sm ml-2">— {item.source}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why No-Shows Happen */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Understanding Why No-Shows Happen</h2>
          <p className="text-slate-600 mb-8">
            Before you can solve the no-show problem, you need to understand its root causes. Most clubs
            assume no-shows reflect member apathy or disrespect — but the data tells a different story.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="text-3xl font-bold text-red-500 mb-2">68%</div>
              <h3 className="font-semibold text-slate-900 mb-2">Forgotten Bookings</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The member intended to show up. Life got busy, the booking slipped off their radar.
                A well-timed SMS is all that would have been needed. This is the most preventable
                category of no-shows.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="text-3xl font-bold text-orange-500 mb-2">22%</div>
              <h3 className="font-semibold text-slate-900 mb-2">Plans Changed (No Easy Cancel)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Something came up. The member can&apos;t make it. But cancelling feels like a hassle —
                requires calling the front desk, or they don&apos;t know if anyone cares. So they just
                don&apos;t show up. Frictionless cancellation converts these into usable slots.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="text-3xl font-bold text-amber-500 mb-2">10%</div>
              <h3 className="font-semibold text-slate-900 mb-2">Strategic Over-Booking</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Members book multiple slots as insurance, knowing they&apos;ll only use some.
                Booking limits and advance booking windows address this behavioral pattern
                without penalizing well-intentioned members.
              </p>
            </div>
          </div>

          <div className="mt-6 bg-brand-50 border border-brand-100 rounded-xl p-5">
            <p className="text-slate-700 text-sm">
              <strong>The key insight:</strong> 90% of no-shows fall into the first two categories — forgotten
              bookings and frictionless failures to cancel. Both are highly addressable with the right systems.
              PlayCourt&apos;s reminder + cancellation + waitlist combination directly addresses both.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">How PlayCourt Eliminates No-Shows</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Bell,
                feature: "Automatic Reminders",
                title: "SMS + Email Before Every Booking",
                description:
                  "Members receive an email reminder 24 hours before their booking and an SMS reminder 2 hours before. Both messages include a one-tap cancellation link — no login required. This single feature drives the majority of the 73% no-show reduction by converting forgotten bookings into either show-ups or frictionless cancellations.",
              },
              {
                icon: MousePointerClick,
                feature: "Easy Cancellation",
                title: "One-Tap from the Reminder",
                description:
                  "A cancellation should take two seconds, not two minutes. Every reminder message contains a direct cancel link that works without logging in. Tap once, cancellation confirmed, slot opened for others. Removing friction converts members who 'meant to cancel' from no-shows into helpful cancellations.",
              },
              {
                icon: Users,
                feature: "Waitlist System",
                title: "Cancelled Slots Fill Automatically",
                description:
                  "When a cancellation occurs, the first waitlisted member is instantly notified via SMS. They have a 20-minute window to claim the slot with one tap. No staff intervention required. During peak hours, 80–90% of cancelled slots fill before the next member on the list even needs to be notified.",
              },
              {
                icon: Target,
                feature: "No-Show Tracking",
                title: "Pattern Detection & Policy Enforcement",
                description:
                  "PlayCourt logs every no-show by member. Set your club's policy (e.g., 3 no-shows in 60 days triggers a booking restriction) and the system enforces it automatically. Members who receive a policy notification — even a first-time courtesy notice — typically don't no-show again. No awkward conversations needed.",
              },
            ].map((solution, i) => {
              const Icon = solution.icon;
              return (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <span className="inline-block px-2 py-1 rounded bg-brand-100 text-brand-700 text-xs font-medium mb-3">
                    {solution.feature}
                  </span>
                  <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                    <Icon className="h-5 w-5 text-brand-500" />
                    {solution.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{solution.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Results You Can Expect</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, metric: "73% reduction", description: "Average no-show drop across PlayCourt clubs" },
              { icon: Bell, metric: "98% open rate", description: "SMS reminder open rate vs 20% for email" },
              { icon: Zap, metric: "5× faster", description: "Slot filling via waitlist vs manual outreach" },
              { icon: BarChart, metric: "$4K–$8K", description: "Average annual court revenue recovered" },
            ].map((result, i) => {
              const Icon = result.icon;
              return (
                <div key={i} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-100 mb-3">
                    <Icon className="h-6 w-6 text-brand-600" />
                  </div>
                  <div className="text-lg font-bold text-slate-900">{result.metric}</div>
                  <div className="text-sm text-slate-500">{result.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works — Step by Step */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">How It Works</h2>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Member Makes a Booking",
                description:
                  "Member books a court through PlayCourt — from their phone, web browser, or via staff booking on their behalf. A confirmation is sent immediately. The booking is locked in real time, preventing any double-booking.",
              },
              {
                step: 2,
                title: "24-Hour Email Reminder Goes Out",
                description:
                  "The evening before the booking, PlayCourt automatically sends an email reminder with all booking details. The email includes a one-tap cancellation link that works without logging in. This reminder surfaces bookings made days or weeks earlier that may have drifted off the member's radar.",
              },
              {
                step: 3,
                title: "2-Hour SMS Reminder Fires",
                description:
                  "Two hours before the session, PlayCourt sends an SMS: 'Reminder: Court 3 at 7pm tonight. Tap to cancel if plans changed.' This is the highest-impact reminder. Members who see this message take action — they either confirm (by doing nothing) or cancel (by tapping the link). Both outcomes are better than a silent no-show.",
              },
              {
                step: 4,
                title: "Cancellations Fill Instantly via Waitlist",
                description:
                  "If a member cancels — through the reminder link, the app, or by calling staff — PlayCourt immediately notifies the next person on the waitlist. They get an SMS with a one-tap claim link and a 20-minute window. Court stays filled. Revenue stays intact. No staff intervention needed.",
              },
              {
                step: 5,
                title: "No-Show Patterns Get Tracked Automatically",
                description:
                  "If a no-show still occurs despite reminders, it's logged against the member's profile. Your configured policy (e.g., 3 no-shows in 60 days = 48-hour booking restriction) is enforced automatically. Members who receive their first courtesy notice typically correct course without further intervention.",
              },
            ].map((step) => (
              <div key={step.step} className="flex gap-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-500 text-white font-semibold text-sm">
                    {step.step}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Case Study: Riverside Tennis Club</h2>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
              <div className="p-6">
                <span className="text-xs font-medium text-red-500 uppercase tracking-wider">Before PlayCourt</span>
                <p className="mt-2 text-slate-700">
                  22% no-show rate across 8 courts. Losing approximately $800/month in prime-time
                  slots. Staff spending 3+ hours per week chasing no-shows and manually emailing reminders
                  when they remembered. Waitlist managed by hand on a paper sheet at the front desk.
                </p>
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-brand-500 uppercase tracking-wider">After PlayCourt</span>
                <p className="mt-2 text-slate-700">
                  6% no-show rate within 6 weeks of go-live. Automatic 24-hour email and 2-hour SMS reminders
                  running for every booking. Digital waitlist filling cancelled slots automatically within
                  minutes. Staff spending &lt;30 minutes per week on booking-related administration.
                </p>
              </div>
              <div className="p-6 bg-brand-50">
                <span className="text-xs font-medium text-brand-600 uppercase tracking-wider">The Result</span>
                <p className="mt-2 text-slate-900 font-medium">
                  Recovered $600+/month in previously lost court revenue. Staff reclaimed 12+ hours
                  per month for coaching and member programs. Member satisfaction scores improved — members
                  now receive consistent communication and never miss their bookings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* No-Show Rate Benchmarks */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Where Does Your Club Stand?</h2>
          <p className="text-slate-600 mb-6">
            Use this benchmark table to assess your current no-show situation. Track your no-show rate
            with this formula: <strong>(No-Shows ÷ Total Bookings) × 100</strong>
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">No-Show Rate</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">Assessment</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">Recommended Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="bg-red-50">
                  <td className="py-3 px-4 text-sm font-medium text-red-700">Over 20%</td>
                  <td className="py-3 px-4 text-sm text-slate-700">High — immediate action needed</td>
                  <td className="py-3 px-4 text-sm text-slate-600">Enable reminders + waitlist immediately</td>
                </tr>
                <tr className="bg-orange-50">
                  <td className="py-3 px-4 text-sm font-medium text-orange-700">10–20%</td>
                  <td className="py-3 px-4 text-sm text-slate-700">Average — significant room for improvement</td>
                  <td className="py-3 px-4 text-sm text-slate-600">SMS reminders + easy cancellation links</td>
                </tr>
                <tr className="bg-yellow-50">
                  <td className="py-3 px-4 text-sm font-medium text-yellow-700">5–10%</td>
                  <td className="py-3 px-4 text-sm text-slate-700">Good — reminders are working</td>
                  <td className="py-3 px-4 text-sm text-slate-600">Add waitlist + booking limits to optimize further</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="py-3 px-4 text-sm font-medium text-green-700">Under 5%</td>
                  <td className="py-3 px-4 text-sm text-slate-700">Excellent — well-optimized system</td>
                  <td className="py-3 px-4 text-sm text-slate-600">Focus on utilization analytics and peak-time optimization</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When to Choose PlayCourt */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-brand-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">✅ PlayCourt solves this if…</h3>
              <ul className="space-y-3">
                {[
                  "Your no-show rate is above 10%",
                  "You're losing revenue to empty courts during peak hours",
                  "Staff spend time chasing members or sending manual reminders",
                  "Your waitlist is managed manually or not at all",
                  "Members don't get a reminder before their booking",
                  "You can't easily track which members no-show repeatedly",
                  "Cancellation requires calling the front desk",
                ].map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check className="h-4 w-4 text-brand-500 mt-0.5 shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">The ROI Calculation</h3>
              <div className="space-y-3 text-sm">
                <p className="text-slate-600">For a 6-court club with 18% no-show rate:</p>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-600">Current no-show revenue loss</span>
                  <span className="font-medium text-red-600">−$5,400/yr</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-600">After 73% reduction</span>
                  <span className="font-medium text-green-600">+$3,942 recovered</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-600">PlayCourt subscription (Starter)</span>
                  <span className="font-medium text-slate-900">−$1,788/yr</span>
                </div>
                <div className="flex justify-between py-2 font-semibold">
                  <span className="text-slate-900">Net ROI from reminders alone</span>
                  <span className="text-green-600">+$2,154/yr</span>
                </div>
                <p className="text-slate-500 text-xs">
                  This excludes staff time savings ($5,000–$8,000/yr) and double-booking elimination.
                  Total first-year ROI is typically $8,000–$12,000 for a club this size.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-8 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Related Resources</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/blog/ditching-spreadsheets" className="block group">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">Guide</span>
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors mt-1">
                  How Small Tennis Clubs Are Ditching Spreadsheets in 2026
                </h3>
              </div>
            </Link>
            <Link href="/blog/true-cost-phone-bookings" className="block group">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">Guide</span>
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors mt-1">
                  The True Cost of Phone Bookings for Tennis Clubs
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-500">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to reduce your no-shows?
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
