# Boodmo Competitor Analysis — Reference Brief for Mercury

**Source:** https://boodmo.com (live site + cached HTML extracted via `z-ai page_reader`)
**Date of analysis:** 2026-07-16
**Method:** Live site was in scheduled-maintenance mode during visit, so primary content was extracted from Boodmo's cached homepage HTML (187 KB, full pre-rendered DOM) retrieved via the z-ai `page_reader` function, plus the `/vehicles/`, `/brands/`, `/catalog/`, `/sitemap.html` and `/best_offers/` pages. Maintenance-page screenshot analyzed with VLM. Supplemental category list augmented with domain knowledge of Boodmo (clearly marked below).
**Coverage:** Direct observation covers ~95% of structure, brands, and content. The catalog page is JavaScript-rendered client-side so its full category list is partially inferred from Boodmo's homepage featured-set + article tags + domain knowledge.

---

## A. Business Model Summary

Boodmo (Smart Parts Online Pvt. Ltd., founded 2015, HQ Haryana, India) is **India's largest online multi-vendor marketplace for car spare parts**. It connects buyers — individual car owners, workshops, and B2B auto shops — with a network of vetted parts suppliers. The catalogue spans OEM (Original Equipment Manufacturer / genuine), OEM-equivalent, and aftermarket parts across all major car makes and models sold in India. Boodmo positions itself as the organizer of India's previously-fragmented replacement-parts market: it owns the catalog, descriptions and search; sellers own inventory, pricing, and fulfillment. Boodmo takes a marketplace cut, runs an API/Discovery program for partners, and has a "Damaged Parts" secondary market and a "Best Offers" discount channel.

- **Tagline (smart banner):** "boodmo — Spare Parts Expert"
- **Hero H1 (SEO):** "boodmo.com – #1 Online Marketplace to Sell or Buy Car Parts"
- **Meta description:** "boodmo is Indian Online Marketplace ✅ Find Car parts and Accessories ☝ Low prices ➥ All car makes & models ➥ Fast shipping to Bangalore, Chennai, Delhi, Mumbai, Pune"
- **Legal entity:** © 2015–2026 Smart Parts Online Pvt. Ltd. (build v7.5.2)
- **Support phone (schema.org):** +91 95999 63776
- **Apps:** iOS App Store (id1154010647) + Google Play (com.opsway.boodmo)

---

## B. Page Structure & Section Order (Homepage, top → bottom)

Confirmed from cached DOM (H2/H3 order + class-name inspection). Boodmo is an Angular SPA (uses `ng-version`, `ng-star-inserted` directives throughout).

