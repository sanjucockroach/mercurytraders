# Mercury Traders — Immersive 3D Auto-Parts Website

> India's premium marketplace for genuine automotive spare parts.
> Built following **The Immersive 3D Website Playbook** — Next.js 16, React Three Fiber, TypeScript 5, Tailwind CSS 4, shadcn/ui.

## Business

- **Name:** Mercury Traders
- **Address:** 1556, A Church Road, Kashmere Gate, Delhi - 110006
- **Phone / WhatsApp:** +91 84476 66288
- **Email:** sales@mercurytraders.in

## Features

- **3D hero** — floating auto-part objects (gear, brake disc, piston, bolt, bearing) + a 3D "M" mark, framing centered display type. `prefers-reduced-motion` → static poster fallback.
- **Search-by-Vehicle** — Make/Model/Year cascading picker + number-plate decoder.
- **12 part categories** with 3D tilt cards.
- **6 featured products** with real AI-generated photography, add-to-cart, stock badges, ratings.
- **23 parts brands** (Bosch, Denso, NGK, Brembo…) + 14 car makers (Maruti to MG).
- **Lead-gen chatbot** — floating assistant that walks visitors through collecting their details (name, phone, vehicle, part needed) and sends the lead directly to WhatsApp `+91 84476 66288`. **No LLM, no backend.**
- **WhatsApp checkout** — cart builds a WhatsApp order URL with SKU/brand/qty/subtotal. **No backend, no payment gateway.**
- **Full SEO** — metadata, OpenGraph, Twitter cards, JSON-LD (AutoPartsStore schema), sitemap, robots, manifest.
- **Sticky footer** — `mt-auto`, respects `env(safe-area-inset-bottom)`.

## Design discipline (per Playbook)

- **ONE accent:** `#FF5722` (Mercury Orange) — CTAs, focus rings, links, 3D point-light only.
- **Negative letter-spacing** on all display type (-3.5px to -4.5px).
- **Precision radius grammar:** 6px inputs/buttons, 10px cards, 4px chips, pill = status chips only.
- **Surface ladder + hairline borders** for depth — zero drop shadows by default (one signature shadow on 3D tilt cards).
- **Tinted canvas** `#F4F2EE` + **tinted ink** `#14110F` (never pure black/white).
- **Monospace part-numbers/SKUs** (Geist Mono) — technical tell.
- **Universal motion:** `0.33s cubic-bezier(0.22, 1, 0.36, 1)`.

## Tech stack

- **Framework:** Next.js 16 (App Router) + TypeScript 5 (strict)
- **Styling:** Tailwind CSS 4 + shadcn/ui (New York)
- **3D:** Three.js via `@react-three/fiber` + `@react-three/drei`
- **2D animation:** Framer Motion
- **State:** Zustand (persisted cart)
- **Icons:** lucide-react
- **Fonts:** Space Grotesk (display) + Inter (body) + Geist Mono (part-numbers)

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Quality gates (Playbook §5.4)

```bash
npm run lint     # 0 errors
npx tsc --noEmit # 0 errors
npm run build    # exits 0
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # fonts + SEO metadata + JSON-LD
│   ├── page.tsx            # the one user-visible route
│   ├── globals.css         # Mercury design tokens + animations
│   ├── sitemap.ts          # → /sitemap.xml
│   ├── robots.ts           # → /robots.txt
│   └── manifest.ts         # → /manifest.webmanifest
├── components/
│   ├── mercury-mark.tsx    # SVG logo
│   ├── navbar.tsx
│   ├── cart-drawer.tsx     # WhatsApp checkout
│   ├── lead-chatbot.tsx    # lead-gen chatbot → WhatsApp
│   ├── hero-scene.tsx      # React Three Fiber 3D scene
│   └── sections/
│       ├── hero.tsx
│       ├── marquee.tsx
│       ├── search-vehicle.tsx
│       ├── categories.tsx
│       ├── featured-products.tsx
│       ├── brands.tsx
│       ├── why-mercury.tsx
│       ├── how-it-works.tsx
│       ├── stats.tsx
│       ├── articles.tsx
│       ├── testimonials.tsx
│       ├── contact.tsx
│       └── footer.tsx
└── lib/
    ├── catalog-data.ts     # categories, brands, products, testimonials
    ├── cart-store.ts       # Zustand + WhatsApp checkout URL builder
    ├── format.ts           # INR currency formatting
    └── utils.ts            # cn() helper
public/
├── mercury-mark.svg        # favicon / nav mark
├── mercury-wordmark.svg    # horizontal lockup
├── mercury-logo.svg        # full vertical lockup
└── images/                 # AI-generated hero + product photography
```

## No-backend architecture

This site is **frontend-only**. All "orders" and "leads" route to WhatsApp — no API routes, no database at runtime, no environment variables required.

- Cart checkout → `https://wa.me/918447666288?text=...` (with order details)
- Lead-gen chatbot → `https://wa.me/918447666288?text=...` (with lead details)
- Contact section → WhatsApp / `tel:` / `mailto:` links

---

© Mercury Traders · 1556, A Church Road, Kashmere Gate, Delhi - 110006 · +91 84476 66288
