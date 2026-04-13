import type { Metadata } from "next";
import { contactContent } from "@/content/contact";
import { siteConfig } from "@/content/site";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with CCDFWE. We would love to hear from you.",
};

export default function ContactPage() {
  const { hero, details } = contactContent;

  return (
    <>
      <PageHero title={hero.title} subtitle={hero.subtitle} />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact details */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <dl className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl mt-1">📧</span>
                <div>
                  <dt className="font-medium text-gray-900">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${details.email}`}
                      className="text-emerald-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                    >
                      {details.email}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl mt-1">📞</span>
                <div>
                  <dt className="font-medium text-gray-900">Phone</dt>
                  <dd>
                    <a
                      href={`tel:${details.phone}`}
                      className="text-emerald-700 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                    >
                      {details.phone}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl mt-1">📍</span>
                <div>
                  <dt className="font-medium text-gray-900">Address</dt>
                  <dd className="text-gray-600">{details.address}</dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-2xl mt-1">🕐</span>
                <div>
                  <dt className="font-medium text-gray-900">Office Hours</dt>
                  <dd className="text-gray-600">{details.hours}</dd>
                </div>
              </div>
            </dl>

            {/* Social links */}
            <div className="mt-8">
              <h3 className="font-semibold text-gray-900 mb-3">Follow Us</h3>
              <div className="flex gap-4">
                {Object.entries(siteConfig.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-emerald-700 capitalize text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
