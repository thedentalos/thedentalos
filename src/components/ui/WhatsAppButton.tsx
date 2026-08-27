import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  number: string;
  message?: string;
  className?: string;
}

export function WhatsAppButton({
  number,
  message,
  className,
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(
    message ?? "Hi, I'd like to know more about the clinic growth packages"
  );
  const href = `https://wa.me/${number}?text=${encodedMessage}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2.5 rounded-xl px-5 py-3 text-sm font-medium text-white no-underline shadow-md transition-all duration-200 hover:brightness-110 hover:text-white hover:shadow-lg sm:gap-3 sm:px-8 sm:py-4 sm:text-lg",
        className
      )}
      style={{
        backgroundColor: "#25D366",
        boxShadow: "0 4px 14px rgba(37, 211, 102, 0.25)",
      }}
    >
      <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
      <span className="whitespace-nowrap">Chat on WhatsApp</span>
    </a>
  );
}
