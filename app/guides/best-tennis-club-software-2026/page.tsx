import { Metadata } from "next";
import Link from "next/link";
import {
  Trophy,
  Building2,
  Dumbbell,
  Sparkles,
  Target,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  Clock,
  DollarSign,
  Users,
  Zap,
  Settings,
  ChevronDown,
  ChevronUp,
  Star,
} from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { ItemListSchema } from "@/components/schema/ItemListSchema";

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const baseUrl = "https://playcourt.io";
const pageUrl = `${baseUrl}/guides/best-tennis-club-software-2026`;
const lastUpdated = "February 25, 2026";

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title:
    "5 Best Tennis Club Software 2026 (Honest Comparison) | PlayCourt",
  description:
    "We compared the top tennis club management platforms for 2026 — PlayCourt, CourtReserve, Club Automation, Mindbody, and EZFacility — with real prices, setup times, and honest verdicts.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "5 Best Tennis Club Software 2026 — Honest Comparison",
    description:
      "Real prices, real setup times. We rank the top 5 tennis club management platforms so you can pick the best fit for your club.",
    url: pageUrl,
    siteName: "PlayCourt",
    type: "article",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Best Tennis Club Software 2026 — PlayCourt Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "5 Best Tennis Club Software 2026",
    description:
      "Honest comparison of the top tennis club management platforms with real pricing.",
    images: [`${baseUrl}/og-image.png`],
  },
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Pick {
  rank: number;
  name: string;
  slug: string;
  badge: string;
  price: string;
  priceNote: string;
  setupTime: string;
  bestFor: string;
  description: string;
  pros: string[];
  cons: string[];
  verdict: string;
  icon: typeof Trophy;
  isPlayCourt?: boolean;
}

const picks: Pick[] = [
  {
    rank: 1,
    name: "PlayCourt",
    slug: "playcourt",
    badge: "Our Pick",
    price: "$149/mo",
    priceNote: "Starter plan. Pro plan $299/mo.",
    setupTime: "10 minutes",
    bestFor: "Small-to-medium tennis clubs (1-12 courts)",
    description:
      "PlayCourt is purpose-built for tennis clubs that want to get online fast without enterprise complexity. Members book courts in 30 seconds, automatic reminders cut no-shows by 73%, and the whole system goes live in about 10 minutes — no IT department required.",
    pros: [
      "10-minute setup, no implementation fees",
      "Members book in under 30 seconds",
      "Automatic reminders reduce no-shows by 73%",
      "Transparent, affordable pricing",
      "Mobile-friendly for members and admins",
    ],
    cons: [
      "League management on Pro plan only",
      "Payment processing coming soon",
      "Newer platform (launched 2024)",
    ],
    verdict:
      "If you run a small-to-medium tennis club and want to stop juggling phone calls and paper sign-up sheets, PlayCourt is the fastest path to a modern booking system. Setup is measured in minutes, not weeks.",
    icon: Trophy,
    isPlayCourt: true,
  },
  {
    rank: 2,
    name: "CourtReserve",
    slug: "courtreserve",
    badge: "Best Enterprise",
    price: "$300-800/mo",
    priceNote: "Varies by facility size and feature set",
    setupTime: "2-4 weeks",
    bestFor: "Large facilities with 20+ courts and dedicated IT staff",
    description:
      "CourtReserve is the go-to platform for large tennis facilities that need deep feature sets — league ladders, multi-location management, and advanced reporting. The trade-off is a longer setup period and significantly higher cost.",
    pros: [
      "Comprehensive league and ladder management",
      "Multi-location support",
      "Advanced reporting and analytics",
      "Established platform with large user base",
      "Integrated payment processing",
    ],
    cons: [
      "Expensive — starts at $300/mo",
      "2-4 week implementation timeline",
      "Steeper learning curve for staff",
      "Implementation fees often required",
    ],
    verdict:
      "CourtReserve is a strong choice for large tennis facilities with the budget and IT resources to handle implementation. For smaller clubs, the cost and complexity may be overkill.",
    icon: Building2,
  },
  {
    rank: 3,
    name: "Club Automation (Daxko)",
    slug: "clubautomation",
    badge: "Best for Multi-Sport",
    price: "$500-1,500/mo",
    priceNote: "Enterprise pricing, annual contracts typical",
    setupTime: "4-8 weeks",
    bestFor: "Health clubs and multi-sport facilities with tennis programs",
    description:
      "Club Automation (now part of Daxko) targets large health clubs that happen to have tennis courts alongside pools, gyms, and group fitness. It is a full-facility management system, not a tennis-first platform.",
    pros: [
      "Full health club management suite",
      "Multi-sport scheduling (tennis, swim, fitness)",
      "Member billing and access control",
      "Enterprise-grade reporting",
    ],
    cons: [
      "Very expensive for tennis-only clubs",
      "Long implementation cycles (4-8 weeks)",
      "Tennis features are secondary to gym management",
      "Annual contracts with limited flexibility",
    ],
    verdict:
      "If you run a multi-sport health club and tennis is one of several programs, Club Automation covers everything under one roof. Tennis-only clubs will find it overbuilt and overpriced.",
    icon: Dumbbell,
  },
  {
    rank: 4,
    name: "Mindbody",
    slug: "mindbody",
    badge: "Most Popular",
    price: "$129-399/mo",
    priceNote: "Depends on features and class size",
    setupTime: "1-3 weeks",
    bestFor: "General fitness businesses adding court booking",
    description:
      "Mindbody is the biggest name in fitness software, serving yoga studios, gyms, and wellness businesses. It offers court booking as part of its broader platform, but tennis is not its primary focus.",
    pros: [
      "Massive marketplace and consumer app",
      "Integrated payments and point-of-sale",
      "Strong marketing and retention tools",
      "Well-known brand in fitness tech",
    ],
    cons: [
      "Tennis/court features are basic compared to specialists",
      "Transaction fees on top of subscription",
      "Interface can feel complex for simple court booking",
      "Support response times vary",
    ],
    verdict:
      "Mindbody is a solid general fitness platform, but its court booking feels like an add-on rather than a core feature. Tennis clubs may find themselves paying for features they never use.",
    icon: Sparkles,
  },
  {
    rank: 5,
    name: "EZFacility",
    slug: "ezfacility",
    badge: "Best Mid-Range",
    price: "$150+/mo",
    priceNote: "Custom pricing based on facility needs",
    setupTime: "1-2 weeks",
    bestFor: "Mid-size facilities with multiple sports",
    description:
      "EZFacility serves a range of sports facilities — from indoor soccer to basketball to tennis. It offers solid scheduling and billing but is a generalist platform, not a tennis specialist.",
    pros: [
      "Good scheduling for multiple sport types",
      "Integrated billing and invoicing",
      "Reasonable mid-range pricing",
      "Customizable for different facility layouts",
    ],
    cons: [
      "Not tennis-specific — lacks court-focused workflows",
      "Interface feels dated compared to modern platforms",
      "Limited tennis-specific features (ladders, matchmaking)",
      "Custom pricing means less transparency",
    ],
    verdict:
      "EZFacility is a competent mid-range option for multi-sport facilities. Tennis-focused clubs will notice the lack of sport-specific features that platforms like PlayCourt or CourtReserve provide.",
    icon: Target,
  },
];

