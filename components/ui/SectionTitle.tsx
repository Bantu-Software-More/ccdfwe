interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({ title, subtitle, centered = true, className = "" }: SectionTitleProps) {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{title}</h2>
      {subtitle && <p className="text-gray-600 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
