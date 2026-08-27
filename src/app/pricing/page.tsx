import type { Metadata } from "next";
import { PricingCard } from "@/components/ui/PricingCard";
import { PricingFaqSection } from "@/components/sections/PricingFaqSection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { pricingPlans } from "@/config/pricing";
import { pricingMetadata } from "@/config/seo";

export const metadata: Metadata = pricingMetadata;

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-10 text-center sm:px-5 md:py-20">
          <AnimatedSection>
            <h1 className="font-display text-2xl font-medium text-ink sm:text-3xl md:text-5xl">
              Two ways to start
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base md:mt-4 md:text-lg">
              Get a one-time audit to see where you&rsquo;re losing patients, or
              go all-in with the full Growth Package &mdash; video &amp; image
              ads, social media management, and paid ads, plus a free website,
              admin panel, patient conferencing app, and WhatsApp automation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="bg-enamel-dim px-4 py-10 sm:px-5 md:py-24">
        <AnimatedSection
          stagger
          delay={0.15}
          className="mx-auto grid max-w-4xl items-stretch gap-5 sm:gap-8 md:grid-cols-2"
        >
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} variant="full" />
          ))}
        </AnimatedSection>
      </section>

      {/* FAQ */}
      <PricingFaqSection />
    </>
  );
}
