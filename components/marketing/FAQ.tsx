"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How quickly can I get set up?",
    a: "Most clubs are fully operational within 24 hours. Our onboarding wizard guides you through court setup, operating hours, and member import."
  },
  {
    q: "Do my members need to create accounts?",
    a: "No. Members book via a magic link sent to their email -- no passwords or app downloads required."
  },
  {
    q: "Can I customize the booking rules?",
    a: "Yes. Set max advance booking days, hours per member per day, cancellation windows, and allowed durations per court."
  },
  {
    q: "What payment methods do you support?",
    a: "We integrate with Stripe for subscription billing. Members can pay via credit card, with invoicing available on the Pro plan."
  },
  {
    q: "Is there a contract or commitment?",
    a: "No long-term contracts. Plans are month-to-month and you can cancel anytime."
  },
  {
    q: "Do you support multiple court types?",
    a: "Absolutely. Hard court, clay, grass, indoor -- each court can have its own surface type, availability, and pricing rules."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-slate-200">
      {faqs.map((faq, i) => (
        <div key={i} className="py-5">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between text-left"
          >
            <span className="text-base font-medium text-slate-900">{faq.q}</span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === i && (
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.a}</p>
          )}
        </div>
      ))}
    </div>
  );
}
