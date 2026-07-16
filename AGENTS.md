# AGENTS.md — Mercury hard constraints

> Extracted from `DESIGN.md` §7. These are lint rules for the agent. Violating any of them
> is a build failure even if `npm run build` passes.

## Design discipline (non-negotiable)

1. **ONE accent color.** `#FF5722` (Mercury Orange). Used ONLY for: primary CTAs, focus rings, text links, active nav/tab states, hero 3D point-light, price numbers on featured products, and the "M" logo mark. Never decorative. Never a second accent.
2. **NO indigo, blue, or sky-blue** anywhere. (Competitor Boodmo's palette. Avoid visual association.)
3. **NO gradient buttons.** NO gradient text on more than 1 word. Solid fills only.
4. **Negative letter-spacing on ALL display type.** -1.5px to -4.0px depending on size. Body = ~0. Uppercase eyebrows = +1.5px. This is the single biggest premium tell.
5. **One radius grammar.** Inputs/buttons = 6px. Cards = 10px. Chips = 4px. Pill (9999px) = status chips ONLY. Never mix.
6. **Surface ladder + hairline borders for depth.** Zero drop shadows by default. The ONE exception: a single signature shadow `shadow-[0_2px_8px_-2px_rgba(20,17,15,0.06)]` on hero/featured 3D-tilt cards only.
7. **NO `#000000` true black.** Ink = `#14110F` (warm-tinted near-black).
8. **NO `#FFFFFF` pure white as page background.** Canvas = `#F7F7F5` (warm-tinted off-white). `#FFFFFF` is allowed only for `surface-1` (cards/panels).
9. **NO "variety for variety's sake."** Restraint = premium.
10. **Monospace for part-numbers/SKUs** (Geist Mono). Technical tell.
11. **NO emoji as featured-item imagery.** Generate real product photography via the image-generation skill.
12. **Touch targets ≥44px** on mobile.
13. **Sticky footer mandatory.** Root wrapper `min-h-screen flex flex-col`, footer gets `mt-auto`, must respect `env(safe-area-inset-bottom)`.

## Code discipline (non-negotiable)

1. **Next.js 16 App Router + TypeScript 5 strict.** Non-negotiable.
2. **`"use client"` at the top of any file using hooks/browser APIs.** Server Components by default.
3. **`z-ai-web-dev-sdk` (and any AI SDK) is backend-only.** Never import in client components.
4. **No backend unless explicitly requested.** Default to static. Orders/forms route to WhatsApp / `mailto:` / external endpoints.
5. **Use existing shadcn/ui components in `src/components/ui/`** — don't rebuild from scratch.
6. **Images in `/public/images/`.** Generate premium photography via the image-generation skill.
7. **3D scenes via `@react-three/fiber` + `@react-three/drei`.** Lazy-load below the fold.
8. **2D animation via `framer-motion`.** Universal timing: `0.33s cubic-bezier(0.22, 1, 0.36, 1)`.
9. **`prefers-reduced-motion` respected.** Static poster instead of 3D animation. Mandatory for a11y.
10. **LCP element is the hero `<h1>`.** `font-display: swap`, preload the display font. Scene initializes after first paint.

## Package manager discipline (Vercel-critical)

- Local dev: `bun run dev` (fine for speed).
- **Pre-deploy verification: ALWAYS `npm run build`.** Commit `package-lock.json`.

## Quality gates (nothing ships until ALL pass)

```bash
bun run lint                  # 0 errors
npx tsc --noEmit              # 0 errors
bun run build                 # exits 0
# + Agent Browser: 0 console errors, golden path works, mobile + desktop verified
# + VLM audit: hero ≥8/10, no broken images, no layout issues
# + Sticky footer confirmed (footer.bottom <= innerHeight on short pages)
```

"It compiles" / "the server is up" is NEVER sufficient evidence of completion.
Browser-verified interactivity is the required standard of done.

## Workflow for every non-trivial component (Playbook §12 Template A)

```
LOOP: build-component
  PLAN:     what this component does, what props/state, where it sits
  ACT:      one concrete edit (surgical, not full-file rewrite)
  OBSERVE:  does it render? (dev server / Agent Browser screenshot)
  CRITIQUE: check against DESIGN.md §7 — accent? radius? motion? mobile? a11y?
  REFINE:   fix every CRITIQUE point
  EXIT when: renders + matches DESIGN.md + mobile-OK + a11y-OK
```
