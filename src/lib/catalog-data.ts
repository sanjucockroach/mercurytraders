import {
  Cog,
  Disc3,
  Gauge,
  Zap,
  Wind,
  Settings2,
  Thermometer,
  Filter,
  CarFront,
  Droplets,
  BatteryCharging,
  CircleDot,
  type LucideIcon,
} from "lucide-react";

/* =========================================================================
   MERCURY catalog data — powers the frontend (no backend).
   Sourced from competitor analysis (Boodmo) + Indian auto-parts market.
   ========================================================================= */

export type Category = {
  id: string;
  name: string;
  slug: string;
  icon: LucideIcon;
  count: number;
  blurb: string;
};

export const categories: Category[] = [
  {
    id: "engine",
    name: "Engine & Components",
    slug: "engine",
    icon: Cog,
    count: 18420,
    blurb: "Pistons, gaskets, timing chains, cylinder heads",
  },
  {
    id: "brakes",
    name: "Brakes & ABS",
    slug: "brakes",
    icon: Disc3,
    count: 9640,
    blurb: "Discs, pads, calipers, ABS modules",
  },
  {
    id: "suspension",
    name: "Suspension & Steering",
    slug: "suspension",
    icon: Gauge,
    count: 11280,
    blurb: "Shock absorbers, control arms, tie rods",
  },
  {
    id: "electrical",
    name: "Electrical & Lighting",
    slug: "electrical",
    icon: Zap,
    count: 21340,
    blurb: "Alternators, starters, sensors, harnesses",
  },
  {
    id: "filters",
    name: "Filters",
    slug: "filters",
    icon: Wind,
    count: 7820,
    blurb: "Oil, air, fuel, cabin filters",
  },
  {
    id: "clutch",
    name: "Clutch & Transmission",
    slug: "clutch",
    icon: Settings2,
    count: 5460,
    blurb: "Clutch kits, flywheels, gear assemblies",
  },
  {
    id: "cooling",
    name: "Cooling System",
    slug: "cooling",
    icon: Thermometer,
    count: 4120,
    blurb: "Radiators, water pumps, thermostats",
  },
  {
    id: "exhaust",
    name: "Exhaust System",
    slug: "exhaust",
    icon: Filter,
    count: 3280,
    blurb: "Mufflers, catalytic converters, pipes",
  },
  {
    id: "body",
    name: "Body & Exterior",
    slug: "body",
    icon: CarFront,
    count: 14650,
    blurb: "Bumpers, mirrors, fenders, grilles",
  },
  {
    id: "oils",
    name: "Oils & Lubricants",
    slug: "oils",
    icon: Droplets,
    count: 2940,
    blurb: "Engine oil, gearbox oil, coolant, grease",
  },
  {
    id: "battery",
    name: "Battery",
    slug: "battery",
    icon: BatteryCharging,
    count: 680,
    blurb: "Lead-acid, AGM, lithium car batteries",
  },
  {
    id: "tires",
    name: "Tires & Wheels",
    slug: "tires",
    icon: CircleDot,
    count: 3120,
    blurb: "All-season, performance, alloy wheels",
  },
];

/* Car makers — Indian market (39 confirmed from Boodmo /vehicles page) */
export type CarBrand = {
  name: string;
  popular?: boolean;
};

export const carBrands: CarBrand[] = [
  { name: "Maruti Suzuki", popular: true },
  { name: "Hyundai", popular: true },
  { name: "Tata", popular: true },
  { name: "Mahindra", popular: true },
  { name: "Honda", popular: true },
  { name: "Toyota", popular: true },
  { name: "Kia", popular: true },
  { name: "Volkswagen", popular: true },
  { name: "Skoda", popular: true },
  { name: "Nissan", popular: true },
  { name: "Renault", popular: true },
  { name: "Ford", popular: true },
  { name: "Jeep", popular: true },
  { name: "MG", popular: true },
  { name: "Chevrolet" },
  { name: "Fiat" },
  { name: "Mercedes-Benz" },
  { name: "BMW" },
  { name: "Audi" },
  { name: "Volvo" },
  { name: "Jaguar" },
  { name: "Land Rover" },
  { name: "Porsche" },
  { name: "Datsun" },
  { name: "Force" },
  { name: "Isuzu" },
  { name: "Ashok Leyland" },
  { name: "Eicher" },
  { name: "Tata Commercial" },
  { name: "Mahindra Truck" },
];

/* Parts brands / suppliers — 23 confirmed from Boodmo homepage */
export type PartsBrand = {
  name: string;
  origin: string;
  flagship: string;
};

