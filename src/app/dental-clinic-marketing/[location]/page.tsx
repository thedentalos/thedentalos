import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";
import { serviceLocations } from "@/config/locations";
import { siteConfig } from "@/config/site";

type Props = {
  params: Promise<{ location: string }>;
};

function getLocation(slug: string) {
  return serviceLocations.find((location) => location.slug === slug);
}

export function generateStaticParams() {
  return serviceLocations.map((location) => ({ location: location.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location: slug } = await params;
  const location = getLocation(slug);

  if (!location) return {};

  const url = `${siteConfig.url}/dental-clinic-marketing/${location.slug}`;
  const image = `/api/og?title=${encodeURIComponent(location.title)}`;

  return {
    title: location.title,
    description: location.description,
    alternates: { canonical: url },
    openGraph: {
      title: location.title,
      description: location.description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: location.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: location.title,
      description: location.description,
      images: [image],
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { location: slug } = await params;
  const location = getLocation(slug);

  if (!location) notFound();

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-5 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-coral">
            Dental clinic growth services
          </p>
          <h1 className="mt-3 font-display text-3xl font-medium text-ink md:text-5xl">
            {location.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            {location.description}
          </p>
        </div>
      </section>

      <section className="bg-enamel-dim py-12 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-5 px-4 sm:px-5 md:grid-cols-2">
          <article className="rounded-2xl border border-line bg-white p-6">
            <h2 className="font-display text-xl font-medium text-ink">
              Marketing that helps patients find your clinic
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Build a stronger clinic presence with professional video and image
              ads, social media management, paid-ad optimization, and a website
              with SEO foundations.
            </p>
          </article>
          <article className="rounded-2xl border border-line bg-white p-6">
            <h2 className="font-display text-xl font-medium text-ink">
              Systems that help your team follow through
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Use WhatsApp automation, scheduling tools, an admin panel, and a
              patient conferencing app to make reminders and patient
              communication easier to manage.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-white py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-5">
          <h2 className="font-display text-2xl font-medium text-ink md:text-3xl">
            How we support clinics in {location.name}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
            {location.availability}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
            Our team is available by WhatsApp and phone every day from 10 AM to
            8 PM.
          </p>
          <Link
            href="/services"
            className="mt-6 inline-flex text-sm font-semibold text-coral no-underline hover:text-coral-deep"
          >
            Explore DentalOS services →
          </Link>
        </div>
      </section>

      <FinalCtaBand
        headline={`Ready to grow your dental clinic in ${location.name}?`}
        cta={{ label: "Chat on WhatsApp", href: siteConfig.whatsappLink }}
      />
    </>
  );
}
