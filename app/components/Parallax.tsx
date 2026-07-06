"use client";

import { useLayoutEffect, useRef, ElementType } from "react";

/* ── Shared parallax controller ─────────────────────────────────────
   One rAF loop drives every registered element. Elements only update
   while near the viewport (IntersectionObserver gate) for performance.
   Fully disabled when the user prefers reduced motion.                */

type Item = {
  el: HTMLElement;
  speed: number;
  axis: "y" | "x";
  active: boolean;
};

let items: Item[] = [];
let raf = 0;
let io: IntersectionObserver | null = null;
let reduce = false;

function ensureLoop() {
  if (typeof window === "undefined") return;
  reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  if (!io) {
    io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const item = items.find((i) => i.el === e.target);
          if (item) item.active = e.isIntersecting;
        }
      },
      { rootMargin: "20% 0px 20% 0px" }
    );
  }

  if (!raf) {
    let vh = window.innerHeight;
    let vw = window.innerWidth;
    
    // Ignore small vertical height changes on mobile caused by address bars collapsing
    window.addEventListener("resize", () => {
      if (Math.abs(window.innerWidth - vw) > 0 || Math.abs(window.innerHeight - vh) > 100) {
        vh = window.innerHeight;
        vw = window.innerWidth;
      }
    });

    const loop = () => {
      for (const item of items) {
        if (!item.active) continue;
        const rect = item.el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const delta = (vh / 2 - center) * item.speed;
        item.el.style.transform =
          item.axis === "y"
            ? `translate3d(0, ${delta.toFixed(2)}px, 0)`
            : `translate3d(${delta.toFixed(2)}px, 0, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
  }
}

function register(el: HTMLElement, speed: number, axis: "y" | "x") {
  ensureLoop();
  if (reduce) return () => {};
  const item: Item = { el, speed, axis, active: true };
  items.push(item);
  io?.observe(el);
  return () => {
    io?.unobserve(el);
    items = items.filter((i) => i !== item);
    if (items.length === 0 && raf) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
  };
}

interface Props {
  children: React.ReactNode;
  /** Positive drifts up as you scroll down; try 0.05–0.25 for subtle depth. */
  speed?: number;
  axis?: "y" | "x";
  className?: string;
  as?: ElementType;
}

export default function Parallax({
  children,
  speed = 0.12,
  axis = "y",
  className = "",
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    return register(el, speed, axis);
  }, [speed, axis]);

  return (
    <Tag ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </Tag>
  );
}
