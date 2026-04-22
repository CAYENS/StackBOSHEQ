# BOSHEQ — Luxury Candle E-commerce

Production-ready Next.js App Router storefront + admin foundation for **bosheq.com**.

## Stack
- Next.js (App Router) + TypeScript + Tailwind + Framer Motion
- PostgreSQL + Prisma
- NextAuth credentials admin
- React Hook Form + Zod
- Zustand cart store
- Nodemailer + Telegram API integration placeholders

## Setup
```bash
npm install
cp .env.example .env
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
npm run dev
```

## Build & Run
```bash
npm run build
npm run start
```

## Architecture
- `app/` routes (storefront, checkout, admin, API)
- `components/` reusable UI/layout/shop blocks
- `lib/` domain data, auth, state, validators, prisma client
- `prisma/` schema and seed
- `config/` deployment configs

## Ubuntu VPS deployment guide
1. Install Node.js LTS, PostgreSQL, Nginx, PM2.
2. Clone project to `/var/www/bosheq`.
3. Configure `.env`.
4. Run migrations/seeds.
5. Build app and start with PM2.
6. Use `config/nginx.bosheq.conf` as site config.
7. Enable SSL:
```bash
sudo certbot --nginx -d bosheq.com -d www.bosheq.com
```

## Commands
- Dev: `npm run dev`
- Build: `npm run build`
- Start: `npm run start`
- Prisma generate: `npm run prisma:generate`
- Prisma migrate: `npm run prisma:migrate`
- Seed: `npm run prisma:seed`
