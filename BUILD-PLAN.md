# PlayCourt.io Build Plan
*From current state to AI-search-optimized launch*
*Created: 2026-02-17*

---

## Current State

✅ **Done:**
- Homepage with landing page copy
- SEO-GEO optimized layout (schemas, meta tags)
- robots.txt allowing AI bots
- sitemap.xml generation
- FAQSection component
- Basic Next.js app structure

❌ **Missing:**
- Standalone pages (features, pricing, about)
- Comparison pages (/vs/)
- Audience pages (/for/)
- Use case pages (/use-case/)
- Blog system
- Entity velocity (external mentions)

---

## Build Order

### 🔴 Phase 1: Core Pages (Days 1-3)
*Foundation pages that every SaaS needs*

| Priority | Page | Time Est | Owner |
|----------|------|----------|-------|
| P0 | `/features` | 2h | Adam |
| P0 | `/pricing` (standalone) | 2h | Adam |
| P1 | `/about` | 1h | Adam |
| P1 | `/contact` | 1h | Adam |
| P1 | `/demo` (embed or form) | 1h | Adam |

**Deliverable:** 5 core pages live, all with schema markup

---

### 🟠 Phase 2: Comparison Pages (Days 4-7)
*The #1 GEO play — capture "X vs Y" queries*

| Priority | Page | Competitor | Time Est |
|----------|------|------------|----------|
| P0 | `/vs/courtreserve` | CourtReserve | 3h |
| P0 | `/vs/spreadsheets` | Excel/Sheets | 2h |
| P1 | `/vs/clubautomation` | ClubAutomation | 2h |
| P1 | `/vs/phone-booking` | Manual process | 2h |
| P2 | `/vs/paper-signup` | Paper sheets | 1h |

**Research needed:**
- [ ] CourtReserve pricing and features
- [ ] ClubAutomation pricing and features
- [ ] Common complaints about each (Reddit, G2)

**Deliverable:** 5 comparison pages with FAQPage schema

---

### 🟡 Phase 3: Audience Pages (Days 8-10)
*Capture "best X for [audience]" queries*

| Priority | Page | Audience | Time Est |
|----------|------|----------|----------|
| P0 | `/for/small-clubs` | <8 courts, no IT | 2h |
| P0 | `/for/public-parks` | Municipal, rec depts | 2h |
| P1 | `/for/tennis-centers` | Commercial facilities | 2h |
| P1 | `/for/country-clubs` | Private clubs | 2h |
| P2 | `/for/pickleball` | Pickleball facilities | 1h |

**Deliverable:** 5 audience pages with tailored messaging

---

### 🟢 Phase 4: Use Case Pages (Days 11-14)
*Capture problem-based searches*

| Priority | Page | Pain Point | Time Est |
|----------|------|------------|----------|
| P0 | `/use-case/reduce-no-shows` | No-shows | 2h |
| P0 | `/use-case/online-booking` | Phone/manual booking | 2h |
| P1 | `/use-case/member-management` | Member chaos | 2h |
| P1 | `/use-case/court-scheduling` | Schedule conflicts | 2h |
| P2 | `/use-case/club-website` | No web presence | 1h |

**Deliverable:** 5 use case pages with case study format

---

### 🔵 Phase 5: Blog & Content (Days 15-21)
*Authority building + long-tail capture*

| Priority | Post | Type | Time Est |
|----------|------|------|----------|
| P0 | "Best Tennis Court Booking Software 2026" | Listicle | 4h |
| P0 | "How to Reduce No-Shows at Tennis Clubs" | Guide | 3h |
| P1 | "CourtReserve vs PlayCourt: Full Comparison" | Comparison | 3h |
| P1 | "Tennis Club Management Guide" | Pillar | 4h |
| P2 | "5 Signs You've Outgrown Spreadsheets" | Problem | 2h |

**Technical setup:**
- [ ] Blog index page
- [ ] MDX or CMS for posts
- [ ] Article schema component
- [ ] Related posts component

**Deliverable:** Blog live with 5 posts

---

### ⚪ Phase 6: Programmatic Pages (Days 22-28)
*Scale coverage with templates*

| Type | Count | Example | Time Est |
|------|-------|---------|----------|
| Location pages | 20 | `/tennis-booking/los-angeles` | 4h (template + data) |
| Feature detail pages | 8 | `/features/automatic-reminders` | 4h |

**Deliverable:** 28 programmatic pages

---

### 🟣 Phase 7: Entity Velocity (Ongoing)
*External mentions and community presence*

