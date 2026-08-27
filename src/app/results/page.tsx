import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { caseStudies } from "@/config/case-studies";
import { resultsMetadata } from "@/config/seo";

export const metadata: Metadata = resultsMetadata;

export default function ResultsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 text-center sm:px-5 md:py-20">
          <AnimatedSection>
            <h1 className="font-display text-3xl font-medium text-ink md:text-5xl">
              What clinics see after working with us
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Case studies or coming soon */}
      <section className="bg-enamel-dim pb-12 md:pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-5">
          {caseStudies.length > 0 ? (
            <div className="space-y-6">
              {caseStudies.map((study) => (
                <CaseStudyCard key={study.id} {...study} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-line bg-white p-8 text-center sm:p-12">
              <h2 className="font-display text-xl font-medium text-ink sm:text-2xl">
                Case studies coming soon
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                We&rsquo;re working with our first clinics and will publish real
                results here once we have enough data to share. In the meantime,
                ask us for early results from our current clients when you book
                your free audit.
              </p>
            </div>
          )}
        </div>
      </section>

      <FinalCtaBand
        headline="Want to be our first published case study?"
        cta={{ label: "Book a Free Audit", href: "/contact" }}
      />
    </>
  );
}
