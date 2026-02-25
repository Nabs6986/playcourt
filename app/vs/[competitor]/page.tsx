import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, X, ArrowRight } from "lucide-react";
import { getCompetitor, getAllCompetitorSlugs, Competitor } from "../_data/competitors";
import { ComparisonSchema } from "@/components/schema/ComparisonSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

interface Props {
  params: Promise<{ competitor: string }>;
}

export async function generateStaticParams() {
  return getAllCompetitorSlugs().map((slug) => ({ competitor: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { competitor: slug } = await params;
  const competitor = getCompetitor(slug);
  
  if (!competitor) return { title: "Comparison Not Found" };

  return {
    title: `PlayCourt vs ${competitor.name}: Tennis Booking Software Comparison`,
    description: competitor.metaDescription,
    openGraph: {
      title: `PlayCourt vs ${competitor.name}`,
      description: competitor.metaDescription,
    },
  };
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

export default async function ComparisonPage({ params }: Props) {
  const { competitor: slug } = await params;
  const competitor = getCompetitor(slug);

  if (!competitor) {
    notFound();
  }

  // JSON-LD Schema for SEO + GEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": competitor.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://playcourt.io" },
          { name: "Comparisons", url: "https://playcourt.io/vs/spreadsheets" },
          { name: `PlayCourt vs ${competitor.name}`, url: `https://playcourt.io/vs/${slug}` },
        ]}
      />
      <ComparisonSchema
        products={[
          { name: "PlayCourt", description: "Tennis court booking and club management software with online booking, automatic reminders, and member management." },
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
              <strong>PlayCourt</strong> is best for small-to-medium tennis clubs seeking simplicity, 
              fast setup, and transparent pricing ($149-299/mo). <strong>{competitor.name}</strong> ({competitor.price}) 
              may be better for {competitor.bestFor.toLowerCase()}.
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
                  <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">{competitor.name}</th>
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
                  <td className="py-3 px-4 text-sm font-medium text-slate-700">No-Show Reduction</td>
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
                  <th className="py-3 px-4 text-left text-sm font-medium text-slate-600">Feature</th>
                  <th className="py-3 px-4 text-center text-sm font-medium text-brand-600">PlayCourt</th>
                  <th className="py-3 px-4 text-center text-sm font-medium text-slate-600">{competitor.name}</th>
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
                ✅ Choose PlayCourt if...
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
                    <span className="text-slate-400 mt-0.5 shrink-0">•</span>
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
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
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
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to try PlayCourt?
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
