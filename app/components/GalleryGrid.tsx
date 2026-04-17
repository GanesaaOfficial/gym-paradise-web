"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export interface GalleryImage {
  src: string;
  alt: string;
  category?: string;
}

interface Props {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
}

export default function GalleryGrid({ images, columns = 3 }: Props) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const open = (i: number) => {
    setLightbox(i);
    document.body.classList.add("lightbox-open");
  };

  const close = useCallback(() => {
    setLightbox(null);
    document.body.classList.remove("lightbox-open");
  }, []);

  const prev = useCallback(() => {
    setLightbox((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);

  const next = useCallback(() => {
    setLightbox((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, close, prev, next]);

  const colClass =
    columns === 4
      ? "columns-2 sm:columns-3 lg:columns-4"
      : columns === 2
      ? "columns-1 sm:columns-2"
      : "columns-2 sm:columns-2 lg:columns-3";

  return (
    <>
      {/* Masonry grid */}
      <div className={`${colClass} gap-3 lg:gap-4`}>
        {images.map((img, i) => (
          <div
            key={img.src}
            className="card-image-hover break-inside-avoid mb-3 lg:mb-4 relative overflow-hidden cursor-pointer group bg-ink"
            onClick={() => open(i)}
          >
            <div className="relative">
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                quality={80}
                loading={i < 6 ? "eager" : "lazy"}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="card-img w-full h-auto block"
              />
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-void/0 group-hover:bg-void/50 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-11 h-11 border border-gold/50 flex items-center justify-center bg-void/60 backdrop-blur-sm">
                <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>

            {img.category && (
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-display text-[9px] font-semibold text-gold bg-void/80 backdrop-blur-sm px-2.5 py-1 tracking-[0.25em] uppercase">
                  {img.category}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-void/97 backdrop-blur-lg flex items-center justify-center"
          onClick={close}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 z-10 w-10 h-10 border border-white/[0.08] hover:border-gold/40 flex items-center justify-center text-ash hover:text-gold transition-all duration-200 bg-ink"
            onClick={close}
            aria-label="Close"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 font-display text-[11px] tracking-[0.2em] text-ash">
            {lightbox + 1} / {images.length}
          </div>

          {/* Prev */}
          <button
            className="absolute left-4 z-10 w-11 h-11 border border-white/[0.08] hover:border-gold/40 flex items-center justify-center text-ash hover:text-gold transition-all duration-200 bg-ink"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl w-full mx-16 max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              width={1200}
              height={900}
              quality={90}
              className="object-contain max-h-[85vh] w-auto shadow-2xl"
              priority
            />
          </div>

          {/* Next */}
          <button
            className="absolute right-4 z-10 w-11 h-11 border border-white/[0.08] hover:border-gold/40 flex items-center justify-center text-ash hover:text-gold transition-all duration-200 bg-ink"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Thumbnail strip */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 max-w-2xl overflow-x-auto pb-1">
            {images.map((img, i) => (
              <button
                key={img.src}
                onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                className={`relative shrink-0 w-14 h-10 overflow-hidden transition-all duration-200 ${
                  i === lightbox
                    ? "ring-1 ring-gold opacity-100 scale-110"
                    : "opacity-30 hover:opacity-60"
                }`}
              >
                <Image src={img.src} alt="" fill className="object-cover" sizes="56px" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
