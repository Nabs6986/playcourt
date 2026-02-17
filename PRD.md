# TennisHQ — MVP Product Requirements Document

**Version:** 0.1
**Date:** 2026-02-16
**Author:** Adam + Arnab

---

## Executive Summary

TennisHQ is an all-in-one SaaS platform for tennis clubs and facilities. The MVP focuses on solving the two highest-pain problems: **court booking** and **online presence** (website).

**Target customer:** Small-to-medium tennis facilities (2-8 courts) currently using paper, spreadsheets, or phone-based booking.

**MVP Goal:** Get 5 paying customers within 90 days of launch.

---

## Problem Statement

Tennis club operators waste 10+ hours/week on:
- Manually managing court reservations (phone, paper, spreadsheets)
- Fielding calls for availability
- Chasing no-shows and late cancellations
- Updating members on weather cancellations
- Maintaining outdated websites (or having no website at all)

**Existing solutions** (CourtReserve, ClubAutomation) are:
- Expensive ($300-800/month)
- Overly complex (enterprise features they don't need)
- Ugly, dated UX
- Poor mobile experience

---

## Target User Personas

### Primary: Club Manager / Owner
- **Name:** Mike, 52
- **Role:** Owns/manages a 6-court facility
- **Tech comfort:** Uses iPhone, Gmail, basic Excel
- **Pain:** Spends 2 hours/day on booking admin, gets calls at dinner
- **Goal:** "I want members to book online so I can focus on running the club"

### Secondary: Tennis Pro
- **Name:** Sarah, 34
- **Role:** Head pro at private club
- **Pain:** Lesson scheduling is a mess of texts and sticky notes
- **Goal:** "I want clients to see my availability and book without back-and-forth"

### Tertiary: Club Member
- **Name:** David, 45
- **Role:** Plays 3x/week
- **Pain:** Has to call or show up to book a court
- **Goal:** "I want to book a court from my phone in 30 seconds"

---

## MVP Scope

### In Scope (Must Have)

#### 1. Court Booking System
- [ ] Calendar view of court availability
- [ ] Member self-service booking (web + mobile-responsive)
- [ ] Admin ability to block times, set hours
- [ ] Booking rules: max advance booking days, max hours per member
- [ ] Confirmation email on booking
- [ ] Cancel/modify booking (with configurable policy)

#### 2. Member Management (Basic)
- [ ] Member directory (name, email, phone)
- [ ] CSV import for existing members
- [ ] Member login (magic link, no password)
- [ ] Guest booking with member sponsorship

#### 3. Auto-Generated Website
- [ ] Template-based site with club info
- [ ] Hours, location, contact info
- [ ] Court photos (upload)
- [ ] "Book Now" button → booking system
- [ ] Mobile-responsive
- [ ] Custom subdomain: `[clubname].tennishq.io`

#### 4. Notifications
- [ ] Email: booking confirmation
- [ ] Email: 24-hour reminder
- [ ] Email: cancellation confirmation
- [ ] Admin: daily summary of bookings

#### 5. Admin Dashboard
- [ ] View all bookings (list + calendar)
- [ ] Manage members (add/edit/remove)
- [ ] Basic settings (hours, booking rules, club info)
- [ ] Simple analytics: bookings this week, popular times

### Out of Scope (V2+)
- Payment processing / membership billing
- Lesson scheduling with pros
- Tournament/event management
- SMS notifications
- Mobile app (native)
- Multi-location support
- Waitlist for full courts
- Integration with gate/light systems

---

## User Flows

### Flow 1: Member Books a Court

```
1. Member visits clubname.tennishq.io
2. Clicks "Book a Court"
3. Sees calendar with available slots (green) and booked (gray)
4. Selects date → sees available times
5. Selects court + time + duration (1hr or 1.5hr)
6. If not logged in → enters email → receives magic link
7. Confirms booking
8. Receives confirmation email
9. 24 hours before → receives reminder email
```

### Flow 2: Admin Sets Up Club

```
1. Signs up at tennishq.io
2. Onboarding wizard:
   - Club name, address, phone
   - Number of courts + names (Court 1, Court 2, etc.)
   - Operating hours (by day of week)
   - Booking rules (max 7 days advance, max 2 hrs/day)
3. Uploads logo + court photos
4. Imports members via CSV (or adds manually)
5. Previews auto-generated website
6. Launches → members receive invite emails
```

### Flow 3: Admin Views Dashboard

```
1. Logs into admin.tennishq.io
2. Sees today's bookings at a glance
3. Calendar view: click any slot to see details or block
4. Members tab: search, add, edit members
5. Settings: update hours, rules, club info
6. Analytics: bookings this week vs last week
```

---

## Technical Architecture

### Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| Frontend | Next.js 14 + Tailwind | Fast, SEO-friendly, great DX |
| Backend | Next.js API routes + Prisma | Simplicity, single deploy |
| Database | PostgreSQL (Supabase) | Reliable, easy auth |
| Auth | Supabase Auth (magic link) | No passwords to manage |
| Email | Resend | Simple, good deliverability |
| Hosting | Vercel | Easy deploys, edge functions |
| Domain | tennishq.io | Subdomains for each club |

### Data Model (Simplified)

```
Club
  - id, name, slug, address, phone, hours, settings
  - has_many: Courts, Members, Bookings

Court
  - id, club_id, name, surface_type

Member
  - id, club_id, email, name, phone, role (admin/member)

Booking
  - id, court_id, member_id, date, start_time, end_time, status
```

### Infrastructure

```
┌─────────────────┐     ┌─────────────────┐
│   Member App    │────▶│   Vercel Edge   │
│ club.tennishq.io│     │   (Next.js)     │
└─────────────────┘     └────────┬────────┘
                                 │
┌─────────────────┐              │
│   Admin App     │──────────────┤
│ admin.tennishq.io              │
└─────────────────┘              ▼
                        ┌─────────────────┐
                        │    Supabase     │
                        │  (Postgres + Auth)
                        └─────────────────┘
                                 │
                                 ▼
                        ┌─────────────────┐
                        │     Resend      │
                        │   (Emails)      │
                        └─────────────────┘
```

---

## Design Requirements

### Brand
- **Primary color:** Forest green (#228B22) — tennis court vibes
- **Secondary:** White, light gray
- **Typography:** Inter or similar clean sans-serif
- **Tone:** Professional but friendly, not corporate

### Key Screens (Admin)
1. Dashboard (today's bookings, quick stats)
2. Calendar view (week view, click to drill down)
3. Members list (searchable, sortable)
4. Settings (club info, hours, rules)
5. Website preview/editor

### Key Screens (Member)
1. Landing page (club info, "Book Now" CTA)
2. Booking calendar (select date → times → confirm)
3. My bookings (upcoming, past)
4. Simple profile (name, email, phone)

### Mobile-First
- All member flows must work perfectly on mobile
- Admin can be desktop-optimized (they use computers)

---

## Success Metrics

### MVP Success Criteria (90 days post-launch)
- [ ] 5 clubs actively using the platform
- [ ] 100+ bookings processed
- [ ] <5% churn (no clubs leave)
- [ ] NPS >40 from club managers

### Key Metrics to Track
| Metric | Target |
|--------|--------|
| Clubs signed up | 10+ |
| Clubs active (1+ booking/week) | 5+ |
| Bookings per club per week | 20+ |
| Member activation rate | >50% |
| Admin time saved (self-reported) | 5+ hrs/week |

---

## Timeline

### Phase 1: Foundation (Week 1-2)
- [ ] Set up repo, Supabase, Vercel
- [ ] Data models + migrations
- [ ] Auth flow (magic link)
- [ ] Basic admin: add club, add courts

### Phase 2: Core Booking (Week 3-4)
- [ ] Calendar UI component
- [ ] Booking creation flow
- [ ] Booking rules engine
- [ ] Admin booking management

### Phase 3: Member Experience (Week 5-6)
- [ ] Member-facing booking flow
- [ ] My bookings page
- [ ] Email notifications (confirmation, reminder)

### Phase 4: Website Generator (Week 7-8)
- [ ] Template system
- [ ] Club info → website mapping
- [ ] Subdomain routing
- [ ] Mobile responsive

### Phase 5: Polish + Launch (Week 9-10)
- [ ] Admin dashboard polish
- [ ] Onboarding wizard
- [ ] Error handling, edge cases
- [ ] Documentation
- [ ] Launch to pilot clubs

---

## Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Clubs won't switch from paper | High | Start with clubs that have NO system, not competitors' customers |
| Booking conflicts | Medium | Implement proper locking, show real-time availability |
| Email deliverability | Medium | Use Resend, proper SPF/DKIM, avoid spam triggers |
| Scope creep | High | Strict MVP scope, V2 list for "not now" |
| No demand | High | Validate with outreach BEFORE building (see outreach plan) |

---

## Open Questions

1. **Pricing:** $149 or $199 for starter tier?
2. **Free tier:** Offer free for 1-2 courts to drive adoption?
3. **Name:** TennisHQ? CourtFlow? AceAdmin? BookCourt?
4. **Domain:** tennishq.io? courtflow.io?

---

## Appendix

### Competitor Pricing
| Competitor | Price | Notes |
|------------|-------|-------|
| CourtReserve | $199-499/mo | Bloated, dated UI |
| Tennis Bookings | $99-299/mo | UK-focused |
| ClubAutomation | $500+/mo | Enterprise only |
| Omnify | $79-299/mo | Generic booking, not tennis-specific |

### Research Links
- USTA Club Resources: https://www.usta.com/en/home/organize/program-resources.html
- Tennis Industry Association: https://www.tennisindustry.org/
- r/10s (tennis subreddit): https://reddit.com/r/10s
