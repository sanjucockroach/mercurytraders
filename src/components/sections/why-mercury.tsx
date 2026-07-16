"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Crosshair, Truck } from "lucide-react";
import { valueProps } from "@/lib/catalog-data";

const ICONS = [ShieldCheck, Crosshair, Truck];

export function WhyMercury() {
  return (
    <section id="why" className="py-20 md:py-28 bg-ink text-canvas relative overflow-hidden">
      {/* technical dotted grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 75%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="eyebrow text-primary">Why Mercury</span>
          <h2
            className="mt-3 font-display font-bold text-canvas"
            style={{ letterSpacing: "-0.035em", fontSize: "clamp(2rem, 4.5vw, 3.25rem)", lineHeight: 1.0 }}
          >
            Built for people who refuse to fit the wrong part.
          </h2>
          <p className="mt-4 text-canvas/60 text-lg leading-relaxed">
            Three promises that make Mercury the spare-parts marketplace
            mechanics and owners trust.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-px bg-canvas/10 rounded-card overflow-hidden border border-canvas/10">
          {valueProps.map((vp, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={vp.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="bg-ink p-7 md:p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="h-12 w-12 rounded-input bg-primary/15 flex items-center justify-center text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-display text-3xl font-bold tracking-display-sm text-primary/90">
                    {vp.metric}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-display-sm text-canvas">
                  {vp.title}
                </h3>
                <p className="mt-2 text-sm text-canvas/60 leading-relaxed">{vp.body}</p>
                <p className="mt-4 eyebrow text-canvas/40 text-[10px]">{vp.metricLabel}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
