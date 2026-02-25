import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, X, ArrowRight, ChevronRight } from "lucide-react";
import { getCompetitor, getAllCompetitorSlugs, Competitor } from "../_data/competitors";
import { getComparison, getAllComparisonSlugs, Comparison } from "../_data/comparisons";
import { ComparisonSchema } from "@/components/schema/ComparisonSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";

interface Props {
  params: Promise<{ competitor: string }>;
}

export async function generateStaticParams() {
  const competitorSlugs = getAllCompetitorSlugs().map((slug) => ({ competitor: slug }));
  const comparisonSlugs = getAllComparisonSlugs().map((slug) => ({ competitor: slug }));
  return [...competitorSlugs, ...comparisonSlugs];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { competitor: slug } = await params;

  // Check if it's a product-vs-product comparison
  const comparison = getComparison(slug);
  if (comparison) {
    const title = `${comparison.productA.name} vs ${comparison.productB.name}: Tennis Club Software Comparison (2025)`;
    return {
      title,
      description: comparison.metaDescription,
      openGraph: {
        title,
        description: comparison.metaDescription,
        url: `https://playcourt.io/vs/${slug}`,
        siteName: "PlayCourt",
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description: comparison.metaDescription,
      },
      alternates: {
        canonical: `https://playcourt.io/vs/${slug}`,
      },
    };
  }

  // Check if it's a PlayCourt-vs-competitor page
  const competitor = getCompetitor(slug);
  if (competitor) {
    return {
      title: `PlayCourt vs ${competitor.name}: Tennis Booking Software Comparison`,
      description: competitor.metaDescription,
      openGraph: {
        title: `PlayCourt vs ${competitor.name}`,
        description: competitor.metaDescription,
      },
    };
  }

  return { title: "Comparison Not Found" };
}

function FeatureIcon({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check className="h-5 w-5 text-green-500" />;
  }
  if (value === false) {
    return <X className="h-5 w-5 text-red-400" />;
  }
  return <span className="text-sm text-slate-600">{value}</span>;
}