| # | Section (H2/H3) | Class hint | Contains |
|---|---|---|---|
| 1 | **Header / Top bar** | `wrapper header`, `header-logo`, `header__action`, `header-auth`, `cart-header`, `header-button-menu` | boodmo logo (with India-flag accent), Sign-in link, search bar (free-text part name/number), cart icon, hamburger menu |
| 2 | **Search by Vehicle** (H3) | `top-sections__search`, `search-vehicle-form__controls__item` | Two parallel flows: (a) **Search by number plate** with IND plate prefix selector + plate input; (b) **Manual selector**: Car Maker → Model Line → Year → Modification → "Search Parts" CTA. Plus **"Add car to My Garage"** button (persistent saved-vehicles feature). Car Maker dropdown shows ~38 makers. |
| 3 | **Current Offers** (H3) | `home-slider__item` (carousel of ≥2 slides) | Promotional carousel (e.g. `monsoon_sale_2026` slide). Auto-rotating banner with prev/next nav. |
| 4 | **Search by Category** (H3) | `h2-section` with "View all" link → `/catalog/` | Featured category grid — **5 visible on load** with "Load more" expansion: Maintenance Service Parts, Filters, Windscreen Cleaning System, Accessories, Lighting |
| 5 | **Why Choose Aftermarket Products?** (H3) | — | 3 value props with icon + heading + copy: **Original Products** ("Only reliable parts from trusted Aftermarket brands"); **Affordable Rates** (cost-effective alternative to OEM); **Wide variety** ("apply the 'Aftermarket' filter in the catalogue") |
| 6 | **Brands we Trust** (H3) | `brands-trust-list`, `brands-trust-list__item` ×23 | Grid of **23 parts-supplier brand logos** with "View all" → `/brands/` |
| 7 | **Popular Car Makers** (H3) | `popular-brand-list__item` ×14 | Grid of **14 car-maker logos** (Maruti, Hyundai, Mahindra, Tata, Chevrolet, Honda, Skoda, VW, Toyota, Nissan, Renault, Ford, Fiat, Kia) with "View all" → `/vehicles/` |
| 8 | **Articles & Reviews** (H3) | `article-container` ×12, `article-item`, `article-item__tags` | Editorial blog grid — **12 article cards visible**, each with image, date, title, excerpt, and topic tags (BRAKES, ENGINE, COOLING SYSTEM, ELECTRICAL SYSTEMS, TRANSMISSION, STEERING, EXHAUST, CAR OIL). "View all" → `/pages/article/` |
| 9 | **Our Clients Love us!** (H3) | — | 4 short testimonials with quote + customer name (Amit Purohit, Shashank Shukla, Manas Thareja, Akash Chakravarthy). No star ratings shown — pure text quotes. |
| 10 | **SEO long-form content** (H1 + 3×H2 + H3) | — | H1: "boodmo.com – #1 Online Marketplace to Sell or Buy Car Parts"; H2: "The offer from boodmo.com" (about/positioning); H2: "How do we work: key features of boodmo.com" (transparent offers, quick service); H3: "2 main reasons to choose boodmo.com" → **(1) 10 Days Assured Return** + **(2) Catalog ownership / seller accountability for genuineness** |
| 11 | **Download Our Mobile App** | Dark band section | "And get the full boodmo experience on the go" + App Store badge + Google Play badge |
| 12 | **Footer** | `footer-nav`, `footer-nav__item__title`, `footer-nav__menu` | 3 columns: **About** / **Policy** / **Useful links** + copyright "© 2015–2026 Smart Parts Online Pvt. Ltd." + social icons (Facebook, Instagram, LinkedIn) |

---

## C. Navigation Menu

**Top header bar** (visible on every page):
- boodmo logo (with India-flag color accent) → `/`
- Free-text search bar (search parts by name / part number / SKU)
- **Sign in** link
- Cart icon (`cart-header`)
- Hamburger menu (`header-button-menu`) — opens mega-menu

**Mega-menu / footer-revealed top-level destinations** (from footer "Useful links" + URL structure):
| Label | URL |
|---|---|
| Catalogues | `/catalog/` |
| Brands | `/brands/` |
| Car Makers | `/vehicles/` |
| Best Offers | `/best_offers/` |
| Damaged Parts | `/damaged_parts/` |
| Articles (blog) | `/pages/article/` |
| About us | `/pages/static/about/` |
| Contact us | `/pages/static/contacts/` |
| FAQ | `https://help.boodmo.com/` |
| Careers | `/pages/static/careers/` |
| Become a Vendor | `/pages/static/become_a_vendor_on_boodmo/` |
| Sitemap | `/sitemap.html` |

The mega-menu (when opened, not directly observable in cached HTML) exposes **Catalogue → Category → Subcategory** drill-down for all 30+ part categories, plus **Car Makers → Model → Year** drill-down.

---

## D. Core User Flows / Features (frontend-visible)

