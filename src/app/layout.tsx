import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
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
    default: "DentalOS",
  },
  description:
    "Every empty chair costs you revenue. DentalOS automates WhatsApp reminders, Google presence, and patient follow-ups so your dental clinic stays fully booked.",
  metadataBase: new URL("https://thedentalos.com"),
  alternates: {
    canonical: "./",
  },
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google Analytics 4 — only loads when GA ID is configured */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col bg-enamel text-ink" suppressHydrationWarning>
        {/* JSON-LD: Organization */}
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
