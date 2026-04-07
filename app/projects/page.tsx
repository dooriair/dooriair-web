"use client";

import { useState } from "react";

/* ── Types ─────────────────────────────────────────────────────────── */
type TabKey = "air" | "precision" | "control";

interface Project {
  date: string;   /* YYYY-MM 또는 YYYY 형식 — 최신순 정렬 기준 */
  client: string;
  item: string;
  qty: string;
  highlight?: boolean;
  cat: TabKey;
}

/* ── 실적 데이터 ────────────────────────────────────────────────────
   date는 YYYY-MM 또는 YYYY 형식으로 입력하세요.
   정렬은 date 내림차순(최신순) 자동 처리됩니다.
──────────────────────────────────────────────────────────────────── */
const ALL_PROJECTS: Project[] = [

  /* ════════════ 공조기 ════════════ */
  { date: "2024", client: "서울성모병원",            item: "히트펌프 공기조화기",               qty: "납품",          cat: "air" },
  { date: "2024", client: "국립재활원",              item: "공기조화기",                        qty: "납품",          cat: "air" },
  { date: "2023", client: "삼양사",                  item: "직팽식 공기조화기",                 qty: "납품",          cat: "air" },
  { date: "2022", client: "부산 지하철",             item: "직팽식 공기조화기",                 qty: "납품",          cat: "air" },
  { date: "2021", client: "에코프로 비엠",           item: "공기조화기",                        qty: "납품",          cat: "air" },
  { date: "2021", client: "삼화콘덴서",              item: "공기조화기",                        qty: "납품",          cat: "air" },
  { date: "2020", client: "맥키코리아",              item: "직팽식 공기조화기",                 qty: "납품",          cat: "air" },
  { date: "2019", client: "롯데푸드 횡성공장",       item: "히트펌프 공기조화기",               qty: "납품",          cat: "air" },
  { date: "2018", client: "영풍전자 크린룸 3차",     item: "직팽식 공기조화기",                 qty: "2대",  highlight: true, cat: "air" },
  { date: "2017", client: "영풍전자 크린룸 1·2차",  item: "직팽식 공기조화기",                 qty: "26대", highlight: true, cat: "air" },
  { date: "2016", client: "강동성심병원",            item: "히트펌프 공기조화기",               qty: "납품",          cat: "air" },
  { date: "2015", client: "장흥문예회관",            item: "히트펌프 공기조화기",               qty: "납품",          cat: "air" },
  { date: "2013", client: "국립아시아문화전당",      item: "히트펌프 공기조화기",               qty: "납품",          cat: "air" },

  /* ════════════ 항온항습기 ════════════ */
  { date: "2024", client: "국립재활원",              item: "항온항습기",                        qty: "납품",          cat: "precision" },
  { date: "2023", client: "대구 SSLM",              item: "항온항습기",                        qty: "납품",          cat: "precision" },
  { date: "2021", client: "삼화콘덴서",              item: "항온항습기",                        qty: "납품",          cat: "precision" },
  { date: "2019", client: "롯데푸드 횡성공장",       item: "항온항습기",                        qty: "납품",          cat: "precision" },
  { date: "2018", client: "인천 롯데마트",           item: "항온항습기",                        qty: "4대",  highlight: true, cat: "precision" },
  { date: "2013", client: "국립아시아문화전당",      item: "항온항습기",                        qty: "7대",  highlight: true, cat: "precision" },

  /* ════════════ 자동제어 및 기타 ════════════ */
  { date: "2024", client: "제주한화우주센터",        item: "자동제어 판넬",                     qty: "납품",          cat: "control" },
  { date: "2024", client: "한솔케미칼",              item: "자동제어 판넬",                     qty: "납품",          cat: "control" },
  { date: "2024", client: "한국원자력연구원",        item: "자동제어 판넬",                     qty: "납품",          cat: "control" },
  { date: "2024", client: "서울성모병원",            item: "자동제어 판넬",                     qty: "납품",          cat: "control" },
  { date: "2024", client: "국립재활원",              item: "자동제어 판넬",                     qty: "납품",          cat: "control" },
  { date: "2023", client: "판교 제2테크노밸리",      item: "자동제어 판넬",                     qty: "납품",          cat: "control" },
  { date: "2023", client: "KT&G 광주공장",           item: "자동제어 판넬",                     qty: "납품",          cat: "control" },
  { date: "2023", client: "KT&G 김천공장",           item: "자동제어 판넬",                     qty: "납품",          cat: "control" },
  { date: "2023", client: "KT&G 신탄진공장",         item: "자동제어 판넬",                     qty: "납품",          cat: "control" },
  { date: "2023", client: "조광페인트",              item: "자동제어 판넬",                     qty: "납품",          cat: "control" },
  { date: "2023", client: "에스엘미러텍",            item: "자동제어 판넬",                     qty: "납품",          cat: "control" },
  { date: "2022", client: "탄천종합운동장",          item: "자동제어 판넬",                     qty: "납품",          cat: "control" },
  { date: "2022", client: "동원시스템즈 횡성공장",   item: "자동제어 판넬",                     qty: "납품",          cat: "control" },
  { date: "2021", client: "한국전력공사 신영주",     item: "자동제어 판넬",                     qty: "4대",  highlight: true, cat: "control" },
  { date: "2020", client: "KIST 한국과학기술연구원", item: "인버터 판넬",                       qty: "20대", highlight: true, cat: "control" },
  { date: "2019", client: "부산 해운대 LCT리조트",  item: "인버터 판넬",                       qty: "71대", highlight: true, cat: "control" },
  { date: "2019", client: "CJ헬스케어 오송공장",    item: "인버터 판넬",                       qty: "21대", highlight: true, cat: "control" },
  { date: "2018", client: "삼성SDI",                item: "자동제어 판넬",                     qty: "납품",          cat: "control" },
  { date: "2018", client: "한화보은",               item: "자동제어 판넬",                     qty: "납품",          cat: "control" },
  { date: "2016", client: "현대자동차 남양연구소",   item: "자동제어 판넬",                     qty: "45대", highlight: true, cat: "control" },
  { date: "2016", client: "판교밸리",               item: "인버터 판넬",                       qty: "32대", highlight: true, cat: "control" },
  { date: "2013", client: "인제 오토테마파크",       item: "자동제어 판넬",                     qty: "8대",  highlight: true, cat: "control" },
];

