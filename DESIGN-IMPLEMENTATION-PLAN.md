# TennisHQ Design Implementation Plan

**For:** Claude Code / Codex Implementation
**Version:** 1.0
**Date:** 2026-02-16

---

## 🎯 Design Vision

TennisHQ should feel like **Stripe meets Calendly** — professional, trustworthy, and effortlessly modern. The design should communicate: *"This is software built by people who care about craft."*

**Anti-goals:**
- ❌ Generic Bootstrap/template vibes
- ❌ Overly playful or cartoonish
- ❌ Enterprise-heavy or corporate
- ❌ The "vibecoded" AI-generated look (all gradients, no hierarchy)

**Target feeling:**
- ✅ Clean, spacious, breathable
- ✅ Confident and professional
- ✅ Warm enough to feel approachable
- ✅ Premium without being pretentious

---

## 🎨 Design Tokens

### Color Palette

```typescript
// tailwind.config.ts
const colors = {
  // Primary Brand
  brand: {
    50:  '#f0fdf4',   // Lightest tint (backgrounds)
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',   // Main green (buttons, links)
    600: '#16a34a',   // Hover states
    700: '#15803d',   // Active states
    800: '#166534',
    900: '#14532d',   // Darkest (rare use)
    DEFAULT: '#16a34a', // Primary CTA color
  },
  
  // Neutrals (warm gray, not cold)
  slate: {
    50:  '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  },
  
  // Accent Colors
  accent: {
    tennis: '#c8ff00',      // Tennis ball yellow-green (sparingly)
    court: '#2d5a27',       // Deep court green
    clay: '#d2691e',        // Clay court orange (secondary)
  },
  
  // Semantic
  success: '#22c55e',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
}
```

### Typography

```css
/* Use Inter for everything - clean, modern, readable */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  
  /* Type Scale (1.25 ratio) */
  --text-xs:   0.75rem;    /* 12px */
  --text-sm:   0.875rem;   /* 14px */
  --text-base: 1rem;       /* 16px */
  --text-lg:   1.125rem;   /* 18px */
  --text-xl:   1.25rem;    /* 20px */
  --text-2xl:  1.5rem;     /* 24px */
  --text-3xl:  1.875rem;   /* 30px */
  --text-4xl:  2.25rem;    /* 36px */
  --text-5xl:  3rem;       /* 48px */
  --text-6xl:  3.75rem;    /* 60px */
  
  /* Line Heights */
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  
  /* Font Weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
}
```

### Spacing Scale

```css
/* 4px base unit, 8px rhythm */
:root {
  --space-0: 0;
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
}
```

### Border Radius

```css
:root {
  --radius-none: 0;
  --radius-sm: 0.25rem;   /* 4px - subtle */
  --radius-md: 0.5rem;    /* 8px - buttons, inputs */
  --radius-lg: 0.75rem;   /* 12px - cards */
  --radius-xl: 1rem;      /* 16px - modals, large cards */
  --radius-2xl: 1.5rem;   /* 24px - hero sections */
  --radius-full: 9999px;  /* pills, avatars */
}
```

### Shadows

```css
:root {
  /* Subtle, modern shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  
  /* Colored shadow for CTAs */
  --shadow-brand: 0 4px 14px 0 rgb(22 163 74 / 0.4);
}
```

---

## 🧩 Component Library

### 1. Buttons

```tsx
// components/ui/Button.tsx
// Three sizes: sm, md (default), lg
// Three variants: primary, secondary, ghost

// Primary (green, filled)
<button className="
  bg-brand-500 text-white font-medium
  px-4 py-2.5 rounded-lg
  hover:bg-brand-600 active:bg-brand-700
  shadow-sm hover:shadow-brand
  transition-all duration-150
  focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2
">
  Get Started
</button>

// Secondary (outlined)
<button className="
  bg-white text-slate-700 font-medium
  px-4 py-2.5 rounded-lg
  border border-slate-200
  hover:bg-slate-50 hover:border-slate-300
  transition-all duration-150
">
  Learn More
</button>

// Ghost (text only)
<button className="
  text-slate-600 font-medium
  px-4 py-2.5 rounded-lg
  hover:bg-slate-100 hover:text-slate-900
  transition-all duration-150
">
  Cancel
</button>
```

