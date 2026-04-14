import type { Metadata } from "next";
import { discoverCongoContent } from "@/content/discover-congo";
import PageHero from "@/components/ui/PageHero";
import AnimateIn from "@/components/ui/AnimateIn";
import SectionTitle from "@/components/ui/SectionTitle";
import JourneyCard from "@/components/ui/JourneyCard";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Discover the Republic of Congo – Interesting Facts & Heritage Sites",
  description:
    "Explore fascinating facts about the Republic of Congo (Congo-Brazzaville), its World Heritage Sites, lush rainforests, vibrant culture, and remarkable people.",
};

export default function DiscoverCongoPage() {
  const { hero, intro, facts, heritageSites, callToAction } =
    discoverCongoContent;

  return (
    <>
      <PageHero title={hero.title} subtitle={hero.subtitle} />

      {/* ── Intro ── */}
      <section className="py-20 px-4 bg-white">
        <AnimateIn className="max-w-4xl mx-auto text-center">
          <SectionTitle title={intro.title} />
          <p className="text-gray-600 text-lg leading-relaxed">
            {intro.text}
          </p>
        </AnimateIn>
      </section>

      {/* ── Facts Journey Timeline ── */}
      <section className="py-20 px-4 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-5xl mx-auto">
          <AnimateIn>
            <SectionTitle
              title="Interesting Facts"
              subtitle="Scroll through the wonders of the Republic of Congo."
            />
          </AnimateIn>

          <div className="journey-line relative mt-12">
            {facts.map((fact, i) => (
              <JourneyCard
                key={fact.title}
                title={fact.title}
                text={fact.text}
                icon={fact.icon}
                image={fact.image}
                imageAlt={fact.imageAlt}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Heritage Sites ── */}
      <section className="relative py-20 px-4 bg-emerald-900 text-white overflow-hidden">
        {/* Decorative shapes */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-700/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-56 h-56 bg-emerald-500/20 rounded-full blur-2xl" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <AnimateIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              World Heritage &amp; Protected Sites
            </h2>
            <p className="text-emerald-200 text-center text-lg max-w-2xl mx-auto mb-16">
              The Republic of Congo safeguards some of the most biodiverse
              regions on the planet. These sites are treasures not just for
              Congo, but for all of humanity.
            </p>
          </AnimateIn>

          <div className="space-y-16">
            {heritageSites.map((site, i) => (
              <AnimateIn key={site.title} delay={i * 100}>
                <div
                  className={`flex flex-col ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8 items-stretch`}
                >
                  {/* Image */}
                  <div className="lg:w-1/2 relative rounded-2xl overflow-hidden min-h-[280px] group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={site.image}
                      alt={site.imageAlt}
                      className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block bg-emerald-600/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {site.status}
                      </span>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="lg:w-1/2 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-3">{site.title}</h3>
                    <p className="text-emerald-100 leading-relaxed mb-4">
                      {site.description}
                    </p>
                    <ul className="space-y-2">
                      {site.highlights.map((h, hi) => (
                        <li
                          key={hi}
                          className="flex items-start gap-2 text-emerald-200 text-sm"
                        >
                          <span className="mt-0.5 text-emerald-400 flex-shrink-0">
                            ✦
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Country at a Glance stats ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimateIn>
            <SectionTitle
              title="Congo at a Glance"
              subtitle="Quick facts about this extraordinary nation."
            />
          </AnimateIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {[
              { label: "Capital", value: "Brazzaville", icon: "🏛️" },
              { label: "Population", value: "~6 Million", icon: "👥" },
              { label: "Languages", value: "French (official)", icon: "🗣️" },
              { label: "Independence", value: "August 15, 1960", icon: "🇨🇬" },
              { label: "Area", value: "342,000 km²", icon: "🗺️" },
              { label: "Climate", value: "Tropical", icon: "🌡️" },
              { label: "Currency", value: "Central African CFA Franc", icon: "💰" },
              { label: "Ethnic Groups", value: "60+", icon: "🎭" },
            ].map((stat, i) => (
              <AnimateIn key={stat.label} delay={i * 60}>
                <div className="text-center bg-emerald-50 rounded-2xl p-6 card-hover-lift border border-emerald-100">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-lg font-bold text-emerald-800">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection
        title={callToAction.title}
        text={callToAction.text}
        buttons={[
          { label: callToAction.button.label, href: callToAction.button.href },
          { label: "Learn About Us", href: "/about", variant: "secondary" },
        ]}
      />
    </>
  );
}
