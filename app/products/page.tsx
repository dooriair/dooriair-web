"use client";

import { useState } from "react";
import { ImageIcon, X, CheckCircle2, ChevronRight } from "lucide-react";

/* ── Types ─────────────────────────────────────────────────────────── */
interface Product {
  cat: string;
  badge: string | null;
  name: string;
  desc: string;
  clients: string;
  /* Modal 상세 사양 */
  specs: { label: string; value: string }[];
  features: string[];
  applications: string[];
}

/* ── Data ─────────────────────────────────────────────────────────── */
const PRODUCTS: Product[] = [
  {
    cat: "공기조화기", badge: "BEST",
    name: "히트펌프 공기조화기",
    desc: "냉난방 겸용 · 에너지 효율 극대화 · 병원·연구소 등 정밀 환경 최적",
    clients: "장흥문예회관 · 강동성심병원 · 국립아시아문화전당",
    specs: [
      { label: "방식",     value: "히트펌프 냉난방 겸용" },
      { label: "용량 범위", value: "3RT ~ 100RT (맞춤 제작)" },
      { label: "냉매",     value: "R-410A / R-32 (저GWP)" },
      { label: "제어",     value: "PLC 자동제어 연동 가능" },
      { label: "인증",     value: "우수기술기업 인증 품목" },
    ],
    features: [
      "냉난방 동시 운전으로 에너지 효율 최대화",
      "정밀 온도 제어 ±0.5°C 이내",
      "현장 맞춤 설계·제작 (비표준 용량 대응)",
      "인버터 압축기 적용 부분 부하 최적화",
    ],
    applications: ["병원·의료시설", "연구소·실험실", "군부대·관공서", "문화시설·공연장"],
  },
  {
    cat: "공기조화기", badge: null,
    name: "직팽식 공기조화기",
    desc: "냉매 직접 팽창 방식 고효율 공조기 · 소형~대형 산업시설 전 용량",
    clients: "부산 지하철 · 삼양사 · 대구SSLM",
    specs: [
      { label: "방식",     value: "직팽식 (DX) 냉각" },
      { label: "용량 범위", value: "1RT ~ 150RT" },
      { label: "냉매",     value: "R-410A" },
      { label: "풍량",     value: "500CMH ~ 50,000CMH" },
      { label: "외함",     value: "스테인리스·아연도금 선택" },
    ],
    features: [
      "냉매 직접 팽창으로 냉각 효율 극대화",
      "소형~초대형 다양한 용량 라인업",
      "산업·상업 현장 설치 환경 대응",
      "모듈형 구조로 현장 시공 편의성 확보",
    ],
    applications: ["공장·산업시설", "지하철·교통시설", "대형 상업시설", "물류창고"],
  },
  {
    cat: "항온항습기", badge: null,
    name: "항온항습기",
    desc: "온도·습도 동시 정밀 제어 · 반도체·제약·박물관·수장고 전용",
    clients: "국립아시아문화전당 · 롯데마트 · 롯데푸드",
    specs: [
      { label: "온도 정확도", value: "±0.5°C" },
      { label: "습도 정확도", value: "±3% RH" },
      { label: "제어 범위",  value: "온도 15~30°C / 습도 30~70% RH" },
      { label: "용량",       value: "1RT ~ 30RT" },
      { label: "방식",       value: "냉각+재열 / 가습 복합 제어" },
    ],
    features: [
      "온도·습도 동시 정밀 제어",
      "마이크로프로세서 PID 제어 내장",
      "전기 가습기·증기 가습기 선택",
      "고청정 필터 적용 클린룸 대응",
    ],
    applications: ["반도체·전자 공장", "제약·바이오 시설", "박물관·수장고", "IT 서버실"],
  },
  {
    cat: "제어 시스템", badge: "BEST",
    name: "공조 자동제어 판넬",
    desc: "PLC 기반 통합 자동제어 회로 설계·제작 · 현대자동차 남양연구소 45대",
    clients: "현대자동차 남양연구소 · 한국전력공사 · 한화",
    specs: [
      { label: "제어 방식",  value: "PLC (Mitsubishi / Siemens)" },
      { label: "통신 프로토콜", value: "Modbus / BACnet / RS-485" },
      { label: "입·출력",   value: "AI/AO/DI/DO 확장형" },
      { label: "외함 등급",  value: "IP54 이상 (옥외형 IP65)" },
      { label: "인증",       value: "전기안전인증 KS C IEC 기준" },
    ],
    features: [
      "PLC 기반 공조 자동운전 시퀀스 설계",
      "터치스크린 HMI 내장 (옵션)",
      "원격 모니터링·제어 연동",
      "전력 측정 및 에너지 관리 기능",
    ],
    applications: ["자동차·연구시설", "발전·에너지 시설", "방산·화학 공장", "대형 복합건물"],
  },
  {
    cat: "제어 시스템", badge: null,
    name: "인버터 판넬",
    desc: "모터 속도 제어로 에너지 절감 극대화 · LCT리조트 71대 납품",
    clients: "해운대LCT · 판교밸리 · KIST · CJ헬스케어",
    specs: [
      { label: "인버터",   value: "LS산전 / Mitsubishi / Yaskawa" },
      { label: "용량",     value: "0.4kW ~ 220kW" },
      { label: "전압",     value: "3상 220V / 380V / 440V" },
      { label: "통신",     value: "RS-485 / Modbus 내장" },
      { label: "보호",     value: "과전류·지락·과열 보호" },
    ],
    features: [
      "모터 속도 무단 제어로 에너지 30~50% 절감",
      "소프트 스타트로 기동 충격 최소화",
      "PID 피드백 제어 내장",
      "고조파 저감 필터 적용 (옵션)",
    ],
    applications: ["리조트·호텔", "판교·테크노밸리", "연구기관", "제약·식품 공장"],
  },
  {
    cat: "A/S · 유지보수", badge: null,
    name: "공조시스템 유지보수",
    desc: "정기점검·보수·진단·리모델링 · 국가자격 엔지니어 직접 출동",
    clients: "전국 150건+ 실적",
    specs: [
      { label: "점검 주기",  value: "월·분기·연간 맞춤 계약" },
      { label: "자격",       value: "공조냉동기계기사 · 산업기사 보유" },
      { label: "출동 범위",  value: "수도권 당일 / 전국 익일" },
      { label: "리모델링",   value: "기존 장비 진단 후 업그레이드" },
      { label: "실적",       value: "전국 150건 이상" },
    ],
    features: [
      "공조냉동기계기사 국가자격 보유 엔지니어 직접 출동",
      "냉매 충전·필터 교체·코일 세척",
      "전기 제어 계통 점검 및 교정",
      "노후 설비 리모델링 설계·시공",
    ],
    applications: ["산업·공장 시설", "병원·의료기관", "공공·연구시설", "상업·오피스"],
  },
];

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
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Panel — stop propagation so clicking inside doesn't close */}
      <div
        className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto no-scrollbar
          bg-[#060f2a] border border-sky-400/25
          shadow-[0_0_60px_rgba(56,189,248,0.10)]"
        onClick={e => e.stopPropagation()}
      >
        {/* Top accent */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />

        {/* Header */}
        <div className="flex items-start justify-between gap-4 px-7 pt-7 pb-5 border-b border-white/[0.07]">
          <div>
            <span className={`inline-block text-[10px] font-bold px-2.5 py-0.5 border eng tracking-widest mb-2
              ${CAT_COLORS[product.cat] ?? ""}`}>
              {product.cat}
            </span>
            <h2 className="text-white font-black text-xl leading-tight">{product.name}</h2>
            {product.badge && (
              <span className="inline-block mt-2 text-[10px] font-bold px-2.5 py-0.5 bg-sky-400 text-[#050d20] eng tracking-widest">
                {product.badge}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center
              text-blue-300/50 hover:text-white hover:bg-white/10 transition-all rounded-sm mt-0.5"
            aria-label="닫기"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Image placeholder */}
        <div className="relative w-full aspect-video bg-[#040c1e] border-b border-white/[0.07]
          flex flex-col items-center justify-center gap-2">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <ImageIcon className="w-10 h-10 text-sky-400/20 relative z-10" />
          <span className="relative z-10 text-sky-400/20 text-[10px] eng tracking-widest font-semibold">
            PRODUCT PHOTO PLACEHOLDER
          </span>
        </div>

        {/* Body */}
        <div className="px-7 py-6 space-y-7">

          {/* Description */}
          <p className="text-blue-200/60 text-sm leading-relaxed">{product.desc}</p>

          {/* Specs table */}
          <div>
            <div className="text-sky-300/60 text-[10px] font-bold tracking-[0.22em] eng mb-3">
              SPECIFICATIONS
            </div>
            <div className="divide-y divide-white/[0.06] border border-white/[0.08]">
              {product.specs.map(s => (
                <div key={s.label} className="flex items-baseline gap-4 px-4 py-2.5">
                  <span className="w-28 flex-shrink-0 text-blue-300/45 text-xs">{s.label}</span>
                  <span className="text-white text-sm font-medium">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <div className="text-sky-300/60 text-[10px] font-bold tracking-[0.22em] eng mb-3">
              KEY FEATURES
            </div>
            <ul className="space-y-2">
              {product.features.map(f => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-blue-200/55">
                  <CheckCircle2 className="w-4 h-4 text-sky-400/60 flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div>
            <div className="text-sky-300/60 text-[10px] font-bold tracking-[0.22em] eng mb-3">
              APPLICATIONS
            </div>
            <div className="flex flex-wrap gap-2">
              {product.applications.map(a => (
                <span key={a}
                  className="px-3 py-1 bg-white/[0.04] border border-white/[0.10] text-blue-200/60 text-xs">
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* Main clients */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/[0.07]">
            <span className="text-blue-300/35 text-xs flex-shrink-0">주요 납품처</span>
            <span className="text-sky-400/70 text-xs">{product.clients}</span>
          </div>
        </div>

        {/* CTA */}
        <div className="px-7 pb-7">
          <a
            href="tel:031-452-1131"
            className="flex items-center justify-center gap-2.5 w-full py-3.5
              bg-sky-400 hover:bg-sky-300 text-[#040c1e] font-bold text-sm tracking-wide
              transition-all duration-300"
          >
            031-452-1131 제품 문의하기
            <ChevronRight className="w-4 h-4" />
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
      {/* Top glow on hover */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Image placeholder */}
      <div className="relative w-full aspect-video bg-[#060f2a] border-b border-white/[0.06]
        flex flex-col items-center justify-center gap-1.5 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <ImageIcon className="w-7 h-7 text-sky-400/20 relative z-10" />
        <span className="relative z-10 text-sky-400/20 text-[9px] eng tracking-widest">PHOTO PLACEHOLDER</span>
      </div>

      {/* Info */}
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

        {/* "자세히 보기" hint */}
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

      {/* Modal — rendered outside main so it overlays the full viewport */}
      {selected && (
        <ProductModal product={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
