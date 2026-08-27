# Website Build Spec — Dental Clinic Growth Agency

Use this document as the full spec for generating the marketing website. Build in **Next.js** (App Router), fully responsive, mobile-first. This is a services website for an agency that sells software + digital marketing to dental clinics in Pakistan.

---

## 1. Tech stack & setup

- **Framework**: Next.js (App Router, TypeScript)
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts, self-hosted via `next/font`
- **Forms**: Simple contact form — submit via a form service (e.g. Formspree or Resend) rather than building a custom backend. No database required for launch.
- **Deployment target**: Vercel
- **Icons**: lucide-react
- **No CMS required for v1** — content is hardcoded in components/config files so it's easy to edit later.

---

## 2. Design system

### Colors — blue, mint, white only (no red/warm accent)

```
--ink:          #12303D   /* primary text, near-navy */
--ink-soft:     #5E7C87   /* secondary text */
--enamel:       #F7FBFC   /* page background, near-white */
--enamel-dim:   #EAF4F7   /* section background alt */
--blue:         #1E88A8   /* primary accent — links, tags, icons */
--blue-deep:    #0C5670   /* dark accent — featured card bg, headers */
--blue-tint:    #E0F1F5   /* light accent backgrounds */
--mint:         #2FBF95   /* secondary accent — bullets, highlights, CTA */
--mint-deep:    #1F9977   /* CTA hover state */
--mint-tint:    #DEF6EC   /* light mint backgrounds */
--line:         #D2E5EA   /* borders, dividers */
--white:        #FFFFFF
```

Usage rules:
- Backgrounds stay white/enamel — never use blue-deep as a full-page background, only for cards/bands.
- Mint is the primary CTA color (buttons, links that need action emphasis).
- Blue is the primary brand/identity color (logo, headers, tags).
- Do not introduce red, orange, or any warning-coded color anywhere in the UI.

### Typography

- **Display/headline font**: `Fraunces` (serif, variable weight) — used for H1/H2, large numbers, pull quotes. Gives warmth and a bit of craft, avoiding a cold "generic SaaS" feel while still reading clean and clinical.
- **Body/UI font**: `IBM Plex Sans` — used for body copy, nav, buttons, form fields. Clean, highly legible, works well at small sizes for FAQs/footnotes.
- **Optional accent/mono**: `IBM Plex Mono` for small data labels or stat callouts (e.g. "−32% no-shows"), used sparingly.

Type scale (approx):
- H1: 44–56px, Fraunces, medium weight
- H2: 30–36px, Fraunces, medium weight
- H3: 20–22px, Fraunces or Plex Sans medium
- Body: 16–17px, Plex Sans regular, line-height 1.6
- Small/caption: 13px, Plex Sans

### General UI notes
- Rounded corners (~12–14px radius) on cards and buttons, not fully pill-shaped.
- Generous whitespace — this is a trust-driven B2B site, but it should feel premium and state-of-the-art.
- Dynamic interactions — use Framer Motion for smooth, staggered scroll reveals, glassmorphism, glowing hover states, and micro-animations to create a "wow" factor.
- Mobile-first: single-column stacking for all grids below 820px.

---

## 3. Site structure (pages)

1. `/` — Home
2. `/pricing` — Services & Pricing
3. `/how-it-works` — Process
4. `/results` — Case studies (placeholder until real data exists)
5. `/about` — About
6. `/contact` — Contact
7. `/blog` — Blog index (stub for SEO, can launch with 1–2 posts)

---

## 4. Page-by-page components & content

### 4.1 Home (`/`)

**Header/Nav**
- Logo (text-based logo is fine for v1)
- Links: Pricing, How it Works, Results, About, Contact
- CTA button (mint): "Book a Free Audit" → links to `/contact`

**Hero section**
- Eyebrow: "For dental clinics in Pakistan"
- Headline: "Fewer missed appointments. More booked chairs."
- Subhead: "We handle the WhatsApp reminders, the online presence, and the follow-ups — so your chairs stay full without you managing another app."
- Primary CTA (mint button): "Book a Free Audit"
- Secondary CTA (text link): "See how it works →"

**Trust bar**
- Small row of stats/logos. Placeholder content until real clients exist:
  - "500+ appointment reminders sent" *(mark as placeholder — replace with real number before launch)*
  - "Clinics in Lahore & Karachi" *(placeholder)*

**Problem/Solution section** (3-column)
1. **No-shows** — "Patients forget. We remind them automatically over WhatsApp, 24 hours and 2 hours before their visit."
2. **Invisible online** — "Most clinics show up nowhere on Google. We fix your listing and get you found by patients searching nearby."
3. **Lost follow-ups** — "Recall visits and multi-step treatments fall through the cracks. We automate the reminders that bring patients back."

