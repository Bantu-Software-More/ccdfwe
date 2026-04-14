interface PageHeroProps {
  title: string;
  subtitle?: string;
  className?: string;
  bgImage?: string;
}

export default function PageHero({ title, subtitle, className = "", bgImage }: PageHeroProps) {
  return (
    <section className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-600 text-white px-4 overflow-hidden ${className}`}>
      {/* Optional background image with overlay for readability */}
      {bgImage && (
        <div className="absolute inset-0" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={bgImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-emerald-900/80" />
        </div>
      )}
      {/* Decorative floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-1/3 right-10 w-48 h-48 bg-emerald-400/10 rounded-full blur-2xl animate-pulse-soft delay-500" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-300/5 rounded-full blur-3xl animate-float" />
      </div>
      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 hero-title drop-shadow-lg">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl lg:text-2xl text-emerald-100 max-w-2xl mx-auto hero-subtitle drop-shadow">{subtitle}</p>
        )}
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-hint" aria-hidden="true">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
