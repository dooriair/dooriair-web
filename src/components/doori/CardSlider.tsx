"use client";

/**
 * CardSlider — 제품 카드 & 모달 공용 이미지 슬라이더
 *
 * - images 배열이 있으면 실제 사진 페이드 슬라이드
 * - images가 없거나 빈 배열이면 3단계 그라디언트 플레이스홀더
 * - IntersectionObserver: 화면 밖 카드 타이머 자동 정지 (성능 최적화)
 * - initialDelay: 카드별 시작 시점 엇갈림으로 동시 전환 방지
 */

import { useState, useEffect, useRef, useCallback } from "react";
import { ImageIcon } from "lucide-react";

interface Props {
  images?: string[];
  alt: string;
  intervalMs?: number;
  initialDelay?: number;
}

const PH_FRAMES = [
  { bg: "from-[#060f2a] via-[#081730] to-[#0a1e4a]",  dir: "bg-gradient-to-br", grid: true  },
  { bg: "from-[#071828] via-[#0c2255] to-[#071020]",  dir: "bg-gradient-to-tr", grid: false },
  { bg: "from-[#040d1e] via-[#061428] to-[#0d2060]",  dir: "bg-gradient-to-bl", grid: true  },
];

export default function CardSlider({
  images = [],
  alt,
  intervalMs = 3500,
  initialDelay = 0,
}: Props) {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const containerRef          = useRef<HTMLDivElement>(null);
  const timerRef              = useRef<ReturnType<typeof setInterval> | null>(null);

  const hasImages = images.length > 0;
  const count     = hasImages ? images.length : PH_FRAMES.length;

  /* ── IntersectionObserver ── */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* ── 자동 슬라이드 ── */
  const tick = useCallback(() => setCurrent(p => (p + 1) % count), [count]);

  useEffect(() => {
    if (!visible) return;
    const start = setTimeout(() => {
      timerRef.current = setInterval(tick, intervalMs);
    }, initialDelay);
    return () => {
      clearTimeout(start);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [visible, tick, intervalMs, initialDelay]);

  return (
    /* 16:9 고정 비율 박스 — padding-bottom trick으로 높이 명시 */
    <div
      ref={containerRef}
      className="relative w-full bg-[#060f2a] overflow-hidden"
      style={{ paddingBottom: "56.25%" /* 16:9 */ }}
    >
      {hasImages ? (
        /* ── 실제 사진 ── */
        images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${alt} ${i + 1}`}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover object-center
              transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === current ? 1 : 0 }}
            onError={(e) => {
              // 이미지 로드 실패 시 콘솔에 경로 출력 (디버깅용)
              console.warn("[CardSlider] 이미지 로드 실패:", src);
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        ))
      ) : (
        /* ── 그라디언트 플레이스홀더 ── */
        PH_FRAMES.map((f, i) => (
          <div
            key={i}
            className={`absolute inset-0 ${f.dir} ${f.bg}
              transition-opacity duration-700 ease-in-out`}
            style={{ opacity: i === current ? 1 : 0 }}
          >
            {f.grid && <div className="absolute inset-0 grid-bg opacity-20" />}
            {i === 0 && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
                <ImageIcon className="w-7 h-7 text-sky-400/25" />
                <span className="text-[9px] eng tracking-widest text-sky-400/25">
                  PHOTO PLACEHOLDER
                </span>
              </div>
            )}
          </div>
        ))
      )}

      {/* ── 도트 인디케이터 ── */}
      <div className="absolute bottom-2 inset-x-0 flex justify-center gap-1.5 z-10">
        {Array.from({ length: count }).map((_, i) => (
          <span
            key={i}
            className={`block h-1 rounded-full transition-all duration-300
              ${i === current ? "w-4 bg-sky-400/80" : "w-1.5 bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  );
}
