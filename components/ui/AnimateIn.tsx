"use client";

import { useEffect, useRef } from "react";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  /** Delay in milliseconds before the animation starts once the element is in view */
  delay?: number;
}

/**
 * Wraps children in a div that fades + slides up into view when it enters the
 * viewport, using IntersectionObserver. Falls back gracefully when the API is
 * unavailable (e.g. SSR, older browsers).
 */
export default function AnimateIn({ children, className = "", delay = 0 }: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect the user's motion preference
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      el.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) {
            setTimeout(() => el.classList.add("is-visible"), delay);
          } else {
            el.classList.add("is-visible");
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`animate-on-scroll ${className}`}>
      {children}
    </div>
  );
}
