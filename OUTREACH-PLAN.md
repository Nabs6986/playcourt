# TennisHQ — Automated Demand Validation Outreach Plan

**Goal:** Validate demand before building. Get 20 conversations with tennis club decision-makers in 2 weeks.

**Success criteria:** 
- 5+ clubs say "I'd pay for this"
- 2+ clubs commit to free pilot
- Clear understanding of must-have features

---

## Strategy Overview

We'll use **three parallel channels**:

| Channel | Volume | Conversion Target | Timeline |
|---------|--------|-------------------|----------|
| LinkedIn outreach | 100 contacts | 10 conversations | Week 1-2 |
| Email outreach | 200 clubs | 10 conversations | Week 1-2 |
| Community engagement | 5 posts/comments | 5 conversations | Ongoing |

---

## Channel 1: LinkedIn Outreach (Semi-Automated)

### Target Profiles
- "Tennis Director" 
- "Club Manager" + tennis
- "Head Tennis Pro"
- "General Manager" + tennis/racquet club
- Owners of tennis facilities

### Search Queries
```
"tennis director" OR "tennis pro" OR "racquet club manager"
"head pro" tennis
"club manager" (tennis OR racquet)
site:linkedin.com "tennis director"
```

### Tools
- **LinkedIn Sales Navigator** (free trial) — advanced search
- **Dripify** or **Expandi** — automation (optional, be careful with limits)
- **Manual first** — more personal, better conversion

### Outreach Sequence

**Connection Request (no note, higher acceptance):**
Just connect, no pitch.

**Message 1 (Day 1 after connection):**
```
Hey [First Name],

I noticed you're running the tennis program at [Club Name] — nice setup!

Quick question: how are you handling court reservations right now? Paper sign-up? Phone calls? Some booking software?

Working on something in this space and trying to learn from folks who actually run clubs.

Either way, thanks for connecting!
```

**Message 2 (Day 4 if no response):**
```
Hey [First Name], 

Know you're busy — just curious if court booking is a pain point or if you've got it figured out? 

Trying to understand if this is a real problem or just my perception.

No pitch, genuinely just researching.
```

**Message 3 (Day 7 if no response — last touch):**
```
Last one, promise! 

If you had a magic wand, what's the ONE thing you'd fix about running your tennis program?

Happy to share what I learn from other club managers if you're interested.
```

### Tracking
| Metric | Target |
|--------|--------|
| Connection requests sent | 100 |
| Connections accepted | 30 (30%) |
| Conversations started | 15 (50% of accepts) |
| Calls booked | 5 |

---

## Channel 2: Email Outreach (Automated)

### Building the List

**Source 1: Google Maps Scrape**
```
Search: "tennis club" or "tennis center" in target cities
Extract: Name, address, phone, website, email (from website)
Tool: Outscraper, Apify, or manual
Target: 500 clubs
```

**Source 2: USTA Facility Finder**
```
https://www.usta.com/en/home/play/facility-finder.html
Scrape facility listings by state
Often includes contact info
```

**Source 3: Tennis Industry databases**
```
Tennis Industry Association member lists
State tennis association directories
Local parks & rec tennis programs
```

### Email Tool
- **Instantly.ai** ($37/mo) — best deliverability for cold outreach
- **Smartlead** — alternative
- Set up 3 email accounts for rotation:
  - arnab@tennishq.io
  - hello@tennishq.io
  - support@tennishq.io

### Domain Setup
1. Buy tennishq.io (or chosen name)
2. Set up SPF, DKIM, DMARC
3. Warm up emails for 2 weeks (Instantly does this)
4. Send from aged/warmed accounts only

### Email Sequence

**Email 1 (Day 0):**
```
Subject: Quick question about [Club Name] court bookings

Hi [First Name],

I came across [Club Name] and saw you have [X] courts — nice facility!

Curious: how do members currently book courts? Phone calls? Walk-ups? Some software?

I'm building a simple court booking system specifically for tennis clubs and trying to understand what's actually painful vs. what's "fine."

Either way, thanks for your time — I know running a club is nonstop.

Best,
Arnab

P.S. Not selling anything yet — literally just trying to learn before I build the wrong thing.
```

