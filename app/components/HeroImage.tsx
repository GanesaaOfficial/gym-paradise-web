/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment */
"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroImage() {
  const container = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const gsap = (window as unknown as { gsap: any }).gsap;
    const ScrollTrigger = (window as unknown as { ScrollTrigger: any }).ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Image scale and fade in
      tl.fromTo(
        imageRef.current,
        { scale: 1.15, opacity: 0 },
        { scale: 1.05, opacity: 1, duration: 2, ease: "power3.out" }
      )
        // Title split text reveal
        .fromTo(
          ".line-inner",
          { yPercent: 100 },
          { yPercent: 0, duration: 1.2, stagger: 0.1, ease: "expo.out" },
          "-=1.2"
        )
        // Subtitle reveal
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.8"
        )
        // CTA reveal
        .fromTo(
          ".hero-cta-wrapper",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.8"
        )
        // Scroll indicator reveal
        .fromTo(
          ".scroll-indicator",
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          "-=0.5"
        );

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="relative flex items-center h-[100svh] w-full px-6 lg:px-14 overflow-hidden bg-void"
    >
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none transform-gpu backface-hidden">
        <Image
          ref={imageRef}
          src="/Photos/hero-workout.jpg"
          alt="Athlete training at Gym Paradise"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover origin-center object-top transform-gpu backface-hidden"
        />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-void/30 via-void/50 to-void" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto mt-[5vh]">
        <h1 className="type-hero-display mb-6">
          <div className="overflow-hidden pb-2">
            <span className="line-inner block text-cream">Unlock</span>
          </div>
          <div className="overflow-hidden pb-2">
            <span className="line-inner block text-gold">Your Peak</span>
          </div>
        </h1>
        <div className="overflow-hidden mb-10">
          <p className="hero-subtitle text-[clamp(1rem,1.5vw,1.25rem)] text-mist font-normal">
            Malaysia’s first world-class mega gym. 38,000 sq ft of pure performance in Cheras Selatan.
          </p>
        </div>
        <div className="hero-cta-wrapper">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center bg-gold text-void font-display font-bold text-[14px] uppercase tracking-[0.06em] px-9 py-[17px] rounded-full hover:bg-[#DDB85A] hover:-translate-y-px transition-all duration-300 shadow-[0_0_0_rgba(201,168,76,0)] hover:shadow-[0_10px_30px_rgba(201,168,76,0.4)]"
          >
            Start Your Journey
          </Link>
        </div>
      </div>

      <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <div className="w-6 h-9 border border-mist/50 rounded-full relative before:content-[''] before:absolute before:top-1.5 before:left-1/2 before:-translate-x-1/2 before:w-1 before:h-1 before:rounded-full before:bg-gold before:animate-[scrollWheel_2s_infinite_cubic-bezier(0.15,0.41,0.69,0.94)]" />
      </div>
    </section>
  );
}
