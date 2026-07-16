"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const contactItems = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 84476 66288",
    href: `https://wa.me/918447666288?text=${encodeURIComponent("Hi Mercury Traders! I have a question about a spare part.")}`,
    sub: "Fastest response · 9am–9pm",
  },
  {
    icon: Phone,
    label: "Call us",
    value: "+91 84476 66288",
    href: "tel:+918447666288",
    sub: "Mon–Sat · 9am–7pm IST",
  },
  {
    icon: Mail,
    label: "Email",
    value: "sales@mercurytraders.in",
    href: "mailto:sales@mercurytraders.in",
    sub: "Reply within 4 working hours",
  },
  {
    icon: MapPin,
    label: "Visit our store",
    value: "1556, A Church Road, Kashmere Gate",
    href: "https://maps.google.com/?q=1556+A+Church+Road+Kashmere+Gate+Delhi+110006",
    sub: "Delhi - 110006",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-start">
          {/* Left — copy + contact methods */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow text-primary">Talk to us</span>
            <h2
              className="mt-3 font-display font-bold text-ink"
              style={{ letterSpacing: "-0.035em", fontSize: "clamp(2rem, 4.5vw, 3.25rem)", lineHeight: 1.0 }}
            >
              Real mechanics.{" "}
              <span className="text-primary">Real answers.</span>
            </h2>
            <p className="mt-4 text-ink-muted text-lg leading-relaxed max-w-lg">
              Not sure which part fits? Stuck on a fitment question? Our team
              includes trained workshop technicians — not call-centre agents.
            </p>

            <div className="mt-8 space-y-3">
              {contactItems.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 p-4 rounded-card bg-surface-1 border border-hairline hover:border-primary/40 transition-colors"
                  >
                    <div className="h-11 w-11 rounded-input bg-surface-2 flex items-center justify-center text-ink group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="eyebrow text-ink-muted text-[10px]">{c.label}</div>
                      <div className="font-display font-semibold tracking-display-sm text-ink truncate">
                        {c.value}
                      </div>
                      <div className="text-xs text-ink-muted mt-0.5">{c.sub}</div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-ink-muted group-hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right — info card with hours + address */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-card bg-ink text-canvas p-7 md:p-9 relative overflow-hidden"
          >
            {/* dotted grid backdrop */}
            <div
              className="absolute inset-0 opacity-[0.1] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "26px 26px",
              }}
            />
            <div className="relative">
              <h3 className="font-display text-xl font-semibold tracking-display-sm">
                Mercury Traders
              </h3>
              <p className="text-canvas/60 text-sm mt-1">
                Store &amp; dispatch centre · Kashmere Gate, Delhi
              </p>

              <div className="mt-7 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">1556, A Church Road, Kashmere Gate</div>
                    <div className="text-canvas/60 text-sm">Delhi - 110006, India</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-sm">Working hours</div>
                    <div className="text-canvas/60 text-sm">Monday – Saturday · 9:00 – 19:00</div>
                    <div className="text-canvas/60 text-sm">Sunday · closed (online orders open)</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-canvas/10 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="font-display text-2xl font-bold tracking-display-sm text-primary">8</div>
                  <div className="eyebrow text-canvas/50 text-[10px] mt-1">Warehouses</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold tracking-display-sm text-primary">24h</div>
                  <div className="eyebrow text-canvas/50 text-[10px] mt-1">Dispatch</div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold tracking-display-sm text-primary">18k+</div>
                  <div className="eyebrow text-canvas/50 text-[10px] mt-1">Pin codes</div>
                </div>
              </div>

              <a
                href="https://wa.me/918447666288"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 w-full inline-flex items-center justify-center gap-2 h-12 rounded-input bg-primary text-white text-sm font-semibold hover:brightness-110 active:scale-[0.99] transition-all"
              >
                <MessageCircle className="h-[18px] w-[18px]" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
