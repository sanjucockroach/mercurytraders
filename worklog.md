# Mercury — Immersive 3D Website Build Worklog

This is the single shared worklog for the Mercury (Automotive Spare Parts) website build.
Reference Playbook: `/home/z/my-project/PLAYBOOK.md`
Reference brand logo: `/home/z/my-project/docs/mercury-brand-logo.png`
Reference brand analysis: `/home/z/my-project/docs/brand-analysis.json`

## Project Brief
- **Customer:** Mercury — Automotive Spare Parts (same business model as Boodmo)
- **Competitor / reference:** https://boodmo.com (auto-parts marketplace)
- **Brand:** Orange `#FF5722` (primary "M" mark + wordmark) + Charcoal `#333333` secondary + white canvas
- **Tagline:** AUTOMOTIVE SPARE PARTS
- **Scope:** Frontend-only, following The Immersive 3D Website Playbook

## Design Direction (decided)
- **Canvas polarity:** Light, off-white tinted (`#FBFBFB` / `#F6F6F4`) — premium auto-parts catalog, technical-clinical vibe, NOT dark.
- **Accent:** ONE accent = Mercury Orange `#FF5722`. Used only for CTAs, focus rings, links, key highlights. Charcoal `#1A1A1A` as ink. Never a second accent.
- **Radius grammar:** Technical/precision = small radii (4–8px cards/inputs, 2px hairlines). Pills only for tiny status chips. Commit to precision grammar.
- **Depth philosophy:** Surface ladder + hairline borders, zero drop shadows (Linear/Framer philosophy) — the 3D scene provides depth. One subtle signature shadow allowed for product cards.
- **Typography:** Display = a strong geometric/grotesque sans (Space Grotesk or similar) with negative letter-spacing `-2.5px` to `-4px`. Body = Inter / Geist, ~0 tracking. Monospace accents for part-numbers/SKUs (technical tell).
- **Motion:** Universal 0.33s, cubic-bezier(0.22, 1, 0.36, 1). Framer Motion for 2D, R3F for 3D.
- **3D hero:** Floating stylized "M" mark + floating auto-part objects (gear, piston, wrench) on the sides; center clear for the tagline. Orange point light + soft contact shadow. prefers-reduced-motion → static poster.

## Build Phases (per Playbook §11)
- [x] Phase 0 — Pre-Flight (Playbook read, brand analyzed, references chosen)
- [ ] Phase 1 — Design (DESIGN.md, AGENTS.md, logo + images)
- [ ] Phase 2 — Scaffold (packages, globals.css, layout.tsx, dev server)
- [ ] Phase 3 — Build (Hero 3D, marquee, highlights, categories, brands, why, contact, footer)
- [ ] Phase 4 — Polish & Verify (SEO, lint/tsc/build, Agent Browser, VLM audit)
- [ ] Phase 5 — Deploy (frontend-only, static-ready)

---
Task ID: 0
Agent: Lead (Z.ai Code)
Task: Save Playbook + brand assets locally and set up worklog.

Work Log:
- Read the full Playbook (850 lines) from upload/Pasted Content_1784193861086.txt.
- Analyzed the Mercury brand logo with VLM (z-ai vision) → saved to docs/brand-analysis.json.
- Copied Playbook to /home/z/my-project/PLAYBOOK.md for reference.
- Copied brand logo to /home/z/my-project/docs/mercury-brand-logo.png.
- Created this worklog at /home/z/my-project/worklog.md.
- Decided design direction (light canvas, single orange accent, precision radius, surface-ladder depth, Space Grotesk + Inter typography, 0.33s motion, floating-3D-M hero).

Stage Summary:
- Playbook absorbed and saved at PLAYBOOK.md.
- Brand identity confirmed: MERCURY / AUTOMOTIVE SPARE PARTS, orange #FF5722 + charcoal #333333 + white.
- Design direction locked: light premium technical canvas, single orange accent, precision radius grammar, surface-ladder depth, 3D floating-M hero.
- Ready to begin Phase 1 (DESIGN.md) and Phase 2 (scaffold) in parallel with competitor analysis.

---
Task ID: 1
Agent: Boodmo Analyst (general-purpose)
Task: Analyze https://boodmo.com competitor website and produce a reference brief.

