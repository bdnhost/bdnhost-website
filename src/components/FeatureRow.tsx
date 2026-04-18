const features = [
  {
    title: "מופעל על ידי AI",
    desc: "מנוע יחיד, מודלים מובילים, תוצאות מיידיות.",
  },
  {
    title: "מאובטח ברמה ארגונית",
    desc: "הצפנה מקצה לקצה, עמידה בתקני ISO ו‑GDPR.",
  },
  {
    title: "עברית מקומית",
    desc: "RTL מלא, תמיכה בעברית ואנגלית, חשבוניות מע״מ.",
  },
  {
    title: "מהיר מהתחרות",
    desc: "זמן תגובה ממוצע מתחת לשנייה. בכל דפדפן, בכל מכשיר.",
  },
];

export function FeatureRow() {
  return (
    <section
      id="services"
      className="bg-white border-t border-b border-[#E2E8F0]"
    >
      <div className="max-w-[1280px] mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((it, i) => (
          <div key={i}>
            <div className="w-10 h-10 rounded-lg bg-[#FFF8EB] text-[#B36D11] flex items-center justify-center mb-4">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h4 className="text-lg font-bold mb-2">{it.title}</h4>
            <p className="text-sm text-[#64748B] leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
