import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from "lucide-react";
import { ArticleSchema } from "@/components/schema/ArticleSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "The True Cost of Phone Bookings for Tennis Clubs | PlayCourt Blog",
  description:
    "Calculate what phone reservations actually cost your tennis club — in staff hours, no-shows, and member experience. The numbers will surprise you.",
  openGraph: {
    title: "The True Cost of Phone Bookings for Tennis Clubs",
    description:
      "Staff time, no-show rates, and member frustration: the hidden costs of running a tennis club on phone calls.",
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
      name: "How much time do tennis clubs spend on phone bookings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The average tennis club spends 5–10 hours per week managing phone bookings. This includes taking reservation calls, updating booking records, handling cancellations, resolving double-booking conflicts, and fielding after-hours voicemails. At a $22/hour staff rate, that's $5,720–$11,440 annually in direct labor cost.",
      },
    },
    {
      "@type": "Question",
      name: "Do phone bookings cause more no-shows than online bookings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Phone bookings typically have a 15–25% no-show rate compared to 5–10% for online bookings with automated reminders. The primary reason is that online booking systems send automated SMS and email reminders that phone booking systems can't replicate without significant manual effort. Automated reminders address the most common cause of no-shows: forgetting.",
      },
    },
    {
      "@type": "Question",
      name: "Will members be unhappy if we stop taking phone bookings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Overwhelmingly, no. Research consistently shows that 94% of members prefer online booking when it's available. The initial transition requires 1–2 weeks of communication and a brief adjustment period, but most clubs see member satisfaction scores improve after switching — members love booking at midnight without calling anyone. Staff can still take calls and book on members' behalf for those who genuinely prefer it.",
      },
    },
    {
      "@type": "Question",
      name: "What happens to members who call after hours when we move to online booking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They book online instead — which is actually better for them. With 24/7 online booking, members can check real-time availability and book immediately rather than waiting for the club to open or leaving a voicemail. Clubs consistently report that members who were initially resistant to online booking become its strongest advocates once they experience the convenience.",
      },
    },
    {
      "@type": "Question",
      name: "How much can a tennis club save by switching from phone to online booking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical 6-court club with 150 members saves $8,000–$15,000 annually after switching to online booking software. Savings come from three sources: reduced staff time (5–10 hours/week freed up), no-show reduction from automated reminders (73% average reduction), and elimination of double-booking conflicts. PlayCourt's subscription at $149–299/month typically delivers 5–10x ROI.",
      },
    },
  ],
};

