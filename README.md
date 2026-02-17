# Tennis SaaS MVP

MVP platform for tennis clubs covering:
- Court booking
- Member management
- Club website generation
- Email notifications
- Admin dashboard and scheduling operations

## Stack

- Next.js 14 (App Router)
- Prisma + PostgreSQL (Supabase-compatible)
- Supabase Auth (magic link compatible)
- Resend email
- Vercel hosting + cron endpoints

## Quick Start

1. Install dependencies

```bash
npm install
```

2. Configure environment

```bash
cp .env.example .env.local
```

3. Run migrations and seed

```bash
npm run db:migrate
npm run db:seed
```

4. Start app

```bash
npm run dev
```

## Multi-tenant routing

- `admin.<BASE_DOMAIN>` rewrites to `/admin`
- `<club-slug>.<BASE_DOMAIN>` rewrites to `/club/[slug]`

## API Endpoints (MVP)

### Admin
- `POST /api/admin/clubs`
- `POST /api/admin/clubs/:clubId/courts`
- `GET /api/admin/clubs/:clubId/hours`
- `PUT /api/admin/clubs/:clubId/hours`
- `PUT /api/admin/clubs/:clubId/settings`
- `GET /api/admin/members?clubId=&q=`
- `POST /api/admin/members`
- `PUT /api/admin/members/:memberId`
- `DELETE /api/admin/members/:memberId`
- `POST /api/admin/members/import`
- `GET /api/admin/bookings?clubId=&from=&to=`
- `POST /api/admin/bookings` (block slot)

### Member
- `GET /api/club/:slug/availability?date=YYYY-MM-DD`
- `POST /api/club/:slug/bookings`
- `PATCH /api/club/:slug/bookings` (cancel)
- `GET /api/club/:slug/my-bookings?memberId=`
- `POST /api/club/:slug/parse-time`
- `GET /api/club/:slug/public-profile`

### V2 Scaffolding
- `GET/POST /api/billing/plans`
- `GET/POST /api/billing/subscriptions`
- `GET /api/lessons/availability`
- `POST /api/lessons/bookings`

### Cron
- `POST /api/cron/send-reminders`
- `POST /api/cron/admin-daily-digest`

All cron endpoints require `Authorization: Bearer <CRON_SECRET>`.

## Notes

- Current UI is functional MVP scaffolding with API-first flows.
- Manual club provisioning is supported as planned.
- Branding remains environment-configurable (`APP_NAME`, `BASE_DOMAIN`).
