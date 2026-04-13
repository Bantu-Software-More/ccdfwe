import type { Metadata } from "next";
import { aboutContent } from "@/content/about";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";
import TeamMemberCard from "@/components/ui/TeamMemberCard";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about CCDFWE's mission, vision, goals, and the team behind the work.",
};

export default function AboutPage() {
  const { hero, overview, mission, vision, goals, team } = aboutContent;

  return (
    <>
      <PageHero title={hero.title} subtitle={hero.subtitle} />

      {/* Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title={overview.title} centered={false} />
          <p className="text-gray-600 text-lg leading-relaxed">{overview.text}</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-emerald-800 mb-4">{mission.title}</h2>
            <p className="text-gray-600 leading-relaxed">{mission.text}</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-emerald-800 mb-4">{vision.title}</h2>
            <p className="text-gray-600 leading-relaxed">{vision.text}</p>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title={goals.title} centered={false} />
          <ul className="space-y-3">
            {goals.items.map((goal, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-bold">
                  ✓
                </span>
                <span className="text-gray-700 text-lg">{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title={team.title} subtitle={team.subtitle} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.members.map((member) => (
              <TeamMemberCard key={member.role} {...member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
