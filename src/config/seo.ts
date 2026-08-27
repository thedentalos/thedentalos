import type { Metadata } from "next";
import { siteConfig } from "./site";
import type { FAQItem, BlogPost } from "@/types";

// ---------------------------------------------------------------------------
// Per-page metadata
// ---------------------------------------------------------------------------

export const homeMetadata: Metadata = {
  title: "DentalOS — Automated Growth for Dental Clinics in Pakistan",
  description:
    "Every empty chair costs you revenue. DentalOS automates WhatsApp reminders, Google presence, and patient follow-ups so your dental clinic stays fully booked.",
  openGraph: {
    title: "DentalOS — Automated Growth for Dental Clinics in Pakistan",
    description:
      "Every empty chair costs you revenue. WhatsApp reminders, Google presence, and patient follow-ups — automated for dental clinics in Pakistan.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DentalOS — Automated Growth for Dental Clinics in Pakistan",
    description:
      "Every empty chair costs you revenue. WhatsApp reminders, Google presence, and patient follow-ups — automated.",
  },
};

export const pricingMetadata: Metadata = {
  title: "Pricing — DentalOS Growth Plans for Clinics",
  description:
    "Quick Audit at PKR 1,000 one-time, or the full Growth Package at PKR 24,999/month: video & image ads, social media management, paid ads, plus a free website, admin panel, patient conferencing app & WhatsApp automation. Save 5% semi-annually or 10% yearly.",
  openGraph: {
    title: "Pricing — DentalOS",
    description:
      "Quick Audit (PKR 1,000 one-time) or Growth Package (PKR 24,999/month) with video & image ads, social media management, paid ads, plus free website, admin panel, patient app & WhatsApp automation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing — DentalOS",
    description:
      "Quick Audit (PKR 1,000 one-time) or Growth Package (PKR 24,999/month) with everything included.",
  },
};

export const howItWorksMetadata: Metadata = {
  title: "How It Works — From Free Audit to Full Automation",
  description:
    "Four steps to fill more chairs: free audit, website setup, WhatsApp automation, and ongoing growth. Built for dental clinics in Pakistan.",
  openGraph: {
    title: "How It Works — DentalOS",
    description:
      "Book a free audit → Website setup → WhatsApp automation → Grow. Simple, step-by-step process for dental clinics.",
  },
  twitter: {
    card: "summary_large_image",
    title: "How It Works — DentalOS",
    description:
      "Book a free audit → Website setup → WhatsApp automation → Grow. Simple process for dental clinics.",
  },
};

export const resultsMetadata: Metadata = {
  title: "Results — What Clinics See After Working With DentalOS",
  description:
    "Real results from dental clinics in Pakistan: fewer no-shows, more bookings, and a stronger online presence.",
  openGraph: {
    title: "Results — DentalOS",
    description:
      "See what dental clinics in Islamabad and Karachi have achieved with DentalOS.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Results — DentalOS",
    description:
      "Real results from dental clinics in Pakistan.",
  },
};

export const aboutMetadata: Metadata = {
  title: "About — Why DentalOS Only Works With Dental Clinics",
  description:
    "We're a Pakistan-based growth agency focused exclusively on dental clinics. Here's why we chose this vertical and how we help.",
  openGraph: {
    title: "About — DentalOS",
    description:
      "Why we focus exclusively on dental clinic growth in Pakistan.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — DentalOS",
    description:
      "Why we focus exclusively on dental clinic growth in Pakistan.",
  },
};

export const contactMetadata: Metadata = {
  title: "Contact — Book a Free Audit or Chat on WhatsApp",
  description:
    "Get in touch via WhatsApp or our contact form. Fastest way to reach us is WhatsApp — usually respond within a few hours.",
  openGraph: {
    title: "Contact — DentalOS",
    description:
      "Chat with us on WhatsApp or fill out our contact form for a free clinic growth audit.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — DentalOS",
    description:
      "Chat with us on WhatsApp or fill out our contact form for a free clinic growth audit.",
  },
};

export const blogIndexMetadata: Metadata = {
  title: "Blog — Dental Clinic Growth Insights",
  description:
    "Practical guides for dental clinics in Pakistan: reduce no-shows, improve your Google listing, and grow your practice with WhatsApp.",
  openGraph: {
    title: "Blog — DentalOS",
    description:
      "Practical guides for dental clinics: WhatsApp reminders, Google Business Profile, recall strategies, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — DentalOS",
    description:
      "Practical guides for dental clinics in Pakistan.",
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
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.whatsappNumber,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
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
    author: {
      "@type": "Organization",
      name: post.author ?? siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}