const howToChoose = [
  {
    title: "Facility Size",
    description:
      "A 4-court club has different needs than a 30-court facility. Smaller clubs benefit from lightweight tools like PlayCourt; large operations may need CourtReserve's enterprise features.",
    icon: Building2,
  },
  {
    title: "Setup Time & Tech Resources",
    description:
      "If you don't have an IT team, choose software that goes live in minutes (PlayCourt), not weeks (Club Automation). Implementation timelines range from 10 minutes to 8 weeks.",
    icon: Clock,
  },
  {
    title: "Court-Specific Features",
    description:
      "Look for tennis-first features: real-time court availability, automatic reminders, member booking portals, and league management. General fitness platforms often treat courts as an afterthought.",
    icon: Zap,
  },
  {
    title: "Member Management Needs",
    description:
      "Consider whether you need simple member directories or full health-club management with billing, access control, and class scheduling. Don't pay for features your tennis club won't use.",
    icon: Users,
  },
  {
    title: "Budget",
    description:
      "Tennis club software ranges from $129/mo to $1,500/mo. Factor in implementation fees, transaction fees, and contract terms — not just the sticker price.",
    icon: DollarSign,
  },
];

const faqs = [
  {
    question: "What is the best tennis club management software in 2026?",
    answer:
      "For small-to-medium tennis clubs, PlayCourt ($149/mo) offers the best combination of simplicity, speed, and value. For large enterprise facilities with 20+ courts, CourtReserve ($300-800/mo) provides deeper feature sets. The best choice depends on your club size, budget, and technical resources.",
  },
  {
    question: "How much does tennis club software cost?",
    answer:
      "Tennis club management software ranges from $129/mo (Mindbody) to $1,500/mo (Club Automation/Daxko). PlayCourt starts at $149/mo with a Pro plan at $299/mo. Many platforms also charge implementation fees ($500-5,000) and transaction fees (2-3%) on top of the subscription.",
  },
  {
    question: "Can I switch tennis club software without losing member data?",
    answer:
      "Yes. Most platforms support CSV import/export of member data. PlayCourt offers free migration assistance and can import members from spreadsheets or other platforms in minutes. Plan for 1-2 weeks of overlap when transitioning between systems.",
  },
  {
    question:
      "What features should I look for in tennis court booking software?",
    answer:
      "Essential features include: online court booking with real-time availability, automatic SMS/email reminders, member management, mobile-friendly interface, and reporting. Nice-to-haves include league management, payment processing, and waitlists. According to the USTA, clubs that adopt online booking see 40-60% increases in court utilization.",
  },
  {
    question:
      "Is general fitness software like Mindbody good enough for a tennis club?",
    answer:
      "General fitness software can handle basic court scheduling, but tennis clubs often find the court booking features are limited compared to specialist platforms. Tennis-specific needs like court-type filtering, ladder management, and match scheduling are typically missing or basic in general platforms.",
  },
];