export const partsBrands: PartsBrand[] = [
  { name: "Bosch", origin: "Germany", flagship: "Engine management, sensors" },
  { name: "Denso", origin: "Japan", flagship: "Spark plugs, alternators" },
  { name: "NGK", origin: "Japan", flagship: "Spark plugs, glow plugs" },
  { name: "Brembo", origin: "Italy", flagship: "Brake discs, pads" },
  { name: "Sachs", origin: "Germany", flagship: "Clutch, dampers" },
  { name: "Monroe", origin: "Belgium", flagship: "Shock absorbers" },
  { name: "Lemförder", origin: "Germany", flagship: "Suspension, steering" },
  { name: "Hella", origin: "Germany", flagship: "Lighting, electronics" },
  { name: "Philips", origin: "Netherlands", flagship: "Auto bulbs, LEDs" },
  { name: "Liqui Moly", origin: "Germany", flagship: "Oils, additives" },
  { name: "Valeo", origin: "France", flagship: "Clutch, wipers" },
  { name: "TRW", origin: "USA", flagship: "Steering, suspension" },
  { name: "SKF", origin: "Sweden", flagship: "Bearings, seals" },
  { name: "Schaeffler", origin: "Germany", flagship: "Bearings, engine" },
  { name: "Continental", origin: "Germany", flagship: "Belts, hoses, tires" },
  { name: "Mahle", origin: "Germany", flagship: "Pistons, filters" },
  { name: "Mann-Filter", origin: "Germany", flagship: "Filters" },
  { name: "Bosch India", origin: "India", flagship: "Local OEM supply" },
  { name: "Uno Minda", origin: "India", flagship: "Switches, lighting" },
  { name: "Gabriel", origin: "India", flagship: "Shock absorbers" },
  { name: "Elofic", origin: "India", flagship: "Oil filters" },
  { name: "Motherson", origin: "India", flagship: "Wiring, mirrors" },
  { name: "Exide", origin: "India", flagship: "Car batteries" },
];

/* Featured products — mapped to generated product photography */
export type Product = {
  id: string;
  sku: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  price: number;
  mrp: number;
  rating: number;
  reviews: number;
  fitsExample: string;
  stock: "in" | "low" | "out";
  tag?: string;
};

export const products: Product[] = [
  {
    id: "p1",
    sku: "BRK-DSC-2721",
    name: "Front Brake Disc Rotor — Ventilated",
    brand: "Bosch",
    category: "Brakes & ABS",
    image: "/images/products/brake-disc.png",
    price: 2840,
    mrp: 3650,
    rating: 4.7,
    reviews: 1284,
    fitsExample: "Maruti Swift, Baleno, Dzire",
    stock: "in",
    tag: "Bestseller",
  },
  {
    id: "p2",
    sku: "OIL-FLT-9887",
    name: "Spin-On Engine Oil Filter",
    brand: "Mahle",
    category: "Filters",
    image: "/images/products/oil-filter.png",
    price: 420,
    mrp: 580,
    rating: 4.8,
    reviews: 2940,
    fitsExample: "Hyundai i20, Creta, Verna",
    stock: "in",
    tag: "Bestseller",
  },
  {
    id: "p3",
    sku: "SPK-IRD-4419",
    name: "Iridium Spark Plug — Set of 4",
    brand: "NGK",
    category: "Electrical & Lighting",
    image: "/images/products/spark-plugs.png",
    price: 1980,
    mrp: 2600,
    rating: 4.9,
    reviews: 856,
    fitsExample: "Honda City, Jazz, WR-V",
    stock: "in",
  },
  {
    id: "p4",
    sku: "AIR-FLT-1120",
    name: "Cabin Air Filter — Activated Carbon",
    brand: "Bosch",
    category: "Filters",
    image: "/images/products/air-filter.png",
    price: 680,
    mrp: 920,
    rating: 4.6,
    reviews: 1620,
    fitsExample: "Tata Nexon, Harrier, Safari",
    stock: "in",
  },
  {
    id: "p5",
    sku: "LED-HDL-7782",
    name: "LED Projector Headlight Assembly — LH",
    brand: "Hella",
    category: "Electrical & Lighting",
    image: "/images/products/headlight.png",
    price: 8640,
    mrp: 11200,
    rating: 4.5,
    reviews: 214,
    fitsExample: "Mahindra XUV700, Scorpio-N",
    stock: "low",
    tag: "Limited",
  },
  {
    id: "p6",
    sku: "SUS-SHK-3340",
    name: "Gas Front Shock Absorber — Pair",
    brand: "Sachs",
    category: "Suspension & Steering",
    image: "/images/products/shock-absorber.png",
    price: 4920,
    mrp: 6400,
    rating: 4.7,
    reviews: 488,
    fitsExample: "Volkswagen Polo, Vento",
    stock: "in",
  },
];

