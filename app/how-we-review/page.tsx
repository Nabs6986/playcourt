import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How We Evaluate Court Booking Software | PlayCourt",
  description:
    "How PlayCourt evaluates court booking platforms: our 5-step testing methodology and 6 scoring criteria for comparing tennis and pickleball booking software.",
  alternates: { canonical: "https://playcourt.io/how-we-review" },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "How We Evaluate Court Booking Software",
  description:
    "How PlayCourt evaluates court booking platforms: our 5-step testing methodology and 6 scoring criteria.",
  url: "https://playcourt.io/how-we-review",
  isPartOf: {
    "@type": "WebSite",
    name: "PlayCourt",
    url: "https://playcourt.io",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://playcourt.io",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "How We Evaluate",
      item: "https://playcourt.io/how-we-review",
    },
  ],
};

const steps = [
  {
    number: "01",
    title: "Real Account Setup",
    description:
      "We create accounts on every court booking platform and go through the full setup process — adding courts, configuring time slots, importing members, and setting booking rules. We measure setup time and complexity from a club manager's perspective.",
  },
  {
    number: "02",
    title: "Core Booking Workflows",
    description:
      "We test the workflows that matter most: booking a court as a member, managing reservations as an admin, handling cancellations, processing payments, running recurring bookings, and configuring peak/off-peak pricing. Every step is timed and evaluated.",
  },
  {
    number: "03",
    title: "Member Experience Testing",
    description:
      "We evaluate the booking experience from the member's perspective — how many taps to book a court, mobile responsiveness, real-time availability accuracy, reminder quality, and the overall friction level. If members won't adopt it, the software fails regardless of admin features.",
  },
  {
    number: "04",
    title: "Club Manager Interviews",
    description:
      "We interview club managers and facility directors who have used each platform for 6+ months in real operations. Their feedback on reliability, support quality, and hidden limitations shapes our evaluation beyond what a trial period can reveal.",
  },
  {
    number: "05",
    title: "Score & Document",
    description:
      "We score each platform against six weighted criteria, document strengths and weaknesses, and publish our findings transparently. Our evaluations inform how we build PlayCourt — we study what works and what doesn't across every competitor.",
  },
];

const criteria = [
  {
    name: "Ease of Use",
    weight: "20%",
    description:
      "Setup time, admin learning curve, daily management efficiency, and interface clarity. We measure how quickly a club manager can go from sign-up to accepting real bookings without technical help.",
  },
  {
    name: "Court Booking & Scheduling",
    weight: "20%",
    description:
      "Real-time availability, booking speed, recurring reservation support, waitlists, league and tournament scheduling, multi-court management, and calendar clarity. This is the core function — it must work flawlessly.",
  },
  {
    name: "Payment & Membership",
    weight: "20%",
    description:
      "Payment processing reliability, membership tier management, peak/off-peak pricing flexibility, guest rates, pro-rata billing, automated renewals, and financial reporting. The billing system must handle real-world club complexity.",
  },
  {
    name: "Player Experience",
    weight: "15%",
    description:
      "Mobile booking speed, real-time court visibility, reminder quality (SMS and email), booking confirmation flow, cancellation ease, and overall friction level. A platform is only as good as member adoption.",
  },
  {
    name: "Support & Reliability",
    weight: "15%",
    description:
      "Support channel availability (phone, email, chat), response times, onboarding assistance, platform uptime, and data security. When the booking system goes down on a Saturday morning, support quality becomes everything.",
  },
  {
    name: "Value for Money",
    weight: "10%",
    description:
      "Total cost of ownership (subscription + transaction fees + add-ons) relative to club size and feature depth. We evaluate whether the pricing makes sense for the specific club segment each platform targets.",
  },
];

