import type { Metadata } from "next";
import { siteConfig } from "./site";
import type { FAQItem, BlogPost } from "@/types";

function ogImage(title: string, subtitle?: string) {
  const params = new URLSearchParams({ title });
  if (subtitle) params.set("subtitle", subtitle);
  return {
    url: `/api/og?${params.toString()}`,
    width: 1200,
    height: 630,
    alt: title,
  };
}

const defaultOg = ogImage(
  "Automated Growth for Dental Clinics in Pakistan",
  "WhatsApp reminders, Google presence, and patient follow-ups — automated."
);

// ---------------------------------------------------------------------------
// Per-page metadata
// ---------------------------------------------------------------------------

export const homeMetadata: Metadata = {
  title: "DentalOS — Automated Growth for Dental Clinics in Pakistan",
  description:
    "Every empty chair costs you revenue. DentalOS automates WhatsApp reminders, Google presence, and patient follow-ups so your dental clinic stays fully booked.",
  alternates: { canonical: "https://thedentalos.com" },
  openGraph: {
    title: "DentalOS — Automated Growth for Dental Clinics in Pakistan",
    description:
      "Every empty chair costs you revenue. WhatsApp reminders, Google presence, and patient follow-ups — automated for dental clinics in Pakistan.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    images: [defaultOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "DentalOS — Automated Growth for Dental Clinics in Pakistan",
    description:
      "Every empty chair costs you revenue. WhatsApp reminders, Google presence, and patient follow-ups — automated.",
    images: [defaultOg.url],
  },
};

export const pricingMetadata: Metadata = {
  title: "Pricing — DentalOS Growth Plans for Clinics",
  description:
    "Quick Audit at PKR 1,000 one-time, or the full Growth Package at PKR 24,999/month: video & image ads, social media management, paid ads, plus a free website, admin panel, patient conferencing app & WhatsApp automation.",
  alternates: { canonical: "https://thedentalos.com/pricing" },
  openGraph: {
    title: "Pricing — DentalOS",
    description:
      "Quick Audit (PKR 1,000 one-time) or Growth Package (PKR 24,999/month) with video & image ads, social media management, paid ads, plus free website, admin panel, patient app & WhatsApp automation.",
    images: [defaultOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing — DentalOS",
    description:
      "Quick Audit (PKR 1,000 one-time) or Growth Package (PKR 24,999/month) with everything included.",
    images: [defaultOg.url],
  },
};

export const howItWorksMetadata: Metadata = {
  title: "How It Works — From Free Audit to Full Automation",
  description:
    "Four steps to fill more chairs: free audit, website setup, WhatsApp automation, and ongoing growth. Built for dental clinics in Pakistan.",
  alternates: { canonical: "https://thedentalos.com/how-it-works" },
  openGraph: {
    title: "How It Works — DentalOS",
    description:
      "Book a free audit → Website setup → WhatsApp automation → Grow. Simple, step-by-step process for dental clinics.",
    images: [defaultOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "How It Works — DentalOS",
    description:
      "Book a free audit → Website setup → WhatsApp automation → Grow. Simple process for dental clinics.",
    images: [defaultOg.url],
  },
};

export const resultsMetadata: Metadata = {
  title: "Results — What Clinics See After Working With DentalOS",
  description:
    "Real results from dental clinics in Pakistan: fewer no-shows, more bookings, and a stronger online presence.",
  alternates: { canonical: "https://thedentalos.com/results" },
  openGraph: {
    title: "Results — DentalOS",
    description:
      "See what dental clinics in Islamabad and Karachi have achieved with DentalOS.",
    images: [defaultOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "Results — DentalOS",
    description: "Real results from dental clinics in Pakistan.",
    images: [defaultOg.url],
  },
};

export const aboutMetadata: Metadata = {
  title: "About — Why DentalOS Only Works With Dental Clinics",
  description:
    "We're a Pakistan-based growth agency focused exclusively on dental clinics. Here's why we chose this vertical and how we help.",
  alternates: { canonical: "https://thedentalos.com/about" },
  openGraph: {
    title: "About — DentalOS",
    description: "Why we focus exclusively on dental clinic growth in Pakistan.",
    images: [defaultOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "About — DentalOS",
    description: "Why we focus exclusively on dental clinic growth in Pakistan.",
    images: [defaultOg.url],
  },
};

export const contactMetadata: Metadata = {
  title: "Contact — Book a Free Audit or Chat on WhatsApp",
  description:
    "Get in touch via WhatsApp or our contact form. Fastest way to reach us is WhatsApp — usually respond within a few hours.",
  alternates: { canonical: "https://thedentalos.com/contact" },
  openGraph: {
    title: "Contact — DentalOS",
    description:
      "Chat with us on WhatsApp or fill out our contact form for a free clinic growth audit.",
    images: [defaultOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — DentalOS",
    description:
      "Chat with us on WhatsApp or fill out our contact form for a free clinic growth audit.",
    images: [defaultOg.url],
  },
};

export const blogIndexMetadata: Metadata = {
  title: "Blog — Dental Clinic Growth Insights",
  description:
    "Practical guides for dental clinics in Pakistan: reduce no-shows, improve your Google listing, and grow your practice with WhatsApp.",
  alternates: { canonical: "https://thedentalos.com/blog" },
  openGraph: {
    title: "Blog — DentalOS",
    description:
      "Practical guides for dental clinics: WhatsApp reminders, Google Business Profile, recall strategies, and more.",
    images: [defaultOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — DentalOS",
    description: "Practical guides for dental clinics in Pakistan.",
    images: [defaultOg.url],
  },
};

// ---------------------------------------------------------------------------
// JSON-LD structured data helpers
// ---------------------------------------------------------------------------

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/api/og?title=DentalOS`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.whatsappNumber,
      contactType: "customer service",
      availableLanguage: ["English", "Urdu"],
    },
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook].filter(
      Boolean
    ),
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.whatsappNumber,
    email: siteConfig.email,
    image: `${siteConfig.url}/api/og?title=DentalOS`,
    description:
      "Automated growth for dental clinics in Pakistan — WhatsApp reminders, Google presence, and patient follow-ups.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "33.6844",
      longitude: "73.0479",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "21:00",
      },
    ],
    priceRange: "PKR 1,000 – PKR 24,999/month",
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook].filter(
      Boolean
    ),
  };
}

export function faqPageSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    description: post.excerpt,
    image: `${siteConfig.url}/api/og?title=${encodeURIComponent(post.title)}`,
    author: {
      "@type": "Organization",
      name: post.author ?? siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/api/og?title=DentalOS`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}
