export interface ReviewTool {
  slug: string;
  name: string;
  tagline: string;
  website: string;
  affiliateUrl: string;
  founded: number;
  overallRating: number;
  pricing: { name: string; price: string; features: string[] }[];
  freeTrial: string;
  bestFor: string;
  verdict: string;
  pros: string[];
  cons: string[];
  keyFeatures: string[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
}

const tools: ReviewTool[] = [
  {
    slug: "courtreserve",
    name: "CourtReserve",
    tagline: "All-in-one court management platform with online booking, mobile app, and member management for tennis and racquet clubs.",
    website: "https://www.courtreserve.com",
    affiliateUrl: "https://www.courtreserve.com",
    founded: 2016,
    overallRating: 4.5,
    pricing: [
      {
        name: "Starter",
        price: "$300/mo",
        features: [
          "Up to 4 courts",
          "Online court booking",
          "Member directory",
          "Email notifications",
          "Basic reporting dashboard",
        ],
      },
      {
        name: "Professional",
        price: "$500/mo",
        features: [
          "Up to 12 courts",
          "Mobile app (iOS & Android)",
          "League & ladder management",
          "Integrated payment processing",
          "Custom branding options",
          "Automated waitlists",
        ],
      },
      {
        name: "Enterprise",
        price: "$800/mo",
        features: [
          "Unlimited courts",
          "Multi-location support",
          "Advanced analytics & reporting",
          "API access for integrations",
          "Priority support with dedicated rep",
          "Custom development options",
        ],
      },
    ],
    freeTrial: "14-day free trial available",
    bestFor:
      "Tennis and racquet sport clubs of all sizes that want a modern, purpose-built court management platform with a polished mobile experience and strong league management tools.",
    verdict:
      "CourtReserve is the market leader in court management software for good reason. Built from the ground up for racquet sports, it delivers an intuitive booking experience that members actually enjoy using. The mobile app is best-in-class, and the league management features are robust enough for competitive clubs. Pricing starts higher than some alternatives, but the feature depth and polish justify the investment. If you run a tennis or pickleball club and want a platform that feels modern and gets out of your way, CourtReserve is the top pick.",
    pros: [
      "Purpose-built for racquet sports with deep court-specific features",
      "Excellent mobile app experience for both members and admins",
      "Comprehensive league and ladder management built in",
      "Clean, intuitive interface that requires minimal training",
      "Strong integration with payment processors and accounting tools",
      "Active development team that ships frequent updates and improvements",
    ],
    cons: [
      "Higher starting price compared to general-purpose scheduling tools",
      "Limited customization for non-racquet sport use cases",
      "Advanced reporting only available on higher-tier plans",
      "No built-in POS system for pro shop or food service",
    ],
    keyFeatures: [
      "Drag-and-drop court scheduling with real-time availability",
      "Native mobile apps for iOS and Android",
      "League, ladder, and round-robin tournament management",
      "Online payment processing with automatic billing",
      "Customizable member portal with self-service booking",
      "Automated waitlist management and notifications",
      "Guest pass and drop-in booking support",
      "Detailed analytics on court utilization and revenue",
    ],
    faqs: [
      {
        question: "Is CourtReserve good for pickleball clubs?",
        answer:
          "Yes, CourtReserve works extremely well for pickleball clubs. The platform supports any court-based sport and includes features like open play scheduling, round-robin management, and skill-level matching that are particularly useful for pickleball programs. Many clubs use it to manage both tennis and pickleball on shared courts.",
      },
      {
        question: "Does CourtReserve offer a mobile app?",
        answer:
          "CourtReserve offers native mobile apps for both iOS and Android. Members can book courts, view schedules, join leagues, and make payments directly from their phone. The app is consistently rated as one of the best in the court management space, with a clean interface and fast performance.",
      },
      {
        question: "How does CourtReserve handle league management?",
        answer:
          "CourtReserve includes a full-featured league management system. You can set up leagues, ladders, and round-robin tournaments with automated scheduling, score entry, and standings tracking. Players receive notifications for upcoming matches, and results are updated in real time. It handles both singles and doubles formats.",
      },
      {
        question: "Can CourtReserve integrate with my existing website?",
        answer:
          "CourtReserve provides embeddable booking widgets that you can add to your existing website. Members can view court availability and make reservations without leaving your site. The platform also offers API access on the Enterprise plan for deeper custom integrations with your tech stack.",
      },
    ],
    metaTitle: "CourtReserve Review 2026: Pricing, Features & Verdict",
    metaDescription:
      "In-depth CourtReserve review covering pricing from $300/mo, court booking features, mobile app, league management, and whether it's worth it for your club.",
  },
  {
    slug: "ezfacility",
    name: "EZFacility",
    tagline: "Affordable court scheduling and member management platform built for sports facilities and recreation centers.",
    website: "https://www.ezfacility.com",
    affiliateUrl: "https://www.ezfacility.com",
    founded: 2003,
    overallRating: 4.2,
    pricing: [
      {
        name: "Basic",
        price: "$150/mo",
        features: [
          "Court and facility scheduling",
          "Online booking portal",
          "Basic member management",
          "Email communication tools",
          "Standard reporting",
        ],
      },
      {
        name: "Pro",
        price: "$250/mo",
        features: [
          "Advanced scheduling with recurring bookings",
          "Integrated billing and invoicing",
          "Mobile-responsive member portal",
          "Custom waivers and forms",
          "Inventory tracking for pro shop",
          "Automated payment reminders",
        ],
      },
      {
        name: "Premium",
        price: "$400/mo",
        features: [
          "Multi-facility management",
          "Advanced reporting and analytics",
          "API access for custom integrations",
          "Priority phone and email support",
          "Custom branded mobile experience",
          "Dedicated account manager",
        ],
      },
    ],
    freeTrial: "Free demo available on request",
    bestFor:
      "Mid-size sports facilities and recreation centers that need solid court scheduling and member management at a competitive price point without enterprise-level complexity.",
    verdict:
      "EZFacility hits the sweet spot for mid-market sports facilities that need reliable scheduling and billing without the enterprise price tag. It has been around since 2003, so the platform is mature and stable. The scheduling engine handles court bookings, leagues, and recurring reservations well. Member management and billing are solid if not flashy. The interface feels a bit dated compared to newer competitors, but the functionality is there and the price-to-value ratio is excellent. A strong choice for facilities that prioritize reliability and affordability.",
    pros: [
      "Very competitive pricing starting at $150/mo",
      "Mature platform with over 20 years of development",
      "Solid billing and invoicing with automated payment collection",
      "Good multi-sport support for facilities with diverse programming",
      "Built-in inventory tracking for pro shops and retail",
      "Responsive customer support with dedicated account managers on higher tiers",
    ],
    cons: [
      "User interface feels dated compared to newer platforms",
      "No native mobile app — relies on mobile-responsive web portal",
      "League management features are less advanced than CourtReserve",
      "Initial setup and data migration can be time-consuming",
    ],
    keyFeatures: [
      "Flexible court and facility scheduling engine",
      "Online booking portal for members and guests",
      "Integrated billing with automated payment processing",
      "Member management with custom membership types",
      "Inventory and point-of-sale tracking",
      "Custom waiver and form management",
      "Multi-facility support on Premium plan",
      "Reporting dashboard with utilization metrics",
    ],
    faqs: [
      {
        question: "Is EZFacility good for small tennis clubs?",
        answer:
          "EZFacility can work well for small tennis clubs, especially those watching their budget. The Basic plan at $150/mo covers court scheduling and member management essentials. However, if you need advanced league management or a native mobile app, you may want to consider alternatives like CourtReserve that are more tennis-specific.",
      },
      {
        question: "Does EZFacility have a mobile app?",
        answer:
          "EZFacility does not offer a native mobile app. Instead, it provides a mobile-responsive web portal that members can access from their phone browser. While this works for basic booking and account management, the experience is not as polished as competitors that offer dedicated iOS and Android apps.",
      },
      {
        question: "How does EZFacility handle billing and payments?",
        answer:
          "EZFacility includes integrated billing and invoicing on the Pro plan and above. It supports automated recurring payments, one-time charges, and payment reminders. The platform integrates with major payment processors and can handle membership dues, lesson fees, and retail transactions through its built-in POS functionality.",
      },
      {
        question: "Can EZFacility manage multiple locations?",
        answer:
          "Yes, EZFacility supports multi-facility management on its Premium plan. You can manage scheduling, members, and billing across multiple locations from a single dashboard. Each location can have its own settings and configurations while sharing a unified member database and reporting system.",
      },
    ],
    metaTitle: "EZFacility Review 2026: Pricing, Features & Verdict",
    metaDescription:
      "Detailed EZFacility review covering pricing from $150/mo, court scheduling, member management, billing features, and who this mid-market platform is best for.",
  },
  {
    slug: "club-automation",
    name: "Club Automation",
    tagline: "Enterprise-grade club management platform by Daxko with multi-sport support, POS integration, and full-service operations tools.",
    website: "https://www.clubautomation.com",
    affiliateUrl: "https://www.clubautomation.com",
    founded: 2003,
    overallRating: 4.0,
    pricing: [
      {
        name: "Core",
        price: "$500/mo",
        features: [
          "Court and facility scheduling",
          "Member management with family accounts",
          "Basic reporting and analytics",
          "Online booking for members",
          "Email and SMS communications",
        ],
      },
      {
        name: "Professional",
        price: "$900/mo",
        features: [
          "Point-of-sale system integration",
          "Advanced billing with dunning management",
          "Multi-sport program management",
          "Custom branded member portal",
          "Personal training and lesson scheduling",
          "Automated access control integration",
        ],
      },
      {
        name: "Enterprise",
        price: "$1,500/mo",
        features: [
          "Multi-location management",
          "Advanced analytics with custom dashboards",
          "Full API access and third-party integrations",
          "Dedicated implementation specialist",
          "Custom workflow automation",
          "Priority 24/7 support",
        ],
      },
    ],
    freeTrial: "Custom demo available — contact sales",
    bestFor:
      "Large multi-sport clubs, country clubs, and athletic facilities that need an enterprise-grade platform capable of managing courts, fitness, aquatics, dining, and retail under one roof.",
    verdict:
      "Club Automation is the heavyweight choice for large, full-service clubs that need to manage far more than just courts. Owned by Daxko, it brings enterprise-level depth to member management, billing, POS, and access control. The multi-sport support is excellent — you can manage tennis courts, fitness classes, swimming pools, and dining all in one system. The trade-off is complexity and cost. Setup takes weeks, the learning curve is steep, and the starting price of $500/mo reflects its enterprise positioning. For large clubs with diverse operations, it is hard to beat. For a small tennis-only facility, it is overkill.",
    pros: [
      "Comprehensive all-in-one platform for full-service clubs",
      "Strong POS integration for pro shops, dining, and retail",
      "Excellent multi-sport and multi-department support",
      "Backed by Daxko with long-term enterprise stability",
      "Advanced billing with dunning and automated collections",
      "Robust access control integration for facility entry management",
    ],
    cons: [
      "High starting price at $500/mo puts it out of reach for small clubs",
      "Steep learning curve requiring extensive staff training",
      "Implementation process can take 4-8 weeks",
      "Interface is functional but not as modern as newer competitors",
    ],
    keyFeatures: [
      "Full-service club management across multiple departments",
      "Integrated point-of-sale for pro shop and food service",
      "Multi-sport scheduling for courts, pools, fitness, and more",
      "Advanced member billing with automated dunning",
      "Access control and check-in system integration",
      "Personal training and lesson booking management",
      "Custom branded member portal and communications",
      "Enterprise reporting with custom dashboard builder",
    ],
    faqs: [
      {
        question: "Is Club Automation only for large clubs?",
        answer:
          "Club Automation is designed primarily for mid-to-large clubs with diverse operations. While smaller clubs can technically use it, the pricing and complexity make it a poor fit for facilities with fewer than 500 members or those that only manage courts. Smaller clubs would be better served by platforms like CourtReserve or EZFacility.",
      },
      {
        question: "What is the relationship between Club Automation and Daxko?",
        answer:
          "Club Automation was acquired by Daxko, a major provider of technology solutions for health and wellness organizations. This acquisition means Club Automation benefits from Daxko's enterprise infrastructure, development resources, and long-term financial stability. It also means access to Daxko's broader ecosystem of integrations and services.",
      },
      {
        question: "Does Club Automation support POS for pro shops?",
        answer:
          "Yes, Club Automation includes a fully integrated point-of-sale system. You can manage pro shop inventory, process retail transactions, and handle food and beverage sales all within the platform. POS transactions are linked to member accounts, making it easy to charge purchases to member tabs or track spending patterns.",
      },
      {
        question: "How long does it take to set up Club Automation?",
        answer:
          "Implementation typically takes 4 to 8 weeks depending on the size and complexity of your club. The process includes data migration, system configuration, staff training, and a phased rollout. Club Automation provides a dedicated implementation specialist to guide you through the setup process on the Professional and Enterprise plans.",
      },
    ],
    metaTitle: "Club Automation Review 2026: Pricing, Features & Verdict",
    metaDescription:
      "Complete Club Automation review covering pricing from $500/mo, enterprise club management features, POS integration, and whether this Daxko platform fits your club.",
  },
  {
    slug: "mindbody",
    name: "Mindbody",
    tagline: "General-purpose fitness and wellness business platform with scheduling, payments, and marketing — not built for courts but widely used.",
    website: "https://www.mindbodyonline.com",
    affiliateUrl: "https://www.mindbodyonline.com",
    founded: 2001,
    overallRating: 3.7,
    pricing: [
      {
        name: "Starter",
        price: "$179/mo",
        features: [
          "Appointment and class scheduling",
          "Client management and profiles",
          "Basic payment processing",
          "Branded mobile app listing",
          "Standard email marketing tools",
        ],
      },
      {
        name: "Accelerate",
        price: "$329/mo",
        features: [
          "Advanced scheduling and resource booking",
          "Automated marketing campaigns",
          "Client retention and engagement tools",
          "Customizable branded app experience",
          "Advanced reporting and insights",
          "Waitlist and late-cancel management",
        ],
      },
      {
        name: "Ultimate",
        price: "$549/mo",
        features: [
          "Full marketing suite with lead management",
          "Staff performance tracking and payroll tools",
          "Multi-location management",
          "Dedicated account manager",
          "Advanced integrations and API access",
          "Priority customer support",
        ],
      },
    ],
    freeTrial: "Free demo available — no free trial",
    bestFor:
      "Fitness studios and wellness businesses that also happen to have courts. Best if your primary business is classes and personal training, with court booking as a secondary need.",
    verdict:
      "Mindbody is one of the most recognized names in fitness business software, but it was not built for court management. It handles class scheduling, client management, and marketing well, which is why some racquet clubs end up on it. The problem is that court-specific features are either missing or require awkward workarounds. There is no native court booking grid, no league management, and no real understanding of court availability patterns. At $179/mo and up, you are paying a premium for marketing and class features you may not need. If your business is primarily courts and memberships, a purpose-built tool like CourtReserve or EZFacility will serve you better.",
    pros: [
      "Powerful marketing and client acquisition tools built in",
      "Large consumer marketplace that drives new client discovery",
      "Strong class and appointment scheduling for fitness programs",
      "Mature platform with extensive third-party integrations",
      "Well-known brand that clients recognize and trust",
    ],
    cons: [
      "No native court booking grid or court-specific scheduling features",
      "Missing league, ladder, and tournament management entirely",
      "Overkill and overpriced for facilities focused primarily on court sports",
      "Complex pricing structure with add-on fees for premium features",
    ],
    keyFeatures: [
      "Class and appointment scheduling with online booking",
      "Client management with detailed profiles and history",
      "Built-in marketing tools with automated email campaigns",
      "Consumer marketplace for new client acquisition",
      "Payment processing with membership and package billing",
      "Staff scheduling and payroll management",
      "Branded mobile app presence on the Mindbody app",
      "Reporting and analytics dashboard",
    ],
    faqs: [
      {
        question: "Can Mindbody handle court booking for tennis clubs?",
        answer:
          "Mindbody can technically manage court booking, but it requires workarounds since it was not designed for court-based scheduling. You would need to set up courts as individual resources and build a booking flow that mimics a court grid. It works, but it is not as intuitive or efficient as purpose-built court management platforms.",
      },
      {
        question: "Is Mindbody worth it for a racquet sports club?",
        answer:
          "For most racquet sports clubs, Mindbody is not the best fit. It excels at fitness studio management with strong marketing and class scheduling, but lacks court-specific features like court grids, league management, and automated court rotation. You would end up paying more for features you do not use while missing features you actually need.",
      },
      {
        question: "How does the Mindbody marketplace work?",
        answer:
          "The Mindbody marketplace is a consumer-facing app and website where people search for fitness and wellness businesses near them. If your facility is listed on Mindbody, potential clients can discover you, read reviews, and book sessions directly. This can be valuable for new client acquisition, but the marketplace is more geared toward fitness classes than court bookings.",
      },
      {
        question: "What are the hidden costs with Mindbody?",
        answer:
          "Beyond the monthly subscription, Mindbody charges additional fees for premium features like advanced marketing automations, branded app upgrades, and payment processing. Credit card processing fees are separate, and some integrations require paid add-ons. The total cost of ownership can be significantly higher than the base monthly price suggests.",
      },
    ],
    metaTitle: "Mindbody Review 2026: Pricing, Features & Honest Verdict",
    metaDescription:
      "Honest Mindbody review for court and club owners. Pricing from $179/mo, feature breakdown, and why this fitness platform may not be the right fit for racquet sports.",
  },
];

export function getAllTools(): ReviewTool[] {
  return [...tools].sort((a, b) => b.overallRating - a.overallRating);
}

export function getTool(slug: string): ReviewTool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function getAllToolSlugs(): string[] {
  return tools.map((tool) => tool.slug);
}
