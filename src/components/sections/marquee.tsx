"use client";

import { Tag, Truck, RotateCcw, ShieldCheck, Wrench, Percent } from "lucide-react";

const items = [
  { icon: Percent, text: "Flat 15% off on all Bosch spark plugs — code BOSCH15" },
  { icon: Truck, text: "Free pan-India shipping on orders above ₹1,499" },
  { icon: Tag, text: "New user? Get ₹200 off your first order — WELCOME200" },
  { icon: Wrench, text: "Sachs suspension kit + free installation in Delhi NCR" },
  { icon: RotateCcw, text: "10-day easy returns · Genuine-part warranty on every order" },
  { icon: ShieldCheck, text: "Bulk pricing for workshops — register your garage today" },
];

export function Marquee() {
  // Duplicate the list so the marquee loops seamlessly.
  const loop = [...items, ...items];
  return (
    <section
      aria-label="Current offers"
      className="relative border-y border-hairline bg-ink overflow-hidden"
    >
      <div className="flex w-max animate-marquee-slow py-3">
        {loop.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-2.5 px-6 text-canvas/90 whitespace-nowrap"
            >
              <Icon className="h-4 w-4 text-primary shrink-0" />
              <span className="text-sm font-medium tracking-display-sm">
                {item.text}
              </span>
              <span className="text-primary/40 ml-6">/</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
