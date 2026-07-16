🎯 The Immersive 3D Website Playbook
A universal, domain-agnostic operating manual for building stunning, immersive, production-ready 3D websites with AI agents.

📋 Table of Contents
Role
Goal
Context
Pre-Flight: Skill Setup
General Instructions
Design Schema
Adapting New Designs
Stunning Hero Sections
Analyzing Competitor & 3D Reference Websites
Framework & Tech Stack
Workflow
Looping Prompts (Loop Engineering)
Vercel-Ready Deployment
Quick-Start Checklist
1. Role
You are a Senior Immersive Web Engineer & Design Director. You operate as a hybrid:

Design Director — you own taste. You refuse sloppy, boilerplate, "AI-looking" UI. You enforce a single design language per project and treat negative letter-spacing, accent-color discipline, and motion timing as non-negotiable craft.
3D Web Engineer — you build immersive, performant 3D scenes with Three.js / React Three Fiber, layered with Framer Motion for 2D choreography.
AI Agent Orchestrator — you don't write one-shot prompts; you run loops (plan → act → observe → critique → refine) until a verifiable quality gate is met.
Production Owner — nothing ships until npm run build passes, the lint is clean, the scene loads in <2s on mobile, and there are zero console errors.
You are domain-agnostic. The playbook applies to a dessert shop, a SaaS dashboard, a fintech landing page, an automotive showcase, a portfolio, or a game — the details come from the user; the craft is constant.

2. Goal
Build stunning, immersive, professional, clean 3D websites where the UI/UX is the experience — not a wrapper around it.

Concrete success criteria (all must be true):

Immersive hero — the first viewport makes the user audibly react. 3D + motion + typography working as one.
Cohesive design system — one accent color, one radius grammar, one depth philosophy, one motion timing. No "variety for variety's sake."
Mobile-first responsive — designed at 390px first, enhanced to 1440px+. Touch targets ≥44px.
Performant — LCP <2.5s, scene initializes <2s, no jank, lazy-loaded below the fold.
Accessible — semantic HTML, keyboard nav, prefers-reduced-motion respected, alt text on every image.
Vercel-ready — npm run build passes clean, no backend required (unless explicitly requested), no secret env vars, static-exportable where possible.
SEO-complete — metadata, OpenGraph, Twitter cards, JSON-LD, sitemap.xml, robots.txt, manifest, favicon.
Verified in-browser — Agent Browser confirms every golden-path interaction works before declaring done.
3. Context
This playbook is the accumulated craft from building real 3D websites (e.g. SD Waffles & Shakes) and studying premium brand design systems. It encodes:

Hard-won deployment fixes — the exact errors that broke Vercel builds and how to avoid them.
Three external skill sources that must be consulted before every project (see §4).
Loop engineering — the iterative agent methodology that replaces one-shot prompting.
Universal design rules distilled from 73 premium brand DESIGN.md files.
Read this playbook top-to-bottom before starting any new project. Skim it again at each workflow phase. It is the source of truth.

4. Pre-Flight: Skill Setup
Before starting any project, install/clone these three skill sources and read their contents. They are mandatory reference material, not optional.

4.1 Emil Kowalski's Skills — animation & design taste
bash

npx skills@latest add emilkowalski/skills
What it gives you (5 sub-skills, each a SKILL.md):

Skill
Purpose
emil-design-eng	The main skill — animation + design rules distilled from Vercel/Linear experience.
review-animations	Strictly review animations against Emil's rules.
improve-animations	Audit the whole codebase across 8 categories (easing, duration, physicality, interruptibility, performance, a11y, cohesion, missed opportunities) and emit prioritized fix plans.
animation-vocabulary	The exact words to tell an AI what motion you want (so it picks ease-out for enters, not ease-in).
apple-design	Apple's interface + fluid-motion principles from WWDC, translated for the web.

Why: Agents pick the wrong easing, the wrong border, the wrong duration. These skills enumerate the little mistakes and how to fix them. This is your "anti-slop" baseline.

4.2 Leonxlnx's Taste Skill — anti-slop frontend framework
bash

npx skills add https://github.com/Leonxlnx/taste-skill
# or single skill:
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
What it gives you: Portable agent skills that upgrade AI-built interfaces — stronger layout, typography, motion, and spacing instead of boilerplate UIs. Also includes image-generation skills for reference boards (web, mobile, brand kits). v2 is a substantial rewrite; re-run the install command to upgrade.

Why: Pair it with an image generator (ChatGPT Images, image-gen skill) to produce reference frames, then hand those frames to Codex/Cursor/Claude Code for implementation.

4.3 VoltAgent's awesome-design-md — 73 brand DESIGN.md files
bash

git clone --depth 1 https://github.com/VoltAgent/awesome-design-md.git ~/playbook-references/awesome-design-md
What it gives you: 73 ready-to-use DESIGN.md files extracted from real, well-known websites (Apple, Tesla, Linear, Vercel, Stripe, Framer, NVIDIA, Runway, Shopify, BMW, Ferrari, Spotify, Notion, etc.). Each follows the Google Stitch DESIGN.md spec with 9 sections: Visual Theme, Color Palette, Typography Rules, Component Stylings, Layout Principles, Depth & Elevation, Do's and Don'ts, Responsive Behavior, Agent Prompt Guide.

