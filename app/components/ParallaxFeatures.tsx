"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";

const features = [
  {
    title: "Unrivaled Equipment",
    shortTitle: "Equipment",
    desc: "Train on over 200+ imported machines, an expansive free weight zone, and our famous Grip Galaxy wall.",
    img: "/Photos/unnamed-29.webp",
    stat1: "200+", stat1Label: "Machines",
    stat2: "USA/UK", stat2Label: "Imported"
  },
  {
    title: "Elite Personal Training",
    shortTitle: "Coaching",
    desc: "Our handpicked roster of specialized coaches is dedicated to pushing your absolute limits. From powerlifting to aesthetic bodybuilding, we ensure every rep counts.",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2940&auto=format&fit=crop",
    stat1: "15+", stat1Label: "Pro Coaches",
    stat2: "100%", stat2Label: "Custom Plans"
  },
  {
    title: "Premium Amenities",
    shortTitle: "Recovery",
    desc: "Recover in luxury. Featuring pristine locker rooms, high-pressure hot showers, and a dedicated chill lounge for athletes.",
    img: "/Photos/unnamed-17.webp",
    stat1: "5 Star", stat1Label: "Cleanliness",
    stat2: "Lounge", stat2Label: "Recovery Zone"
  },
];

export default function ParallaxFeatures() {
  const containerRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // @ts-expect-error - GSAP is loaded globally via CDN
    const gsap = window.gsap;
    // @ts-expect-error - GSAP is loaded globally via CDN
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const ctx = gsap.context(() => {
        const panels = gsap.utils.toArray(".hz-panel");
        if (panels.length === 0) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,
          }
        });

        tl.to(sliderRef.current, {
          xPercent: -100 * ((panels.length - 1) / panels.length),
          ease: "none",
          duration: 1
        });

        const tlProgress = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          }
        });

        tlProgress.to(".progress-fill", {
          scaleX: 1,
          ease: "none",
          duration: 1
        });
      }, containerRef);
      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    // 400vh tall to ensure a long scrolling duration for 3 panels on Desktop. Stacks vertically on mobile.
    <section ref={containerRef} className="relative w-full h-[400vh] max-lg:h-auto bg-void" id="features">
      <div className="sticky top-0 w-full h-[100svh] overflow-hidden bg-void max-lg:relative max-lg:h-auto max-lg:overflow-visible">
        
        {/* Static Cinematic Viewfinder Border (HUD) - Stays fixed while images slide */}
        <div className="absolute inset-4 lg:inset-8 border border-white/10 z-40 pointer-events-none flex flex-col justify-between p-4 lg:p-6 mix-blend-overlay">
          {/* Corner Brackets */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-white/40" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-white/40" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-white/40" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-white/40" />

          {/* Center Crosshairs */}
          <div className="absolute top-1/2 -left-2 w-4 h-px bg-white/40" />
          <div className="absolute top-1/2 -right-2 w-4 h-px bg-white/40" />
          <div className="absolute -top-2 left-1/2 w-px h-4 bg-white/40" />
          <div className="absolute -bottom-2 left-1/2 w-px h-4 bg-white/40" />

        </div>

        <div 
          ref={sliderRef}
          className="flex flex-row h-[100svh] w-[300vw] will-change-transform max-lg:flex-col max-lg:h-auto max-lg:w-full"
          style={{ transform: "translateZ(0)" }}
        >
          {features.map((feature, idx) => {
            return (
              <div 
                key={idx} 
                className="hz-panel relative w-screen h-[100svh] flex-shrink-0 overflow-hidden flex items-center justify-center lg:justify-start lg:pl-24 max-lg:w-full"
                style={{ transform: "translateZ(0)" }}
              >
                {/* Massive Cinematic Background Image */}
                <div className="absolute inset-y-0 right-0 w-full lg:w-[65%] h-full transform-gpu backface-hidden flex items-center justify-center bg-void">
                  <Image
                    src={feature.img}
                    alt={feature.title}
                    fill
                    quality={100}
                    className="object-cover transform-gpu backface-hidden"
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    priority={idx === 0}
                  />
                  
                  {/* Cinematic Edge Gradient for Text Contrast */}
                  <div className="absolute inset-0 pointer-events-none z-10 transform-gpu">
                    {/* Smooth gradient transition fading into the image from the left (or bottom on mobile) */}
                    <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-t lg:bg-gradient-to-r from-void via-void/50 to-transparent" />
                  </div>
                </div>

                {/* Solid dark block on the left side where text lives (Desktop) */}
                <div className="hidden lg:block absolute inset-y-0 left-0 w-[35%] bg-void pointer-events-none z-0" />

                {/* Left side dark overlay style (Mobile only) */}
                <div className="lg:hidden absolute inset-y-0 left-0 w-[80%] bg-gradient-to-r from-void via-void/80 to-transparent pointer-events-none z-10" />

                {/* Blueprint Technical Grid Overlay for ultra-premium detail */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
                  style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />

                {/* Technical Corner Registration Marks */}
                <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-gold/50 pointer-events-none" />
                <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-gold/50 pointer-events-none" />
                <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-gold/50 pointer-events-none lg:hidden" />
                <div className="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-gold/50 pointer-events-none lg:hidden" />



                {/* Colossal Outline Number layered in the background */}
                <div 
                  className="absolute top-1/2 right-0 lg:-right-32 -translate-y-1/2 font-display font-black text-[25rem] lg:text-[60rem] leading-none pointer-events-none z-0 opacity-15 mix-blend-overlay"
                  style={{ WebkitTextStroke: "2px rgba(255,255,255,1)", color: "transparent" }}
                >
                  {idx + 1}
                </div>

                {/* Cinematic Floating Typography (Uniform Layout) */}
                <div className="relative z-20 w-full max-w-3xl lg:max-w-4xl h-full flex flex-col justify-center ml-0 lg:ml-12 transform-gpu">
                  
                  {/* Left Anchor Line Layout */}
                  <div className="border-l-2 border-gold/50 pl-8 lg:pl-12 py-4 w-full">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-gold font-display tracking-[0.4em] text-xs lg:text-sm uppercase font-black drop-shadow-md">
                        {feature.shortTitle}
                      </span>
                    </div>

                    <h2 className="font-display font-black uppercase tracking-tighter text-cream mb-6 leading-[0.9] drop-shadow-2xl text-5xl md:text-6xl lg:text-[6.5rem]">
                      {feature.title}
                    </h2>

                    <p className="text-mist text-base lg:text-xl leading-relaxed font-medium mb-10 max-w-2xl drop-shadow-lg">
                      {feature.desc}
                    </p>

                    {/* Minimalist Stats Row */}
                    <div className="flex gap-12 lg:gap-16 pt-6">
                      <div>
                        <p className="font-display font-black text-4xl lg:text-5xl text-cream mb-1 drop-shadow-xl">{feature.stat1}</p>
                        <p className="text-gold text-[10px] lg:text-xs uppercase tracking-[0.2em] font-bold">{feature.stat1Label}</p>
                      </div>
                      <div>
                        <p className="font-display font-black text-4xl lg:text-5xl text-cream mb-1 drop-shadow-xl">{feature.stat2}</p>
                        <p className="text-gold text-[10px] lg:text-xs uppercase tracking-[0.2em] font-bold">{feature.stat2Label}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Global Progress Indicator at absolute bottom center (Desktop only) */}
        <div className="hidden lg:flex absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex-col items-center gap-4">
          <div className="text-gold text-xs font-display tracking-[0.3em] uppercase font-bold bg-void/50 px-4 py-1 rounded-full backdrop-blur-md border border-white/10">
            Scroll to Explore
          </div>
          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden w-64 lg:w-96 relative border border-white/5 backdrop-blur-md shadow-2xl">
            <div 
              className="progress-fill absolute top-0 left-0 h-full bg-gradient-to-r from-gold/50 to-gold w-full origin-left shadow-[0_0_15px_rgba(201,168,76,0.8)]" 
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
