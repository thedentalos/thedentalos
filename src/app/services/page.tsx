import type { Metadata } from "next";
import Link from "next/link";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Dental Clinic Marketing, SEO & Automation Services",
  description:
    "DentalOS helps dental clinics across Pakistan with WhatsApp automation, websites, SEO, social media, paid ads, scheduling tools, and patient conferencing.",
  alternates: { canonical: "https://thedentalos.com/services" },
  openGraph: {
    title: "Dental Clinic Marketing, SEO & Automation Services",
    description:
      "WhatsApp automation, websites, SEO, paid ads, social media, scheduling, and patient communication for dental clinics in Pakistan.",
    url: "https://thedentalos.com/services",
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: "/api/og?title=Dental%20Clinic%20Growth%20Services",
        width: 1200,
        height: 630,
        alt: "DentalOS dental clinic growth services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Clinic Marketing, SEO & Automation Services",
    description:
      "Growth services built specifically for dental clinics in Pakistan.",
    images: ["/api/og?title=Dental%20Clinic%20Growth%20Services"],
  },
};

const services = [
  {
    title: "Digital marketing for dental clinics",
    description:
      "Five professional video ads, ten creative image ads, social media management, and paid-ad boosting and optimization for your clinic.",
  },
  {
    title: "Dental clinic websites, SEO & hosting",
    description:
      "A clinic-focused website, search-engine foundations, and hosting designed to make it easier for patients to find and contact your practice.",
  },
  {
    title: "WhatsApp appointment and recall automation",
    description:
      "Basic WhatsApp automation for patient reminders, booking conversations, and follow-ups so your team can spend less time chasing appointments.",
  },
  {
    title: "Clinic management and scheduling",
    description:
      "An admin panel for day-to-day management and scheduling, paired with a patient conferencing app for clearer patient communication.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-5 md:py-20">
          <h1 className="font-display text-3xl font-medium text-ink md:text-5xl">
            Growth services built for dental clinics
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            DentalOS brings marketing and practical clinic technology together
            for dental practices across Pakistan.
          </p>
        </div>
      </section>

      <section className="bg-enamel-dim py-12 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-5 px-4 sm:px-5 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-line bg-white p-6"
            >
              <h2 className="font-display text-xl font-medium text-ink">
                {service.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-5">
          <h2 className="font-display text-2xl font-medium text-ink md:text-3xl">
            Start with a clear picture of your clinic’s growth opportunities
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
            Our Quick Audit reviews your Google Business Profile, social media
            presence, and booking process, then gives you prioritized next
            steps.
          </p>
          <Link
            href="/pricing"
            className="mt-6 inline-flex text-sm font-semibold text-coral no-underline hover:text-coral-deep"
          >
            View packages and pricing →
          </Link>
        </div>
      </section>

      <FinalCtaBand
        headline="Want a growth plan built around your clinic?"
        cta={{ label: "Chat on WhatsApp", href: siteConfig.whatsappLink }}
      />
    </>
  );
}
