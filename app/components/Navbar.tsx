"use client";

import { useState, useLayoutEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Facilities", href: "/facilities" },
  { label: "Pricing", href: "/pricing" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll detection for navbar styling
  useLayoutEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Lock body scroll when mobile menu is open
  useLayoutEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu when a route is clicked
  const handleLinkClick = () => setMobileOpen(false);

  const active = (href: string) => pathname === href;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-void/90 backdrop-blur-xl border-b border-white/5 py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-baseline gap-0 shrink-0 relative z-50">
              <span className="font-display text-xl lg:text-[26px] font-extrabold tracking-tight text-cream transition-colors group-hover:text-white">
                Gym Paradise
              </span>
              <span className="font-display text-xl lg:text-[26px] font-extrabold text-gold ml-1.5 transition-transform group-hover:scale-110 origin-bottom-left">
                3.0
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative font-display text-[13px] font-bold uppercase tracking-[0.1em] py-2 transition-colors ${
                    active(link.href) ? "text-gold" : "text-mist hover:text-cream"
                  }`}
                >
                  {link.label}
                  {/* Premium underline hover effect */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-gold transition-all duration-300 ease-out ${
                      active(link.href)
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  />
                  {/* Subtle glow */}
                  <span
                    className={`absolute inset-0 bg-gold/20 blur-md transition-opacity duration-300 pointer-events-none rounded-full ${
                      active(link.href) ? "opacity-30" : "opacity-0 group-hover:opacity-20"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Right side Actions */}
            <div className="flex items-center gap-6 relative z-50">
              <a
                href="https://wa.me/601126898810"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex text-mist hover:text-gold transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(201,168,76,0.5)]"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              <div className="hidden md:block">
                <Link href="/pricing" className="group relative inline-flex items-center justify-center gap-2 bg-gold text-void font-display font-bold text-[13px] uppercase tracking-[0.06em] px-6 py-2.5 rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-0.5 shadow-[0_0_0_rgba(201,168,76,0)] hover:shadow-[0_8px_20px_rgba(201,168,76,0.3)]">
                  <span className="relative z-10">Join Now</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 -mr-2 text-cream hover:text-gold transition-colors z-50"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
                aria-expanded={mobileOpen}
              >
                <div className="w-6 flex flex-col gap-[5px]">
                  <span className={`block h-[2px] bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                  <span className={`block h-[2px] bg-current transition-all duration-300 ${mobileOpen ? "opacity-0 w-0" : "w-6"}`} />
                  <span className={`block h-[2px] bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : "w-4 self-end"}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Premium Full-Screen Mobile Takeover Menu */}
      <div
        className={`fixed inset-0 z-[90] lg:hidden bg-void/98 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none delay-200"
        }`}
      >
        <div className="flex flex-col justify-center h-full px-8 pt-20 pb-12">
          <div className="flex flex-col gap-6 items-start">
            {navLinks.map((link, i) => (
              <div key={link.href} className="overflow-hidden">
                <Link
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`block font-display text-4xl sm:text-5xl font-bold uppercase tracking-tight transition-all duration-500 hover:translate-x-4 ${
                    active(link.href) ? "text-gold" : "text-cream hover:text-white"
                  } ${
                    mobileOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-full opacity-0"
                  }`}
                  style={{ transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms" }}
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          <div 
            className={`mt-12 transition-all duration-500 delay-300 ${mobileOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <div className="h-px w-full bg-white/10 mb-8" />
            <Link
              href="/pricing"
              onClick={handleLinkClick}
              className="flex items-center justify-center w-full bg-gold text-void font-display font-bold text-lg uppercase tracking-wider py-4 rounded-full transition-transform active:scale-95"
            >
              Join Now
            </Link>
            <div className="flex gap-6 mt-8 justify-center">
               <a href="https://wa.me/601126898810" className="text-mist hover:text-gold uppercase text-sm font-display tracking-widest transition-colors">WhatsApp</a>
               <a href="https://instagram.com" className="text-mist hover:text-gold uppercase text-sm font-display tracking-widest transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
