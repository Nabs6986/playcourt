import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight, Users, Clock, TrendingUp, Star } from "lucide-react";
import { getAudience, getAllAudienceSlugs } from "../_data/audiences";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { ItemListSchema } from "@/components/schema/ItemListSchema";

interface Props {
  params: Promise<{ audience: string }>;
}

export async function generateStaticParams() {
  return getAllAudienceSlugs().map((slug) => ({ audience: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { audience: slug } = await params;
  const audience = getAudience(slug);
  
  if (!audience) return { title: "Page Not Found" };

  return {
    title: `${audience.headline} | PlayCourt`,
    description: audience.metaDescription,
    openGraph: {
      title: audience.headline,
      description: audience.metaDescription,
    },
  };
}

export default async function AudiencePage({ params }: Props) {
  const { audience: slug } = await params;
  const audience = getAudience(slug);

  if (!audience) {
    notFound();
  }

  // JSON-LD Schema for FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": audience.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  // JSON-LD Schema for SoftwareApplication
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PlayCourt",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "149",
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "127",
    },
  };

  const statIcons = [TrendingUp, Clock, Users, Star];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://playcourt.io" },
          { name: "Solutions", url: "https://playcourt.io/for/" + slug },
          { name: audience.name, url: `https://playcourt.io/for/${slug}` },
        ]}
      />
      <ItemListSchema
        name={`PlayCourt Solutions for ${audience.name}`}
        url={`https://playcourt.io/for/${slug}`}
        items={audience.solutions.map((solution, i) => ({
          name: solution.title,
          url: `https://playcourt.io/for/${slug}#solution-${i}`,
          description: solution.description,
        }))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-24 pb-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {audience.headline}
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            {audience.description}
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
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-medium text-slate-700 shadow-sm border border-slate-200 transition-all hover:bg-slate-50"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Answer Box */}
      <section className="py-8 bg-brand-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-brand-100">
            <h2 className="font-semibold text-slate-900 mb-2">Quick Answer</h2>
            <p className="text-slate-600">
              <strong>PlayCourt</strong> is perfect for {audience.name.toLowerCase()}. 
              {" "}{audience.recommendedPlanReason}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {audience.stats.map((stat, i) => {
              const Icon = statIcons[i % statIcons.length];
              return (
                <div key={i} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-100 mb-3">
                    <Icon className="h-6 w-6 text-brand-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            The Challenges {audience.name} Face
          </h2>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <ul className="space-y-4">
              {audience.painPoints.map((pain, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 text-sm font-medium shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-slate-700">{pain}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            How PlayCourt Solves This
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {audience.solutions.map((solution, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="flex items-center gap-2 mb-3">
                  <Check className="h-5 w-5 text-brand-500" />
                  <h3 className="font-semibold text-slate-900">{solution.title}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {audience.testimonial && (
        <section className="py-12 bg-brand-500">
          <div className="mx-auto max-w-4xl px-6">
            <blockquote className="text-center">
              <p className="text-xl text-white font-medium leading-relaxed mb-4">
                &quot;{audience.testimonial.quote}&quot;
              </p>
              <footer className="text-brand-100">
                — {audience.testimonial.author}, {audience.testimonial.club}
              </footer>
            </blockquote>
          </div>
        </section>
      )}

      {/* Pricing Recommendation */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Recommended for {audience.name}
          </h2>
          <div className="bg-brand-50 rounded-xl p-6 border border-brand-100">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand-500 text-white text-sm font-medium">
                {audience.recommendedPlan} Plan
              </span>
              <span className="text-slate-900 font-semibold">
                ${audience.recommendedPlan === "Starter" ? "149" : "299"}/month
              </span>
            </div>
            <p className="text-slate-600">
              {audience.recommendedPlanReason}
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 mt-4 text-brand-600 font-medium hover:text-brand-700"
            >
              See all pricing details
              <ArrowRight className="h-4 w-4" />
            </Link>
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
            {audience.faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to modernize your {audience.name.toLowerCase().replace(/s$/, "")} booking?
          </h2>
          <p className="text-slate-300 mb-8">
            Join hundreds of facilities already using PlayCourt. Start your free 14-day trial today.
          </p>
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-brand-600"
          >
            Start Free Trial
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
