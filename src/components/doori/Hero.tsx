"use client";

import Link from "next/link";
import { ArrowRight, Building2, BarChart3, Wind } from "lucide-react";
import HeroAnimation from "./HeroAnimation";

/* ── Quick-nav cards ─────────────────────────────────────────────── */
const QUICK_NAV = [
  { icon: <Building2 className="w-4 h-4" />, label: "회사소개 · 연혁",   sub: "ABOUT",    href: "/about" },
  { icon: <Wind      className="w-4 h-4" />, label: "제품 · 서비스",     sub: "PRODUCTS", href: "/products" },
  { icon: <BarChart3 className="w-4 h-4" />, label: "주요 실적 · 고객사", sub: "PROJECTS", href: "/projects" },
];

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden flex flex-col justify-center bg-[#040c1e]">

      {/* ── Code-based 3D animation background ── */}
      <HeroAnimation />

      {/* ── Overlay: left-side dark veil for text area ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030812]/92 via-[#040c1e]/75 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030812]/70 via-transparent to-[#030812]/30 pointer-events-none" />

      {/* ── Top line ── */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 w-full">
        <div className="max-w-2xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 sm:mb-8
            bg-sky-400/[0.08] border border-sky-400/25 backdrop-blur-sm
            text-sky-300 text-[10px] sm:text-[11px] font-bold tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse flex-shrink-0" />
            <span className="truncate">HVAC ENGINEERING SPECIALIST · EST. 2013</span>
          </div>

          {/* Slogan */}
          <h1 className="eng font-black tracking-tight mb-4 sm:mb-6" style={{ lineHeight: 1.08 }}>
            <span className="block text-[clamp(26px,7vw,60px)] text-white">
              공조 시스템의
            </span>
            <span className="block text-[clamp(26px,7vw,60px)]
              text-transparent bg-clip-text
              bg-gradient-to-r from-sky-300 via-sky-200 to-blue-300">
              미래를 설계하다
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-blue-200/50 text-[12px] sm:text-[15px] leading-[1.7] max-w-lg mb-6 sm:mb-8">
            주식회사 두리(DOORIAIR ENGINEERING) —
            히트펌프·직팽식 공기조화기, 항온항습기,
            자동제어·인버터 판넬 설계·제작 전문기업
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col xs:flex-row gap-3 mb-6 sm:mb-10 w-full sm:w-auto">
            <Link
              href="/products"
              className="group inline-flex items-center justify-center gap-3
                px-6 sm:px-8 py-3 sm:py-3.5
                bg-sky-400 hover:bg-sky-300 text-[#030812]
                font-bold text-sm tracking-wide
                shadow-[0_0_36px_rgba(56,189,248,0.22)]
                hover:shadow-[0_0_54px_rgba(56,189,248,0.38)]
                transition-all duration-300"
            >
              제품 살펴보기
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-3
                px-6 sm:px-8 py-3 sm:py-3.5
                border border-sky-400/40 text-sky-200
                hover:bg-sky-400/10 hover:border-sky-300/60
                font-medium text-sm tracking-wide
                transition-all duration-300"
            >
              회사 소개
            </Link>
          </div>

          {/* Quick-nav */}
          <div className="grid grid-cols-3 gap-2">
            {QUICK_NAV.map(({ icon, label, sub, href }) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col sm:flex-row items-center sm:items-start gap-1.5 sm:gap-3
                  px-2.5 sm:px-4 py-2.5 sm:py-3 text-center sm:text-left
                  bg-white/[0.05] border border-white/[0.10]
                  hover:bg-sky-400/10 hover:border-sky-400/40
                  backdrop-blur-sm transition-all duration-300"
              >
                <span className="text-sky-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </span>
                <div className="min-w-0">
                  <div className="text-white text-[11px] sm:text-sm font-semibold leading-tight">{label}</div>
                  <div className="text-sky-400/40 text-[9px] eng tracking-[0.2em] mt-0.5 hidden sm:block">{sub} →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom fade ── */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#030812] to-transparent pointer-events-none" />
    </section>
  );
}