| Activity | Platform | Frequency |
|----------|----------|-----------|
| Answer tennis software questions | Reddit (r/tennis, r/TennisPros) | 2x/week |
| Comment on facility management posts | LinkedIn | 1x/week |
| Submit to software directories | G2, Capterra, GetApp | Once |
| Share comparison content | Twitter/X | 1x/week |
| Pitch to tennis blogs | Tennis industry sites | 2x/month |

---

## Technical Tasks

### Infrastructure
- [ ] Set up `/vs/[competitor]/page.tsx` dynamic route
- [ ] Set up `/for/[audience]/page.tsx` dynamic route
- [ ] Set up `/use-case/[useCase]/page.tsx` dynamic route
- [ ] Create data files for each route type
- [ ] Build reusable comparison table component
- [ ] Build reusable FAQ accordion with schema
- [ ] Set up blog with MDX or headless CMS

### SEO Components
- [ ] `ComparisonPageSchema.tsx` — JSON-LD for vs pages
- [ ] `AudiencePageSchema.tsx` — JSON-LD for for pages
- [ ] `UseCasePageSchema.tsx` — JSON-LD for use-case pages
- [ ] `ArticleSchema.tsx` — JSON-LD for blog posts
- [ ] Update sitemap.ts to include all new routes

### Content Components
- [ ] `ComparisonTable.tsx` — Side-by-side feature table
- [ ] `ProsConsList.tsx` — When to choose each
- [ ] `CaseStudyCard.tsx` — Customer success stories
- [ ] `CTABanner.tsx` — Reusable call-to-action

---

## Content Research Needed

### Competitor Intel
| Competitor | Research Items |
|------------|----------------|
| CourtReserve | Pricing, features, G2 reviews, complaints |
| ClubAutomation | Pricing, features, target market |
| Tennis Club Software | Features, pricing |
| EZFacility | Tennis module, pricing |

### Market Data
- [ ] Tennis club industry size
- [ ] Court booking software market size
- [ ] No-show rates at tennis facilities
- [ ] Online booking adoption rates

### Customer Quotes
- [ ] Collect testimonials from early users
- [ ] Get permission for case studies
- [ ] Document before/after metrics

---

## Launch Checklist

### Pre-Launch
- [ ] All core pages built
- [ ] At least 3 comparison pages
- [ ] At least 2 audience pages
- [ ] At least 2 use case pages
- [ ] Blog with 3+ posts
- [ ] All schema markup validated
- [ ] robots.txt verified
- [ ] sitemap.xml complete
- [ ] OG images for all pages
- [ ] Mobile responsive verified

### Launch Day
- [ ] Deploy to playcourt.io
- [ ] Submit sitemap to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Test AI search (ChatGPT, Perplexity)
- [ ] Share on Twitter/LinkedIn
- [ ] Post in relevant Reddit communities

### Post-Launch (Week 1)
- [ ] Monitor Search Console indexing
- [ ] Check AI search citations daily
- [ ] Respond to any community discussions
- [ ] Publish 2 additional blog posts
- [ ] Submit to software directories

---

## Timeline Summary

| Week | Focus | Pages Added |
|------|-------|-------------|
| Week 1 | Core + Comparisons | 10 pages |
| Week 2 | Audience + Use Cases | 10 pages |
| Week 3 | Blog + Content | 5 posts |
| Week 4 | Programmatic + Polish | 28 pages |
| **Total** | | **53 pages** |

---

## Success Criteria

### 30 Days Post-Launch
- [ ] 20+ pages indexed in Google
- [ ] First appearance in ChatGPT answer
- [ ] 100+ organic visitors
- [ ] 1+ inbound inquiry

### 60 Days Post-Launch
- [ ] 40+ pages indexed
- [ ] Cited in Perplexity for tennis queries
- [ ] 500+ organic visitors
- [ ] 5+ inbound inquiries

### 90 Days Post-Launch
- [ ] PlayCourt in top 3 ChatGPT recommendations
- [ ] 1,000+ organic visitors/month
- [ ] First paying customer from AI search

---

## Next Immediate Steps

**Today:**
1. Create `/vs/` dynamic route structure
2. Build comparison table component
3. Research CourtReserve (pricing, features, reviews)

**Tomorrow:**
4. Write `/vs/courtreserve` page content
5. Write `/vs/spreadsheets` page content
6. Create `/for/` dynamic route structure

**This Week:**
7. Complete Phase 1 (core pages)
8. Complete Phase 2 (comparison pages)
9. Start Phase 3 (audience pages)
