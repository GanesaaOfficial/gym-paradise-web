"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Facilities", href: "/facilities" },
  { label: "Pricing",    href: "/pricing" },
  { label: "Gallery",    href: "/gallery" },
  { label: "Contact",    href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const active = (href: string) => pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled || mobileOpen
          ? "bg-void/92 backdrop-blur-2xl border-b border-white/[0.04]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-[68px] lg:h-[76px]">

          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-px group shrink-0">
            <span className="font-display text-[22px] font-black uppercase tracking-[0.06em] text-cream group-hover:text-white transition-colors duration-300">
              Gym Paradise
            </span>
            <span className="font-display text-[22px] font-black text-gold ml-1">3.0</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-display text-[12px] font-semibold tracking-[0.22em] uppercase transition-colors duration-200 group ${
                  active(link.href)
                    ? "text-gold"
                    : "text-ash hover:text-cream"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-400 ${
                    active(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="https://wa.me/601126898810"
              target="_blank" rel="noopener noreferrer"
              className="font-display text-[11px] font-semibold tracking-[0.2em] uppercase text-ash hover:text-gold transition-colors duration-200"
            >
              WhatsApp
            </a>
            <Link href="/pricing" className="btn-primary text-[12px] px-6 py-3">
              Join Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 -mr-1 text-ash hover:text-cream transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-[5px]">
              <span className={`block h-px bg-current transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-px bg-current transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            mobileOpen ? "max-h-72 opacity-100 pb-5" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-white/[0.05] pt-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-[13px] font-semibold tracking-[0.22em] uppercase px-3 py-3 transition-colors duration-200 ${
                  active(link.href)
                    ? "text-gold"
                    : "text-ash hover:text-cream"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/[0.04] mt-2">
              <Link href="/pricing" className="btn-primary w-full text-center py-3.5">
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
