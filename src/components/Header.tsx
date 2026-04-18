import { BrandLogo } from "./BrandLogo";
import { Button } from "./Button";

const navLinks = [
  { label: "שירותים", href: "#services" },
  { label: "מוצרים", href: "#products" },
  { label: "אודות", href: "#about" },
  { label: "צור קשר", href: "#contact" },
];

export function Header() {
  return (
    <header className="bg-[#0F172A] text-white h-[72px] sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
        <BrandLogo size="md" />

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button variant="secondary" size="sm">
          התחל עכשיו
        </Button>
      </div>
    </header>
  );
}
