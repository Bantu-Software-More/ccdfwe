import Link from "next/link";

interface CTAButton {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

interface CTASectionProps {
  title: string;
  text?: string;
  buttons: CTAButton[];
  className?: string;
}

export default function CTASection({ title, text, buttons, className = "" }: CTASectionProps) {
  return (
    <section className={`bg-emerald-700 text-white py-16 px-4 ${className}`}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        {text && <p className="text-emerald-100 text-lg mb-8">{text}</p>}
        <div className="flex flex-wrap justify-center gap-4">
          {buttons.map((btn) => (
            <Link
              key={btn.href}
              href={btn.href}
              className={
                btn.variant === "secondary"
                  ? "border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-emerald-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  : "bg-white text-emerald-700 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              }
            >
              {btn.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
