export interface UseCase {
  slug: string;
  title: string;
  headline: string;
  description: string;
  problemStatement: string;
  problemStats: {
    stat: string;
    source: string;
  }[];
  solutions: {
    feature: string;
    title: string;
    description: string;
  }[];
  results: {
    metric: string;
    description: string;
  }[];
  howItWorks: {
    step: number;
    title: string;
    description: string;
  }[];
  caseStudy?: {
    clubName: string;
    before: string;
    after: string;
    result: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  metaDescription: string;
}

export const useCases: Record<string, UseCase> = {
  "reduce-no-shows": {
    slug: "reduce-no-shows",
    title: "Reduce No-Shows",
    headline: "How to Reduce Tennis Court No-Shows by 73%",
    description: "PlayCourt's automatic reminders and easy cancellation system help tennis clubs dramatically reduce no-shows and keep courts filled.",
    problemStatement: "No-shows cost tennis clubs thousands in lost revenue and frustrate members waiting for court time. A single no-show during prime time can mean $50+ in lost court fees—and that adds up fast.",
    problemStats: [
      { stat: "15-25% of bookings result in no-shows at clubs without reminders", source: "Tennis Industry Association, 2024" },
      { stat: "$12,000+ average annual revenue lost to no-shows per facility", source: "Club Management Survey, 2024" },
      { stat: "68% of no-shows forgot about their booking", source: "PlayCourt Customer Data" },
    ],
    solutions: [
      {
        feature: "Automatic Reminders",
        title: "SMS & Email Reminders",
        description: "Members receive automatic reminders 24 hours and 2 hours before their booking. Customizable timing ensures they never forget.",
      },
      {
        feature: "Easy Cancellation",
        title: "One-Tap Cancellation",
        description: "Members can cancel with one tap from the reminder. No phone calls, no guilt, no friction—just a quick cancellation that opens the slot for others.",
      },
      {
        feature: "Waitlist System",
        title: "Automatic Waitlist Filling",
        description: "When someone cancels, the next person on the waitlist gets notified instantly. Cancelled slots fill automatically so courts never sit empty.",
      },
      {
        feature: "No-Show Tracking",
        title: "Pattern Detection & Policies",
        description: "Track no-show rates by member. Set policies (3 strikes = booking restrictions) and let the system enforce them automatically.",
      },
    ],
    results: [
      { metric: "73% average reduction in no-shows", description: "Across all PlayCourt clubs" },
      { metric: "90%+ reminder open rate", description: "Members actually see the reminders" },
      { metric: "5x faster cancellation filling", description: "Via automatic waitlist notifications" },
      { metric: "$4,000-8,000 annual recovery", description: "In previously lost revenue" },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Member Books a Court",
        description: "Member reserves their court through PlayCourt—phone, web, or app.",
      },
      {
        step: 2,
        title: "Automatic Reminders Go Out",
        description: "24 hours before: email reminder with booking details. 2 hours before: SMS reminder with one-tap cancel option.",
      },
      {
        step: 3,
        title: "Easy Cancellation If Needed",
        description: "If plans change, member taps 'Cancel' in the reminder. Takes 2 seconds, opens slot instantly.",
      },
      {
        step: 4,
        title: "Waitlist Gets Notified",
        description: "Next person on waitlist receives instant notification. They claim the slot, court stays filled.",
      },
    ],
    caseStudy: {
      clubName: "Riverside Tennis Club",
      before: "22% no-show rate, losing ~$800/month in prime time slots",
      after: "6% no-show rate with automatic reminders and waitlist",
      result: "Recovered $600+/month in previously lost revenue",
    },
    faqs: [
      {
        question: "How much do no-shows cost my club?",
        answer: "A club with 6 courts averaging 2 no-shows per day at $25/hour loses over $12,000 annually. Prime time no-shows during peak season can cost $50-75 per empty slot.",
      },
      {
        question: "Do reminders actually reduce no-shows?",
        answer: "Yes. 68% of no-shows are simply forgotten bookings. Automatic reminders 24h and 2h before dramatically reduce forgetfulness. PlayCourt clubs see 73% fewer no-shows on average.",
      },
      {
        question: "What if someone still no-shows?",
        answer: "PlayCourt tracks no-show patterns by member. You can set policies (e.g., 3 no-shows = 2-week booking restriction) and the system enforces them automatically. No awkward conversations needed.",
      },
      {
        question: "How does the waitlist work?",
        answer: "Members can join a waitlist for fully-booked time slots. When someone cancels, the first waitlisted member gets an instant notification and can claim the slot in one tap.",
      },
    ],
    metaDescription: "Reduce tennis court no-shows by 73% with automatic reminders and waitlist management. See how PlayCourt helps clubs recover $4,000-8,000 annually.",
  },

