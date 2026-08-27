"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { cn } from "@/lib/utils";
import { billingOptions, calculatePrice } from "@/config/pricing";
import type { PricingPlan, BillingOption } from "@/types";

interface PricingCardProps {
  plan: PricingPlan;
  variant?: "full" | "condensed";
}

export function PricingCard({ plan, variant = "full" }: PricingCardProps) {
  const [billing, setBilling] = useState<BillingOption>(billingOptions[0]);
  const price = plan.oneTime ? null : calculatePrice(plan.price, billing);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }}
      className={cn(
        "relative flex h-full flex-col rounded-2xl bg-white",
        plan.featured
          ? "border-2 border-coral shadow-lg"
          : "border border-line shadow-sm",
        variant === "full" ? "p-4 sm:p-6 md:p-10" : "p-4 sm:p-5 md:p-7"
      )}
    >
      {/* Tag badge */}
      {plan.tag && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className={cn(
            "absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-coral px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white whitespace-nowrap",
            variant === "condensed" && "-top-3 px-3 py-0.5 text-[11px]"
          )}
        >
          <Zap className="-mt-0.5 mr-1 inline-block h-3 w-3" />
          {plan.tag}
        </motion.span>
      )}

      {/* ── Header ── */}
      <div>
        <h3
          className={cn(
            "font-display font-medium text-ink",
            variant === "full" ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl",
            plan.tag && "mt-2"
          )}
        >
          {plan.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
          {plan.note}
        </p>
      </div>

      {/* ── Billing toggle or one-time badge ── */}
      {variant === "full" && (
        <div className="mt-6">
          {!plan.oneTime ? (
            <div className="flex gap-1 rounded-xl bg-enamel-dim p-1">
              {billingOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setBilling(opt)}
                  className={cn(
                    "relative flex-1 rounded-lg px-2 py-2 text-xs font-medium transition-colors sm:px-3 sm:text-sm",
                    billing.id === opt.id
                      ? "bg-white text-ink shadow-sm"
                      : "text-ink-soft hover:text-ink"
                  )}
                >
                  <span className="hidden sm:inline">{opt.label}</span>
                  <span className="sm:hidden">
                    {opt.id === "monthly"
                      ? "Mo"
                      : opt.id === "semi-annual"
                        ? "6 Mo"
                        : "Yr"}
                  </span>
                  {opt.discountPercent > 0 && (
                    <span className="ml-1 text-[11px] font-semibold text-coral">
                      −{opt.discountPercent}%
                    </span>
                  )}
                  {billing.id === opt.id && (
                    <motion.div
                      layoutId={`billing-pill-${variant}`}
                      className="absolute inset-0 rounded-lg bg-white shadow-sm"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.5,
                      }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                </button>
              ))}
            </div>
          ) : (
            <div className="inline-block rounded-full bg-teal-tint px-4 py-1.5 text-xs font-medium text-teal">
              One-time payment — no subscription
            </div>
          )}
        </div>
      )}

      {/* ── Price ── */}
      <div className="mt-5 flex items-baseline gap-1.5">
        <AnimatePresence mode="wait">
          <motion.span
            key={plan.oneTime ? "one-time" : `${billing.id}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "font-display font-medium text-ink",
              variant === "full" ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"
            )}
          >
            PKR{" "}
            {plan.oneTime
              ? plan.price.toLocaleString("en-PK")
              : price!.monthly.toLocaleString("en-PK")}
          </motion.span>
        </AnimatePresence>
        <span className="text-sm text-ink-soft">{plan.priceUnit}</span>
      </div>

      {/* Billing detail line */}
      {!plan.oneTime && variant === "full" && price && (
        <AnimatePresence mode="wait">
          {billing.months > 1 ? (
            <motion.p
              key={billing.id}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="mt-1 text-sm text-ink-soft"
            >
              PKR {price.total.toLocaleString("en-PK")} total
              <span className="ml-1.5 font-medium text-coral">
                save PKR {price.savings.toLocaleString("en-PK")}
              </span>
            </motion.p>
          ) : (
            <motion.p
              key="monthly"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-1 text-sm text-ink-soft"
            >
              Billed monthly — cancel anytime
            </motion.p>
          )}
        </AnimatePresence>
      )}

      {!plan.oneTime && variant === "condensed" && (
        <p className="mt-1 text-xs text-ink-soft">
          Save up to 10% with longer billing
        </p>
      )}

      {/* ── Divider ── */}
      <hr className="my-6 border-line" />

      {/* ── Features ── */}
      {plan.featureGroups ? (
        <div className="flex-1 space-y-5">
          {plan.featureGroups.map((group) => (
            <div key={group.title}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-coral-deep">
                {group.title}
              </p>
              <ul className="space-y-3">
                {group.items.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + idx * 0.07, duration: 0.35 }}
                    className="flex items-start gap-3"
                  >
                    <Check
                      className={cn(
                        "mt-0.5 shrink-0 text-coral",
                        variant === "full" ? "h-5 w-5" : "h-4 w-4"
                      )}
                      strokeWidth={2}
                    />
                    <span
                      className={cn(
                        "leading-relaxed text-ink-soft",
                        variant === "full" ? "text-sm" : "text-xs sm:text-sm"
                      )}
                    >
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="flex-1 space-y-3">
          {(plan.features ?? []).map((feature, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + idx * 0.07, duration: 0.35 }}
              className="flex items-start gap-3"
            >
              <Check
                className={cn(
                  "mt-0.5 shrink-0 text-coral",
                  variant === "full" ? "h-5 w-5" : "h-4 w-4"
                )}
                strokeWidth={2}
              />
              <span
                className={cn(
                  "leading-relaxed text-ink-soft",
                  variant === "full" ? "text-sm" : "text-xs sm:text-sm"
                )}
              >
                {feature}
              </span>
            </motion.li>
          ))}
        </ul>
      )}

      {/* ── CTA ── */}
      <motion.div
        className="mt-8"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <CTAButton
          href={plan.ctaHref}
          variant={plan.featured ? "primary" : "outline"}
          size={variant === "full" ? "lg" : "md"}
          className="w-full justify-center"
        >
          {plan.ctaText}
        </CTAButton>
      </motion.div>
    </motion.div>
  );
}
