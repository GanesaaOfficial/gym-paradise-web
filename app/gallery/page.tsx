import type { Metadata } from "next";
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

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Inside"
        highlight="The Arena"
        subtitle={`${images.length} photos — every corner of Malaysia's first world-class mega gym.`}
        bgImage="/Photos/unnamed-31.webp"
        bgAlt="Gym entrance"
        crumb="Gallery"
      />

      <section className="py-16 lg:py-24 bg-void">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <GalleryClient images={images} categories={categories} />
          </ScrollReveal>
        </div>
      </section>

      <CtaBand
        title="Experience It In Person"
        subtitle="Walk in with a day pass — no membership required."
        primaryLabel="View Memberships"
        primaryHref="/pricing"
        secondaryLabel="Get Directions"
        secondaryHref="/contact"
        secondaryExternal={false}
      />
    </>
  );
}
