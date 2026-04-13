"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryImage } from "@/content/gallery";

interface GalleryGridProps {
  images: GalleryImage[];
  categories?: string[];
}

export default function GalleryGrid({ images, categories }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const filtered =
    activeCategory === "All" ? images : images.filter((img) => img.category === activeCategory);

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
            onClick={() => setLightbox(img)}
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
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 768px"
              />
            </div>
            {lightbox.caption && (
              <p className="text-white text-center mt-3 text-sm">{lightbox.caption}</p>
            )}
            <button
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 text-gray-900 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