**Pricing preview section**
- Short intro: "Start small. Scale up once it's working."
- Three mini pricing cards (reuse from `/pricing`, condensed) linking to full pricing page.

**Testimonial/quote block**
- Placeholder testimonial, clearly marked (see Section 6 — Reviews).

**Final CTA band**
- Headline: "Ready to stop losing patients to a missed reminder?"
- Button: "Book a Free Audit"

**Footer**
- Logo, short tagline
- Nav links repeated
- Contact info: WhatsApp number, email
- Social links (Instagram/Facebook, if applicable)
- Copyright line

---

### 4.2 Pricing (`/pricing`)

- Headline: "Three ways to work with us"
- Subhead: "Ordered by how fast we can start — not by how much you commit upfront."
- Path indicator: "This week / 1–2 weeks in / 2–4 weeks in"
- Three pricing cards:

**Quick Win Audit — PKR 10,000 one-time**
- Google Business Profile fix
- One week of social content, shot and posted
- Two-week ad sprint on one procedure
- A review-request script for your front desk
- Note: "No setup wait. We start the day you say yes."

**Momentum Package — PKR 30,000/month** *(featured/highlighted card)*
- Everything in the audit, ongoing
- Your WhatsApp inbox, managed daily
- A monthly content calendar
- Patient records set up in a free CRM
- Note: "No approvals to wait on — we're live inside two weeks."

**Full Automation — PKR 65,000/month**
- Everything in Momentum
- Automated booking and appointment reminders
- A booking widget on your website
- Full CRM, built for your whole team
- Note: "Setup takes 2–4 weeks while WhatsApp approves your number."

**FAQ section** (accordion component)
- "Do I need to change my clinic's phone number?"
- "What if I already have a website?"
- "Is my patients' data safe?"
- "What happens after the free audit?"
- "Can I cancel the monthly plans anytime?"

---

### 4.3 How it Works (`/how-it-works`)

- Headline: "From first message to full automation"
- 3–4 step visual (numbered — this is a genuine sequence, numbering is appropriate here):
  1. **Book a free audit** — We review your Google listing, socials, and current booking process.
  2. **Start the Momentum package** — WhatsApp inbox managed, content calendar live, CRM set up.
  3. **Move to Full Automation** — Once WhatsApp API approval completes, reminders and booking run automatically.
  4. **Grow from there** — Monthly reporting, ongoing ad management, recall campaigns.

---

### 4.4 Results (`/results`)

- Headline: "What clinics see after working with us"
- Case study card template (repeatable component):
  - Clinic name (or "a multi-doctor clinic in Lahore" if anonymized)
  - Before/after stats (e.g. bookings/month, review count, no-show rate)
  - Short narrative paragraph
  - Optional quote
- **Note for build**: Launch this page only once at least one real case study exists. Until then, either omit the page from nav or show a "Case studies coming soon" state — do not populate with fabricated results data (unlike testimonials, invented performance numbers on a results/proof page cross into misleading claims and should never go live, even temporarily).

---

### 4.5 About (`/about`)

- Headline: "Why we only work with dental clinics"
- 2–3 paragraphs: origin story, why the dental vertical specifically, why Pakistan
- Founder/team photo + short bio
- Optional: small "our values" or "how we work" 3-point list

---

### 4.6 Contact (`/contact`)

**Primary path — WhatsApp**
- Large, visually dominant button: "Chat with us on WhatsApp"
- Links to `https://wa.me/[NUMBER]?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20the%20clinic%20growth%20packages`
- Short supporting line: "Fastest way to reach us — usually within a few hours."

**Secondary path — Formspree contact form**

Form service: **Formspree** (free tier — 50 submissions/month, sufficient for launch volume).

Fields:
- Name (required)
- Clinic name (required)
- Phone number (required)
- Message (optional)
- Submit button (mint)

Implementation:
- Create a Formspree project at `https://formspree.io` and get the form endpoint (`https://formspree.io/f/[FORM_ID]`).
- Submit the form via a standard `POST` request to the Formspree endpoint (no backend API route needed).
- Store the Formspree form ID in a config/env variable (`NEXT_PUBLIC_FORMSPREE_ID`) so it's easy to swap later.
- Add a hidden honeypot field (`_gotcha`) for basic spam protection — Formspree supports this natively.
- On successful submit, show an on-page confirmation state: "Thanks — we'll get back to you within 24 hours." Do not redirect to another page.
- On error, show a friendly inline error: "Something went wrong. Please try WhatsApp instead." with the WhatsApp button repeated.
- No database or custom backend required.

