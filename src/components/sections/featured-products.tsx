"use client";

import { motion } from "framer-motion";
import { Star, Plus, Check, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { products, type Product } from "@/lib/catalog-data";
import { useCart } from "@/lib/cart-store";
import { formatINR } from "@/lib/format";

function ProductCard({ product, index }: { product: Product; index: number }) {
  const add = useCart((s) => s.add);
  const [added, setAdded] = useState(false);

  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  const handleAdd = () => {
    add(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  const stockBadge =
    product.stock === "in"
      ? { text: "In stock", cls: "bg-success/10 text-success border-success/20" }
      : product.stock === "low"
      ? { text: "Low stock", cls: "bg-warning/10 text-warning border-warning/20" }
      : { text: "Out of stock", cls: "bg-ink/5 text-ink-muted border-hairline" };

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col rounded-card bg-surface-1 border border-hairline overflow-hidden hover:border-primary/40 transition-colors"
    >
      {/* Image */}
      <div className="relative aspect-square bg-surface-2 overflow-hidden">
        { }
        <img
          src={product.image}
          alt={`${product.name} by ${product.brand}`}
          className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
          loading={index < 4 ? "eager" : "lazy"}
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tag && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-chip bg-primary text-white text-[10px] font-bold uppercase tracking-wide">
              {product.tag}
            </span>
          )}
          {discount > 0 && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-chip bg-ink text-canvas text-[10px] font-bold font-mono">
              -{discount}%
            </span>
          )}
        </div>
        <span
          className={`absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-pill border text-[10px] font-semibold ${stockBadge.cls}`}
        >
          <span className="h-1.5 w-1.5 rounded-pill bg-current" />
          {stockBadge.text}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="eyebrow text-ink-muted">{product.brand}</span>
          <span className="inline-flex items-center gap-1 text-[11px] text-ink-muted">
            <Star className="h-3 w-3 fill-primary text-primary" />
            <span className="font-mono text-ink">{product.rating}</span>
            <span>({product.reviews.toLocaleString("en-IN")})</span>
          </span>
        </div>
        <h3 className="mt-1.5 font-display font-semibold text-sm leading-snug tracking-display-sm text-ink line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        <p className="mt-1 font-mono text-[10px] text-ink-muted">SKU: {product.sku}</p>
        <p className="mt-1.5 text-xs text-ink-muted line-clamp-1">
          Fits: {product.fitsExample}
        </p>

        <div className="mt-auto pt-4 flex items-end justify-between gap-2">
          <div>
            <div className="font-display text-xl font-bold tracking-display-sm text-ink">
              {formatINR(product.price)}
            </div>
            {product.mrp > product.price && (
              <div className="text-xs text-ink-muted line-through font-mono">
                {formatINR(product.mrp)}
              </div>
            )}
          </div>
          <button
            onClick={handleAdd}
            disabled={product.stock === "out"}
            className="inline-flex items-center justify-center gap-1.5 h-10 px-3.5 rounded-input border border-hairline bg-surface-1 text-ink text-xs font-semibold hover:border-primary hover:bg-primary hover:text-white active:scale-95 transition-all disabled:opacity-40 disabled:pointer-events-none"
            aria-label={`Add ${product.name} to cart`}
          >
            {added ? (
              <>
                <Check className="h-4 w-4" />
                Added
              </>
            ) : (
              <>
                <Plus className="h-4 w-4" />
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export function FeaturedProducts() {
  return (
    <section id="products" className="py-20 md:py-28 bg-surface-2/40 border-y border-hairline">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <span className="eyebrow text-primary">Bestsellers</span>
            <h2
              className="mt-3 font-display font-bold text-ink"
              style={{ letterSpacing: "-0.035em", fontSize: "clamp(2rem, 4.5vw, 3.25rem)", lineHeight: 1.0 }}
            >
              Parts mechanics swear by
            </h2>
            <p className="mt-3 text-ink-muted max-w-lg">
              The most-ordered genuine parts this month. Real stock, real prices,
              real warranty.
            </p>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs text-ink-muted">
            <ShieldCheck className="h-4 w-4 text-primary" />
            <span>Every part batch-verified</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-5">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
