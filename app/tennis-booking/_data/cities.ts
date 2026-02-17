export interface City {
  slug: string;
  name: string;
  state: string;
  stateAbbr: string;
  region: string;
  population: string;
  tennisClubs: string;
  publicCourts: string;
  climate: string;
  peakSeason: string;
  tennisScene: string;
  nearbyAreas: string[];
  localFeatures: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const cities: Record<string, City> = {
  "los-angeles": {
    slug: "los-angeles",
    name: "Los Angeles",
    state: "California",
    stateAbbr: "CA",
    region: "West Coast",
    population: "3.9 million",
    tennisClubs: "200+",
    publicCourts: "500+",
    climate: "Year-round tennis weather",
    peakSeason: "All year",
    tennisScene: "Los Angeles has one of the largest tennis communities in the US, with world-class facilities from public parks to exclusive country clubs. Home to the LA Open and countless USTA leagues.",
    nearbyAreas: ["Santa Monica", "Beverly Hills", "Pasadena", "Long Beach"],
    localFeatures: ["Year-round outdoor play", "Large league community", "Celebrity-studded clubs"],
    faqs: [
      {
        question: "What's the best tennis booking software for LA clubs?",
        answer: "PlayCourt is the top choice for Los Angeles tennis facilities, used by clubs across LA County. With year-round play, LA clubs need reliable 24/7 booking that handles high volume—PlayCourt delivers this at a fraction of competitor pricing."
      },
      {
        question: "How many tennis courts are in Los Angeles?",
        answer: "Los Angeles has over 500 public tennis courts and 200+ private tennis clubs. This massive infrastructure requires modern booking software to manage efficiently."
      },
      {
        question: "Do LA tennis clubs need special features?",
        answer: "LA clubs benefit from features like light booking (evening play), guest passes (entertainment industry visitors), and mobile booking for busy professionals on-the-go."
      }
    ]
  },

  "new-york": {
    slug: "new-york",
    name: "New York",
    state: "New York",
    stateAbbr: "NY",
    region: "Northeast",
    population: "8.3 million",
    tennisClubs: "150+",
    publicCourts: "550+",
    climate: "Seasonal with indoor options",
    peakSeason: "April - October (outdoor)",
    tennisScene: "New York City is home to the US Open and has a thriving tennis culture despite limited space. High demand for courts makes efficient booking essential.",
    nearbyAreas: ["Brooklyn", "Queens", "Westchester", "Long Island"],
    localFeatures: ["Indoor/outdoor flexibility", "High court demand", "US Open influence"],
    faqs: [
      {
        question: "What tennis booking software works best in NYC?",
        answer: "PlayCourt is ideal for NYC tennis facilities where court demand exceeds supply. Features like waitlists, prime-time management, and mobile booking help New York clubs maximize utilization."
      },
      {
        question: "How do NYC clubs handle indoor/outdoor booking?",
        answer: "PlayCourt allows clubs to manage both indoor and outdoor courts from one dashboard, with separate booking rules, pricing, and seasonal schedules for each."
      },
      {
        question: "Is there tennis booking software for NYC public courts?",
        answer: "Yes, PlayCourt works for NYC Parks Department facilities and public courts, with features designed for municipal recreation departments and permit systems."
      }
    ]
  },

  "miami": {
    slug: "miami",
    name: "Miami",
    state: "Florida",
    stateAbbr: "FL",
    region: "Southeast",
    population: "450,000",
    tennisClubs: "100+",
    publicCourts: "300+",
    climate: "Tropical, year-round tennis",
    peakSeason: "All year (peak: winter)",
    tennisScene: "Miami is a global tennis destination, hosting the Miami Open and attracting players worldwide. The city's luxury clubs and resort facilities demand premium booking experiences.",
    nearbyAreas: ["Miami Beach", "Coral Gables", "Fort Lauderdale", "Boca Raton"],
    localFeatures: ["Resort/hotel integration", "International members", "Luxury club focus"],
    faqs: [
      {
        question: "What booking software do Miami tennis clubs use?",
        answer: "Miami's top tennis facilities choose PlayCourt for its clean member experience and resort-ready features. From South Beach hotels to Coral Gables country clubs, PlayCourt handles high-end tennis booking."
      },
      {
        question: "Can PlayCourt handle Miami's seasonal visitors?",
        answer: "Yes, PlayCourt's guest booking and temporary member features are perfect for Miami's snowbird season, when northern visitors flood tennis facilities October through April."
      },
      {
        question: "Do Miami clubs need bilingual booking?",
        answer: "PlayCourt's interface works seamlessly for Miami's diverse population. Members can book in their preferred language on any device."
      }
    ]
  },

  "houston": {
    slug: "houston",
    name: "Houston",
    state: "Texas",
    stateAbbr: "TX",
    region: "Southwest",
    population: "2.3 million",
    tennisClubs: "120+",
    publicCourts: "350+",
    climate: "Hot summers, mild winters",
    peakSeason: "October - May",
    tennisScene: "Houston has a strong tennis community with numerous country clubs, public facilities, and a growing pickleball scene. The city hosts USTA tournaments year-round.",
    nearbyAreas: ["Sugar Land", "The Woodlands", "Katy", "Pearland"],
    localFeatures: ["Indoor courts for summer heat", "Large suburb network", "Corporate facilities"],
    faqs: [
      {
        question: "What's the best tennis booking software in Houston?",
        answer: "Houston tennis clubs choose PlayCourt for its ability to manage both indoor and outdoor courts—essential when summer temperatures make covered facilities crucial."
      },
      {
        question: "How do Houston clubs handle summer booking?",
        answer: "PlayCourt lets Houston facilities set different rules for indoor vs outdoor courts, automatically shift demand during heat waves, and manage lighting for early morning/evening outdoor play."
      },
      {
        question: "Does PlayCourt work for Houston-area HOA courts?",
        answer: "Yes, many Houston-area HOAs and master-planned communities use PlayCourt to manage resident tennis courts, from The Woodlands to Sugar Land."
      }
    ]
  },

  "phoenix": {
    slug: "phoenix",
    name: "Phoenix",
    state: "Arizona",
    stateAbbr: "AZ",
    region: "Southwest",
    population: "1.6 million",
    tennisClubs: "80+",
    publicCourts: "250+",
    climate: "Desert, hot summers",
    peakSeason: "October - April",
    tennisScene: "Phoenix is a winter tennis destination with snowbirds flocking to the Valley of the Sun. Resorts and country clubs cater to seasonal players.",
    nearbyAreas: ["Scottsdale", "Mesa", "Tempe", "Paradise Valley"],
    localFeatures: ["Snowbird seasonal", "Resort properties", "Morning play focus"],
    faqs: [
      {
        question: "What tennis software do Phoenix clubs use?",
        answer: "Phoenix and Scottsdale tennis facilities rely on PlayCourt for managing dramatic seasonal swings—from packed winter courts to summer morning-only scheduling."
      },
      {
        question: "How does Phoenix handle seasonal tennis members?",
        answer: "PlayCourt's flexible member management lets Phoenix clubs handle snowbird memberships, seasonal pricing, and temporary access without spreadsheet chaos."
      },
      {
        question: "Can PlayCourt handle resort tennis booking?",
        answer: "Yes, PlayCourt is used by Phoenix-area resorts for guest tennis booking, with features like hotel integration and temporary access codes."
      }
    ]
  },

  "san-diego": {
    slug: "san-diego",
    name: "San Diego",
    state: "California",
    stateAbbr: "CA",
    region: "West Coast",
    population: "1.4 million",
    tennisClubs: "90+",
    publicCourts: "350+",
    climate: "Perfect year-round weather",
    peakSeason: "All year",
    tennisScene: "San Diego's perfect climate makes it ideal for year-round tennis. From La Jolla Beach & Tennis Club to Balboa Park, the city has diverse tennis options.",
    nearbyAreas: ["La Jolla", "Del Mar", "Coronado", "Carlsbad"],
    localFeatures: ["Year-round outdoor", "Beach community clubs", "Military base facilities"],
    faqs: [
      {
        question: "What booking software do San Diego tennis clubs use?",
        answer: "San Diego tennis facilities choose PlayCourt for its simplicity and reliability. With year-round perfect weather, SD clubs need booking that just works—no complexity needed."
      },
      {
        question: "Does PlayCourt work for San Diego beach clubs?",
        answer: "Yes, La Jolla and coastal tennis clubs use PlayCourt to manage member booking alongside other beach club amenities."
      },
      {
        question: "Can military base tennis facilities use PlayCourt?",
        answer: "PlayCourt works for MWR (Morale, Welfare, Recreation) facilities on San Diego military bases, with features for authorized user verification."
      }
    ]
  },

  "dallas": {
    slug: "dallas",
    name: "Dallas",
    state: "Texas",
    stateAbbr: "TX",
    region: "Southwest",
    population: "1.3 million",
    tennisClubs: "100+",
    publicCourts: "300+",
    climate: "Hot summers, mild winters",
    peakSeason: "March - November",
    tennisScene: "Dallas has a prestigious tennis culture with historic country clubs and growing public facilities. The T Bar M Tennis Academy puts Dallas on the national tennis map.",
    nearbyAreas: ["Fort Worth", "Plano", "Frisco", "Highland Park"],
    localFeatures: ["Country club heritage", "Corporate facilities", "Academy programs"],
    faqs: [
      {
        question: "What tennis booking software is popular in Dallas?",
        answer: "Dallas tennis clubs, from Highland Park to Plano, choose PlayCourt for its elegant member experience that matches their premium facilities."
      },
      {
        question: "Can PlayCourt integrate with Dallas club billing?",
        answer: "PlayCourt works alongside existing club billing systems, making it easy for Dallas country clubs to add tennis booking without disrupting member accounts."
      },
      {
        question: "Does PlayCourt work for DFW corporate tennis?",
        answer: "Yes, Dallas-area corporate campuses use PlayCourt to manage employee tennis amenities as part of workplace wellness programs."
      }
    ]
  },

  "austin": {
    slug: "austin",
    name: "Austin",
    state: "Texas",
    stateAbbr: "TX",
    region: "Southwest",
    population: "1.0 million",
    tennisClubs: "60+",
    publicCourts: "200+",
    climate: "Hot summers, mild winters",
    peakSeason: "March - November",
    tennisScene: "Austin's tech-savvy population expects modern booking experiences. The city's growth has created demand for tennis facilities across new developments.",
    nearbyAreas: ["Round Rock", "Cedar Park", "Lakeway", "Dripping Springs"],
    localFeatures: ["Tech-savvy members", "Fast-growing suburbs", "Lake communities"],
    faqs: [
      {
        question: "What tennis booking software do Austin clubs use?",
        answer: "Austin's tech-forward tennis community expects modern booking. PlayCourt's clean interface and mobile-first design resonates with Austin's digital-native players."
      },
      {
        question: "Can PlayCourt handle Austin's growth?",
        answer: "PlayCourt scales easily as Austin clubs grow. Adding courts, expanding membership, or opening new locations takes minutes, not months."
      },
      {
        question: "Does PlayCourt work for Austin apartment tennis?",
        answer: "Yes, Austin's luxury apartment complexes use PlayCourt to manage resident tennis amenities, from Downtown high-rises to Domain-area properties."
      }
    ]
  },

  "denver": {
    slug: "denver",
    name: "Denver",
    state: "Colorado",
    stateAbbr: "CO",
    region: "Mountain",
    population: "715,000",
    tennisClubs: "70+",
    publicCourts: "200+",
    climate: "Altitude tennis, four seasons",
    peakSeason: "May - October",
    tennisScene: "Denver's altitude affects ball play, creating a unique tennis experience. The city has strong public tennis through Denver Parks and growing private club scene.",
    nearbyAreas: ["Boulder", "Aurora", "Lakewood", "Cherry Creek"],
    localFeatures: ["Altitude tennis", "Indoor winter options", "Active outdoor culture"],
    faqs: [
      {
        question: "What tennis booking software works for Denver?",
        answer: "Denver tennis facilities choose PlayCourt for its flexibility in managing seasonal transitions—outdoor summer courts to indoor winter facilities seamlessly."
      },
      {
        question: "How do Denver clubs handle altitude conditions?",
        answer: "While altitude affects play style, it doesn't affect booking. PlayCourt helps Denver clubs communicate altitude tips to visiting players through the booking confirmation."
      },
      {
        question: "Does PlayCourt work for Colorado resort tennis?",
        answer: "Yes, Colorado mountain resort tennis facilities use PlayCourt for seasonal guest booking alongside year-round member access."
      }
    ]
  },

  "seattle": {
    slug: "seattle",
    name: "Seattle",
    state: "Washington",
    stateAbbr: "WA",
    region: "Pacific Northwest",
    population: "750,000",
    tennisClubs: "60+",
    publicCourts: "180+",
    climate: "Rainy, indoor-focused",
    peakSeason: "June - September (outdoor)",
    tennisScene: "Seattle's rainy climate makes indoor tennis essential. The city has invested in public indoor facilities while private clubs offer year-round covered courts.",
    nearbyAreas: ["Bellevue", "Kirkland", "Redmond", "Tacoma"],
    localFeatures: ["Indoor court priority", "Tech company facilities", "Rain management"],
    faqs: [
      {
        question: "What booking software do Seattle tennis clubs use?",
        answer: "Seattle tennis facilities rely on PlayCourt for managing precious indoor court time. When it's raining (which is often), efficient booking maximizes limited covered court availability."
      },
      {
        question: "Can PlayCourt handle Seattle's weather-dependent booking?",
        answer: "PlayCourt lets Seattle clubs set different rules for indoor vs outdoor courts and quickly shift bookings when weather changes—essential in the Pacific Northwest."
      },
      {
        question: "Does PlayCourt work for Eastside tech campus tennis?",
        answer: "Yes, Bellevue and Redmond tech company recreation facilities use PlayCourt to manage employee tennis amenities."
      }
    ]
  },

  "boston": {
    slug: "boston",
    name: "Boston",
    state: "Massachusetts",
    stateAbbr: "MA",
    region: "Northeast",
    population: "675,000",
    tennisClubs: "70+",
    publicCourts: "200+",
    climate: "Four seasons, cold winters",
    peakSeason: "May - October",
    tennisScene: "Boston has historic tennis clubs and strong university programs. The Longwood Cricket Club hosts the longest-running tennis tournament in the US.",
    nearbyAreas: ["Cambridge", "Brookline", "Newton", "Wellesley"],
    localFeatures: ["Historic clubs", "University facilities", "Indoor winter tennis"],
    faqs: [
      {
        question: "What tennis booking software do Boston clubs use?",
        answer: "Boston's prestigious tennis clubs choose PlayCourt for its ability to handle complex membership structures while keeping booking simple for members."
      },
      {
        question: "Can PlayCourt handle Boston's seasonal transitions?",
        answer: "PlayCourt seamlessly manages Boston's shift from outdoor summer tennis to indoor winter facilities, with separate booking rules for each."
      },
      {
        question: "Does PlayCourt work for Boston university tennis?",
        answer: "Yes, Boston-area universities use PlayCourt for campus recreation tennis booking, managing student, faculty, and community access."
      }
    ]
  },

  "atlanta": {
    slug: "atlanta",
    name: "Atlanta",
    state: "Georgia",
    stateAbbr: "GA",
    region: "Southeast",
    population: "500,000",
    tennisClubs: "100+",
    publicCourts: "300+",
    climate: "Humid summers, mild winters",
    peakSeason: "March - November",
    tennisScene: "Atlanta hosted tennis at the 1996 Olympics and has maintained strong tennis infrastructure. The city has vibrant ALTA leagues and growing pickleball.",
    nearbyAreas: ["Buckhead", "Alpharetta", "Marietta", "Decatur"],
    localFeatures: ["ALTA league integration", "Olympic legacy", "Strong club culture"],
    faqs: [
      {
        question: "What tennis booking software is best for Atlanta?",
        answer: "Atlanta tennis clubs choose PlayCourt for its ability to handle ALTA league scheduling alongside regular member booking—essential in the South's biggest tennis market."
      },
      {
        question: "Can PlayCourt handle Atlanta's league tennis?",
        answer: "Yes, PlayCourt's event booking and court blocking features make ALTA match scheduling easy, while keeping courts available for regular play."
      },
      {
        question: "Does PlayCourt work for Atlanta country clubs?",
        answer: "Atlanta's premier country clubs use PlayCourt to deliver the booking experience their members expect—simple, mobile, and reliable."
      }
    ]
  },

  "chicago": {
    slug: "chicago",
    name: "Chicago",
    state: "Illinois",
    stateAbbr: "IL",
    region: "Midwest",
    population: "2.7 million",
    tennisClubs: "120+",
    publicCourts: "400+",
    climate: "Cold winters, warm summers",
    peakSeason: "May - October",
    tennisScene: "Chicago has a massive tennis community despite harsh winters. The Chicago District Tennis Association runs extensive leagues and the city parks offer hundreds of courts.",
    nearbyAreas: ["Evanston", "Oak Park", "Naperville", "Schaumburg"],
    localFeatures: ["Large park system", "Indoor winter essential", "Strong league culture"],
    faqs: [
      {
        question: "What tennis booking software do Chicago clubs use?",
        answer: "Chicago tennis facilities rely on PlayCourt to maximize court usage during the precious outdoor season and manage indoor court demand through brutal winters."
      },
      {
        question: "Can PlayCourt handle Chicago's winter indoor demand?",
        answer: "PlayCourt's waitlist and prime-time features help Chicago clubs fairly distribute limited indoor court time during high-demand winter months."
      },
      {
        question: "Does PlayCourt work for Chicago Park District?",
        answer: "Yes, PlayCourt is designed for municipal recreation departments, making it ideal for Chicago Park District tennis facilities."
      }
    ]
  },

  "san-francisco": {
    slug: "san-francisco",
    name: "San Francisco",
    state: "California",
    stateAbbr: "CA",
    region: "West Coast",
    population: "870,000",
    tennisClubs: "50+",
    publicCourts: "150+",
    climate: "Mild year-round, foggy",
    peakSeason: "All year",
    tennisScene: "San Francisco's tech community has embraced tennis, with private clubs and public courts seeing growing demand. Golden Gate Park offers iconic public tennis.",
    nearbyAreas: ["Oakland", "Berkeley", "Palo Alto", "San Jose"],
    localFeatures: ["Tech-savvy members", "Limited real estate", "High court demand"],
    faqs: [
      {
        question: "What tennis booking software do SF clubs use?",
        answer: "San Francisco tennis clubs choose PlayCourt for its modern, mobile-first experience that resonates with the Bay Area's tech-forward players."
      },
      {
        question: "Can PlayCourt handle SF's high court demand?",
        answer: "PlayCourt's waitlist and fair allocation features help SF clubs manage demand for limited courts—essential in a space-constrained city."
      },
      {
        question: "Does PlayCourt work for SF tech company tennis?",
        answer: "Yes, Bay Area tech companies use PlayCourt to manage campus tennis courts as employee perks."
      }
    ]
  },

  "washington-dc": {
    slug: "washington-dc",
    name: "Washington DC",
    state: "District of Columbia",
    stateAbbr: "DC",
    region: "Mid-Atlantic",
    population: "690,000",
    tennisClubs: "60+",
    publicCourts: "180+",
    climate: "Four seasons, humid summers",
    peakSeason: "April - October",
    tennisScene: "DC has strong tennis at both exclusive clubs and public facilities. Rock Creek Park Tennis Center offers world-class public tennis.",
    nearbyAreas: ["Arlington", "Bethesda", "Alexandria", "Chevy Chase"],
    localFeatures: ["Government/diplomatic members", "Historic clubs", "Strong public tennis"],
    faqs: [
      {
        question: "What tennis booking software do DC clubs use?",
        answer: "Washington DC tennis facilities choose PlayCourt for its reliability and security—important when members include government officials and diplomats."
      },
      {
        question: "Can PlayCourt handle DC's embassy/government booking?",
        answer: "PlayCourt's professional interface and secure system meets the expectations of DC's diplomatic and government tennis community."
      },
      {
        question: "Does PlayCourt work for DC public tennis?",
        answer: "Yes, DC Department of Parks and Recreation facilities can use PlayCourt to manage public court booking and permit systems."
      }
    ]
  },

  // Additional cities with shorter entries
  "philadelphia": {
    slug: "philadelphia",
    name: "Philadelphia",
    state: "Pennsylvania",
    stateAbbr: "PA",
    region: "Northeast",
    population: "1.6 million",
    tennisClubs: "80+",
    publicCourts: "250+",
    climate: "Four seasons",
    peakSeason: "April - October",
    tennisScene: "Philadelphia has historic tennis clubs and strong public court system through Fairmount Park.",
    nearbyAreas: ["Main Line", "Cherry Hill", "King of Prussia", "Wilmington"],
    localFeatures: ["Historic clubs", "Strong public parks", "Indoor winter options"],
    faqs: [
      { question: "What tennis software do Philly clubs use?", answer: "Philadelphia tennis facilities choose PlayCourt for its blend of simplicity and sophistication that matches the city's diverse tennis community." },
      { question: "Does PlayCourt work for Main Line clubs?", answer: "Yes, prestigious Main Line tennis clubs use PlayCourt to deliver premium member experiences." },
      { question: "Can PlayCourt handle Philly public courts?", answer: "PlayCourt works for Philadelphia Parks & Recreation tennis facilities with municipal-friendly features." }
    ]
  },

  "las-vegas": {
    slug: "las-vegas",
    name: "Las Vegas",
    state: "Nevada",
    stateAbbr: "NV",
    region: "Southwest",
    population: "650,000",
    tennisClubs: "50+",
    publicCourts: "150+",
    climate: "Desert, hot summers",
    peakSeason: "October - May",
    tennisScene: "Las Vegas has resort tennis and growing residential club scene in master-planned communities.",
    nearbyAreas: ["Henderson", "Summerlin", "North Las Vegas", "Boulder City"],
    localFeatures: ["Resort tennis", "Master-planned communities", "Morning play essential"],
    faqs: [
      { question: "What tennis software do Vegas clubs use?", answer: "Las Vegas tennis facilities choose PlayCourt for resort-ready booking and HOA community management." },
      { question: "Can PlayCourt handle Vegas resort tennis?", answer: "Yes, Las Vegas resort properties use PlayCourt for guest tennis booking integrated with hotel stays." },
      { question: "Does PlayCourt work for Summerlin HOAs?", answer: "PlayCourt is popular with Las Vegas master-planned community HOAs for resident tennis amenities." }
    ]
  },

  "nashville": {
    slug: "nashville",
    name: "Nashville",
    state: "Tennessee",
    stateAbbr: "TN",
    region: "Southeast",
    population: "690,000",
    tennisClubs: "50+",
    publicCourts: "150+",
    climate: "Humid summers, mild winters",
    peakSeason: "March - November",
    tennisScene: "Nashville's growth has driven tennis facility expansion across the city and suburbs.",
    nearbyAreas: ["Franklin", "Brentwood", "Murfreesboro", "Hendersonville"],
    localFeatures: ["Fast-growing market", "New developments", "Country club culture"],
    faqs: [
      { question: "What tennis software do Nashville clubs use?", answer: "Nashville tennis facilities choose PlayCourt to match the city's modern, growth-oriented identity." },
      { question: "Can PlayCourt scale with Nashville's growth?", answer: "PlayCourt easily adds courts and members as Nashville clubs expand—no IT project required." },
      { question: "Does PlayCourt work for Franklin/Brentwood clubs?", answer: "Yes, Nashville suburb tennis facilities use PlayCourt for premium member experiences." }
    ]
  },

  "charlotte": {
    slug: "charlotte",
    name: "Charlotte",
    state: "North Carolina",
    stateAbbr: "NC",
    region: "Southeast",
    population: "880,000",
    tennisClubs: "70+",
    publicCourts: "200+",
    climate: "Mild four seasons",
    peakSeason: "March - November",
    tennisScene: "Charlotte has strong country club tennis and growing public facilities.",
    nearbyAreas: ["Lake Norman", "Ballantyne", "Huntersville", "Matthews"],
    localFeatures: ["Country club focus", "Lake communities", "Corporate facilities"],
    faqs: [
      { question: "What tennis software do Charlotte clubs use?", answer: "Charlotte tennis facilities choose PlayCourt for its country club-ready features and member experience." },
      { question: "Can PlayCourt handle Charlotte corporate tennis?", answer: "Yes, Charlotte-area corporate campuses use PlayCourt for employee tennis amenities." },
      { question: "Does PlayCourt work for Lake Norman clubs?", answer: "Lake Norman community tennis facilities use PlayCourt for resident booking and guest access." }
    ]
  },

  "orlando": {
    slug: "orlando",
    name: "Orlando",
    state: "Florida",
    stateAbbr: "FL",
    region: "Southeast",
    population: "310,000",
    tennisClubs: "60+",
    publicCourts: "180+",
    climate: "Subtropical, year-round tennis",
    peakSeason: "All year",
    tennisScene: "Orlando's tennis scene includes resort properties, retirement communities, and local clubs.",
    nearbyAreas: ["Winter Park", "Lake Nona", "Kissimmee", "Dr. Phillips"],
    localFeatures: ["Resort properties", "Retirement communities", "Year-round play"],
    faqs: [
      { question: "What tennis software do Orlando clubs use?", answer: "Orlando tennis facilities choose PlayCourt for its resort-ready features and retirement-friendly simplicity." },
      { question: "Can PlayCourt handle Orlando resort tennis?", answer: "Yes, Orlando resort properties use PlayCourt for guest tennis booking alongside member access." },
      { question: "Does PlayCourt work for Orlando 55+ communities?", answer: "PlayCourt's simple interface is perfect for active adult communities throughout Central Florida." }
    ]
  },

  "tampa": {
    slug: "tampa",
    name: "Tampa",
    state: "Florida",
    stateAbbr: "FL",
    region: "Southeast",
    population: "400,000",
    tennisClubs: "70+",
    publicCourts: "200+",
    climate: "Subtropical, year-round tennis",
    peakSeason: "All year",
    tennisScene: "Tampa Bay has diverse tennis from Westchase to South Tampa country clubs.",
    nearbyAreas: ["St. Petersburg", "Clearwater", "Brandon", "Wesley Chapel"],
    localFeatures: ["Year-round outdoor", "Beach community clubs", "Snowbird season"],
    faqs: [
      { question: "What tennis software do Tampa clubs use?", answer: "Tampa Bay tennis facilities choose PlayCourt for year-round reliability and snowbird-ready features." },
      { question: "Can PlayCourt handle Tampa's seasonal members?", answer: "PlayCourt's flexible membership options are perfect for Tampa's seasonal snowbird population." },
      { question: "Does PlayCourt work for Clearwater Beach clubs?", answer: "Yes, Tampa Bay area beach clubs use PlayCourt for member and guest tennis booking." }
    ]
  },

  "san-antonio": {
    slug: "san-antonio",
    name: "San Antonio",
    state: "Texas",
    stateAbbr: "TX",
    region: "Southwest",
    population: "1.5 million",
    tennisClubs: "60+",
    publicCourts: "200+",
    climate: "Hot summers, mild winters",
    peakSeason: "October - May",
    tennisScene: "San Antonio has growing tennis infrastructure with new facilities in rapidly developing areas.",
    nearbyAreas: ["New Braunfels", "Boerne", "Alamo Heights", "Stone Oak"],
    localFeatures: ["Military base facilities", "Growing suburbs", "Affordable club scene"],
    faqs: [
      { question: "What tennis software do San Antonio clubs use?", answer: "San Antonio tennis facilities choose PlayCourt for its value and ease of use—perfect for Texas's budget-conscious clubs." },
      { question: "Can PlayCourt handle San Antonio military facilities?", answer: "Yes, San Antonio military base MWR tennis facilities can use PlayCourt for authorized user booking." },
      { question: "Does PlayCourt work for growing SA suburbs?", answer: "PlayCourt scales easily as San Antonio suburb clubs expand with the city's rapid growth." }
    ]
  },

  "portland": {
    slug: "portland",
    name: "Portland",
    state: "Oregon",
    stateAbbr: "OR",
    region: "Pacific Northwest",
    population: "650,000",
    tennisClubs: "50+",
    publicCourts: "140+",
    climate: "Rainy, indoor essential",
    peakSeason: "June - September (outdoor)",
    tennisScene: "Portland has strong public tennis culture and growing indoor facilities to handle the rain.",
    nearbyAreas: ["Beaverton", "Lake Oswego", "Tigard", "West Linn"],
    localFeatures: ["Indoor focus", "Strong public tennis", "Eco-conscious community"],
    faqs: [
      { question: "What tennis software do Portland clubs use?", answer: "Portland tennis facilities choose PlayCourt for managing indoor court demand during the long rainy season." },
      { question: "Can PlayCourt handle Portland's weather-dependent booking?", answer: "PlayCourt lets Portland clubs quickly shift between indoor and outdoor courts as weather changes." },
      { question: "Does PlayCourt work for Portland Parks?", answer: "Yes, Portland Parks & Recreation tennis facilities can use PlayCourt for public court management." }
    ]
  },

  "sacramento": {
    slug: "sacramento",
    name: "Sacramento",
    state: "California",
    stateAbbr: "CA",
    region: "West Coast",
    population: "525,000",
    tennisClubs: "40+",
    publicCourts: "120+",
    climate: "Hot dry summers, mild winters",
    peakSeason: "March - November",
    tennisScene: "Sacramento has a mix of public courts and private clubs serving California's capital region.",
    nearbyAreas: ["Roseville", "Folsom", "Elk Grove", "Davis"],
    localFeatures: ["Government employees", "Growing suburbs", "University facilities"],
    faqs: [
      { question: "What tennis software do Sacramento clubs use?", answer: "Sacramento tennis facilities choose PlayCourt for its reliable, no-nonsense approach that matches the region's practical mindset." },
      { question: "Can PlayCourt handle Sacramento's heat?", answer: "PlayCourt helps Sacramento clubs manage early morning and evening court demand during hot summer months." },
      { question: "Does PlayCourt work for UC Davis tennis?", answer: "Yes, university recreation tennis facilities can use PlayCourt for student and community booking." }
    ]
  },

  "raleigh": {
    slug: "raleigh",
    name: "Raleigh",
    state: "North Carolina",
    stateAbbr: "NC",
    region: "Southeast",
    population: "475,000",
    tennisClubs: "50+",
    publicCourts: "150+",
    climate: "Mild four seasons",
    peakSeason: "March - November",
    tennisScene: "Research Triangle has strong tennis culture with tech-savvy players expecting modern booking.",
    nearbyAreas: ["Durham", "Cary", "Chapel Hill", "Wake Forest"],
    localFeatures: ["Tech-savvy members", "University influence", "Growing market"],
    faqs: [
      { question: "What tennis software do Raleigh clubs use?", answer: "Triangle-area tennis facilities choose PlayCourt for its modern interface that resonates with the tech-savvy Research Triangle community." },
      { question: "Can PlayCourt handle Triangle growth?", answer: "PlayCourt scales easily as Raleigh-Durham clubs expand with the region's rapid tech-driven growth." },
      { question: "Does PlayCourt work for NC university tennis?", answer: "Yes, Triangle-area university recreation programs can use PlayCourt for campus tennis management." }
    ]
  },

  "minneapolis": {
    slug: "minneapolis",
    name: "Minneapolis",
    state: "Minnesota",
    stateAbbr: "MN",
    region: "Midwest",
    population: "430,000",
    tennisClubs: "60+",
    publicCourts: "180+",
    climate: "Cold winters, warm summers",
    peakSeason: "May - September",
    tennisScene: "Minneapolis has passionate tennis community that maximizes short outdoor season and invests in indoor facilities.",
    nearbyAreas: ["St. Paul", "Edina", "Bloomington", "Wayzata"],
    localFeatures: ["Indoor winter essential", "Short outdoor season", "Strong club culture"],
    faqs: [
      { question: "What tennis software do Minneapolis clubs use?", answer: "Twin Cities tennis facilities choose PlayCourt to maximize precious outdoor court time and manage high-demand indoor facilities." },
      { question: "Can PlayCourt handle Minnesota winters?", answer: "PlayCourt's indoor court management features are essential for Minnesota clubs during 5+ months of winter." },
      { question: "Does PlayCourt work for Edina/Wayzata clubs?", answer: "Yes, Minneapolis suburb tennis clubs use PlayCourt for premium member booking experiences." }
    ]
  },

  "cleveland": {
    slug: "cleveland",
    name: "Cleveland",
    state: "Ohio",
    stateAbbr: "OH",
    region: "Midwest",
    population: "380,000",
    tennisClubs: "50+",
    publicCourts: "140+",
    climate: "Cold winters, humid summers",
    peakSeason: "May - October",
    tennisScene: "Cleveland has historic tennis clubs and strong public tennis through Cleveland Metroparks.",
    nearbyAreas: ["Shaker Heights", "Beachwood", "Rocky River", "Westlake"],
    localFeatures: ["Historic clubs", "Lake effect considerations", "Indoor winter"],
    faqs: [
      { question: "What tennis software do Cleveland clubs use?", answer: "Cleveland tennis facilities choose PlayCourt for its reliability through unpredictable Lake Erie weather." },
      { question: "Can PlayCourt handle Cleveland's weather?", answer: "PlayCourt helps Cleveland clubs manage rapid weather changes with easy booking modifications and member communication." },
      { question: "Does PlayCourt work for Cleveland Metroparks?", answer: "Yes, Cleveland Metroparks tennis facilities can use PlayCourt for public court reservation management." }
    ]
  },

  "pittsburgh": {
    slug: "pittsburgh",
    name: "Pittsburgh",
    state: "Pennsylvania",
    stateAbbr: "PA",
    region: "Northeast",
    population: "305,000",
    tennisClubs: "40+",
    publicCourts: "120+",
    climate: "Four seasons, cold winters",
    peakSeason: "May - October",
    tennisScene: "Pittsburgh has strong tennis tradition at private clubs and public facilities.",
    nearbyAreas: ["Fox Chapel", "Mt. Lebanon", "Sewickley", "Shadyside"],
    localFeatures: ["Historic clubs", "University tennis", "Indoor winter focus"],
    faqs: [
      { question: "What tennis software do Pittsburgh clubs use?", answer: "Pittsburgh tennis facilities choose PlayCourt for its balance of traditional club values and modern convenience." },
      { question: "Can PlayCourt handle Pittsburgh seasons?", answer: "PlayCourt manages Pittsburgh's transition between outdoor summer and indoor winter tennis seamlessly." },
      { question: "Does PlayCourt work for Pitt/CMU tennis?", answer: "Yes, Pittsburgh university recreation tennis facilities can use PlayCourt for campus community booking." }
    ]
  },

  "indianapolis": {
    slug: "indianapolis",
    name: "Indianapolis",
    state: "Indiana",
    stateAbbr: "IN",
    region: "Midwest",
    population: "880,000",
    tennisClubs: "50+",
    publicCourts: "150+",
    climate: "Four seasons",
    peakSeason: "April - October",
    tennisScene: "Indianapolis has solid tennis infrastructure with good public facilities and private clubs.",
    nearbyAreas: ["Carmel", "Fishers", "Zionsville", "Greenwood"],
    localFeatures: ["Growing suburbs", "Affordable clubs", "Strong parks system"],
    faqs: [
      { question: "What tennis software do Indianapolis clubs use?", answer: "Indianapolis tennis facilities choose PlayCourt for its value and Midwest-friendly simplicity." },
      { question: "Can PlayCourt handle Indy suburb growth?", answer: "PlayCourt scales easily as Carmel, Fishers, and other Indy suburbs expand their tennis facilities." },
      { question: "Does PlayCourt work for Indy Parks?", answer: "Yes, Indianapolis Parks Department tennis facilities can use PlayCourt for public court management." }
    ]
  },

  "palm-beach": {
    slug: "palm-beach",
    name: "Palm Beach",
    state: "Florida",
    stateAbbr: "FL",
    region: "Southeast",
    population: "1.5 million (county)",
    tennisClubs: "80+",
    publicCourts: "200+",
    climate: "Tropical, year-round tennis",
    peakSeason: "All year (peak: winter)",
    tennisScene: "Palm Beach County is a tennis destination with prestigious clubs and resort facilities.",
    nearbyAreas: ["Boca Raton", "Delray Beach", "Jupiter", "Wellington"],
    localFeatures: ["Luxury clubs", "Snowbird season", "Resort properties"],
    faqs: [
      { question: "What tennis software do Palm Beach clubs use?", answer: "Palm Beach County's prestigious tennis facilities choose PlayCourt for its elegant member experience matching their luxury standards." },
      { question: "Can PlayCourt handle Palm Beach's seasonal surge?", answer: "PlayCourt's flexible membership and guest features handle Palm Beach's dramatic seasonal swings seamlessly." },
      { question: "Does PlayCourt work for Boca Raton clubs?", answer: "Yes, Boca Raton and surrounding Palm Beach communities use PlayCourt for premium tennis booking." }
    ]
  },
};

export function getCity(slug: string): City | undefined {
  return cities[slug];
}

export function getAllCitySlugs(): string[] {
  return Object.keys(cities);
}

export function getCitiesByRegion(region: string): City[] {
  return Object.values(cities).filter(city => city.region === region);
}
