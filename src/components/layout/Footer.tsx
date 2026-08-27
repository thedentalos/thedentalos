import Link from "next/link";
import { navLinks } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { MessageCircle, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-teal text-white">
      <div className="mx-auto max-w-7xl px-5 py-8 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-display text-xl font-semibold text-white no-underline hover:text-coral transition-colors"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/60">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-coral">
              Pages
            </h3>
            <ul className="space-y-1.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 no-underline hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-coral">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/60 no-underline hover:text-white transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-coral" strokeWidth={1.5} />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-sm text-white/60 no-underline hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 text-coral" strokeWidth={1.5} />
                  {siteConfig.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-sm text-white/60">
                <MapPin className="h-4 w-4 text-coral" strokeWidth={1.5} />
                {siteConfig.address}
              </li>
            </ul>

            {/* Social */}
            <div className="mt-4 flex gap-5">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/60 no-underline hover:text-white transition-colors"
                >
                  Instagram
                </a>
              )}
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/60 no-underline hover:text-white transition-colors"
                >
                  Facebook
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/10 pt-4 text-center">
          <p className="text-xs text-white/40">{siteConfig.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
