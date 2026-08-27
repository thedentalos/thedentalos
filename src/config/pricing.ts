import type { PricingPlan, BillingOption } from "@/types";

export const billingOptions: BillingOption[] = [
  { id: "monthly", label: "Monthly", months: 1, discountPercent: 0 },
  { id: "semi-annual", label: "Semi-Annual", months: 6, discountPercent: 5 },
  { id: "yearly", label: "Yearly", months: 12, discountPercent: 10 },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "audit",
    title: "Quick Audit",
    price: 1000,
    priceUnit: "/one-time",
    features: [
      "Google Business Profile review — see how your clinic appears on Google",
      "Social media presence check — what patients see before they call",
      "Booking process audit — where you're losing patients in the funnel",
      "Written report with prioritized recommendations",
    ],
    featured: false,
    note: "A one-time audit to pinpoint exactly what's costing you patients. No commitment beyond the report.",
    ctaText: "Book the Audit",
    ctaHref: "/contact",
    oneTime: true,
  },
  {
    id: "growth",
    title: "Growth Package",
    tag: "All-in-one",
    price: 24999,
    priceUnit: "/month",
    featureGroups: [
      {
        title: "Your Complete Digital Marketing Package",
        items: [
          "5 professional video ads",
          "10 creative image ads",
          "Full social media management",
          "Paid ad boosting & optimization",
        ],
      },
      {
        title: "Your Complimentary 'Free Tech' Pack",
        items: [
          "Website, SEO & hosting",
          "Admin panel for management & scheduling",
          "Patient conferencing app",
          "Basic WhatsApp automation",
        ],
      },
    ],
    featured: true,
    note: "Unmatched value — boost patients, reduce operational burden, and get free tech.",
    ctaText: "Contact Us Now",
    ctaHref: "/contact",
  },
];

export function calculatePrice(
  basePrice: number,
  billing: BillingOption
): { monthly: number; total: number; savings: number } {
  const total = basePrice * billing.months;
  const discount = total * (billing.discountPercent / 100);
  const discountedTotal = total - discount;
  const monthly = Math.round(discountedTotal / billing.months);

  return {
    monthly,
    total: Math.round(discountedTotal),
    savings: Math.round(discount),
  };
}