export default function HowWeReviewPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-4xl mx-auto px-6 py-24">
        {/* Breadcrumb */}
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-brand-600">
            Home
          </Link>
          {" / "}
          <span className="text-slate-900">How We Evaluate</span>
        </nav>

        <h1 className="text-3xl font-bold text-slate-900 mb-3">
          How We Evaluate Court Booking Software
        </h1>
        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
          We built PlayCourt by studying every court booking platform on the
          market. Here&apos;s the framework we use to evaluate what works, what
          doesn&apos;t, and where the industry falls short for small-to-medium
          clubs.
        </p>

        {/* Testing Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Our 5-Step Evaluation Process
          </h2>
          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white border border-slate-200 rounded-xl p-5 flex gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-brand-100 text-brand-700 rounded-lg flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Scoring Criteria */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Scoring Criteria
          </h2>
          <p className="text-slate-600 mb-5">
            We evaluate every court booking platform across six weighted
            dimensions. This framework drives both our competitive analysis and
            our own product development priorities.
          </p>
          <div className="space-y-4">
            {criteria.map((c) => (
              <div
                key={c.name}
                className="bg-white border border-slate-200 rounded-xl p-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-brand-100 text-brand-700 text-xs font-bold px-2.5 py-1 rounded-md">
                    {c.weight}
                  </span>
                  <h3 className="font-semibold text-slate-900">{c.name}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Update Cadence */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Ongoing Evaluation
          </h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3 text-slate-600 text-sm leading-relaxed">
            <p>
              <strong className="text-slate-900">Quarterly benchmarks:</strong>{" "}
              We re-evaluate competitor platforms every quarter to track pricing
              changes, new features, and shifts in support quality. This keeps
              our competitive understanding current and informs our product
              roadmap.
            </p>
            <p>
              <strong className="text-slate-900">Annual deep-dive:</strong>{" "}
              Once per year, we do a full hands-on re-evaluation of every major
              court booking platform. The court booking market evolves, and our
              analysis must keep pace.
            </p>
            <p>
              <strong className="text-slate-900">Community feedback:</strong>{" "}
              Club managers who contact us with insights about competitor
              platforms help us refine our understanding. We investigate every
              substantive report and update our evaluations accordingly.
            </p>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Why We Share This
          </h2>
          <div className="bg-brand-50 border border-brand-200 rounded-xl p-5 space-y-3 text-slate-700 text-sm leading-relaxed">
            <p>
              We believe club managers deserve transparency. By sharing how we
              evaluate court booking software, we give you the same framework
              you can use to assess any platform — including PlayCourt.
            </p>
            <p>
              We built PlayCourt to score well on the criteria that matter most
              to real clubs: fast setup, simple member booking, reliable
              reminders, and honest pricing. If another platform genuinely
              serves your club better, we&apos;d rather you find the right fit
              than make the wrong choice.
            </p>
          </div>
        </section>

        {/* Corrections */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Questions & Feedback
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Have questions about how we evaluate court booking platforms, or
            want to share your experience with a competitor?{" "}
            <a
              href="mailto:support@playcourt.io"
              className="text-brand-600 hover:underline"
            >
              support@playcourt.io
            </a>{" "}
            or use our{" "}
            <Link href="/contact" className="text-brand-600 hover:underline">
              contact page
            </Link>
            . We read and respond to every message.
          </p>
        </section>

        {/* Bottom CTA */}
        <div className="bg-brand-50 border border-brand-200 rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            See the result of our research
          </h2>
          <p className="text-slate-600 mb-4">
            PlayCourt is what court booking software should be — simple, fast,
            and built for real clubs.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/admin"
              className="inline-block bg-brand-500 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-brand-600 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              href="/features"
              className="inline-block bg-white text-brand-600 border border-brand-200 px-5 py-2.5 rounded-lg font-medium hover:bg-brand-50 transition-colors"
            >
              See Features
            </Link>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap gap-4 text-sm">
          <Link href="/" className="text-brand-600 hover:underline">
            Home
          </Link>
          <Link href="/features" className="text-brand-600 hover:underline">
            Features
          </Link>
          <Link href="/pricing" className="text-brand-600 hover:underline">
            Pricing
          </Link>
          <Link href="/about" className="text-brand-600 hover:underline">
            About
          </Link>
          <Link href="/faq" className="text-brand-600 hover:underline">
            FAQ
          </Link>
          <Link href="/contact" className="text-brand-600 hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
