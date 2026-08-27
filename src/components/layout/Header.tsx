"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MobileNav } from "./MobileNav";
import { CTAButton } from "@/components/ui/CTAButton";
import { navLinks, ctaLink } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        <motion.header
          className={cn(
            "fixed top-0 z-50 w-full transition-all duration-300",
            isScrolled ? "pt-3" : "pt-0"
          )}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div
            className={cn(
              "mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 transition-all duration-300",
              isScrolled
                ? "glass-header rounded-2xl shadow-sm md:px-7"
                : "bg-transparent"
            )}
          >
            {/* Logo */}
            <Link
              href="/"
              className="font-display text-xl font-semibold text-ink no-underline hover:text-teal-light transition-colors"
            >
              {siteConfig.name}
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative text-sm font-medium transition-colors no-underline",
                      isActive
                        ? "text-ink"
                        : "text-ink-soft hover:text-ink"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-coral"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <CTAButton href={ctaLink.href} size="sm">
                {ctaLink.label}
              </CTAButton>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl p-2 text-ink-soft hover:text-ink md:hidden transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </motion.header>
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-[68px]" />

      {/* Mobile slide-out */}
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