### 2. Cards

```tsx
// Standard Card
<div className="
  bg-white rounded-xl
  border border-slate-200
  p-6
  hover:shadow-lg hover:border-slate-300
  transition-all duration-200
">
  {/* content */}
</div>

// Feature Card (for landing page)
<div className="
  bg-gradient-to-br from-slate-50 to-white
  rounded-2xl border border-slate-100
  p-8
  group hover:border-brand-200 hover:shadow-lg
  transition-all duration-300
">
  <div className="
    w-12 h-12 rounded-xl
    bg-brand-100 text-brand-600
    flex items-center justify-center
    group-hover:bg-brand-500 group-hover:text-white
    transition-colors duration-300
  ">
    <IconCalendar className="w-6 h-6" />
  </div>
  <h3 className="mt-4 text-xl font-semibold text-slate-900">
    Court Booking
  </h3>
  <p className="mt-2 text-slate-600 leading-relaxed">
    Members book in 30 seconds. You see it instantly.
  </p>
</div>
```

### 3. Inputs

```tsx
// Text Input
<div className="space-y-1.5">
  <label className="text-sm font-medium text-slate-700">
    Club Name
  </label>
  <input
    type="text"
    className="
      w-full px-4 py-2.5 rounded-lg
      border border-slate-200 bg-white
      text-slate-900 placeholder:text-slate-400
      focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent
      transition-all duration-150
    "
    placeholder="Riverside Tennis Club"
  />
</div>

// With helper text
<p className="mt-1.5 text-sm text-slate-500">
  This will be your subdomain: riverside-tennis.tennishq.io
</p>
```

### 4. Navigation

```tsx
// Top Nav (Marketing)
<nav className="
  fixed top-0 left-0 right-0 z-50
  bg-white/80 backdrop-blur-lg
  border-b border-slate-100
">
  <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
    <Logo />
    <div className="hidden md:flex items-center gap-8">
      <NavLinks />
    </div>
    <div className="flex items-center gap-4">
      <Button variant="ghost">Log In</Button>
      <Button variant="primary">Get Started</Button>
    </div>
  </div>
</nav>

// Sidebar (Admin)
<aside className="
  fixed left-0 top-0 bottom-0 w-64
  bg-slate-900 text-white
  flex flex-col
">
  <div className="p-6">
    <Logo variant="light" />
  </div>
  <nav className="flex-1 px-3 space-y-1">
    {links.map(link => (
      <NavLink
        className="
          flex items-center gap-3 px-3 py-2.5 rounded-lg
          text-slate-300 hover:text-white hover:bg-white/10
          transition-colors duration-150
          data-[active=true]:bg-brand-500 data-[active=true]:text-white
        "
      >
        {link.icon}
        {link.label}
      </NavLink>
    ))}
  </nav>
</aside>
```

### 5. Calendar/Booking Grid

```tsx
// Time slot (available)
<button className="
  h-12 rounded-lg border border-slate-200
  text-slate-700 font-medium
  hover:border-brand-500 hover:bg-brand-50 hover:text-brand-700
  transition-all duration-150
">
  9:00 AM
</button>

// Time slot (selected)
<button className="
  h-12 rounded-lg
  bg-brand-500 text-white font-medium
  ring-2 ring-brand-500 ring-offset-2
">
  9:00 AM
</button>

// Time slot (booked)
<div className="
  h-12 rounded-lg bg-slate-100
  text-slate-400 font-medium
  flex items-center justify-center
  cursor-not-allowed
">
  Booked
</div>
```

---

## 📄 Page Designs

### Landing Page (marketing)