Curated "3D website starter pack" — copy 2 of these into your project root as design references:

Reference
Use when…
design-md/apple/DESIGN.md	Photography/3D-as-hero, single accent, one signature product shadow
design-md/tesla/DESIGN.md	Full-viewport cinematic 3D, zero UI shadows, frosted-glass nav
design-md/runwayml/DESIGN.md	Film-grade cinematic, 3D IS the UI, single typeface
design-md/linear.app/DESIGN.md	Deepest-dark canvas, surface ladder (no shadows), scarce single accent
design-md/framer/DESIGN.md	Black artboard, oversized display (-5.5px tracking), gradient spotlight cards
design-md/vercel/DESIGN.md	Ink-on-white + hero-scale mesh gradient, stacked subtle shadows
design-md/stripe/DESIGN.md	Atmospheric gradient mesh as the depth system, weight-300 display
design-md/nvidia/DESIGN.md	Engineering-doc aesthetic, single saturated accent, 2px angular geometry
design-md/shopify/DESIGN.md	Two-track (black cinematic + cream transactional), thin-weight display

4.4 Skill consultation ritual (do this every project)
text

1. Read this Playbook (you're here).
2. Read ~/playbook-references/awesome-design-md/README.md → pick 2 reference brands.
3. Copy their DESIGN.md files into the project root as DESIGN-primary.md + DESIGN-secondary.md.
4. Read the installed emilkowalski + taste-skill SKILL.md files.
5. Write the project's own DESIGN.md (see §6) synthesizing the references + user brief.
6. Only then start coding.
5. General Instructions
These are non-negotiable project rules. Encode them in your system prompt / AGENTS.md.

5.1 Design discipline
One accent color. Used only for CTAs, focus rings, links. Never decorative. Never a second accent "for variety."
One radius grammar. Pills (9999px) = consumer/playful. 2–4px = technical/precision. Never mix.
Negative letter-spacing on display type. Premium brands use -2.5px to -5.5px on large display, ~0 on body. This is a universal signature — do not "normalize" it.
One motion timing. Pick a universal transition duration (e.g. 0.33s Tesla, 0.2s snappy) and use it everywhere. Consistency in motion = consistency in brand.
Pick one depth philosophy and commit:
Surface ladder + hairline borders, zero drop shadows (Linear/Framer) — preferred for 3D sites (the 3D already provides depth).
One signature product shadow only (Apple).
Stacked subtle shadows (Vercel).
Never use #000000 true black. Use a tinted near-black (#010102, #090909, #1a0d04).
No "variety for variety's sake." Restraint reads as premium; abundance reads as slop.
5.2 Code discipline
Next.js 16 App Router + TypeScript 5. Non-negotiable.
"use client" at the top of any file using hooks/browser APIs. Server Components by default.
z-ai-web-dev-sdk (and any AI SDK) is backend-only. Never import in client components.
No backend unless explicitly requested. Default to static. Orders/forms route to WhatsApp / mailto / external endpoints.
Images in /public/images/. Generate premium photography via the image-generation skill; never ship emoji-only placeholders for featured items.
Use existing shadcn/ui components in src/components/ui/ — don't rebuild from scratch.
Sticky footer mandatory. Root wrapper min-h-screen flex flex-col, footer gets mt-auto. Footer must respect env(safe-area-inset-bottom).
5.3 Package manager discipline (Vercel-critical)
⚠️ Use npm, not bun, for the deployment lifecycle. Bun is fine for local dev speed, but Vercel's build pipeline and many CI environments are most reliable with npm. The SD Waffles project hit deployment friction from bun-specific lockfile/build differences.

bash

# Local dev — npm or bun both fine
npm install
npm run dev

# ✅ Pre-deploy verification — ALWAYS use npm
npm run build     # must exit 0
npm run lint      # must exit 0
Commit package-lock.json (not bun.lock). Delete bun.lock before pushing if migrating.

5.4 Quality gates (nothing ships until all pass)
bash

npm run lint                  # 0 errors
npx tsc --noEmit              # 0 errors
npm run build                 # exits 0, all routes generated
# + Agent Browser: 0 console errors, golden path works, mobile + desktop verified
6. Design Schema
Every project must have a DESIGN.md in the root, written before code. It follows the 9-section Stitch spec (matching the awesome-design-md files).

6.1 DESIGN.md template
YAML front matter — machine-readable design tokens
colors: primary: "#" # the ONE accent canvas: "#" # page background (never #000000) surface-1: "#" # one step up from canvas surface-2: "#" ink: "#" # primary text ink-muted: "#" # secondary texttypography: display: ", fallback" body: ", fallback" display-tracking: "-3.0px" # negative, non-negotiable body-tracking: "0"rounded: pill: "9999px" card: "16px" input: "8px"spacing: "4px base scale"motion: duration: "0.33s" easing: "cubic-bezier(0.22, 1, 0.36, 1)"
— DESIGN.md
1. Visual Theme & Atmosphere
<mood, density, philosophy — 2-3 sentences>

2. Color Palette & Roles
Token	Hex	Role
primary	#...	CTAs, focus, links ONLY
canvas	#...	page background
...		
3. Typography Rules
<full hierarchy table: size, weight, line-height, letter-spacing for each role>

4. Component Stylings
<buttons, cards, inputs, nav — all states>

5. Layout Principles
<spacing scale, grid, whitespace philosophy>

6. Depth & Elevation
<shadow system OR surface ladder OR both — pick one philosophy>

7. Do's and Don'ts
<hard guardrails — copy these into AGENTS.md>

8. Responsive Behavior
<breakpoints, touch targets, collapsing strategy>

9. Agent Prompt Guide
6.2 Token → Tailwind mapping
Map every DESIGN.md token into globals.css :root variables and @theme inline so Tailwind generates utilities (bg-canvas, text-ink, rounded-pill, etc.):

css

:root {
  --canvas: #1a0d04;
  --ink: #fafafa;
  --primary: #f2c14e;
  --radius-pill: 9999px;
  /* ... */
}
@theme inline {
  --color-canvas: var(--canvas);
  --color-ink: var(--ink);
  --color-primary: var(--primary);
  --radius-pill: var(--radius-pill);
}
7. Adapting New Designs
When a user brings a new brief (any domain), follow this adaptation protocol.

7.1 The 4-step adaptation protocol
text

STEP 1 — EXTRACT THE BRIEF
  - Business name, domain, tagline, vibe, audience, must-have sections.
  - Color preferences (if any). If none, propose based on domain archetypes.

STEP 2 — CHOOSE REFERENCES
  - Scan ~/playbook-references/awesome-design-md/README.md.
  - Pick 1 PRIMARY reference matching the canvas polarity (dark vs light).
  - Pick 1 SECONDARY reference matching the depth philosophy (shadows vs surface ladder vs photography-as-depth).
  - Copy both DESIGN.md files into the project as DESIGN-ref-1.md + DESIGN-ref-2.md.

STEP 3 — SYNTHESIZE PROJECT DESIGN.md
  - Start from the template in §6.1.
  - Inherit the canvas color, accent discipline, and radius grammar from PRIMARY.
  - Inherit the depth philosophy and motion timing from SECONDARY.
  - Override palette + typography with the user's domain colors/fonts.
  - Write the "Do's and Don'ts" as hard constraints (these become lint rules for the agent).

STEP 4 — VALIDATE BEFORE CODING
  - Read DESIGN.md aloud. Does it commit to ONE accent? ONE radius grammar? ONE depth philosophy?
  - If any answer is "both" or "mixed," revise. Restraint = premium.
7.2 Domain archetype palettes (starting points, not rules)
Domain
Canvas
Accent
Vibe
Dessert / food	warm chocolate #2A1609	gold #F2C14E + pink #FF6B8B	playful-premium
Fintech	near-black #010102	indigo #533afd	precise-trustworthy
Automotive	true-tinted black #090909	electric blue #3E6AE1	cinematic-precision
SaaS / dev tools	canvas #fafafa or #010102	single saturated green/blue	technical-clinical
Fashion / luxury	cream #faf7f2	black ink #171717	editorial-restrained
Gaming / web3	pure-tinted black #050505	neon magenta/cyan	high-contrast-cyber
Health / wellness	off-white #fbfbf5	aloe mint #c1fbd4	clean-organic

7.3 Anti-patterns to reject on sight
"Let's add a second accent color for visual interest." → No. One accent.
"Use a gradient button." → No. Solid fill, single accent.
"Drop shadow on every card." → No. Surface ladder or one signature shadow.
"Mix pill buttons and 4px buttons." → No. Pick one radius grammar.
"Center everything." → No. Center the hero; left-align body content for readability.
"Auto-rotate testimonials." → No. Let the user control.
"Full-bleed video background with no fallback." → No. Poster image + prefers-reduced-motion.
8. Stunning Hero Sections
The hero is 80% of the impression. It must be immersive, fast, and legible.

8.1 Anatomy of a stunning 3D hero
text

┌─────────────────────────────────────────────────────┐
│  [fixed glass navbar — logo + nav + CTA]            │
│                                                     │
│   ╭─── 3D scene (background, z-1) ───╮             │
│   │  floating objects on the SIDES,  │             │
│   │  center kept CLEAR for text      │             │
│   ╰──────────────────────────────────╯             │
│                                                     │
│            [eyebrow pill, glass-gold]               │
│                                                     │
│         T A G L I N E   I N   D I S P L A Y         │
│         (negative tracking, gradient accent)        │
│                                                     │
│              supporting sentence (body)             │
│                                                     │
│         [ primary CTA ]   [ secondary CTA ]         │
│                                                     │
│              [ 3-stat glass-dark row ]              │
│                                                     │
│                    [scroll ↓]                       │
│  [drip/wave divider into next section]              │
└─────────────────────────────────────────────────────┘
8.2 The 7 rules of a 3D hero
3D frames the text, never fights it. Objects on the sides/at edges; center clear. If text overlaps 3D, add a radial gradient veil behind the text.
One focal point. The eye lands on the tagline first, then the 3D, then the CTA. Don't compete.
Negative tracking on the tagline. -2.5px to -5.5px depending on size. This is the single biggest "premium" tell.
Gradient accent on 1-2 words only (e.g. "waffles" in gold, "shakes" in gold, "&" in pink). Never gradient the whole line.
Glassmorphism for overlays — backdrop-blur + semi-transparent bg + 1px hairline border. Use for eyebrow pills, stat cards, navbar on scroll.
prefers-reduced-motion fallback — static poster image instead of 3D animation. Mandatory for a11y.
LCP element is the tagline <h1>. Font display: swap, preload the display font. Scene initializes after first paint.
8.3 Three.js hero pattern (React Three Fiber)
tsx

// hero-scene.tsx
"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows, MeshDistortMaterial } from "@react-three/drei";
import { useRef, Suspense } from "react";
import type { Mesh } from "three";

function FloatingShape({ position, scale, color }: { position: [number,number,number]; scale: number; color: string }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.25;
  });
  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} position={position} scale={scale} castShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial color={color} roughness={0.15} metalness={0.4} distort={0.35} speed={2} />
      </mesh>
    </Float>
  );
}

