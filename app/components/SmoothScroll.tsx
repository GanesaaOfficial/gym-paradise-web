/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useLayoutEffect, useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

/**
 * Butter-smooth scrolling with Lenis.
 * - Disabled entirely when the user prefers reduced motion.
 * - Uses native scrolling on touch devices (smoothTouch off) so mobile stays snappy/harmless.
 * - Drives real window scroll, so scroll-linked parallax (window.scrollY) stays in sync.
 */
export default function SmoothScroll() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    // Prevent browser from restoring scroll position on refresh
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
      lerp: 0.1,
    });

    // Expose so anchor links / buttons can request smooth jumps if needed.
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    // Connect GSAP ScrollTrigger to Lenis for perfect 60fps sync
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;

    if (ScrollTrigger) {
      lenis.on("scroll", ScrollTrigger.update);
    }

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    let raf = 0;
    if (gsap) {
      gsap.ticker.add(updateLenis);
      gsap.ticker.lagSmoothing(0);
    } else {
      const loop = (time: number) => {
        lenis.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    return () => {
      if (gsap) {
        gsap.ticker.remove(updateLenis);
      } else {
        cancelAnimationFrame(raf);
      }
      lenis.destroy();
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  // Force scroll to top on route change
  useEffect(() => {
    const lenis = (window as unknown as { lenis?: Lenis }).lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

