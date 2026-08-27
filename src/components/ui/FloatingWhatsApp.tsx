import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={siteConfig.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fab-mobile-safe fixed right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 md:right-5 md:h-14 md:w-14 md:z-50"
      style={{
        bottom: "calc(1rem + env(safe-area-inset-bottom, 0px))",
        backgroundColor: "#25D366",
        boxShadow: "0 4px 14px rgba(37, 211, 102, 0.35)",
      }}
    >
      <span
        className="pointer-events-none absolute inline-flex h-full w-full animate-ping rounded-full opacity-20"
        style={{ backgroundColor: "#25D366" }}
      />
      <MessageCircle className="relative h-5 w-5 md:h-6 md:w-6" strokeWidth={1.5} />
    </a>
  );
}
