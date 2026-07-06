/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/ban-ts-comment */
"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconArrowRight } from "./icons";

export default function OurPromise() {
  const container = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const gsap = (window as unknown as { gsap: any }).gsap;
    const ScrollTrigger = (window as unknown as { ScrollTrigger: any }).ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Parallax Image Effect
      gsap.to(imageRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Text reveal animation
      gsap.fromTo(
        ".promise-word",
        { yPercent: 120, opacity: 0, rotateX: -45 },
        {
          yPercent: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.1,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".promise-fade",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative py-32 lg:py-48 overflow-hidden bg-void" id="promise">
      {/* Background Parallax Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          ref={imageRef}
          src="/Photos/unnamed-27.webp"
          alt="Gym Paradise sign"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover scale-125 origin-top"
        />
        {/* Aggressive gradient overlays for contrast */}
        <div className="absolute inset-0 bg-void/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void" />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 flex flex-col">
            <div className="promise-fade inline-flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-gold" />
              <p className="text-gold font-display tracking-[0.2em] text-sm uppercase font-bold">
                Our Promise
              </p>
            </div>
            
            <h2 ref={textRef} className="font-display font-bold text-[clamp(3.5rem,7vw,6rem)] leading-[0.9] tracking-tight uppercase text-cream mb-8 [perspective:1000px]">
              <div className="overflow-hidden">
                <span className="promise-word block origin-bottom">The First</span>
              </div>
              <div className="overflow-hidden">
                <span className="promise-word block origin-bottom text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">
                  World-Class
                </span>
              </div>
              <div className="overflow-hidden">
                <span className="promise-word block origin-bottom">Mega Gym</span>
              </div>
            </h2>
            
            <p className="promise-fade text-mist/90 text-lg lg:text-xl leading-relaxed max-w-2xl font-light">
              Built for every athlete — from your first session to elite competition prep. 
              Premium equipment, a neon-lit industrial atmosphere, and a community that pushes you to be unstoppable.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end lg:items-end gap-8 pt-10 lg:pt-0">
            <div className="promise-fade relative p-8 glass rounded-2xl border border-white/5 backdrop-blur-md">
              <div className="absolute -top-3 -right-3 text-gold opacity-30">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <p className="font-display text-2xl font-bold text-cream uppercase mb-2">
                Stronger. Bolder. Unstoppable.
              </p>
              <p className="text-mist text-sm mb-6">Experience the apex of fitness.</p>
              
              <Link
                href="/facilities"
                className="group relative inline-flex items-center justify-center gap-3 bg-gold text-void font-display font-bold text-[14px] uppercase tracking-[0.06em] px-8 py-4 rounded-full overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-[0_0_0_rgba(201,168,76,0)] hover:shadow-[0_10px_30px_rgba(201,168,76,0.3)]"
              >
                <span className="relative z-10">Tour The Gym</span>
                <IconArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
