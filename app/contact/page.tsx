import { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | PlayCourt - Tennis Court Booking Software",
  description:
    "Get in touch with the PlayCourt team. Questions about pricing, features, or getting started? We're here to help.",
  openGraph: {
    title: "Contact PlayCourt - Tennis Court Booking Software",
    description: "Questions about pricing, features, or getting started? We're here to help.",
  },
};

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    description: "For general questions and support requests",
    contact: "support@playcourt.io",
    note: "We respond within 24 hours",
  },
  {
    icon: MessageCircle,
    title: "Sales Inquiries",
    description: "For pricing, enterprise plans, and demos",
    contact: "sales@playcourt.io",
    note: "Usually same-day response",
  },
];

export default function ContactPage() {
  // JSON-LD Schema
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact PlayCourt",
    "description": "Get in touch with the PlayCourt team",
    "mainEntity": {
      "@type": "Organization",
      "name": "PlayCourt",
      "email": "support@playcourt.io",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "email": "support@playcourt.io",
        },
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "email": "sales@playcourt.io",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white pt-24 pb-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Questions? We&apos;re here to help. Choose the best way to reach us below.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {contactMethods.map((method) => (
              <div
                key={method.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand-100 mb-4">
                  <method.icon className="h-6 w-6 text-brand-600" />
                </div>
                <h2 className="text-lg font-semibold text-slate-900 mb-2">{method.title}</h2>
                <p className="text-slate-600 text-sm mb-4">{method.description}</p>
                <a
                  href={`mailto:${method.contact}`}
                  className="text-brand-600 font-medium hover:text-brand-700"
                >
                  {method.contact}
                </a>
                <div className="flex items-center gap-1 mt-2 text-sm text-slate-500">
                  <Clock className="h-4 w-4" />
                  {method.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 bg-slate-50">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
            Send Us a Message
          </h2>
          <form className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="club" className="block text-sm font-medium text-slate-700 mb-2">
                  Club/Facility Name (optional)
                </label>
                <input
                  type="text"
                  id="club"
                  name="club"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                  placeholder="Riverside Tennis Club"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors"
                >
                  <option value="">Select a topic</option>
                  <option value="pricing">Pricing question</option>
                  <option value="features">Feature question</option>
                  <option value="demo">Request a demo</option>
                  <option value="support">Technical support</option>
                  <option value="enterprise">Enterprise inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-colors resize-none"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-500 text-white font-medium py-3 px-6 rounded-lg hover:bg-brand-600 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Looking for Quick Answers?</h2>
          <p className="text-slate-600 mb-6">
            Check our pricing FAQ or feature documentation for common questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing#faq"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-100 px-6 py-3 text-base font-medium text-slate-700 transition-all hover:bg-slate-200"
            >
              Pricing FAQ
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-100 px-6 py-3 text-base font-medium text-slate-700 transition-all hover:bg-slate-200"
            >
              Features
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-500">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-brand-100 mb-8">
            Skip the forms and try PlayCourt yourself. 14-day free trial, no credit card required.
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
