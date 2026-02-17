# PlayCourt PRD
*Court Booking & Club Management Platform for Tennis and Pickleball*

**Status:** Draft  
**Created:** 2026-02-16  
**Author:** Adam + Arnab

---

## Vision

PlayCourt is the modern operating system for racquet sports facilities. We make it effortless for players to book courts, coaches to fill their calendars, and clubs to maximize revenue — all from one beautiful platform.

**Tagline:** *Book courts. Fill lessons. Grow your club.*

---

## Market Opportunity

### The Problem
- **Players:** Booking a court requires calling, emailing, or using clunky 2010-era software
- **Coaches:** Managing lessons via text/Venmo, chasing payments, no CRM
- **Clubs:** Paying $300-800/mo for dated software, poor mobile experience, fragmented tools

### Market Size
- 23M+ tennis players in the US
- 48M+ pickleball players (fastest-growing sport, 3x growth since 2020)
- ~18,000 tennis facilities + thousands of new pickleball venues
- TAM: $500M+ in club management software

### Competitive Landscape
| Competitor | Strengths | Weaknesses |
|------------|-----------|------------|
| CourtReserve | Market leader, full-featured | Dated UI, expensive ($300-800/mo) |
| ClubAutomation | Enterprise features | Overkill for small clubs, poor UX |
| PlayByPoint | Lesson-focused | Limited club features |
| Generic (Calendly, etc.) | Cheap | Not purpose-built, missing features |

**Our Edge:** Modern UX (Stripe/Resy quality), mobile-first, tennis + pickleball unified, aggressive pricing to capture market share.

---

## User Personas

### 1. Player (Primary User)
**Demographics:** 25-65, plays 1-4x/week, member at 1-2 clubs  
**Goals:** Book courts fast, find playing partners, take lessons  
**Pain Points:** Clunky booking, can't see real-time availability, paying is awkward  
**Success Metric:** Time from app open → confirmed booking < 30 seconds

### 2. Coach (Power User)
**Demographics:** Tennis/pickleball pro, teaches 15-40 hrs/week  
**Goals:** Fill calendar, get paid easily, manage students  
**Pain Points:** Chasing payments, double-bookings, no client CRM  
**Success Metric:** Zero payment chasing, calendar 80%+ filled

### 3. Club Admin (Paying Customer)
**Demographics:** Club manager, GM, or owner  
**Goals:** Maximize court utilization, grow membership, reduce admin work  
**Pain Points:** Manual processes, poor analytics, expensive software  
**Success Metric:** Court utilization > 70%, member satisfaction up

---

## User Workflows

### Player Workflow
```
Discovery → Book → Play → Repeat
```

**Core Flows:**
1. **Find Courts**
   - Search by location, time, sport (tennis/pickleball), surface
   - Filter by indoor/outdoor, available now, price
   - See real-time availability grid

2. **Book Instantly**
   - Tap available slot → confirm → pay (or charge to membership)
   - Apple Pay / Google Pay for fastest checkout
   - Instant confirmation via push + email

3. **Invite Friends**
   - Share booking link to fill doubles/mixer slots
   - Split payment automatically
   - See who's confirmed in real-time

4. **Join Activities**
   - Browse clinics, leagues, round-robins
   - One-tap registration
   - Waitlist with auto-promotion

5. **Book Lessons**
   - Browse coach profiles (bio, rates, reviews)
   - See real-time availability
   - Book and pay in one flow

6. **Track History**
   - Past bookings and partners
   - Spend tracking
   - Favorite courts and times

---

### Coach Workflow
```
Set Availability → Get Booked → Teach → Get Paid
```

**Core Flows:**
1. **Availability Calendar**
   - Drag-to-set available time blocks (like Calendly)
   - Recurring availability (e.g., M/W/F 9am-2pm)
   - Block off vacation/unavailable time

2. **Lesson Types**
   - Define offerings: 30min/60min/90min
   - Private / Semi-private / Group (2-4) / Clinic (5+)
   - Set prices per lesson type
   - Package deals (5-pack, 10-pack with discount)

