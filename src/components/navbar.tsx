"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, Wrench, Menu, X, Phone } from "lucide-react";
import { MercuryMark, MercuryWordmark } from "@/components/mercury-mark";
import { useCart } from "@/lib/cart-store";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Catalogue", href: "#categories" },
  { label: "Brands", href: "#brands" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Knowledge", href: "#articles" },
  { label: "Support", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const cartCount = useCart((s) => s.lines.reduce((n, l) => n + l.qty, 0));
  const openCart = useCart((s) => s.open);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "glass-light border-b border-hairline"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-[72px] items-center justify-between gap-4">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2.5 group" aria-label="Mercury home">
            <MercuryMark size={36} />
            <div className="flex flex-col leading-none">
              <MercuryWordmark className="text-[19px]" />
              <span className="eyebrow text-ink-muted text-[9px] mt-1 hidden sm:block">
                Automotive Spare Parts
              </span>
            </div>
          </a>

          {/* Desktop search */}
          <div className="hidden lg:flex flex-1 max-w-md mx-4">
            <div className="relative w-full group">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted" />
              <input
                type="search"
                placeholder="Search by part name, SKU, or car…"
                aria-label="Search parts"
                className="w-full h-11 pl-10 pr-20 rounded-input bg-surface-1 border border-hairline text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
              />
              <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden xl:inline-flex items-center gap-1 px-1.5 py-0.5 rounded-chip bg-surface-2 border border-hairline text-[10px] font-mono text-ink-muted">
                ⌘K
              </kbd>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors rounded-input"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-1.5">
            <a
              href="tel:+919000012345"
              className="hidden sm:inline-flex items-center justify-center h-11 w-11 rounded-input text-ink hover:bg-surface-2 transition-colors"
              aria-label="Call Mercury support"
            >
              <Phone className="h-[18px] w-[18px]" />
            </a>
            <a
              href="#search-vehicle"
              className="hidden sm:inline-flex items-center gap-2 h-11 px-4 rounded-input text-sm font-medium text-ink hover:bg-surface-2 transition-colors"
            >
              <Wrench className="h-[18px] w-[18px]" />
              <span>My Garage</span>
            </a>
            <button
              onClick={openCart}
              className="relative inline-flex items-center justify-center h-11 w-11 rounded-input text-ink hover:bg-surface-2 transition-colors"
              aria-label={`Open cart, ${cartCount} items`}
            >
              <ShoppingCart className="h-[18px] w-[18px]" />
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 inline-flex items-center justify-center rounded-pill bg-primary text-white text-[10px] font-bold font-mono"
                >
                  {cartCount > 9 ? "9+" : cartCount}
                </motion.span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-input text-ink hover:bg-surface-2 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden glass-light border-t border-hairline"
          >
            <div className="px-4 sm:px-6 py-4 space-y-3">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted" />
                <input
                  type="search"
                  placeholder="Search parts…"
                  aria-label="Search parts"
                  className="w-full h-12 pl-10 pr-4 rounded-input bg-surface-1 border border-hairline text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15"
                />
              </div>
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-ink hover:bg-surface-2 rounded-input"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#search-vehicle"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-3 py-3 text-base font-medium text-primary"
              >
                <Wrench className="h-5 w-5" />
                My Garage
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
