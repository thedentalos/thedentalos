import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PricingCard } from "@/components/ui/PricingCard";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { pricingPlans } from "@/config/pricing";

export function PricingPreviewSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-5 md:py-28">
        <AnimatedSection>
          <div className="mb-8 text-center md:mb-12">
            <h2 className="font-display text-2xl font-medium text-ink md:text-4xl">
              Start with an audit. Scale to the full package.
            </h2>
            <p className="mt-2 text-sm text-ink-soft md:mt-3 md:text-base">
              From a one-time review to a complete online clinic &mdash; pick
              where you want to begin.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection
          stagger
          delay={0.15}
          className="mx-auto grid max-w-3xl items-stretch gap-5 sm:gap-8 md:grid-cols-2"
        >
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} variant="condensed" />
          ))}
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="mt-8 text-center md:mt-10">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm font-medium text-teal no-underline hover:text-teal-light transition-colors"
            >
              See full pricing and billing options
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
