"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight, Search, Wrench, ShieldCheck, Truck, Star } from "lucide-react";
import { useReducedMotion } from "framer-motion";

// Lazy-load the 3D scene so the LCP <h1> paints first.
const HeroScene = dynamic(
  () => import("@/components/hero-scene").then((m) => m.HeroScene),
  { ssr: false, loading: () => null }
);

const stats = [
  { value: "1.2M+", label: "Genuine parts" },
  { value: "23+", label: "Trusted brands" },
  { value: "24h", label: "Dispatch SLA" },
];

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: reduce ? 0 : 0.15 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden pt-28 pb-16"
    >
      {/* 3D scene — absolute, behind text, center kept clear */}
      <div className="absolute inset-0 z-0">
        <HeroScene className="absolute inset-0 h-full w-full" />
        {/* radial veil so text never fights 3D */}
        <div className="absolute inset-0 hero-veil pointer-events-none" />
        {/* dotted grid — technical tell, very subtle */}
        <div
          className="absolute inset-0 bg-dotgrid opacity-[0.4] pointer-events-none"
          style={{ maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, black 80%)", WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, black 80%)" }}
        />
      </div>

      {/* prefers-reduced-motion static poster fallback */}
      {reduce && (
        <div className="absolute inset-0 z-0">
          { }
          <img
            src="/images/hero-poster.png"
            alt=""
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 hero-veil" />
        </div>
      )}

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        {/* Eyebrow pill */}
        <motion.div variants={item} className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-pill glass-light text-xs font-medium text-ink border-hairline">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-pill bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-pill h-1.5 w-1.5 bg-primary" />
            </span>
            India&apos;s premium spare-parts marketplace
          </span>
        </motion.div>

        {/* H1 — the LCP element. Negative tracking, gradient accent on ONE word only. */}
        <motion.h1
          variants={item}
          className="mt-6 font-display font-bold leading-[0.95] text-ink"
          style={{ letterSpacing: "-0.045em" }}
        >
          <span className="block text-[clamp(2.5rem,8vw,5.5rem)]">
            The right part,
          </span>
          <span className="block text-[clamp(2.5rem,8vw,5.5rem)]">
            for every{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">engine</span>
              <svg
                className="absolute -bottom-1 left-0 w-full h-3 text-primary/30"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M2 9 Q 50 2 100 6 T 198 5" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            .
          </span>
        </motion.h1>

        {/* Supporting sentence */}
        <motion.p
          variants={item}
          className="mt-6 mx-auto max-w-2xl text-base sm:text-lg text-ink-muted leading-relaxed"
        >
          Search by your car&apos;s make, model and year — or paste your number
          plate. Get OEM, OEM-equivalent and aftermarket options from 23 trusted
          brands, delivered pan-India.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#search-vehicle"
            className="group inline-flex items-center justify-center gap-2 h-12 px-6 rounded-input bg-primary text-white text-sm font-semibold hover:brightness-110 active:scale-[0.99] transition-all"
          >
            <Search className="h-[18px] w-[18px]" />
            Find parts for my car
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#categories"
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-input bg-surface-1 text-ink text-sm font-medium border border-hairline hover:bg-surface-2 transition-all"
          >
            <Wrench className="h-[18px] w-[18px]" />
            Browse catalogue
          </a>
        </motion.div>

        {/* Trust row — small */}
        <motion.div
          variants={item}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-ink-muted"
        >
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            Genuine, every time
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Truck className="h-3.5 w-3.5 text-primary" />
            Pan-India delivery
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Star className="h-3.5 w-3.5 text-primary" />
            4.8/5 · 6,400+ reviews
          </span>
        </motion.div>

        {/* Stats row — glass-dark, sits over the 3D scene */}
        <motion.div
          variants={item}
          className="mt-12 inline-flex items-stretch rounded-card glass-ink overflow-hidden divide-x divide-white/10"
        >
          {stats.map((s) => (
            <div key={s.label} className="px-6 sm:px-8 py-4 text-center">
              <div className="font-display text-2xl sm:text-3xl font-bold tracking-display-sm text-canvas">
                {s.value}
              </div>
              <div className="eyebrow text-canvas/60 mt-1 text-[10px]">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-1.5 text-ink-muted"
        aria-hidden="true"
      >
        <span className="eyebrow text-[10px]">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-ink-muted/50 to-transparent" />
      </motion.div>
    </section>
  );
}
