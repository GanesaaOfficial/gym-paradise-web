"use client";

import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconStar } from "./icons";

export default function HeroSlideshow() {
  return (
    <section className="relative min-h-[100svh] bg-void overflow-hidden">
      {/* Layered background decoration */}
      <div className="deco">
        <div className="absolute inset-0 hero-grid opacity-60" />
        <div className="orb orb-gold orb-xl animate-float-slow" style={{ top: "-20%", left: "-15%" }} />
        <div className="orb orb-ember orb-lg animate-float-slow-alt" style={{ bottom: "-25%", left: "20%" }} />
        <div className="deco-word text-[26vw]" style={{ bottom: "-6%", left: "-3%" }}>PARADISE</div>
      </div>

      <div className="relative z-10 min-h-[100svh] grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left: copy */}
        <div className="relative flex flex-col justify-start lg:justify-center px-6 sm:px-10 lg:px-14 xl:px-20 pt-10 pb-16 lg:pt-32 lg:pb-32">
          <div className="hero-line-1 flex items-center gap-3 mb-7 relative z-10">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow">Malaysia&apos;s 1st World-Class Mega Gym</span>
          </div>

          <h1 className="hero-line-2 relative z-10 type-hero-display mb-7">
            <span className="block text-cream">Unlock</span>
            <span className="block text-gold-gradient">Your Potential</span>
          </h1>

          <p className="hero-sub text-body text-lg max-w-lg mb-9 relative z-10">
            38,000 sq ft of premium equipment, HYROX Training Club and the famous Grip
            Galaxy — in the heart of Cheras Selatan. Train your way, every single day.
          </p>

          <div className="hero-cta flex flex-col sm:flex-row gap-4 relative z-10">
            <Link href="/pricing" className="btn-primary">
              Start Training
              <IconArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/601126898810"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Trust row */}
          <div className="hero-dots flex items-center gap-4 mt-10 relative z-10">
            <div className="flex gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} className="w-4 h-4 fill-gold" />
              ))}
            </div>
            <p className="text-body text-[15px] text-mist">
              Loved by powerlifters, HYROX athletes &amp; walk-ins
            </p>
          </div>

          {/* Mobile stats — borderless pills */}
          <div className="flex flex-wrap gap-2 mt-12 lg:hidden relative z-10">
            {[
              { v: "38K", l: "Sq Ft" },
              { v: "200+", l: "Machines" },
              { v: "18h", l: "Open" },
              { v: "HYROX", l: "Club" },
            ].map((s) => (
              <div key={s.l} className="discipline-pill flex-col !py-3 !px-4 !gap-1 !items-start">
                <div className="font-display font-bold text-lg text-cream leading-none">{s.v}</div>
                <div className="label-sm text-[9px] opacity-70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: premium workout photography */}
        <div className="relative min-h-[58vh] lg:min-h-[100svh] order-first lg:order-last overflow-hidden">
          <Image
            src="/Photos/hero-workout.jpg"
            alt="Athlete training with dumbbells at the gym — strength and dedication"
            fill
            priority
            quality={92}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-[center_15%] animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-void via-void/40 to-transparent lg:from-void lg:via-void/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent lg:from-void/70 lg:via-transparent lg:to-void/20" />
          {/* Diagonal accent seam on the image edge */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-dots hidden lg:flex absolute bottom-28 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 pointer-events-none">
        <span className="label-sm text-[10px] text-mist/70">Scroll</span>
        <span className="relative block w-px h-10 bg-white/15 overflow-hidden">
          <span className="absolute inset-x-0 top-0 h-1/2 bg-gold animate-[scrollCue_1.8s_ease-in-out_infinite]" />
        </span>
      </div>

      {/* Bottom stats — desktop, borderless strip */}
      <div className="hidden lg:block absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-void via-void/90 to-transparent backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-14 py-8">
          <div className="stat-strip">
            {[
              { v: "38,000", l: "Square Feet" },
              { v: "200+", l: "Premium Machines" },
              { v: "6AM–12AM", l: "Open Daily" },
              { v: "Walk-In", l: "Always Welcome" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display font-bold text-2xl text-cream leading-none">{s.v}</div>
                <div className="label-sm text-[11px] mt-2 opacity-80">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
