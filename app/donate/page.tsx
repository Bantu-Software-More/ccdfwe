import type { Metadata } from "next";
import Link from "next/link";
import { donateContent } from "@/content/donate";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import CTASection from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support CCDFWE's mission by making a donation to help fund our community programs.",
};

export default function DonatePage() {
  const { hero, whyDonate, howToDonate, externalLink, cta } = donateContent;

  return (
    <>
      <PageHero title={hero.title} subtitle={hero.subtitle} />

      {/* Why Donate */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionTitle title={whyDonate.title} />
          <p className="text-center text-gray-600 text-lg mb-10">{whyDonate.text}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {whyDonate.impact.map((item) => (
              <div key={item.amount} className="bg-emerald-50 rounded-2xl p-6 text-center border border-emerald-100">
                <div className="text-3xl font-bold text-emerald-700 mb-2">{item.amount}</div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Donate */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <SectionTitle title={howToDonate.title} />
          <p className="text-center text-gray-600 text-lg mb-10">{howToDonate.text}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {howToDonate.methods.map((method) => (
              <div key={method.title} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                <div className="text-4xl mb-3">{method.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Donation Notice */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{externalLink.title}</h2>
          <p className="text-gray-600 text-lg mb-6">{externalLink.text}</p>
          {externalLink.link && (
            <Link
              href={externalLink.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              Donate Online
            </Link>
          )}
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
