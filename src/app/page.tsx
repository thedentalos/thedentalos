import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProblemSolutionSection } from "@/components/sections/ProblemSolutionSection";
import { StatsCounterSection } from "@/components/sections/StatsCounterSection";
import { PricingPreviewSection } from "@/components/sections/PricingPreviewSection";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";
import { TechDemoSection } from "@/components/sections/TechDemoSection";
import { Ticker } from "@/components/ui/Ticker";
import { homeMetadata, localBusinessSchema } from "@/config/seo";

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
      {/* JSON-LD: LocalBusiness (homepage only) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema()),
        }}
      />

      <HeroSection
        eyebrow="For dental clinics in Pakistan"
        headline="Every empty chair costs your clinic PKR 8,000–15,000 a day."
        subhead="Patients forget appointments. Your Google listing is invisible. Follow-ups fall through the cracks. DentalOS automates your reminders, bookings, and online presence — so your chairs stay full without you lifting a finger."
        primaryCta={{ label: "Book a Free Audit", href: "/contact" }}
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

      <FinalCtaBand
        headline="Ready to stop losing patients to a missed reminder?"
        cta={{ label: "Book a Free Audit", href: "/contact" }}
      />
    </>
  );
}
