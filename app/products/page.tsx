"use client";

import { useState } from "react";
import { ImageIcon, X, ChevronRight, CheckCircle2, Quote } from "lucide-react";
import { PRODUCTS, type Product } from "@/src/data/productsData";

/* ── Category color map ─────────────────────────────────────────────── */
const CAT_COLORS: Record<string, string> = {
  "공기조화기":     "bg-blue-600/20 text-blue-300 border-blue-700/40",
  "항온항습기":     "bg-sky-600/20  text-sky-300  border-sky-700/40",
  "제어 시스템":    "bg-indigo-600/20 text-indigo-300 border-indigo-700/40",
  "A/S · 유지보수": "bg-slate-600/20 text-slate-300 border-slate-600/40",
};

/* ── Product Detail Modal ───────────────────────────────────────────── */
function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto no-scrollbar
          bg-[#060f2a] border border-sky-400/25
          shadow-[0_0_60px_rgba(56,189,248,0.10)]"
        onClick={e => e.stopPropagation()}
      >
        {/* Top accent */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />

        {/* ── Header ── */}
        <div className="flex items-start justify-between gap-4 px-7 pt-7 pb-5 border-b border-white/[0.07]">
          <div>
            <span className={`inline-block text-[11px] font-bold px-2.5 py-0.5 border eng tracking-widest mb-2
              ${CAT_COLORS[product.cat] ?? ""}`}>
              {product.cat}
            </span>
            <h2 className="text-white font-black text-2xl leading-tight">{product.name}</h2>
            {product.badge && (
              <span className="inline-block mt-2 text-[11px] font-bold px-2.5 py-0.5 bg-sky-400 text-[#050d20] eng tracking-widest">
                {product.badge}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-9 h-9 flex items-center justify-center
              text-blue-300/50 hover:text-white hover:bg-white/10 transition-all rounded-sm mt-0.5"
            aria-label="닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ── Image placeholder ── */}
        <div className="relative w-full aspect-video bg-[#040c1e] border-b border-white/[0.07]
          flex flex-col items-center justify-center gap-2">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <ImageIcon className="w-10 h-10 text-sky-400/20 relative z-10" />
          <span className="relative z-10 text-sky-400/20 text-[10px] eng tracking-widest font-semibold">
            PRODUCT PHOTO PLACEHOLDER
          </span>
        </div>

        {/* ── 베테랑의 한마디 ── */}
        <div className="mx-7 mt-6 flex gap-3 px-5 py-4
          bg-sky-400/[0.06] border-l-2 border-sky-400/50">
          <Quote className="w-5 h-5 text-sky-400/60 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-[11px] font-bold text-sky-400/60 tracking-[0.2em] mb-1.5 eng">
              ENGINEER'S NOTE · 베테랑의 한마디
            </p>
            <p className="text-blue-200/75 text-[15px] leading-relaxed">
              {product.expertNote}
            </p>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="px-7 py-6 space-y-8">

          {/* 개요 */}
          <p className="text-blue-200/60 text-[15px] leading-relaxed">{product.desc}</p>

          {/* ── SPECIFICATIONS ── */}
          <div>
            <p className="text-sky-300/60 text-[11px] font-bold tracking-[0.22em] eng mb-3">
              SPECIFICATIONS
            </p>
            <div className="divide-y divide-white/[0.06] border border-white/[0.08]">
              {product.specs.map(s => (
                <div key={s.label} className="flex items-baseline gap-4 px-5 py-3">
                  <span className="w-28 flex-shrink-0 text-blue-300/50 text-[13px]">{s.label}</span>
                  <span className="text-white text-[15px] font-semibold">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── 기술 특징 및 설계 포인트 ── */}
          <div>
            <p className="text-sky-300/60 text-[11px] font-bold tracking-[0.22em] eng mb-1">
              TECHNICAL FEATURES
            </p>
            <p className="text-blue-300/40 text-[12px] mb-4">기술 특징 및 설계 포인트</p>
            <ul className="space-y-3">
              {product.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-400/70 flex-shrink-0 mt-0.5" />
                  <span className="text-blue-100/75 text-[15px] leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── 주요 적용 분야 ── */}
          <div>
            <p className="text-sky-300/60 text-[11px] font-bold tracking-[0.22em] eng mb-1">
              APPLICATIONS
            </p>
            <p className="text-blue-300/40 text-[12px] mb-4">주요 적용 분야</p>
            <div className="flex flex-wrap gap-2.5">
              {product.applications.map(a => (
                <span key={a}
                  className="px-4 py-1.5 bg-white/[0.05] border border-sky-400/20
                    text-blue-200/70 text-[14px] font-medium">
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* 주요 납품처 */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/[0.07]">
            <span className="text-blue-300/35 text-[13px] flex-shrink-0">주요 납품처</span>
            <span className="text-sky-400/70 text-[14px]">{product.clients}</span>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="px-7 pb-7">
          <a
            href="tel:031-452-1131"
            className="flex items-center justify-center gap-2.5 w-full py-4
              bg-sky-400 hover:bg-sky-300 text-[#040c1e] font-bold text-[15px] tracking-wide
              transition-all duration-300"
          >
            031-452-1131 제품 문의하기
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Product Card ───────────────────────────────────────────────────── */
function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative flex flex-col text-left w-full
        bg-white/[0.03] border border-white/[0.08]
        hover:bg-white/[0.07] hover:border-sky-400/35
        hover:shadow-[0_0_30px_rgba(56,189,248,0.06)]
        transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-sky-400/40"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative w-full aspect-video bg-[#060f2a] border-b border-white/[0.06]
        flex flex-col items-center justify-center gap-1.5 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <ImageIcon className="w-7 h-7 text-sky-400/20 relative z-10" />
        <span className="relative z-10 text-sky-400/20 text-[9px] eng tracking-widest">PHOTO PLACEHOLDER</span>
      </div>

      <div className="p-5 flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className={`text-[10px] font-bold px-2 py-0.5 border eng tracking-widest
            ${CAT_COLORS[product.cat] ?? ""}`}>
            {product.cat}
          </span>
          {product.badge && (
            <span className="text-[10px] font-bold px-2 py-0.5 bg-sky-400 text-[#050d20] eng tracking-widest">
              {product.badge}
            </span>
          )}
        </div>
        <h3 className="text-white font-bold text-[15px] leading-snug group-hover:text-sky-100 transition-colors">
          {product.name}
        </h3>
        <p className="text-blue-300/45 text-xs leading-relaxed flex-1">{product.desc}</p>

        <div className="flex items-center gap-1.5 mt-2 text-sky-400/40 group-hover:text-sky-400/70
          text-[11px] eng tracking-wider transition-colors duration-200">
          <span>DETAILS</span>
          <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </button>
  );
}

/* ── Page ───────────────────────────────────────────────────────────── */
export default function ProductsPage() {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <>
      <main className="h-screen overflow-hidden flex flex-col bg-[#050d20]">

        {/* Banner */}
        <div className="pt-[70px] flex-shrink-0 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-6 py-6">
            <span className="eng text-sky-400/50 text-[10px] tracking-[0.3em] font-semibold">/ PRODUCTS</span>
            <h1 className="text-3xl sm:text-4xl font-black text-white mt-2">
              제품 <span className="text-sky-300">&amp;</span> 서비스
            </h1>
            <p className="text-blue-300/40 text-xs mt-1.5">
              카드를 클릭하면 상세 사양과 납품 사례를 확인할 수 있습니다
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="flex-1 overflow-y-auto no-scrollbar">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PRODUCTS.map(p => (
                <ProductCard key={p.name} product={p} onClick={() => setSelected(p)} />
              ))}
            </div>
            <p className="text-blue-400/20 text-[11px] text-center py-6 eng tracking-wide">
              * 제품 사진은 순차적으로 업데이트될 예정입니다.
            </p>
          </div>
        </div>
      </main>

      {selected && (
        <ProductModal product={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
