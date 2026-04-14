"use client";

import { useEffect, useRef, useState } from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  /** URL for the parallax background image */
  bgImage?: string;
  /** Overlay colour – defaults to a dark semi-transparent overlay */
  overlay?: string;
  className?: string;
  speed?: number;
}

/**
 * A full-width section that applies a subtle parallax background effect
 * using CSS `background-attachment: fixed` with a JS-driven fallback.
 * Respects `prefers-reduced-motion`.
 */
export default function ParallaxSection({
  children,
  bgImage,
  overlay = "bg-black/50",
  className = "",
  speed = 0.4,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !bgImage) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setOffset(rect.top * speed * -1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [bgImage, speed]);

  return (
    <div ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url('${bgImage}')`,
            transform: `translateY(${offset}px)`,
          }}
          aria-hidden="true"
        />
      )}
      {bgImage && <div className={`absolute inset-0 ${overlay}`} aria-hidden="true" />}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
