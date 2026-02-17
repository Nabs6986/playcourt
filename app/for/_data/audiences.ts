export interface Audience {
  slug: string;
  name: string;
  headline: string;
  description: string;
  painPoints: string[];
  solutions: {
    title: string;
    description: string;
  }[];
  stats: {
    value: string;
    label: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    club: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  metaDescription: string;
  recommendedPlan: "Starter" | "Pro";
  recommendedPlanReason: string;
}

export const audiences: Record<string, Audience> = {
  "small-clubs": {
    slug: "small-clubs",
    name: "Small Tennis Clubs",
    headline: "Tennis Court Booking Software for Small Clubs",
    description: "PlayCourt helps small tennis clubs (1-8 courts) modernize their booking system without enterprise complexity or pricing. Get online booking live in 10 minutes.",
    painPoints: [
      "Spending hours managing bookings via phone, text, and spreadsheets",
      "Double-bookings causing member frustration",
      "No-shows eating into court utilization and revenue",
      "Can't afford expensive enterprise software",
      "No IT staff to handle complex implementations",
    ],
    solutions: [
      {
        title: "10-Minute Setup, No IT Required",
        description: "Add your courts, invite members, and go live. No implementation teams, no training sessions, no technical expertise needed. If you can send an email, you can set up PlayCourt.",
      },
      {
        title: "24/7 Member Self-Service Booking",
        description: "Members book courts from their phone anytime—no more phone tag or after-hours texts. Real-time availability means no more double-bookings.",
      },
      {
        title: "Automatic Reminders That Reduce No-Shows",
        description: "SMS and email reminders go out automatically before each booking. Clubs see 73% fewer no-shows on average within the first month.",
      },
      {
        title: "Affordable Pricing for Smaller Budgets",
        description: "Starting at $149/month, PlayCourt costs less than one hour of staff time per week. No hidden fees, no per-court charges, no surprise invoices.",
      },
    ],
    stats: [
      { value: "73%", label: "Average no-show reduction" },
      { value: "10 min", label: "Setup time" },
      { value: "5-10 hrs", label: "Admin time saved weekly" },
      { value: "94%", label: "Members prefer online booking" },
    ],
    testimonial: {
      quote: "We went from spending 2 hours a day on booking calls to maybe 10 minutes. Members love being able to book at midnight without bothering anyone.",
      author: "Sarah M.",
      club: "Riverside Tennis Club (6 courts)",
    },
    faqs: [
      {
        question: "Is PlayCourt worth it for a small club?",
        answer: "Absolutely. If you have 2+ courts or 30+ members, PlayCourt pays for itself. At $149/month, it costs less than 1 hour of staff time weekly. Most clubs see ROI within the first month from reduced no-shows alone.",
      },
      {
        question: "What if we only have 2-4 courts?",
        answer: "PlayCourt is perfect for small clubs. Our Starter plan supports up to 6 courts with unlimited members. You get the same powerful features as larger clubs without paying enterprise prices.",
      },
      {
        question: "Can our older members handle online booking?",
        answer: "Yes! PlayCourt is designed for simplicity—members book in 3 taps on their phone. We've seen 80+ year old members adopt it without issues. If they can send a text, they can book a court.",
      },
      {
        question: "Do we need technical skills to set this up?",
        answer: "Not at all. PlayCourt is built for club managers, not IT departments. Add your courts, set your hours, invite members—you're live in 10 minutes. No coding, no consultants, no complexity.",
      },
      {
        question: "What if we still want to take some bookings by phone?",
        answer: "Staff can book on behalf of members in seconds. PlayCourt doesn't eliminate phone booking—it makes it optional. Most clubs see phone calls drop 80%+ once members discover self-service.",
      },
    ],
    metaDescription: "Tennis court booking software designed for small clubs. 10-minute setup, $149/mo, no IT required. Reduce no-shows by 73% and save 5-10 hours weekly.",
    recommendedPlan: "Starter",
    recommendedPlanReason: "Most small clubs choose Starter ($149/mo) for unlimited bookings, up to 6 courts, and all core features.",
  },

  "public-parks": {
    slug: "public-parks",
    name: "Public Parks & Recreation",
    headline: "Tennis Court Booking for Parks & Recreation Departments",
    description: "PlayCourt helps municipal parks and recreation departments offer modern online booking for public tennis courts. Reduce staff workload while improving citizen access.",
    painPoints: [
      "Residents calling during business hours only",
      "No way to enforce court time limits fairly",
      "Paper sign-up sheets getting ignored or vandalized",
      "Staff overwhelmed with booking requests",
      "No data on court utilization for budget planning",
    ],
    solutions: [
      {
        title: "24/7 Public Access Booking",
        description: "Residents book courts anytime from their phone—no office visits, no business-hour restrictions. First-come, first-served becomes fair and transparent.",
      },
      {
        title: "Enforceable Time Limits",
        description: "Set 1-hour or 90-minute limits that are enforced automatically. No more confrontations about court hogging—the system handles it.",
      },
      {
        title: "Usage Data for Budget Decisions",
        description: "See exactly which courts are used, when peak times occur, and justify maintenance budgets with real data instead of guesswork.",
      },
      {
        title: "Reduced Staff Workload",
        description: "Stop fielding booking calls and managing paper sheets. Staff can focus on maintenance and programs instead of reservation logistics.",
      },
    ],
    stats: [
      { value: "40%", label: "Increase in court utilization" },
      { value: "80%", label: "Reduction in staff booking calls" },
      { value: "24/7", label: "Public booking access" },
      { value: "100%", label: "Time limit compliance" },
    ],
    testimonial: {
      quote: "Our phone used to ring constantly with booking requests. Now residents book themselves online, and we have real data showing which courts need resurfacing first.",
      author: "Mike R.",
      club: "Parks Department, Population 45,000",
    },
    faqs: [
      {
        question: "Can residents book without creating an account?",
        answer: "PlayCourt supports both registered and guest booking modes. For public parks, we recommend light registration (email + name) to reduce abuse while keeping access easy.",
      },
      {
        question: "How do we handle courts that are free vs. paid?",
        answer: "PlayCourt supports both free and paid booking. Many parks offer free booking with time limits, or nominal fees ($5-10) to reduce no-shows. Payment processing is coming soon.",
      },
      {
        question: "What about residents without smartphones?",
        answer: "Staff can book on behalf of any resident in seconds. You can also set aside walk-up courts that don't require booking. PlayCourt adapts to your community's needs.",
      },
      {
        question: "Can we restrict booking to residents only?",
        answer: "Yes. You can require registration with address verification, or offer resident vs. non-resident pricing tiers. Many parks charge non-residents a higher fee.",
      },
    ],
    metaDescription: "Tennis court booking software for parks and recreation. 24/7 public access, automated time limits, usage analytics. Reduce staff workload by 80%.",
    recommendedPlan: "Starter",
    recommendedPlanReason: "Parks typically start with Starter ($149/mo) for core booking features, then upgrade to Pro for advanced analytics.",
  },

  "tennis-centers": {
    slug: "tennis-centers",
    name: "Tennis Centers",
    headline: "Tennis Center Management Software That Actually Works",
    description: "PlayCourt helps commercial tennis centers streamline operations, fill more court time, and deliver a premium booking experience without enterprise software complexity.",
    painPoints: [
      "Juggling lessons, leagues, and open play on the same courts",
      "Prime time courts going empty due to no-shows",
      "Staff spending more time on admin than customer service",
      "Expensive enterprise software that takes months to implement",
      "No visibility into which court times are underperforming",
    ],
    solutions: [
      {
        title: "Smart Scheduling for Complex Operations",
        description: "Block time for lessons, leagues, clinics, and open play. Set different rules for each—PlayCourt keeps everything organized without conflicts.",
      },
      {
        title: "No-Show Protection for Prime Time",
        description: "Automatic reminders reduce no-shows by 73%. Optional waitlists fill cancellations instantly so prime slots never go empty.",
      },
      {
        title: "Premium Member Experience",
        description: "Your branded booking portal looks professional on any device. Members see real-time availability and book in seconds—the experience they expect.",
      },
      {
        title: "Actionable Analytics Dashboard",
        description: "See court utilization by hour, day, and season. Identify underperforming time slots and make data-driven decisions about pricing and programming.",
      },
    ],
    stats: [
      { value: "73%", label: "No-show reduction" },
      { value: "25%", label: "Increase in bookings" },
      { value: "$200-500", label: "Monthly savings vs competitors" },
      { value: "10 min", label: "Setup time" },
    ],
    testimonial: {
      quote: "We switched from CourtReserve and saved $400/month. Setup took an afternoon, not the 6 weeks they quoted us. Our members actually prefer the simpler interface.",
      author: "David L.",
      club: "Metro Tennis Center (12 courts)",
    },
    faqs: [
      {
        question: "Can PlayCourt handle both indoor and outdoor courts?",
        answer: "Yes. Create separate court groups with different rules, pricing, and availability. Many centers run indoor courts year-round while outdoor courts are seasonal.",
      },
      {
        question: "How do we manage recurring lessons and clinics?",
        answer: "Pro plan includes recurring booking support. Block the same court at the same time weekly for lessons, or create clinic series. One-time setup, automatic scheduling.",
      },
      {
        question: "What about peak vs. off-peak pricing?",
        answer: "PlayCourt supports different rates by time of day and day of week. Charge more for Saturday mornings, less for Tuesday afternoons—the system handles it automatically.",
      },
      {
        question: "Can staff book on behalf of members?",
        answer: "Absolutely. Staff have admin access to book, modify, or cancel any reservation. You can also see who booked and when for full accountability.",
      },
    ],
    metaDescription: "Tennis center management software built for commercial facilities. Handle lessons, leagues, and open play. Save $200-500/mo vs enterprise alternatives.",
    recommendedPlan: "Pro",
    recommendedPlanReason: "Tennis centers typically choose Pro ($299/mo) for recurring bookings, advanced analytics, and priority support.",
  },

  "country-clubs": {
    slug: "country-clubs",
    name: "Country Clubs",
    headline: "Tennis Booking Software for Country Clubs",
    description: "PlayCourt delivers the premium booking experience your country club members expect, with the simplicity your staff deserves. White-label ready, brand-aligned.",
    painPoints: [
      "Members expecting premium digital experience",
      "Tennis competing with golf, pool, dining for attention",
      "Existing club software doesn't handle tennis well",
      "Guest policies and member-guest events need special handling",
      "Pro shop and lesson booking disconnected from court booking",
    ],
    solutions: [
      {
        title: "Premium Member Experience",
        description: "Beautiful, branded booking interface that matches your club's image. Members book courts alongside their tee times—seamless, professional, expected.",
      },
      {
        title: "Guest & Member-Guest Support",
        description: "Handle guest fees, track guest usage, and manage member-guest tournaments. Set policies (2 guests max, member must be present) and enforce them automatically.",
      },
      {
        title: "Pro Integration",
        description: "Tennis pros can manage their own lesson calendars while members book available time. Keep lesson booking and open play booking in one unified system.",
      },
      {
        title: "Works With Existing Systems",
        description: "PlayCourt focuses on tennis booking while your existing club management software handles billing, membership, and other amenities. No need to replace everything.",
      },
    ],
    stats: [
      { value: "73%", label: "No-show reduction" },
      { value: "Premium", label: "Member experience" },
      { value: "Flexible", label: "Guest policies" },
      { value: "Unified", label: "Pro + open play booking" },
    ],
    testimonial: {
      quote: "Our members expected the same digital experience from tennis that they get from our golf booking. PlayCourt delivered that without a massive IT project.",
      author: "Jennifer W.",
      club: "Oakwood Country Club",
    },
    faqs: [
      {
        question: "Can we brand PlayCourt with our club logo and colors?",
        answer: "Pro plan includes full custom branding—your logo, colors, and custom domain. Members see your brand, not ours.",
      },
      {
        question: "How do member guest fees work?",
        answer: "Set guest fees per court hour. Guests are tracked by name and linked to the sponsoring member. Run reports on guest usage anytime.",
      },
      {
        question: "Can our tennis pro manage their own schedule?",
        answer: "Yes. Pros get their own login to block lesson times, view their schedule, and see who's on court. Members book lessons directly through the same system.",
      },
      {
        question: "Does this integrate with our club management software?",
        answer: "PlayCourt works alongside your existing systems via CSV member import/export. For deeper integrations, our API (Pro plan) enables custom connections.",
      },
    ],
    metaDescription: "Tennis booking software for country clubs. Premium branded experience, guest management, pro scheduling. Works alongside existing club software.",
    recommendedPlan: "Pro",
    recommendedPlanReason: "Country clubs choose Pro ($299/mo) for custom branding, guest management, and white-label options.",
  },

  pickleball: {
    slug: "pickleball",
    name: "Pickleball Facilities",
    headline: "Pickleball Court Booking Software",
    description: "PlayCourt handles the unique demands of pickleball—rotating players, short game times, mixed skill levels—with booking software built for how pickleball actually works.",
    painPoints: [
      "Courts turning over faster than tennis (30-60 min games)",
      "Drop-in play and open paddle sessions hard to manage",
      "Skill-level mixing causing frustration",
      "Rapid membership growth overwhelming manual systems",
      "Converting tennis courts to pickleball and managing both",
    ],
    solutions: [
      {
        title: "Flexible Time Slots for Fast Turnover",
        description: "Configure 30, 45, or 60-minute slots instead of tennis-standard 90 minutes. Match your booking windows to how pickleball is actually played.",
      },
      {
        title: "Open Play & Drop-In Support",
        description: "Manage drop-in sessions where players rotate in. Track who's playing, enforce time limits, and keep things fair without staff intervention.",
      },
      {
        title: "Skill Level Matching",
        description: "Let members self-select skill levels (2.5, 3.0, 3.5, etc.) and filter courts or sessions by level. Reduce mismatches that frustrate players.",
      },
      {
        title: "Multi-Sport Court Management",
        description: "Converting tennis courts to pickleball? Manage both sports on the same courts with different booking rules, time slots, and member groups.",
      },
    ],
    stats: [
      { value: "43M+", label: "US pickleball players (2024)" },
      { value: "223%", label: "Sport growth since 2020" },
      { value: "30 min", label: "Flexible slot times" },
      { value: "Any", label: "Skill level filtering" },
    ],
    testimonial: {
      quote: "We added 4 pickleball courts and membership tripled. There's no way we could manage this manually. PlayCourt handles the chaos beautifully.",
      author: "Tom K.",
      club: "Eastside Paddle Club",
    },
    faqs: [
      {
        question: "Can PlayCourt handle both pickleball and tennis?",
        answer: "Yes. Create separate court groups for each sport with different time slots, rules, and member access. Many facilities manage tennis, pickleball, and paddle on one system.",
      },
      {
        question: "How do shorter booking windows work?",
        answer: "Configure any slot duration—30, 45, 60, or 90 minutes. Pickleball courts can have 30-minute slots while tennis courts stay at 90 minutes. Completely flexible.",
      },
      {
        question: "Can we manage open play / round robin sessions?",
        answer: "Yes. Create sessions where players sign up for a time block rather than a specific court. Perfect for drop-in play, socials, and round robins.",
      },
      {
        question: "What about skill-based play?",
        answer: "Members can set their skill level in their profile. You can restrict certain times or courts to specific skill ranges (e.g., 3.5+ only during league night).",
      },
    ],
    metaDescription: "Pickleball court booking software with flexible time slots, drop-in session support, and skill-level matching. Built for how pickleball actually works.",
    recommendedPlan: "Starter",
    recommendedPlanReason: "Pickleball facilities typically start with Starter ($149/mo) and upgrade to Pro as membership grows.",
  },
};

export function getAudience(slug: string): Audience | undefined {
  return audiences[slug];
}

export function getAllAudienceSlugs(): string[] {
  return Object.keys(audiences);
}
