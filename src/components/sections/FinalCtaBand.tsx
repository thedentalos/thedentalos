import { CTAButton } from "@/components/ui/CTAButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { CTAConfig } from "@/types";

interface FinalCtaBandProps {
  headline: string;
  cta: CTAConfig;
}

export function FinalCtaBand({ headline, cta }: FinalCtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-teal">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.4), transparent 60%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 py-14 text-center sm:px-5 md:py-24">
        <ScrollReveal preset="scaleIn">
          <h2 className="mb-6 font-display text-2xl font-medium text-white md:text-4xl text-balance">
            {headline}
          </h2>
        </ScrollReveal>
        <ScrollReveal preset="fadeUp" delay={0.2}>
          <CTAButton href={cta.href} variant="primary" size="md">
            {cta.label}
          </CTAButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
