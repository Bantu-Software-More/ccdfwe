"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import type { GalleryImage } from "@/lib/gallery";

interface GalleryGridProps {
  images: GalleryImage[];
  categories?: string[];
}

export default function GalleryGrid({ images, categories }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All" ? images : images.filter((img) => img.category === activeCategory);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, goNext, goPrev]);

  const activeLightboxImage = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <div>
      {/* Category filters */}
      {categories && categories.length > 1 && (
        <div className="flex flex-wrap justify-center gap-2 mb-8" role="group" aria-label="Filter gallery by category">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                activeCategory === cat
                  ? "bg-emerald-700 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map((img, idx) => (
          <button
            key={idx}
            className="relative aspect-square bg-emerald-100 rounded-xl overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            onClick={() => openLightbox(idx)}
            aria-label={`View: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {activeLightboxImage && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={activeLightboxImage.alt}
          onClick={closeLightbox}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <button
              className="absolute -top-4 -right-4 z-10 bg-white rounded-full p-2 text-gray-900 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
              <Image
                src={activeLightboxImage.src}
                alt={activeLightboxImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1024px"
              />
            </div>

            {/* Caption and counter */}
            <div className="flex items-center justify-between mt-3 px-1">
              {activeLightboxImage.caption ? (
                <p className="text-white text-sm">{activeLightboxImage.caption}</p>
              ) : (
                <span />
              )}
              <p className="text-gray-400 text-xs">
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>

            {/* Prev button */}
            {filtered.length > 1 && (
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/90 hover:bg-white rounded-full p-3 text-gray-900 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
                onClick={goPrev}
                aria-label="Previous image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Next button */}
            {filtered.length > 1 && (
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/90 hover:bg-white rounded-full p-3 text-gray-900 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors"
                onClick={goNext}
                aria-label="Next image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