const citations = [
  {
    source: "USTA (United States Tennis Association)",
    detail:
      "2025 State of Tennis Report — club technology adoption and court utilization trends",
    url: "https://www.usta.com",
  },
  {
    source: "Tennis Industry Association",
    detail:
      "2025 Tennis Facility Operations Survey — average operating costs and technology spend",
    url: "https://www.tennisindustry.org",
  },
  {
    source: "G2",
    detail:
      "Tennis & Court Management Software Reviews — user ratings and satisfaction scores",
    url: "https://www.g2.com/categories/club-management",
  },
  {
    source: "Capterra",
    detail:
      "Club Management Software Comparison — pricing data and feature analysis",
    url: "https://www.capterra.com/club-management-software/",
  },
  {
    source: "Tennis Resurgence Report 2025",
    detail:
      "Post-pandemic tennis growth data — 23 million Americans played tennis in 2024, driving demand for modern booking systems",
    url: "https://www.usta.com",
  },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function pickUrl(pick: Pick): string {
  if (pick.isPlayCourt) return "/";
  return `/vs/${pick.slug}`;
}

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function BestTennisClubSoftware2026() {
  return (
    <>
      {/* ---- Schema ---- */}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: baseUrl },
          { name: "Guides", url: `${baseUrl}/guides` },
          {
            name: "Best Tennis Club Software 2026",
            url: pageUrl,
          },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <ItemListSchema
        name="Best Tennis Club Software 2026"
        url={pageUrl}
        items={picks.map((p) => ({
          name: p.name,
          url: p.isPlayCourt ? baseUrl : `${baseUrl}/vs/${p.slug}`,
          description: p.bestFor,
        }))}
      />

      <Navbar />

      <main className="min-h-screen bg-white">
        {/* ---- Hero ---- */}
        <section className="bg-gradient-to-b from-brand-700 to-brand-900 pt-20 pb-16 text-white">
          <div className="mx-auto max-w-4xl px-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 mb-6 backdrop-blur-sm">
              <Star className="h-3 w-3" /> Updated {lastUpdated}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              5 Best Tennis Club Software in 2026
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl">
              We compared the top tennis club management platforms — real prices,
              real setup times, and honest verdicts so you can pick the right fit
              for your club.
            </p>
          </div>
        </section>

        {/* ---- TL;DR ---- */}
        <section className="border-b border-slate-200 bg-slate-50 py-10">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              TL;DR — Quick Verdict
            </h2>
            <p className="text-slate-700 leading-relaxed">
              <strong>PlayCourt ($149/mo)</strong> is the best value for
              small-to-medium tennis clubs — 10-minute setup, no IT required,
              and members book in 30 seconds.{" "}
              <strong>CourtReserve ($300-800/mo)</strong> is the pick for large
              enterprise facilities with 20+ courts and dedicated staff.
              Everyone else fills a niche: Club Automation for multi-sport
              health clubs, Mindbody for general fitness, and EZFacility for
              mid-range multi-sport facilities.
            </p>
          </div>
        </section>

        {/* ---- Quick Comparison Table ---- */}
        <section className="py-12 border-b border-slate-200">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Quick Comparison
            </h2>
            <div className="overflow-x-auto -mx-6 px-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200 text-left">
                    <th className="py-3 pr-4 font-semibold text-slate-900">
                      Software
                    </th>
                    <th className="py-3 px-4 font-semibold text-slate-900">
                      Price
                    </th>
                    <th className="py-3 px-4 font-semibold text-slate-900">
                      Setup Time
                    </th>
                    <th className="py-3 px-4 font-semibold text-slate-900">
                      Best For
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {picks.map((pick) => (
                    <tr
                      key={pick.rank}
                      className={`border-b border-slate-100 ${
                        pick.isPlayCourt ? "bg-brand-50" : ""
                      }`}
                    >
                      <td className="py-3 pr-4">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-900">
                            #{pick.rank} {pick.name}
                          </span>
                          {pick.isPlayCourt && (
                            <span className="inline-flex items-center rounded-full bg-brand-500 px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wide">
                              Our Pick
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        {pick.price}
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        {pick.setupTime}
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        {pick.bestFor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ---- Individual Picks ---- */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6 space-y-12">
            <h2 className="text-2xl font-bold text-slate-900">
              Detailed Reviews
            </h2>

            {picks.map((pick) => {
              const Icon = pick.icon;
              return (
                <article
                  key={pick.rank}
                  id={pick.slug}
                  className={`rounded-2xl border ${
                    pick.isPlayCourt
                      ? "border-brand-300 bg-brand-50/30"
                      : "border-slate-200 bg-white"
                  } p-8`}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                          pick.isPlayCourt
                            ? "bg-brand-500 text-white"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold text-slate-900">
                            #{pick.rank} {pick.name}
                          </h3>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                              pick.isPlayCourt
                                ? "bg-brand-500 text-white"
                                : "bg-slate-200 text-slate-700"
                            }`}
                          >
                            {pick.badge}
                          </span>
                        </div>
                        <p className="text-sm text-slate-500">{pick.bestFor}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-slate-900">
                        {pick.price}
                      </p>
                      <p className="text-xs text-slate-500">{pick.priceNote}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 leading-relaxed mb-6">
                    {pick.description}
                  </p>

                  {/* Setup Time */}
                  <div className="mb-6 inline-flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-600">
                    <Clock className="h-4 w-4 text-slate-400" />
                    Setup time: <strong>{pick.setupTime}</strong>
                  </div>

                  {/* Pros & Cons */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-brand-700 mb-3 flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4" /> Pros
                      </h4>
                      <ul className="space-y-2">
                        {pick.pros.map((pro, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-slate-700"
                          >
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-500 mb-3 flex items-center gap-1.5">
                        <Settings className="h-4 w-4" /> Cons
                      </h4>
                      <ul className="space-y-2">
                        {pick.cons.map((con, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-slate-600"
                          >
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-300 flex-shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Verdict */}
                  <div className="rounded-xl bg-slate-50 p-4 mb-4">
                    <p className="text-sm font-semibold text-slate-900 mb-1">
                      Verdict
                    </p>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {pick.verdict}
                    </p>
                  </div>

                  {/* CTA */}
                  <Link
                    href={pickUrl(pick) as any}
                    className={`inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${
                      pick.isPlayCourt
                        ? "bg-brand-500 text-white hover:bg-brand-600"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {pick.isPlayCourt ? (
                      <>
                        Try PlayCourt Free <ArrowRight className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        PlayCourt vs {pick.name}{" "}
                        <ExternalLink className="h-3.5 w-3.5" />
                      </>
                    )}
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        {/* ---- How to Choose ---- */}
        <section className="py-12 border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              How to Choose Tennis Club Software
            </h2>
            <div className="space-y-6">
              {howToChoose.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-slate-200 text-brand-600 flex-shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ---- FAQ ---- */}
        <section className="py-12 border-t border-slate-200">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <details key={i} className="group">
                  <summary className="flex cursor-pointer items-start justify-between gap-4 rounded-xl bg-slate-50 px-6 py-4 font-semibold text-slate-900 hover:bg-slate-100 transition-colors [&::-webkit-details-marker]:hidden">
                    <span>{faq.question}</span>
                    <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5 group-open:hidden" />
                    <ChevronUp className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5 hidden group-open:block" />
                  </summary>
                  <div className="px-6 pt-3 pb-5 text-sm text-slate-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Citations ---- */}
        <section className="py-10 border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4">
              Sources & Methodology
            </h2>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              This guide is published by the PlayCourt team. Our rankings are
              based on hands-on product testing, publicly available pricing,
              feature analysis, and third-party review data. Competitor
              information is sourced from public websites, review platforms, and
              industry reports.
            </p>
            <ol className="space-y-3 list-decimal list-inside">
              {citations.map((cite, i) => (
                <li key={i} className="text-sm text-slate-600">
                  <strong className="text-slate-700">{cite.source}</strong> —{" "}
                  {cite.detail}.{" "}
                  <a
                    href={cite.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 hover:text-brand-700 underline"
                  >
                    Visit source
                    <ExternalLink className="inline h-3 w-3 ml-0.5" />
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---- Bottom CTA ---- */}
        <section className="py-16 bg-gradient-to-b from-brand-700 to-brand-900 text-white">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to modernize your tennis club?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              PlayCourt gets your club online in 10 minutes. Members book
              courts in 30 seconds. No contracts, no implementation fees.
            </p>
            <Link
              href={"/" as any}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-brand-700 hover:bg-brand-50 transition-colors shadow-lg"
            >
              Start Free Trial <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
