"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ArrowLeft, Check } from "lucide-react";
import { MercuryMark } from "@/components/mercury-mark";
import { cn } from "@/lib/utils";

/* =========================================================================
   Mercury Traders — Lead-gen chatbot.
   No LLM. No backend. Pure state machine that walks the visitor through
   collecting their details, then builds a WhatsApp URL with the full lead
   and opens wa.me/918447666288.

   Flow:
     greet → ask_name → ask_phone → ask_car → ask_part → ask_message → done
   Each step: bot types a question → user types/selects → next step.
   At "done": show summary + "Send lead via WhatsApp" button.
   ========================================================================= */

const WHATSAPP_NUMBER = "918447666288";

type Role = "bot" | "user";
type Msg = { id: number; role: Role; text: string };

type Step =
  | "greet"
  | "ask_name"
  | "ask_phone"
  | "ask_car"
  | "ask_part"
  | "ask_message"
  | "done";

const STEP_FLOW: Step[] = [
  "greet",
  "ask_name",
  "ask_phone",
  "ask_car",
  "ask_part",
  "ask_message",
  "done",
];

const BOT_LINES: Record<Step, string> = {
  greet:
    "Hi! 👋 I'm the Mercury Traders assistant. I'll collect a few quick details and connect you with our team on WhatsApp for a quote.",
  ask_name: "Let's start — what's your name?",
  ask_phone: "Great, {name}! What's the best phone number to reach you on?",
  ask_car:
    "Thanks! Which car do you drive? (e.g. Maruti Swift 2018, Hyundai Creta 2021)",
  ask_part:
    "Got it. Which part(s) are you looking for? (e.g. front brake pads, oil filter, headlight assembly)",
  ask_message:
    "Anything else we should know? (vehicle variant, quantity, urgency — or type 'skip')",
  done:
    "Perfect! Here's your lead summary. Tap below to send it straight to our team on WhatsApp — we'll respond within a few minutes during working hours.",
};

const PLACEHOLDERS: Record<Step, string> = {
  greet: "",
  ask_name: "Your name…",
  ask_phone: "e.g. 98765 43210",
  ask_car: "e.g. Maruti Swift 2018 VDI",
  ask_part: "e.g. front brake pads + oil filter",
  ask_message: "Optional details, or type 'skip'…",
  done: "",
};

let msgId = 1;

