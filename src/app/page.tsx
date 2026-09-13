import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProblemSolutionSection } from "@/components/sections/ProblemSolutionSection";
import { StatsCounterSection } from "@/components/sections/StatsCounterSection";
import { PricingPreviewSection } from "@/components/sections/PricingPreviewSection";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";
import { TechDemoSection } from "@/components/sections/TechDemoSection";
import { Ticker } from "@/components/ui/Ticker";
import Link from "next/link";
import { homeMetadata, serviceSchema } from "@/config/seo";
import { serviceLocations } from "@/config/locations";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = homeMetadata;

const tickerItems = [
  "5 Professional Video Ads",
  "10 Creative Image Ads",
  "Social Media Management",
  "Paid Ad Boosting & Optimization",
  "Website, SEO & Hosting",
  "Admin Panel & Scheduling",
  "Patient Conferencing App",
  "WhatsApp Automation",
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema()) }}
      />

      <HeroSection
        eyebrow="For dental clinics in Pakistan"
        headline="Every empty chair costs your clinic PKR 8,000–15,000 a day."
        subhead="Patients forget appointments. Your Google listing is invisible. Follow-ups fall through the cracks. DentalOS automates your reminders, bookings, and online presence — so your chairs stay full without you lifting a finger."
        primaryCta={{ label: "Chat on WhatsApp", href: siteConfig.whatsappLink }}
        secondaryCta={{ label: "See how it works →", href: "/how-it-works" }}
      />

      <TrustBar />

      <div className="relative overflow-hidden border-y border-line bg-white py-6">
        <div className="pointer-events-none absolute -left-8 top-6 h-32 w-32 rounded-full bg-teal-tint/60 blur-2xl animate-float" />
        <div className="pointer-events-none absolute -right-8 bottom-6 h-32 w-32 rounded-full bg-teal-tint/50 blur-2xl animate-float-delayed" />
        <Ticker items={tickerItems} />
      </div>

      <ProblemSolutionSection />

      <StatsCounterSection />

      <TechDemoSection />

      <PricingPreviewSection />

      <section className="bg-enamel-dim py-12 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-5">
          <h2 className="text-center font-display text-2xl font-medium text-ink md:text-4xl">
            Serving dental clinics across Pakistan
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-ink-soft md:text-base">
            We support clinics nationwide remotely. In-person meetings are
            available in Islamabad and Sargodha on Saturdays and Sundays.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {serviceLocations.map((location) => (
              <Link
                key={location.slug}
                href={`/dental-clinic-marketing/${location.slug}`}
                className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-teal no-underline transition-colors hover:border-teal hover:text-teal-light"
              >
                Dental clinic marketing in {location.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaBand
        headline="Ready to stop losing patients to a missed reminder?"
        cta={{ label: "Chat on WhatsApp", href: siteConfig.whatsappLink }}
      />
    </>
  );
}
