import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Sun, Users, Calendar, ArrowRight, Building2 } from "lucide-react";
import { getCity, getAllCitySlugs, City } from "../_data/cities";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ city: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  
  if (!city) return { title: "City Not Found" };

  const title = `Tennis Court Booking Software in ${city.name}, ${city.stateAbbr} | PlayCourt`;
  const description = `The best tennis court booking software for ${city.name} clubs and facilities. Used by ${city.tennisClubs} tennis clubs. Online booking, automatic reminders, member management. Free trial.`;

  return {
    title,
    description,
    openGraph: {
      title: `Tennis Booking Software for ${city.name} Clubs`,
      description,
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params;
  const city = getCity(slug);

  if (!city) {
    notFound();
  }

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": `Tennis Court Booking Software in ${city.name}`,
        "description": `PlayCourt tennis booking software for ${city.name}, ${city.state} tennis clubs and facilities.`,
        "url": `https://playcourt.io/tennis-booking/${city.slug}`,
      },
      {
        "@type": "FAQPage",
        "mainEntity": city.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
      {
        "@type": "SoftwareApplication",
        "name": "PlayCourt",
        "applicationCategory": "BusinessApplication",
        "areaServed": {
          "@type": "City",
          "name": city.name,
          "containedInPlace": {
            "@type": "State",
            "name": city.state,
          },
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white pt-24 pb-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 text-brand-600 mb-4">
            <MapPin className="h-5 w-5" />
            <span className="font-medium">{city.name}, {city.stateAbbr}</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Tennis Court Booking Software for {city.name}
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            The simple way for {city.name} tennis clubs to manage court reservations. 
            Join {city.tennisClubs} clubs already serving players better.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/admin"
              className="rounded-lg bg-brand-500 px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-brand-600"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-slate-200 bg-white px-6 py-3 text-base font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-50"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* City Stats */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-xl bg-slate-50">
              <Building2 className="h-8 w-8 text-brand-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-slate-900">{city.tennisClubs}</div>
              <div className="text-sm text-slate-600">Tennis Clubs</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-slate-50">
              <Users className="h-8 w-8 text-brand-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-slate-900">{city.publicCourts}</div>
              <div className="text-sm text-slate-600">Public Courts</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-slate-50">
              <Sun className="h-8 w-8 text-brand-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-slate-900">{city.peakSeason.split(' ')[0]}</div>
              <div className="text-sm text-slate-600">Peak Season Starts</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-slate-50">
              <Calendar className="h-8 w-8 text-brand-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-slate-900">24/7</div>
              <div className="text-sm text-slate-600">Online Booking</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tennis Scene */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Tennis in {city.name}
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            {city.tennisScene}
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {city.localFeatures.map((feature, i) => (
              <div key={i} className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                <span className="text-sm font-medium text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PlayCourt for this City */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Why {city.name} Tennis Clubs Choose PlayCourt
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-brand-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-3">For Your Members</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-brand-500 mt-1">✓</span>
                  Book courts 24/7 from any device
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-500 mt-1">✓</span>
                  Automatic reminders reduce no-shows by 73%
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-500 mt-1">✓</span>
                  See real-time court availability
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-500 mt-1">✓</span>
                  Easy cancellation and rebooking
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-100 rounded-xl p-6">
              <h3 className="font-semibold text-slate-900 mb-3">For Your Club</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 mt-1">✓</span>
                  Set up in 10 minutes, not 10 weeks
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 mt-1">✓</span>
                  No IT department required
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 mt-1">✓</span>
                  Manage all courts from one dashboard
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-500 mt-1">✓</span>
                  See usage analytics and trends
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Climate-Specific Features */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Built for {city.name}&apos;s {city.climate}
          </h2>
          <p className="text-slate-600 mb-6">
            {city.name}&apos;s tennis season runs <strong>{city.peakSeason}</strong>. 
            PlayCourt helps {city.region} clubs manage their unique scheduling needs:
          </p>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-700">
                <span className="text-brand-500 font-bold">→</span>
                Separate rules for indoor vs outdoor courts
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="text-brand-500 font-bold">→</span>
                Seasonal membership flexibility
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="text-brand-500 font-bold">→</span>
                Prime-time management for peak demand
              </li>
              <li className="flex items-start gap-3 text-slate-700">
                <span className="text-brand-500 font-bold">→</span>
                Weather-related booking adjustments
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions: {city.name} Tennis Booking
          </h2>
          
          <div className="space-y-4">
            {city.faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Also Serving Tennis Clubs Near {city.name}
          </h2>
          <div className="flex flex-wrap gap-3">
            {city.nearbyAreas.map((area, i) => (
              <span
                key={i}
                className="bg-white rounded-full px-4 py-2 text-sm text-slate-700 shadow-sm border border-slate-200"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-500">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to modernize your {city.name} tennis club?
          </h2>
          <p className="text-brand-100 mb-8">
            Join {city.tennisClubs} tennis facilities in {city.name} already using modern booking software.
          </p>
          <Link
            href="/admin"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-medium text-brand-600 shadow-sm transition-all hover:bg-brand-50"
          >
            Start Free Trial
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="mt-4 text-brand-200 text-sm">
            No credit card required. Set up in 10 minutes.
          </p>
        </div>
      </section>
    </>
  );
}
