import type { Metadata } from "next";
import { activitiesContent } from "@/content/activities";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import ActivityCard from "@/components/ui/ActivityCard";

export const metadata: Metadata = {
  title: "Activities – Congolese Cultural Events & Programs in DFW",
  description: "Explore Congolese cultural celebrations, women's empowerment workshops, youth mentorship, and community programs run by CCDFWE in Dallas-Fort Worth.",
};

export default function ActivitiesPage() {
  const { hero, intro, activities } = activitiesContent;

  return (
    <>
      <PageHero title={hero.title} subtitle={hero.subtitle} />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <SectionTitle title={intro.title} />
          <p className="text-gray-600 text-lg leading-relaxed">{intro.text}</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <ActivityCard key={activity.title} {...activity} />
          ))}
        </div>
      </section>
    </>
  );
}
