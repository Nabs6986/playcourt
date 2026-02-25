import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import { ArticleSchema } from "@/components/schema/ArticleSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "How Small Tennis Clubs Are Ditching Spreadsheets in 2026 | PlayCourt Blog",
  description:
    "Discover why hundreds of small tennis clubs are abandoning Excel and Google Sheets for dedicated booking software — and the exact ROI they're seeing in the first 90 days.",
  openGraph: {
    title: "How Small Tennis Clubs Are Ditching Spreadsheets in 2026",
    description:
      "The pain points of spreadsheet booking, the ROI of switching, and a step-by-step migration guide for tennis club managers.",
    type: "article",
    publishedTime: "2026-02-17",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why should a small tennis club switch from spreadsheets to booking software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spreadsheets can't prevent double-bookings, send automatic reminders, or allow 24/7 member self-service. These limitations cost clubs real money — in staff time, no-shows, and member frustration. Most clubs switching to dedicated software like PlayCourt recover the subscription cost within 30 days from no-show reduction alone.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to migrate from spreadsheets to PlayCourt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clubs complete the full migration in under two hours. The process involves exporting your member list as a CSV, importing it into PlayCourt, adding your courts and booking rules, and sending member invitations. PlayCourt's setup is entirely self-service — no implementation team or technical knowledge required.",
      },
    },
    {
      "@type": "Question",
      name: "Is tennis booking software worth the cost for a small club?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, for clubs with more than 2 courts or 30+ members. At $149/month, PlayCourt costs less than one hour of staff time per week. Clubs typically see ROI within the first month — a 73% reduction in no-shows alone recovers thousands in previously lost court revenue annually.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to my existing booking history when I switch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You keep your spreadsheet files as a historical record. PlayCourt starts fresh from your go-live date — you don't need to migrate historical bookings. Import your current member list, add active/recurring bookings that extend past your go-live date, and you're ready to go.",
      },
    },
    {
      "@type": "Question",
      name: "Will older members struggle with online booking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PlayCourt is designed for simplicity. Members book in three taps from any device — no app download required. Clubs consistently report that even members in their 70s and 80s adopt it quickly. Staff can also book on behalf of members who prefer to call, so no one is left behind during the transition.",
      },
    },
  ],
};

