---
colors:
  primary: "#FF5722"      # Mercury Orange — the ONE accent
  canvas: "#F7F7F5"       # off-white tinted (never pure white, never #000)
  surface-1: "#FFFFFF"    # cards / elevated panels
  surface-2: "#EFEFEC"    # recessed / muted blocks
  ink: "#14110F"          # near-black tinted warm (never #000000)
  ink-muted: "#6B6764"    # secondary text
  hairline: "#E4E2DE"     # 1px borders
  success: "#16A34A"      # in-stock / availability only (functional, not decorative accent)
  warning: "#D97706"      # low-stock only
typography:
  display: "Space Grotesk, fallback sans-serif"
  body: "Inter, fallback sans-serif"
  mono: "Geist Mono, fallback monospace"
  display-tracking: "-3.5px"
  body-tracking: "0"
rounded:
  pill: "9999px"
  card: "10px"
  input: "6px"
  chip: "4px"
spacing: "4px base scale"
motion:
  duration: "0.33s"
  easing: "cubic-bezier(0.22, 1, 0.36, 1)"
---

# MERCURY — DESIGN.md

> The single source of truth for the Mercury (Automotive Spare Parts) immersive 3D website.
> Synthesized from: brand brief (orange `#FF5722` "M" mark), competitor analysis of Boodmo,
> and the Immersive 3D Website Playbook (§6 Stitch spec).

## 1. Visual Theme & Atmosphere

Mercury is a **premium technical marketplace** for automotive spare parts. The atmosphere is
**clean, precise, engineering-grade** — think a high-end auto-parts catalog crossed with a
modern SaaS dashboard, layered with a single immersive 3D hero. Light tinted canvas, one
saturated orange accent used with extreme discipline, hairline borders instead of shadows,
monospace part-numbers as a technical tell. The 3D hero provides all the depth; the rest of
the UI stays flat, fast, and legible. Restraint reads as premium. We never compete with the
content — we frame it.

## 2. Color Palette & Roles

| Token | Hex | Role |
|---|---|---|
| `primary` | `#FF5722` | **THE one accent.** CTAs, focus rings, links, active states, key price highlights, the 3D hero point-light. Never decorative. Never a second accent. |
| `canvas` | `#F7F7F5` | Page background. Off-white, warm-tinted. Never pure `#FFFFFF`. |
| `surface-1` | `#FFFFFF` | Cards, panels, navbar, dropdowns. One step up from canvas. |
| `surface-2` | `#EFEFEC` | Recessed blocks, code/part-number chips, hover-tint backgrounds. |
| `ink` | `#14110F` | Primary text. Near-black, warm-tinted. Never `#000000`. |
| `ink-muted` | `#6B6764` | Secondary text, labels, captions. |
| `hairline` | `#E4E2DE` | All 1px borders. The depth system. |
| `success` | `#16A34A` | **Functional only** — "In stock" badges. Never decorative. |
| `warning` | `#D97706` | **Functional only** — "Low stock" badges. Never decorative. |

**Accent discipline is absolute.** Orange `#FF5722` appears ONLY on: primary buttons,
focused inputs' ring, text links, active nav/tab states, the hero 3D point-light,
price numbers on featured products, and the logo "M" mark. It does NOT appear on:
section backgrounds, decorative shapes, gradients, borders (those use `hairline`),
or as a second accent "for variety."

## 3. Typography Rules

| Role | Font | Size (desktop) | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| Display XL (hero h1) | Space Grotesk | 72–96px | 600 | 0.95 | **-4.0px** |
| Display L (section h2) | Space Grotesk | 48–56px | 600 | 1.0 | **-3.0px** |
| Display M (card h3) | Space Grotesk | 24–28px | 600 | 1.15 | **-1.5px** |
| Body L | Inter | 18px | 400 | 1.55 | 0 |
| Body M | Inter | 16px | 400 | 1.55 | 0 |
| Body S | Inter | 14px | 400 | 1.5 | 0 |
| Eyebrow / label | Inter | 12px | 600 | 1.2 | +1.5px (UPPERCASE) |
| Part-number / SKU | Geist Mono | 13px | 500 | 1.3 | 0 |
| Price | Space Grotesk | 20–28px | 600 | 1.0 | -0.5px |

