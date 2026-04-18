"use client";

import { BrandLogo } from "./BrandLogo";

const navLinks = [
  { id: "services", label: "שירותים" },
  { id: "products", label: "מוצרים" },
  { id: "about", label: "אודות" },
  { id: "contact", label: "צור קשר" },
];

export function Header() {
  return (
    <header className="bg-[#0F172A] text-white h-[72px] sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
        <BrandLogo size="md" />

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-[#CBD5E1] hover:text-white text-sm font-medium transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button className="bg-[#F5A623] hover:bg-[#D4891A] text-white border-none px-[18px] py-2 rounded-md font-medium text-sm cursor-pointer transition-colors duration-150">
          התחל עכשיו
        </button>
      </div>
    </header>
  );
}
