"use client";

import { motion } from "framer-motion";
import { Clock, ArrowUpRight, BookOpen } from "lucide-react";
import { articles } from "@/lib/catalog-data";

export function Articles() {
  return (
    <section id="articles" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <span className="eyebrow text-primary">Knowledge base</span>
            <h2
              className="mt-3 font-display font-bold text-ink"
              style={{ letterSpacing: "-0.035em", fontSize: "clamp(2rem, 4.5vw, 3.25rem)", lineHeight: 1.0 }}
            >
              Know your car, fix it right.
            </h2>
            <p className="mt-3 text-ink-muted max-w-lg">
              Engineering-grade guides from our workshop technicians. No
              advertorials — just the parts math.
            </p>
          </div>
          <a
            href="#articles"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-primary transition-colors group"
          >
            <BookOpen className="h-4 w-4" />
            All articles
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {articles.map((a, i) => (
            <motion.a
              key={a.title}
              href="#articles"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex flex-col rounded-card bg-surface-1 border border-hairline p-6 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow text-primary text-[10px]">{a.category}</span>
                <ArrowUpRight className="h-4 w-4 text-ink-muted opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all" />
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug tracking-display-sm text-ink group-hover:text-primary transition-colors">
                {a.title}
              </h3>
              <p className="mt-2 text-sm text-ink-muted leading-relaxed line-clamp-3">
                {a.excerpt}
              </p>
              <div className="mt-auto pt-5 flex items-center gap-1.5 text-xs text-ink-muted">
                <Clock className="h-3.5 w-3.5" />
                {a.readTime}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