**Structure:**
```
┌────────────────────────────────────────────────────────────┐
│ NAV: Logo | Features | Pricing | About | [Log In] [Start] │
├────────────────────────────────────────────────────────────┤
│                                                            │
│              HERO                                          │
│   ┌─────────────────────────────────────────────────────┐  │
│   │  Stop playing phone tag.                            │  │
│   │  Start filling courts.                              │  │
│   │                                                     │  │
│   │  The simple court booking system built for tennis   │  │
│   │  clubs. Members book online. You get time back.     │  │
│   │                                                     │  │
│   │  [Get Early Access]  [See Demo]                     │  │
│   │                                                     │  │
│   │  ✓ 5 min setup  ✓ No credit card  ✓ Free trial     │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                            │
│   [HERO IMAGE: Dashboard preview, floating with shadow]    │
│                                                            │
├────────────────────────────────────────────────────────────┤
│                                                            │
│              SOCIAL PROOF BAR (logos or quotes)            │
│   "Trusted by 50+ tennis facilities nationwide"            │
│                                                            │
├────────────────────────────────────────────────────────────┤
│                                                            │
│              PAIN POINTS                                   │
│   "Sound familiar?"                                        │
│   ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐      │
│   │ ❌ Phone│  │ ❌ Paper│  │❌No-show│  │ ❌ Admin│       │
│   │  tag   │  │ sheets │  │  chaos │  │  hell  │        │
│   └─────────┘  └─────────┘  └─────────┘  └─────────┘      │
│                                                            │
├────────────────────────────────────────────────────────────┤
│                                                            │
│              FEATURES (3-4 cards)                          │
│   ┌───────────────────┐  ┌───────────────────┐            │
│   │ 📅 Online Booking │  │ 🔔 Auto Reminders │            │
│   │   Members book    │  │   No more no-shows│            │
│   │   in 30 seconds   │  │                   │            │
│   └───────────────────┘  └───────────────────┘            │
│   ┌───────────────────┐  ┌───────────────────┐            │
│   │ 📊 Dashboard      │  │ 🌐 Your Website   │            │
│   │   See everything  │  │   Professional,   │            │
│   │   at a glance     │  │   mobile-ready    │            │
│   └───────────────────┘  └───────────────────┘            │
│                                                            │
├────────────────────────────────────────────────────────────┤
│                                                            │
│              HOW IT WORKS (3 steps)                        │
│                                                            │
│   ①───────────→ ②───────────→ ③                           │
│   Add courts     Import        Launch                      │
│                 members                                    │
│                                                            │
├────────────────────────────────────────────────────────────┤
│                                                            │
│              PRICING (2 tiers)                             │
│   ┌─────────────────────┐  ┌─────────────────────┐        │
│   │      STARTER        │  │        PRO         │         │
│   │      $149/mo        │  │      $299/mo       │         │
│   │                     │  │   MOST POPULAR     │         │
│   │   • Up to 4 courts  │  │   • Up to 12 courts│         │
│   │   • Unlimited users │  │   • Priority support│        │
│   │   • Website included│  │   • Custom domain  │         │
│   │                     │  │                    │         │
│   │   [Get Started]     │  │   [Get Started]    │         │
│   └─────────────────────┘  └─────────────────────┘        │
│                                                            │
├────────────────────────────────────────────────────────────┤
│                                                            │
│              TESTIMONIALS (optional, add later)            │
│                                                            │
├────────────────────────────────────────────────────────────┤
│                                                            │
│              FAQ ACCORDION                                 │
│                                                            │
├────────────────────────────────────────────────────────────┤
│                                                            │
│              FINAL CTA                                     │
│   "Ready to reclaim your time?"                            │
│   [Get Early Access]                                       │
│                                                            │
├────────────────────────────────────────────────────────────┤
│                                                            │
│              FOOTER                                        │
│   Logo  |  Product | Company | Legal  |  © 2026           │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Hero Design Details:**
- Background: Subtle gradient from `brand-50` at top to white
- Optional: Abstract court lines pattern (very subtle, 5% opacity)
- Dashboard preview: Floating card with generous shadow, slight tilt (3-5°)
- Trust badges below CTA: small green checkmarks
- Announcement banner above nav (optional): "🎉 Now in beta — Get 3 months free"

### Admin Dashboard

```
┌────────────────────────────────────────────────────────────┐
│ SIDEBAR                 │  MAIN CONTENT                   │
│ ┌─────────────────────┐ │ ┌─────────────────────────────┐  │
│ │ 🎾 TennisHQ         │ │ │ Good morning, Mike 👋       │  │
│ │                     │ │ │                             │  │
│ │ 📊 Dashboard  ←     │ │ │ Today's Bookings            │  │
│ │ 📅 Bookings         │ │ │ ┌───────────────────────┐   │  │
│ │ 👥 Members          │ │ │ │ 12 bookings today     │   │  │
│ │ ⚙️ Settings         │ │ │ │ 3 courts in use now   │   │  │
│ │ 📈 Analytics        │ │ │ └───────────────────────┘   │  │
│ │ 🌐 Website          │ │ │                             │  │
│ │                     │ │ │ Upcoming (scrollable list)  │  │
│ │ ─────────────────── │ │ │ ┌─────────────────────────┐ │  │
│ │                     │ │ │ │ 9:00 AM — Court 1       │ │  │
│ │ Riverside Tennis    │ │ │ │ John D. vs Mike T.      │ │  │
│ │ 4 courts · 128 members│ │ └─────────────────────────┘ │  │
│ │                     │ │ │                             │  │
│ └─────────────────────┘ │ │ Quick Actions               │  │
│                         │ │ [+ Add Booking] [Block Time]│  │
│                         │ └─────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

