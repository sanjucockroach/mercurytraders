"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/catalog-data";

export function Stats() {
  return (
    <section className="py-16 md:py-20 bg-surface-2/50 border-y border-hairline">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline rounded-card overflow-hidden border border-hairline">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-canvas p-6 md:p-8 text-center"
            >
              <div
                className="font-display font-bold text-primary tracking-display-sm"
                style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", lineHeight: 1 }}
              >
                {s.value}
              </div>
              <div className="mt-2 text-sm font-medium text-ink">{s.label}</div>
              <div className="mt-0.5 text-xs text-ink-muted">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
