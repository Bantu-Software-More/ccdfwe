import type { Metadata } from "next";
import { joinUsContent } from "@/content/join-us";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Join Us – Become a Member of the Congolese Community in DFW",
  description: "Join CCDFWE and become part of the Congolese community in Dallas-Fort Worth. Help preserve our heritage, empower families, and build a stronger diaspora.",
};

export default function JoinUsPage() {
  const { hero, whyJoin, expectations, howToJoin, cta } = joinUsContent;

  return (
    <>
      <PageHero title={hero.title} subtitle={hero.subtitle} />

      {/* Why Join */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title={whyJoin.title} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyJoin.reasons.map((reason) => (
              <Card key={reason.title} title={reason.title} description={reason.description} icon={reason.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Expectations */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title={expectations.title} centered={false} />
          <ul className="space-y-3">
            {expectations.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-bold">✓</span>
                <span className="text-gray-700 text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle title={howToJoin.title} />
          <p className="text-center text-gray-600 text-lg mb-10">{howToJoin.text}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howToJoin.steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-700 text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={cta.title}
        text={cta.text}
        buttons={[{ label: cta.button.label, href: cta.button.href }]}
      />
    </>
  );
}
