import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";
import GalleryGrid from "../components/GalleryGrid";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "See Gym Paradise 3.0 in full — the epic training floor, HYROX room, Grip Galaxy, lounge, exterior, and more. Photo gallery of Cheras Selatan's premier gym.",
};

const images = [
  // Exterior
  { src: "/Photos/unnamed-16.webp", alt: "Gym Paradise 3.0 building exterior daytime", category: "Exterior" },
  { src: "/Photos/unnamed-32.webp", alt: "Gym Paradise building facade against cloudy sky", category: "Exterior" },

  // Main Floor
  { src: "/Photos/unnamed-15.webp", alt: "Massive main floor with hex LED ceiling", category: "Main Floor" },
  { src: "/Photos/unnamed-25.webp", alt: "BOLDER neon sign over training floor", category: "Main Floor" },
  { src: "/Photos/unnamed-27.webp", alt: "GYM PARADISE 3.0 — First World-Class Mega Gym of Malaysia", category: "Main Floor" },
  { src: "/Photos/unnamed-33.webp", alt: "Night training with hex lights and members", category: "Main Floor" },
  { src: "/Photos/unnamed-34.webp", alt: "Wide shot with grid LED ceiling lights", category: "Main Floor" },
  { src: "/Photos/unnamed-36.webp", alt: "Training floor with blue teal LED atmosphere", category: "Main Floor" },
  { src: "/Photos/unnamed-37.webp", alt: "Dramatic wide shot with grid LED ceiling pattern", category: "Main Floor" },
  { src: "/Photos/unnamed-19.webp", alt: "Main floor with GYM PARADISE blue neon sign", category: "Main Floor" },
  { src: "/Photos/unnamed-28.webp", alt: "STRONGER · BOLDER · UNSTOPPABLE neon signs", category: "Main Floor" },
  { src: "/Photos/unnamed-29.webp", alt: "Equipment rows with GYM PARADISE neon", category: "Main Floor" },
  { src: "/Photos/unnamed-31.webp", alt: "Entrance view with rainbow LED strip", category: "Main Floor" },
  { src: "/Photos/unnamed-35.webp", alt: "Cardio area with cycling machines and neon", category: "Cardio" },

  // Equipment
  { src: "/Photos/unnamed-20.webp", alt: "Extensive dumbbell rack rows", category: "Equipment" },
  { src: "/Photos/unnamed-24.webp", alt: "Free weight zone with UNSTOPPABLE neon", category: "Equipment" },

  // Specialty Zones
  { src: "/Photos/unnamed-21.webp", alt: "HYROX Training Club — running track and rowers", category: "HYROX" },
  { src: "/Photos/unnamed-26.webp", alt: "HYROX room close-up with rowers", category: "HYROX" },
  { src: "/Photos/unnamed-22.webp", alt: "Grip Galaxy — cable attachment wall", category: "Grip Galaxy" },

  // Lounge & Amenities
  { src: "/Photos/unnamed-17.webp", alt: "Reception and lounge with GYM PARADISE logo wall", category: "Lounge" },
  { src: "/Photos/unnamed-18.webp", alt: "Lounge seating area with natural light", category: "Lounge" },
  { src: "/Photos/unnamed-30.webp", alt: "Reception entrance with rainbow LED lighting", category: "Lounge" },
  { src: "/Photos/unnamed-23.webp", alt: "Premium changing room", category: "Amenities" },
];

const categories = ["All", "Main Floor", "Equipment", "HYROX", "Grip Galaxy", "Cardio", "Lounge", "Exterior", "Amenities"];

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Inside"
        highlight="Gym Paradise 3.0"
        subtitle={`${images.length} photos — explore every corner of Malaysia's first world-class mega gym.`}
        bgImage="/Photos/unnamed-31.webp"
        bgAlt="Gym Paradise entrance with rainbow LED strip"
        crumb="Gallery"
      />

      <section className="py-16 lg:py-24 bg-void">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Category Pills */}
          <ScrollReveal className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <span
                key={cat}
                className="font-display text-[10px] font-semibold uppercase tracking-[0.25em] text-ash hover:text-gold border border-white/[0.06] hover:border-gold/30 bg-ink hover:bg-gold/[0.04] px-4 py-2 cursor-default transition-all duration-200"
              >
                {cat}
              </span>
            ))}
          </ScrollReveal>

          {/* Photo count */}
          <ScrollReveal className="mb-8">
            <p className="text-ash/60 text-sm font-light">
              Showing <span className="text-gold font-semibold">{images.length}</span> photos
            </p>
          </ScrollReveal>

          {/* Gallery */}
          <GalleryGrid images={images} columns={3} />

          {/* Bottom CTA */}
          <div className="mt-20 pt-12 border-t border-white/[0.04] text-center">
            <ScrollReveal>
              <div className="section-label justify-center mb-4">
                <span className="font-display text-[11px] font-semibold text-gold tracking-[0.4em] uppercase">Experience It</span>
              </div>
              <p className="text-ash text-base font-light mb-8">
                Ready to experience it in person?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/pricing" className="btn-primary">
                  View Memberships
                </a>
                <a href="/contact" className="btn-outline">
                  Get Directions
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
