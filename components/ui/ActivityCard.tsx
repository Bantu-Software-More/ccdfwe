import Image from "next/image";
import { withBasePath } from "@/lib/basePath";

interface ActivityCardProps {
  title: string;
  description: string;
  image: string;
  category?: string;
}

export default function ActivityCard({ title, description, image, category }: ActivityCardProps) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="relative h-48 bg-emerald-100 overflow-hidden">
        <Image
          src={withBasePath(image)}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {category && (
          <span className="absolute top-3 left-3 bg-emerald-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </article>
  );
}
