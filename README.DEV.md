# Dev notes — Maaro Bihar Clothing

Next.js 14 App Router, TypeScript, Tailwind. No backend in this milestone — order capture is client-side, submission is a `wa.me` deep link.

## Structure

```
app/
  layout.tsx        fonts, theme provider, nav/footer shell
  page.tsx           home: hero + founder + preview grid
  shop/page.tsx       full catalog page
components/
  Hero, AboutFounder, ProductGrid, ProductCard, OrderModal
  Navbar, Footer, ThemeProvider, ThemeToggle
data/
  brand.ts            all business copy — name, tagline, address, phones, categories
  products.ts          catalog — single source of truth, no CMS yet
lib/
  whatsapp.ts          builds the order message + wa.me link
  utils.ts             cn() helper
```

Content lives in `data/`, not scattered through components — edit copy/products there, never hunt through JSX.

## Design tokens

- Colors: `maroon` (#7C1D2A, primary), `gold` / `gold-bright` (#C8912F / #E0AC4C, accent), `cream` (#F6EEDD, light bg), `ink` (#211712/#1A120E, dark bg + text) — defined in `tailwind.config.ts`.
- Type: `font-display` = Yatra One (headlines, Devanagari-capable), `font-body` = Mukta (everything else, Devanagari-capable). Both loaded via `next/font/google`, no external font requests.
- No shadcn/generic-card kit — product cards use a clipped "price tag" corner (`.tag-card` in `globals.css`) instead of uniform rounded shadow cards.

## Order flow (current)

`OrderModal` collects size/qty/name/address/phone → `lib/whatsapp.ts` formats it into one message → opens `wa.me/<NEXT_PUBLIC_WHATSAPP_NUMBER>?text=...` in a new tab. Nothing is persisted; the phone owner's WhatsApp is the order log.

## Known gaps / next milestones

1. **Real product photos.** `public/products/*.svg` are placeholder illustrations, not photos. Swap files or repoint `image` in `data/products.ts` once the owner sends real shots. For an actual upload UI (owner adds products himself without a redeploy), you'll need:
   - Object storage (Vercel Blob or S3) for images
   - A minimal admin route + auth (NextAuth, per the usual stack) or a headless CMS
   - Move `products` from a static file into Postgres (Neon/Supabase) via Prisma
2. **Order persistence / email fallback.** If WhatsApp-only turns out to be fragile (owner misses messages), add an `/api/order` route that also emails via Resend, or logs to the DB, before opening the WhatsApp link.
3. **Real catalog data.** Current 8 SKUs are placeholders across the 4 categories in `data/brand.ts`. Confirm actual price list and sizes with the client before replacing.
4. **SEO/OG images, sitemap** — not set up yet, low priority until content is real.

## Conventions carried over from other Velvex Labs projects

Config-driven content files, no placeholder logic in things that must actually work (the WhatsApp link is fully functional, not a stub), Resend instantiated per-request if/when email is added, credentials only in `.env.local` / Vercel env vars — never committed.
