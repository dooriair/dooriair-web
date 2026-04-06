import type { Metadata } from "next";
import "./globals.css";
import Header from "../src/components/doori/Header";
import Footer from "../src/components/doori/Footer";

export const metadata: Metadata = {
  title: "주식회사 두리 — DOORIAIR ENGINEERING | 공기조화 전문기업",
  description:
    "히트펌프·직팽식 공기조화기, 항온항습기, 자동제어·인버터 판넬 설계·제작 전문기업. 2013년 설립, 현대자동차·삼성SDI 등 주요 납품처 보유.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&family=Barlow+Condensed:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col pb-14">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