3. **Student Management**
   - CRM for all clients
   - Notes per student (skill level, goals, areas to work on)
   - Lesson history and progress tracking
   - Tags and segments (beginner, competitive, kids)

4. **Automated Communications**
   - 24h reminder (email + push)
   - 1h reminder (push)
   - Post-lesson follow-up (optional)
   - Cancellation/reschedule handling

5. **Payments & Payouts**
   - See earnings dashboard
   - Weekly direct deposit (Stripe Connect)
   - Track package balances
   - Handle refunds/credits

6. **Profile & Reviews**
   - Public profile with bio, certifications, photos
   - Student reviews and ratings
   - Highlight specialties (kids, competitive, beginners)

---

### Club Admin Workflow
```
Setup → Manage → Optimize → Grow
```

**Core Flows:**
1. **Onboarding Wizard**
   - Add club info (name, address, logo, photos)
   - Configure courts (name, type, surface)
   - Set operating hours
   - Connect Stripe for payments
   - Invite staff/coaches

2. **Court Management**
   - Manage court inventory
   - Set maintenance windows
   - Configure rules (max booking length, advance booking window)
   - Member-only vs. public times

3. **Dynamic Pricing**
   - Peak / off-peak rates
   - Weekend premiums
   - Member vs. guest pricing
   - Promotional rates

4. **Membership Management**
   - Create tiers (e.g., Bronze/Silver/Gold)
   - Define benefits per tier
   - Booking privileges (advance booking, prime time access)
   - Auto-billing and renewals

5. **Coach Management**
   - Onboard pros (invite flow)
   - Set revenue split (e.g., 70/30)
   - Approve/manage schedules
   - Track coach performance

6. **Analytics Dashboard**
   - Court utilization % (by court, day, time)
   - Revenue by court, membership tier, coach
   - Member activity and retention
   - Peak demand patterns

7. **Leagues & Tournaments**
   - Create events
   - Bracket generation
   - Scheduling and conflicts
   - Standings and results

8. **Communications**
   - Email/SMS blasts
   - Event announcements
   - Weather cancellations
   - Targeted messaging (by tier, activity level)

9. **Payments & Billing**
   - Stripe integration
   - Auto-billing for memberships
   - Failed payment recovery
   - Refunds and credits

---

## Technical Architecture

### High-Level Stack
```
┌─────────────────────────────────────────────────────────────┐
│                      Frontend                                │
│  ┌───────────────┐  ┌───────────────┐  ┌─────────────────┐  │
│  │ Player PWA    │  │ Coach Portal  │  │ Club Dashboard  │  │
│  │ (Mobile-first)│  │ (Web app)     │  │ (Web app)       │  │
│  └───────────────┘  └───────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    API Layer (Next.js 14)                    │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ • Auth (Clerk)      • Bookings       • Availability │    │
│  │ • Payments          • Members        • Coaches      │    │
│  │ • Analytics         • Notifications  • Search       │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
┌───────────────┐    ┌───────────────┐    ┌───────────────────┐
│   PostgreSQL  │    │    Stripe     │    │  Twilio/SendGrid  │
│   (Neon/      │    │   Payments    │    │   Notifications   │
│    Supabase)  │    │   + Connect   │    │                   │
└───────────────┘    └───────────────┘    └───────────────────┘
```

### Stack Choices
| Layer | Technology | Why |
|-------|------------|-----|
| Framework | Next.js 14 (App Router) | Full-stack, React, great DX |
| Database | PostgreSQL (Neon or Supabase) | Relational, scalable, cheap |
| ORM | Prisma | Type-safe, great migrations |
| Auth | Clerk | Fast integration, handles everything |
| Payments | Stripe + Connect | Industry standard, coach payouts |
| UI | Tailwind + shadcn/ui | Fast, beautiful, consistent |
| Email | SendGrid or Resend | Reliable, cheap |
| SMS | Twilio | Standard |
| Hosting | Vercel | Perfect for Next.js |
| Storage | Cloudflare R2 | Cheap, S3-compatible |

