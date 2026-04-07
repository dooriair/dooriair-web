"use client";

import { useEffect, useState } from "react";
import { ALL_PROJECTS, Project, SUMMARY, TABS, TabKey } from "@/src/data/projectsData";

const PAGE_SIZE = 18;

/* ── Project Table ─────────────────────────────────────────────────── */
function ProjectTable({ tab, currentPage, onPageChange }: { tab: TabKey; currentPage: number; onPageChange: (page: number) => void; }) {
  // date 내림차순(최신순) 정렬
  const rows = ALL_PROJECTS
    .filter(p => p.cat === tab)
    .sort((a, b) => b.date.localeCompare(a.date));

  const pageCount = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
  const pageRows = rows.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 w-full">

      {/* 헤더 */}
      <div className="grid grid-cols-[72px_1fr_auto] sm:grid-cols-[88px_1fr_220px_90px] gap-3
        px-4 sm:px-5 py-4 mb-1
        text-[14px] font-bold tracking-[0.18em] uppercase
        text-sky-400/50 eng border-b border-white/[0.08]">
        <span>연도</span>
        <span>발주처 · 현장명</span>
        <span className="hidden sm:block">품목</span>
        <span className="text-right">수량</span>
      </div>

      {/* 데이터 행 */}
      <div className="divide-y divide-white/[0.04]">
        {pageRows.map((row, i) => (
          <div
            key={`${row.client}-${i}-${row.date}`}
            className={`grid grid-cols-[72px_1fr_auto] sm:grid-cols-[88px_1fr_220px_90px]
              gap-3 px-4 sm:px-5 py-5 items-center
              transition-colors duration-150
              ${i % 2 === 0 ? "bg-white/[0.012]" : ""}
              hover:bg-sky-400/[0.04]`}>
            {/* 연도 */}
            <span className="eng text-sky-400/70 text-[16px] font-bold tracking-wider">
              {row.date.length === 7 ? row.date.slice(0, 4) : row.date}
            </span>

            {/* 발주처 */}
            <div className="min-w-0">
              <p className="text-white text-[20px] font-bold leading-snug truncate">
                {row.client}
              </p>
              {/* 모바일: 품목을 클라이언트 아래에 표시 */}
              <p className="sm:hidden text-blue-200/45 text-[15px] leading-relaxed mt-1 truncate">
                {row.item}
              </p>
            </div>

            {/* 품목 (sm 이상) */}
            <span className="hidden sm:block text-blue-200/50 text-[18px] leading-relaxed">
              {row.item}
            </span>

            {/* 수량 */}
            <span className={`text-right text-[18px] font-extrabold tabular-nums eng whitespace-nowrap
              ${row.highlight ? "text-sky-300" : "text-blue-400/35"}`}>
              {row.qty}
            </span>
          </div>
        ))}
      </div>

      {/* 하단 */}
      <div className="flex flex-col gap-3 sm:flex-row items-center justify-between mt-4 px-4 sm:px-5">
        <span className="text-blue-400/25 text-[12px] eng tracking-wider">
          총 {rows.length}건 · {pageCount}페이지 · 최신순 정렬
        </span>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-[13px] font-semibold text-white/80 transition hover:bg-sky-400/15 disabled:cursor-not-allowed disabled:opacity-40"
          >
            이전
          </button>

          {Array.from({ length: pageCount }, (_, idx) => {
            const page = idx + 1;
            return (
              <button
                key={page}
                type="button"
                onClick={() => onPageChange(page)}
                className={`rounded-full px-3 py-2 text-[13px] font-semibold transition
                  ${currentPage === page
                    ? "bg-sky-400 text-slate-950"
                    : "bg-white/[0.06] text-white/80 hover:bg-sky-400/15"}`}>
                {page}
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => onPageChange(Math.min(pageCount, currentPage + 1))}
            disabled={currentPage === pageCount}
            className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-[13px] font-semibold text-white/80 transition hover:bg-sky-400/15 disabled:cursor-not-allowed disabled:opacity-40"
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────── */
export default function ProjectsPage() {
  const [tab, setTab] = useState<TabKey>("control");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [tab]);

  return (
    <main className="min-h-screen flex flex-col bg-[#060f2a]">

      {/* ── Banner ── */}
      <div className="pt-[70px] flex-shrink-0 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-5">
          <span className="eng text-sky-400/50 text-[12px] tracking-[0.3em] font-semibold">/ PROJECTS</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mt-1.5">
            주요 실적 <span className="text-sky-300">&amp;</span> 납품 이력
          </h1>
          <p className="text-blue-300/40 text-[16px] mt-1">
            20년 이상의 현장 경험 · 전국 납품 실적 · 최신순 정렬
          </p>
        </div>
      </div>

      {/* ── 요약 카운터 바 ── */}
      <div className="flex-shrink-0 grid grid-cols-4 divide-x divide-white/[0.07]
        border-y border-white/[0.07] max-w-7xl mx-auto w-full">
        {SUMMARY.map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center py-4 px-2">
            <span className="text-sky-300 text-[22px] sm:text-[26px] font-black eng tabular-nums">
              {value}
            </span>
            <span className="text-blue-300/40 text-[12px] sm:text-[13px] tracking-wide mt-0.5 text-center">
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
              <span className="text-[15px] sm:text-[16px] font-bold leading-tight">{t.label}</span>
              <span className="text-[11px] eng tracking-wider mt-0.5 hidden sm:block opacity-60">
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
        <ProjectTable tab={tab} currentPage={currentPage} onPageChange={setCurrentPage} />
      </div>
    </main>
  );
}
