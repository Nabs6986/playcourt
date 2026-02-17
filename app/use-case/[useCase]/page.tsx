import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight, TrendingUp, Target, Zap, BarChart } from "lucide-react";
import { getUseCase, getAllUseCaseSlugs } from "../_data/useCases";

interface Props {
  params: Promise<{ useCase: string }>;
}

export async function generateStaticParams() {
  return getAllUseCaseSlugs().map((slug) => ({ useCase: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { useCase: slug } = await params;
  const useCase = getUseCase(slug);
  
  if (!useCase) return { title: "Page Not Found" };

  return {
    title: `${useCase.headline} | PlayCourt`,
    description: useCase.metaDescription,
    openGraph: {
      title: useCase.headline,
      description: useCase.metaDescription,
    },
  };
}

export default async function UseCasePage({ params }: Props) {
  const { useCase: slug } = await params;
  const useCase = getUseCase(slug);

  if (!useCase) {
    notFound();
  }

  // JSON-LD Schema for FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": useCase.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  // JSON-LD for HowTo
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": useCase.headline,
    "description": useCase.description,
    "step": useCase.howItWorks.map((step) => ({
      "@type": "HowToStep",
      "position": step.step,
      "name": step.title,
      "text": step.description,
    })),
  };

  const resultIcons = [TrendingUp, Target, Zap, BarChart];

  return (
    <>
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
            {useCase.headline}
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            {useCase.description}
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
              <strong>PlayCourt</strong> helps tennis clubs with {useCase.title.toLowerCase()} through 
              {" "}{useCase.solutions.map(s => s.feature.toLowerCase()).slice(0, 2).join(" and ")}.
              {" "}Clubs see {useCase.results[0]?.metric.toLowerCase()} on average.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Problem</h2>
          <p className="text-slate-600 mb-6">{useCase.problemStatement}</p>
          
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-4">Key Statistics</h3>
            <ul className="space-y-3">
              {useCase.problemStats.map((item, i) => (
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

      {/* The Solution */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">The Solution</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {useCase.solutions.map((solution, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <span className="inline-block px-2 py-1 rounded bg-brand-100 text-brand-700 text-xs font-medium mb-3">
                  {solution.feature}
                </span>
                <h3 className="font-semibold text-slate-900 mb-2">{solution.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Results You Can Expect</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {useCase.results.map((result, i) => {
              const Icon = resultIcons[i % resultIcons.length];
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

      {/* How It Works */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">How It Works</h2>
          <div className="space-y-6">
            {useCase.howItWorks.map((step) => (
              <div key={step.step} className="flex gap-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-500 text-white font-semibold text-sm">
                    {step.step}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      {useCase.caseStudy && (
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Case Study: {useCase.caseStudy.clubName}</h2>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                <div className="p-6">
                  <span className="text-xs font-medium text-red-500 uppercase tracking-wider">Before</span>
                  <p className="mt-2 text-slate-700">{useCase.caseStudy.before}</p>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-brand-500 uppercase tracking-wider">After</span>
                  <p className="mt-2 text-slate-700">{useCase.caseStudy.after}</p>
                </div>
                <div className="p-6 bg-brand-50">
                  <span className="text-xs font-medium text-brand-600 uppercase tracking-wider">Result</span>
                  <p className="mt-2 text-slate-900 font-medium">{useCase.caseStudy.result}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {useCase.faqs.map((faq, i) => (
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
            Ready to solve {useCase.title.toLowerCase()}?
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