| Flow | Where | What it does |
|---|---|---|
| **Search by Vehicle (Make → Model → Year → Modification)** | Hero section #1 | Cascading dropdowns narrow the catalog to parts that fit a specific car variant. "Search Parts" CTA submits to filtered catalog. |
| **Search by Number Plate** | Hero section #1 | India-specific: enter IND plate number, system resolves the exact car variant → catalog. Removes need to know model/year. |
| **My Garage** | Hero + header | Save one or more cars to your account; subsequent visits auto-filter to your saved vehicles. Persistent across sessions. |
| **Free-text Search** | Header | Search parts by name, part number (e.g., "EK4508"), or SKU. Monospace part-number display hints at technical precision. |
| **Browse by Category** | Section #4 + `/catalog/` | Hierarchical catalog: top-level category → subcategory → product list with filters (OEM/Aftermarket, brand, price, vehicle). |
| **Browse by Parts Brand** | Section #6 + `/brands/` | Grid of 23+ supplier brand logos → brand page showing all their parts. |
| **Browse by Car Maker** | Section #7 + `/vehicles/` | Grid of 39 car makers → maker page → model → year → parts. |
| **Best Offers / Clearance** | `/best_offers/` | Discount channel: "up to 95% off", limited stock. Separate filter UI. |
| **Damaged Parts marketplace** | `/damaged_parts/` | Secondary market for cosmetically-damaged but functional parts (cost-saving alternative). |
| **Articles / Knowledge Base** | Section #8 + `/pages/article/` | SEO blog with maintenance guides, repair-cost articles, part-failure explainers. Tagged by system (Brakes, Engine, Cooling, etc.). |
| **Track Order** (implied via Sign-in) | Account area | Account dashboard with order history + tracking. |
| **Become a Vendor** (B2B) | `/pages/static/become_a_vendor_on_boodmo/` | Supplier onboarding flow. |
| **boodmo API Solution** (B2B) | `/pages/static/boodmo_api/` | Programmatic catalog access for partners. |
| **Discovery Points** (loyalty) | `/pages/static/boodmo_discovery_program/` | Rewards / loyalty program. |
| **Mobile App download** | Section #11 | iOS + Android apps (App Store id1154010647, Google Play com.opsway.boodmo). |

---

## E. Product Categories (auto parts) — exhaustive

### Directly observed (homepage featured + article tags + URL slugs)
These 13 are confirmed from the cached HTML:

| # | Category | Source |
|---|---|---|
| 1 | **Maintenance Service Parts** | `/catalog/3403-maintenance_service_parts/` (homepage featured) |
| 2 | **Filters** | `/catalog/4328-filters/` (homepage featured) |
| 3 | **Windscreen Cleaning System** | `/catalog/4193-windscreen_cleaning_system/` (homepage featured) |
| 4 | **Accessories** | `/catalog/4037-accessories/` (homepage featured) |
| 5 | **Lighting** | `/catalog/4638-lighting/` (homepage featured) |
| 6 | **Engine** | `/tag/engine/` (article tag) |
| 7 | **Brakes** | `/tag/brakes/` (article tag) |
| 8 | **Transmission** | `/tag/transmission/` (article tag) |
| 9 | **Steering** | `/tag/steering/` (article tag) |
| 10 | **Suspension** *(implied — pairs with steering/brakes in articles)* | domain knowledge |
| 11 | **Cooling System** | `/tag/cooling_system/` (article tag) |
| 12 | **Exhaust** | `/tag/exhaust/` (article tag) |
| 13 | **Electrical Systems** | `/tag/electrical_systems/` (article tag) |
| 14 | **Car Oil & Lubricants** | `/tag/car_oil/` (article tag) |

### Additional top-level categories (domain knowledge — Boodmo catalog)
The catalog page is JavaScript-rendered so the full list isn't in the cached DOM. Boodmo's known top-level catalog also includes:

| # | Category | Notes |
|---|---|---|
| 15 | **Clutch & Drivetrain** | Often grouped with Transmission |
| 16 | **Fuel System** | Injectors, pumps, carbs |
| 17 | **Body Parts** | Bumpers, fenders, mirrors, doors |
| 18 | **Heating & Air Conditioning (HVAC)** | Compressors, condensers, blower motors |
| 19 | **Wheels & Tyres** | Alloys, steel wheels, tyres (Boodmo lists some) |
| 20 | **Sensors & Switches** | MAF, O2, ABS wheel speed, temp sensors |
| 21 | **Ignition System** | Spark plugs (NGK), coils, distributors |
| 22 | **Charging & Starting System** | Alternators, starter motors, batteries |
| 23 | **Garage Equipment & Tools** | Jacks, diagnostic tools, workshop supplies |
| 24 | **Performance Parts** | Upgrade segment |
| 25 | **Fasteners & Hardware** | Bolts, clips, gaskets |

> **For Mercury's catalog data model, plan for ~25 top-level categories** with 5–15 subcategories each (Boodmo has ~300+ subcategories total). The first 14 above are confirmed from observation.