  "online-booking": {
    slug: "online-booking",
    title: "Online Booking",
    headline: "Tennis Court Online Booking System",
    description: "Give your members 24/7 self-service court booking from any device. No more phone tag, no more double-bookings, no more after-hours texts.",
    problemStatement: "Managing bookings via phone calls, texts, and emails wastes staff time and frustrates members who can't book outside business hours. It's 2026—your members expect to book a court as easily as they book a restaurant.",
    problemStats: [
      { stat: "94% of members prefer online booking when available", source: "Tennis Consumer Survey, 2024" },
      { stat: "5-10 hours per week spent on phone booking at average club", source: "Club Management Survey" },
      { stat: "73% of bookings happen outside business hours when online booking is available", source: "PlayCourt Customer Data" },
    ],
    solutions: [
      {
        feature: "24/7 Availability",
        title: "Book Anytime, Anywhere",
        description: "Members book courts from their phone at midnight, from work, or from the court itself. Real-time availability—no more calling to check.",
      },
      {
        feature: "No Double-Bookings",
        title: "Real-Time Availability",
        description: "The moment someone books, availability updates everywhere. No more double-bookings, no more awkward court conflicts.",
      },
      {
        feature: "Mobile-First Design",
        title: "3-Tap Booking",
        description: "Pick a date, pick a time, confirm. Members book in under 10 seconds. No apps to download—works in any browser.",
      },
      {
        feature: "Staff Override",
        title: "Admin Booking Tools",
        description: "Staff can still book on behalf of members who prefer to call. Best of both worlds—self-service for most, personal touch when needed.",
      },
    ],
    results: [
      { metric: "80% reduction in phone booking", description: "Most bookings shift online within 2 weeks" },
      { metric: "5-10 hours saved weekly", description: "Staff time freed for better uses" },
      { metric: "Zero double-bookings", description: "Real-time availability prevents conflicts" },
      { metric: "25%+ increase in bookings", description: "When members can book 24/7" },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Set Up Your Courts",
        description: "Add your courts, set operating hours, define booking rules (max duration, advance booking window, etc.).",
      },
      {
        step: 2,
        title: "Invite Members",
        description: "Import your member list via CSV or invite them by email. They create accounts in 30 seconds.",
      },
      {
        step: 3,
        title: "Members Book Online",
        description: "Members visit your booking page, see real-time availability, and book their court in 3 taps.",
      },
      {
        step: 4,
        title: "Everyone Gets Confirmed",
        description: "Instant confirmation emails. Automatic reminders before the booking. No manual follow-up needed.",
      },
    ],
    caseStudy: {
      clubName: "Metro Tennis Center",
      before: "Front desk fielding 40+ booking calls daily, constant double-booking conflicts",
      after: "85% of bookings now online, phone calls down to 5-10/day",
      result: "Receptionist now focuses on member experience instead of booking logistics",
    },
    faqs: [
      {
        question: "Will my members actually use online booking?",
        answer: "Yes. 94% of members prefer online booking once it's available. Most clubs see 80%+ of bookings shift online within 2 weeks. Members love booking at midnight without calling anyone.",
      },
      {
        question: "What about members who still want to call?",
        answer: "Staff can book on behalf of any member in 30 seconds. PlayCourt doesn't eliminate phone booking—it makes it optional. You'll just get far fewer calls.",
      },
      {
        question: "How do I prevent people from booking too far in advance?",
        answer: "Set your advance booking window (e.g., 7 days) and the system enforces it. Different member types can have different windows (e.g., pros book 14 days out, regular members 7 days).",
      },
      {
        question: "Can I set different rules for different courts or times?",
        answer: "Yes. Create court groups with different rules—indoor vs outdoor, peak vs off-peak, member-only vs public. Each can have its own booking limits and policies.",
      },
    ],
    metaDescription: "Tennis court online booking system with 24/7 member self-service. Real-time availability, mobile booking, zero double-bookings. Live in 10 minutes.",
  },

  "member-management": {
    slug: "member-management",
    title: "Member Management",
    headline: "Tennis Club Member Management Software",
    description: "Keep your member database organized, control who books what, and understand your membership with powerful yet simple member management tools.",
    problemStatement: "Spreadsheets, sticky notes, and outdated club software make member management a nightmare. Who's active? Who's expired? Who can book the premium courts? Without a system, these questions eat hours every week.",
    problemStats: [
      { stat: "3-5 hours weekly spent on member administration at average club", source: "Club Management Survey" },
      { stat: "12% of members have incorrect contact info in manual systems", source: "Industry Analysis" },
      { stat: "40% of clubs can't easily report on member activity", source: "Tennis Facility Survey, 2024" },
    ],
    solutions: [
      {
        feature: "Member Database",
        title: "Centralized Member Records",
        description: "One place for all member information—contact details, membership type, booking history, notes. Import existing members via CSV in minutes.",
      },
      {
        feature: "Membership Tiers",
        title: "Flexible Membership Types",
        description: "Create unlimited membership types (Full, Social, Junior, Guest) with different booking privileges, advance windows, and court access.",
      },
      {
        feature: "Self-Service Profiles",
        title: "Member Self-Management",
        description: "Members update their own contact info, preferences, and notification settings. No more chasing people for updated phone numbers.",
      },
      {
        feature: "Activity Reporting",
        title: "Usage & Engagement Reports",
        description: "See who's active, who's not, and which members are your power users. Identify at-risk members before they lapse.",
      },
    ],
    results: [
      { metric: "3-5 hours saved weekly", description: "On member administration" },
      { metric: "100% accurate contact info", description: "Members self-update" },
      { metric: "Instant reporting", description: "On member activity and engagement" },
      { metric: "Zero access confusion", description: "Clear membership tier rules" },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Import Your Members",
        description: "Export your current member list to CSV and import into PlayCourt. Name, email, phone, membership type—all mapped automatically.",
      },
      {
        step: 2,
        title: "Set Up Membership Types",
        description: "Create your membership tiers with booking rules. Full members book 14 days out, social members 7 days, guests pay per booking, etc.",
      },
      {
        step: 3,
        title: "Invite Members to Self-Serve",
        description: "Send invitations by email. Members claim their account, verify contact info, and start booking immediately.",
      },
      {
        step: 4,
        title: "Monitor and Report",
        description: "Run reports on member activity, identify engagement trends, and export data anytime you need it.",
      },
    ],
    caseStudy: {
      clubName: "Oakwood Tennis Club",
      before: "Member data scattered across 3 spreadsheets, no one sure who could book what",
      after: "Single source of truth with clear membership tiers and automated access control",
      result: "Eliminated 4 hours/week of member admin and zero booking privilege disputes",
    },
    faqs: [
      {
        question: "How do I import my existing members?",
        answer: "Export your member list to CSV (Excel, Sheets, or your current system). Upload to PlayCourt and map the columns. Most clubs complete import in under 10 minutes.",
      },
      {
        question: "Can different membership types have different booking rules?",
        answer: "Yes. Each membership type can have its own advance booking window, max bookings per week, court access restrictions, and guest privileges. Completely flexible.",
      },
      {
        question: "How do members update their own info?",
        answer: "Members log in to their account and edit their profile—phone, email, notification preferences. Changes take effect immediately. No staff involvement needed.",
      },
      {
        question: "Can I track guest usage?",
        answer: "Yes. Guests are linked to sponsoring members. Run reports on guest visits by member, track guest fees, and enforce guest policies automatically.",
      },
    ],
    metaDescription: "Tennis club member management software with centralized records, flexible membership tiers, and self-service profiles. Save 3-5 hours weekly on admin.",
  },

  "court-scheduling": {
    slug: "court-scheduling",
    title: "Court Scheduling",
    headline: "Tennis Court Scheduling Software",
    description: "Manage complex court schedules with ease—lessons, leagues, open play, maintenance, and special events all in one unified calendar.",
    problemStatement: "Tennis facilities juggle multiple uses for the same courts: lessons, clinics, leagues, open play, and maintenance. Without smart scheduling software, conflicts are inevitable and staff spend hours playing calendar Tetris.",
    problemStats: [
      { stat: "4-6 hours weekly spent on schedule management at busy facilities", source: "Tennis Facility Survey" },
      { stat: "23% of facilities report weekly scheduling conflicts", source: "Industry Report, 2024" },
      { stat: "35% of prime time sits empty due to poor schedule visibility", source: "Court Utilization Study" },
    ],
    solutions: [
      {
        feature: "Unified Calendar",
        title: "Everything in One View",
        description: "See all bookings, blocks, lessons, and events in one calendar. Filter by court, type, or instructor. Never miss a conflict.",
      },
      {
        feature: "Block Scheduling",
        title: "Recurring Blocks & Events",
        description: "Block courts for weekly lessons, league nights, or clinics. Set it once, recurs automatically. Modify the series or individual instances.",
      },
      {
        feature: "Maintenance Windows",
        title: "Court Maintenance Blocking",
        description: "Schedule maintenance windows that prevent bookings. Members see 'Court Maintenance' instead of available slots. No accidental bookings during resurfacing.",
      },
      {
        feature: "Multi-Court Events",
        title: "Tournament & Event Mode",
        description: "Block multiple courts for tournaments, socials, or private events. Release courts back to general booking when the event ends.",
      },
    ],
    results: [
      { metric: "Zero scheduling conflicts", description: "Automated conflict detection" },
      { metric: "4-6 hours saved weekly", description: "On schedule management" },
      { metric: "20%+ utilization increase", description: "With better schedule visibility" },
      { metric: "100% maintenance compliance", description: "Courts blocked automatically" },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Set Your Base Schedule",
        description: "Define operating hours, court groups, and default availability. This becomes your baseline schedule.",
      },
      {
        step: 2,
        title: "Add Recurring Blocks",
        description: "Block time for lessons, leagues, clinics—anything that repeats. Weekly, bi-weekly, or custom patterns.",
      },
      {
        step: 3,
        title: "Open Remaining Time",
        description: "Whatever isn't blocked becomes available for member booking. The calendar handles the complexity.",
      },
      {
        step: 4,
        title: "Adjust as Needed",
        description: "Move lessons, add events, block for maintenance. Changes propagate instantly to member availability.",
      },
    ],
    caseStudy: {
      clubName: "City Tennis Center",
      before: "Schedule managed in Google Calendar + whiteboard, constant conflicts between lessons and member booking",
      after: "Unified system where pros block their lessons and members see only available time",
      result: "Eliminated 5 hours/week of schedule coordination and zero booking conflicts",
    },
    faqs: [
      {
        question: "How do I handle recurring lessons?",
        answer: "Create a recurring block for any court/time combination. Weekly, bi-weekly, or custom patterns. Modify the series or single instances without affecting the rest.",
      },
      {
        question: "Can different people manage different parts of the schedule?",
        answer: "Yes. Give pros access to manage their own lesson blocks. Give staff access to overall schedule management. Everyone sees the unified calendar, but edits are permissioned.",
      },
      {
        question: "What happens if I need to cancel a recurring block?",
        answer: "Cancel a single instance or the entire series. Affected members get notified automatically. Previously blocked time becomes available for booking instantly.",
      },
      {
        question: "How do I block courts for a tournament?",
        answer: "Select multiple courts and a date range, mark as 'Event Block', and add event details. Members see 'Tournament' instead of available slots. Release courts with one click when the event ends.",
      },
    ],
    metaDescription: "Tennis court scheduling software for lessons, leagues, and open play. Unified calendar, recurring blocks, zero conflicts. Save 4-6 hours weekly.",
  },

  "club-website": {
    slug: "club-website",
    title: "Club Website",
    headline: "Tennis Club Website with Built-In Booking",
    description: "Your club's online presence with integrated court booking. No separate website needed—PlayCourt gives you a professional, mobile-friendly page that converts visitors to members.",
    problemStatement: "Many tennis clubs either have no website, an outdated one, or a website disconnected from their booking system. Members and prospects expect a modern online experience that lets them learn about the club AND book a court in one place.",
    problemStats: [
      { stat: "70% of people research clubs online before visiting", source: "Consumer Behavior Survey" },
      { stat: "45% of club websites don't have integrated booking", source: "Tennis Facility Audit, 2024" },
      { stat: "3x higher conversion when booking is one click away", source: "Industry Analysis" },
    ],
    solutions: [
      {
        feature: "Club Landing Page",
        title: "Professional Club Page",
        description: "Your own branded page with club info, amenities, photos, and contact details. Looks great on any device, no design skills needed.",
      },
      {
        feature: "Integrated Booking",
        title: "Book Without Leaving",
        description: "Visitors see your court availability and book directly from your club page. No redirects, no friction, no lost conversions.",
      },
      {
        feature: "Custom Domain",
        title: "Your Own URL",
        description: "Use your own domain (tennis.yourclub.com) or a PlayCourt subdomain (yourclub.playcourt.io). Either way, it's your brand.",
      },
      {
        feature: "SEO Optimized",
        title: "Get Found Online",
        description: "Your club page is optimized for local search. 'Tennis courts near me' and 'Tennis club [your city]' queries can find you.",
      },
    ],
    results: [
      { metric: "Professional web presence", description: "In under 30 minutes" },
      { metric: "3x booking conversion", description: "With integrated booking" },
      { metric: "Mobile-first design", description: "Works on any device" },
      { metric: "$0 additional cost", description: "Included with PlayCourt" },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Add Your Club Info",
        description: "Enter club name, description, amenities, contact info, and upload photos. Takes about 15 minutes.",
      },
      {
        step: 2,
        title: "Customize Your Look",
        description: "Choose colors, add your logo, arrange sections. Pro plan gets full custom branding.",
      },
      {
        step: 3,
        title: "Set Up Your Domain",
        description: "Use our subdomain free, or connect your own custom domain (Pro plan).",
      },
      {
        step: 4,
        title: "Share Your Link",
        description: "Share your club page on social media, Google Business Profile, and anywhere prospects might find you.",
      },
    ],
    caseStudy: {
      clubName: "Pinecrest Tennis Club",
      before: "No website, relying on Facebook page and word of mouth",
      after: "Professional club page with integrated booking, found in local search",
      result: "12 new member sign-ups in first month from online discovery",
    },
    faqs: [
      {
        question: "Do I need technical skills to set this up?",
        answer: "Not at all. Fill in your club information, upload some photos, and you're done. If you can use Facebook, you can create your club page.",
      },
      {
        question: "Can I use my own domain name?",
        answer: "Yes, with Pro plan. Point your domain (or subdomain like tennis.yourclub.com) to PlayCourt and we handle the rest.",
      },
      {
        question: "What if I already have a website?",
        answer: "You can embed PlayCourt booking into your existing site, or link to your PlayCourt page for bookings. Both work great.",
      },
      {
        question: "Is the club page included in pricing?",
        answer: "Yes. Your club page is included with all PlayCourt plans at no extra cost. Pro plan adds custom domain and full branding customization.",
      },
    ],
    metaDescription: "Tennis club website with integrated court booking. Professional, mobile-friendly, SEO optimized. Get your club online in 30 minutes.",
  },
};

export function getUseCase(slug: string): UseCase | undefined {
  return useCases[slug];
}

export function getAllUseCaseSlugs(): string[] {
  return Object.keys(useCases);
}
