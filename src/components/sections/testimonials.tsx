"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/catalog-data";

export function Testimonials() {
  return (
    <section id="love" className="py-20 md:py-28 bg-surface-2/40 border-y border-hairline">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow text-primary">Customer love</span>
          <h2
            className="mt-3 font-display font-bold text-ink"
            style={{ letterSpacing: "-0.035em", fontSize: "clamp(2rem, 4.5vw, 3.25rem)", lineHeight: 1.0 }}
          >
            Trusted by owners &amp; workshops.
          </h2>
          <div className="mt-4 inline-flex items-center gap-2 text-sm text-ink-muted">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-mono text-ink">4.8 / 5</span>
            <span>· 6,400+ verified reviews</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col rounded-card bg-surface-1 border border-hairline p-6"
            >
              <Quote className="h-6 w-6 text-primary/30" />
              <blockquote className="mt-3 text-sm text-ink leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-4 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className={`h-3.5 w-3.5 ${s < t.rating ? "fill-primary text-primary" : "text-hairline"}`}
                  />
                ))}
              </div>
              <figcaption className="mt-3 pt-3 border-t border-hairline">
                <div className="font-display text-sm font-semibold tracking-display-sm text-ink">
                  {t.name}
                </div>
                <div className="text-xs text-ink-muted mt-0.5">{t.role}</div>
                <div className="text-[11px] text-ink-muted/80 font-mono mt-1">{t.city}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