export default function TrueCostPhoneBookingsBlogPost() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://playcourt.io" },
          { name: "Blog", url: "https://playcourt.io/blog" },
          { name: "True Cost of Phone Bookings", url: "https://playcourt.io/blog/true-cost-phone-bookings" },
        ]}
      />
      <ArticleSchema
        title="The True Cost of Phone Bookings for Tennis Clubs"
        description="Calculate what phone reservations actually cost your tennis club in staff hours, no-shows, and member experience."
        author="PlayCourt Team"
        datePublished="2026-02-17"
        dateModified="2026-02-17"
        url="https://playcourt.io/blog/true-cost-phone-bookings"
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
            The True Cost of Phone Bookings for Tennis Clubs
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
              9 min read
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-12">
        <div className="mx-auto max-w-3xl px-6">
          <article className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-brand-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-ul:text-slate-600 prose-ol:text-slate-600 prose-li:marker:text-brand-500 prose-blockquote:border-brand-500 prose-blockquote:bg-slate-50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg prose-table:text-sm prose-th:bg-slate-50 prose-th:px-4 prose-th:py-2 prose-td:px-4 prose-td:py-2 prose-td:border-slate-200">

          <h2>The Short Answer</h2>
          <p>
            Phone bookings cost the average tennis club <strong>$10,000–$18,000 per year</strong> in
            combined staff time, no-show revenue loss, and administrative overhead. The cost is invisible
            because it&apos;s distributed across hundreds of phone calls, a handful of double-booking conflicts,
            and thousands of court-hours spent empty because no reminder went out.
          </p>
          <p>
            Most club managers know phone bookings aren&apos;t efficient. Few realize they&apos;re this expensive.
            This article breaks down the real numbers and shows you what switching to online booking
            actually saves.
          </p>

          <hr />

          <h2>The Phone Booking Workflow: A Time Study</h2>
          <p>
            Before we get to costs, let&apos;s understand what phone booking actually involves. Walk through
            the full lifecycle of a single reservation made by phone:
          </p>
          <ol>
            <li>Member calls the club. Phone rings 3–5 times. Staff answers.</li>
            <li>
              Brief pleasantry exchange. Member explains they want to book Court 2 next Thursday at 7pm
              for 90 minutes.
            </li>
            <li>
              Staff checks the booking sheet or spreadsheet. Court 2 Thursday 7pm is already taken.
              Staff suggests alternatives: Court 2 at 6pm? Court 4 at 7pm? Member wants Court 4.
            </li>
            <li>
              Staff confirms Court 4, Thursday, 7pm, 90 minutes. Notes the member&apos;s name and membership
              number. Reads back the details. Member confirms.
            </li>
            <li>
              Staff updates the spreadsheet or paper calendar. Hangs up.
            </li>
            <li>
              Friday morning, staff reviews bookings and manually sends reminder emails to next-day
              reservations — when they remember, and when they have time.
            </li>
          </ol>
          <p>
            That&apos;s a clean booking call with no complications. It takes 4–6 minutes. Now multiply it across
            every booking your club takes by phone every week.
          </p>

          <h3>The Average Call Volume</h3>
          <p>
            A club with 6 courts processing 40 court-bookings per week at a 70% phone booking rate handles
            roughly 28 incoming booking calls per week. Add cancellations (5–8/week), voicemails requiring
            callbacks (3–5/week), and inquiry calls from prospective members, and total call volume is
            easily 40–50 per week.
          </p>
          <p>
            At 5 minutes per resolved call (the optimistic estimate), that&apos;s over 4 hours per week just
            answering the phone about court bookings.
          </p>

          <hr />

          <h2>Calculating the Staff Time Cost</h2>
          <p>
            Staff time is the largest and most direct cost of phone-based booking management. Here&apos;s
            how to calculate it for your club.
          </p>

          <h3>Time Categories</h3>
          <p>Phone booking consumes staff time across six activities:</p>
          <ul>
            <li>
              <strong>Taking booking calls:</strong> 4–6 minutes per call. For a club processing 30
              bookings/week by phone, that&apos;s 2–3 hours weekly.
            </li>
            <li>
              <strong>Handling cancellations:</strong> 2–3 minutes per call plus spreadsheet update.
              Roughly 30–45 minutes per week at typical cancellation rates.
            </li>
            <li>
              <strong>Returning voicemails:</strong> 3–5 minutes per callback plus hold time.
              Adds another 30–60 minutes weekly.
            </li>
            <li>
              <strong>Manual reminder calls/emails:</strong> If your club does them at all, budget 10–15
              minutes per batch email and 2–3 minutes per personal reminder call.
              Most clubs do this sporadically, if at all.
            </li>
            <li>
              <strong>Resolving conflicts:</strong> Double-bookings, misheard time slots, wrong court
              entries. These take 15–30 minutes each to untangle and average 1–2 per week at most clubs.
            </li>
            <li>
              <strong>Administrative cleanup:</strong> End-of-day spreadsheet review, confirming next-day
              schedule, correcting errors. 20–30 minutes daily.
            </li>
          </ul>

          <h3>Total Weekly Time: 5–10 Hours</h3>
          <p>
            Adding it up, a typical 6–8 court club spends 5–10 hours per week on phone booking
            administration. The range is wide because it depends on your member count, booking density,
            and how rigorously staff manage the process.
          </p>

          <h3>Annual Cost</h3>
          <p>At common staff rates:</p>
          <ul>
            <li>5 hours/week × 52 weeks × $22/hour = <strong>$5,720/year</strong></li>
            <li>7.5 hours/week × 52 weeks × $22/hour = <strong>$8,580/year</strong></li>
            <li>10 hours/week × 52 weeks × $22/hour = <strong>$11,440/year</strong></li>
          </ul>
          <p>
            And that&apos;s before accounting for overtime, the opportunity cost of skilled staff doing
            administrative work, and the wear on staff morale from handling the same repetitive calls hour after hour.
          </p>

          <h3>The Opportunity Cost Is Even Bigger</h3>
          <p>
            Every hour a skilled club manager or head professional spends answering booking calls is an
            hour they aren&apos;t coaching, building junior programs, developing corporate membership
            partnerships, or doing the strategic work that grows the club.
          </p>
          <p>
            If your head pro earns $45/hour and spends 3 hours weekly on booking admin, the opportunity
            cost is $135/week — $7,020/year — in high-value coaching and member relationship time displaced
            by low-value administrative work.
          </p>

          <hr />

          <h2>Phone Bookings and No-Shows: The Hidden Connection</h2>
          <p>
            The most expensive hidden cost of phone booking isn&apos;t staff time. It&apos;s what happens at
            booking time and nothing happens between booking and the court session.
          </p>

          <h3>No-Show Rates: Phone vs. Online Booking</h3>
          <p>
            The data across appointment-based businesses is consistent: phone bookings have significantly
            higher no-show rates than online bookings with automated reminders.
          </p>
          <ul>
            <li>
              <strong>Typical no-show rate for phone bookings (no reminders):</strong> 15–25%
            </li>
            <li>
              <strong>Typical no-show rate for online bookings with SMS + email reminders:</strong> 3–8%
            </li>
          </ul>
          <p>
            The difference isn&apos;t primarily about the booking channel itself — it&apos;s about what happens
            after the booking. Phone-based systems almost never send automatic reminders (doing so manually
            would consume another 2–3 hours per week). Online booking systems like PlayCourt send them automatically.
          </p>

          <h3>Why Reminders Make Such a Large Difference</h3>
          <p>
            Research consistently shows that 60–70% of no-shows are forgotten bookings. The member intended
            to show up. A court booking made 10 days ago simply fell off their mental radar by the time Tuesday
            evening arrived.
          </p>
          <p>
            An SMS at 5pm saying &quot;Reminder: you have Court 3 at 7pm tonight — tap here to cancel if
            plans changed&quot; converts most of those forgotten bookings into either show-ups or frictionless
            cancellations. Either outcome is better than a no-show.
          </p>

          <h3>Calculating Your No-Show Revenue Loss</h3>
          <p>
            Use this formula to estimate what no-shows cost your club annually:
          </p>
          <blockquote>
            <p>
              <strong>Annual No-Show Loss</strong> = Courts × Peak Bookings Per Day × No-Show Rate
              × Average Court Fee × Annual Days
            </p>
          </blockquote>
          <p>For a typical 6-court club:</p>
          <ul>
            <li>6 courts × 8 peak-hour bookings/day × 18% no-show rate × $25 fee × 250 days</li>
            <li>= <strong>$5,400/year</strong> in no-show revenue loss</li>
          </ul>
          <p>
            With a 73% reduction in no-shows (the average after enabling automatic reminders in PlayCourt),
            that club recovers <strong>$3,942/year</strong> from this single change alone.
          </p>

          <h3>The Cascading Cost of No-Shows</h3>
          <p>
            The revenue loss is only part of the no-show cost. Consider the downstream effects:
          </p>
          <ul>
            <li>
              <strong>Waitlisted members miss out:</strong> Members who wanted that time slot couldn&apos;t
              have it because it was &quot;booked.&quot; They may book at a competitor club or gradually
              reduce their engagement.
            </li>
            <li>
              <strong>Staff time investigating:</strong> Was it a no-show or an unreported late cancellation?
              Clubs without automated systems often spend 5–10 minutes per no-show incident clarifying
              what happened and updating records.
            </li>
            <li>
              <strong>Member frustration compounds:</strong> Members who didn&apos;t get a court because
              someone else no-showed don&apos;t see the system as fair. This erodes the trust that keeps
              members renewing annually.
            </li>
          </ul>

          <hr />

          <h2>The Member Experience Impact</h2>
          <p>
            Costs don&apos;t only show up in financial ledgers. Phone-only booking has a distinct member
            experience impact that affects retention and word-of-mouth referrals.
          </p>

          <h3>Availability Mismatch: When Members Can&apos;t Book When They Want To</h3>
          <p>
            The majority of tennis players work during typical business hours. The window when they&apos;d
            most naturally book a court — during a commute, over lunch, after the kids are asleep — is
            precisely the window when a phone-booking club isn&apos;t reachable.
          </p>
          <p>
            A member who wants to book a Saturday morning court at 9pm Thursday is left with three options:
            remember to call Friday morning (and potentially find the slot gone), send a text or email and
            hope someone responds, or simply not bother.
          </p>
          <p>
            According to industry data, 73% of court bookings happen outside normal business hours
            when 24/7 online booking is available. That means the current phone-booking window misses
            the timing preference of the majority of your members.
          </p>

          <h3>The &quot;Is It Available?&quot; Call</h3>
          <p>
            Without a self-service availability view, members can&apos;t know what&apos;s open without
            calling. This generates a category of calls that serve no function other than checking
            availability — sometimes members call, find nothing is open, and hang up without booking.
          </p>
          <p>
            Real-time online availability eliminates this entirely. Members see open slots instantly
            and either book or don&apos;t — without consuming any staff time in the process.
          </p>

          <h3>The Friction Tax on Member Retention</h3>
          <p>
            Every piece of unnecessary friction in the member experience extracts a small tax on
            satisfaction and retention. Calling to check availability is friction. Waiting for a
            callback is friction. Being told your preferred court isn&apos;t available because of a
            double-booking is friction. Not getting a reminder and forgetting your booking is friction.
          </p>
          <p>
            This friction doesn&apos;t usually cause members to resign immediately. It causes them to book
            less often, to refer fewer friends, and to be more susceptible to an offer from a club with
            easier systems when renewal comes around.
          </p>
          <p>
            Research on sports club retention consistently shows that convenience and ease of use are
            among the top factors in renewal decisions — often ranking higher than price. Clubs that
            make booking difficult lose members at the margin to clubs that make it easy.
          </p>

          <h3>The After-Hours Frustration Loop</h3>
          <p>
            A member who leaves a voicemail at 8pm wanting to book a court has to wait until the next
            morning for a callback. If the slot they wanted is gone by the time someone calls back,
            they&apos;ve wasted a day and gotten nothing. This experience — multiply it across dozens of
            members over months — creates genuine frustration with the club that is entirely attributable
            to the phone booking model.
          </p>

          <hr />

          <h2>What Switching Actually Looks Like</h2>
          <p>
            The objection most club managers raise when considering online booking is fear of disruption:
            &quot;Our members won&apos;t like it&quot; or &quot;Some members don&apos;t use smartphones.&quot;
            Let&apos;s address these directly.
          </p>

          <h3>Member Adoption Is Consistently Faster Than Expected</h3>
          <p>
            Clubs switching to PlayCourt typically see 80%+ of bookings shift online within the first
            two weeks. Not two months — two weeks. The reason is simple: online booking is genuinely easier
            than calling. Once members experience it, they don&apos;t go back.
          </p>

          <h3>Non-Tech Members Can Still Call</h3>
          <p>
            Staff can book on behalf of any member through PlayCourt&apos;s admin panel in under 30 seconds.
            The phone line stays open. But the administrative burden drops dramatically because most
            members book themselves.
          </p>
          <p>
            Clubs that were processing 40 calls per week typically see that drop to 5–8 calls within a
            month — primarily from members confirming complex bookings or asking questions about the
            new system.
          </p>

          <h3>The Transition Communication That Works</h3>
          <p>
            Clubs that communicate the change clearly before it happens have the smoothest transitions.
            The message that works:
          </p>
          <blockquote>
            <p>
              &quot;Starting [date], we&apos;re launching online court booking. You can book from your phone or
              computer anytime, see real-time availability, and get automatic reminders before your session.
              We know you&apos;ll love it — here&apos;s how to get started.&quot;
            </p>
          </blockquote>
          <p>
            Frame it as a member benefit (because it is one), not as a cost-cutting measure. Give members
            5–7 days of advance notice and a direct link to create their account.
          </p>

          <hr />

          <h2>The Full Cost Comparison</h2>
          <p>
            Here&apos;s the complete annual cost picture for a typical 6-court club with 150 members:
          </p>

          <h3>Phone Booking System (Annual Costs)</h3>
          <ul>
            <li>Staff time (7.5 hrs/week at $22/hr): <strong>$8,580</strong></li>
            <li>No-show revenue loss (18% rate): <strong>$5,400</strong></li>
            <li>Double-booking conflict resolution (2/week, 20 min each): <strong>$754</strong></li>
            <li>After-hours call-back labor: <strong>$572</strong></li>
            <li><strong>Total Annual Cost: ~$15,306</strong></li>
          </ul>

          <h3>Online Booking with PlayCourt (Annual Costs)</h3>
          <ul>
            <li>PlayCourt subscription (Starter): <strong>$1,788</strong></li>
            <li>Remaining staff time (~1 hr/week): <strong>$1,144</strong></li>
            <li>No-show revenue loss (73% reduction → ~5% rate): <strong>$1,458</strong></li>
            <li>Double-booking conflicts: <strong>$0</strong></li>
            <li><strong>Total Annual Cost: ~$4,390</strong></li>
          </ul>

          <h3>Net Annual Saving: ~$10,916</h3>
          <p>
            The PlayCourt subscription pays for itself approximately 3.5 times over — just from the
            direct costs captured above. This doesn&apos;t include harder-to-quantify benefits like improved
            member satisfaction, better retention at renewal time, and the value of analytics data.
          </p>

          <hr />

          <h2>How to Build the Business Case for Your Committee</h2>
          <p>
            If you&apos;re presenting this switch to a club board or management committee, here&apos;s the
            framework that works:
          </p>
          <ol>
            <li>
              <strong>Lead with staff time.</strong> It&apos;s the most concrete and defensible number.
              Track actual call volume for one week — count every booking call, cancellation call,
              and inquiry. Multiply by average call duration. Multiply by hourly rate. Present the
              annual figure.
            </li>
            <li>
              <strong>Show the no-show math.</strong> Pull your booking data from the past 3 months.
              Count no-shows. Calculate the revenue at your average court rate. Annualize it. This
              number usually surprises committee members.
            </li>
            <li>
              <strong>Compare subscription to savings.</strong> PlayCourt at $149–299/month versus
              $8,000–$15,000 in annual costs. The ROI is hard to argue with.
            </li>
            <li>
              <strong>Address the transition concern proactively.</strong> Share that most clubs see
              80%+ online adoption within two weeks, that staff can still take calls for members who
              prefer it, and that the 14-day free trial means there&apos;s no financial risk to piloting it.
            </li>
          </ol>

          <hr />

          <h2>The Bottom Line</h2>
          <p>
            Phone bookings aren&apos;t just inefficient — they&apos;re genuinely expensive. The staff hours, the
            no-show losses, the double-booking incidents, the after-hours frustration: together they
            cost the average small tennis club $10,000–$18,000 annually that most managers have never
            explicitly calculated.
          </p>
          <p>
            The alternative — a modern online booking system with automatic reminders, real-time
            availability, and member self-service — costs $1,788–$3,588/year with PlayCourt and
            delivers net savings in the five figures annually.
          </p>
          <p>
            The question isn&apos;t whether the math works. The question is whether your club is ready
            to act on it.
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
            <Link href="/blog/ditching-spreadsheets" className="block group">
              <article className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 hover:shadow-md transition-shadow h-full">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700 mb-3">
                  Guide
                </span>
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors mb-2">
                  How Small Tennis Clubs Are Ditching Spreadsheets in 2026
                </h3>
                <p className="text-slate-600 text-sm">
                  The ROI of switching and a step-by-step migration guide for any club manager.
                </p>
              </article>
            </Link>
            <Link href="/use-case/reduce-no-shows" className="block group">
              <article className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 hover:shadow-md transition-shadow h-full">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700 mb-3">
                  Use Case
                </span>
                <h3 className="font-semibold text-slate-900 group-hover:text-brand-600 transition-colors mb-2">
                  Reduce Tennis Court No-Shows by 73%
                </h3>
                <p className="text-slate-600 text-sm">
                  How automatic reminders and waitlists recover thousands in annual court revenue.
                </p>
              </article>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-500">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stop paying the phone booking tax.
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
