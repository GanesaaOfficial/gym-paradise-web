import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";
import GalleryClient from "../components/GalleryClient";
import CtaBand from "../components/CtaBand";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Photo gallery of Gym Paradise 3.0 — training floor, HYROX, Grip Galaxy, lounge, and more.",
};

const images = [
  { src: "/Photos/unnamed-16.webp", alt: "Building exterior daytime", category: "Exterior" },
  { src: "/Photos/unnamed-32.webp", alt: "Building facade", category: "Exterior" },
  { src: "/Photos/unnamed-15.webp", alt: "Main floor hex LED ceiling", category: "Main Floor" },
  { src: "/Photos/unnamed-25.webp", alt: "BOLDER neon sign", category: "Main Floor" },
  { src: "/Photos/unnamed-27.webp", alt: "First World-Class Mega Gym sign", category: "Main Floor" },
  { src: "/Photos/unnamed-33.webp", alt: "Night training hex lights", category: "Main Floor" },
  { src: "/Photos/unnamed-34.webp", alt: "Grid LED ceiling", category: "Main Floor" },
  { src: "/Photos/unnamed-36.webp", alt: "Blue teal LED atmosphere", category: "Main Floor" },
  { src: "/Photos/unnamed-37.webp", alt: "Dramatic wide grid LED", category: "Main Floor" },
  { src: "/Photos/unnamed-19.webp", alt: "Blue neon GYM PARADISE sign", category: "Main Floor" },
  { src: "/Photos/unnamed-28.webp", alt: "STRONGER BOLDER UNSTOPPABLE neon", category: "Main Floor" },
  { src: "/Photos/unnamed-29.webp", alt: "Equipment rows with neon", category: "Main Floor" },
  { src: "/Photos/unnamed-31.webp", alt: "Entrance rainbow LED", category: "Main Floor" },
  { src: "/Photos/unnamed-35.webp", alt: "Cardio area", category: "Cardio" },
  { src: "/Photos/unnamed-20.webp", alt: "Dumbbell rack", category: "Equipment" },
  { src: "/Photos/unnamed-24.webp", alt: "Free weight zone UNSTOPPABLE", category: "Equipment" },
  { src: "/Photos/unnamed-21.webp", alt: "HYROX track and rowers", category: "HYROX" },
  { src: "/Photos/unnamed-26.webp", alt: "HYROX rowers close-up", category: "HYROX" },
  { src: "/Photos/unnamed-22.webp", alt: "Grip Galaxy wall", category: "Grip Galaxy" },
  { src: "/Photos/unnamed-17.webp", alt: "Reception lounge", category: "Lounge" },
  { src: "/Photos/unnamed-18.webp", alt: "Lounge seating", category: "Lounge" },
  { src: "/Photos/unnamed-30.webp", alt: "Reception entrance", category: "Lounge" },
  { src: "/Photos/unnamed-23.webp", alt: "Changing room", category: "Amenities" },
];

const categories = ["All", "Main Floor", "Equipment", "HYROX", "Grip Galaxy", "Cardio", "Lounge", "Exterior", "Amenities"];

// Pre-compute counts for filter pills
const categoryCounts: Record<string, number> = {};
categories.forEach((cat) => {
  if (cat === "All") {
    categoryCounts[cat] = images.length;
  } else {
    categoryCounts[cat] = images.filter((img) => img.category === cat).length;
  }
});

// Featured spotlight image
const spotlightImage = images.find((img) => img.src === "/Photos/unnamed-33.webp")!;

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Inside"
        highlight="The Arena"
        subtitle={`${images.length} exclusive photos — every corner of Malaysia's first world-class mega gym.`}
        bgImage="/Photos/unnamed-31.webp"
        bgAlt="Gym entrance"
        crumb="Gallery"
      />

      {/* Spotlight hero image */}
      <section className="relative w-full pt-12 pb-24 bg-void">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12 lg:py-24 relative z-10">
          <ScrollReveal direction="up">
            <div className="relative overflow-hidden rounded-[40px] h-[60vh] lg:h-[75vh] group border border-white/10 hover:border-gold/30 hover:shadow-[0_0_50px_rgba(201,168,76,0.15)] transition-all duration-700">
              <Image
                src={spotlightImage.src}
                alt={spotlightImage.alt}
                fill
                quality={100}
                sizes="100vw"
                priority
                className="object-cover transform-gpu will-change-transform group-hover:scale-105"
                style={{ transition: 'transform 2s cubic-bezier(0.22, 1, 0.36, 1)', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-void/80 via-void/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-10 lg:p-16">
                <span className="glass px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-mist border border-white/10 backdrop-blur-md mb-6 inline-block">
                  Featured Showcase
                </span>
                <h2 className="font-display font-black text-5xl lg:text-7xl text-cream max-w-2xl leading-[1.1] tracking-tight mb-4">
                  Night Training at <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold/70">Gym Paradise</span>
                </h2>
                <p className="text-mist text-lg lg:text-xl mt-3 max-w-xl leading-relaxed">
                  The hex LED grid comes alive at night — an atmosphere unlike any other gym in Malaysia.
                </p>
              </div>
              {/* Corner badge */}
              <div className="absolute top-8 right-10 text-right mix-blend-overlay">
                <div className="font-display font-black text-[8rem] lg:text-[10rem] leading-none text-white/20">01</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="section-layer relative py-8 lg:py-12 bg-void overflow-hidden">
        <div className="deco">
          <div className="orb orb-gold-soft orb-lg animate-float-slow" style={{ top: "0%", left: "-14%" }} />
          <div className="orb orb-cool orb-md animate-float-slow-alt" style={{ bottom: "-8%", right: "-10%" }} />
        </div>
        <div className="layer-content max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <GalleryClient images={images} categories={categories} categoryCounts={categoryCounts} />
          </ScrollReveal>
        </div>
      </section>

      <CtaBand
        title="Experience It In Person"
        subtitle="Walk in with a day pass — no membership required. See you on the floor."
        primaryLabel="View Memberships"
        primaryHref="/pricing"
        secondaryLabel="Get Directions"
        secondaryHref="/contact"
        secondaryExternal={false}
      />
    </>
  );
}
