"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ClipboardCheck, Globe, BellRing, TrendingUp } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: 1,
    title: "Book a free audit",
    description:
      "We review your Google listing, socials, and current booking process. No commitment — just a clear picture of where you're losing patients.",
    icon: <ClipboardCheck className="h-6 w-6" />,
  },
  {
    number: 2,
    title: "Website & online setup",
    description:
      "A custom clinic website with free domain and hosting. Your front desk is trained and running within two weeks.",
    icon: <Globe className="h-6 w-6" />,
  },
  {
    number: 3,
    title: "WhatsApp automation goes live",
    description:
      "Appointment reminders, booking confirmations, and recall messages send automatically — so nothing falls through the cracks.",
    icon: <BellRing className="h-6 w-6" />,
  },
  {
    number: 4,
    title: "Grow from there",
    description:
      "Monthly reporting, ongoing ad management, and recall campaigns that bring patients back for check-ups and follow-up treatments.",
    icon: <TrendingUp className="h-6 w-6" />,
  },
];

export function ProcessSteps() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 15%", "end 85%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-28">
      <div className="mx-auto max-w-4xl px-5">
        <ScrollReveal preset="scaleIn" className="mb-14 text-center">
          <h2 className="mb-4 font-display font-medium text-ink">
            From first message to full automation
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-ink-soft">
            A clear, four-step path — no hidden steps, no surprises.
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Animated vertical connector line */}
          <div className="absolute left-[23px] top-2 bottom-2 w-px bg-line md:left-[27px]">
            <motion.div
              className="h-full w-full bg-gradient-to-b from-coral to-teal"
              style={{ scaleY: lineHeight, originY: 0 }}
            />
          </div>

          <div className="space-y-0">
            {steps.map((step, idx) => (
              <ScrollReveal
                key={step.number}
                preset={idx % 2 === 0 ? "slideRight" : "fadeUp"}
                delay={idx * 0.1}
                className="flex gap-6 md:gap-8"
              >
                {/* Number circle */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-coral-tint text-coral-deep md:h-14 md:w-14">
                  <span className="font-display text-xl font-semibold">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="pb-14 pt-1 last:pb-0">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="text-teal">{step.icon}</span>
                    <h3 className="font-display text-xl font-medium text-ink">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-ink-soft md:text-base">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
