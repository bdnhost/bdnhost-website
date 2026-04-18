import { BrandLogo } from "./BrandLogo";

const columns = [
  { title: "מוצרים", links: ["EduManage", "CompanyRadar", "CRM4BIZ", "Israel Estates"] },
  { title: "חברה", links: ["אודות", "קריירה", "בלוג", "עיתונות"] },
  { title: "תמיכה", links: ["מרכז עזרה", "סטטוס", "תיעוד API", "צור קשר"] },
  { title: "משפטי", links: ["תנאי שימוש", "פרטיות", "אבטחה", "עוגיות"] },
];

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-[#CBD5E1]">
      <div className="max-w-[1280px] mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10">
          <div>
            <BrandLogo size="md" />
            <p className="mt-3 text-[13px] leading-[1.7] text-[#94A3B8] max-w-[320px]">
              חברת טכנולוגיה ישראלית הבונה פתרונות AI לעסקים — LMS, BI, CRM ונדל״ן.
            </p>
            <div className="mt-4 text-[13px] text-[#94A3B8]">
              <div>info@bdnhost.net</div>
              <div className="mt-1">bdnhost.net</div>
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-bold text-white mb-3.5 tracking-wide uppercase">
                {col.title}
              </div>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#CBD5E1] text-sm no-underline hover:text-white transition-colors duration-150"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 text-xs text-[#64748B] flex justify-between">
          <span>&copy; 2026 BDNHOST Group. כל הזכויות שמורות.</span>
          <span>עשוי בישראל</span>
        </div>
      </div>
    </footer>
  );
}
