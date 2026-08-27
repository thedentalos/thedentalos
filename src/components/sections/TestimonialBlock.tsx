import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TestimonialCarousel } from "./TestimonialCarousel";
import { testimonials } from "@/config/testimonials";

export function TestimonialBlock() {
  return (
    <section className="bg-enamel-dim">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-5 md:py-24">
        <AnimatedSection>
          <h2 className="mb-8 text-center font-display text-2xl font-medium text-ink md:mb-12 md:text-4xl">
            What clinic owners say
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <TestimonialCarousel testimonials={testimonials} />
        </AnimatedSection>
      </div>
    </section>
  );
}
