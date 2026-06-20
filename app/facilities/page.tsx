import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import CtaBand from "../components/CtaBand";

export const metadata: Metadata = {
  title: "Facilities",
  description:
    "Explore 38,000 sq ft of world-class facilities at Gym Paradise 3.0 — 200+ machines, HYROX Training Club, Grip Galaxy, free weight zone, cardio deck & Dietmonsta nutrition.",
};

const zones = [
  {
    img: "/Photos/unnamed-25.webp",
    alt: "Main training floor",
    category: "Main Floor",
    title: "Epic Training Floor",
    subtitle: "The Heart of the Gym",
    description:
      "A warehouse-scale main floor illuminated by dramatic LED grid lighting. Every session feels cinematic.",
    features: ["Massive open layout", "LED geometric ceiling", "Motivational neon signage", "Rubber-floored zones"],
    highlight: false,
  },
  {
    img: "/Photos/unnamed-20.webp",
    alt: "Free weight zone",
    category: "Free Weights",
    title: "Free Weight Zone",
    subtitle: "Heavy Iron. Serious Lifters.",
    description:
      "Heavy dumbbells, multiple squat racks, and dedicated deadlift platforms — everything you need to move serious weight.",
    features: ["Full dumbbell range", "Multiple squat racks", "Deadlift platforms", "Olympic barbells & plates"],
    highlight: false,
  },
  {
    img: "/Photos/unnamed-24.webp",
    alt: "Strength machines",
    category: "Machines",
    title: "Strength Machine Zone",
    subtitle: "Precision. Control. Growth.",
    description:
      "Plate-loaded and pin-loaded machines for every muscle group — competition prep level selection.",
    features: ["Plate-loaded machines", "Pin-loaded stack machines", "Full upper & lower body", "Cable stations"],
    highlight: false,
  },
  {
    img: "/Photos/unnamed-21.webp",
    alt: "HYROX Training Club",
    category: "HYROX",
    title: "HYROX Training Club",
    subtitle: "Official HYROX Affiliate",
    description:
      "Indoor running track and full SkiErg and rowing setup — one of the rarest features in Malaysian gyms.",
    features: ["Indoor running track", "SkiErg machines", "Rowing machines", "Official HYROX affiliation"],
    highlight: true,
  },
  {
    img: "/Photos/unnamed-35.webp",
    alt: "Cardio deck",
    category: "Cardio",
    title: "Cardio Deck",
    subtitle: "Elevate Your Conditioning",
    description:
      "Top-tier treadmills, assault bikes, cycles, ellipticals, and stair climbers in a neon-lit environment.",
    features: ["Treadmills", "Assault bikes", "Stationary cycles", "Stair climbers"],
    highlight: false,
  },
  {
    img: "/Photos/unnamed-22.webp",
    alt: "Grip Galaxy",
    category: "Grip Galaxy",
    title: "Grip Galaxy",
    subtitle: "50+ Cable Attachments",
    description:
      "A dedicated wall with 50+ cable attachments — ropes, bars, handles, straps in every shape.",
    features: ["50+ attachments", "All cable grip types", "Dedicated display wall", "Neon-lit showcase"],
    highlight: false,
  },
  {
    img: "/Photos/unnamed-17.webp",
    alt: "Lounge",
    category: "Lounge",
    title: "Lounge & Nutrition Bar",
    subtitle: "Fuel & Relax",
    description:
      "Supplement bar and on-site Dietmonsta meals with microwave facilities for pre/post-workout nutrition.",
    features: ["Dietmonsta meals on-site", "Microwave facilities", "Supplement bar", "Comfortable lounge seating"],
    highlight: false,
  },
  {
    img: "/Photos/unnamed-23.webp",
    alt: "Changing rooms",
    category: "Amenities",
    title: "Changing Rooms & Showers",
    subtitle: "Clean. Secure. Ready.",
    description:
      "Premium changing rooms with secure lockers and hot showers. Fully air-conditioned throughout.",
    features: ["Hot showers", "Secure lockers", "Air-conditioned", "Premium finishes"],
    highlight: false,
  },
];

export default function FacilitiesPage() {
  return (
    <>
      <PageHeader
        title="World-Class"
        highlight="Training Zones"
        subtitle="Every zone engineered for performance — from heavy iron to HYROX conditioning."
        bgImage="/Photos/unnamed-36.webp"
        bgAlt="Training floor at night"
        crumb="Facilities"
        tall
      />

      <section className="bg-ink py-6 border-b border-gold/10 sticky top-16 lg:top-[72px] z-30 backdrop-blur-xl bg-ink/95">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-wrap gap-3 justify-center">
          {["Main Floor", "Free Weights", "HYROX", "Grip Galaxy", "Cardio", "Lounge"].map((z) => (
            <span key={z} className="font-display text-[10px] font-bold tracking-widest uppercase text-ash hover:text-gold cursor-default">
              {z}
            </span>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-void">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-16">
            <SectionHeading
              label="8 Dedicated Zones"
              title="Train Every"
              highlight="Discipline"
              subtitle="38,000 sq ft laid out for powerlifters, bodybuilders, HYROX athletes, and everyday warriors."
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {zones.map((zone, i) => (
              <ScrollReveal key={zone.title} delay={i * 60}>
                <article
                  className={`training-card overflow-hidden h-full flex flex-col ${
                    zone.highlight ? "md:col-span-2 md:grid md:grid-cols-2" : ""
                  }`}
                >
                  <div className={`relative ${zone.highlight ? "md:min-h-[320px]" : "h-56"} min-h-[220px]`}>
                    <Image src={zone.img} alt={zone.alt} fill quality={85} sizes="50vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-void/90 to-transparent" />
                    <span
                      className={`absolute top-4 left-4 font-display text-[10px] font-bold tracking-widest uppercase px-3 py-1 ${
                        zone.highlight ? "bg-gold text-void" : "bg-void/80 text-gold border border-gold/30"
                      }`}
                    >
                      {zone.category}
                    </span>
                    <span className="absolute top-2 right-4 font-display font-black text-6xl text-white/10">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="p-6 lg:p-8 flex flex-col flex-1">
                    <p className="font-display text-[10px] font-bold tracking-widest uppercase text-gold mb-2">
                      {zone.subtitle}
                    </p>
                    <h2
                      className={`font-display font-black uppercase text-2xl lg:text-3xl mb-3 ${
                        zone.highlight ? "text-gold-gradient" : "text-cream"
                      }`}
                    >
                      {zone.title}
                    </h2>
                    <p className="text-ash text-sm font-light leading-relaxed mb-6">{zone.description}</p>
                    <ul className="grid grid-cols-2 gap-2 mt-auto">
                      {zone.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-mist">
                          <span className="w-1 h-1 bg-gold shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready To Train?"
        subtitle="Walk in today — no appointment needed."
        primaryLabel="View Pricing"
        secondaryLabel="WhatsApp Us"
      />
    </>
  );
}
