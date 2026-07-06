import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const IconExpand = (p: IconProps) => (
  <svg {...base} {...p}><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></svg>
);

export const IconDumbbell = (p: IconProps) => (
  <svg {...base} {...p}><path d="M6.5 6.5l11 11M4 7v10M7 4h10M4 17v-.01M20 7v10M17 20H7M20 17v.01M2 9v6M22 9v6" /></svg>
);

export const IconTrophy = (p: IconProps) => (
  <svg {...base} {...p}><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4zM7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3" /></svg>
);

export const IconClock = (p: IconProps) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);

export const IconDoor = (p: IconProps) => (
  <svg {...base} {...p}><path d="M14 3v18M4 21h16M6 21V5a2 2 0 0 1 2-2h6M11 12h.01" /></svg>
);

export const IconStar = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 3l2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z" /></svg>
);

export const IconBolt = (p: IconProps) => (
  <svg {...base} {...p}><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" /></svg>
);

export const IconMapPin = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
);

export const IconChat = (p: IconProps) => (
  <svg {...base} {...p}><path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-6.5A8 8 0 1 1 21 12z" /></svg>
);

export const IconCheck = (p: IconProps) => (
  <svg {...base} {...p}><path d="M20 6L9 17l-5-5" /></svg>
);

export const IconArrowRight = (p: IconProps) => (
  <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

export const IconHeart = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 21s-7-4.5-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z" /></svg>
);

export const IconShield = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" /><path d="M9 12l2 2 4-4" /></svg>
);

export const IconInstagram = (p: IconProps) => (
  <svg {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></svg>
);