Work Log:
- Read /home/z/my-project/worklog.md to absorb project context (Mercury auto-parts marketplace, light canvas, orange #FF5722 + charcoal, Space Grotesk + Inter, R3F 3D hero per Playbook).
- Opened https://boodmo.com with agent-browser (Playwright) at 1440x900 viewport. Site was in scheduled-maintenance mode — only a centered maintenance message + app-download band + footer was rendered. Captured full-page + viewport screenshots to docs/screenshots/.
- Snapshotted accessibility tree — confirmed maintenance state (H2: "boodmo is currently down for scheduled maintenance", support email info@boodmo.com, App Store + Google Play badges, copyright "© 2015-2026 Smart Parts Online Pvt. Ltd.").
- Fell back to z-ai web-reader (page_reader function) which returned the FULL cached Boodmo homepage HTML (187 KB, pre-rendered Angular DOM with all sections present). Saved to docs/screenshots/boodmo-home.html.
- Extracted all H1/H2/H3 in order, all 107 anchor tags, all CSS hex colors (with frequency counts), all font-family declarations, all image alt-text, all class names, all ng-* Angular directives.
- Repeated page_reader fetch for /vehicles/ (84 KB — yielded all 39 car makers), /brands/ (66 KB — JS-rendered, brand list not in static HTML), /catalog/ (72 KB — JS-rendered, categories not in static HTML), /sitemap.html (60 KB), /best_offers/ (79 KB).
- Confirmed 5 homepage-featured categories (Maintenance Service Parts, Filters, Windscreen Cleaning System, Accessories, Lighting) + 8 article-tag-implied categories (Engine, Brakes, Transmission, Steering, Cooling System, Exhaust, Electrical Systems, Car Oil). Augmented with domain knowledge for full ~25-category list.
- Confirmed 23 parts-supplier brands shown on homepage (Bosch, Valeo, NGK, Sachs, TRW, Monroe, Lemförder, Hella, Philips, Liqui Moly, Unominda, Gabriel, PHC, MGT, Spark Minda, DKMax, Elofic, Sheen, Technix, Motherson Auto Parts, Euromac, Galio, Mahindra).
- Confirmed 39 car makers (14 popular on homepage + 25 more on /vehicles/ page), including commercial-vehicle variants (Mahindra Commercial, Tata Commercial, Ashok Leyland).
- Confirmed 3-column footer structure (About / Policy / Useful links) with all 22+ links enumerated.
- Confirmed homepage section order top-to-bottom: Search by Vehicle → Current Offers → Search by Category → Why Choose Aftermarket Products → Brands we Trust → Popular Car Makers → Articles & Reviews → Our Clients Love us → SEO long-form (3 H2 sections) → Download App → Footer.
- Ran z-ai vision (VLM) on the maintenance-page screenshot — confirmed: light canvas, sky blue (#59d8fd per CSS extraction, 193 occurrences = dominant), navy (#12477a, 31 occurrences), coral red (#ff545d) reserved for sale badges only, Roboto typography, India-flag accent on logo, Material-Design-1 flat depth philosophy.
- Extracted Boodmo's actual CSS palette from inline styles: sky blue #59d8fd (primary), navy #12477a (dark sections), charcoal #263238 (ink), coral red #ff545d (sale badges only). NOT orange — Boodmo is sky-blue/navy. Mercury's orange is therefore a strong market differentiator.
- Wrote the full reference brief to /home/z/my-project/docs/boodmo-analysis.md (447 lines, 12 sections A–K + appendix).
- Closed agent-browser session.

Stage Summary:
- Boodmo business model: India's largest multi-vendor online marketplace for car spare parts (est. 2015, Smart Parts Online Pvt. Ltd., Haryana). Connects buyers (owners + workshops + B2B) with vetted suppliers. OEM + OEM-equivalent + aftermarket parts. Owns catalog & descriptions; suppliers own inventory & fulfillment.
- Homepage section order (top-to-bottom, 12 sections): Search by Vehicle (Make/Model/Year/Modification + Number Plate + My Garage) → Current Offers carousel → Search by Category (5 featured + Load more) → Why Choose Aftermarket (3 value props) → Brands we Trust (23 logos) → Popular Car Makers (14 logos) → Articles & Reviews (12 cards with topic tags) → Testimonials (4 quotes) → SEO long-form (3 H2 blocks) → Download App (dark band) → Footer (3 columns: About / Policy / Useful links).
- 5 directly-confirmed categories + 8 article-tag-implied + 12 domain-knowledge = ~25 top-level categories for Mercury's catalog data model.
- 39 car makers confirmed (Maruti, Hyundai, Mahindra, Tata, Honda, Toyota, Kia, VW, Skoda, Renault, Nissan, Ford, Fiat, Chevrolet + 25 more including commercial variants).
- 23 parts brands confirmed on homepage (Bosch, NGK, Sachs, TRW, Monroe, Lemförder, Hella, Valeo, Philips, Liqui Moly + Indian OEMs Motherson, Minda, Unominda, Gabriel, Elofic).
- Trust signals: 10-day return, genuine/aftermarket filter, pan-India shipping (Bangalore/Chennai/Delhi/Mumbai/Pune), 4 testimonials, mobile apps, API solution, Become a Vendor, Discovery Points loyalty, Damaged Parts + Best Offers secondary channels. Notable absences: no star ratings, no warranty badges, no delivery-time promise, no numeric stats — all differentiation opportunities for Mercury.
- Design: LIGHT canvas, sky-blue #59d8fd + navy #12477a (NOT orange — Mercury's orange is a market differentiator), Roboto typography, flat Material-Design-1 depth philosophy (zero shadows, hairline borders), dense grid layouts, no motion, no 3D. Feels functional/dated, not premium.
- What to STEAL for Mercury: Search-by-Vehicle cascading picker, Number-plate search, My Garage saved-cars, Featured Categories grid, dual brand/maker grids, editorial knowledge-base section, multi-column footer, 10-day return callout, Best Offers + Damaged Parts dual-channel concept, monospace part numbers.
- What to AVOID for Mercury: sky-blue palette, flat no-depth Material Design, Roboto typography, dense content-max grids, autoplay carousels, plain text testimonials, keyword-stuffed SEO copy, generic equal-size logo grids.
- Recommended Mercury homepage section list (13 sections, mapped 1:1 to Boodmo functionality but elevated per Playbook): 3D Hero (with embedded Search-by-Vehicle) → Current Offers marquee → Featured Categories (3D part icons) → Why Mercury (3 value props) → Parts Brands We Trust (6 hero + 18 grid) → Popular Car Makers (14 grid) → How It Works (3-step) → Articles & Knowledge Base → Customer Love (with stars) → Stats band (numeric proof) → Download App (dark band) → Footer (3 columns).
- Full reference brief saved to /home/z/my-project/docs/boodmo-analysis.md (447 lines). Screenshots, HTML extracts, and VLM JSON saved to /home/z/my-project/docs/screenshots/.

---
Task ID: 2-10
Agent: Lead (Z.ai Code)
Task: Build, verify, and polish the Mercury immersive 3D website per the Playbook.

Work Log:
- Wrote DESIGN.md (9-section Stitch spec) + AGENTS.md (hard constraints) at project root.
- Installed three, @react-three/fiber, @react-three/drei for the 3D hero.
- Wired globals.css with Mercury tokens: canvas #f4f2ee, ink #14110f, primary #ff5722, surface ladder, hairline borders, precision radius grammar (6/10/4px), 0.33s motion, marquee/shimmer/float animations, prefers-reduced-motion fallbacks.
- Wired layout.tsx with Space Grotesk (display) + Inter (body) + Geist Mono (part-numbers), full SEO metadata, OpenGraph, Twitter cards, JSON-LD (AutoPartsStore), themeColor, manifest link.
- Built MercuryMark SVG logo (orange M on tinted near-black) + wordmark + full lockup.
- Generated 7 premium images via image-gen skill: hero poster + 6 product photos (brake disc, oil filter, spark plugs, air filter, headlight, shock absorber).
- Built catalog-data.ts: 12 categories, 30 car brands, 23 parts brands, 6 products, stats, how-it-works, value props, testimonials, articles, offers.
- Built cart-store.ts (Zustand + persist) with WhatsApp checkout URL builder (Playbook §13.6 pattern).
- Built components: navbar (glass, search, cart badge), cart-drawer (slide-out, qty controls, WhatsApp checkout), hero-scene (R3F floating gear/disc/piston/bolt/bearing/M-mark, orange point-light, center clear, reduced-motion fallback), hero (3D + centered text + glass stats), marquee, search-vehicle (make/model/year + number-plate tabs), categories (3D tilt cards), featured-products (grid + add-to-cart), brands (parts + car makers), why-mercury (dark section), how-it-works, stats, articles, testimonials, contact (WhatsApp/call/email + HQ card), footer (sticky, mt-auto, safe-area).
- Assembled page.tsx, added sitemap.ts, robots.ts, manifest.ts. Removed conflicting public/robots.txt (Playbook §13.5 fix). Excluded examples/skills/mini-services from tsconfig.
- Fixed Engine→Cog lucide import, React.ElementType→ComponentType typing, removed signature-shadow from non-tilt cards, refined Add button to ghost-hairline→orange-on-hover, warmed canvas tint, strengthened hero veil, rebalanced 3D object positions/scales.
- Verification (Playbook §11.2 ritual): lint 0 errors, tsc 0 errors, dev server 200s with 0 page errors, Agent Browser golden path confirmed (scroll→add brake disc→cart drawer opens→WhatsApp URL builds with SKU/brand/qty/price/subtotal), sticky footer confirmed (footer.bottom === docHeight, no empty gap, pushed down naturally on long page).
- VLM audits: hero desktop 8/10 (premium bar reached, no blocking defects), mobile 8.7/10 (no blocking defects), full-page desktop 8/10 (all 7 criteria pass). Screenshots saved to docs/screenshots/.

Stage Summary:
- Mercury immersive 3D website is COMPLETE and verified. Frontend-only, no backend, WhatsApp checkout.
- All Playbook quality gates green: lint clean, tsc clean, 0 console errors, golden path works, hero ≥8/10, mobile + desktop verified, sticky footer confirmed.
- Design discipline upheld: ONE orange accent (#FF5722), negative letter-spacing on all display type, precision radius grammar (6/10/4px), surface-ladder + hairline depth (zero shadows except one signature on tilt cards), tinted off-white canvas (#f4f2ee), tinted near-black ink (#14110f), monospace part-numbers, prefers-reduced-motion respected, 3D hero with center clear.
- 13 sections: 3D Hero → Offers Marquee → Search-by-Vehicle → Categories → Featured Products → Why Mercury → Brands → How It Works → Stats → Articles → Testimonials → Contact → Sticky Footer.