**Supporting info block**
- Email address
- WhatsApp number (repeated, tappable)
- Office location/city (if applicable)

---

### 4.7 Blog (`/blog`)

- Simple index listing post title, date, short excerpt
- Individual post pages using a consistent template (title, hero image, body, related posts)
- Suggested launch topics (SEO-driven, see Section 7):
  - "How to reduce no-shows at your dental clinic using WhatsApp"
  - "A simple guide to Google Business Profile for dentists in Pakistan"
  - "Why recall reminders matter more than new patient ads"

---

## 5. Reusable components

- `Header` / `Footer`
- `PricingCard` (props: title, tag, price, priceUnit, features[], featured: boolean, note)
- `PathIndicator` (the dotted step-tracker used on Home and How it Works)
- `TestimonialCard`
- `CaseStudyCard`
- `FAQAccordion`
- `CTAButton` (variants: primary/mint, secondary/outline)
- `StatBadge` (for trust bar numbers)
- `ContactForm`
- `WhatsAppButton`

---

## 6. Reviews / testimonials section

**Important — read before building:**

Include a `TestimonialCard` component and populate it with **clearly fake placeholder content** for design/testing purposes only. Mark every placeholder testimonial in code with a comment so it cannot accidentally ship:

```tsx
{/* PLACEHOLDER TESTIMONIAL — replace with real client quote before launch */}
```

Suggested placeholder testimonials (fictional, for layout testing only):

1. "Since switching, our missed appointments dropped noticeably and our front desk isn't chasing patients anymore." — *Placeholder, Dental Clinic Owner*
2. "The WhatsApp reminders alone paid for the package in the first month." — *Placeholder, Multi-branch Clinic*
3. "We finally show up when people search for a dentist nearby." — *Placeholder, Solo Practice Dentist*

Before public launch: replace all placeholders with real client quotes, or hide the section entirely (e.g. behind a feature flag) until at least one genuine testimonial exists. Do not publish fabricated reviews as real customer feedback — this applies even if the text is generic-sounding.

---

## 7. SEO requirements

**Technical SEO**
- Use `next/head` or App Router metadata API for per-page `<title>` and `<meta description>`.
- Generate `sitemap.xml` and `robots.txt` (Next.js supports both natively via `app/sitemap.ts` and `app/robots.ts`).
- Semantic HTML throughout (proper heading hierarchy, one H1 per page, `<nav>`, `<main>`, `<footer>`).
- All images use `next/image` with descriptive `alt` text (no empty alts on meaningful images).
- Ensure fast Core Web Vitals: lazy-load below-fold images, avoid layout shift, minimize blocking JS.
- Add Open Graph and Twitter Card meta tags on every page (title, description, image) for link previews.

**Structured data (JSON-LD)**
- `Organization` schema on the homepage (name, logo, contact point, social profiles).
- `LocalBusiness` schema if the agency has a physical office/service area.
- `FAQPage` schema on the `/pricing` FAQ section.
- `Article` schema on each blog post.

**On-page/content SEO**
- Target local, intent-driven keywords rather than generic ones. Examples to weave into page copy and meta tags:
  - "dental clinic marketing Pakistan"
  - "WhatsApp appointment reminders for clinics"
  - "reduce no-shows dental clinic"
  - City-specific variants where relevant: "dental clinic marketing Lahore", "dental clinic marketing Karachi"
- Each page should have a unique, specific meta title/description — not templated across pages.
- Blog content should answer real questions dentists search for (see Section 4.7 topic list) — this is the primary long-term organic acquisition channel.
- Internal linking: blog posts should link to `/pricing` and `/contact`; case studies should link to relevant pricing tiers.

**Local SEO (non-code, but note in build so relevant fields/markup exist)**
- Ensure `LocalBusiness` schema and footer NAP (Name, Address, Phone) are consistent with the agency's Google Business Profile once claimed — matching details across the web is a ranking factor.

**Launch checklist**
- [ ] Unique title/meta description per page
- [ ] Sitemap submitted to Google Search Console after launch
- [ ] robots.txt allows crawling of all public pages
- [ ] JSON-LD validated (Google Rich Results Test)
- [ ] All images have alt text
- [ ] Mobile responsiveness verified on real devices, not just browser resize
- [ ] Page speed checked (Lighthouse/PageSpeed Insights)

---

## 8. Content tone/voice guide

- Plain, direct language — avoid generic agency jargon ("synergy," "solutions," "leverage").
- Speak to outcomes a dentist cares about (fewer no-shows, more bookings, less admin work), not to technical features.
- Keep sentences short. This audience is busy clinic owners, not marketers.
- Active voice, second person where natural ("you," "your clinic") rather than third person.