**Email 2 (Day 3):**
```
Subject: Re: Quick question about [Club Name] court bookings

Hey [First Name],

Just bumping this up — would love 5 minutes to hear how you handle reservations.

Even a quick reply like "we use [X] and it's fine" or "it's a mess" would be super helpful!

– Arnab
```

**Email 3 (Day 6):**
```
Subject: One last try

Hi [First Name],

I know you're busy, so I'll keep this short:

If you had to pick ONE thing about running your tennis program that wastes the most time, what would it be?

Happy to share a summary of what I hear from other club managers.

Thanks either way!

– Arnab
```

### Personalization Variables
- `[First Name]` — from contact
- `[Club Name]` — from scrape
- `[X] courts` — from Google Maps / website
- `[City]` — location

### Volume & Pacing
- **Week 1:** 50 emails/day × 5 days = 250 emails
- **Week 2:** Adjust based on replies, continue or pause
- **Goal:** 200 emails → 20 replies (10%) → 10 conversations

### Compliance
- Include physical address in footer
- One-click unsubscribe link
- Stop emailing anyone who replies (positive or negative)
- No misleading subject lines

---

## Channel 3: Community Engagement (Manual)

### Target Communities

**Facebook Groups:**
- "Tennis Club Managers & Directors" — ~3K members
- "USPTA Tennis Professionals" — ~15K members
- "Tennis Coaches & Pros" — ~8K members
- Local tennis groups (search "[City] tennis")

**Reddit:**
- r/10s (tennis subreddit) — ~300K members
- r/tennis — ~1M members (less relevant but worth monitoring)

**Forums:**
- Talk Tennis forums
- Tennis Warehouse forums

### Engagement Strategy

**Don't pitch. Ask questions and provide value.**

**Post template (Facebook):**
```
Question for club managers/directors:

What's your current setup for court reservations? 

I've heard everything from "members call the pro shop" to "we have an app that nobody uses."

Curious what's actually working (and what's a nightmare).

No pitch — just researching for a project. Happy to share what I learn!
```

**Comment strategy:**
- Find posts about club management, booking issues
- Provide helpful comments (not promotional)
- DM people who seem engaged

### Tracking
| Community | Posts | Comments | DMs | Conversations |
|-----------|-------|----------|-----|---------------|
| FB Groups | 3 | 10 | 10 | 5 |
| Reddit | 2 | 10 | 5 | 2 |
| Forums | 2 | 5 | 3 | 1 |

---

## Conversation Framework

### Discovery Call Script (15 min)

**Intro (1 min):**
"Thanks for chatting! Like I mentioned, I'm exploring building a simple booking tool for tennis clubs. Just want to learn from folks who actually run programs."

**Current State (5 min):**
- "Walk me through how a member books a court today."
- "How many bookings do you handle per week?"
- "What's the biggest time sink in managing this?"

**Pain Points (5 min):**
- "What's frustrating about your current setup?"
- "Have you tried any software? What happened?"
- "If you could wave a magic wand, what would you fix?"

**Solution Test (3 min):**
- "What if members could book online, get automatic reminders, and you could see everything in a dashboard?"
- "Would that be worth $150/month to you?"
- "What would be missing?"

**Close (1 min):**
- "Would you be open to trying an early version for free when it's ready?"
- "Can I follow up in a few weeks?"

### Capture Template

After each conversation, log:
```
Date: 
Club: 
Contact: 
Role: 
Current system: 
Biggest pain: 
Would pay? (Y/N): 
Price sensitivity: 
Must-have features: 
Interested in pilot? (Y/N):
Follow-up date:
Notes:
```

---

## Automation Setup