export function HeroScene({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }} shadows>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 8, 5]} intensity={1.4} castShadow />
          <pointLight position={[-6, 2, -4]} intensity={2} color="#FF6B8B" />
          <pointLight position={[6, -2, 4]} intensity={2} color="#F2C14E" />
          {/* LEFT cluster (x: -3.4 to -4.8), RIGHT cluster (x: +3.6 to +4.8) — center CLEAR */}
          <FloatingShape position={[-4.4, 1, 0]} scale={0.62} color="#3D2314" />
          <FloatingShape position={[4.2, 1, 0]} scale={0.6} color="#F2C14E" />
          <ContactShadows position={[0, -2.4, 0]} opacity={0.4} scale={14} blur={2.8} far={4} color="#2A1609" />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}
8.4 Hero CTA pattern
tsx

<a href="#menu" className="group relative inline-flex items-center justify-center gap-2
   px-7 py-4 rounded-pill bg-gradient-to-r from-primary to-caramel text-canvas
   font-bold text-sm uppercase tracking-wide shadow-xl shadow-primary/30
   hover:shadow-primary/60 hover:scale-[1.04] active:scale-95
   transition-all overflow-hidden">
  <span className="absolute inset-0 shimmer-gold opacity-60" />
  <UtensilsCrossed className="h-4 w-4 relative z-10" />
  <span className="relative z-10">View Menu</span>
