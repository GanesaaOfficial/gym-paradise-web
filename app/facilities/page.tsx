import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: "Facilities",
  description:
    "Explore 38,000 sq ft of world-class facilities at Gym Paradise 3.0 — 200+ machines, HYROX Training Club, Grip Galaxy, free weight zone, cardio deck & Dietmonsta nutrition. Malaysia's largest gym in Balakong.",
};

const zones = [
  {
    img: "/Photos/unnamed-25.webp",
    alt: "Main training floor with BOLDER neon and colorful LED lights",
    category: "Main Floor",
    title: "Epic Training\nFloor",
    subtitle: "The Heart of the Gym",
    description:
      "A warehouse-scale main floor illuminated by dramatic LED grid lighting. Every session feels cinematic. Multiple training zones are laid out intelligently so you flow seamlessly from warmup to heavy lifting without wasted steps.",
    features: ["Massive open layout", "LED geometric ceiling", "Motivational neon signage", "Rubber-floored zones"],
    wide: true,
    highlight: false,
  },
  {
    img: "/Photos/unnamed-20.webp",
    alt: "Extensive dumbbell rack with heavy dumbbells in rows",
    category: "Free Weights",
    title: "Free Weight\nZone",
    subtitle: "Heavy Iron. Serious Lifters.",
    description:
      "The free weight section is a powerlifter's dream. Heavy dumbbells spanning the full range, multiple Olympic barbells, squat racks, and dedicated deadlift platforms — everything you need to move serious weight safely.",
    features: ["Full dumbbell range", "Multiple squat racks", "Deadlift platforms", "Olympic barbells & plates"],
    wide: false,
    highlight: false,
  },
  {
    img: "/Photos/unnamed-24.webp",
    alt: "Strength machine zone with UNSTOPPABLE neon sign",
    category: "Machines",
    title: "Strength\nMachine Zone",
    subtitle: "Precision. Control. Growth.",
    description:
      "Biomechanically engineered plate-loaded and pin-loaded machines for every muscle group. Whether you're isolating quads on the leg press or building a thick back on the T-bar row, the machine selection here rivals dedicated competition prep gyms.",
    features: ["Plate-loaded machines", "Pin-loaded stack machines", "Full upper & lower body", "Cable stations"],
    wide: false,
    highlight: false,
  },
  {
    img: "/Photos/unnamed-21.webp",
    alt: "HYROX Training Club with indoor running track and rowers",
    category: "Signature Zone",
    title: "HYROX\nTraining Club",
    subtitle: "Official HYROX Affiliate",
    description:
      "One of the rarest features in Malaysian gyms. Our dedicated HYROX Training Club room features an indoor running track and a full set of SkiErg and rowing machines. Train specifically for HYROX competitions or use it for elite functional conditioning.",
    features: ["Indoor running track", "SkiErg machines", "Rowing machines", "Official HYROX affiliation"],
    wide: true,
    highlight: true,
  },
  {
    img: "/Photos/unnamed-35.webp",
    alt: "Cardio area with cycling machines and neon signs",
    category: "Cardio",
    title: "Cardio\nDeck",
    subtitle: "Elevate Your Conditioning",
    description:
      "A full cardio suite featuring top-tier treadmills, assault bikes, stationary cycles, ellipticals, and stair climbers. The neon-lit environment keeps the energy high through every interval.",
    features: ["Treadmills", "Assault bikes", "Stationary cycles", "Stair climbers"],
    wide: false,
    highlight: false,
  },
  {
    img: "/Photos/unnamed-22.webp",
    alt: "Grip Galaxy - wall of 50+ cable attachments with blue neon sign",
    category: "Unique Feature",
    title: "Grip\nGalaxy",
    subtitle: "50+ Cable Attachments",
    description:
      "A world-class feature you won't find anywhere else in Malaysia. The Grip Galaxy is a dedicated wall displaying over 50 cable attachments — ropes, bars, handles, straps in every shape — ensuring you never miss a movement angle.",
    features: ["50+ attachments", "All cable grip types", "Dedicated display wall", "Neon-lit showcase"],
    wide: false,
    highlight: false,
  },
  {
    img: "/Photos/unnamed-17.webp",
    alt: "Lounge and reception area with supplement bar and Dietmonsta meals",
    category: "Lounge & Nutrition",
    title: "Lounge &\nNutrition Bar",
    subtitle: "Fuel & Relax",
    description:
      "A well-appointed lounge and reception with comfortable seating, a supplement bar, and on-site Dietmonsta healthy meal options with microwave facilities. Fuel up with the right nutrition before or after your session — everything you need in one place.",
    features: ["Dietmonsta meals on-site", "Microwave facilities", "Supplement bar", "Comfortable lounge seating"],
    wide: false,
    highlight: false,
  },
  {
    img: "/Photos/unnamed-23.webp",
    alt: "Premium changing room with lockers and showers",
    category: "Amenities",
    title: "Changing Rooms\n& Showers",
    subtitle: "Clean. Secure. Ready.",
    description:
      "Premium-finish changing rooms with secure lockers and hot showers. Fully air-conditioned throughout. Arrive from work, train, shower, and head straight to your next commitment.",
    features: ["Hot showers", "Secure lockers", "Air-conditioned", "Premium finishes"],
    wide: false,
    highlight: false,
  },
];

