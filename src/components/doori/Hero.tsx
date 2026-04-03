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
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full">
        <div className="max-w-2xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 mb-8
            bg-sky-400/[0.08] border border-sky-400/25 backdrop-blur-sm
            text-sky-300 text-[11px] font-bold tracking-[0.25em]">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            HVAC ENGINEERING SPECIALIST · EST. 2013
          </div>

          {/* Slogan */}
          <h1 className="eng font-black tracking-tight mb-6" style={{ lineHeight: 1.05 }}>
            <span className="block text-[clamp(28px,6vw,60px)] text-white">
              공조 시스템의
            </span>
            <span className="block text-[clamp(28px,6vw,60px)]
              text-transparent bg-clip-text
              bg-gradient-to-r from-sky-300 via-sky-200 to-blue-300">
              미래를 설계하다
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-blue-200/50 text-[13px] sm:text-[15px] leading-[1.75] max-w-lg mb-8">
            주식회사 두리(DOORIAIR ENGINEERING)<br />
            히트펌프·직팽식 공기조화기, 항온항습기,
            자동제어·인버터 판넬 설계·제작 전문기업
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/products"
              className="group inline-flex items-center gap-3 px-8 py-3.5
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
              className="inline-flex items-center gap-3 px-8 py-3.5
                border border-sky-400/40 text-sky-200
                hover:bg-sky-400/10 hover:border-sky-300/60
                font-medium text-sm tracking-wide
                transition-all duration-300"
            >
              회사 소개
            </Link>
          </div>

          {/* Quick-nav */}
          <div className="grid sm:grid-cols-3 gap-2.5">
            {QUICK_NAV.map(({ icon, label, sub, href }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center gap-3 px-4 py-3
                  bg-white/[0.05] border border-white/[0.10]
                  hover:bg-sky-400/10 hover:border-sky-400/40
                  backdrop-blur-sm transition-all duration-300"
              >
                <span className="text-sky-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </span>
                <div className="min-w-0">
                  <div className="text-white text-sm font-semibold truncate">{label}</div>
                  <div className="text-sky-400/40 text-[9px] eng tracking-[0.2em] mt-0.5">{sub} →</div>
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
