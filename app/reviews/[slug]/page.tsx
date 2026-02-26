import { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowLeft, Star } from "lucide-react";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { getTool, getAllToolSlugs } from "../_data/tools";
import { ReviewSchema } from "@/components/schema/ReviewSchema";
import { SoftwareApplicationSchema } from "@/components/schema/SoftwareApplicationSchema";
import { FAQSchema } from "@/components/schema/FAQSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllToolSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return { title: "Review Not Found" };
  return {
    title: tool.metaTitle,
    description: tool.metaDescription,
    alternates: { canonical: `https://playcourt.io/reviews/${slug}` },
  };
}

export default async function ReviewPage({ params }: Props) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://playcourt.io" },
          { name: "Reviews", url: "https://playcourt.io/reviews" },
          { name: `${tool.name} Review`, url: `https://playcourt.io/reviews/${slug}` },
        ]}
      />
      <ReviewSchema
        name={tool.metaTitle}
        reviewBody={tool.verdict}
        ratingValue={tool.overallRating}
        softwareName={tool.name}
        softwareUrl={tool.website}
        price={tool.pricing[0]?.price || "$0"}
      />
      <SoftwareApplicationSchema
        name={tool.name}
        description={tool.tagline}
        rating={tool.overallRating}
        ratingCount={1}
        price={tool.pricing[0]?.price || "$0"}
        url={tool.website}
      />
      <FAQSchema faqs={tool.faqs.map((faq) => ({ question: faq.question, answer: faq.answer }))} />
      <Navbar />
      <main className="min-h-screen">
        <div className="bg-slate-50 border-b border-slate-100 py-3">
          <div className="mx-auto max-w-4xl px-6">
            <Link href="/reviews" className="flex items-center gap-1 text-sm text-slate-500 hover:text-brand-600">
              <ArrowLeft className="h-3.5 w-3.5" /> All Reviews
            </Link>
          </div>
        </div>

        <section className="bg-gradient-to-b from-brand-50 to-white pt-10 pb-8">
          <div className="mx-auto max-w-4xl px-6">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">{tool.name} Review 2026</h1>
            <p className="text-lg text-slate-600 mb-4">{tool.tagline}</p>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} className={`h-5 w-5 ${s <= Math.floor(tool.overallRating) ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} />
                ))}
                <span className="text-lg font-bold text-slate-900 ml-2">{tool.overallRating}/5.0</span>
              </div>
              <span className="text-slate-400">·</span>
              <span className="text-slate-600">{tool.pricing[0]?.price}</span>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-6 py-12 space-y-10">
          <section className="rounded-xl bg-slate-50 border border-slate-200 p-6">
            <h2 className="font-semibold text-slate-900 mb-3">Quick Verdict</h2>
            <p className="text-slate-700 leading-relaxed">{tool.verdict}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Pricing Plans</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {tool.pricing.map((tier) => (
                <div key={tier.name} className="rounded-xl border border-slate-200 bg-white p-5">
                  <h3 className="font-semibold text-slate-900 mb-1">{tier.name}</h3>
                  <p className="text-2xl font-bold text-brand-600 mb-3">{tier.price}</p>
                  <ul className="space-y-1">
                    {tier.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check className="h-3.5 w-3.5 text-green-500 mt-0.5 flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Pros and Cons</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-xl border border-green-200 bg-green-50 p-6">
                <h3 className="font-semibold text-green-900 mb-3">Pros</h3>
                <ul className="space-y-2">
                  {tool.pros.map(p => (
                    <li key={p} className="flex items-start gap-2 text-sm text-green-900">
                      <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />{p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-red-200 bg-red-50 p-6">
                <h3 className="font-semibold text-red-900 mb-3">Cons</h3>
                <ul className="space-y-2">
                  {tool.cons.map(c => (
                    <li key={c} className="flex items-start gap-2 text-sm text-red-900">
                      <X className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />{c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Key Features</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {tool.keyFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                  <Check className="h-4 w-4 text-brand-500 mt-0.5 flex-shrink-0" />{feature}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {tool.faqs.map((faq) => (
                <details key={faq.question} className="group rounded-xl border border-slate-200 bg-white">
                  <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-xl">
                    {faq.question}
                    <span className="text-slate-400 group-open:rotate-180 transition-transform ml-4 flex-shrink-0">&#9660;</span>
                  </summary>
                  <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          <section className="rounded-xl bg-brand-50 border border-brand-200 p-6">
            <h2 className="font-bold text-slate-900 mb-2">Best For</h2>
            <p className="text-slate-700">{tool.bestFor}</p>
            <div className="mt-4">
              <a href={tool.affiliateUrl} target="_blank" rel="nofollow noopener"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 transition-colors">
                Try {tool.name} →
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
