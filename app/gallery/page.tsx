import type { Metadata } from "next";
import { galleryContent } from "@/content/gallery";
import PageHero from "@/components/ui/PageHero";
import GalleryGrid from "@/components/ui/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from CCDFWE community events and activities.",
};

export default function GalleryPage() {
  const { hero, images, categories } = galleryContent;

  return (
    <>
      <PageHero title={hero.title} subtitle={hero.subtitle} />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <GalleryGrid images={images} categories={categories} />
        </div>
      </section>
    </>
  );
}
