import { cn } from "@/lib/utils";

/* =========================================================================
   Mercury "M" mark — inline SVG React component.
   Single accent #FF5722 on tinted near-black #14110F. Geometric, angular,
   with a subtle speed-line slash (automotive motion tell).
   Scales from 20px (navbar) to 240px (hero / favicon).
   ========================================================================= */

type MarkProps = {
  size?: number;
  className?: string;
  /** Render on a transparent background (for placing on dark surfaces) */
  bare?: boolean;
};

export function MercuryMark({ size = 36, className, bare = false }: MarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Mercury"
      className={cn("shrink-0", className)}
    >
      {!bare && <rect width="240" height="240" rx="48" fill="#14110F" />}
      <path
        d="M56 64 L56 176 L80 176 L80 104 L120 152 L160 104 L160 176 L184 176 L184 64 L160 64 L120 112 L80 64 Z"
        fill="#FF5722"
      />
      <path d="M62 180 L82 168 L82 176 L62 188 Z" fill="#FF5722" opacity="0.55" />
    </svg>
  );
}

export function MercuryWordmark({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <span
      className={cn(
        "font-display font-bold leading-none",
        onDark ? "text-canvas" : "text-ink",
        className
      )}
      style={{ letterSpacing: "-0.04em" }}
    >
      MERCURY
    </span>
  );
}