- Display type uses **negative letter-spacing**. This is non-negotiable and the single biggest premium tell.
- Body type uses ~0 tracking for readability.
- Uppercase eyebrows use **positive** tracking (+1.5px) — small, labeled, spaced.
- Part-numbers/SKUs always render in **monospace** — a technical, engineering tell.
- Display font `Space Grotesk` loaded via `next/font/google` with `display: swap`.
- Body font `Inter` loaded the same way.
- Mono font `Geist Mono` for part-numbers only.

## 4. Component Stylings

### Buttons
- **Primary (orange):** `bg-primary text-white`, `rounded-input` (6px), `h-11` (44px touch target),
  `font-medium text-sm`, `tracking-tight`. Hover: `brightness-110` + subtle `translate-y-[-1px]`.
  Active: `translate-y-0`. Focus-visible: 2px `primary` ring offset. NO gradient. NO shadow.
- **Secondary (ink):** `bg-ink text-canvas`, same geometry. For high-emphasis dark CTAs.
- **Ghost:** `bg-transparent text-ink`, `1px hairline border`. Hover: `bg-surface-2`.
- **Pill chips** (status only): `rounded-pill`, `text-xs`, `h-6`, `px-3`. Used for In-stock / category tags ONLY.
- Radius grammar = **6px inputs/buttons, 10px cards, 4px chips, pill = status chips only.** Never mix button radii.

### Cards (product, category, brand)
- `bg-surface-1`, `rounded-card` (10px), `1px border-hairline`.
- **Zero drop shadow by default** (surface ladder philosophy). The border IS the depth.
- One **signature shadow** allowed only on the hero product card and the 3D tilt cards:
  `shadow-[0_2px_8px_-2px_rgba(20,17,15,0.06)]` — extremely subtle, warm-tinted.
- Hover: border becomes `border-primary/40`, no scale, no lift. Subtle.

### Inputs (search, vehicle picker)
- `h-12`, `rounded-input` (6px), `1px border-hairline`, `bg-surface-1`.
- Focus: `border-primary` + `ring-2 ring-primary/15`. No glow.
- Placeholder: `text-ink-muted`.

### Navbar
- Fixed top. `bg-canvas/80 backdrop-blur-md`. `1px border-b border-hairline` appears on scroll.
- Height 64px (mobile) / 72px (desktop). Touch targets ≥44px.
- Logo "M" mark (orange) + wordmark "MERCURY" (Space Grotesk, -1px tracking) on the left.
- Center: search bar (desktop). Right: "My Garage", cart, account icons.

### Stat cards (hero stats row)
- Glassmorphism: `bg-ink/85 backdrop-blur-md text-canvas`, `1px border-white/10`, `rounded-card`.
- Used ONLY in the hero stats row over the 3D scene.

## 5. Layout Principles

- **Spacing scale:** 4px base. Common steps: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- **Max content width:** 1280px (`max-w-7xl`), centered, `px-6` mobile / `px-8` desktop.
- **Section vertical rhythm:** `py-20 md:py-28`. Generous whitespace = premium.
- **Grid:** 12-col desktop, collapses to single column on mobile. Product grid: 4-up desktop → 2-up tablet → 1-up mobile (with horizontal peek).
- **Hero:** full viewport height (`min-h-[92vh]`), 3D scene absolute behind, text centered.
- **Mobile-first:** design at 390px first, enhance to 1440px+.

## 6. Depth & Elevation

**Surface ladder + hairline borders. Zero drop shadows.** (Linear/Framer philosophy — the 3D scene already provides depth.)

