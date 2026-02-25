import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

const baseUrl = "https://playcourt.io";

export const metadata: Metadata = {
  title: "Guides — Expert Tennis Club Software Buying Guides | PlayCourt",
  description: "In-depth buying guides for tennis club management software. Compare top platforms, pricing, and features to find the best fit for your club.",
  alternates: { canonical: `${baseUrl}/guides` },
};

const guides = [
  { title: "Best Tennis Club Software 2026", description: "Our top 5 picks ranked by features, pricing, and value — with real prices and honest verdicts for every club type.", href: "/guides/best-tennis-club-software-2026", updated: "February 2026" },
];

export default function GuidesIndexPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: baseUrl }, { name: "Guides", url: `${baseUrl}/guides` }]} />
      <Navbar />
      <main className="min-h-screen">
        <section className="bg-gradient-to-b from-slate-50 to-white pt-16 pb-10">
          <div className="mx-auto max-w-4xl px-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700 mb-4"><BookOpen className="h-3 w-3" /> Buying Guides</div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Tennis Club Software Guides</h1>
            <p className="text-lg text-slate-600 leading-relaxed">Expert buying guides to help you choose the right management software for your tennis club.</p>
          </div>
        </section>
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-6 space-y-4">
            {guides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="block rounded-2xl border border-slate-200 bg-white p-8 hover:border-brand-300 hover:shadow-md transition-all group">
                <div className="flex items-start justify-between gap-4"><div><h2 className="text-xl font-bold text-slate-900 group-hover:text-brand-700 mb-2">{guide.title}</h2><p className="text-slate-600 mb-3">{guide.description}</p><span className="text-xs text-slate-400">Updated {guide.updated}</span></div><ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-brand-600 flex-shrink-0 mt-1" /></div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
