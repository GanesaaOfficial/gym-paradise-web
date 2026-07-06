/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment */
"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";

const features = [
  {
    title: "38,000 Sq Ft Floor",
    desc: "Malaysia's largest single training floor — room to move, never a queue for equipment.",
    icon: "01"
  },
  {
    title: "200+ Machines",
    desc: "Premium plate-loaded and pin-loaded gear imported from the USA, UK and beyond.",
    icon: "02"
  },
  {
    title: "Official HYROX Club",
    desc: "One of the rare Malaysian gyms with an indoor track, SkiErgs and full rowing setup.",
    icon: "03"
  },
  {
    title: "Grip Galaxy Wall",
    desc: "50+ cable attachments on a single dedicated wall — every grip you could ask for.",
    icon: "04"
  },
  {
    title: "Open 18 Hours",
    desc: "6AM to midnight, Monday through Saturday. Train early, train late, train your way.",
    icon: "05"
  },
  {
    title: "Walk-Ins Welcome",
    desc: "No membership? No problem. Grab a day pass and train — famous flexible access.",
    icon: "06"
  },
];

export default function WhyGymParadise() {
  const container = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const gsap = (window as unknown as { gsap: any }).gsap;
    const ScrollTrigger = (window as unknown as { ScrollTrigger: any }).ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Native CSS sticky is used for pinning instead of GSAP to prevent layout glitches

      // Stagger animate the feature cards as they scroll into view
      const cards = gsap.utils.toArray(".feature-card");
      cards.forEach((card: any) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });


    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative py-24 lg:py-36 bg-void" id="why-us">
      {/* Background ambient glow - wrapped in overflow hidden so it doesn't break section sticky */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">
          
          {/* Left Column - Sticky */}
          <div className="w-full lg:w-5/12 flex flex-col lg:sticky lg:top-[15vh] z-20">
            <div ref={leftColRef} className="flex flex-col">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold" />
              <p className="text-gold font-display tracking-[0.1em] text-sm uppercase font-semibold">
                Why Gym Paradise
              </p>
            </div>
            
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-cream mb-4 leading-[1.1] tracking-tight">
              Everything You Need <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">
                Under One Roof
              </span>
            </h2>
            
            <p className="text-mist text-base lg:text-lg leading-relaxed mb-6 max-w-md">
              From competition prep to your very first rep, our floor in Cheras Selatan is engineered for
              every kind of athlete. Premium equipment, an electric atmosphere, and a
              community that pushes you further.
            </p>

            <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="gym-image-inner w-full h-full relative origin-center">
                <Image
                  src="/Photos/unnamed-15.webp"
                  alt="Gym Paradise floor"
                  fill
                  quality={90}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-80" />
              </div>
              <div className="absolute bottom-4 left-4 glass px-4 py-3 rounded-xl border border-white/5 backdrop-blur-md">
                <p className="text-gold font-display font-bold text-lg leading-none mb-1">Since 2026</p>
                <p className="text-mist text-xs font-medium">Malaysia&apos;s Mega Gym</p>
              </div>
            </div>
            </div>
          </div>

          {/* Right Column - Scrolling List */}
          <div ref={rightColRef} className="w-full lg:w-7/12 flex flex-col gap-6 lg:pt-[40vh] pb-10 z-10">
            {features.map((feat, i) => (
              <div
                key={i}
                className="feature-card group relative p-8 lg:p-10 rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden transition-all duration-500 hover:bg-white/[0.04] hover:border-gold/30 hover:shadow-[0_0_40px_rgba(201,168,76,0.1)]"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-px bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm pointer-events-none" />
                
                <div className="relative z-10">
                  <h3 className="font-display text-2xl font-bold text-cream mb-3 group-hover:text-gold transition-colors duration-300">
                    {feat.title}
                  </h3>
                  <p className="text-mist/80 leading-relaxed text-base lg:text-lg">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
