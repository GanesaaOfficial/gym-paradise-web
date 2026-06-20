"use client";

import { useState } from "react";
import GalleryGrid, { type GalleryImage } from "./GalleryGrid";

interface Props {
  images: GalleryImage[];
  categories: string[];
}

export default function GalleryClient({ images, categories }: Props) {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? images : images.filter((img) => img.category === active);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`font-display text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2.5 border transition-all ${
              active === cat
                ? "bg-gold text-void border-gold"
                : "bg-ink text-ash border-white/10 hover:border-gold/40 hover:text-gold"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="text-ash/60 text-sm font-light mb-8">
        Showing <span className="text-gold font-semibold">{filtered.length}</span> photos
        {active !== "All" && (
          <span>
            {" "}
            in <span className="text-cream">{active}</span>
          </span>
        )}
      </p>

      <GalleryGrid images={filtered} columns={3} />
    </>
  );
}