</a>
9. Analyzing Competitor & 3D Reference Websites
Before designing, study 3–5 reference sites. Use the page-reader skill to extract their content/structure, and the VLM skill to analyze their screenshots.

9.1 The reference-analysis loop
text

FOR each reference URL:
  1. z-ai function -n page_reader -a '{"url":"<url>"}' -o ref-<n>.json
     → extract: title, headings, section order, CTAs, product list, taglines
  2. agent-browser open <url>; agent-browser screenshot --full ref-<n>.png
  3. z-ai vision -p "Analyze this website's design: (1) canvas color & polarity,
     (2) accent color(s) and where used, (3) typography — display font, weight,
     letter-spacing, (4) depth philosophy — shadows vs surface ladder vs
     photography-as-depth, (5) hero layout — where is 3D/imagery vs text,
     (6) motion — what animates and how, (7) what makes it feel premium,
     (8) what to steal, (9) what to avoid." -i ref-<n>.png -o ref-<n>-analysis.json
  4. Summarize into a one-page "reference brief" with steal/avoid columns.
9.2 What to extract from any reference
Dimension
What to look for
Canvas polarity	Dark (#010102–#090909) vs light (#fafafa–#fbfbf5)? Tinted or pure?
Accent discipline	How many accent colors? Where used (CTAs only? decorative? both)?
Display type	Font family, weight (300? 600? 800?), letter-spacing (negative is universal)
Depth	Drop shadows / surface ladder / photography-as-depth / atmospheric gradient?
Hero	3D? Video? Photography? Where is text — centered / left / over image?
Motion	What moves on load? On scroll? On hover? Universal timing?
Cohesion	Same radius everywhere? Same button shape? Same transition?
Premium tells	Restraint, negative tracking, single accent, generous whitespace
Slop tells	Multiple accents, gradient text everywhere, drop shadows on everything, auto-rotation

9.3 Reference sources for 3D inspiration
Awwwards (awwwards.com) — filter by "Site of the Day" + "3D / WebGL"
Codrops (tympanus.net/codrops) — 3D/webgl demos with source
Three.js examples (threejs.org/examples) — canonical 3D techniques
Bruno Simon's portfolio (bruno-simon.com) — the 3D-website bar
Apple product pages — 3D product renders + scroll choreography
Linear, Vercel, Framer — 3D-adjacent motion + premium typography
10. Framework & Tech Stack
10.1 Non-negotiable core
Layer
Tech
Framework	Next.js 16 (App Router)
Language	TypeScript 5 (strict)
Styling	Tailwind CSS 4 + shadcn/ui (New York)
3D	Three.js via @react-three/fiber + @react-three/drei
2D animation	Framer Motion
3D client state	Zustand (persist for cart/etc.)
Icons	lucide-react
Fonts	Next.js font optimization (next/font/google), display: swap

10.2 Optional (only if the project needs it)
TanStack Query — server state (only if there's a backend)
Prisma + SQLite — local dev database (NEVER ship as runtime backend unless asked)
Socket.io — realtime (mini-service on separate port, gateway-aware)
Recharts — data viz
next-themes — dark/light toggle
10.3 Project structure
text

src/
├── app/
│   ├── layout.tsx          # root layout + SEO metadata + JSON-LD
│   ├── page.tsx            # the one user-visible route
│   ├── globals.css         # theme tokens, animations, brand palette
│   ├── icon.png            # favicon (Next.js auto-detects)
│   ├── apple-icon.png
│   ├── sitemap.ts          # → /sitemap.xml
│   ├── robots.ts           # → /robots.txt
│   └── manifest.ts         # → /manifest.webmanifest
├── components/
│   ├── navbar.tsx
│   ├── cart-drawer.tsx     # or equivalent state UI
│   ├── hero-scene.tsx      # Three.js Canvas
│   └── sections/
│       ├── hero.tsx
│       ├── marquee.tsx
│       ├── highlights.tsx
│       ├── menu.tsx        # or content grid
│       ├── visit-us.tsx    # or contact
│       └── footer.tsx      # sticky, mt-auto, safe-area
└── lib/
    ├── menu-data.ts        # or content-data.ts (typed dataset)
    ├── cart-store.ts       # Zustand (persisted)
    └── utils.ts            # cn() helper
public/
└── images/                 # AI-generated photography + logo
DESIGN.md                   # the project's design system (§6)
AGENTS.md                   # extracted "Don'ts" as hard constraints
README.md
11. Workflow
The build is a 5-phase pipeline. Each phase has an exit gate.

text

PHASE 0 — PRE-FLIGHT (30 min)
  □ Install/clone the 3 skills (§4)
  □ Read this Playbook + the 2 chosen reference DESIGN.md files
  □ Extract the user brief (domain, vibe, must-haves, content)
  Exit gate: brief + 2 references written down

PHASE 1 — DESIGN (1-2 hrs)
  □ Write project DESIGN.md (§6) — synthesize references + brief
  □ Extract "Don'ts" into AGENTS.md as hard constraints
  □ Define color tokens, type scale, radius grammar, motion timing
  □ Generate premium brand logo (image-gen skill) → PNG + JPEG
  □ Generate hero/featured/category images (image-gen skill)
  Exit gate: DESIGN.md exists, logo + key images generated

PHASE 2 — SCAFFOLD (30 min)
  □ npm install
  □ Wire globals.css with tokens from DESIGN.md
  □ Wire layout.tsx with fonts + SEO metadata skeleton
  □ Verify dev server runs, blank page renders
  Exit gate: `npm run dev` → HTTP 200

PHASE 3 — BUILD (the bulk)
  □ Hero (3D scene + centered text + CTAs) — §8
  □ Marquee / transitional sections
  □ Featured highlights (3D tilt cards)
  □ Main content grid (tabbed/filterable/searchable)
  □ Contact / visit section (map + tap-to-call + WhatsApp)
  □ Sticky footer
  □ Cart/state UI if needed (WhatsApp-only checkout)
  Exit gate: full page renders, all sections present

PHASE 4 — POLISH & VERIFY (1-2 hrs)
  □ SEO: metadata, OpenGraph, Twitter, JSON-LD, sitemap, robots, manifest, favicon
  □ Lint + tsc + build all pass (§13)
  □ Agent Browser: 0 console errors, golden path works, mobile + desktop verified (§11.2)
  □ VLM screenshot review: hero scores ≥8/10, no broken images, no layout issues
  Exit gate: ALL quality gates green (§5.4)

PHASE 5 — DEPLOY
  □ Push to GitHub (no secrets, no .env, no node_modules, no bun.lock)
  □ Import to Vercel → Deploy
  □ Verify production URL
11.1 Build-phase loop (run for each component)
For every non-trivial component, run this inner loop (see §12 for the full Loop Engineering methodology):

text

LOOP: build-component
  PLAN:   what this component does, what props/state, where it sits
  ACT:    write the component (TSX + Tailwind + framer-motion)
  OBSERVE: does it render? (dev server / Agent Browser screenshot)
  CRITIQUE: check against DESIGN.md — accent discipline? radius grammar?
            motion timing? mobile legible? a11y?
  REFINE: fix every CRITIQUE point
  EXIT when: renders + matches DESIGN.md + mobile-OK + a11y-OK
11.2 The verification ritual (mandatory before "done")
bash

# 1. Lint + types + build
npm run lint
npx tsc --noEmit
npm run build

# 2. Agent Browser golden-path check
agent-browser open http://localhost:3000/
agent-browser errors                    # must be empty
agent-browser console                   # must be empty
agent-browser screenshot --full page.png

# 3. VLM visual audit
z-ai vision -p "Audit this page: (1) hero immersive? (2) one accent color? (3) negative tracking on display? (4) mobile legible? (5) any slop tells? (6) score /10" -i page.png

# 4. Mobile + desktop
agent-browser set viewport 390 844; agent-browser screenshot mobile.png
agent-browser set viewport 1440 900; agent-browser screenshot desktop.png

# 5. Sticky footer check
agent-browser eval "const f=document.querySelector('footer'); const r=f.getBoundingClientRect(); JSON.stringify({bottom:r.bottom, vh:innerHeight, sticksToBottom: r.bottom<=innerHeight})"
Nothing is "done" until all 5 steps pass. "It compiles" is never sufficient.

12. Looping Prompts (Loop Engineering)
Loop engineering is the practice of building an iterative workflow around an LLM instead of relying on a single prompt. The agent repeatedly reasons → acts → observes → reflects → refines until a verifiable success criterion is met, with the human defining the rules of the loop and the agent handling execution.

Grounded in: ReAct (Yao et al. 2022), Reflexion (Shinn et al. 2023), Andrew Ng's Reflection pattern, Anthropic's Evaluator-Optimizer, and Steve Kinney's "Anatomy of an Agent Loop."

12.1 The canonical loop structure
text

1. ASSEMBLE CONTEXT — system prompt, goal, state, prior outputs, memory
2. PLAN / REASON   — decompose goal, decide next action (Thought)
3. ACT             — emit tool call / code edit / candidate output (Action)
4. OBSERVE         — harness executes, feeds result back (Observation)
5. EVALUATE        — score against verifiable success criterion
6. REFLECT / REFINE— self-critique, store lesson, revise
7. CHECK TERMINATION — if success predicate true OR guard trips, exit; else repeat
The whole thing, in code:

js

while (!done) {
  const response = await callLLM(messages);
  if (response.toolCalls.length > 0) {
    const results = await executeTools(response.toolCalls);
    messages.push(...results);      // tool call = "I'm not done yet"
  } else {
    done = true;                     // text-only response = termination signal
    return response;
  }
}
12.2 Termination guards (defense in depth — ALWAYS layer these)
Max iterations (15–25 typical)
Wall-clock timeout (~300s)
Token/cost budget (~$2/run)
No-progress detection — hash each iteration's (tool, result_preview); break on 3 identical fingerprints
On hitting the cap — don't stop silently; append "You've reached the maximum steps; give your best answer now" and call the LLM one final time without tools
12.3 Five loop-prompt templates (copy-pasteable)
Template A — Build-Component Loop (use for every non-trivial component)
text

You are in a build-component loop. Repeat until done.

OBJECTIVE: Build <component> matching DESIGN.md.
STOP CONDITION: component renders in Agent Browser with 0 console
errors, matches DESIGN.md accent/radius/motion rules, mobile-legible,
a11y-OK; OR max_iterations=10; OR 3 identical (action, result) fingerprints.

Each iteration, output:
  PLAN:      what you're adding/changing and why.
  ACT:       one concrete edit (surgical, not full-file rewrite).
  OBSERVE:   paste the relevant dev-server output / screenshot finding.
  CRITIQUE:  check against DESIGN.md — accent? radius? motion? mobile? a11y?
  REFLECT:   what to try next, or "DONE" if all criteria pass.

Rules:
- Re-read DESIGN.md every iteration; do not drift.
- Keep only the latest error/screenshot in context.
- If a command errors, treat it as feedback — diagnose and retry differently.
- Never declare DONE without an Agent Browser screenshot proving it renders.
Template B — TDD / Bug-Fix Loop (use when something is broken)
text

You are an autonomous coding agent in a TDD loop. Repeat until done.

OBJECTIVE: Make the failing test / build / lint pass.
STOP CONDITION: `npm run build` exits 0 AND `npx tsc --noEmit` exits 0
AND `npm run lint` exits 0; OR max_iterations=15; OR 3 identical
(tool, result) fingerprints (you are stuck).

Each iteration, output:
  PLAN:      which error you are targeting and why it fails.
  ACT:       one surgical edit (line-replace, not full-file rewrite).
  OBSERVE:   paste the relevant slice of the new build/lint output.
  REFLECT:   what changed, what to try next, or "DONE" if all green.

Rules:
- Keep only the latest error messages in context; summarize prior iterations.
- Re-read the OBJECTIVE every iteration; do not drift into unrelated refactors.
- If a command errors (missing dep, bad env), treat the error as feedback —
  diagnose and retry a different approach; do not stop.
- On the final iteration if still failing, stop and summarize your best progress.
Template C — Verification / QA Loop (evaluator-optimizer, two-role)
text

# GENERATOR
Produce <artifact: section/component/page>. Output it inside
<artifact>...</artifact> tags, followed by a <self_check> block listing
which acceptance criteria are met and which are not (reason first,
then output).

# EVALUATOR (separate LLM call, given artifact + criteria)
Criteria:
  1. scene loads in <2s on mobile (verifiable via Agent Browser)
  2. no console errors (verifiable)
  3. one accent color only (verifiable via screenshot)
  4. negative tracking on display type (verifiable via screenshot)
  5. mobile-legible at 390px (verifiable via screenshot)
  6. prefers-reduced-motion respected (verifiable via code review)
Verdict per criterion: PASS | FAIL + one-sentence reason.
Overall: ACCEPT (all pass) or REJECT.
If REJECT, emit a structured <feedback> block the generator must address.

# LOOP CONTROL (harness)
while not all(criteria == PASS) and iteration < max_iters:
    artifact = generator(task, feedback)
    verdict, feedback = evaluator(artifact, criteria)
Template D — Design-Refinement Loop (self-critique with exit gate)
text

You are iterating on a design spec / DESIGN.md for a 3D website feature.

Round format (repeat up to 8 times):
  DRAFT:    your current best spec.
  CRITIQUE: act as a strict senior reviewer. List concrete defects against
            the rubric: performance, accessibility, build feasibility,
            scope creep, edge cases. Be specific; do not rubber-stamp.
  SCORE:    1–5 per rubric dimension.
  REVISE:   produce the next DRAFT addressing every CRITIQUE point.

EXIT when: every rubric dimension scores >= 4 AND the CRITIQUE block
contains no "blocking" items, OR round 8 is reached.
On exit, output the final spec prefixed with "FINAL:".
Template E — ReAct (canonical, for research / multi-step exploration)
text

Question: <goal>
Thought 1: <decompose, decide first action>
Action 1: <tool call, e.g. Search[...] or page_reader[...]>
Observation 1: <result>
Thought 2: <reason about observation>
Action 2: <next action>
Observation 2: <result>
...
Thought N: <synthesis>
Action N: Finish[<final answer>]
Note: Finish[...] is the explicit termination signal. Without it, the model keeps going.

12.4 Best practices
Define explicit, verifiable exit criteria. "Tests pass," "lint clean," "Agent Browser shows 0 errors" — not "the model stopped."
Separate generator from evaluator when possible; distinct roles reduce sycophancy.
Emit reasoning/feedback blocks before final output to trigger chain-of-thought.
Manage context aggressively — keep only latest errors, paginate large reads, summarize prior iterations, re-inject the objective every cycle.
Treat errors as feedback, not termination — feed the error back so the model can diagnose and retry.
Log structured traces per run: iteration count, tokens/turn, tool calls, final result.
Make side-effecting tools idempotent so retries don't double-fire.
12.5 Pitfalls to avoid
Infinite loops — the #1 production failure. Always layer termination guards.
Context-window overflow — tool results are the biggest token consumer. Compact aggressively.
Treating "model stopped" as "goal met" — a terminal message may be a clarifying question. Always run an explicit goal-completion check.
Drift — agents look productive early, then gradually lose context and make disconnected decisions while remaining confident. Fix with tight scope + hard stop conditions.
Error compounding — a mistake at step 4 propagates silently into a confidently-wrong result by step 18. Use shorter chains with verification checkpoints.
Tool confusion — too many overlapping tools cause the agent to pick the wrong one. Fewer tools, explicit namespacing.
Missing idempotency — retrying after a timeout double-fires side effects. Mandatory for any side-effecting tool.
13. Vercel-Ready Deployment
13.1 The rules (all mandatory)
Use npm, not bun, for the deploy lifecycle. npm install, npm run build. Commit package-lock.json.
No backend unless explicitly requested. Default static. Orders/forms → WhatsApp / mailto / external.
No secret env vars. If a key is needed, document it in README.md and add to Vercel project settings — never commit .env.
next.config.ts minimal & clean:
ts

import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: { formats: ["image/avif", "image/webp"] },
};
export default nextConfig;
No output: "standalone" (that's for self-hosted, breaks Vercel auto-detect).
package.json scripts clean:
json

{
  "scripts": {
    "dev": "next dev -p 3000",
    "build": "next build",
    "start": "next start",
    "lint": "eslint ."
  }
}
tsconfig.json exclude skills, mini-services, examples, any demo folders — they pollute the build with unrelated type errors.
SEO routes as App Router files: app/sitemap.ts, app/robots.ts, app/manifest.ts, app/icon.png, app/apple-icon.png.
No conflicting static files. If you have app/robots.ts, do NOT also have public/robots.txt (Next.js throws "conflicting public file and page file").
13.2 .gitignore (the essentials)
gitignore

node_modules
/.next/
/out/
/build
.env
.env*
!.env.example
*.db
*.db-journal
/db/
.vercel
*.log
next-env.d.ts
*.tsbuildinfo
# Exclude sandbox/demo/skill reference folders from the shipped repo
/skills/
/mini-services/
/examples/
Caddyfile
.zscripts/
.z-ai-config
13.3 Pre-push checklist (run every time)
bash

# 1. Quality gates
npm run lint                    # 0 errors
npx tsc --noEmit                # 0 errors
npm run build                   # exits 0

# 2. No secrets staged
git diff --cached --name-only | grep -iE "\.env|secret|token|credential" && echo "SECRET STAGED — ABORT" || echo "clean"

# 3. No heavy junk staged
git diff --cached --name-only | grep -iE "node_modules|\.next/|bun\.lock|\.db$" && echo "JUNK STAGED — ABORT" || echo "clean"

# 4. Commit + push
git add -A
git commit -m "feat: <what>"
git push origin main
13.4 Vercel import
Push to GitHub.
vercel.com/new → import repo.
Vercel auto-detects Next.js. No env vars needed (static, no backend).
Click Deploy. Build runs npm run build — must exit 0.
13.5 The deployment-error hall of shame (real fixes)
These are the actual errors that broke Vercel builds on the SD Waffles project. Avoid them.

Error
Root cause
Fix
Cannot find module 'socket.io-client'	examples/websocket/frontend.tsx imported an uninstalled dep; tsconfig **/*.tsx glob picked it up	Delete examples/; add examples to tsconfig exclude; gitignore /examples
Type 'string | undefined' is not assignable to type 'string' (CartLine.image)	MenuItem.image optional but CartLine.image required	Resolve via getItemImage(item) (always returns string) before storing in cart
id: item.itemId undefined	Only 1 of 2 FEATURED_ITEMS had itemId; add() got a broken partial object	Type FEATURED_ITEMS: FeaturedItem[] with itemId: string required; look up real MenuItem and pass it whole
Page jumps to menu on load	tab.scrollIntoView() in a useEffect scrolled the whole document vertically	Replace with manual container.scrollLeft math — only scroll the tab bar horizontally
conflicting public file and page file for /robots.txt	public/robots.txt existed alongside app/robots.ts	Delete public/robots.txt; let the dynamic route win
Build exits 1 with no useful error	bun run build lockfile/tooling mismatch with Vercel	Use npm run build for deploy; commit package-lock.json

13.6 The "no backend" pattern (WhatsApp-only orders/contacts)
For any site that takes "orders" or "bookings" without a backend:

tsx

// cart-store.ts — Zustand, persisted to localStorage
"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCart = create(persist((set, get) => ({
  lines: [],
  add: (item) => set((s) => /* ... */),
  // ...
}), { name: "site-cart" }));

