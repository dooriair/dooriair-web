"use client";

import { useState, useEffect, useRef } from "react";

/* ── Hooks ─────────────────────────────────────────────────────────── */
function useCounter(target: number, duration: number, active: boolean) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let cur = 0;
    const step = Math.max(1, Math.ceil(target / (duration / 16)));
    const t = setInterval(() => {
      cur = Math.min(cur + step, target);
      setN(cur);
      if (cur >= target) clearInterval(t);
    }, 16);
    return () => clearInterval(t);
  }, [active, target, duration]);
  return n;
}

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setV(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView: v };
}

/* ── Types ─────────────────────────────────────────────────────────── */
type FilterKey = "air" | "control" | "history" | "maintenance";

interface Project {
  year: string;
  client: string;
  item: string;
  qty: string;
  highlight?: boolean; /* 수량이 있는 주요 실적 */
  cat: FilterKey;
}

/* ── Data ─────────────────────────────────────────────────────────── */
const STATS: { target: number; suffix: string; unit: string; label: string; filter: FilterKey }[] = [
  { target: 85,  suffix: "+", unit: "건", label: "공기조화기·항온항습기", filter: "air" },
  { target: 122, suffix: "+", unit: "건", label: "자동제어·인버터 판넬",  filter: "control" },
  { target: 12,  suffix: "",  unit: "년", label: "업력",                   filter: "history" },
  { target: 150, suffix: "+", unit: "건", label: "유지보수 실적",           filter: "maintenance" },
];

