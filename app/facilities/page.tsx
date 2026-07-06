import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import CtaBand from "../components/CtaBand";
import ZoneJumpNav from "../components/ZoneJumpNav";
import { IconExpand, IconDumbbell, IconTrophy, IconStar, IconCheck } from "../components/icons";

export const metadata: Metadata = {
  title: "Facilities",
  description:
    "Explore 38,000 sq ft of world-class facilities at Gym Paradise 3.0 — 200+ machines, HYROX Training Club, Grip Galaxy, free weight zone, cardio deck & Dietmonsta nutrition.",
};

const quickFacts = [
  { Icon: IconExpand, value: "38,000", label: "Square Feet" },
  { Icon: IconDumbbell, value: "200+", label: "Machines" },
  { Icon: IconTrophy, value: "HYROX", label: "Official Club" },
  { Icon: IconStar, value: "50+", label: "Cable Grips" },
];

const zones = [
  {
    img: "/Photos/unnamed-25.webp",
    alt: "Main training floor",
    category: "Main Floor",
    id: "main-floor",
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
    id: "free-weights",
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
    id: "machines",
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
    id: "hyrox",
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
    id: "cardio",
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
    id: "grip-galaxy",
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
    id: "lounge",
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
    id: "amenities",
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
        subtitle="8 dedicated zones engineered for every discipline — from heavy iron to HYROX conditioning."
        bgImage="/Photos/unnamed-36.webp"
        bgAlt="Training floor at night"
        crumb="Facilities"
        tall
      />

      {/* Quick facts — typographic strip */}
      <section className="relative py-16 lg:py-24 bg-void border-b border-white/[0.02]">
        <div className="absolute inset-0 bg-gradient-to-r from-void via-gold/5 to-void pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
            {quickFacts.map(({ Icon, value, label }) => (
              <div key={label} className="group flex flex-col items-center lg:items-start p-8 rounded-3xl glass border border-white/5 hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center mb-6 text-gold group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-all duration-500">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="font-display text-4xl lg:text-5xl font-bold text-cream mb-2 tracking-tight group-hover:text-gold transition-colors duration-300">
                  {value}
                </div>
                <div className="text-mist text-sm uppercase tracking-widest font-semibold font-display">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky zone jump nav (client component for smooth scroll) */}
      <ZoneJumpNav />

      {/* Zones grid */}
      <section className="relative py-24 lg:py-40 bg-void">
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <ScrollReveal className="mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <SectionHeading
                label="8 Dedicated Zones"
                title="Train Every"
                highlight="Discipline"
                subtitle="38,000 sq ft laid out for powerlifters, bodybuilders, HYROX athletes, and everyday warriors."
              />
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-10 lg:gap-16 pb-[30vh]">
            {zones.map((zone, i) => {
              // Create a cascading top offset for the sticky cards
              const topOffset = `calc(100px + ${i * 40}px)`;
              const isEven = i % 2 === 0;
              
              return (
                <article
                  key={zone.id}
                  id={zone.id}
                  className={`relative lg:sticky lg:top-[var(--sticky-offset)] group flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} w-full h-auto min-h-[500px] lg:h-[600px] scroll-mt-32 rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-white/10 bg-[#070707] shadow-2xl transition-all duration-700 hover:shadow-[0_40px_80px_rgba(201,168,76,0.15)]`}
                  style={{ '--sticky-offset': topOffset, zIndex: 10 + i } as React.CSSProperties}
                >
                  {/* Image Panel (Uniform 50% width on Desktop) */}
                  <div className="relative z-0 overflow-hidden shrink-0 w-full lg:w-1/2 h-[300px] lg:h-full">
                    <Image
                      src={zone.img}
                      alt={zone.alt}
                      fill
                      quality={90}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-[center_30%] transform-gpu will-change-transform group-hover:scale-105"
                      style={{ transition: 'transform 2s cubic-bezier(0.22, 1, 0.36, 1)', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                    />
                    {/* Environmental gradient - massively reduced for image clarity */}
                    <div className="absolute inset-0 bg-gradient-to-t from-void/30 via-transparent to-transparent opacity-10 group-hover:opacity-30 transition-opacity duration-700" />
                    
                    {/* Badges - Top */}
                    <div className="absolute top-6 left-6 right-6 lg:top-10 lg:left-10 lg:right-10 flex justify-between items-start z-20 pointer-events-none">
                      <span className="glass px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] text-mist border border-white/10 backdrop-blur-md shadow-lg group-hover:border-gold/30 group-hover:text-gold transition-colors duration-700">
                        {zone.category}
                      </span>
                      <span className="font-display font-black text-5xl lg:text-7xl text-white/30 drop-shadow-lg mix-blend-overlay group-hover:text-gold/30 transition-colors duration-700">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Text Panel (Uniform 50% width on Desktop) */}
                  <div className={`relative z-10 flex flex-col justify-center p-8 lg:p-16 bg-[#070707] flex-1 w-full lg:w-1/2 border-t lg:border-t-0 ${isEven ? "lg:border-l" : "lg:border-r"} border-white/10`}>
                    <p className="text-gold font-display text-xs lg:text-sm uppercase tracking-[0.2em] font-bold mb-3 lg:mb-4">
                      {zone.subtitle}
                    </p>
                    <h2 className="font-display font-bold text-3xl lg:text-5xl tracking-tight leading-none text-cream mb-6 group-hover:text-gold transition-colors duration-500">
                      {zone.title}
                    </h2>
                    <p className="text-mist text-sm lg:text-base leading-relaxed mb-10 max-w-xl">
                      {zone.description}
                    </p>

                    <div className="flex flex-wrap gap-2 lg:gap-3 mt-auto lg:mt-0">
                      {zone.features.map((f) => (
                        <span key={f} className="flex items-center gap-2 text-[11px] lg:text-sm font-medium text-cream/90 bg-white/5 border border-white/10 px-4 py-2 lg:px-5 lg:py-2.5 rounded-full whitespace-nowrap group-hover:bg-white/10 transition-colors duration-500">
                            <IconCheck className="w-3.5 h-3.5 text-gold shrink-0" />
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hover Border Glow */}
                    <div className="absolute inset-0 border-[1.5px] border-gold/0 group-hover:border-gold/30 rounded-[2rem] lg:rounded-[3rem] transition-colors duration-700 pointer-events-none z-30" />
                  </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's included strip */}
      <section className="section-layer relative py-20 lg:py-28 mesh-bg overflow-hidden">
        <div className="deco">
          <div className="orb orb-gold-soft orb-lg animate-float-slow" style={{ top: "-10%", right: "-10%" }} />
        </div>
        <div className="layer-content max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="mb-12 text-center">
            <SectionHeading
              label="Included With Every Visit"
              title="All Zones,"
              highlight="Zero Restrictions"
              align="center"
              subtitle="Every membership and day pass grants full access to all 8 zones — no surcharges, no tier system."
            />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Unlimited Zone Access", desc: "All 8 areas including HYROX and Grip Galaxy." },
              { title: "Air Conditioning", desc: "Full building climate control — even in the heavy iron zone." },
              { title: "Locker Rooms", desc: "Secure lockers and hot showers for every visitor." },
              { title: "Walk-Ins Welcome", desc: "No booking needed. Just show up and train." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="group p-6 rounded-[24px] bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.05] hover:border-gold/20 transition-all duration-500 h-full">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <IconCheck className="w-4 h-4 text-gold" />
                  </div>
                  <h3 className="type-body-strong text-cream mb-2 group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-body text-[14px] text-mist">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready To Train?"
        subtitle="Walk in today — no appointment needed. Day passes from RM25."
        primaryLabel="View Pricing"
        secondaryLabel="WhatsApp Us"
      />
    </>
  );
}