// ─── Product vs Product Comparison Layout ────────────────────────────────────
function ProductComparisonView({ comparison, slug }: { comparison: Comparison; slug: string }) {
  const { productA, productB } = comparison;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://playcourt.io" },
          { name: "Comparisons", url: "https://playcourt.io/vs" },
          {
            name: `${productA.name} vs ${productB.name}`,
            url: `https://playcourt.io/vs/${slug}`,
          },
        ]}
      />
      <ComparisonSchema
        products={[
          { name: productA.name, description: productA.description },
          { name: productB.name, description: productB.description },
        ]}
        url={`https://playcourt.io/vs/${slug}`}
      />
      <FAQSchema faqs={comparison.faqs} />

      {/* Breadcrumb Navigation */}
      <nav className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-6 py-3">
          <ol className="flex items-center gap-1 text-sm text-slate-500">
            <li>
              <Link href="/" className="hover:text-slate-900 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="h-3 w-3" />
            </li>
            <li>
              <span className="text-slate-400">Comparisons</span>
            </li>
            <li>
              <ChevronRight className="h-3 w-3" />
            </li>
            <li className="text-slate-900 font-medium">
              {productA.name} vs {productB.name}
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-16 pb-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-medium text-brand-600 mb-3">
            Software Comparison
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {productA.name} vs {productB.name}
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            An honest comparison to help you choose the right tennis and club
            management software for your facility.
          </p>
        </div>
      </section>

      {/* Quick Verdict */}
      <section className="py-8 bg-brand-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-brand-100">
            <h2 className="font-semibold text-slate-900 mb-2">Quick Verdict</h2>
            <p className="text-slate-600 leading-relaxed">{comparison.verdict}</p>
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
                  <th className="py-3 px-4 text-left text-sm font-medium text-slate-700">
                    {productA.name}
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-slate-700">
                    {productB.name}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 px-4 text-sm font-medium text-slate-700">Price</td>
                  <td className="py-3 px-4 text-sm text-slate-900 font-semibold">
                    {productA.price}
                  </td>
                  <td className="py-3 px-4 text-sm text-slate-900 font-semibold">
                    {productB.price}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm font-medium text-slate-700">Price Note</td>
                  <td className="py-3 px-4 text-sm text-slate-600">{productA.priceNote}</td>
                  <td className="py-3 px-4 text-sm text-slate-600">{productB.priceNote}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm font-medium text-slate-700">Setup Time</td>
                  <td className="py-3 px-4 text-sm text-slate-600">{productA.setupTime}</td>
                  <td className="py-3 px-4 text-sm text-slate-600">{productB.setupTime}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm font-medium text-slate-700">Best For</td>
                  <td className="py-3 px-4 text-sm text-slate-600">{productA.bestFor}</td>
                  <td className="py-3 px-4 text-sm text-slate-600">{productB.bestFor}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Feature Comparison</h2>

          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">
                    Feature
                  </th>
                  <th className="py-3 px-4 text-center text-sm font-medium text-slate-700">
                    {productA.name}
                  </th>
                  <th className="py-3 px-4 text-center text-sm font-medium text-slate-700">
                    {productB.name}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparison.features.map((feature) => (
                  <tr key={feature.name}>
                    <td className="py-3 px-4 text-sm text-slate-700">{feature.name}</td>
                    <td className="py-3 px-4 text-center">
                      <span className="inline-flex justify-center">
                        <FeatureIcon value={feature.productA} />
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className="inline-flex justify-center">
                        <FeatureIcon value={feature.productB} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When to Choose */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Which Should You Choose?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Choose {productA.name} if...
              </h3>
              <ul className="space-y-3">
                {comparison.whenChooseA.map((reason, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Choose {productB.name} if...
              </h3>
              <ul className="space-y-3">
                {comparison.whenChooseB.map((reason, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PlayCourt Alternative */}
      <section className="py-12 bg-brand-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-brand-100 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Looking for a Simpler Alternative?
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto mb-6">
              PlayCourt offers tennis court booking and member management starting at{" "}
              <strong>$149/month</strong>. Set up in 10 minutes. No lengthy implementation.
              Reduce no-shows by 73%.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/admin"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-brand-600"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
              >
                View pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {comparison.faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 shadow-sm border border-slate-200"
              >
                <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Comparisons */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Comparisons</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/vs/courtreserve"
              className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm hover:border-brand-300 transition-colors group"
            >
              <span className="text-sm font-medium text-slate-900 group-hover:text-brand-600 transition-colors">
                PlayCourt vs CourtReserve
              </span>
              <p className="text-xs text-slate-500 mt-1">
                See how PlayCourt compares directly
              </p>
            </Link>
            <Link
              href="/vs/clubautomation"
              className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm hover:border-brand-300 transition-colors group"
            >
              <span className="text-sm font-medium text-slate-900 group-hover:text-brand-600 transition-colors">
                PlayCourt vs Club Automation
              </span>
              <p className="text-xs text-slate-500 mt-1">
                See how PlayCourt compares directly
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-brand-500">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Try PlayCourt Free for 14 Days
          </h2>
          <p className="text-brand-100 mb-8 max-w-lg mx-auto">
            Simple tennis court booking for your club. No credit card required. Set up in 10
            minutes.
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

// ─── PlayCourt vs Competitor Layout (original) ──────────────────────────────
function CompetitorComparisonView({ competitor, slug }: { competitor: Competitor; slug: string }) {
  // JSON-LD Schema for SEO + GEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: competitor.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://playcourt.io" },
          { name: "Comparisons", url: "https://playcourt.io/vs/spreadsheets" },
          {
            name: `PlayCourt vs ${competitor.name}`,
            url: `https://playcourt.io/vs/${slug}`,
          },
        ]}
      />
      <ComparisonSchema
        products={[
          {
            name: "PlayCourt",
            description:
              "Tennis court booking and club management software with online booking, automatic reminders, and member management.",
          },
          { name: competitor.name, description: competitor.metaDescription },
        ]}
        url={`https://playcourt.io/vs/${slug}`}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-24 pb-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            PlayCourt vs {competitor.name}
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Which tennis court booking software is right for your club?
          </p>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-8 bg-brand-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-brand-100">
            <h2 className="font-semibold text-slate-900 mb-2">Quick Answer</h2>
            <p className="text-slate-600">
              <strong>PlayCourt</strong> is best for small-to-medium tennis clubs seeking
              simplicity, fast setup, and transparent pricing ($149-299/mo).{" "}
              <strong>{competitor.name}</strong> ({competitor.price}) may be better for{" "}
              {competitor.bestFor.toLowerCase()}.
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
                  <th className="py-3 px-4 text-left text-sm font-medium text-brand-600">
                    PlayCourt
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">
                    {competitor.name}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 px-4 text-sm font-medium text-slate-700">Price</td>
                  <td className="py-3 px-4 text-sm text-slate-900 font-semibold">$149-299/mo</td>
                  <td className="py-3 px-4 text-sm text-slate-600">{competitor.price}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm font-medium text-slate-700">Setup Time</td>
                  <td className="py-3 px-4 text-sm text-slate-900">10 minutes</td>
                  <td className="py-3 px-4 text-sm text-slate-600">{competitor.setupTime}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm font-medium text-slate-700">Best For</td>
                  <td className="py-3 px-4 text-sm text-slate-900">Small-medium clubs</td>
                  <td className="py-3 px-4 text-sm text-slate-600">{competitor.bestFor}</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm font-medium text-slate-700">
                    No-Show Reduction
                  </td>
                  <td className="py-3 px-4 text-sm text-slate-900 font-semibold">73% average</td>
                  <td className="py-3 px-4 text-sm text-slate-600">Unknown</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Feature Comparison</h2>

          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">
                    Feature
                  </th>
                  <th className="py-3 px-4 text-center text-sm font-medium text-brand-600">
                    PlayCourt
                  </th>
                  <th className="py-3 px-4 text-center text-sm font-medium text-slate-600">
                    {competitor.name}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {competitor.features.map((feature) => (
                  <tr key={feature.name}>
                    <td className="py-3 px-4 text-sm text-slate-700">{feature.name}</td>
                    <td className="py-3 px-4 text-center">
                      <span className="inline-flex justify-center">
                        <FeatureIcon value={feature.playcourt} />
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className="inline-flex justify-center">
                        <FeatureIcon value={feature.competitor} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When to Choose */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* When to Choose PlayCourt */}
            <div className="bg-brand-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Choose PlayCourt if...
              </h3>
              <ul className="space-y-3">
                {competitor.whenChoosePlayCourt.map((reason, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check className="h-4 w-4 text-brand-500 mt-0.5 shrink-0" />
                    {reason}
                  </li>
                ))}
              </ul>
            </div>

            {/* When to Choose Competitor */}
            <div className="bg-slate-100 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Choose {competitor.name} if...
              </h3>
              <ul className="space-y-3">
                {competitor.whenChooseCompetitor.map((reason, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <span className="text-slate-400 mt-0.5 shrink-0">&bull;</span>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {competitor.faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 shadow-sm border border-slate-200"
              >
                <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
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

// ─── Main Page Component ────────────────────────────────────────────────────
export default async function ComparisonPage({ params }: Props) {
  const { competitor: slug } = await params;

  // First check if it's a product-vs-product comparison (e.g., courtreserve-vs-club-automation)
  const comparison = getComparison(slug);
  if (comparison) {
    return <ProductComparisonView comparison={comparison} slug={slug} />;
  }

  // Then check if it's a PlayCourt-vs-competitor page (e.g., courtreserve)
  const competitor = getCompetitor(slug);
  if (competitor) {
    return <CompetitorComparisonView competitor={competitor} slug={slug} />;
  }

  notFound();
}
