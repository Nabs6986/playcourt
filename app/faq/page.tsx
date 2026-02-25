import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | PlayCourt",
  description:
    "Answers to common questions about court booking software — online reservations, member management, pricing models, league scheduling, and choosing the right platform for your tennis or pickleball club.",
  alternates: { canonical: "https://playcourt.io/faq" },
};

const faqSections = [
  {
    id: "general",
    title: "General",
    questions: [
      {
        q: "What is court booking software?",
        a: "Court booking software is a platform that lets tennis, pickleball, and racquet sport clubs manage court reservations online. Instead of phone calls, whiteboards, or spreadsheets, members book available courts in real time from any device. The software handles scheduling, reminders, payments, and member management in one system.",
      },
      {
        q: "Who needs court booking software?",
        a: "Any club or facility with 3 or more courts and regular member usage benefits significantly. Once you're managing overlapping reservations, peak-hour demand, and membership tiers, manual scheduling becomes a bottleneck. Court booking software is especially valuable for clubs that want to offer 24/7 online booking without adding front-desk staff.",
      },
      {
        q: "Does PlayCourt work for pickleball and paddle tennis courts too?",
        a: "Yes. PlayCourt supports any court-based sport — tennis, pickleball, paddle tennis, badminton, squash, and more. You can configure each court with its own sport type, booking rules, and pricing. Many clubs use PlayCourt to manage mixed-sport facilities from a single dashboard.",
      },
      {
        q: "How long does it take to set up PlayCourt?",
        a: "Most clubs are fully set up in about 10 minutes. You add your courts, configure booking rules (time slots, advance booking limits, cancellation policies), import your member list via CSV, and launch. No IT department or technical training required.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing & Costs",
    questions: [
      {
        q: "How much does court booking software typically cost?",
        a: "Court booking software ranges from free basic tools to $800+/month for enterprise platforms like ClubAutomation or CourtReserve at scale. PlayCourt is designed for small-to-medium clubs and is priced to be accessible — see our pricing page for current plans. Most platforms charge monthly with no long-term contracts.",
      },
      {
        q: "Can PlayCourt handle peak and off-peak pricing?",
        a: "Yes. You can set different rates for peak hours (evenings, weekends) and off-peak hours (weekday mornings, midday). You can also configure seasonal pricing, member vs. guest rates, and promotional pricing periods. Pricing rules apply automatically at checkout.",
      },
      {
        q: "Are there transaction fees on top of the subscription?",
        a: "Payment processing fees are standard in the industry (typically 2.5–3.5% + $0.30 per transaction). PlayCourt's pricing page details the exact processing rates for each plan tier. Some plans include processing in the subscription fee at higher tiers.",
      },
      {
        q: "Is there a free trial?",
        a: "Yes. PlayCourt offers a free 14-day trial with full access to all features. No credit card required to start. You can set up your club, import members, and test the full booking flow before committing to a paid plan.",
      },
    ],
  },
  {
    id: "features",
    title: "Features & Capabilities",
    questions: [
      {
        q: "Does PlayCourt support league and tournament scheduling?",
        a: "Yes. You can create recurring league blocks that reserve specific courts at set times, manage round-robin and bracket tournament formats, and allow players to sign up for leagues online. League bookings are clearly marked on the calendar so casual members can see available slots around league play.",
      },
      {
        q: "How does PlayCourt reduce no-shows?",
        a: "PlayCourt sends automatic SMS and email reminders before scheduled court times. Based on customer data, this reduces no-shows by an average of 73% compared to manual booking systems. You can also configure cancellation windows and no-show penalties to discourage last-minute drops.",
      },
      {
        q: "Can members book courts on their phones?",
        a: "Yes. PlayCourt is fully mobile-responsive. Members can view real-time court availability, book a court, and receive confirmation — all from their phone in under 30 seconds. No app download required; it works in any mobile browser via a magic link.",
      },
      {
        q: "Does it support recurring bookings?",
        a: "Yes. Members or admins can create recurring reservations — for example, every Tuesday at 6 PM for 12 weeks. Recurring bookings are managed as a series, so you can modify or cancel individual occurrences without affecting the rest of the series.",
      },
      {
        q: "Can I set booking rules and restrictions?",
        a: "Yes. You can configure advance booking windows (how far ahead members can book), minimum and maximum booking durations, daily or weekly booking limits per member, cancellation deadlines, and court-specific rules. Different membership tiers can have different booking privileges.",
      },
      {
        q: "Does PlayCourt handle member management?",
        a: "Yes. PlayCourt includes a full member directory with membership type tracking, contact information, booking history, and payment records. You can import members via CSV, invite them via email, or let them self-register. Membership tiers control booking access and pricing automatically.",
      },
    ],
  },
  {
    id: "switching",
    title: "Switching & Migration",
    questions: [
      {
        q: "How hard is it to switch from spreadsheets or another system?",
        a: "Not hard at all. PlayCourt supports CSV import for your member list — export names, emails, and phone numbers from your current system, upload the file, and map the columns. Most clubs complete migration in under an hour. Our support team can assist with data mapping if needed.",
      },
      {
        q: "Can I import members from my existing system?",
        a: "Yes. PlayCourt accepts CSV uploads for bulk member import. You can also add members manually one at a time, or send email invitations for members to self-register. The import wizard guides you through mapping fields like name, email, phone, and membership type.",
      },
      {
        q: "What happens to existing bookings when I switch?",
        a: "Future bookings from your old system will need to be re-created in PlayCourt. We recommend running both systems in parallel for 1–2 weeks during transition, then doing a clean cutover. Most clubs announce the switch a week in advance and find members adapt within a day or two.",
      },
    ],
  },
  {
    id: "choosing",
    title: "Choosing Court Booking Software",
    questions: [
      {
        q: "What should I look for in court booking software?",
        a: "Prioritize these areas: (1) booking simplicity for members — if it takes more than 30 seconds, adoption will suffer; (2) real-time availability accuracy; (3) automatic reminders to reduce no-shows; (4) flexible pricing rules for peak/off-peak, member tiers, and guest rates; (5) member management and payment processing; and (6) mobile experience quality.",
      },
      {
        q: "How is PlayCourt different from CourtReserve or ClubAutomation?",
        a: "PlayCourt is built for small-to-medium clubs that want simplicity and fast setup. CourtReserve ($300–$800/month) and ClubAutomation are enterprise platforms designed for large multi-facility operations with complex needs. If you need a booking system that works in 10 minutes — not 10 weeks — PlayCourt is the better fit.",
      },
      {
        q: "Can I use PlayCourt for a public facility, not just a private club?",
        a: "Yes. PlayCourt works for both private member clubs and public municipal courts. For public facilities, you can enable open registration, set guest booking rates, and allow anyone to create an account and reserve a court. You maintain full control over pricing and booking rules.",
      },
    ],
  },
  {
    id: "support",
    title: "Support & Updates",
    questions: [
      {
        q: "What support does PlayCourt offer?",
        a: "All plans include email support with response times under 24 hours. Pro plans include priority support with faster response times. We also offer optional paid onboarding sessions for clubs that want a guided setup. Our help center includes step-by-step guides for every feature.",
      },
      {
        q: "How often does PlayCourt release updates?",
        a: "We push updates continuously — typically weekly for improvements and bug fixes, and monthly for new features. All updates are automatic and require no action from you. We publish a changelog so you can see what's new, and major updates are announced via email.",
      },
    ],
  },
];

// Build flat list for JSON-LD
const allQAs = faqSections.flatMap((s) => s.questions);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allQAs.map((qa) => ({
    "@type": "Question",
    name: qa.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: qa.a,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://playcourt.io" },
          { name: "FAQ", url: "https://playcourt.io/faq" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-6 py-24">
        {/* Breadcrumb */}
        <nav className="text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-brand-600">
            Home
          </Link>
          {" / "}
          <span className="text-slate-900">FAQ</span>
        </nav>

        <h1 className="text-3xl font-bold text-slate-900 mb-3">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Common questions about court booking software — from setup and
          pricing to features, migration, and choosing the right platform for
          your club.
        </p>

        {/* Jump-to-section nav */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <h2 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">
            Jump to Section
          </h2>
          <div className="flex flex-wrap gap-2">
            {faqSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-brand-600 hover:bg-brand-50 hover:border-brand-200 transition-colors"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>

        {/* FAQ Sections */}
        {faqSections.map((section) => (
          <section key={section.id} id={section.id} className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-5">
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.questions.map((qa) => (
                <div
                  key={qa.q}
                  className="bg-white border border-slate-200 rounded-xl p-5"
                >
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {qa.q}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {qa.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Bottom CTA */}
        <div className="bg-brand-50 border border-brand-200 rounded-xl p-6 text-center mt-12">
          <h2 className="text-xl font-bold text-slate-900 mb-2">
            Ready to simplify your court bookings?
          </h2>
          <p className="text-slate-600 mb-4">
            Start your free 14-day trial — set up in 10 minutes, no credit card
            required.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/admin"
              className="inline-block bg-brand-500 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-brand-600 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              href="/how-we-review"
              className="inline-block bg-white text-brand-600 border border-brand-200 px-5 py-2.5 rounded-lg font-medium hover:bg-brand-50 transition-colors"
            >
              How We Evaluate Software
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
          <Link
            href="/how-we-review"
            className="text-brand-600 hover:underline"
          >
            How We Evaluate
          </Link>
          <Link href="/contact" className="text-brand-600 hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
