"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { navLinks } from "@/content/navigation";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isOpen) return null;

  return (
    <nav
      className="md:hidden bg-white border-t border-gray-100 py-4 px-4 animate-slide-down"
      aria-label="Mobile navigation"
    >
      <ul className="flex flex-col gap-1">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block px-4 py-2 text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              onClick={onClose}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li className="mt-2">
          <Link
            href="/donate"
            className="block text-center bg-emerald-700 text-white px-4 py-2 rounded-full font-semibold hover:bg-emerald-800 transition-colors"
            onClick={onClose}
          >
            Donate
          </Link>
        </li>
      </ul>
    </nav>
  );
}