/* Stats — numeric proof band */
export const stats = [
  { value: "1.2M+", label: "Genuine parts in catalog", sub: "OEM + aftermarket" },
  { value: "23+", label: "Trusted parts brands", sub: "Bosch, Denso, NGK & more" },
  { value: "39", label: "Car makers supported", sub: "Maruti to Mercedes" },
  { value: "18000+", label: "Pin codes served", sub: "Pan-India delivery" },
];

/* How it works */
export const howItWorks = [
  {
    step: "01",
    title: "Find your car",
    body: "Pick make, model, year and variant — or paste your number plate. We lock the exact fitment catalogue for your vehicle.",
  },
  {
    step: "02",
    title: "Choose your part",
    body: "Browse OEM, OEM-equivalent and aftermarket options. Compare price, brand, warranty and delivery time side-by-side.",
  },
  {
    step: "03",
    title: "Order & receive",
    body: "Checkout in seconds. Track your shipment in real time. 10-day returns and genuine-part warranty on every order.",
  },
];

/* Value props — Why Mercury */
export const valueProps = [
  {
    title: "Genuine, every time",
    body: "Every part is sourced directly from authorised distributors. Batch-level traceability, manufacturer warranty, zero counterfeits.",
    metric: "100%",
    metricLabel: "authenticity verified",
  },
  {
    title: "Fits your exact car",
    body: "Our fitment engine cross-references OEM part numbers against your vehicle's VIN, so you never order the wrong part.",
    metric: "39",
    metricLabel: "car makers mapped",
  },
  {
    title: "Fast, pan-India",
    body: "Dispatch within 24 hours from 8 regional warehouses. 1–4 day delivery to 18,000+ pin codes with real-time tracking.",
    metric: "24h",
    metricLabel: "dispatch SLA",
  },
];

/* Testimonials */
export const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Owner · Maruti Brezza",
    city: "Pune",
    quote:
      "Ordered brake pads and a cabin filter for my Brezza. Fitment was perfect, delivery in 2 days, and the price was 30% lower than my authorised service centre.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    role: "Owner · Hyundai Creta",
    city: "Hyderabad",
    quote:
      "The fitment engine is scary accurate. I searched by my number plate and it showed the exact OEM part number. No more guessing at the spare-parts shop.",
    rating: 5,
  },
  {
    name: "Arjun Nair",
    role: "Workshop owner · 12 cars serviced weekly",
    city: "Kochi",
    quote:
      "I run a multi-brand workshop. Mercury's catalogue and bulk pricing have cut my procurement time from hours to minutes. Bosch, NGK, Sachs — all in one invoice.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Owner · Mahindra Thar",
    city: "Jaipur",
    quote:
      "Found a hard-to-source suspension bushing for my Thar here. Called support, they confirmed fitment, shipped same day. Genuine part, fair price.",
    rating: 4,
  },
];

/* Articles / knowledge base */
export const articles = [
  {
    title: "OEM vs OEM-equivalent vs aftermarket: what should you buy?",
    excerpt:
      "The three tiers of spare parts, decoded. When OEM matters, when equivalent is identical, and when aftermarket is the smart play.",
    readTime: "6 min read",
    category: "Buying guide",
  },
  {
    title: "Brake pad wear: the 4 sounds you should never ignore",
    excerpt:
      "Squeals, grinds, clicks and thuds — what each one means, how long you have before failure, and the parts you'll likely need.",
    readTime: "5 min read",
    category: "Diagnostics",
  },
  {
    title: "Engine oil grades explained for Indian driving conditions",
    excerpt:
      "5W-30, 10W-40, 0W-20 — what the numbers mean, how monsoon and summer in India change the math, and the brands we trust.",
    readTime: "7 min read",
    category: "Maintenance",
  },
];

/* Offers marquee */
export const offers = [
  "Flat 15% off on all Bosch spark plugs — code BOSCH15",
  "Free pan-India shipping on orders above ₹1,499",
  "New user? Get ₹200 off your first order — WELCOME200",
  "Sachs suspension kit + free installation in Delhi NCR",
  "10-day easy returns · Genuine-part warranty on every order",
  "Bulk pricing for workshops — register your garage today",
];
