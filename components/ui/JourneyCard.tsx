"use client";

import { useEffect, useRef } from "react";

interface JourneyCardProps {
  title: string;
  text: string;
  icon: string;
  image?: string;
  imageAlt?: string;
  index: number;
}

/**
 * A card that alternates left/right along a vertical timeline.
 * Slides into view from the appropriate side when scrolled into the viewport.
 */
export default function JourneyCard({
  title,
  text,
  icon,
  image,
  imageAlt,
  index,
}: JourneyCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.classList.add("journey-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("journey-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`journey-card relative flex items-center mb-16 md:mb-24 ${
        isLeft ? "md:flex-row journey-from-left" : "md:flex-row-reverse journey-from-right"
      } flex-col md:gap-8 gap-4`}
    >
      {/* Timeline dot */}
      <div
        className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-emerald-600 text-white items-center justify-center text-xl z-20 shadow-lg"
        aria-hidden="true"
      >
        {icon}
      </div>

      {/* Mobile dot */}
      <div
        className="md:hidden flex items-center gap-3 self-start pl-2"
        aria-hidden="true"
      >
        <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center text-lg shadow-lg flex-shrink-0">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      </div>

      {/* Card */}
      <div
        className={`journey-card-inner md:w-5/12 w-full ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}
      >
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover-lift">
          {image && (
            <div className="relative w-full h-48 md:h-56 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={imageAlt || title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          )}
          <div className="p-6">
            <h3 className="hidden md:block text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">{text}</p>
          </div>
        </div>
      </div>

      {/* Spacer for opposite side */}
      <div className="hidden md:block md:w-5/12" />
    </div>
  );
}
