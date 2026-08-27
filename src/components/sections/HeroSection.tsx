"use client";

import { useState, useEffect, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { CTAButton } from "@/components/ui/CTAButton";
import { premiumEase } from "@/lib/animation";

interface HeroSectionProps {
  eyebrow: string;
  headline: string;
  subhead: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

function useTypewriter(text: string, speed = 40, startDelay = 600) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const prefersReduced = useRef(false);

  useEffect(() => {
    prefersReduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced.current) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    let i = 0;
    const timeout = setTimeout(function tick() {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
        setTimeout(tick, speed);
      } else {
        setDone(true);
      }
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);

  return { displayed, done };
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const revealItem: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.08,
      duration: 0.8,
      ease: premiumEase,
    },
  }),
};

const statBadge: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 12 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 1.0 + i * 0.2,
      duration: 0.5,
      ease: premiumEase,
    },
  }),
};

const painPointStats = [
  { value: "30%", label: "no-show rate in Pakistan" },
  { value: "65%", label: "of clinics invisible on Google" },
];

export function HeroSection({
  eyebrow,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
}: HeroSectionProps) {
  const { displayed, done } = useTypewriter(headline, 35, 800);

  return (
    <section className="relative overflow-hidden bg-hero pt-10 pb-10 md:pt-32 md:pb-28">
      {/* --- Subtle background accents --- */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.14, 0.08],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 right-[-5%] h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-teal-tint/60 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.06, 0.1, 0.06],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-16 left-[-5%] h-[250px] w-[250px] md:h-[400px] md:w-[400px] rounded-full bg-coral-tint/50 blur-[100px]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-5">
        <div className="grid items-center gap-8 lg:grid-cols-5 lg:gap-14">
          {/* --- Left: Text content --- */}
          <motion.div
            className="lg:col-span-3"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow pill */}
            <motion.div variants={revealItem} custom={0} className="mb-4 md:mb-6">
              <span className="inline-block rounded-full bg-white/80 px-3.5 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.12em] text-coral-deep shadow-sm backdrop-blur-md border border-line/50">
                {eyebrow}
              </span>
            </motion.div>

            {/* Headline with typewriter */}
            <motion.div
              variants={revealItem}
              custom={1}
              className="mb-4 md:mb-6"
            >
              <h1 className="font-display font-bold leading-[1.08] text-balance text-ink">
                {displayed}
                {!done && <span className="typewriter-cursor" aria-hidden="true" />}
              </h1>
            </motion.div>

            {/* Subhead */}
            <motion.p
              className="mb-6 max-w-xl text-sm leading-relaxed text-ink-soft md:mb-8 md:text-lg"
              variants={revealItem}
              custom={2}
            >
              {subhead}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-3"
              variants={revealItem}
              custom={3}
            >
              <CTAButton href={primaryCta.href} variant="primary" size="lg">
                {primaryCta.label}
              </CTAButton>
              <CTAButton
                href={secondaryCta.href}
                variant="outline"
                size="lg"
              >
                {secondaryCta.label}
              </CTAButton>
            </motion.div>

            {/* Pain-point stat badges */}
            <motion.div
              className="mt-6 flex flex-wrap gap-2 md:mt-8 md:gap-3"
              initial="hidden"
              animate="visible"
            >
              {painPointStats.map((stat, i) => (
                <motion.span
                  key={stat.label}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white/70 px-2.5 py-1 text-[11px] sm:text-xs font-medium text-ink-soft backdrop-blur-sm border border-line/40"
                  variants={statBadge}
                  custom={i}
                >
                  <span className="font-mono font-semibold text-ink">{stat.value}</span>
                  {stat.label}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* --- Right: Glass stat card --- */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
            animate={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
              transition: { delay: 0.5, duration: 0.9, ease: premiumEase },
            }}
          >
            <div className="glass-card p-5 sm:p-6 md:p-10">
              <p className="mb-4 font-display text-lg font-medium leading-tight text-ink md:mb-6 md:text-xl">
                What empty chairs cost your clinic
              </p>
              <div className="space-y-4 md:space-y-5">
                <div>
                  <p className="font-mono text-2xl font-bold text-teal sm:text-3xl md:text-4xl">
                    PKR 8,000<span className="text-xl">–</span>15,000
                  </p>
                  <p className="mt-0.5 text-xs text-ink-soft sm:text-sm">
                    Lost revenue per chair, per day
                  </p>
                </div>
                <hr className="border-line" />
                <div>
                  <p className="font-mono text-2xl font-bold text-coral-deep sm:text-3xl md:text-4xl">
                    3–4<span className="text-lg">/week</span>
                  </p>
                  <p className="mt-0.5 text-xs text-ink-soft sm:text-sm">
                    Average no-shows at a 2-chair clinic
                  </p>
                </div>
                <hr className="border-line" />
                <div>
                  <p className="font-mono text-2xl font-bold text-teal-light sm:text-3xl md:text-4xl">
                    &lt;2 min
                  </p>
                  <p className="mt-0.5 text-xs text-ink-soft sm:text-sm">
                    Setup time for automated reminders
                  </p>
                </div>
              </div>
              <p className="mt-4 text-[10px] text-ink-soft/70 md:mt-6 md:text-xs">
                * Estimates based on average Pakistani dental clinic pricing.
                Actual figures vary by location and procedure mix.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
