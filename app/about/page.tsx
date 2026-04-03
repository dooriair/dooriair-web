import { AboutSection, HistorySection } from "../../src/components/doori/Features";
import AboutTabs from "../../src/components/doori/AboutTabs";

export const metadata = {
  title: "회사소개 — 주식회사 두리 DOORIAIR ENGINEERING",
  description: "2013년 설립된 공기조화 전문기업 주식회사 두리의 회사 소개와 연혁을 확인하세요.",
};

function PageBanner() {
  return (
    <div className="pt-[70px] flex-shrink-0 bg-[#050d20] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6 py-10">
        <span className="eng text-sky-400/50 text-[10px] tracking-[0.3em] font-semibold">/ ABOUT</span>
        <h1 className="text-3xl sm:text-4xl font-black text-white mt-2 leading-tight">
          회사소개 <span className="text-sky-300">&amp;</span> 연혁
        </h1>
        <p className="text-blue-300/45 text-sm mt-2">
          2013년 설립 이후 대한민국 공조 솔루션의 기준을 만들어온 두리의 이야기
        </p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="h-screen overflow-hidden flex flex-col bg-white">
      <PageBanner />
      <AboutTabs
        aboutContent={<AboutSection />}
        historyContent={<HistorySection />}
      />
    </main>
  );
}
