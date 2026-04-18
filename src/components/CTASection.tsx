export function CTASection() {
  return (
    <section id="contact" className="bg-[#0B4EA2] text-white">
      <div className="max-w-[1280px] mx-auto px-6 py-[72px] flex items-center justify-between gap-8 flex-wrap">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight mb-2">
            מוכן להתחיל?
          </h2>
          <p className="text-lg text-[#BFDBFE] max-w-[520px]">
            14 יום ניסיון חינם — התחל תוך שתי דקות, בלי כרטיס אשראי.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="bg-[#F5A623] hover:bg-[#D4891A] text-white px-7 py-3.5 rounded-md font-medium text-base transition-colors duration-150">
            התחל עכשיו
          </button>
          <button className="bg-transparent text-white border border-white/40 px-7 py-3.5 rounded-md font-medium text-base">
            דבר עם מכירות
          </button>
        </div>
      </div>
    </section>
  );
}