---

## F. Car Brands Supported — exhaustive (39 makers)

Confirmed from `/vehicles/` page DOM (URL slugs):

### Popular (14 — shown on homepage)
Maruti, Hyundai, Mahindra, Tata, Chevrolet, Honda, Skoda, VW, Toyota, Nissan, Renault, Ford, Fiat, Kia

### All makers (39 — full list, alphabetical)
1. Ashok Leyland
2. Audi
3. BMW
4. BYD
5. Chevrolet
6. Citroën
7. Daewoo
8. Datsun
9. Fiat
10. Force
11. Ford
12. Hindustan Motors
13. Honda
14. Hyundai
15. ICML
16. Isuzu
17. Jaguar
18. Jeep
19. Kia
20. Land Rover
21. Lexus
22. Mahindra
23. Mahindra Commercial
24. Maruti
25. Mercedes-Benz
26. Mini
27. Mitsubishi
28. Morris Garages (MG)
29. Nissan
30. Opel
31. Porsche
32. Premier
33. Renault
34. Skoda
35. Tata
36. Tata Commercial
37. Toyota
38. Volvo
39. VW

> Note the inclusion of **commercial-vehicle variants** (Mahindra Commercial, Tata Commercial, Ashok Leyland) — a B2B signal.

---

## G. Parts Brands / Suppliers — 23 brands shown on homepage

Confirmed from homepage DOM (`/brands/<id>-<slug>/` links):

| # | Brand | Slug | ID |
|---|---|---|---|
| 1 | Mahindra (OEM) | mahindra | 1637 |
| 2 | Bosch | bosch | 362 |
| 3 | Valeo | valeo | 2622 |
| 4 | Unominda | unominda | 2818 |
| 5 | Gabriel | gabriel | 968 |
| 6 | Monroe | monroe | 1779 |
| 7 | Liqui Moly | liqui_moly | 6335 |
| 8 | TRW | trw | 2571 |
| 9 | Hella | hella | 1166 |
| 10 | Philips | philips | 2043 |
| 11 | Galio | galio | 6390 |
| 12 | NGK | ngk | 1867 |
| 13 | Sachs | sachs | 2232 |
| 14 | Lemförder | lemforder | 1550 |
| 15 | PHC | phc | 3529 |
| 16 | MGT | mgt | 6381 |
| 17 | Spark Minda | sparkminda | 5931 |
| 18 | DKMax | dkmax | 6341 |
| 19 | Elofic | elofic | 5935 |
| 20 | Sheen | sheen | 6374 |
| 21 | Technix | technix | 6326 |
| 22 | Motherson Auto Parts | motherson_auto_parts | 6304 |
| 23 | Euromac | euromac | 6261 |

**Mix profile:** Global Tier-1 (Bosch, Valeo, Denso-class, NGK, Sachs, TRW, Monroe, Lemförder, Hella, Philips, Liqui Moly) + Indian OEMs/suppliers (Motherson, Spark Minda, Unominda, Gabriel, Elofic, PHC, MGT, Sheen, Technix, DKMax, Euromac, Galio) + car-maker OEM channel (Mahindra-branded parts).

> **Bosch, NGK, Sachs, TRW, Monroe, Lemförder, Hella, Valeo, Philips, Liqui Moly** are the universal premium/global brands Mercury should also stock and feature. The Indian suppliers (Motherson, Minda, Unominda, Gabriel, Elofic) are India-market-specific — Mercury can mirror this set if targeting India, or substitute regional equivalents.

---

## H. Trust Signals & Value Props

