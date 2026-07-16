"use client";

import { MercuryMark, MercuryWordmark } from "@/components/mercury-mark";
import { ShieldCheck, Truck, RotateCcw, Wrench } from "lucide-react";

const footerNav = {
  Catalogue: [
    "Engine & Components",
    "Brakes & ABS",
    "Suspension & Steering",
    "Electrical & Lighting",
    "Filters",
    "Oils & Lubricants",
  ],
  Company: ["About Mercury", "Careers", "Press kit", "Workshop program", "Become a supplier", "Blog"],
  Support: ["Track order", "Returns & warranty", "Fitment help", "Contact us", "FAQs", "Bulk pricing"],
  Legal: ["Privacy policy", "Terms of service", "Refund policy", "Shipping policy", "Disclaimer"],
};

const trustBadges = [
  { icon: ShieldCheck, label: "Genuine, every time" },
  { icon: Truck, label: "Pan-India delivery" },
  { icon: RotateCcw, label: "10-day returns" },
  { icon: Wrench, label: "Workshop pricing" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-ink text-canvas pb-safe">
      {/* trust badge strip */}
      <div className="border-b border-canvas/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.label} className="flex items-center gap-2.5">
                  <Icon className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-canvas/90">{b.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* main footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-10">
          {/* Brand col */}
          <div>
            <div className="flex items-center gap-2.5">
              <MercuryMark size={40} />
              <div className="flex flex-col leading-none">
                <MercuryWordmark className="text-xl" onDark />
                <span className="eyebrow text-canvas/50 text-[9px] mt-1">
                  Automotive Spare Parts
                </span>
              </div>
            </div>
            <p className="mt-5 text-sm text-canvas/60 leading-relaxed max-w-xs">
              Delhi&apos;s trusted source for genuine automotive spare parts.
              OEM, OEM-equivalent and aftermarket — fitment-locked to your
              exact car.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="eyebrow text-canvas/40 text-[10px]">We accept</span>
              <div className="flex items-center gap-1.5">
                {["UPI", "VISA", "MC", "RUP"].map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center justify-center h-6 px-2 rounded-chip bg-canvas/10 border border-canvas/15 font-mono text-[10px] font-semibold text-canvas/70"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerNav).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="eyebrow text-canvas/40 text-[10px]">{heading}</h3>
              <ul className="mt-4 space-y-2.5">
                {links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-canvas/70 hover:text-primary transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* bottom bar */}
        <div className="mt-12 pt-6 border-t border-canvas/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-canvas/50 font-mono">
            © {new Date().getFullYear()} Mercury Traders · 1556, A Church Road, Kashmere Gate, Delhi - 110006
          </div>
          <div className="flex items-center gap-4 text-xs text-canvas/50">
            <span className="font-mono">Made in Delhi</span>
            <span className="h-3 w-px bg-canvas/20" />
            <span>Ph: +91 84476 66288</span>
            <span className="h-3 w-px bg-canvas/20" />
            <span>v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
