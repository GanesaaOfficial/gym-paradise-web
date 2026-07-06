"use client";

import { useState, useLayoutEffect, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

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

  useLayoutEffect(() => {
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
            key={img.src + i}
            className="bento-tile break-inside-avoid mb-4 lg:mb-6 relative overflow-hidden rounded-[1.5rem] lg:rounded-[2rem] cursor-pointer group shadow-lg transition-all duration-700 hover:shadow-[0_20px_50px_rgba(201,168,76,0.15)] hover:z-10"
            onClick={() => open(i)}
            role="button"
            tabIndex={0}
            aria-label={`View ${img.alt}`}
            onKeyDown={(e) => e.key === "Enter" && open(i)}
          >
            <div className="relative z-0">
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                quality={80}
                loading={i < 6 ? "eager" : "lazy"}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="w-full h-auto block transform-gpu will-change-transform group-hover:scale-105"
                style={{ transition: 'transform 2s cubic-bezier(0.22, 1, 0.36, 1)', WebkitBackfaceVisibility: 'hidden', backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
              />
            </div>

            {/* Inner Glow Border */}
            <div className="absolute inset-0 z-20 border-[1.5px] border-white/10 group-hover:border-gold/40 rounded-[1.5rem] lg:rounded-[2rem] transition-colors duration-700 pointer-events-none" />

            {/* Hover overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-void via-void/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5 lg:p-6">
              {img.category && (
                <span className="label-sm text-[10px] text-gold mb-2">{img.category}</span>
              )}
              <p className="text-cream text-[13px] font-semibold leading-snug line-clamp-2">{img.alt}</p>
            </div>

            {/* Zoom icon */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-9 h-9 rounded-xl bg-void/70 backdrop-blur-md border border-white/10 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Premium Lightbox */}
      {lightbox !== null && mounted && createPortal(
        <div
          className="fixed inset-0 z-[100] bg-void/98 backdrop-blur-2xl flex flex-col items-center justify-center"
          onClick={close}
        >
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-5 z-20 bg-gradient-to-b from-void/80 to-transparent" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-3">
              {images[lightbox].category && (
                <span className="tag-blur">{images[lightbox].category}</span>
              )}
              <span className="text-ash/60 text-[13px]">{lightbox + 1} / {images.length}</span>
            </div>
            <button
              className="w-10 h-10 rounded-xl bg-white/[0.06] hover:bg-white/[0.10] flex items-center justify-center text-ash hover:text-gold transition-all duration-300"
              onClick={close}
              aria-label="Close lightbox"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Prev */}
          <button
            className="absolute left-4 lg:left-8 z-20 w-12 h-12 rounded-2xl bg-white/[0.06] hover:bg-gold/20 hover:border-gold/40 border border-white/10 flex items-center justify-center text-ash hover:text-gold transition-all duration-300"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image container */}
          <div
            className="relative max-w-5xl w-full mx-4 sm:mx-12 lg:mx-32 flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] flex items-center justify-center rounded-[20px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.8)]">
              <Image
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                width={1200}
                height={900}
                quality={90}
                className="object-contain max-h-[75vh] w-auto"
                priority
              />
            </div>
            {/* Caption */}
            <p className="text-mist text-[14px] text-center px-4 max-w-xl leading-relaxed">
              {images[lightbox].alt}
            </p>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 lg:right-8 z-20 w-12 h-12 rounded-2xl bg-white/[0.06] hover:bg-gold/20 hover:border-gold/40 border border-white/10 flex items-center justify-center text-ash hover:text-gold transition-all duration-300"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Thumbnail strip */}
          <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-void to-transparent pb-5 pt-10" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-center gap-2 overflow-x-auto px-6 max-w-3xl mx-auto">
              {images.map((img, i) => (
                <button
                  key={img.src + i}
                  onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                  className={`relative shrink-0 rounded-lg overflow-hidden transition-all duration-300 ${
                    i === lightbox
                      ? "w-16 h-11 ring-2 ring-gold opacity-100 scale-110"
                      : "w-14 h-10 opacity-30 hover:opacity-70 hover:scale-105"
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <Image src={img.src} alt="" fill className="object-cover" sizes="64px" />
                </button>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
