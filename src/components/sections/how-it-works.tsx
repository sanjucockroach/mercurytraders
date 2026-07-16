"use client";

import { motion } from "framer-motion";
import { howItWorks } from "@/lib/catalog-data";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow text-primary">How it works</span>
          <h2
            className="mt-3 font-display font-bold text-ink"
            style={{ letterSpacing: "-0.035em", fontSize: "clamp(2rem, 4.5vw, 3.25rem)", lineHeight: 1.0 }}
          >
            Three steps. Zero guesswork.
          </h2>
        </div>

        <div className="relative grid md:grid-cols-3 gap-8 md:gap-4">
          {/* connecting line */}
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-px bg-hairline" />

          {howItWorks.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative text-center md:text-left md:px-6"
            >
              <div className="inline-flex items-center justify-center h-24 w-24 rounded-pill bg-surface-1 border border-hairline mx-auto md:mx-0 relative">
                <span className="font-display text-3xl font-bold tracking-display-sm text-primary">
                  {step.step}
                </span>
                {/* ring */}
                <span className="absolute inset-0 rounded-pill border border-primary/20" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-display-sm text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-ink-muted leading-relaxed md:max-w-xs">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#search-vehicle"
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-input bg-primary text-white text-sm font-semibold hover:brightness-110 active:scale-[0.99] transition-all"
          >
            Start your search
          </a>
        </div>
      </div>
    </section>
  );
}
