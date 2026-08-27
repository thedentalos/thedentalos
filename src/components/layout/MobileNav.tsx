"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { navLinks, ctaLink } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-white shadow-xl transition-transform duration-300 md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Close button */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-line">
          <span className="font-display text-lg font-semibold text-ink">
            {siteConfig.name}
          </span>
          <button
            type="button"
            className="rounded-md p-2 text-ink-soft hover:text-ink"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 px-4 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={cn(
                "rounded-lg px-3 py-3 text-base font-medium transition-colors no-underline",
                pathname === link.href
                  ? "bg-coral-tint text-coral-deep"
                  : "text-ink hover:bg-enamel-dim"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="mt-auto px-4 py-6 border-t border-line">
          <CTAButton href={ctaLink.href} className="w-full justify-center">
            {ctaLink.label}
          </CTAButton>
        </div>
      </div>
    </>
  );
}
