"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is PlayCourt?",
    answer: "PlayCourt is a tennis court booking software designed for clubs and facilities. According to user data, it reduces no-shows by 73% through automatic reminders and allows members to book courts online in under 30 seconds."
  },
  {
    question: "How long does it take to set up PlayCourt?",
    answer: "PlayCourt can be fully set up in approximately 10 minutes. The process involves adding your courts, importing members via CSV upload, and launching. No IT department or technical training required."
  },
  {
    question: "What are the best tennis court booking software options?",
    answer: "The leading tennis court booking software options include PlayCourt (modern, easy setup), CourtReserve ($300-800/month), and ClubAutomation (enterprise). PlayCourt is specifically designed for small-to-medium tennis clubs seeking simplicity over complexity."
  },
  {
    question: "Does PlayCourt work on mobile devices?",
    answer: "Yes, PlayCourt is fully mobile-responsive. Members can book courts from any smartphone, tablet, or computer. The interface is optimized for one-handed booking on mobile devices."
  },
  {
    question: "How does PlayCourt reduce no-shows?",
    answer: "PlayCourt sends automatic SMS and email reminders before scheduled court times. Based on customer data, this reduces no-shows by an average of 73% compared to manual booking systems."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, PlayCourt offers a free trial so you can test the software with your club before committing. No credit card required to start."
  },
  {
    question: "Can I import my existing member list?",
    answer: "Absolutely. PlayCourt supports CSV upload for bulk member import. You can also add members manually or invite them via email to sign up themselves."
  },
  {
    question: "How much does PlayCourt cost?",
    answer: "PlayCourt offers transparent pricing starting at $49/month for small clubs. Unlike competitors charging $300-800/month, we believe tennis clubs shouldn't need enterprise budgets for simple booking software."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Everything you need to know about PlayCourt tennis court booking software
        </p>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <span className="text-2xl text-gray-400">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
