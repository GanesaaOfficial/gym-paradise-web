"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  highlight?: string;
  subtitle?: string;
  bgImage: string;
  bgAlt?: string;
  crumb?: string;
  tall?: boolean;
  breadcrumbs?: { label: string; href: string }[];
}

export default function PageHeader({
  title,
  highlight,
  subtitle,
  bgImage,
  bgAlt = "",
  crumb,
  tall = false,
  breadcrumbs,
}: Props) {
  const container = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const gsap = (window as unknown as { gsap: any }).gsap;
    if (!gsap) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Title split text reveal (matches HeroImage)
      tl.fromTo(
        ".line-inner",
        { yPercent: 100 },
        { yPercent: 0, duration: 1.2, stagger: 0.1, ease: "expo.out" },
        0.2
      )
        // Subtitle & other elements fade up
        .fromTo(
          ".hero-fade",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.1 },
          "-=0.8"
        );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={container}
      className={`relative flex items-end overflow-hidden bg-void ${
        tall ? "min-h-[72vh]" : "min-h-[58vh]"
      }`}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={bgAlt}
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover animate-ken-burns"
        />
      </div>

      {/* Multi-layer cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-void/50 to-void/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-void/30" />

      {/* Decorative layer */}
      <div className="deco">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="orb orb-gold orb-lg animate-float-slow" style={{ top: "-30%", right: "-8%" }} />
        <div className="orb orb-gold-soft orb-md animate-float-slow-alt" style={{ bottom: "10%", left: "-10%" }} />
        <div className="deco-diaglines w-[300px] h-[300px]" style={{ bottom: "-8%", left: "6%", opacity: 0.35 }} />
        <div className="deco-ring w-[400px] h-[400px] animate-spin-slow" style={{ top: "-20%", right: "5%" }} />
      </div>

      {/* Bottom gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24 w-full mt-[10vh]">
        {/* Breadcrumb trail */}
        {breadcrumbs && breadcrumbs.length > 0 ? (
          <nav className="flex items-center gap-2 mb-6 hero-fade" aria-label="Breadcrumb">
            <Link href="/" className="label-sm text-[10px] text-gold/60 hover:text-gold transition-colors">Home</Link>
            {breadcrumbs.map((bc) => (
              <span key={bc.href} className="flex items-center gap-2">
                <span className="text-white/20 text-xs">/</span>
                <Link href={bc.href} className="label-sm text-[10px] text-gold/60 hover:text-gold transition-colors">{bc.label}</Link>
              </span>
            ))}
            {crumb && (
              <span className="flex items-center gap-2">
                <span className="text-white/20 text-xs">/</span>
                <span className="label-sm text-[10px] text-gold">{crumb}</span>
              </span>
            )}
          </nav>
        ) : crumb ? (
          <div className="mb-6 hero-fade">
            <span className="tag-blur inline-block">{crumb}</span>
          </div>
        ) : null}

        <h1 className="hero-line-2 type-hero-display max-w-5xl mb-6">
          <div className="overflow-hidden pb-2">
            <span className="line-inner block text-cream">{title}</span>
          </div>
          {highlight && (
            <div className="overflow-hidden pb-2">
              <span className="line-inner block text-gold-gradient">{highlight}</span>
            </div>
          )}
        </h1>

        {subtitle && (
          <p className="hero-fade hero-sub type-lead text-mist max-w-2xl mt-4 leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Bottom decorative accent */}
        <div className="hero-fade hero-dots flex items-center gap-3 mt-10">
          <div className="h-px w-16 bg-gradient-to-r from-gold/60 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
        </div>
      </div>
    </header>
  );
}
