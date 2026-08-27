"use client";

import { CountUp } from "@/components/ui/CountUp";
import { GlassCard } from "@/components/ui/GlassCard";
import { StaggerChildren } from "@/components/ui/StaggerChildren";

const counters = [
  {
    value: 32,
    suffix: "%",
    prefix: "",
    label: "avg. reduction in no-shows",
    description: "Clinics see this within 2–4 weeks of enabling WhatsApp reminders.",
    delay: 0,
  },
  {
    value: 50,
    suffix: "+",
    prefix: "PKR ",
    format: false,
    label: "saved per patient recall",
    description: "Bringing back an existing patient costs a fraction of acquiring a new one.",
    delay: 0.1,
  },
  {
    value: 85,
    suffix: "%",
    prefix: "",
    label: "of patients prefer WhatsApp",
    description: "For appointment communication over phone calls or SMS in Pakistan.",
    delay: 0.2,
  },
  {
    value: 3,
    suffix: "x",
    prefix: "",
    format: false,
    label: "more Google profile views",
    description: "Clinics with optimized, photo-rich profiles get 3x the engagement.",
    delay: 0.3,
  },
];

export function StatsCounterSection() {
  return (
    <section className="bg-enamel py-12 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-5">
        <div className="mb-10 text-center md:mb-14">
          <h2 className="mb-3 font-display font-medium text-ink">
            The numbers behind the problem
          </h2>
          <p className="mx-auto max-w-2xl text-base text-ink-soft md:text-lg">
            Why fixing your clinic&rsquo;s operations is the highest-ROI decision you&rsquo;ll make this year.
          </p>
        </div>

        <StaggerChildren
          staggerDelay={0.1}
          direction="up"
          className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
        >
          {counters.map((c) => (
            <GlassCard key={c.label} className="text-center p-4 sm:p-6 md:p-8">
              <div className="mb-2 font-mono text-2xl font-bold text-teal sm:text-3xl md:text-4xl">
                <CountUp
                  to={c.value}
                  prefix={c.prefix}
                  suffix={c.suffix}
                  format={c.format !== false}
                  decimals={c.value % 1 !== 0 ? 1 : 0}
                  duration={2.5}
                />
              </div>
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-ink sm:text-sm">
                {c.label}
              </p>
              <p className="text-[10px] leading-relaxed text-ink-soft sm:text-xs">
                {c.description}
              </p>
            </GlassCard>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
