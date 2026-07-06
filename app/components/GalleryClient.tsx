"use client";

import { useState, useTransition } from "react";
import GalleryGrid, { type GalleryImage } from "./GalleryGrid";

interface Props {
  images: GalleryImage[];
  categories: string[];
  categoryCounts?: Record<string, number>;
}

export default function GalleryClient({ images, categories, categoryCounts }: Props) {
  const [active, setActive] = useState("All");
  const [isPending, startTransition] = useTransition();

  const filtered =
    active === "All" ? images : images.filter((img) => img.category === active);

  const handleFilter = (cat: string) => {
    startTransition(() => {
      setActive(cat);
    });
  };

  const getCount = (cat: string) => {
    if (cat === "All") return images.length;
    return categoryCounts?.[cat] ?? images.filter((img) => img.category === cat).length;
  };

  return (
    <>
      {/* Premium Filter pills */}
      <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 mb-14">
        {categories.map((cat) => {
          const count = getCount(cat);
          const isActive = active === cat;
          return (
            <button
              key={cat}
              id={`gallery-filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              type="button"
              onClick={() => handleFilter(cat)}
              className={`relative inline-flex items-center gap-2.5 font-display text-[12px] font-bold uppercase tracking-[0.1em] px-6 py-3.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isActive
                  ? "bg-gold text-void border border-gold shadow-[0_15px_40px_rgba(201,168,76,0.4)] scale-105 z-10"
                  : "glass bg-white/[0.02] text-ash border border-white/10 hover:border-gold/40 hover:text-gold hover:bg-white/[0.05] hover:shadow-[0_10px_30px_rgba(201,168,76,0.15)] hover:-translate-y-1"
              }`}
            >
              {cat}
              <span
                className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-extrabold leading-none transition-colors duration-500 ${
                  isActive ? "bg-void/20 text-void" : "bg-white/[0.08] text-ash/70 group-hover:bg-gold/20 group-hover:text-gold"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Count display */}
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px flex-1 bg-white/[0.06]" />
        <p className="text-body text-[14px] text-mist shrink-0">
          <span className="text-gold font-semibold">{filtered.length}</span>
          {" "}photo{filtered.length !== 1 ? "s" : ""}
          {active !== "All" && (
            <span> · <span className="text-cream">{active}</span></span>
          )}
        </p>
        <div className="h-px flex-1 bg-white/[0.06]" />
      </div>

      {/* Grid with fade transition */}
      <div
        className="transition-opacity duration-300"
        style={{ opacity: isPending ? 0.4 : 1 }}
      >
        <GalleryGrid images={filtered} columns={3} />
      </div>
    </>
  );
}
