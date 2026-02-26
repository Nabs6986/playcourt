import { Metadata } from "next";
import Link from "next/link";
import {
  Info,
  BarChart3,
  Shield,
  Mail,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

const baseUrl = "https://playcourt.io";
const pageUrl = `${baseUrl}/about-this-site`;

export const metadata: Metadata = {
  title: "About This Site — PlayCourt",
  description:
    "PlayCourt.io is a tennis club management platform and a resource for clubs evaluating software. Learn about our methodology, transparency policy, and editorial approach.",
  alternates: { canonical: pageUrl },
};

const methodologyItems = [
  {
    title: "Features & Functionality",
    description:
      "We evaluate each platform's core capabilities — booking, member management, reminders, reporting, mobile experience, and tennis-specific tools like league and ladder management.",
  },
  {
    title: "Pricing & Transparency",
    description:
      "We document publicly listed prices, implementation fees, transaction fees, and contract terms. Where pricing is not public, we note that clearly.",
  },
  {
    title: "Ease of Use & Setup Time",
    description:
      "We assess how long it takes to go from sign-up to live, whether IT staff are required, and how intuitive the interface is for both admins and members.",
  },
  {
    title: "Setup & Support",
    description:
      "We consider onboarding experience, documentation quality, support response times, and available training resources.",
  },
  {
    title: "Customer Feedback",
    description:
      "We reference third-party review platforms (G2, Capterra) and industry reports for user satisfaction data and real-world feedback.",
  },
  {
    title: "Value for Money",
    description:
      "We weigh feature sets against pricing tiers to determine which platforms deliver the best return for different club sizes and budgets.",
  },
];

export default function AboutThisSitePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: baseUrl },
          { name: "About This Site", url: pageUrl },
        ]}
      />

      <Navbar />

      <main className="min-h-screen bg-white">
        {/* ---- Hero ---- */}
        <section className="bg-gradient-to-b from-slate-50 to-white pt-20 pb-12">
          <div className="mx-auto max-w-4xl px-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700 mb-4">
              <Info className="h-3 w-3" /> About PlayCourt.io
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              About This Site
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
              PlayCourt.io is a tennis club management platform{" "}
              <strong>and</strong> a resource for tennis clubs evaluating
              software options. Here is how we approach our content and
              comparisons.
            </p>
          </div>
        </section>

        {/* ---- What We Do ---- */}
        <section className="py-12 border-b border-slate-200">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-600 flex-shrink-0">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  What We Do
                </h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    <strong>PlayCourt is a tennis club management platform</strong>{" "}
                    built for small-to-medium tennis clubs. Members book courts
                    online in 30 seconds, automatic reminders reduce no-shows,
                    and the whole system goes live in about 10 minutes.
                  </p>
                  <p>
                    Beyond our product, we also publish{" "}
                    <Link
                      href={"/guides" as any}
                      className="text-brand-600 hover:text-brand-700 font-medium underline"
                    >
                      buying guides
                    </Link>{" "}
                    and{" "}
                    <Link
                      href={"/vs" as any}
                      className="text-brand-600 hover:text-brand-700 font-medium underline"
                    >
                      software comparisons
                    </Link>{" "}
                    to help tennis clubs evaluate their options. We believe
                    clubs make better decisions when they have clear, honest
                    information about every platform — including ours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- Comparison Methodology ---- */}
        <section className="py-12 border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex items-start gap-4 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-600 flex-shrink-0">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Comparison Methodology
                </h2>
                <p className="text-slate-600">
                  When we compare tennis club software, we evaluate platforms
                  across six dimensions:
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {methodologyItems.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white border border-slate-200 p-5"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Transparency Policy ---- */}
        <section className="py-12 border-b border-slate-200">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-600 flex-shrink-0">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  Transparency Policy
                </h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    <strong>
                      PlayCourt.io is published by the PlayCourt team.
                    </strong>{" "}
                    We are the makers of PlayCourt, and we want to be upfront
                    about that. When we rank PlayCourt in our guides, it is
                    because we genuinely believe it is the best option for the
                    use cases we describe — but we also acknowledge where
                    competitors may be the better fit.
                  </p>
                  <p>
                    All competitor information in our comparisons is sourced
                    from publicly available data: official websites, published
                    pricing pages, third-party review platforms (G2, Capterra),
                    and industry reports. We do not use affiliate links, and we
                    do not receive compensation from any competitor listed on
                    this site.
                  </p>
                  <p>
                    If you believe any information on this site is inaccurate
                    or outdated, please{" "}
                    <a
                      href="mailto:hello@playcourt.io"
                      className="text-brand-600 hover:text-brand-700 font-medium underline"
                    >
                      contact us
                    </a>{" "}
                    and we will review and update it promptly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- Content Updates ---- */}
        <section className="py-12 border-b border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-600 flex-shrink-0">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  Content Updates
                </h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    We update our buying guides and comparison pages on a
                    regular schedule:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                      <span>
                        <strong>Monthly:</strong> Product feature updates and
                        pricing checks
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                      <span>
                        <strong>Quarterly:</strong> Full competitor analysis and
                        guide refreshes
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                      <span>
                        <strong>As needed:</strong> Corrections based on reader
                        feedback or market changes
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- Contact ---- */}
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-600 flex-shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  Contact Us
                </h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Have questions about PlayCourt, found an error in our
                    comparisons, or want to suggest a platform we should review?
                  </p>
                  <p>
                    Reach us at{" "}
                    <a
                      href="mailto:hello@playcourt.io"
                      className="text-brand-600 hover:text-brand-700 font-semibold underline"
                    >
                      hello@playcourt.io
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- Bottom CTA ---- */}
        <section className="py-16 bg-gradient-to-b from-brand-700 to-brand-900 text-white">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to try PlayCourt?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Set up your tennis club booking system in 10 minutes. No
              contracts, no implementation fees, free trial included.
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