const ALL_PROJECTS: Project[] = [
  /* ── 공기조화기·항온항습기 ───────────────────────────────────── */
  { year: "2013", client: "국립아시아문화전당",    item: "히트펌프 공기조화기 · 항온항습기",  qty: "7대",  highlight: true,  cat: "air" },
  { year: "2015", client: "장흥문예회관",          item: "히트펌프 공기조화기",               qty: "납품",                   cat: "air" },
  { year: "2016", client: "강동성심병원",          item: "히트펌프 공기조화기",               qty: "납품",                   cat: "air" },
  { year: "2017", client: "영풍전자 크린룸 1·2차", item: "직팽식 공기조화기",                 qty: "26대", highlight: true,  cat: "air" },
  { year: "2018", client: "영풍전자 크린룸 3차",   item: "직팽식 공기조화기",                 qty: "2대",  highlight: true,  cat: "air" },
  { year: "2018", client: "인천 롯데마트",         item: "항온항습기",                        qty: "4대",  highlight: true,  cat: "air" },
  { year: "2019", client: "롯데푸드 횡성공장",     item: "항온항습기",                        qty: "납품",                   cat: "air" },
  { year: "2020", client: "맥키코리아",            item: "직팽식 공기조화기",                 qty: "납품",                   cat: "air" },
  { year: "2021", client: "에크프로 비엠",         item: "공기조화기",                        qty: "납품",                   cat: "air" },
  { year: "2021", client: "삼화콘덴서",            item: "공기조화기",                        qty: "납품",                   cat: "air" },
  { year: "2022", client: "부산 지하철",           item: "직팽식 공기조화기",                 qty: "납품",                   cat: "air" },
  { year: "2023", client: "삼양사",               item: "직팽식 공기조화기",                  qty: "납품",                   cat: "air" },
  { year: "2024", client: "서울성모병원",          item: "히트펌프 공기조화기",               qty: "납품",                   cat: "air" },
  { year: "2024", client: "국립재활원",            item: "공기조화기",                        qty: "납품",                   cat: "air" },

  /* ── 자동제어·인버터 판넬 ────────────────────────────────────── */
  { year: "2013", client: "인제 오토테마파크",       item: "자동제어판넬",  qty: "8대",  highlight: true,  cat: "control" },
  { year: "2016", client: "현대자동차 남양연구소",   item: "자동제어판넬",  qty: "45대", highlight: true,  cat: "control" },
  { year: "2016", client: "판교밸리",               item: "인버터판넬",    qty: "32대", highlight: true,  cat: "control" },
  { year: "2018", client: "삼성SDI",               item: "자동제어판넬",   qty: "납품",                   cat: "control" },
  { year: "2018", client: "한화보은",               item: "자동제어판넬",  qty: "납품",                   cat: "control" },
  { year: "2019", client: "부산 해운대 LCT리조트",  item: "인버터판넬",    qty: "71대", highlight: true,  cat: "control" },
  { year: "2019", client: "CJ헬스케어 오송공장",    item: "인버터판넬",    qty: "21대", highlight: true,  cat: "control" },
  { year: "2020", client: "KIST 한국과학기술연구원", item: "인버터판넬",    qty: "20대", highlight: true,  cat: "control" },
  { year: "2021", client: "한국전력공사 신영주",     item: "자동제어판넬",  qty: "4대",  highlight: true,  cat: "control" },
  { year: "2022", client: "탄천종합운동장",          item: "자동제어판넬",  qty: "납품",                   cat: "control" },
  { year: "2022", client: "동원시스템즈 횡성공장",   item: "자동제어판넬",  qty: "납품",                   cat: "control" },
  { year: "2023", client: "판교 제2테크노밸리",      item: "자동제어판넬",  qty: "납품",                   cat: "control" },
  { year: "2023", client: "KT&G 광주공장",          item: "자동제어판넬",  qty: "납품",                   cat: "control" },
  { year: "2023", client: "KT&G 김천공장",          item: "자동제어판넬",  qty: "납품",                   cat: "control" },
  { year: "2023", client: "KT&G 신탄진공장",        item: "자동제어판넬",  qty: "납품",                   cat: "control" },
  { year: "2023", client: "조광페인트",             item: "자동제어판넬",   qty: "납품",                   cat: "control" },
  { year: "2023", client: "에스엘미러텍",           item: "자동제어판넬",   qty: "납품",                   cat: "control" },
  { year: "2024", client: "한국원자력연구원",        item: "자동제어판넬",  qty: "납품",                   cat: "control" },
  { year: "2024", client: "서울성모병원",            item: "자동제어판넬",  qty: "납품",                   cat: "control" },
  { year: "2024", client: "국립재활원",             item: "자동제어판넬",   qty: "납품",                   cat: "control" },
  { year: "2024", client: "제주한화우주센터",        item: "자동제어판넬",  qty: "납품",                   cat: "control" },
  { year: "2024", client: "한솔케미칼",             item: "자동제어판넬",   qty: "납품",                   cat: "control" },

  /* ── 업력 ───────────────────────────────────────────────────── */
  { year: "2013", client: "주식회사 두리 설립",       item: "경기도 시흥시 · 공조 전문기업 창업",         qty: "—", cat: "history" },
  { year: "2013", client: "첫 납품 달성",            item: "오토테마파크·국립아시아문화전당",              qty: "—", cat: "history" },
  { year: "2016", client: "대규모 실적 구축",         item: "현대자동차·영풍전자 등 대형 프로젝트 수주",   qty: "—", cat: "history" },
  { year: "2016", client: "해외 수출",               item: "인도네시아 KALSEL 공조 시스템",               qty: "—", cat: "history" },
  { year: "2018", client: "우수기술기업 인증",        item: "NICE D&B · 공기조화/냉동기계 분야",          qty: "—", cat: "history" },
  { year: "2019", client: "전국 네트워크 확장",       item: "LCT리조트·CJ헬스케어 등 전국 납품",          qty: "—", cat: "history" },
  { year: "2022", client: "대형 수주 연속",           item: "KT&G 3개 공장·판교테크노밸리 등",            qty: "—", cat: "history" },
  { year: "2024", client: "공장등록증 취득",          item: "한국산업단지공단 공식 공장 등록",              qty: "—", cat: "history" },
  { year: "2025", client: "현재진행 중",              item: "자동제어판넬 누적 120건+ · 계속 성장 중",     qty: "—", cat: "history" },

  /* ── 유지보수 ─────────────────────────────────────────────── */
  { year: "2013~", client: "전국 산업·공공시설",    item: "공기조화기 정기점검 및 보수",    qty: "150건+", highlight: true,  cat: "maintenance" },
  { year: "ongoing", client: "공장·병원·연구소",   item: "냉매 충전 및 필터 교체",         qty: "진행중",                    cat: "maintenance" },
  { year: "ongoing", client: "전국 다수",          item: "공조 시스템 진단 및 리모델링",   qty: "진행중",                    cat: "maintenance" },
  { year: "ongoing", client: "삼성SDI · KT&G 등", item: "대기업 공조설비 유지보수 계약",   qty: "진행중",                    cat: "maintenance" },
];

