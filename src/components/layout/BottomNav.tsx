"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, CalendarCheck, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { label: "Home", href: "/", icon: Home },
  { label: "Services", href: "/how-it-works", icon: Briefcase },
  { label: "Book", href: "/contact", icon: CalendarCheck },
  { label: "Contact", href: "/contact", icon: Phone },
] as const;

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/95 backdrop-blur-xl md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      aria-label="Mobile navigation"
    >
      <div className="mx-auto flex max-w-lg items-center justify-around px-2 py-2">
        {items.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-0.5 rounded-xl px-4 py-1.5 text-[11px] font-medium no-underline transition-colors",
                isActive
                  ? "text-coral"
                  : "text-ink-soft active:text-ink"
              )}
            >
              <Icon
                className={cn(
                  "h-5 w-5 transition-colors",
                  isActive ? "text-coral" : "text-ink-soft"
                )}
                strokeWidth={isActive ? 2 : 1.5}
              />
              <span>{item.label}</span>
              {isActive && (
                <span className="absolute -bottom-0.5 h-0.5 w-5 rounded-full bg-coral" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
