interface PageHeroProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function PageHero({ title, subtitle, className = "" }: PageHeroProps) {
  return (
    <section className={`bg-gradient-to-br from-emerald-800 to-emerald-600 text-white py-20 px-4 ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto animate-slide-up delay-200">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