**Admin Design Notes:**
- Dark sidebar (`slate-900`) with light nav items
- Active nav item has `brand-500` background
- Main content area: white background with subtle gray borders
- Cards have slight shadow on hover
- Data tables: clean, sortable, with subtle row hover
- Status badges: colored pills (green=confirmed, yellow=pending, red=cancelled)

### Booking Calendar (Member View)

```
┌────────────────────────────────────────────────────────────┐
│ ← Back to Club                                             │
│                                                            │
│ Book a Court                                               │
│                                                            │
│ ┌─────────────────────────────────────────────────────────┐│
│ │           February 2026                                 ││
│ │ Su  Mo  Tu  We  Th  Fr  Sa                              ││
│ │                          1                              ││
│ │  2   3   4   5   6   7   8                              ││
│ │  9  10  11  12  13  14  15                              ││
│ │ [16] 17  18  19  20  21  22   ← Today highlighted       ││
│ │ 23  24  25  26  27  28                                  ││
│ └─────────────────────────────────────────────────────────┘│
│                                                            │
│ Sunday, February 16                                        │
│                                                            │
│ Select a court:                                            │
│ ┌─────────────────────────────────────────────────────────┐│
│ │ [Court 1]  [Court 2]  [Court 3]  [Court 4]              ││
│ └─────────────────────────────────────────────────────────┘│
│                                                            │
│ Available times:                                           │
│ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐    │
│ │ 9:00AM │ │10:00AM │ │11:00AM │ │12:00PM │ │ 1:00PM │    │
│ └────────┘ └────────┘ └────────┘ └────────┘ └────────┘    │
│ ┌────────┐ ┌────────┐ ░░░░░░░░░ ░░░░░░░░░ ┌────────┐     │
│ │ 2:00PM │ │ 3:00PM │ ░ BOOKED ░ ░ BOOKED ░ │ 6:00PM │    │
│ └────────┘ └────────┘ ░░░░░░░░░ ░░░░░░░░░ └────────┘     │
│                                                            │
│ ┌─────────────────────────────────────────────────────────┐│
│ │ Your Selection:                                         ││
│ │ Court 2 · Sun Feb 16 · 10:00 AM - 11:00 AM              ││
│ │                                                         ││
│ │                              [Confirm Booking]          ││
│ └─────────────────────────────────────────────────────────┘│
└────────────────────────────────────────────────────────────┘
```

---

## ✨ Visual Polish & Micro-interactions

### Animations

```css
/* Use these motion values consistently */
:root {
  --duration-fast: 150ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
}

/* Button hover: subtle lift */
.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-brand);
}

/* Card hover: gentle lift with shadow */
.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

/* Page transitions: fade + slide */
.page-enter {
  opacity: 0;
  transform: translateY(8px);
}
.page-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: all var(--duration-normal) var(--ease-out);
}
```

### Loading States

