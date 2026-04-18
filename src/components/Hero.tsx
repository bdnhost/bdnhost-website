"use client";

export function Hero() {
  return (
    <section className="py-20 px-6 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block bg-[#FFF8EB] text-[#B36D11] text-xs font-bold tracking-wide px-2.5 py-1 rounded-sm mb-5">
            THE BDNHOST PLATFORM
          </div>
          <h1 className="text-[56px] font-extrabold tracking-tight leading-[1.1] mb-5">
            פתרונות <span className="text-[#0B4EA2]">חכמים</span> לעסק שלך,
            <br />
            מונעי <span className="text-[#F5A623]">בינה מלאכותית</span>
          </h1>
          <p className="text-xl text-[#64748B] leading-relaxed mb-8 max-w-[520px]">
            ארבע מערכות שנבנו מאפס כדי לחסוך לך זמן, לייצר תובנות ולהאיץ את
            הצמיחה — LMS, BI, CRM ונדל״ן.
          </p>
          <div className="flex gap-3">
            <button className="bg-[#F5A623] hover:bg-[#D4891A] text-white px-7 py-3.5 rounded-md font-medium text-base transition-colors duration-150">
              התחל ניסיון חינם
            </button>
            <button className="bg-transparent text-[#0B4EA2] border border-[#0B4EA2] hover:bg-[#EFF6FF] px-7 py-3.5 rounded-md font-medium text-base transition-colors duration-150">
              תאם הדגמה
            </button>
          </div>
          <div className="mt-6 flex gap-5 text-[13px] text-[#64748B]">
            <span>&#10003; ללא כרטיס אשראי</span>
            <span>&#10003; 14 יום חינם</span>
            <span>&#10003; תמיכה בעברית</span>
          </div>
        </div>
        <HeroMockup />
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-xl shadow-xl overflow-hidden">
      <div className="bg-[#F8FAFC] px-3.5 py-2.5 border-b border-[#E2E8F0] flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] inline-block" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] inline-block" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] inline-block" />
        <span className="ms-3 text-xs text-[#64748B]">
          CompanyRadar · לוח בקרה
        </span>
      </div>
      <div className="p-5 grid grid-cols-2 gap-3.5">
        <div className="col-span-2 bg-[#EFF6FF] rounded-lg p-3.5">
          <div className="text-[11px] text-[#64748B] mb-1">
            הכנסות — רבעון נוכחי
          </div>
          <div className="text-2xl font-extrabold text-[#072E62]">
            ₪ 1,284,900
          </div>
          <div className="h-10 mt-2.5 rounded overflow-hidden opacity-90">
            <div className="h-full w-[60%] bg-[#0B4EA2] inline-block" />
            <div className="h-full w-[40%] bg-[#CBD5E1] inline-block" />
          </div>
        </div>
        <MiniStat label="לקוחות פעילים" value="1,240" delta="+12%" />
        <MiniStat label="עסקאות החודש" value="318" delta="+8%" />
        <MiniStat label="זמן תגובה ממוצע" value='2.4 ש&apos;' delta="-18%" accent />
        <MiniStat label="שביעות רצון" value="94%" delta="+3%" />
      </div>
    </div>
  );
}

function MiniStat({
  label,
  value,
  delta,
  accent,
}: {
  label: string;
  value: string;
  delta: string;
  accent?: boolean;
}) {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-lg p-3">
      <div className="text-[10px] text-[#64748B] mb-1">{label}</div>
      <div className="text-lg font-bold text-[#1E293B]">{value}</div>
      <div
        className={`text-[10px] font-medium mt-0.5 ${
          accent ? "text-[#F5A623]" : "text-[#10B981]"
        }`}
      >
        {delta}
      </div>
    </div>
  );
}
