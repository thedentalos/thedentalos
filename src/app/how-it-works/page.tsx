import type { Metadata } from "next";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { TechDemoSection } from "@/components/sections/TechDemoSection";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { howItWorksMetadata } from "@/config/seo";

export const metadata: Metadata = howItWorksMetadata;

export default function HowItWorksPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 text-center sm:px-5 md:py-20">
          <AnimatedSection>
            <h1 className="font-display text-3xl font-medium text-ink md:text-5xl">
              From first message to full automation
            </h1>
            <p className="mt-3 text-base leading-relaxed text-ink-soft md:text-lg">
              Four steps to fill more chairs — and keep them filled.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <ProcessSteps />

      <TechDemoSection />

      <AnimatedSection>
        <FinalCtaBand
          headline="Ready to start with a free audit?"
          cta={{ label: "Book a Free Audit", href: "/contact" }}
        />
      </AnimatedSection>
    </>
  );
}
