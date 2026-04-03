"use client";

import { useState, useEffect, useRef } from "react";
import { Building2, Factory, Award } from "lucide-react";

/* ── Hooks ─────────────────────────────────────────────────────────── */
function useCounter(target: number, duration = 2000, active = false) {
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

function useInView(threshold = 0.25) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setV(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView: v };
}

/* ── Data ───────────────────────────────────────────────────────────── */
const STATS = [
  { target: 85,  suffix: "+", label: "공기조화기·항온항습기", unit: "건" },
  { target: 122, suffix: "+", label: "자동제어·인버터 판넬",  unit: "건" },
  { target: 12,  suffix: "",  label: "업력",                  unit: "년" },
  { target: 150, suffix: "+", label: "유지보수 실적",          unit: "건" },
];

const CLIENTS = [
  { name: "삼성SDI",               cat: "배터리·전자" },
  { name: "KT&G",                  cat: "제조·식품" },
  { name: "하이트진로",             cat: "식음료" },
  { name: "현대자동차 남양연구소",   cat: "자동차·연구" },
  { name: "국립아시아문화전당",     cat: "공공·문화" },
  { name: "한화",                  cat: "방산·화학" },
  { name: "롯데마트",               cat: "유통" },
  { name: "한국전력공사",           cat: "에너지" },
  { name: "CJ헬스케어",             cat: "제약" },
  { name: "동원시스템즈",           cat: "포장·시스템" },
  { name: "조광페인트",             cat: "화학·도료" },
  { name: "한솔케미칼",             cat: "화학" },
  { name: "일진전기",               cat: "전기·전자" },
  { name: "EcoPro BM",             cat: "배터리 소재" },
  { name: "KIST 한국과학기술연구원", cat: "연구기관" },
  { name: "한국원자력연구원",       cat: "공공·연구" },
];

const FEATURED = [
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "현대자동차 남양연구소",
    detail: "공조 자동제어판넬 45대 제작 및 설치 (2016)",
  },
  {
    icon: <Factory className="w-5 h-5" />,
    title: "영풍전자 크린룸",
    detail: "1·2·3차 공기조화기 총 28대 제작·설치 (2017~2018)",
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "부산 해운대 LCT리조트",
    detail: "인버터판넬 71대 제작 및 설치 (2019)",
  },
];

/* ── Counter Grid (animated) ────────────────────────────────────────── */
function CounterGrid() {
  const { ref, inView } = useInView(0.3);
  const counts = [
    useCounter(STATS[0].target, 1800, inView),
    useCounter(STATS[1].target, 2000, inView),
    useCounter(STATS[2].target, 1200, inView),
    useCounter(STATS[3].target, 2200, inView),
  ];

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {STATS.map((d, i) => (
        <div
          key={d.label}
          className="relative bg-white/[0.04] border border-white/[0.08] p-8 text-center
            hover:bg-white/[0.08] hover:border-sky-400/20 transition-all duration-300 group overflow-hidden"
        >
          {/* Top glow line on hover */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent
            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="text-5xl font-black text-white mb-1 eng tabular-nums">
            {counts[i]}{d.suffix}
            <span className="text-sky-300 text-2xl ml-1.5">{d.unit}</span>
          </div>
          <div className="text-blue-300/45 text-xs tracking-wide mt-2">{d.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ── Main export ────────────────────────────────────────────────────── */
export default function Stats() {
  return (
    <section id="achievements" className="py-28 bg-[#060f2a] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="block h-px w-8 bg-sky-400" />
          <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-sky-300">
            ACHIEVEMENTS
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-white">두리의 실적과 고객사</h2>
          <p className="text-blue-300/45 text-sm max-w-sm">
            설립 이후 전국 주요 산업·공공·문화시설에 납품한 누적 실적
          </p>
        </div>

        {/* Animated stats */}
        <CounterGrid />

        {/* Major clients */}
        <div className="mt-16">
          <div className="text-sky-300/55 text-[10px] font-bold tracking-[0.3em] mb-6 eng">MAJOR CLIENTS</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {CLIENTS.map(({ name, cat }) => (
              <div
                key={name}
                className="group bg-white/[0.04] border border-white/[0.08] px-4 py-3.5
                  hover:bg-white/[0.08] hover:border-sky-400/25 transition-all duration-200"
              >
                <div className="text-white text-sm font-semibold group-hover:text-sky-200 transition-colors">
                  {name}
                </div>
                <div className="text-blue-400/40 text-xs mt-0.5">{cat}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured projects */}
        <div className="mt-14">
          <div className="text-sky-300/55 text-[10px] font-bold tracking-[0.3em] mb-6 eng">FEATURED PROJECTS</div>
          <div className="grid sm:grid-cols-3 gap-4">
            {FEATURED.map(({ icon, title, detail }) => (
              <div
                key={title}
                className="flex gap-4 bg-white/[0.04] border border-white/[0.08] p-6
                  hover:bg-white/[0.07] hover:border-sky-400/20 transition-all duration-200"
              >
                <div className="text-sky-400 flex-shrink-0 mt-0.5">{icon}</div>
                <div>
                  <div className="text-white font-semibold text-sm">{title}</div>
                  <div className="text-blue-300/50 text-xs mt-1.5 leading-relaxed">{detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