### Database Schema (Core Tables)
```sql
-- Core entities
clubs, courts, members, coaches, users

-- Booking system
bookings, availability_slots, booking_rules

-- Payments
transactions, subscriptions, packages, payouts

-- Activities
lessons, clinics, leagues, tournaments

-- Communications
notifications, email_templates
```

---

## Monetization

### Pricing Tiers
| Tier | Monthly | Included | Target |
|------|---------|----------|--------|
| **Starter** | Free | Up to 4 courts, basic booking | Small clubs, try before buy |
| **Pro** | $149/mo | Up to 15 courts, full features | Mid-size clubs |
| **Enterprise** | $399/mo | Unlimited, multi-location, API | Large facilities, chains |

### Transaction Fees
- **2.5%** on all bookings processed through PlayCourt
- This is on top of Stripe's ~2.9% + $0.30
- Coach lesson payments: 2.5% to PlayCourt, custom split to coach

### Revenue Projections (Year 1)
| Milestone | Clubs | MRR |
|-----------|-------|-----|
| Month 3 | 5 | $750 |
| Month 6 | 20 | $3,000 |
| Month 12 | 50 | $7,500 |

---

## MVP Scope (90 Days)

### Phase 1: Foundation (Weeks 1-4)
**Goal:** Club can set up and accept bookings

- [ ] Club onboarding wizard
- [ ] Court management (CRUD)
- [ ] Operating hours and rules
- [ ] Basic booking calendar (admin view)
- [ ] Stripe Connect setup
- [ ] Landing page + waitlist

### Phase 2: Player Experience (Weeks 5-8)
**Goal:** Players can discover and book courts

- [ ] Player mobile web app (PWA)
- [ ] Court search and discovery
- [ ] Real-time availability
- [ ] Book + pay flow
- [ ] Booking confirmation (email + push)
- [ ] Booking history

### Phase 3: Coach & Polish (Weeks 9-12)
**Goal:** Coaches can manage lessons, ready for launch

- [ ] Coach onboarding
- [ ] Availability management
- [ ] Lesson booking flow
- [ ] Basic analytics dashboard
- [ ] Membership basics
- [ ] Launch to first 5 clubs

### Post-MVP (Backlog)
- Leagues and tournaments
- Advanced analytics
- Mobile native apps
- Multi-location support
- API for integrations
- White-label option

---

## Success Metrics

### North Star
**Court Hours Booked** — total hours booked across all clubs per month

### Supporting Metrics
| Metric | Target (Month 6) |
|--------|------------------|
| Active clubs | 20 |
| MRR | $3,000 |
| Court utilization | 60%+ avg |
| Player retention | 70% monthly |
| NPS | 50+ |

---

## Go-to-Market

### Phase 1: Founder-Led Sales
- Cold outreach to scraped leads (165 tennis + 200+ pickleball clubs)
- Offer 3-month free pilot
- White-glove onboarding
- Case study in exchange

### Phase 2: Referrals + Content
- "Built for club managers" content (SEO)
- Club referral program (1 month free per referral)
- Pickleball community sponsorships

### Phase 3: Partnerships
- Equipment brands (Wilson, Franklin)
- Coach certification bodies (PTR, PPR)
- Facility management companies

---

## Open Questions

1. **Build mobile native or PWA first?**
   - Leaning PWA for speed, native later

2. **Pickleball-specific features?**
   - Round-robin mixers, skill-level matching, paddle demos

3. **Integration priorities?**
   - Existing POS systems? Gate access? 

4. **Free tier limits?**
   - 4 courts? 100 bookings/month? 

---

## Appendix

### Competitive Deep-Dive
*(To be added: screenshots, pricing details, feature gaps)*

### User Interview Notes
*(To be added: conversations with club managers)*

### Technical Spikes
*(To be added: auth, payments, real-time availability)*

---

*Last updated: 2026-02-16*