```tsx
// Skeleton loader for cards
<div className="animate-pulse">
  <div className="h-4 bg-slate-200 rounded w-3/4 mb-2" />
  <div className="h-4 bg-slate-200 rounded w-1/2" />
</div>

// Spinner for buttons
<button disabled className="relative">
  <span className="opacity-0">Submit</span>
  <svg className="absolute inset-0 m-auto w-5 h-5 animate-spin">
    {/* spinner svg */}
  </svg>
</button>
```

### Empty States

```tsx
// Empty bookings
<div className="text-center py-12">
  <div className="w-16 h-16 mx-auto rounded-full bg-slate-100 flex items-center justify-center">
    <CalendarIcon className="w-8 h-8 text-slate-400" />
  </div>
  <h3 className="mt-4 text-lg font-medium text-slate-900">No bookings yet</h3>
  <p className="mt-2 text-slate-500">Your first booking will appear here.</p>
  <Button className="mt-6">Create Booking</Button>
</div>
```

---

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile-first approach */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
```

### Mobile Considerations

1. **Touch targets:** Minimum 44x44px for all interactive elements
2. **Bottom nav on mobile admin** instead of sidebar
3. **Full-width cards** on mobile, grid on desktop
4. **Horizontal scroll** for time slots on mobile
5. **Sticky bottom CTA** on booking flow
6. **Sheet/drawer** instead of modals on mobile

---

## ♿ Accessibility

1. **Color contrast:** 4.5:1 minimum for all text
2. **Focus states:** Visible ring on all interactive elements
3. **ARIA labels:** On icon-only buttons
4. **Keyboard navigation:** Full tab support
5. **Screen reader:** Proper heading hierarchy (h1 → h2 → h3)
6. **Motion:** Respect `prefers-reduced-motion`

---

## 🛠 Implementation Order

### Phase 1: Foundation (Day 1)
1. Set up design tokens in `tailwind.config.ts`
2. Create `globals.css` with CSS custom properties
3. Install Inter font
4. Create base `<Button>` component with variants

### Phase 2: Components (Days 2-3)
1. `<Card>` component
2. `<Input>` and `<Label>` components
3. `<Badge>` for status pills
4. `<Avatar>` for member photos
5. `<Navbar>` marketing and admin variants

### Phase 3: Landing Page (Days 4-5)
1. Hero section with gradient background
2. Pain points grid
3. Features grid with icons
4. How it works (3-step)
5. Pricing cards
6. FAQ accordion
7. Footer

### Phase 4: Admin Shell (Days 6-7)
1. Sidebar navigation
2. Dashboard layout
3. Page header pattern
4. Data table component

### Phase 5: Booking Flow (Days 8-9)
1. Calendar picker
2. Court selector
3. Time slot grid
4. Confirmation card
5. Success state

### Phase 6: Polish (Day 10)
1. Add animations
2. Loading states
3. Empty states
4. Error states
5. Mobile testing

---

## 📦 Dependencies to Install

```bash
npm install lucide-react       # Icons
npm install @headlessui/react  # Accessible primitives (tabs, modals)
npm install class-variance-authority  # Component variants
npm install clsx              # Conditional classes
npm install tailwind-merge    # Merge tailwind classes
```

---

## 🎯 Success Criteria

The design is successful when:
- [ ] Someone unfamiliar with the project says "this looks professional"
- [ ] All pages pass Lighthouse accessibility audit (90+ score)
- [ ] Mobile experience is natural, not cramped
- [ ] Visual hierarchy is clear — you know where to look
- [ ] CTAs are obvious and inviting
- [ ] Admin dashboard feels like a premium tool
- [ ] Booking flow can be completed in under 30 seconds

---

## 📎 Reference Links

- **Inspiration:** Stripe, Linear, Vercel, Notion
- **Icons:** Lucide (https://lucide.dev)
- **Colors:** Tailwind palette (https://tailwindcss.com/docs/customizing-colors)
- **Patterns:** SaaS Landing Page (https://saaslandingpage.com)
- **Components:** shadcn/ui for reference (https://ui.shadcn.com)

---

*Document created by Adam for Claude Code implementation. Questions → ask in session.*
