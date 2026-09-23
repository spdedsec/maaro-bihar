# Maaro Bihar Clothing — Website

A catalog-and-order storefront for Maaro Bihar Clothing (Danapur, Patna).

## What this is

- Hero page — brand, founder story, factory-rate pitch
- Shop page — full catalog, filterable by category
- Order flow — pick size + quantity, enter name/address/phone, order goes straight to the owner's WhatsApp as a pre-filled message
- Light and dark mode
- Hindi + English throughout, set in a Devanagari-capable typeface

## Run it locally

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_WHATSAPP_NUMBER
npm run dev
```

Open http://localhost:3000

## Deploy

Push to GitHub, import into Vercel, set `NEXT_PUBLIC_WHATSAPP_NUMBER` in Vercel's Environment Variables. No database or server needed for this version — orders go directly to WhatsApp.

## Updating products

Edit `data/products.ts`. Each product needs a name, category, price, sizes, and an image path under `/public/products/`. Placeholder illustrations are in place — swap in real photos with the same filenames (or update the `image` path) whenever the owner sends them.

See `README.DEV.md` for structure and what to build next.
