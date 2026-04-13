import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Members Area – CCDFWE Community Portal",
  description: "Member access area for CCDFWE Congolese community members in Dallas-Fort Worth.",
};

export default function MembersPage() {
  return (
    <>
      <PageHero
        title="Members Area"
        subtitle="A secure members portal is coming soon."
      />
      <section className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl mb-6">🔒</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Members Portal – Coming Soon
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            We are working on building a dedicated members area where CCDFWE members
            can access resources, connect with each other, and stay informed. Check back
            soon for updates.
          </p>
          <p className="text-gray-600 mb-8">
            In the meantime, reach out to us directly for any member-specific inquiries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              Contact Us
            </Link>
            <Link
              href="/"
              className="border-2 border-emerald-700 text-emerald-700 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