/* ── Stats Filter Buttons ──────────────────────────────────────────── */
function StatsFilters({
  active,
  onSelect,
}: {
  active: FilterKey;
  onSelect: (k: FilterKey) => void;
}) {
  const { ref, inView } = useInView();
  const counts = [
    useCounter(STATS[0].target, 1800, inView),
    useCounter(STATS[1].target, 2000, inView),
    useCounter(STATS[2].target, 1200, inView),
    useCounter(STATS[3].target, 2200, inView),
  ];

  return (
    <div
      ref={ref}
      className="flex-shrink-0 grid grid-cols-2 lg:grid-cols-4 gap-3 px-6 py-4
        max-w-7xl mx-auto w-full"
    >
      {STATS.map((s, i) => {
        const isActive = active === s.filter;
        return (
          <button
            key={s.filter}
            onClick={() => onSelect(s.filter)}
            className={`relative flex flex-col items-center py-4 px-3 text-center
              border transition-all duration-300 overflow-hidden group
              ${isActive
                ? "bg-sky-400/[0.10] border-sky-400/50 shadow-[0_0_20px_rgba(56,189,248,0.12)]"
                : "bg-white/[0.03] border-white/[0.08] hover:bg-white/[0.06] hover:border-sky-400/25"
              }`}
          >
            {/* Active top glow line */}
            <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/70 to-transparent
              transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`} />

            <div className={`text-3xl font-black eng tabular-nums transition-colors duration-200
              ${isActive ? "text-sky-300" : "text-white"}`}>
              {counts[i]}{s.suffix}
              <span className={`text-lg ml-1 ${isActive ? "text-sky-400" : "text-blue-300/60"}`}>{s.unit}</span>
            </div>
            <div className={`text-[11px] mt-1.5 tracking-wide transition-colors duration-200
              ${isActive ? "text-sky-300/80" : "text-blue-300/45"}`}>
              {s.label}
            </div>
          </button>
        );
      })}
    </div>
  );
}

/* ── Project Table ─────────────────────────────────────────────────── */
function ProjectTable({ filter }: { filter: FilterKey }) {
  const rows = ALL_PROJECTS.filter(p => p.cat === filter);

  const headers = filter === "history"
    ? ["연도", "이정표", "상세 내용"]
    : ["연도", "발주처 · 현장명", "품목", "수량"];

  return (
    <div key={filter} className="afu max-w-7xl mx-auto px-6 pb-8 w-full">
      {/* Header row */}
      <div className={`grid gap-3 px-4 py-2.5 mb-1
        text-[10px] font-bold tracking-[0.18em] uppercase text-sky-400/50 eng border-b border-white/[0.08]
        ${filter === "history" ? "grid-cols-[80px_1fr_2fr]" : "grid-cols-[64px_1fr_160px_72px]"}`}>
        {headers.map(h => <span key={h}>{h}</span>)}
      </div>

      {/* Data rows */}
      <div className="divide-y divide-white/[0.05]">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`grid gap-3 px-4 py-3 items-center
              transition-colors duration-150
              ${i % 2 === 0 ? "bg-white/[0.015]" : ""}
              hover:bg-sky-400/[0.04]
              ${filter === "history"
                ? "grid-cols-[80px_1fr_2fr]"
                : "grid-cols-[64px_1fr_160px_72px]"
              }`}
          >
            {/* 연도 */}
            <span className="eng text-sky-400/70 text-xs font-bold tracking-wider">{row.year}</span>

            {/* 발주처 */}
            <span className="text-white text-sm font-semibold leading-snug">{row.client}</span>

            {/* 품목 (or 상세 for history) */}
            {filter !== "history" && (
              <span className="text-blue-200/55 text-xs leading-relaxed hidden sm:block">{row.item}</span>
            )}
            {filter === "history" && (
              <span className="text-blue-200/55 text-xs leading-relaxed">{row.item}</span>
            )}

            {/* 수량 (not for history) */}
            {filter !== "history" && (
              <span className={`text-right text-sm font-bold tabular-nums eng
                ${row.highlight ? "text-sky-300" : "text-blue-400/40"}`}>
                {row.qty}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Row count footer */}
      <div className="text-right text-[10px] text-blue-400/25 eng tracking-wider mt-3 px-4">
        {rows.length} RECORDS
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────── */
export default function ProjectsPage() {
  const [filter, setFilter] = useState<FilterKey>("control");

  return (
    <main className="h-screen overflow-hidden flex flex-col bg-[#060f2a]">

      {/* Banner */}
      <div className="pt-[70px] flex-shrink-0 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-6">
          <span className="eng text-sky-400/50 text-[10px] tracking-[0.3em] font-semibold">/ PROJECTS</span>
          <h1 className="text-3xl sm:text-4xl font-black text-white mt-2">
            주요 실적 <span className="text-sky-300">&amp;</span> 납품 이력
          </h1>
          <p className="text-blue-300/40 text-xs mt-1.5">
            통계 버튼을 클릭하면 해당 카테고리의 상세 실적이 표시됩니다
          </p>
        </div>
      </div>

      {/* Clickable stats filter */}
      <StatsFilters active={filter} onSelect={setFilter} />

      {/* Divider */}
      <div className="flex-shrink-0 h-px bg-gradient-to-r from-transparent via-blue-700/40 to-transparent mx-6" />

      {/* Scrollable table */}
      <div className="flex-1 overflow-y-auto no-scrollbar pt-4">
        <ProjectTable filter={filter} />
      </div>
    </main>
  );
}
