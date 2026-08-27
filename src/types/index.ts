export interface NavLink {
  label: string;
  href: string;
}

export interface PricingFeatureGroup {
  title: string;
  items: string[];
}

export interface PricingPlan {
  id: string;
  title: string;
  tag?: string;
  price: number;       // base monthly price in PKR (total price if oneTime)
  priceUnit: string;   // e.g. "/month" or "/one-time"
  features?: string[];
  featureGroups?: PricingFeatureGroup[];
  featured: boolean;
  note: string;
  ctaText: string;
  ctaHref: string;
  oneTime?: boolean;   // if true, hides billing toggle
}

export interface BillingOption {
  id: string;
  label: string;
  months: number;
  discountPercent: number; // e.g. 5 for 5%
}

export interface Testimonial {
  id: string;
  quote: string;
  attribution: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CaseStudy {
  id: string;
  clinicName: string;
  stats: { label: string; value: string }[];
  narrative: string;
  quote?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: React.ReactNode;
  image?: string;
  author?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  specialty?: "Technical" | "Marketing & Sales";
}

export interface CTAConfig {
  label: string;
  href: string;
}
