import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "BDNHOST — פתרונות AI לעסקים",
  description:
    "חב��ת טכנולוגיה ישראלית הבונה פתרונ��ת AI לעסקים — LMS, BI, CRM ונדל״��.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