export default function FacilitiesPage() {
  return (
    <>
      <PageHeader
        title="World-Class"
        highlight="Facilities"
        subtitle="Every zone designed with a single purpose — helping you perform at your absolute best."
        bgImage="/Photos/unnamed-36.webp"
        bgAlt="Gym Paradise 3.0 training floor at night with blue LED lights"
        crumb="Facilities"
      />

      {/* ── Zone navigation strip ── */}
      <section className="bg-pearl border-b border-black/[0.06] py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap gap-4 lg:gap-8">
              {["Main Floor", "Free Weights", "HYROX Zone", "Grip Galaxy", "Cardio", "Lounge"].map((z) => (
                <span
                  key={z}
                  className="font-display text-[12px] font-semibold tracking-[0.2em] uppercase text-stone hover:text-gold cursor-default transition-colors duration-200"
                >
                  {z}
                </span>
              ))}
            </div>
            <Link href="/pricing" className="btn-primary text-[12px] px-6 py-3">
              Join Now
            </Link>
          </div>
        </div>
      </section>

      {/* ── Zones ── */}
      <section className="bg-void py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24 lg:space-y-32">
          {zones.map((zone, i) => (
            <div
              key={zone.title}
              className={`flex flex-col ${
                zone.wide ? "" : i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-10 lg:gap-16 items-center`}
            >
              {/* Image */}
              <ScrollReveal
                direction={i % 2 === 0 ? "left" : "right"}
                className={`w-full ${zone.wide ? "" : "lg:w-1/2"} shrink-0`}
              >
                <div className="card-image-hover relative overflow-hidden">
                  <div className={`relative ${zone.wide ? "h-72 lg:h-[500px]" : "h-72 lg:h-[440px]"}`}>
                    <Image
                      src={zone.img}
                      alt={zone.alt}
                      fill
                      quality={85}
                      sizes="(max-width: 768px) 100vw, 55vw"
                      className="card-img object-cover"
                    />
                    {/* Cinematic overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />
                    {/* Category badge */}
                    <div className="absolute top-5 left-5 z-10">
                      <span
                        className={`font-display text-[10px] font-semibold tracking-[0.3em] uppercase px-3 py-1.5 ${
                          zone.highlight
                            ? "bg-gold text-void"
                            : "bg-void/70 text-gold border border-gold/30 backdrop-blur-sm"
                        }`}
                      >
                        {zone.category}
                      </span>
                    </div>
                    {/* Zone number */}
                    <div className="absolute top-4 right-5 font-display font-black text-[48px] leading-none text-white/[0.06] select-none">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Text */}
              <ScrollReveal
                direction={i % 2 === 0 ? "right" : "left"}
                delay={150}
                className={`w-full ${zone.wide ? "max-w-2xl" : "lg:w-1/2"}`}
              >
                <div className="section-label">
                  <span className="font-display text-[11px] font-semibold text-gold tracking-[0.4em] uppercase">
                    {zone.subtitle}
                  </span>
                </div>
                <h2
                  className={`font-display font-black uppercase leading-[0.9] tracking-tight text-[clamp(36px,4.5vw,60px)] mb-5 whitespace-pre-line ${
                    zone.highlight ? "text-gold-gradient" : "text-cream"
                  }`}
                >
                  {zone.title}
                </h2>
                <p className="text-ash text-base lg:text-lg font-light leading-relaxed mb-8">
                  {zone.description}
                </p>
                <ul className="grid grid-cols-2 gap-3">
                  {zone.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <svg
                        className="w-3.5 h-3.5 text-gold shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-mist">{f}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA band ── */}
      <section className="relative py-28 lg:py-36 bg-void border-t border-white/[0.04] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gold/[0.05] rounded-full blur-[130px] pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <ScrollReveal>
            <div className="section-label">
              <span className="font-display text-[11px] font-semibold text-gold tracking-[0.4em] uppercase">Start Today</span>
            </div>
            <h3 className="font-display font-black uppercase leading-[0.9] text-[clamp(36px,5vw,68px)] text-cream">
              Ready to Train?
            </h3>
            <p className="text-ash mt-2 text-base font-light">Walk in today — no appointment needed.</p>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={150} className="flex gap-4 shrink-0">
            <Link href="/pricing" className="btn-primary">View Pricing</Link>
            <a
              href="https://wa.me/601126898810"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              WhatsApp Us
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
