import type { NavLink, CTAConfig } from "@/types";
import { siteConfig } from "./site";

export const navLinks: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "How it Works", href: "/how-it-works" },
  { label: "Results", href: "/results" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const ctaLink: CTAConfig = {
  label: "Chat on WhatsApp",
  href: siteConfig.whatsappLink,
};
