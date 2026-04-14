import type { Metadata } from "next";
import { loadGalleryData, getCategories } from "@/lib/gallery";
import PageHero from "@/components/ui/PageHero";
import GalleryGrid from "@/components/ui/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery – Photos from the Congolese Community of DFW",
  description: "Browse photos from CCDFWE's Congolese cultural celebrations, community events, and empowerment programs in the Dallas-Fort Worth area.",
};

export default function GalleryPage() {
  const galleryData = loadGalleryData();
  const categories = getCategories(galleryData);

  return (
    <>
      <PageHero title="Gallery" subtitle="A glimpse of the Congolese community of Dallas-Fort Worth in action." />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <GalleryGrid images={galleryData.images} categories={categories} />
        </div>
      </section>
    </>
  );
}
