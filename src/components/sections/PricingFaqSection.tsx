import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { pricingFaqs } from "@/config/faq";
import { faqPageSchema } from "@/config/seo";

export function PricingFaqSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-5 md:py-24">
        {/* JSON-LD FAQ structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqPageSchema(pricingFaqs)),
          }}
        />

        <h2 className="mb-8 text-center font-display text-2xl font-medium text-ink md:mb-12 md:text-4xl">
          Frequently asked questions
        </h2>
        <FAQAccordion items={pricingFaqs} />
      </div>
    </section>
  );
}