### Tools Needed
| Tool | Cost | Purpose |
|------|------|---------|
| **Instantly.ai** | $37/mo | Cold email automation |
| **Outscraper** | ~$50 | Google Maps scraping |
| **LinkedIn Sales Nav** | Free trial | Contact finding |
| **Calendly** | Free | Book calls |
| **Notion or Sheets** | Free | Track conversations |
| **tennishq.io domain** | ~$30/yr | Email sending domain |

### Setup Checklist

**Day 1:**
- [ ] Buy domain (tennishq.io or alternative)
- [ ] Set up Google Workspace ($6/mo)
- [ ] Configure SPF, DKIM, DMARC
- [ ] Sign up for Instantly.ai
- [ ] Start email warmup (takes 2 weeks ideally, but can start sending after 3-5 days at low volume)

**Day 2-3:**
- [ ] Scrape 200 tennis clubs from Google Maps (start with NYC, LA, Miami, Dallas)
- [ ] Find emails from websites (or use Hunter.io)
- [ ] Clean list (remove duplicates, validate emails)

**Day 4-5:**
- [ ] Join 5 Facebook groups
- [ ] Start LinkedIn connection requests (20/day)
- [ ] Write email sequences in Instantly

**Day 6+:**
- [ ] Start sending emails (25/day initially)
- [ ] Post in Facebook groups
- [ ] Respond to all replies within 4 hours
- [ ] Book calls via Calendly

---

## Timeline

| Day | Activity |
|-----|----------|
| 1 | Domain + email setup |
| 2-3 | Build prospect list (200+ clubs) |
| 4-5 | Set up Instantly, write sequences |
| 6 | Start LinkedIn outreach (20/day) |
| 7 | Start email outreach (25/day) |
| 8-14 | Monitor, respond, book calls |
| 15-21 | Conduct discovery calls |
| 22 | Compile findings, decide go/no-go |

---

## Decision Framework

### Green Light (Build MVP) ✅
- 5+ club managers say "I'd pay $100-200/mo for this"
- 2+ commit to free pilot
- Clear pattern in pain points

### Yellow Light (Pivot/Adjust) ⚠️
- Interest but price sensitivity ("maybe $50/mo")
- Need features outside MVP scope
- Mixed feedback on pain severity

### Red Light (Kill/Pivot) 🛑
- <10% reply rate AND negative sentiment
- "We're happy with [competitor]" is common
- Pain isn't acute enough to pay for

---

## Templates & Scripts

### LinkedIn Connection Message (if using notes)
```
Hey [Name] — fellow tennis enthusiast here. Saw you're running the program at [Club]. Would love to connect!
```

### Calendly Booking Page Text
```
15-Min Chat: Tennis Club Booking Research

I'm researching how tennis clubs handle court reservations. 

This is NOT a sales call — just trying to learn before building.

I'll ask about:
- How you currently manage bookings
- What's working / not working
- What would make your life easier

Happy to share what I'm hearing from other club managers!
```

### Follow-Up Email (After Call)
```
Subject: Thanks for chatting, [First Name]!

Hey [First Name],

Really appreciated you taking the time today. Your insight about [specific thing they mentioned] was super helpful.

As promised, I'll keep you posted as we build this out. If you're still open to trying an early version, I'll reach out in [X] weeks.

In the meantime, if you think of anything else that would make your life easier — shoot me a note!

Best,
Arnab
```

---

## Resources

### Where to Find Tennis Club Contacts
- Google Maps: "tennis club" + city
- USTA Facility Finder
- State tennis association directories
- Yelp tennis club listings
- Facebook group members
- LinkedIn Sales Navigator

### Email Finding Tools
- Hunter.io (50 free/mo)
- Apollo.io
- Snov.io
- Manual: check club website contact page

### Scraping Tools
- Outscraper (Google Maps)
- Apify (general purpose)
- PhantomBuster (LinkedIn)

---

## Next Steps

1. **Today:** Buy tennishq.io, set up Google Workspace
2. **Tomorrow:** Start email warmup, begin list building
3. **This week:** Send first 50 LinkedIn requests
4. **Next week:** First emails go out, first calls booked
5. **Week 3:** Compile learnings, make build decision