/* ── 탭 정의 ───────────────────────────────────────────────────────── */
const TABS: { key: TabKey; label: string; sub: string }[] = [
  { key: "air",       label: "공조기",             sub: "AHU / Heat Pump" },
  { key: "precision", label: "항온항습기",          sub: "Precision A/C" },
  { key: "control",   label: "자동제어 및 기타",    sub: "Control Panel" },
];

/* ── 요약 카운터 ─────────────────────────────────────────────────── */
const SUMMARY = [
  { value: "85+",  label: "공조기 납품" },
  { value: "20+",  label: "항온항습기 납품" },
  { value: "120+", label: "제어 판넬 납품" },
  { value: "150+", label: "유지보수 실적" },
];

/* ── Project Table ─────────────────────────────────────────────────── */
function ProjectTable({ tab }: { tab: TabKey }) {
  // date 내림차순(최신순) 정렬
  const rows = ALL_PROJECTS
    .filter(p => p.cat === tab)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 w-full">

      {/* 헤더 */}
      <div className="grid grid-cols-[72px_1fr_auto] sm:grid-cols-[88px_1fr_200px_80px] gap-3
        px-4 sm:px-5 py-3 mb-1
        text-[11px] font-bold tracking-[0.18em] uppercase
        text-sky-400/50 eng border-b border-white/[0.08]">
        <span>연도</span>
        <span>발주처 · 현장명</span>
        <span className="hidden sm:block">품목</span>
        <span className="text-right">수량</span>
      </div>

      {/* 데이터 행 */}
      <div className="divide-y divide-white/[0.04]">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-[72px_1fr_auto] sm:grid-cols-[88px_1fr_200px_80px]
              gap-3 px-4 sm:px-5 py-4 items-center
              transition-colors duration-150
              ${i % 2 === 0 ? "bg-white/[0.012]" : ""}
              hover:bg-sky-400/[0.04]`}
          >
            {/* 연도 */}
            <span className="eng text-sky-400/70 text-[13px] font-bold tracking-wider">
              {row.date.length === 7 ? row.date.slice(0, 4) : row.date}
            </span>

            {/* 발주처 */}
            <div className="min-w-0">
              <p className="text-white text-[15px] font-bold leading-snug truncate">
                {row.client}
              </p>
              {/* 모바일: 품목을 클라이언트 아래에 표시 */}
              <p className="sm:hidden text-blue-200/45 text-[12px] leading-relaxed mt-0.5 truncate">
                {row.item}
              </p>
            </div>

            {/* 품목 (sm 이상) */}
            <span className="hidden sm:block text-blue-200/50 text-[14px] leading-relaxed">
              {row.item}
            </span>

            {/* 수량 */}
            <span className={`text-right text-[15px] font-extrabold tabular-nums eng whitespace-nowrap
              ${row.highlight ? "text-sky-300" : "text-blue-400/35"}`}>
              {row.qty}
            </span>
          </div>
        ))}
      </div>

      {/* 하단 */}
      <div className="flex items-center justify-between mt-4 px-4 sm:px-5">
        <span className="text-blue-400/25 text-[11px] eng tracking-wider">
          총 {rows.length}건 · 최신순 정렬
        </span>
        <span className="text-blue-400/20 text-[11px]">
          * 비공개 실적 미포함
        </span>
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────── */
export default function ProjectsPage() {
  const [tab, setTab] = useState<TabKey>("control");

  return (
    <main className="h-screen overflow-hidden flex flex-col bg-[#060f2a]">

      {/* ── Banner ── */}
      <div className="pt-[70px] flex-shrink-0 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-5">
          <span className="eng text-sky-400/50 text-[10px] tracking-[0.3em] font-semibold">/ PROJECTS</span>
          <h1 className="text-3xl sm:text-4xl font-black text-white mt-1.5">
            주요 실적 <span className="text-sky-300">&amp;</span> 납품 이력
          </h1>
          <p className="text-blue-300/40 text-[13px] mt-1">
            20년 이상의 현장 경험 · 전국 납품 실적 · 최신순 정렬
          </p>
        </div>
      </div>

      {/* ── 요약 카운터 바 ── */}
      <div className="flex-shrink-0 grid grid-cols-4 divide-x divide-white/[0.07]
        border-y border-white/[0.07] max-w-7xl mx-auto w-full">
        {SUMMARY.map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center py-3 px-2">
            <span className="text-sky-300 text-[18px] sm:text-[22px] font-black eng tabular-nums">
              {value}
            </span>
            <span className="text-blue-300/40 text-[10px] sm:text-[11px] tracking-wide mt-0.5 text-center">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* ── 탭 ── */}
      <div className="flex-shrink-0 flex border-b border-white/[0.08] max-w-7xl mx-auto w-full px-4 sm:px-6 pt-4 gap-1">
        {TABS.map(t => {
          const active = tab === t.key;
          return (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`relative flex flex-col items-center px-4 sm:px-6 pb-3 pt-2
                text-center transition-all duration-200 group
                ${active ? "text-sky-300" : "text-blue-300/40 hover:text-blue-200/70"}`}
            >
              <span className="text-[14px] sm:text-[15px] font-bold leading-tight">{t.label}</span>
              <span className="text-[10px] eng tracking-wider mt-0.5 hidden sm:block opacity-60">
                {t.sub}
              </span>
              {/* 활성 언더라인 */}
              <span className={`absolute bottom-0 inset-x-0 h-[2px] rounded-full
                transition-all duration-200
                ${active
                  ? "bg-sky-400"
                  : "bg-transparent group-hover:bg-sky-400/30"}`}
              />
            </button>
          );
        })}
      </div>

      {/* ── 테이블 ── */}
      <div className="flex-1 overflow-y-auto no-scrollbar pt-4">
        <ProjectTable tab={tab} />
      </div>
    </main>
  );
}
