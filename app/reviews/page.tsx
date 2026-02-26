import { Metadata } from "next";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/marketing/Navbar";
import { Footer } from "@/components/marketing/Footer";
import { getAllTools } from "./_data/tools";

export const metadata: Metadata = {
  title: "Court & Club Management Software Reviews 2026",
  description: "In-depth reviews of every major court and club management platform — CourtReserve, Club Automation, EZFacility, and Mindbody.",
  alternates: { canonical: "https://playcourt.io/reviews" },
};

export default function ReviewsPage() {
  const tools = getAllTools();

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="bg-gradient-to-b from-brand-50 to-white pt-12 pb-8">
          <div className="mx-auto max-w-4xl px-6">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Court & Club Management Software Reviews</h1>
            <p className="text-lg text-slate-600">
              Independent reviews of every major court and club management platform. Real pricing, honest pros and cons, and a clear verdict on who each platform is best for.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="space-y-4">
            {tools.map((tool, index) => (
              <Link key={tool.slug} href={`/reviews/${tool.slug}`}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:border-brand-200 hover:shadow-md transition-all group">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-50 border border-brand-100 flex items-center justify-center text-sm font-bold text-brand-700">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-semibold text-slate-900 group-hover:text-brand-700 mb-1">{tool.name}</h2>
                  <p className="text-sm text-slate-500 truncate">{tool.tagline}</p>
                </div>
                <div className="hidden sm:flex flex-col items-end gap-1 flex-shrink-0">
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(s => (
                      <Star key={s} className={`h-3.5 w-3.5 ${s <= Math.floor(tool.overallRating) ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} />
                    ))}
                    <span className="text-xs text-slate-500 ml-1">{tool.overallRating}/5</span>
                  </div>
                  <span className="text-sm text-slate-600">{tool.pricing[0]?.price}</span>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-400 flex-shrink-0 group-hover:text-brand-500 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
