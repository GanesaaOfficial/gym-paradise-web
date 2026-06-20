"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    src: "/Photos/unnamed-25.webp",
    alt: "Main training floor with BOLDER neon sign",
  },
  {
    src: "/Photos/unnamed-37.webp",
    alt: "Dramatic wide shot of training floor with geometric LED grid",
  },
  {
    src: "/Photos/unnamed-24.webp",
    alt: "Free weight zone with UNSTOPPABLE neon sign",
  },
];

const heroStats = [
  { value: "38K", label: "Sq Ft" },
  { value: "200+", label: "Machines" },
  { value: "18", label: "Hours Daily" },
  { value: "#1", label: "Mega Gym MY" },
];

const INTERVAL_MS = 6000;

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-void" />

      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            quality={90}
            sizes="100vw"
            className="object-cover animate-ken-burns"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-void via-void/85 to-void/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-void/60" />
      <div className="absolute inset-0 pattern-grid-athletic opacity-30" />

      {/* Diagonal accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/[0.06] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col flex-1 pt-24 md:pt-28 pb-32">
        <div className="flex-1 flex flex-col justify-center max-w-3xl">
          <div className="hero-line-1 inline-flex items-center gap-2 mb-6 w-fit bg-void/60 border border-gold/30 px-4 py-2">
            <span className="w-2 h-2 bg-gold animate-pulse-gold" />
            <span className="font-display text-[10px] font-bold text-gold tracking-[0.3em] uppercase">
              Open 6AM – Midnight · Walk-Ins Welcome
            </span>
          </div>

          <p className="hero-line-1 font-display font-black italic uppercase text-gold text-[clamp(18px,3vw,28px)] tracking-[0.12em] mb-3">
            Unlock Your Potential
          </p>

          <h1 className="hero-line-2 font-display font-black uppercase leading-[0.88] tracking-tight mb-4">
            <span className="block text-[clamp(44px,9vw,108px)] text-cream">Train Like</span>
            <span className="block text-[clamp(48px,10vw,120px)] text-gold-gradient italic">
              An Athlete
            </span>
          </h1>

          <p className="hero-sub text-mist text-base lg:text-lg font-light leading-relaxed max-w-lg mb-3">
            Malaysia&apos;s first world-class mega gym — 38,000 sq ft of premium iron,
            HYROX Training Club, and Grip Galaxy in Cheras Selatan.
          </p>

          <p className="hero-sub font-display font-bold text-[11px] tracking-[0.25em] uppercase text-cream/50 mb-8">
            Gym Paradise <span className="text-gold">3.0</span>
          </p>

          <div className="hero-cta flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link href="/pricing" className="btn-primary">
              Start Training
            </Link>
            <Link href="/facilities" className="btn-outline">
              Explore Zones
            </Link>
          </div>
        </div>

        {/* Hero stats bar */}
        <div className="hero-dots grid grid-cols-2 lg:grid-cols-4 gap-px bg-gold/20 border border-gold/20 mt-8">
          {heroStats.map((s) => (
            <div key={s.label} className="bg-void/90 backdrop-blur-sm px-5 py-4 lg:py-5 stat-block">
              <div className="font-display font-black text-[clamp(28px,4vw,40px)] leading-none text-cream">
                {s.value}
              </div>
              <div className="font-display text-[10px] font-bold tracking-[0.25em] uppercase text-gold mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide nav */}
      <div className="absolute bottom-28 lg:bottom-32 right-6 lg:right-12 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-1 transition-all duration-300 ${
              i === active ? "w-8 bg-gold" : "w-4 bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
