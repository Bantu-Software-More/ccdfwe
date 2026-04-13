import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to the CCDFWE members portal.",
};

export default function LoginPage() {
  return (
    <>
      <PageHero title="Login" subtitle="Access the CCDFWE members area." />
      <section className="py-20 px-4 bg-white">
        <div className="max-w-md mx-auto text-center">
          <div className="text-6xl mb-6">🔑</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Member Login – Coming Soon
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            The CCDFWE members portal is under development. Login functionality will be
            available in a future update.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/members"
              className="bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              Members Area
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
