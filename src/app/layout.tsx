import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BottomNav } from "@/components/layout/BottomNav";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { organizationSchema } from "@/config/seo";
import "./globals.css";

/* ------------------------------------------------------------------ */
/* Fonts — self-hosted via next/font                                   */
/* ------------------------------------------------------------------ */

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

/* ------------------------------------------------------------------ */
/* Metadata defaults                                                   */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: {
    template: "%s | DentalOS",
    default: "DentalOS — Automated Growth for Dental Clinics in Pakistan",
  },
  description:
    "Every empty chair costs you revenue. DentalOS automates WhatsApp reminders, Google presence, and patient follow-ups so your dental clinic stays fully booked.",
  metadataBase: new URL("https://thedentalos.com"),
  appleWebApp: {
    capable: true,
    title: "DentalOS",
    statusBarStyle: "default",
  },
  openGraph: {
    siteName: "DentalOS",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FAF8F5",
  colorScheme: "light",
};

/* ------------------------------------------------------------------ */
/* Root layout                                                         */
/* ------------------------------------------------------------------ */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-enamel text-ink" suppressHydrationWarning>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <Header />
        <main className="flex-1 pb-mobile-nav">{children}</main>
        <Footer />
        <BottomNav />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
