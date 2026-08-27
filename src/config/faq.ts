import type { FAQItem } from "@/types";

export const pricingFaqs: FAQItem[] = [
  {
    id: "faq-phone",
    question: "Do I need to change my clinic's phone number?",
    answer:
      "No. We work with your existing WhatsApp number. The WhatsApp automation links to your current number, so patients continue messaging the same contact they already have.",
  },
  {
    id: "faq-website",
    question: "What if I already have a website?",
    answer:
      "We can either replace it with a new one built for patient conversion, or integrate our booking widget and SEO work into your existing site. During the free audit we'll recommend whichever makes more sense for your clinic.",
  },
  {
    id: "faq-data",
    question: "Is my patients' data safe?",
    answer:
      "Yes. All patient communication runs through WhatsApp's own infrastructure with encryption in transit and at rest. We never store patient records on our own systems — everything lives in tools you control.",
  },
  {
    id: "faq-app",
    question: "Will my patients need to download an app?",
    answer:
      "Patients don't need to download anything — they book and get reminders through WhatsApp, which they already use. Daily appointment notifications keep your clinic staff on top of the schedule without any extra apps.",
  },
  {
    id: "faq-audit",
    question: "What's included in the Quick Audit?",
    answer:
      "We review your Google Business Profile, social media presence, and current booking process, then send you a written report with prioritized recommendations. It's a one-time PKR 1,000 review — no ongoing commitment. Many clinics use it to decide whether the full Growth Package makes sense for them.",
  },
  {
    id: "faq-billing",
    question: "How does the billing work?",
    answer:
      "PKR 24,999 per month billed monthly. Save 5% when you pay semi-annually (6 months at a time), or 10% when you pay yearly. No hidden setup fees — the free audit covers the initial review of your clinic's setup.",
  },
  {
    id: "faq-cancel",
    question: "Can I cancel anytime?",
    answer:
      "Yes. There are no long-term contracts beyond the billing period you choose. If you're on a monthly plan, you can cancel with 7 days' notice. For semi-annual and yearly plans, you're committed for that period — but we're confident you'll see the value well before then.",
  },
];
