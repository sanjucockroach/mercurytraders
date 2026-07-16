"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Trash2, Plus, Minus, MessageCircle, ShieldCheck } from "lucide-react";
import { useCart, buildWhatsAppCheckout } from "@/lib/cart-store";
import { formatINR } from "@/lib/format";

export function CartDrawer() {
  const { isOpen, close, lines, setQty, remove, subtotal } = useCart();

  const total = subtotal();
  const whatsappUrl = buildWhatsAppCheckout(lines, total);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm"
            aria-hidden="true"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.33, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 bottom-0 z-[61] w-full max-w-md bg-canvas flex flex-col shadow-signature"
            role="dialog"
            aria-label="Shopping cart"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-hairline">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="h-5 w-5 text-primary" />
                <h2 className="font-display text-lg font-semibold tracking-display-sm">
                  Your order
                </h2>
                <span className="font-mono text-xs text-ink-muted">
                  {lines.length} {lines.length === 1 ? "item" : "items"}
                </span>
              </div>
              <button
                onClick={close}
                className="inline-flex items-center justify-center h-9 w-9 rounded-input text-ink hover:bg-surface-2 transition-colors"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Lines */}
            {lines.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center px-8 text-center gap-4">
                <div className="h-16 w-16 rounded-card bg-surface-2 flex items-center justify-center">
                  <ShoppingBag className="h-7 w-7 text-ink-muted" />
                </div>
                <div>
                  <p className="font-display text-lg font-semibold tracking-display-sm">
                    Your cart is empty
                  </p>
                  <p className="text-sm text-ink-muted mt-1">
                    Browse the catalogue and add genuine parts for your car.
                  </p>
                </div>
                <button
                  onClick={close}
                  className="mt-2 inline-flex items-center justify-center h-11 px-5 rounded-input bg-ink text-canvas text-sm font-medium hover:brightness-110 transition-all"
                >
                  Browse parts
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3">
                  {lines.map((line) => (
                    <div
                      key={line.id}
                      className="flex gap-3 p-3 rounded-card bg-surface-1 border border-hairline"
                    >
                      <div className="h-16 w-16 rounded-chip bg-surface-2 overflow-hidden shrink-0 flex items-center justify-center">
                        { }
                        <img
                          src={line.image}
                          alt={line.name}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium leading-tight line-clamp-2">
                          {line.name}
                        </p>
                        <p className="font-mono text-[11px] text-ink-muted mt-0.5">
                          {line.sku} · {line.brand}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="inline-flex items-center rounded-input border border-hairline">
                            <button
                              onClick={() => setQty(line.id, line.qty - 1)}
                              className="inline-flex items-center justify-center h-7 w-7 text-ink hover:bg-surface-2 rounded-l-input transition-colors"
                              aria-label={`Decrease ${line.name} quantity`}
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="w-8 text-center font-mono text-sm">{line.qty}</span>
                            <button
                              onClick={() => setQty(line.id, line.qty + 1)}
                              className="inline-flex items-center justify-center h-7 w-7 text-ink hover:bg-surface-2 rounded-r-input transition-colors"
                              aria-label={`Increase ${line.name} quantity`}
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <span className="font-display font-semibold text-sm tracking-display-sm">
                            {formatINR(line.price * line.qty)}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => remove(line.id)}
                        className="self-start inline-flex items-center justify-center h-7 w-7 text-ink-muted hover:text-destructive rounded-input transition-colors"
                        aria-label={`Remove ${line.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="border-t border-hairline px-5 py-4 space-y-3 pb-safe">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-ink-muted">Subtotal</span>
                    <span className="font-display text-xl font-bold tracking-display-sm">
                      {formatINR(total)}
                    </span>
                  </div>
                  <p className="text-xs text-ink-muted flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Genuine-part warranty · 10-day returns
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full h-12 rounded-input bg-primary text-white text-sm font-semibold hover:brightness-110 active:scale-[0.99] transition-all"
                  >
                    <MessageCircle className="h-[18px] w-[18px]" />
                    Checkout via WhatsApp
                  </a>
                  <p className="text-center text-[11px] text-ink-muted">
                    No payment online — confirm with our team first.
                  </p>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
