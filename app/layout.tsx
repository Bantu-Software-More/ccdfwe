import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "CCDFWE",
    "Congolese community",
    "Dallas Fort Worth",
    "DFW",
    "Congolese diaspora",
    "Communauté Congolaise",
    "Congolese association Texas",
    "African community DFW",
    "Congolese cultural heritage",
    "women empowerment",
    "community development",
    "cultural preservation",
    "Congo",
    "DR Congo",
    "North Texas",
  ],
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} – ${siteConfig.fullName}`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/home/hero.jpg",
        width: 1200,
        height: 630,
        alt: "CCDFWE – Congolese Community of Dallas Fort Worth and Surroundings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} – ${siteConfig.fullName}`,
    description: siteConfig.description,
    images: ["/images/home/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white text-gray-900 font-sans antialiased">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
