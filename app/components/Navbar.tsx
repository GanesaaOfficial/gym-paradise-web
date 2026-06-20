"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Facilities", href: "/facilities" },
  { label: "Pricing", href: "/pricing" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const active = (href: string) => pathname === href;
  const solid = scrolled || mobileOpen || !isHome;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-void/95 backdrop-blur-xl border-b border-gold/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-gradient-to-b from-void/90 to-transparent"
      }`}
    >
      <div className="h-1 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          <Link href="/" className="group flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 border border-gold/40 flex items-center justify-center bg-gold/10 group-hover:bg-gold/20 transition-colors">
              <span className="font-display font-black text-gold text-sm">GP</span>
            </div>
            <div className="leading-none">
              <span className="font-display text-lg lg:text-xl font-black uppercase tracking-wide text-cream block">
                Gym Paradise
              </span>
              <span className="font-display text-[10px] font-bold tracking-[0.3em] uppercase text-gold">
                Cheras Selatan 3.0
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display text-[12px] font-bold tracking-[0.18em] uppercase transition-colors ${
                  active(link.href) ? "text-gold" : "text-ash hover:text-cream"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/pricing" className="btn-primary text-[11px] px-5 py-2.5">
              Train Now
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-cream"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all ${mobileOpen ? "max-h-96 pb-6" : "max-h-0"}`}>
          <div className="border-t border-white/10 pt-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block font-display text-sm font-bold tracking-widest uppercase py-3 px-2 ${
                  active(link.href) ? "text-gold" : "text-ash"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/pricing" onClick={() => setMobileOpen(false)} className="btn-primary w-full justify-center mt-4">
              Train Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