- `canvas` (#F7F7F5) → base
- `surface-1` (#FFFFFF) → +1 step (cards, navbar, dropdowns)
- `surface-2` (#EFEFEC) → -1 step (recessed chips, hover tints)
- Hairline borders (`#E4E2DE`, 1px) separate every layer.

**The ONE exception:** a single signature shadow on hero/featured 3D-tilt cards:
`shadow-[0_2px_8px_-2px_rgba(20,17,15,0.06)]`. Subtle, warm-tinted, never crisp.

Never add box-shadows to: navbars, dropdowns, inputs, buttons, footers, section dividers.

## 7. Do's and Don'ts (hard constraints → copied into AGENTS.md)

### DO
- Use ONE accent color (`#FF5722`) only for CTAs, focus rings, links, active states.
- Use negative letter-spacing on ALL display type (-1.5px to -4.0px).
- Use 6px input/button radius, 10px card radius, 4px chip radius, pill = status chips only.
- Use hairline borders + surface ladder for depth. Zero shadows by default.
- Use monospace for part-numbers/SKUs.
- Use `#14110F` tinted near-black for ink, never `#000000`.
- Use `#F7F7F5` tinted off-white for canvas, never pure `#FFFFFF` as page bg.
- Respect `prefers-reduced-motion` — static poster instead of 3D animation.
- Keep the 3D scene's center clear; floating objects on the SIDES.
- Make every touch target ≥44px.
- Sticky footer: `min-h-screen flex flex-col` on root, `footer { mt-auto }`, respect `env(safe-area-inset-bottom)`.

### DON'T
- ❌ Never add a second accent color "for variety." One orange. Period.
- ❌ Never use gradient buttons or gradient text on more than 1 word.
- ❌ Never put drop shadows on every card. Surface ladder only.
- ❌ Never mix pill buttons with 6px-radius buttons. Pick one grammar.
- ❌ Never center body content — center the hero, left-align everything else.
- ❌ Never auto-rotate testimonials or carousels. Let the user control.
- ❌ Never use `#000000` true black or `#FFFFFF` pure white as page bg.
- ❌ Never use indigo, blue, or sky-blue (competitor Boodmo's palette — avoid association).
- ❌ Never use emoji as featured-item imagery. Generate real product photography.
- ❌ Never import `z-ai-web-dev-sdk` or any AI SDK in a client component.
- ❌ Never use `bun run build` for the deploy lifecycle — use `npm run build`.
- ❌ Never declare "done" without an Agent Browser screenshot proving it renders.

## 8. Responsive Behavior

| Breakpoint | Width | Behavior |
|---|---|---|
| `base` (mobile) | 390px | Single column. Hamburger nav. Search moves below logo. Hero text 44–56px. Product grid 1-up with horizontal peek. |
| `sm` | 640px | 2-col product grid. Search bar inline. |
| `md` | 768px | Tablet. 2-col product grid. Vehicle picker inline. |
| `lg` | 1024px | 3-col product grid. Full navbar with search. |
| `xl` | 1280px | 4-col product grid. Max content width. Hero text 72–96px. |
| `2xl` | 1536px | Same as xl, more whitespace. |

- Touch targets ≥44px on mobile.
- 3D scene scales down object count on mobile (`dpr={[1, 1.5]}`) for perf.
- Hero stats row stacks to 1-col on mobile, 3-col on `md+`.
- Footer columns stack to 1-col on mobile.

## 9. Agent Prompt Guide

When building any component for Mercury:

1. Re-read §7 Do's and Don'ts before writing a single line.
2. Check: does this component use a second accent? → No.
3. Check: is the display type using negative tracking? → Yes.
4. Check: is there a drop shadow where a hairline border would do? → Replace with border.
5. Check: is the touch target ≥44px? → Yes on mobile.
6. Check: does it respect `prefers-reduced-motion`? → Yes if it animates.
7. Check: is the 3D scene fighting the text? → Move objects to the sides.
8. Check: is any color not in §2? → Remove it or justify it as functional (success/warning only).

If any answer is wrong, revise before declaring done. Restraint = premium.
