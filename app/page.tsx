import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { homeContent } from "@/content/home";
import { siteConfig } from "@/content/site";
import { loadGalleryData, getLandingImages } from "@/lib/gallery";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import CTASection from "@/components/ui/CTASection";
import AnimateIn from "@/components/ui/AnimateIn";

export const metadata: Metadata = {
  title: `${siteConfig.name} – ${siteConfig.tagline}`,
  description: siteConfig.description,
};

export default function HomePage() {
  const { hero, intro, presidentMessage, featuredActivities, cta } = homeContent;
  const galleryData = loadGalleryData();
  const landingImages = getLandingImages(galleryData);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/home/hero.jpg')] bg-cover bg-center" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 hero-title">
              {hero.title}
            </h1>
            <p className="text-lg md:text-xl text-emerald-100 mb-8 leading-relaxed hero-subtitle">
              {hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 hero-cta">
              <Link
                href={hero.cta.href}
                className="bg-white text-emerald-800 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white btn-press"
              >
                {hero.cta.label}
              </Link>
              <Link
                href={hero.ctaSecondary.href}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white btn-press"
              >
                {hero.ctaSecondary.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4 bg-white">
        <AnimateIn className="max-w-4xl mx-auto text-center">
          <SectionTitle title={intro.title} />
          <p className="text-gray-600 text-lg leading-relaxed">{intro.text}</p>
        </AnimateIn>
      </section>

      {/* President Message */}
      <section className="py-16 px-4 bg-emerald-50">
        <AnimateIn className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="relative w-40 h-40 rounded-full overflow-hidden flex-shrink-0 bg-emerald-200">
              <Image
                src={presidentMessage.image}
                alt="CCDFWE President"
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{presidentMessage.title}</h2>
              <blockquote className="text-gray-700 text-lg italic leading-relaxed mb-4">
                &ldquo;{presidentMessage.message}&rdquo;
              </blockquote>
              <p className="font-semibold text-emerald-700">— {presidentMessage.name}</p>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* Featured Activities */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <SectionTitle
              title={featuredActivities.title}
              subtitle={featuredActivities.subtitle}
            />
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredActivities.items.map((item, i) => (
              <AnimateIn key={item.title} delay={i * 100}>
                <Card
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  className="h-full"
                />
              </AnimateIn>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/activities"
              className="inline-block border-2 border-emerald-700 text-emerald-700 px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 hover:text-white hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 btn-press"
            >
              View All Activities
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <SectionTitle title="Community in Photos" subtitle="A glimpse of our community in action." />
          </AnimateIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {landingImages.slice(0, 4).map((img, i) => (
              <AnimateIn key={img.src} delay={i * 80}>
                <div className="relative aspect-square bg-emerald-100 rounded-xl overflow-hidden group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              </AnimateIn>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-block border-2 border-emerald-700 text-emerald-700 px-8 py-3 rounded-full font-semibold hover:bg-emerald-700 hover:text-white hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 btn-press"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={cta.title}
        text={cta.text}
        buttons={[
          { label: cta.primaryButton.label, href: cta.primaryButton.href },
          { label: cta.secondaryButton.label, href: cta.secondaryButton.href, variant: "secondary" },
        ]}
      />
    </>
  );
}
