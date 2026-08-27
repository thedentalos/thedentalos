import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ContactForm } from "@/components/ui/ContactForm";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/config/site";
import { contactMetadata } from "@/config/seo";

export const metadata: Metadata = contactMetadata;

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-10 text-center sm:px-5 md:py-20">
          <AnimatedSection>
            <h1 className="font-display text-3xl font-medium text-ink md:text-5xl">
              Get in touch
            </h1>
            <p className="mt-3 text-base leading-relaxed text-ink-soft md:text-lg">
              The fastest way to reach us is WhatsApp — usually respond within a
              few hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact options */}
      <section className="bg-enamel-dim">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-5 md:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {/* WhatsApp — primary */}
            <AnimatedSection delay={0.1}>
              <div className="flex flex-col items-center justify-center rounded-2xl border border-line bg-white p-6 text-center transition-shadow hover:shadow-md sm:p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-coral-tint sm:h-14 sm:w-14">
                  <MessageCircle className="h-6 w-6 text-coral" strokeWidth={1.5} />
                </div>
                <h2 className="mb-2 font-display text-xl font-medium text-ink sm:text-2xl">
                  Chat on WhatsApp
                </h2>
                <p className="mb-4 text-sm text-ink-soft">
                  Fastest way to reach us — usually within a few hours.
                </p>
                <WhatsAppButton number={siteConfig.whatsappNumber} />
              </div>
            </AnimatedSection>

            {/* Contact form — secondary */}
            <AnimatedSection delay={0.25}>
              <div className="rounded-2xl border border-line bg-white p-5 transition-shadow hover:shadow-md sm:p-8">
                <h2 className="mb-4 font-display text-xl font-medium text-ink sm:mb-6 sm:text-2xl">
                  Send us a message
                </h2>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Supporting info */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-5 md:py-16">
          <AnimatedSection stagger delay={0.3} className="grid gap-4 md:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl border border-line p-4 transition-shadow hover:shadow-sm sm:p-5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-coral-tint">
                <MessageCircle className="h-4 w-4 text-coral" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[10px] text-ink-soft sm:text-xs">WhatsApp</p>
                <p className="text-xs font-medium text-ink sm:text-sm">
                  {siteConfig.whatsappNumber}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-line p-4 transition-shadow hover:shadow-sm sm:p-5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-tint">
                <Mail className="h-4 w-4 text-teal" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[10px] text-ink-soft sm:text-xs">Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-xs font-medium text-teal no-underline hover:text-teal-light sm:text-sm"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-line p-4 transition-shadow hover:shadow-sm sm:p-5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-tint">
                <MapPin className="h-4 w-4 text-teal" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[10px] text-ink-soft sm:text-xs">Location</p>
                <p className="text-xs font-medium text-ink sm:text-sm">
                  {siteConfig.address}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
