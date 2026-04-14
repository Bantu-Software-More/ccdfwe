import Image from "next/image";
import { withBasePath } from "@/lib/basePath";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export default function TeamMemberCard({ name, role, bio, image }: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 text-center p-6 hover:shadow-md transition-shadow">
      <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 bg-emerald-100">
        <Image
          src={withBasePath(image)}
          alt={`Photo of ${name}`}
          fill
          className="object-cover"
          sizes="96px"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <p className="text-emerald-700 font-medium text-sm mb-2">{role}</p>
      <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
    </div>
  );
}