export function LeadChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>("greet");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [lead, setLead] = useState({
    name: "",
    phone: "",
    car: "",
    part: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* push a bot message with a fake typing delay for realism */
  const pushBot = useCallback((text: string, delay = 650) => {
    return new Promise<void>((resolve) => {
      setIsTyping(true);
      setTimeout(() => {
        setMessages((m) => [...m, { id: msgId++, role: "bot", text }]);
        setIsTyping(false);
        resolve();
      }, delay);
    });
  }, []);

  /* push a user message immediately */
  const pushUser = useCallback((text: string) => {
    setMessages((m) => [...m, { id: msgId++, role: "user", text }]);
  }, []);

  /* Start the conversation when first opened */
  const startConversation = useCallback(async () => {
    if (messages.length > 0) return;
    await pushBot(BOT_LINES.greet, 400);
    await pushBot(BOT_LINES.ask_name, 700);
    setStep("ask_name");
    setTimeout(() => inputRef.current?.focus(), 100);
  }, [messages.length, pushBot]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      startConversation();
    }
  }, [isOpen, messages.length, startConversation]);

  /* auto-scroll on new messages / typing */
  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      requestAnimationFrame(() => {
        el.scrollTop = el.scrollHeight;
      });
    }
  }, [messages, isTyping]);

  const currentStepIndex = STEP_FLOW.indexOf(step);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const value = input.trim();
      if (!value || step === "greet" || step === "done") return;

      pushUser(value);
      setInput("");

      // store the answer
      const nextLead = { ...lead };
      if (step === "ask_name") nextLead.name = value;
      if (step === "ask_phone") nextLead.phone = value;
      if (step === "ask_car") nextLead.car = value;
      if (step === "ask_part") nextLead.part = value;
      if (step === "ask_message")
        nextLead.message = value.toLowerCase() === "skip" ? "" : value;
      setLead(nextLead);

      // advance
      const nextStep = STEP_FLOW[currentStepIndex + 1] as Step;
      setStep(nextStep);

      if (nextStep === "done") {
        await pushBot(
          `Thanks ${nextLead.name || "there"}! Compiling your lead…`,
          600
        );
        await pushBot(BOT_LINES.done, 800);
      } else {
        const line = BOT_LINES[nextStep].replace("{name}", nextLead.name || "");
        await pushBot(line, 700);
      }
      setTimeout(() => inputRef.current?.focus(), 100);
    },
    [input, step, lead, currentStepIndex, pushBot, pushUser]
  );

  const handleRestart = () => {
    setMessages([]);
    setLead({ name: "", phone: "", car: "", part: "", message: "" });
    setStep("greet");
    setSent(false);
    msgId = 1;
    startConversation();
  };

  const buildWhatsAppUrl = () => {
    const L = lead;
    let msg = `*New lead from mercurytraders.in*\n\n`;
    msg += `*Name:* ${L.name}\n`;
    msg += `*Phone:* ${L.phone}\n`;
    msg += `*Vehicle:* ${L.car}\n`;
    msg += `*Part(s) needed:* ${L.part}\n`;
    if (L.message) msg += `*Notes:* ${L.message}\n`;
    msg += `\nPlease share availability and pricing. Thank you!`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  const progressPct =
    step === "done" ? 100 : (currentStepIndex / (STEP_FLOW.length - 1)) * 100;

  return (
    <>
      {/* Floating launcher button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 h-14 pl-4 pr-5 rounded-pill bg-primary text-white shadow-signature hover:brightness-110 active:scale-95 transition-all"
            aria-label="Open chat assistant"
          >
            <span className="absolute inset-0 rounded-pill animate-pulse-ring" />
            <MessageCircle className="h-5 w-5 relative z-10" />
            <span className="relative z-10 text-sm font-semibold tracking-display-sm hidden sm:inline">
              Ask Mercury
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-0 right-0 sm:bottom-5 sm:right-5 z-50 w-full sm:w-[400px] h-[100dvh] sm:h-[600px] sm:max-h-[80vh] bg-canvas sm:rounded-card border border-hairline flex flex-col overflow-hidden shadow-signature"
            role="dialog"
            aria-label="Mercury Traders chat assistant"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3.5 bg-ink text-canvas shrink-0">
              <div className="flex items-center gap-2.5">
                <MercuryMark size={32} />
                <div className="leading-none">
                  <div className="font-display font-semibold text-sm tracking-display-sm">
                    Mercury Assistant
                  </div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="h-1.5 w-1.5 rounded-pill bg-success" />
                    <span className="text-[10px] text-canvas/60">
                      Online · replies in minutes
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center h-9 w-9 rounded-input text-canvas/70 hover:bg-canvas/10 hover:text-canvas transition-colors"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Progress bar */}
            <div className="h-0.5 bg-surface-2 shrink-0">
              <div
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3 snap-peek"
            >
              {messages.map((m) => (
                <Bubble key={m.id} role={m.role} text={m.text} />
              ))}

              {isTyping && (
                <div className="flex items-center gap-1.5 px-3 py-2.5 rounded-card rounded-bl-chip bg-surface-2 w-fit">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="h-1.5 w-1.5 rounded-pill bg-ink-muted"
                      animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.15,
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Lead summary card at done */}
              {step === "done" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-card border border-hairline bg-surface-1 p-4 mt-2"
                >
                  <div className="eyebrow text-ink-muted text-[10px] mb-2">
                    Lead summary
                  </div>
                  <dl className="space-y-1.5 text-sm">
                    <SummaryRow label="Name" value={lead.name} />
                    <SummaryRow label="Phone" value={lead.phone} />
                    <SummaryRow label="Vehicle" value={lead.car} />
                    <SummaryRow label="Part(s)" value={lead.part} />
                    {lead.message && (
                      <SummaryRow label="Notes" value={lead.message} />
                    )}
                  </dl>
                </motion.div>
              )}

              {/* Sent confirmation */}
              {sent && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-card bg-success/10 border border-success/20 p-4 flex items-start gap-2.5"
                >
                  <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-ink">
                      Lead sent!
                    </div>
                    <div className="text-xs text-ink-muted mt-0.5">
                      Our team will reply on WhatsApp shortly. You can close this
                      window.
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input / CTA */}
            <div className="border-t border-hairline bg-surface-1 px-3 py-3 pb-safe shrink-0">
              {step !== "done" ? (
                <form onSubmit={handleSubmit} className="flex items-center gap-2">
                  {currentStepIndex > 1 && (
                    <button
                      type="button"
                      onClick={() => {
                        const prev = STEP_FLOW[currentStepIndex - 1] as Step;
                        setStep(prev);
                        setMessages((m) => m.slice(0, -2));
                      }}
                      className="inline-flex items-center justify-center h-11 w-11 rounded-input text-ink-muted hover:bg-surface-2 transition-colors shrink-0"
                      aria-label="Go back to previous question"
                    >
                      <ArrowLeft className="h-[18px] w-[18px]" />
                    </button>
                  )}
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={PLACEHOLDERS[step]}
                    className="flex-1 h-11 px-3.5 rounded-input bg-canvas border border-hairline text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all"
                    aria-label="Your answer"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim()}
                    className="inline-flex items-center justify-center h-11 w-11 rounded-input bg-primary text-white hover:brightness-110 active:scale-95 transition-all disabled:opacity-40 disabled:pointer-events-none shrink-0"
                    aria-label="Send"
                  >
                    <Send className="h-[18px] w-[18px]" />
                  </button>
                </form>
              ) : (
                <div className="space-y-2">
                  {!sent ? (
                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setSent(true)}
                      className="flex items-center justify-center gap-2 w-full h-12 rounded-input bg-primary text-white text-sm font-semibold hover:brightness-110 active:scale-[0.99] transition-all"
                    >
                      <MessageCircle className="h-[18px] w-[18px]" />
                      Send lead via WhatsApp
                    </a>
                  ) : (
                    <button
                      onClick={handleRestart}
                      className="flex items-center justify-center gap-2 w-full h-12 rounded-input border border-hairline bg-canvas text-ink text-sm font-medium hover:bg-surface-2 transition-all"
                    >
                      Start a new enquiry
                    </button>
                  )}
                  <p className="text-center text-[10px] text-ink-muted">
                    Opens WhatsApp · +91 84476 66288 · No data stored
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Bubble({ role, text }: { role: Role; text: string }) {
  const isBot = role === "bot";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={cn("flex", isBot ? "justify-start" : "justify-end")}
    >
      <div
        className={cn(
          "max-w-[80%] px-3.5 py-2.5 text-sm leading-relaxed",
          isBot
            ? "rounded-card rounded-bl-chip bg-surface-2 text-ink"
            : "rounded-card rounded-br-chip bg-primary text-white"
        )}
      >
        {text}
      </div>
    </motion.div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <dt className="eyebrow text-ink-muted text-[10px] w-16 shrink-0">{label}</dt>
      <dd className="text-ink font-medium break-words">{value}</dd>
    </div>
  );
}
