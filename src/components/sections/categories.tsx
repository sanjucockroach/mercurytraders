"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/catalog-data";

/* 3D tilt card — tilts on pointer move. Subtle, premium. */
function TiltCard({
  category,
  index,
}: {
  category: (typeof categories)[number];
  index: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const Icon = category.icon;

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-py * 6}deg) rotateY(${px * 6}deg) translateZ(0)`;
    el.style.setProperty("--mx", `${(px + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(py + 0.5) * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
  };

  return (
    <motion.a
      ref={ref}
      href={`#categories`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      style={{ transition: "transform 0.2s ease-out" }}
      className="group relative block rounded-card bg-surface-1 border border-hairline p-5 overflow-hidden hover:border-primary/40 transition-colors shadow-signature"
    >
      {/* cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background:
            "radial-gradient(220px circle at var(--mx,50%) var(--my,50%), rgba(255,87,34,0.08), transparent 60%)",
        }}
      />
      <div className="relative flex items-start justify-between">
        <div className="h-11 w-11 rounded-input bg-surface-2 flex items-center justify-center text-ink group-hover:bg-primary group-hover:text-white transition-colors">
          <Icon className="h-[22px] w-[22px]" />
        </div>
        <ArrowUpRight className="h-4 w-4 text-ink-muted opacity-0 -translate-x-1 -translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
      </div>
      <h3 className="relative mt-4 font-display font-semibold text-base tracking-display-sm text-ink">
        {category.name}
      </h3>
      <p className="relative mt-1 text-xs text-ink-muted leading-relaxed line-clamp-2">
        {category.blurb}
      </p>
      <p className="relative mt-3 font-mono text-[11px] text-ink-muted">
        {category.count.toLocaleString("en-IN")} parts
      </p>
    </motion.a>
  );
}

export function Categories() {
  return (
    <section id="categories" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <span className="eyebrow text-primary">Catalogue</span>
            <h2
              className="mt-3 font-display font-bold text-ink"
              style={{ letterSpacing: "-0.035em", fontSize: "clamp(2rem, 4.5vw, 3.25rem)", lineHeight: 1.0 }}
            >
              Browse by category
            </h2>
            <p className="mt-3 text-ink-muted max-w-lg">
              Over 1.2 million genuine parts across 12 systems. From the engine
              bay to the tail lamp.
            </p>
          </div>
          <a
            href="#categories"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-primary transition-colors group"
          >
            View all categories
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {categories.map((c, i) => (
            <TiltCard key={c.id} category={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
