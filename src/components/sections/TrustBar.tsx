"use client";

import { CountUp } from "@/components/ui/CountUp";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const stats = [
  {
    value: 30,
    suffix: "%",
    label: "of dental appointments in Pakistan end in no-shows",
    delay: 0,
  },
  {
    value: 65,
    suffix: "%",
    label: "of clinics have unclaimed Google Business Profiles",
    delay: 0.15,
  },
  {
    value: 50,
    suffix: "%",
    label: "average reduction in no-shows after WhatsApp reminders",
    delay: 0.3,
  },
];

export function TrustBar() {
  return (
    <section className="border-y border-line bg-white">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-6 px-4 py-8 md:gap-16 md:py-12">
        {stats.map((stat) => (
          <ScrollReveal
            key={stat.label}
            preset="scaleIn"
            delay={stat.delay}
            duration={0.6}
            className="flex flex-col items-center text-center"
          >
            <span className="font-mono text-2xl font-bold text-teal sm:text-3xl md:text-4xl">
              <CountUp to={stat.value} suffix={stat.suffix} decimals={0} />
            </span>
            <span className="mt-1 max-w-[180px] text-[10px] font-medium uppercase tracking-wider text-ink-soft sm:text-xs">
              {stat.label}
            </span>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
