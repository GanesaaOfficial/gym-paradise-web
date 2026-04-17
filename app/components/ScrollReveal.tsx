"use client";

import { useEffect, useRef, useState, CSSProperties } from "react";

type Direction = "up" | "left" | "right" | "scale";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  threshold?: number;
}

const directionMap: Record<Direction, { hidden: string; visible: string }> = {
  up:    { hidden: "reveal-hidden",       visible: "reveal-visible" },
  left:  { hidden: "reveal-hidden-left",  visible: "reveal-visible-left" },
  right: { hidden: "reveal-hidden-right", visible: "reveal-visible-right" },
  scale: { hidden: "reveal-hidden-scale", visible: "reveal-visible-scale" },
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.12,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { hidden, visible: vis } = directionMap[direction];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  const style: CSSProperties = delay && !visible ? {} : {};

  return (
    <div
      ref={ref}
      className={`${visible ? vis : hidden} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
