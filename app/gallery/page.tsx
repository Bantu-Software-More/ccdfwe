import type { Metadata } from "next";
import { loadGalleryData, getCategories } from "@/lib/gallery";
import PageHero from "@/components/ui/PageHero";
import GalleryGrid from "@/components/ui/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from CCDFWE community events and activities.",
};

export default function GalleryPage() {
  const galleryData = loadGalleryData();
  const categories = getCategories(galleryData);

  return (
    <>
      <PageHero title="Gallery" subtitle="A glimpse of our community in action." />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <GalleryGrid images={galleryData.images} categories={categories} />
        </div>
      </section>
    </>
  );
}
