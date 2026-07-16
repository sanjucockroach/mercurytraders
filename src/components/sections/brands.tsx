"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Car } from "lucide-react";
import { partsBrands, carBrands } from "@/lib/catalog-data";

export function Brands() {
  const heroBrands = partsBrands.slice(0, 6);
  const gridBrands = partsBrands.slice(6);
  const popularCars = carBrands.filter((b) => b.popular);

  return (
    <section id="brands" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Parts brands */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <span className="eyebrow text-primary">Parts brands we trust</span>
              <h2
                className="mt-3 font-display font-bold text-ink"
                style={{ letterSpacing: "-0.035em", fontSize: "clamp(2rem, 4.5vw, 3.25rem)", lineHeight: 1.0 }}
              >
                Sourced from the{" "}
                <span className="text-primary">best in the world.</span>
              </h2>
              <p className="mt-3 text-ink-muted max-w-lg">
                Authorised distributor for 23 OEM and tier-1 parts brands.
                Batch-level traceability on every shipment.
              </p>
            </div>
          </div>

          {/* Hero brands — 3x2 large cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-4">
            {heroBrands.map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group rounded-card bg-surface-1 border border-hairline p-5 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl font-bold tracking-display-sm text-ink">
                    {b.name}
                  </span>
                  <span className="eyebrow text-ink-muted text-[10px]">{b.origin}</span>
                </div>
                <p className="mt-2 text-xs text-ink-muted">{b.flagship}</p>
              </motion.div>
            ))}
          </div>

          {/* Grid brands — compact */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {gridBrands.map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                className="rounded-input bg-surface-1 border border-hairline px-3 py-2.5 text-center hover:border-primary/40 transition-colors"
              >
                <div className="font-display text-sm font-semibold tracking-display-sm text-ink truncate">
                  {b.name}
                </div>
                <div className="text-[10px] text-ink-muted mt-0.5">{b.origin}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Car makers */}
        <div className="mt-16 pt-16 border-t border-hairline">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <span className="eyebrow text-primary">Cars we serve</span>
              <h2
                className="mt-3 font-display font-bold text-ink"
                style={{ letterSpacing: "-0.035em", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", lineHeight: 1.0 }}
              >
                From Maruti to Mercedes — 39 makers mapped
              </h2>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs text-ink-muted">
              <Car className="h-4 w-4 text-primary" />
              <span>Popular brands shown</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2.5">
            {popularCars.map((c, i) => (
              <motion.button
                key={c.name}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="group rounded-input bg-surface-1 border border-hairline px-3 py-4 text-center hover:border-primary hover:bg-primary/5 transition-all"
              >
                <div className="font-display text-sm font-semibold tracking-display-sm text-ink group-hover:text-primary transition-colors">
                  {c.name}
                </div>
              </motion.button>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-ink-muted">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span>
              Plus 25 more makers including commercial vehicles — full list in the
              catalogue.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
