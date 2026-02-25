import { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, HelpCircle } from "lucide-react";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Pricing | PlayCourt - Tennis Court Booking Software",
  description:
    "Simple, transparent pricing. Starter at $149/mo, Pro at $299/mo. No hidden fees, no per-court charges. 14-day free trial, no credit card required.",
  openGraph: {
    title: "PlayCourt Pricing - Simple, Transparent Tennis Software Pricing",
    description:
      "Starter at $149/mo, Pro at $299/mo. No hidden fees, no per-court charges. 14-day free trial.",
  },
};

const plans = [
  {
    name: "Starter",
    price: 149,
    description: "Perfect for small clubs getting started with online booking.",
    features: [
      "Up to 6 courts",
      "Unlimited members",
      "Online booking 24/7",
      "Email reminders",
      "100 SMS reminders/month",
      "Basic analytics",
      "Member self-service",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Pro",
    price: 299,
    description: "For growing clubs that need advanced features and customization.",
    features: [
      "Unlimited courts",
      "Unlimited members",
      "Online booking 24/7",
      "Email reminders",
      "Unlimited SMS reminders",
      "Advanced analytics",
      "Recurring bookings",
      "Custom branding",
      "Custom domain",
      "API access",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
];

const faqs = [
  {
    question: "Is there really no setup fee?",
    answer:
      "Correct. No setup fee, no implementation fee, no onboarding fee. You pay the monthly subscription and that's it. Start your trial, set up in 10 minutes, and you're live.",
  },
  {
    question: "What happens after the 14-day trial?",
    answer:
      "After your trial, you can choose to subscribe to Starter or Pro. If you decide PlayCourt isn't right for you, your account simply becomes inactive—no charge, no hassle.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Yes, upgrade or downgrade anytime. When you upgrade, you get immediate access to new features. When you downgrade, the change takes effect at your next billing cycle.",
  },
  {
    question: "Do you charge per court or per member?",
    answer:
      "No. Starter includes up to 6 courts and unlimited members. Pro includes unlimited courts and unlimited members. Simple pricing, no surprises.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, Amex) and can arrange annual invoicing for clubs that prefer it.",
  },
  {
    question: "Is there a discount for annual billing?",
    answer:
      "Yes. Pay annually and get 2 months free (equivalent to ~17% discount). Contact us to set up annual billing.",
  },
  {
    question: "What if I need help setting up?",
    answer:
      "Most clubs set up on their own in 10-15 minutes. If you need help, our support team is available via email (Starter) or priority support (Pro). We also offer optional paid onboarding for clubs that want a guided setup.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Cancel anytime from your account settings. Your subscription remains active until the end of your billing period, then your account becomes inactive. No cancellation fees.",
  },
];

export default function PricingPage() {
  // JSON-LD Schema
  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PlayCourt",
    "applicationCategory": "BusinessApplication",
    "offers": plans.map((plan) => ({
      "@type": "Offer",
      "name": plan.name,
      "price": plan.price.toString(),
      "priceCurrency": "USD",
      "priceValidUntil": "2026-12-31",
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
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
          { name: "Pricing", url: "https://playcourt.io/pricing" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-24 pb-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            No hidden fees. No per-court charges. No surprises. Just straightforward pricing that makes sense.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl shadow-sm border-2 ${
                  plan.popular ? "border-brand-500" : "border-slate-200"
                } p-8`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center px-3 py-1 rounded-full bg-brand-500 text-white text-sm font-medium">
                    Most Popular
                  </span>
                )}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-slate-900">{plan.name}</h2>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-slate-900">${plan.price}</span>
                    <span className="text-slate-500">/month</span>
                  </div>
                  <p className="mt-2 text-slate-600 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-brand-500 shrink-0" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/admin"
                  className={`block w-full text-center rounded-lg px-4 py-3 font-medium transition-all ${
                    plan.popular
                      ? "bg-brand-500 text-white hover:bg-brand-600"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {plan.cta}
                </Link>
                <p className="mt-3 text-center text-sm text-slate-500">
                  14-day free trial • No credit card required
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Enterprise</h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Large facility or multiple locations? Need custom integrations, SLA guarantees, or dedicated support? 
              Let&apos;s talk about a plan that fits your needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-medium text-slate-900 transition-all hover:bg-slate-100"
            >
              Contact Sales
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison with Competitors */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            How We Compare
          </h2>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="py-4 px-6 text-left text-sm font-medium text-slate-600"></th>
                  <th className="py-4 px-6 text-center text-sm font-medium text-brand-600">PlayCourt</th>
                  <th className="py-4 px-6 text-center text-sm font-medium text-slate-600">CourtReserve</th>
                  <th className="py-4 px-6 text-center text-sm font-medium text-slate-600">Club Automation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 px-6 text-sm text-slate-700">Starting Price</td>
                  <td className="py-3 px-6 text-center text-sm font-semibold text-brand-600">$149/mo</td>
                  <td className="py-3 px-6 text-center text-sm text-slate-600">$300-800/mo</td>
                  <td className="py-3 px-6 text-center text-sm text-slate-600">$500-1,500/mo</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 text-sm text-slate-700">Setup Fee</td>
                  <td className="py-3 px-6 text-center text-sm font-semibold text-brand-600">$0</td>
                  <td className="py-3 px-6 text-center text-sm text-slate-600">$500-2,000</td>
                  <td className="py-3 px-6 text-center text-sm text-slate-600">$1,000-5,000</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 text-sm text-slate-700">Setup Time</td>
                  <td className="py-3 px-6 text-center text-sm font-semibold text-brand-600">10 minutes</td>
                  <td className="py-3 px-6 text-center text-sm text-slate-600">2-4 weeks</td>
                  <td className="py-3 px-6 text-center text-sm text-slate-600">4-8 weeks</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 text-sm text-slate-700">Contract Required</td>
                  <td className="py-3 px-6 text-center text-sm font-semibold text-brand-600">No</td>
                  <td className="py-3 px-6 text-center text-sm text-slate-600">Often annual</td>
                  <td className="py-3 px-6 text-center text-sm text-slate-600">1-2 years</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 text-sm text-slate-700">Free Trial</td>
                  <td className="py-3 px-6 text-center text-sm font-semibold text-brand-600">14 days</td>
                  <td className="py-3 px-6 text-center text-sm text-slate-600">Demo only</td>
                  <td className="py-3 px-6 text-center text-sm text-slate-600">Demo only</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/vs/courtreserve"
              className="inline-flex items-center gap-2 text-brand-600 font-medium hover:text-brand-700"
            >
              See detailed comparison with CourtReserve
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2 flex items-start gap-2">
                  <HelpCircle className="h-5 w-5 text-brand-500 shrink-0 mt-0.5" />
                  {faq.question}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed pl-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-500">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start your free trial today
          </h2>
          <p className="text-brand-100 mb-8">
            14 days free. No credit card required. Set up in 10 minutes.
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