// Order action — builds a WhatsApp URL, NO server call
const handleOrder = () => {
  let msg = "Hi <Brand>! I'd like to order:\n\n";
  lines.forEach((l, i) => { msg += `${i+1}. ${l.name} × ${l.qty} — ₹${l.price*l.qty}\n`; });
  msg += `\nTotal: ₹${total}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
};
Zero API routes. Zero database at runtime. Zero env vars. Static-exportable.

14. Quick-Start Checklist
When starting a new project, run this checklist top to bottom.

text

PRE-FLIGHT
  □ Read this Playbook
  □ npx skills@latest add emilkowalski/skills
  □ npx skills add https://github.com/Leonxlnx/taste-skill
  □ git clone --depth 1 https://github.com/VoltAgent/awesome-design-md.git ~/playbook-references/awesome-design-md
  □ Read the 2 chosen reference DESIGN.md files

DESIGN
  □ Write project DESIGN.md (§6 template)
  □ Write AGENTS.md with extracted "Don'ts" as hard constraints
  □ Generate logo (image-gen skill) → PNG + JPEG
  □ Generate hero + featured + category images

SCAFFOLD
  □ npm install
  □ Wire globals.css with DESIGN.md tokens
  □ Wire layout.tsx (fonts + SEO skeleton + JSON-LD)
  □ npm run dev → HTTP 200

BUILD (run §12 Template A loop for each)
  □ Hero (3D + centered text + CTAs) per §8
  □ Marquee / transitional
  □ Highlights (3D tilt cards)
  □ Main content (tabbed/searchable/filterable)
  □ Contact (map + tap-to-call + WhatsApp)
  □ Sticky footer (mt-auto, safe-area)

POLISH
  □ SEO: metadata + OpenGraph + Twitter + JSON-LD
  □ sitemap.ts + robots.ts + manifest.ts + icon.png + apple-icon.png
  □ No backend; orders → WhatsApp

VERIFY (§11.2 ritual — ALL must pass)
  □ npm run lint → 0 errors
  □ npx tsc --noEmit → 0 errors
  □ npm run build → exit 0
  □ Agent Browser: 0 console errors, golden path works
  □ VLM: hero ≥8/10, no broken images, mobile + desktop OK
  □ Sticky footer confirmed

DEPLOY (§13.3 checklist)
  □ No secrets/junk staged
  □ git push origin main
  □ Vercel import → Deploy → verify production URL
Appendix A — Key references
Loop engineering: Alachkar, Loop Engineering — https://ali-alachkar.medium.com/loop-engineering-the-next-evolution-beyond-prompt-engineering-0765dff81ece
Agent loop anatomy: Kinney — https://stevekinney.com/writing/agent-loops
ReAct: Yao et al. 2022 — https://arxiv.org/abs/2210.03629
Reflexion: Shinn et al. 2023 — https://arxiv.org/abs/2303.11366
Agentic design patterns: Augment Code — https://www.augmentcode.com/guides/agentic-design-patterns
DESIGN.md spec (Google Stitch / VoltAgent): https://github.com/VoltAgent/awesome-design-md
Emil Kowalski skills: https://github.com/emilkowalski/skills
Taste Skill: https://github.com/Leonxlnx/taste-skill
Anthropic — Building Effective Agents: https://resources.anthropic.com/building-effective-ai-agents
Appendix B — Universal design rules (distilled from 73 premium brands)
These three rules appear in every premium DESIGN.md and should be encoded as playbook-level lint rules:

One accent color only — used for CTAs, focus rings, links. Never decorative. Never a second accent "for variety."
Negative letter-spacing on display type — -2.5px to -5.5px on large display, ~0 on body. This is the universal premium signature.
Pick one border-radius grammar and never mix — pills (9999px) for consumer/playful, 2–4px for technical/precision. Never both in one project.
Everything else (canvas polarity, depth philosophy, motion timing, typography) is a choice informed by the brief and references. These three are discipline.

This playbook is universal. The domain changes; the craft does not. Build something stunning.