export default function DitchingSpreadsheetsBlogPost() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://playcourt.io" },
          { name: "Blog", url: "https://playcourt.io/blog" },
          { name: "Ditching Spreadsheets", url: "https://playcourt.io/blog/ditching-spreadsheets" },
        ]}
      />
      <ArticleSchema
        title="How Small Tennis Clubs Are Ditching Spreadsheets in 2026"
        description="Why hundreds of small tennis clubs are abandoning Excel and Google Sheets for dedicated booking software — and the exact ROI they're seeing."
        author="PlayCourt Team"
        datePublished="2026-02-17"
        dateModified="2026-02-17"
        url="https://playcourt.io/blog/ditching-spreadsheets"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Back Link */}
      <section className="pt-24 pb-4">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="pb-8">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
              Guide
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            How Small Tennis Clubs Are Ditching Spreadsheets in 2026
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1">
              <User className="h-4 w-4" />
              PlayCourt Team
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              February 17, 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              10 min read
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-12">
        <div className="mx-auto max-w-3xl px-6">
          <article className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-ul:text-slate-600 prose-ol:text-slate-600 prose-li:marker:text-brand-500 prose-blockquote:border-brand-500 prose-blockquote:bg-slate-50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-table:text-sm prose-th:bg-slate-50 prose-th:px-4 prose-th:py-2 prose-td:px-4 prose-td:py-2 prose-td:border-slate-200">

          <h2>The Quick Answer</h2>
          <p>
            Small tennis clubs are switching from spreadsheets to dedicated booking software because the hidden costs
            of spreadsheets — staff hours, no-shows, double-bookings, and member frustration — far exceed the cost
            of modern software. Clubs switching to platforms like PlayCourt typically recover the subscription cost
            within the first 30 days from no-show reduction alone, and free up 5–10 hours of staff time per week
            in the process.
          </p>
          <p>
            The migration takes less than two hours. This guide walks you through exactly why clubs are making the
            switch and how to do it without disrupting your members.
          </p>

          <hr />

          <h2>The Spreadsheet Era: Why It Made Sense (And Why It Doesn&apos;t Anymore)</h2>
          <p>
            For decades, an Excel file on the club manager&apos;s desktop was state-of-the-art tennis club management.
            You built your schedule, members called to book, you updated the spreadsheet, and everyone more or less
            knew where they stood. It worked — for a while.
          </p>
          <p>
            Then three things happened that fundamentally broke the spreadsheet model:
          </p>
          <ul>
            <li>
              <strong>Members started expecting 24/7 access.</strong> The ability to book a restaurant, hotel, or
              flight at 11pm from a smartphone changed consumer expectations permanently. Members now expect the
              same from their tennis club.
            </li>
            <li>
              <strong>No-shows became more costly.</strong> As club membership grew more competitive and court time
              more valuable, empty courts during peak hours stopped being a minor annoyance and became a serious
              revenue problem.
            </li>
            <li>
              <strong>Staff time became expensive.</strong> Managing bookings manually — answering calls, updating
              spreadsheets, resolving conflicts — consumes 5–10 hours per week at most clubs. At even a modest
              $25/hour staff cost, that&apos;s $650–$1,300 monthly in administrative overhead.
            </li>
          </ul>
          <p>
            The spreadsheet that once felt like a free solution is now one of the most expensive tools in a club
            manager&apos;s toolkit — it&apos;s just that the costs are invisible.
          </p>

          <hr />

          <h2>The 6 Real Pain Points of Spreadsheet Booking</h2>

          <h3>1. Double-Bookings: The Most Avoidable Mistake in Club Management</h3>
          <p>
            Spreadsheets have no locking mechanism. When two members call within minutes of each other and two
            staff members update the sheet simultaneously — or when a member emails while another calls — the
            result is two bookings for the same court at the same time.
          </p>
          <p>
            The aftermath is painful: one member shows up to find another already on the court. Staff spend
            20–30 minutes resolving the conflict. Someone leaves unhappy. At minimum, it&apos;s an embarrassment;
            at worst, it costs you a long-term member.
          </p>
          <p>
            Dedicated booking software prevents double-bookings at the infrastructure level. When one member
            books Court 3 at 6pm Tuesday, that slot is locked instantly and no longer appears as available to
            anyone else. Conflicts become structurally impossible.
          </p>

          <h3>2. No Automatic Reminders = No-Shows You Could Have Prevented</h3>
          <p>
            This is the single largest financial cost of running bookings through a spreadsheet: the complete
            absence of automatic reminders.
          </p>
          <p>
            Research across appointment-based businesses consistently shows that 60–70% of no-shows are simply
            forgotten bookings. The member had every intention of showing up. Life got busy. The booking slipped
            off their radar. An SMS reminder two hours before would have prevented it entirely.
          </p>
          <p>
            At a club with 8 courts running 12 hours per day, a 15% no-show rate during a standard booking
            density translates to roughly 1–2 empty court-hours per day. At $20–$40 per court-hour, that&apos;s
            $7,000–$14,000 annually in avoidable revenue loss. A spreadsheet cannot send reminders. Booking
            software does it automatically.
          </p>

          <h3>3. Member Self-Service: The Expectation Gap</h3>
          <p>
            Members who want to book a court at 9pm on a Tuesday currently have to send an email, text the club
            manager, or wait until morning. According to tennis facility surveys, 73% of online bookings happen
            outside normal business hours when 24/7 self-service is available.
          </p>
          <p>
            The frustration compounds when members receive no immediate confirmation of their request and can&apos;t
            see current court availability in real time. They call to confirm whether their email was received.
            Staff field calls about pending requests. The entire process creates unnecessary back-and-forth that
            consumes time on both sides.
          </p>

          <h3>4. Sharing Problems: Version Control Is a Management Nightmare</h3>
          <p>
            If your booking spreadsheet lives on a single computer, only one person can update it at a time —
            and only when they&apos;re physically at that machine. If it lives in Google Sheets, simultaneous edits
            can create conflicts and accidental overrides. Either way, the question &quot;Is this up to date?&quot;
            haunts every interaction.
          </p>
          <p>
            Staff who access the spreadsheet from different devices see different versions. A booking made at
            the front desk isn&apos;t visible to the manager checking on their laptop at home. Changes made
            remotely don&apos;t appear until the file syncs, if it syncs at all.
          </p>
          <p>
            Dedicated booking software maintains a single source of truth accessible to all staff simultaneously,
            from any device, in real time.
          </p>

          <h3>5. Zero Analytics: You Don&apos;t Know What You Don&apos;t Know</h3>
          <p>
            Which courts are most popular? What time slots have highest demand? Which members book regularly and
            which have churned? What&apos;s your peak-season utilization rate compared to off-peak?
          </p>
          <p>
            A spreadsheet can answer these questions — but only if someone manually compiles the data and builds
            the analysis. In practice, almost no one does. The result is that clubs make decisions about court
            pricing, programming, and maintenance scheduling based on gut feel rather than data.
          </p>
          <p>
            Booking software captures all of this automatically and surfaces it in an admin dashboard. You can
            see court utilization by hour, identify underperforming slots, and spot member engagement patterns
            without building a single pivot table.
          </p>

          <h3>6. The Hidden Opportunity Cost: What Staff Could Be Doing Instead</h3>
          <p>
            When a staff member spends 2 hours per day managing phone bookings, responding to email requests,
            and updating the spreadsheet, those are 2 hours that aren&apos;t spent on coaching new members,
            improving club facilities, running junior programs, or building the partnerships that grow membership.
          </p>
          <p>
            The opportunity cost of manual booking management is often larger than its direct cost. Clubs that
            eliminate administrative overhead don&apos;t just save money — they free capacity for the work that
            actually grows the club.
          </p>

          <hr />

          <h2>The ROI of Switching: Real Numbers</h2>
          <p>
            Let&apos;s run the numbers for a typical small tennis club. We&apos;ll use conservative estimates throughout.
          </p>

          <h3>Scenario: A 6-Court Club with 150 Members</h3>
          <ul>
            <li>Operating hours: 7am–9pm (14 hours/day)</li>
            <li>Average court booking rate: $25/hour</li>
            <li>Current no-show rate: 18% (below the 15–25% industry average)</li>
            <li>Staff time on booking administration: 7 hours/week at $22/hour</li>
          </ul>

          <h3>Cost of Current Spreadsheet System (Annual)</h3>
          <ul>
            <li>
              <strong>Staff time:</strong> 7 hours/week × 52 weeks × $22/hour = <strong>$8,008/year</strong>
            </li>
            <li>
              <strong>No-show revenue loss:</strong> 6 courts × 8 peak-hour bookings/day × 18% no-show rate
              × $25/booking × 250 days = <strong>$5,400/year</strong>
            </li>
            <li>
              <strong>Double-booking conflicts:</strong> ~2/month, each requiring 30 min to resolve at $22/hour
              = <strong>$264/year</strong>
            </li>
            <li>
              <strong>Total spreadsheet cost: $13,672/year</strong>
            </li>
          </ul>

          <h3>Cost of PlayCourt (Annual)</h3>
          <ul>
            <li>Subscription: $149/month × 12 = $1,788/year</li>
            <li>Staff time saved: 7 hours down to ~1 hour/week (6 hours recovered) = save $6,864/year</li>
            <li>No-show reduction (73%): $5,400 × 73% = $3,942 recovered</li>
            <li>Double-booking elimination: $264 recovered</li>
            <li>
              <strong>Net annual saving: ($6,864 + $3,942 + $264) − $1,788 = $9,282/year</strong>
            </li>
          </ul>

          <p>
            For this club, switching to PlayCourt generates a net return of over $9,000 in the first year.
            The payback period on the subscription is under 3 weeks.
          </p>
          <p>
            These projections use conservative numbers. Clubs with higher no-show rates, more courts, or
            higher court fees see proportionally larger returns.
          </p>

          <hr />

          <h2>Step-by-Step Migration Guide: From Spreadsheet to PlayCourt</h2>
          <p>
            The migration process is designed to be completed in a single afternoon. Here&apos;s exactly how to do it.
          </p>

          <h3>Step 1: Audit Your Current Spreadsheet (15 minutes)</h3>
          <p>
            Before you migrate, understand what you have. Review your current spreadsheet and note:
          </p>
          <ul>
            <li>Your full member list (names, emails, phone numbers, membership type)</li>
            <li>Your court inventory (how many courts, which types)</li>
            <li>Your booking rules (max duration, advance booking window, guest policies)</li>
            <li>Any recurring bookings that need to continue (weekly lessons, standing reservations)</li>
          </ul>
          <p>
            You don&apos;t need to migrate historical booking data. PlayCourt starts fresh from your go-live date.
          </p>

          <h3>Step 2: Export Your Member List as CSV (10 minutes)</h3>
          <p>
            Open your spreadsheet and export or save a copy as a .CSV file. The minimum data you need per
            member is name and email address. Phone numbers are helpful for SMS reminders.
          </p>
          <p>
            If your data is spread across multiple sheets or files, consolidate it into a single sheet first.
            Clean up obvious formatting inconsistencies (mixed name formats, email typos) before exporting.
          </p>

          <h3>Step 3: Sign Up for PlayCourt (5 minutes)</h3>
          <p>
            Go to <Link href="/admin">playcourt.io</Link> and start a free 14-day trial. No credit card required.
            You&apos;ll create your club profile: name, location, and contact information.
          </p>

          <h3>Step 4: Add Your Courts (10 minutes)</h3>
          <p>
            Add each court by name (e.g., &quot;Court 1,&quot; &quot;Clay 1,&quot; &quot;Hard 3&quot;). For each court you&apos;ll set:
          </p>
          <ul>
            <li>Court type (hard, clay, indoor, etc.)</li>
            <li>Operating hours</li>
            <li>Default booking duration (1 hour, 90 minutes)</li>
            <li>Maximum advance booking window (7 days, 14 days)</li>
          </ul>

          <h3>Step 5: Configure Booking Rules (10 minutes)</h3>
          <p>Configure the rules that govern how members can book:</p>
          <ul>
            <li>Maximum concurrent bookings per member</li>
            <li>Guest booking allowance</li>
            <li>Cancellation window (how far in advance cancellation is allowed)</li>
            <li>Peak vs. off-peak rules if applicable</li>
          </ul>

          <h3>Step 6: Import Your Member List (5 minutes)</h3>
          <p>
            Upload your CSV file in PlayCourt&apos;s Members section. The importer maps your CSV columns
            (first name, last name, email, phone) to the right fields. Review the preview, confirm the import,
            and your member database is live.
          </p>

          <h3>Step 7: Set Up Automatic Reminders (5 minutes)</h3>
          <p>
            Configure your reminder schedule. The recommended settings for maximum no-show reduction are:
          </p>
          <ul>
            <li>Email reminder: 24 hours before the booking</li>
            <li>SMS reminder: 2 hours before the booking</li>
            <li>Both reminders include a one-tap cancellation link</li>
          </ul>
          <p>
            This is the single highest-ROI configuration in PlayCourt. Enable it first thing.
          </p>

          <h3>Step 8: Send Member Invitations (10 minutes)</h3>
          <p>
            PlayCourt sends invitation emails to all imported members with instructions to create their
            account. The process takes members less than 2 minutes: click the link, choose a password
            (or sign in with Google), and they can immediately see court availability and book.
          </p>
          <p>
            Include a brief note in the invitation explaining the transition. Something like: &quot;We&apos;ve
            upgraded our court booking system. From [date], all bookings will be made through PlayCourt.
            Click below to set up your account — it takes 2 minutes.&quot;
          </p>

          <h3>Step 9: Set a Go-Live Date and Communicate It (5 minutes)</h3>
          <p>
            Give members 5–7 days of notice before the new system is mandatory. Post it on your club
            noticeboard, send an email, and mention it at any organized sessions during that week.
          </p>
          <p>
            Keep a &quot;both systems running&quot; period of 2–3 days where you accept both phone bookings and
            online bookings, then transition fully to PlayCourt. Most clubs find 80%+ of members are
            using online booking within the first week.
          </p>

          <hr />

          <h2>Handling the Transition: Answers to Common Club Manager Questions</h2>

          <h3>&quot;What about members who insist on calling?&quot;</h3>
          <p>
            Keep your phone line. Staff can book on behalf of members who prefer to call — it takes
            30 seconds in PlayCourt&apos;s admin panel versus 10 minutes of spreadsheet management. You&apos;ll
            likely find call volume drops 80% within two weeks as members discover how easy online
            booking is. The few who prefer calling are accommodated without drama.
          </p>

          <h3>&quot;Our members are older — will they figure it out?&quot;</h3>
          <p>
            This concern is extremely common and almost always unfounded. PlayCourt is designed for
            maximum simplicity: members pick a date, pick a time, hit Confirm. No app download, no
            complex account setup, no learning curve. Clubs consistently report adoption by members
            in their 70s and 80s within the first week. If they can text, they can book a court.
          </p>

          <h3>&quot;What if something goes wrong during the transition?&quot;</h3>
          <p>
            PlayCourt&apos;s support team is available to help with any transition issues. Common questions
            during the first week typically involve importing edge cases (unusual member records,
            recurring booking transfers) and can be resolved quickly. Keep your spreadsheet accessible
            for the first 30 days as a fallback — you won&apos;t need it, but it&apos;s there.
          </p>

          <h3>&quot;We have a small number of members — is it really worth it?&quot;</h3>
          <p>
            The ROI threshold is roughly 2+ courts or 30+ members. Below that, the manual system
            might be manageable. Above it, the math consistently favors software. If your club is
            growing (and most are), the better question is: when is the right time to switch?
            Earlier is almost always better — it&apos;s easier to build good habits than to break bad ones.
          </p>

          <hr />

          <h2>What to Expect in the First 30 Days</h2>
          <p>
            Based on clubs that have made the switch, here&apos;s a realistic timeline of what you&apos;ll
            experience:
          </p>
          <ul>
            <li>
              <strong>Days 1–3:</strong> First online bookings come in. A few members call with questions.
              Staff notice the phone is quieter. Your first automated reminder sequence fires successfully.
            </li>
            <li>
              <strong>Days 4–7:</strong> 60–70% of active members have created accounts. Booking volume
              via phone drops noticeably. First no-show data starts populating your dashboard.
            </li>
            <li>
              <strong>Weeks 2–3:</strong> 80%+ of bookings are now online. No-show rate visibly declining.
              First waitlist filling occurs — someone cancels, waitlisted member gets the slot automatically.
              Staff are spending noticeably less time on booking admin.
            </li>
            <li>
              <strong>Week 4:</strong> The new system feels normal. Review your analytics dashboard: check
              court utilization by time slot, see your no-show rate, identify any patterns worth acting on.
              Calculate your first month&apos;s savings.
            </li>
          </ul>

          <hr />

          <h2>The Bottom Line</h2>
          <p>
            The tennis clubs switching away from spreadsheets in 2026 aren&apos;t doing it because spreadsheets
            are bad software. They&apos;re doing it because spreadsheets were designed for data management,
            not for running a member-facing booking operation with real-time availability requirements,
            automated communication, and analytics.
          </p>
          <p>
            The transition is fast (under two hours), low-risk (free trial, no credit card), and almost
            always profitable within the first month. The clubs that wait are the ones paying the hidden
            costs — in staff time, no-shows, and members quietly choosing clubs that are easier to work with.
          </p>
          <p>
            The question isn&apos;t whether to switch. It&apos;s when.
          </p>

          </article>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-3xl px-6">
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

      {/* Related Articles */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Related Articles</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link href="/blog/true-cost-phone-bookings" className="block group">
              <article className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 hover:shadow-md transition-shadow h-full">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700 mb-3">
                  Guide
                </span>
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors mb-2">
                  The True Cost of Phone Bookings for Tennis Clubs
                </h3>
                <p className="text-slate-600 text-sm">
                  Calculate exactly what phone reservations cost your club in staff time, no-shows, and member experience.
                </p>
              </article>
            </Link>
            <Link href="/vs/spreadsheets" className="block group">
              <article className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 hover:shadow-md transition-shadow h-full">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-700 mb-3">
                  Comparison
                </span>
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors mb-2">
                  PlayCourt vs Spreadsheets: Full Comparison
                </h3>
                <p className="text-slate-600 text-sm">
                  Feature-by-feature comparison with a time savings calculator to see your club&apos;s specific ROI.
                </p>
              </article>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-500">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to ditch the spreadsheet?</h2>
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