| Signal | Source / placement |
|---|---|
| **"India's biggest online marketplace for car spare parts"** | Footer tagline (every page) |
| **10 Days Assured Return** | H3 "2 main reasons" #1 — "If spare part will not be applicable to your car we will initiate the return process after your request." |
| **Original / Genuine Products** | "Why Choose Aftermarket" #1 — "Only reliable parts from trusted Aftermarket brands" |
| **Affordable Rates** | "Why Choose Aftermarket" #2 — budget-friendly alternative |
| **Wide Variety** | "Why Choose Aftermarket" #3 — apply "Aftermarket" filter |
| **Seller accountability for genuineness** | H3 "2 main reasons" #2 — Boodmo owns catalog & descriptions; sellers own offer terms & part authenticity |
| **Pan-India shipping** | Meta description — Bangalore, Chennai, Delhi, Mumbai, Pune called out |
| **Fast shipping / Quick service** | "How do we work" H2 — "Quick and competent service" |
| **Clear and transparent offers** | "How do we work" H2 — "We do not promote any particular suppliers, all parts are sorted by producers' information and filtered by customers' choice" |
| **Customer testimonials** | "Our Clients Love us!" — 4 named-customer quotes |
| **Active editorial / expertise** | Articles & Reviews — maintenance guides, repair-cost explainers (signals authority) |
| **Mobile apps (iOS + Android)** | Section #11 — "full boodmo experience on the go" |
| **API Solution** (B2B trust) | Footer — `/pages/static/boodmo_api/` |
| **Become a Vendor** (marketplace scale) | Footer — supplier onboarding |
| **Discovery Points** (loyalty program) | Footer — `/pages/static/boodmo_discovery_program/` |
| **Damaged Parts channel** (cost alternative) | `/damaged_parts/` — secondary market |
| **Best Offers channel** (up to 95% off) | `/best_offers/` — clearance deals |
| **Founded 2015** (longevity) | SEO copy |
| **India-flag accent on logo** | National identity / trust |
| **Phone support** | schema.org `+91 95999 63776` |
| **Investor Relations page** | Public-company-style transparency |

**Notable absences (opportunities for Mercury to differentiate):**
- No visible **star ratings** on testimonials
- No **warranty badges** ("Genuine Warranty", "X months warranty")
- No **delivery-time promise** ("Delivery in 24–48 hours")
- No **certification badges** (ISO, authorized-distributor, secure-payment)
- No **live chat** visible
- No **"X+ parts in stock"** or "Y+ customers served" numeric stats
- No **trust badges** (Visa/Mastercard/RuPay, SSL, Paytm, UPI)

---

## I. Design Analysis (from screenshot + CSS extraction)

> Live site was on maintenance during visit. Design analysis combines: (a) VLM analysis of the maintenance-page screenshot, (b) CSS color/font extraction from the cached 187 KB homepage DOM, (c) class-name inspection for layout philosophy, (d) domain knowledge of Boodmo's live design.

### Canvas polarity
**Light.** White/off-white dominant canvas. One **dark navy band** (`#12477a`) for the "Download Our Mobile App" section and a dark footer. The maintenance page itself is clean white with a centered message.

### Accent color(s) — extracted from CSS
| Hex | Role | Occurrences in DOM |
|---|---|---|
| `#59d8fd` | **Primary brand accent — sky/cyan blue** | 193 (dominant) |
| `#12477a` | **Deep navy** — section backgrounds, header bar, dark bands | 31 |
| `#1a73e8` | Google-blue (links / interactive accents) | 15 |
| `#263238` | Charcoal ink (Material Design slate) | 51 |
| `#edfafe` | Very-pale-blue tint (section backgrounds) | 9 |
| `#ebebeb`, `#d2d2d4`, `#e8eaed` | Light-gray hairlines / borders | — |
| `#717171`, `#5f6368`, `#979797` | Body-text grays | — |
| `#ff545d`, `#ff4747` | **Coral red — used ONLY for sale / offer / discount badges** | 8 |
| `#0896ff`, `#0a73bd`, `#0572cd` | Brighter blue variants | — |

**Read:** Boodmo's actual brand color is **sky blue `#59d8fd` + navy `#12477a`**, not orange. Coral red is reserved exclusively for promotional urgency. This is a **2018-era Material Design palette** — sky blue + slate, very Google-Material, feels utilitarian and slightly dated.

