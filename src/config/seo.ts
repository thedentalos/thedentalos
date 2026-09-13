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
  title: "Automated Growth for Dental Clinics in Pakistan",
  description:
    "Every empty chair costs you revenue. DentalOS automates WhatsApp reminders, Google presence, and patient follow-ups so your dental clinic stays fully booked.",
  alternates: { canonical: "https://thedentalos.com" },
  openGraph: {
    title: "Automated Growth for Dental Clinics in Pakistan",
    description:
      "Every empty chair costs you revenue. WhatsApp reminders, Google presence, and patient follow-ups — automated for dental clinics in Pakistan.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    images: [defaultOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automated Growth for Dental Clinics in Pakistan",
    description:
      "Every empty chair costs you revenue. WhatsApp reminders, Google presence, and patient follow-ups — automated.",
    images: [defaultOg.url],
  },
};

export const pricingMetadata: Metadata = {
  title: "Dental Clinic Marketing Packages & Pricing",
  description:
    "Quick Audit at PKR 1,000 one-time, or the full Growth Package at PKR 24,999/month: video & image ads, social media management, paid ads, plus a free website, admin panel, patient conferencing app & WhatsApp automation.",
  alternates: { canonical: "https://thedentalos.com/pricing" },
  openGraph: {
    title: "Dental Clinic Marketing Packages & Pricing",
    description:
      "Quick Audit (PKR 1,000 one-time) or Growth Package (PKR 24,999/month) with video & image ads, social media management, paid ads, plus free website, admin panel, patient app & WhatsApp automation.",
    images: [defaultOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Clinic Marketing Packages & Pricing",
    description:
      "Quick Audit (PKR 1,000 one-time) or Growth Package (PKR 24,999/month) with everything included.",
    images: [defaultOg.url],
  },
};

export const howItWorksMetadata: Metadata = {
  title: "How Dental Clinic Growth Automation Works",
  description:
    "Four steps to fill more chairs: free audit, website setup, WhatsApp automation, and ongoing growth. Built for dental clinics in Pakistan.",
  alternates: { canonical: "https://thedentalos.com/how-it-works" },
  openGraph: {
    title: "How Dental Clinic Growth Automation Works",
    description:
      "Book a free audit → Website setup → WhatsApp automation → Grow. Simple, step-by-step process for dental clinics.",
    images: [defaultOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Dental Clinic Growth Automation Works",
    description:
      "Book a free audit → Website setup → WhatsApp automation → Grow. Simple process for dental clinics.",
    images: [defaultOg.url],
  },
};

export const resultsMetadata: Metadata = {
  title: "Dental Clinic Growth Approach",
  description:
    "See how DentalOS approaches WhatsApp reminders, patient follow-ups, websites, SEO, and marketing for dental clinics across Pakistan.",
  alternates: { canonical: "https://thedentalos.com/results" },
  openGraph: {
    title: "Dental Clinic Growth Approach",
    description:
      "Explore DentalOS services designed to help dental clinics reduce no-shows, improve bookings, and build a stronger online presence.",
    images: [defaultOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Clinic Growth Approach",
    description: "How DentalOS helps dental clinics across Pakistan grow.",
    images: [defaultOg.url],
  },
};

export const aboutMetadata: Metadata = {
  title: "About Our Dental Clinic Growth Services",
  description:
    "We're a Pakistan-based growth agency focused exclusively on dental clinics. Here's why we chose this vertical and how we help.",
  alternates: { canonical: "https://thedentalos.com/about" },
  openGraph: {
    title: "About Our Dental Clinic Growth Services",
    description: "Why we focus exclusively on dental clinic growth in Pakistan.",
    images: [defaultOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Our Dental Clinic Growth Services",
    description: "Why we focus exclusively on dental clinic growth in Pakistan.",
    images: [defaultOg.url],
  },
};

export const contactMetadata: Metadata = {
  title: "Contact DentalOS for a Clinic Growth Audit",
  description:
    "Get in touch via WhatsApp or our contact form. Fastest way to reach us is WhatsApp — usually respond within a few hours.",
  alternates: { canonical: "https://thedentalos.com/contact" },
  openGraph: {
    title: "Contact DentalOS for a Clinic Growth Audit",
    description:
      "Chat with us on WhatsApp or fill out our contact form for a free clinic growth audit.",
    images: [defaultOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact DentalOS for a Clinic Growth Audit",
    description:
      "Chat with us on WhatsApp or fill out our contact form for a free clinic growth audit.",
    images: [defaultOg.url],
  },
};

export const blogIndexMetadata: Metadata = {
  title: "Dental Clinic Growth Insights",
  description:
    "Practical guides for dental clinics in Pakistan: reduce no-shows, improve your Google listing, and grow your practice with WhatsApp.",
  alternates: { canonical: "https://thedentalos.com/blog" },
  openGraph: {
    title: "Dental Clinic Growth Insights",
    description:
      "Practical guides for dental clinics: WhatsApp reminders, Google Business Profile, recall strategies, and more.",
    images: [defaultOg],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Clinic Growth Insights",
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
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    description:
      "Growth services for dental clinics in Pakistan, including WhatsApp automation, websites, SEO, paid ads, social media, and patient follow-ups.",
    areaServed: {
      "@type": "Country",
      name: siteConfig.serviceArea,
    },
    contactPoint: siteConfig.contactNumbers.map((telephone) => ({
      "@type": "ContactPoint",
      telephone,
      contactType: "customer service",
      availableLanguage: ["English", "Urdu"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: siteConfig.hours.days,
        opens: siteConfig.hours.opens,
        closes: siteConfig.hours.closes,
      },
    })),
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook].filter(
      Boolean
    ),
  };
}

export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteConfig.url}/#dental-clinic-growth-service`,
    name: "Dental clinic growth services",
    description:
      "Automated growth for dental clinics in Pakistan — WhatsApp reminders, Google presence, websites, ads, and patient follow-ups.",
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: siteConfig.serviceArea,
    },
    serviceType: [
      "WhatsApp automation",
      "Dental clinic websites and SEO",
      "Social media management",
      "Paid ad boosting and optimization",
      "Clinic management and scheduling tools",
    ],
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
        url: `${siteConfig.url}${siteConfig.logo}`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}
