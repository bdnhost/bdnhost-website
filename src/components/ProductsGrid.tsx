"use client";

import { useState } from "react";

const products = [
  {
    id: "edu",
    tag: "LMS",
    title: "EduManage",
    desc: "פלטפורמת למידה ארגונית עם מנוע AI לבניית קורסים, מעקב התקדמות ותובנות על לומדים.",
  },
  {
    id: "radar",
    tag: "BI",
    title: "CompanyRadar",
    desc: "בינה עסקית בזמן אמת — מחברת את הנתונים שלך ומציגה את המה, הלמה והאיך בלוח אחד.",
  },
  {
    id: "crm",
    tag: "CRM",
    title: "CRM4BIZ",
    desc: "ניהול לקוחות, ליווי עסקאות ואוטומציה שיווקית — מותאמים לעסקים ישראליים.",
  },
  {
    id: "estate",
    tag: "Real Estate",
    title: "Israel Estates",
    desc: "פלטפורמת נדל״ן מבוססת AI — תמחור, התאמה וניהול נכסים בשוק הישראלי.",
  },
];

export function ProductsGrid() {
  const [selected, setSelected] = useState("edu");

  return (
    <section id="products" className="py-16 px-6 max-w-[1280px] mx-auto">
      <div className="text-center mb-12">
        <div className="text-xs font-bold tracking-[0.1em] uppercase text-[#64748B] mb-2">
          המוצרים שלנו
        </div>
        <h2 className="text-4xl font-bold mb-3">ארבע מערכות, מנוע אחד</h2>
        <p className="text-lg text-[#64748B] max-w-[600px] mx-auto">
          כל המוצרים משתמשים באותה תשתית AI ומתחברים זה לזה בלחיצה.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((p) => (
          <div
            key={p.id}
            onClick={() => setSelected(p.id)}
            className={`bg-white rounded-lg p-6 cursor-pointer flex flex-col gap-3 min-h-[200px] transition-all duration-250 ${
              selected === p.id
                ? "border-2 border-[#0B4EA2] shadow-xl"
                : "border border-[#E2E8F0] shadow-md hover:shadow-xl"
            }`}
          >
            <div className="w-11 h-11 rounded-lg bg-[#EFF6FF] text-[#0B4EA2] flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 12h6" />
              </svg>
            </div>
            <div className="inline-block w-fit bg-[#FFF8EB] text-[#B36D11] text-[11px] font-medium px-2 py-0.5 rounded-sm">
              {p.tag}
            </div>
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="text-sm text-[#64748B] leading-relaxed">{p.desc}</p>
            <div className="mt-auto text-[#0B4EA2] text-[13px] font-medium">
              למד עוד
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
