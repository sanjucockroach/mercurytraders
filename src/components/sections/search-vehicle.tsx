"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Car, ChevronDown, Hash, Search, CheckCircle2 } from "lucide-react";
import { carBrands } from "@/lib/catalog-data";

const POPULAR_MODELS: Record<string, string[]> = {
  "Maruti Suzuki": ["Swift", "Baleno", "Dzire", "Brezza", "Wagon R", "Ertiga"],
  Hyundai: ["i20", "Creta", "Verna", "Venue", "Alcazar", "Exter"],
  Tata: ["Nexon", "Harrier", "Safari", "Punch", "Altroz", "Tiago"],
  Mahindra: ["XUV700", "Scorpio-N", "Thar", "XUV300", "Bolero", "Marazzo"],
  Honda: ["City", "Amaze", "WR-V", "Elevate", "Jazz"],
  Toyota: ["Innova Crysta", "Fortuner", "Urban Cruiser", "Glanza", "Hyryder"],
  Kia: ["Seltos", "Sonet", "Carens", "EV6"],
  Volkswagen: ["Polo", "Virtus", "Taigun", "Tiguan"],
};

const YEARS = Array.from({ length: 16 }, (_, i) => `${2024 - i}`);

export function SearchVehicle() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [plate, setPlate] = useState("");

  const models = make && POPULAR_MODELS[make] ? POPULAR_MODELS[make] : [];

  return (
    <section
      id="search-vehicle"
      className="relative py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow text-primary">Fitment engine</span>
            <h2
              className="mt-3 font-display font-bold text-ink"
              style={{ letterSpacing: "-0.035em", fontSize: "clamp(2rem, 4.5vw, 3.25rem)", lineHeight: 1.0 }}
            >
              Find parts that fit{" "}
              <span className="text-primary">your exact car.</span>
            </h2>
            <p className="mt-5 text-lg text-ink-muted leading-relaxed max-w-lg">
              Pick your make, model and year — or just paste your number plate.
              Our fitment engine cross-references OEM part numbers so you never
              order the wrong part again.
            </p>

            <ul className="mt-7 space-y-3">
              {[
                "Cross-referenced against OEM part numbers",
                "39 car makers mapped, from Maruti to Mercedes",
                "VIN-locked fitment guarantee on every order",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-ink">
                  <CheckCircle2 className="h-[18px] w-[18px] text-primary shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — the picker card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-card bg-surface-1 border border-hairline p-6 sm:p-8">
              {/* Tabs */}
              <div className="flex items-center gap-1 p-1 rounded-input bg-surface-2 mb-6 w-fit">
                <TabButton active={!plate} onClick={() => setPlate("")} icon={Car}>
                  By vehicle
                </TabButton>
                <TabButton active={!!plate} onClick={() => setPlate(" ")} icon={Hash}>
                  By number plate
                </TabButton>
              </div>

              {!plate ? (
                <div className="space-y-3">
                  <Select
                    label="Make"
                    value={make}
                    onChange={(v) => {
                      setMake(v);
                      setModel("");
                    }}
                    placeholder="Select brand"
                    options={carBrands.map((b) => b.name)}
                  />
                  <Select
                    label="Model"
                    value={model}
                    onChange={setModel}
                    placeholder={make ? "Select model" : "Select make first"}
                    disabled={!make}
                    options={models}
                  />
                  <Select
                    label="Year"
                    value={year}
                    onChange={setYear}
                    placeholder="Select year"
                    options={YEARS}
                  />
                  <button
                    className="mt-2 w-full h-12 rounded-input bg-primary text-white text-sm font-semibold inline-flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.99] transition-all disabled:opacity-40 disabled:pointer-events-none"
                    disabled={!make || !model || !year}
                  >
                    <Search className="h-[18px] w-[18px]" />
                    Show matching parts
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="eyebrow text-ink-muted block mb-2">
                      Number plate
                    </label>
                    <div className="relative">
                      <input
                        value={plate === " " ? "" : plate}
                        onChange={(e) => setPlate(e.target.value.toUpperCase())}
                        placeholder="DL01 AB 1234"
                        className="w-full h-14 px-4 rounded-input bg-surface-2 border border-hairline font-mono text-2xl tracking-[0.15em] text-ink uppercase placeholder:text-ink-muted/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
                        style={{ fontVariant: "small-caps" }}
                        maxLength={11}
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 eyebrow text-ink-muted text-[10px]">
                        India
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-ink-muted">
                      We decode your registration to your vehicle&apos;s exact variant.
                    </p>
                  </div>
                  <button
                    className="w-full h-12 rounded-input bg-primary text-white text-sm font-semibold inline-flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.99] transition-all disabled:opacity-40 disabled:pointer-events-none"
                    disabled={plate.trim().length < 4}
                  >
                    <Search className="h-[18px] w-[18px]" />
                    Decode & find parts
                  </button>
                </div>
              )}

              <div className="mt-6 pt-5 border-t border-hairline flex items-center gap-3 text-xs text-ink-muted">
                <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                <span>
                  Fitment data licensed from OEM catalogues · updated weekly
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TabButton({
  active,
  onClick,
  icon: Icon,
  children,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-4 h-9 rounded-input text-xs font-semibold transition-all ${
        active ? "bg-surface-1 text-ink border border-hairline" : "text-ink-muted hover:text-ink"
      }`}
    >
      <Icon className="h-3.5 w-3.5" />
      {children}
    </button>
  );
}

function Select({
  label,
  value,
  onChange,
  placeholder,
  options,
  disabled,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  options: string[];
  disabled?: boolean;
}) {
  return (
    <div>
      <label className="eyebrow text-ink-muted block mb-1.5">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="w-full h-12 pl-4 pr-10 rounded-input bg-surface-1 border border-hairline text-sm text-ink appearance-none focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted pointer-events-none" />
      </div>
    </div>
  );
}
