export interface Competitor {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  setupTime: string;
  bestFor: string;
  features: {
    name: string;
    playcourt: boolean | string;
    competitor: boolean | string;
  }[];
  whenChoosePlayCourt: string[];
  whenChooseCompetitor: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  metaDescription: string;
}

export const competitors: Record<string, Competitor> = {
  courtreserve: {
    slug: "courtreserve",
    name: "CourtReserve",
    tagline: "Enterprise tennis management platform",
    price: "$300-800/mo",
    priceNote: "Based on facility size and features",
    setupTime: "2-4 weeks with implementation team",
    bestFor: "Large facilities with dedicated IT staff",
    features: [
      { name: "Online Booking", playcourt: true, competitor: true },
      { name: "Mobile App", playcourt: true, competitor: true },
      { name: "Automatic Reminders", playcourt: true, competitor: true },
      { name: "Member Management", playcourt: true, competitor: true },
      { name: "10-Minute Setup", playcourt: true, competitor: false },
      { name: "No Implementation Fee", playcourt: true, competitor: false },
      { name: "Transparent Pricing", playcourt: true, competitor: false },
      { name: "League Management", playcourt: "Pro plan", competitor: true },
      { name: "Payment Processing", playcourt: "Coming soon", competitor: true },
    ],
    whenChoosePlayCourt: [
      "You want to be live in under an hour",
      "You're a small-to-medium tennis club (1-12 courts)",
      "You don't have an IT department",
      "You want simple, transparent pricing",
      "You value ease of use over feature complexity",
    ],
    whenChooseCompetitor: [
      "You're an enterprise facility with 20+ courts",
      "You need advanced league management",
      "You have dedicated IT staff for implementation",
      "Budget isn't a primary concern",
      "You need integrated payment processing today",
    ],
    faqs: [
      {
        question: "Is PlayCourt better than CourtReserve?",
        answer: "PlayCourt is better for small-to-medium clubs seeking simplicity and value. CourtReserve may be better for enterprise facilities needing advanced features like league management. Most clubs save $150-500/month by choosing PlayCourt.",
      },
      {
        question: "Can I migrate from CourtReserve to PlayCourt?",
        answer: "Yes, PlayCourt offers free migration assistance. Export your members as CSV from CourtReserve and import directly into PlayCourt. Most clubs complete migration in under 30 minutes.",
      },
      {
        question: "How much can I save switching to PlayCourt?",
        answer: "Clubs typically save $150-500/month switching from CourtReserve to PlayCourt. A club paying $400/month for CourtReserve would pay $149-299/month for PlayCourt with comparable features.",
      },
      {
        question: "What features does CourtReserve have that PlayCourt doesn't?",
        answer: "CourtReserve offers more advanced league management and integrated payment processing. However, most small-to-medium clubs don't need these enterprise features and prefer PlayCourt's simplicity.",
      },
    ],
    metaDescription: "Compare PlayCourt vs CourtReserve for tennis court booking. See pricing ($149 vs $300-800/mo), features, setup time, and which is right for your club.",
  },

  spreadsheets: {
    slug: "spreadsheets",
    name: "Spreadsheets",
    tagline: "Excel, Google Sheets, or paper sign-ups",
    price: "Free",
    priceNote: "But costs hours of admin time weekly",
    setupTime: "Varies",
    bestFor: "Very small clubs just starting out",
    features: [
      { name: "Online Booking", playcourt: true, competitor: false },
      { name: "Mobile Access", playcourt: true, competitor: "Limited" },
      { name: "Automatic Reminders", playcourt: true, competitor: false },
      { name: "Real-time Availability", playcourt: true, competitor: false },
      { name: "No Double-Bookings", playcourt: true, competitor: false },
      { name: "Member Self-Service", playcourt: true, competitor: false },
      { name: "Usage Analytics", playcourt: true, competitor: "Manual" },
      { name: "Zero Software Cost", playcourt: false, competitor: true },
    ],
    whenChoosePlayCourt: [
      "You're tired of phone calls and manual updates",
      "Double-bookings are causing member frustration",
      "You want members to book themselves 24/7",
      "You need automatic reminders to reduce no-shows",
      "You want to see usage patterns and analytics",
    ],
    whenChooseCompetitor: [
      "You have fewer than 2 courts",
      "You have very few members (<20)",
      "You enjoy the manual process",
      "Software budget is absolutely zero",
    ],
    faqs: [
      {
        question: "Why switch from spreadsheets to booking software?",
        answer: "Spreadsheets can't send automatic reminders (reducing no-shows by 73%), allow 24/7 member self-booking, or prevent double-bookings. Clubs switching from spreadsheets typically save 5-10 hours of admin time per week.",
      },
      {
        question: "Is PlayCourt worth it for a small club?",
        answer: "Yes, if you have more than 2 courts or 30+ members. At $149/month, PlayCourt costs less than 1 hour of staff time per week. Most clubs see ROI within the first month from reduced no-shows alone.",
      },
      {
        question: "How hard is it to switch from spreadsheets?",
        answer: "Very easy. Export your member list to CSV, import into PlayCourt, and you're live in 10 minutes. No technical skills required.",
      },
      {
        question: "What if my members aren't tech-savvy?",
        answer: "PlayCourt is designed for simplicity. Members book in 3 taps on their phone. We've seen 80+ year old members adopt it without issues. If they can text, they can book a court.",
      },
    ],
    metaDescription: "Should you switch from spreadsheets to tennis booking software? Compare the real costs, time savings, and features. See why clubs are upgrading to PlayCourt.",
  },

  clubautomation: {
    slug: "clubautomation",
    name: "Club Automation",
    tagline: "Full-service club management platform",
    price: "$500-1,500/mo",
    priceNote: "Enterprise pricing, requires demo",
    setupTime: "4-8 weeks implementation",
    bestFor: "Large multi-sport facilities",
    features: [
      { name: "Court Booking", playcourt: true, competitor: true },
      { name: "Member Management", playcourt: true, competitor: true },
      { name: "Quick Setup", playcourt: true, competitor: false },
      { name: "Tennis-Specific", playcourt: true, competitor: false },
      { name: "Billing & Payments", playcourt: "Coming soon", competitor: true },
      { name: "Multi-Sport Support", playcourt: false, competitor: true },
      { name: "POS Integration", playcourt: false, competitor: true },
      { name: "Affordable Pricing", playcourt: true, competitor: false },
    ],
    whenChoosePlayCourt: [
      "You're a tennis-focused facility",
      "You want to launch quickly without lengthy implementation",
      "You need simple, tennis-specific features",
      "You want transparent, affordable pricing",
    ],
    whenChooseCompetitor: [
      "You're a large multi-sport facility",
      "You need integrated billing and POS",
      "You have budget for enterprise software",
      "You have IT resources for implementation",
    ],
    faqs: [
      {
        question: "Is PlayCourt or Club Automation better for tennis clubs?",
        answer: "PlayCourt is purpose-built for tennis and pickleball facilities, while Club Automation is designed for large multi-sport facilities. For tennis-focused clubs, PlayCourt offers faster setup, simpler interface, and lower cost.",
      },
      {
        question: "How does pricing compare?",
        answer: "PlayCourt starts at $149/month with transparent pricing. Club Automation typically costs $500-1,500/month and requires a sales demo for exact pricing. Tennis clubs can save 70%+ with PlayCourt.",
      },
      {
        question: "What if I need features Club Automation has?",
        answer: "If you need full POS integration, multi-sport management, or enterprise billing, Club Automation may be the right choice. For court booking and member management, PlayCourt does everything you need at a fraction of the cost.",
      },
    ],
    metaDescription: "PlayCourt vs Club Automation for tennis facilities. Compare features, pricing ($149 vs $500-1,500/mo), and setup time. Find the right fit for your club.",
  },

  "phone-booking": {
    slug: "phone-booking",
    name: "Phone Booking",
    tagline: "Taking reservations over the phone",
    price: "Staff time cost",
    priceNote: "5-10 hours/week of staff time",
    setupTime: "N/A",
    bestFor: "Clubs that prefer personal touch",
    features: [
      { name: "24/7 Availability", playcourt: true, competitor: false },
      { name: "No Staff Required", playcourt: true, competitor: false },
      { name: "Automatic Reminders", playcourt: true, competitor: false },
      { name: "Real-time Availability", playcourt: true, competitor: false },
      { name: "Personal Touch", playcourt: "Via messaging", competitor: true },
      { name: "No Learning Curve", playcourt: "Minimal", competitor: true },
    ],
    whenChoosePlayCourt: [
      "Phone is ringing during lessons and matches",
      "Staff spending hours on booking logistics",
      "Members frustrated they can't book after hours",
      "Double-bookings happening from miscommunication",
      "No-shows eating into court utilization",
    ],
    whenChooseCompetitor: [
      "You have dedicated front desk staff",
      "Members strongly prefer calling",
      "Very low booking volume",
    ],
    faqs: [
      {
        question: "Will my members actually use online booking?",
        answer: "Yes. 94% of members prefer online booking once available. The average club sees 80%+ of bookings shift online within 2 weeks. Members love booking at midnight without calling anyone.",
      },
      {
        question: "What about members who still want to call?",
        answer: "Staff can still book on behalf of members in 30 seconds. PlayCourt doesn't eliminate phone booking—it just makes it optional. Most clubs keep a phone line but see calls drop 80%+.",
      },
      {
        question: "How much time will this save?",
        answer: "Clubs report saving 5-10 hours per week on booking administration. That's time your staff can spend on member experience, lessons, and growing the club.",
      },
    ],
    metaDescription: "Stop playing phone tag for court bookings. See how PlayCourt online booking saves tennis clubs 5-10 hours/week while members book 24/7.",
  },
};

export function getCompetitor(slug: string): Competitor | undefined {
  return competitors[slug];
}

export function getAllCompetitorSlugs(): string[] {
  return Object.keys(competitors);
}
