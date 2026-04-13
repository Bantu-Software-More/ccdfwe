import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-bold text-emerald-100 mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 text-lg mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="border-2 border-emerald-700 text-emerald-700 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