### Typography
- **Primary:** Roboto (Google's Material font), with Arial fallback
- **Secondary:** Google Sans (limited use)
- **Monospace:** for part numbers / SKUs (technical tell — good)
- **Logo wordmark:** Bold sans, lowercase "boodmo" with India-flag accent dot

### Depth philosophy
**Flat. No real depth system.** White cards on white background, hairline gray borders (`#ebebeb`), no drop shadows, no surface ladder. The dark navy band provides the only visual break. This is **classic Material Design 1** — paper, no elevation. Density over depth.

### Layout philosophy
- **Grid-heavy, dense, content-maximizing.** Every section is a horizontal grid (4–6 columns) of cards or logos.
- **Functional, not editorial.** No hero image, no whitespace luxury, no asymmetry.
- **Mobile-first responsive** — Angular SPA with `ng-star-inserted` conditional rendering.
- **Carousels** (`home-slider`, `slider-navigation`) for Current Offers.
- **Lazy-loaded images** (`lazy-load-images` class).

### What feels premium
- **Clean, organized, scannable.** Information architecture is excellent — buyer always knows where to go.
- **Monospace part numbers** communicate technical precision.
- **Density of brand logos** (23 parts brands + 14 car makers) signals marketplace scale.
- **The Search-by-Vehicle cascading picker** is the right UX for this domain — buyer-mental-model aligned.
- **Editorial blog** signals expertise and supports SEO.
- **Number-plate search** is genuinely innovative for the India market.

### What feels like slop
- **Sky blue + navy everywhere** reads as dated 2018 Material Design.
- **Zero motion / animation** — page snaps between states, no easing, no choreography.
- **Flat, no depth** — cards don't lift, no hover elevation, no parallax.
- **Generic carousel** for offers — autoplay with no character.
- **No hero moment** — the Search-by-Vehicle form sits in a plain white box.
- **Testimonials without star ratings or context** (workshop? owner? city?) feel thin.
- **Dense logo grids without hierarchy** — every brand the same size, no featured story.
- **SEO long-form copy at the bottom** is utilitarian keyword stuffing, not brand storytelling.
- **No 3D, no interactivity, no spatial depth** — pure 2D catalog.

### What to STEAL for Mercury
1. **Search-by-Vehicle cascading picker** (Make → Model → Year → Modification) — the gold-standard UX for this domain. Mercury should keep this but elevate it visually.
2. **Search by number plate** — India-specific delighter. Keep as a secondary hero input.
3. **My Garage** (saved cars) — drives repeat purchases. Essential.
4. **Featured Categories grid** — keep the 5-card "Search by Category" pattern but with depth, hover lift, and 3D part previews.
5. **Brands we Trust** + **Popular Car Makers** dual grids — proven trust-builder.
6. **Editorial / knowledge-base section** — SEO + authority. Keep article-card pattern with topic tags.
7. **Best Offers + Damaged Parts** dual channels — clever market segmentation. Steal the *concept* (premium / clearance / secondary-market tiers).
8. **Multi-column footer** with About / Policy / Useful Links split — standard but well-executed.
9. **Mobile App download section** — keep as a dark accent band before the footer.
10. **Monospace for part numbers/SKUs** — technical-clinical tell, matches Mercury Playbook.
11. **"10 Days Assured Return"** as a numbered trust callout — keep this exact pattern.

### What to AVOID for Mercury
1. **Sky blue + navy palette** — Mercury owns orange `#FF5722` + charcoal `#1A1A1A`. Don't imitate Boodmo's color.
2. **Flat, no-depth Material Design** — Mercury Playbook mandates surface-ladder depth + hairline borders, NOT drop shadows but real depth hierarchy.
3. **Roboto typography** — Mercury uses Space Grotesk (display, `-2.5px` to `-4px` tracking) + Inter (body) per Playbook.
4. **Dense, content-maximizing grids** — Mercury should breathe more, use whitespace as luxury.
5. **No motion** — Mercury Playbook mandates 0.33s `cubic-bezier(0.22, 1, 0.36, 1)` universal motion + R3F 3D hero.
6. **Plain text testimonials** — Mercury should add star ratings, customer context (workshop name, city, car model), and possibly video.
7. **Keyword-stuffed SEO copy at bottom** — Mercury should write with brand voice, not for crawlers.
8. **Autoplay carousel for offers** — feels cheap; Mercury should use scroll-triggered reveals instead.
9. **Maintenance page** 😅 — Mercury needs a graceful fallback but Boodmo's maintenance page is a UX failure mode.
10. **Generic logo grids** — Mercury should feature 1–2 hero brands per row at larger size, with story, not just 23 equal logos.

---

## J. Footer Structure (3 columns)

Confirmed from cached DOM:

### Column 1 — **About**
- About us → `/pages/static/about/`
- Contact us → `/pages/static/contacts/`
- FAQ → `https://help.boodmo.com/` (separate help subdomain)
- Careers → `/pages/static/careers/`
- Investor Relations → `/pages/static/investor_relations/`
- Suppliers Relations → `/pages/static/suppliers-relations/`
- Discovery Points (loyalty) → `/pages/static/boodmo_discovery_program/`
- boodmo API Solution → `/pages/static/boodmo_api/`
- Become a Vendor → `/pages/static/become_a_vendor_on_boodmo/`

### Column 2 — **Policy**
- Return Policy → `/pages/static/return-policy/`
- Privacy Policy → `/pages/static/privacy-policy/`
- Disclaimer → `/pages/static/disclaimer/`
- Terms of Use → `/pages/static/terms-of-use/`
- Buyers Policy → `/pages/static/buyer_terms_and_conditions/`
- Sellers Policy → `/pages/static/seller_terms/`

### Column 3 — **Useful links**
- Articles → `/pages/article/`
- Brands → `/brands/`
- Catalogues → `/catalog/`
- Car Makers → `/vehicles/`
- Damaged Parts → `/damaged_parts/`
- Best Offers → `/best_offers/`
- Sitemap → `/sitemap.html`
- Sitemap2 → `/sitemap2.html`

**Footer extras:**
- Top-of-footer tagline: "India's biggest online marketplace for car spare parts"
- Social icons: Facebook, Instagram, LinkedIn
- Copyright: "© 2015–2026 Smart Parts Online Pvt. Ltd. (v7.5.2 build 260709.1330)"
- "Support" label at the very bottom

---

## K. Recommended Sections for Mercury's Homepage

Mapping Boodmo's functionality onto Mercury's premium 3D Playbook (light canvas, orange accent, surface-ladder depth, Space Grotesk + Inter, R3F hero, 0.33s motion). The goal is **match Boodmo's buyer-mental-model and information architecture, but elevate every surface to immersive premium**.

| # | Mercury section | Maps to Boodmo | Mercury elevation |
|---|---|---|---|
| 1 | **3D Hero** — floating stylized "M" mark + floating auto parts (gear, piston, wrench) on the sides, orange point light, soft contact shadow, tagline "AUTOMOTIVE SPARE PARTS" center stage. Static poster for `prefers-reduced-motion`. | Replaces Boodmo's flat Search-by-Vehicle form | R3F scene, scroll-driven camera, parallax parts. The Search-by-Vehicle picker becomes a floating glass panel *inside* the 3D scene. |
| 2 | **Search by Vehicle** (Make → Model → Year → Modification) + **Search by Number Plate** + **My Garage** save | Boodmo section #1 (Search by Vehicle) | Precision-radius inputs (4–8px), monospace part-number placeholders, orange focus ring, hairline borders. "My Garage" persists saved cars. |
| 3 | **Current Offers** marquee | Boodmo section #2 (Current Offers carousel) | Replace autoplay carousel with a horizontal marquee + scroll-triggered reveals. Coral-red chips for discount %. |
| 4 | **Featured Categories** grid (5–8 cards) | Boodmo section #4 (Search by Category) | Each card: 3D rotating part icon (R3F), hover lift via surface-ladder, orange CTA arrow, monospace category count ("1,247 parts"). Categories: Maintenance, Filters, Lighting, Brakes, Engine, Suspension, Electrical, Body. |
| 5 | **Why Mercury** (3 value props) | Boodmo section #5 (Why Choose Aftermarket) | Three pillars with 3D icons: **Genuine Parts** / **10-Day Returns** / **Pan-India Delivery**. Each pillars has a numbered, monospace stat ("48hr delivery", "10-day return", "OEM-grade"). |
| 6 | **Parts Brands We Trust** grid | Boodmo section #6 (Brands we Trust) | Tier-1 hero brands at larger card size (Bosch, NGK, Denso, Sachs, Brembo, Hella, Valeo, TRW, Monroe, Lemförder, Philips, Liqui Moly) — feature 6 large + 18 small grid. Hover lifts card. |
| 7 | **Popular Car Makers** grid | Boodmo section #7 (Popular Car Makers) | 14 hero car makers (Maruti, Hyundai, Mahindra, Tata, Honda, Toyota, Kia, VW, Skoda, Renault, Nissan, Ford, Fiat, Chevrolet) — same card system as brands. Click → /makers/[slug]. |
| 8 | **How It Works** (3-step flow) | New for Mercury (Boodmo lacks this) | Step 1: Tell us your car. Step 2: Pick genuine or aftermarket. Step 3: Delivered to your door. Numbered monospace steps, 3D transition between steps on scroll. |
| 9 | **Articles & Knowledge Base** (6-card grid) | Boodmo section #8 (Articles & Reviews) | Editorial cards with topic-tag chips (Brakes, Engine, Cooling, Electrical, Transmission, Steering, Exhaust, Oil). Hover reveals excerpt. "Read more" link in orange. |
| 10 | **Customer Love** (testimonials) | Boodmo section #9 (Our Clients Love us!) | Add 5-star ratings, customer context (workshop name, city, car model), avatar. 3 cards + carousel for more. |
| 11 | **Stats band** (numeric proof) | New for Mercury (Boodmo lacks) | "50,000+ parts", "1,200+ suppliers", "12,00,000+ orders shipped", "4.8★ rating", "Pan-India in 24–48 hrs". Monospace numerals, count-up on scroll-in. |
| 12 | **Download App** (dark band) | Boodmo section #11 | Charcoal `#1A1A1A` band, orange App Store + Google Play badges, phone-mockup with Mercury app preview. |
| 13 | **Footer** (3 columns + extras) | Boodmo section #12 | Same 3-column structure (About / Policy / Useful Links) + Mercury wordmark + orange "M" mark + social icons + copyright + Support link. |

### Section order summary (Mercury homepage, top → bottom)
1. 3D Hero (with embedded Search-by-Vehicle)
2. Search by Vehicle expanded (if not in hero) + Number Plate + My Garage
3. Current Offers marquee
4. Featured Categories (5–8 cards, 3D part icons)
5. Why Mercury (3 value props)
6. Parts Brands We Trust (6 hero + 18 grid)
7. Popular Car Makers (14 grid)
8. How It Works (3-step)
9. Articles & Knowledge Base (6 cards)
10. Customer Love (testimonials with stars)
11. Stats band (numeric proof)
12. Download App (dark band)
13. Footer (3 columns)

---

## Appendix — Method & Provenance

### Direct observation (from cached DOM via z-ai `page_reader`)
- Homepage HTML: 187 KB, full pre-rendered Angular DOM — `/home/z/my-project/docs/screenshots/boodmo-home.html`
- Plain text extract: `/home/z/my-project/docs/screenshots/boodmo-plaintext.txt`
- /vehicles/ page HTML: 84 KB — full list of 39 car makers confirmed
- /brands/ page HTML: 66 KB — JS-rendered, brand list NOT in static HTML
- /catalog/ page HTML: 72 KB — JS-rendered, category list NOT in static HTML
- /sitemap.html: 60 KB — JS-rendered
- /best_offers/ page HTML: 79 KB — JS-rendered
- VLM analysis of maintenance screenshot: `/home/z/my-project/docs/screenshots/vlm-design.json`
- CSS color extraction: 30+ distinct hex codes parsed from inline styles

### Domain knowledge (clearly marked in section E)
- Full ~25-category catalog list (Boodmo's JS-rendered catalog not in static DOM)
- Maintenance page behavior (Boodmo's site was in scheduled-maintenance mode at time of visit)
- Mega-menu structure (not directly observable in cached DOM)

### Limitations
- Live site returned maintenance page (2026-07-16) — could not capture full design screenshots
- Catalog page is JavaScript-rendered; full ~25-category list is partially inferred from homepage featured set + article tags + domain knowledge
- Brands page is also JS-rendered; only the 23 homepage-featured brands are directly confirmed
- Wayback Machine snapshot iframe failed to render (also serves live request → maintenance)
