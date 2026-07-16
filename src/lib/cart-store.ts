"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/lib/catalog-data";

/* =========================================================================
   Mercury cart — Zustand, persisted to localStorage.
   No backend. Checkout builds a WhatsApp URL (Playbook §13.6 pattern).
   ========================================================================= */

export type CartLine = {
  id: string; // product id
  sku: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  qty: number;
};

type CartState = {
  lines: CartLine[];
  isOpen: boolean;
  add: (product: Product) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
  toggle: () => void;
  count: () => number;
  subtotal: () => number;
};

const WHATSAPP_NUMBER = "919000012345"; // +91 90000 12345 — Mercury support line

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      isOpen: false,

      add: (product) =>
        set((s) => {
          const existing = s.lines.find((l) => l.id === product.id);
          if (existing) {
            return {
              lines: s.lines.map((l) =>
                l.id === product.id ? { ...l, qty: l.qty + 1 } : l
              ),
              isOpen: true,
            };
          }
          return {
            lines: [
              ...s.lines,
              {
                id: product.id,
                sku: product.sku,
                name: product.name,
                brand: product.brand,
                image: product.image,
                price: product.price,
                qty: 1,
              },
            ],
            isOpen: true,
          };
        }),

      remove: (id) => set((s) => ({ lines: s.lines.filter((l) => l.id !== id) })),

      setQty: (id, qty) =>
        set((s) => ({
          lines: s.lines
            .map((l) => (l.id === id ? { ...l, qty: Math.max(0, qty) } : l))
            .filter((l) => l.qty > 0),
        })),

      clear: () => set({ lines: [] }),
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      toggle: () => set((s) => ({ isOpen: !s.isOpen })),

      count: () => get().lines.reduce((n, l) => n + l.qty, 0),
      subtotal: () => get().lines.reduce((sum, l) => sum + l.price * l.qty, 0),
    }),
    { name: "mercury-cart" }
  )
);

/* Build the WhatsApp checkout URL — no server call. */
export function buildWhatsAppCheckout(lines: CartLine[], subtotal: number): string {
  if (lines.length === 0) return `https://wa.me/${WHATSAPP_NUMBER}`;
  let msg = "Hi Mercury! I'd like to order the following spare parts:\n\n";
  lines.forEach((l, i) => {
    msg += `${i + 1}. ${l.name}\n`;
    msg += `   SKU: ${l.sku} · Brand: ${l.brand}\n`;
    msg += `   Qty: ${l.qty} × ₹${l.price} = ₹${l.price * l.qty}\n\n`;
  });
  msg += `Subtotal: ₹${subtotal}\n`;
  msg += `\nPlease confirm availability and delivery. Thank you!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export { WHATSAPP_NUMBER };
