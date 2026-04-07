"use client";

/**
 * CardSlider — 제품 카드 & 모달 공용 이미지 슬라이더
 *
 * - images 배열이 있으면 실제 사진을 페이드 슬라이드
 * - images가 없거나 빈 배열이면 3단계 애니메이션 플레이스홀더 표시
 * - IntersectionObserver: 화면 밖 카드는 타이머 정지 → 성능 최적화
 * - initialDelay: 카드별 시작 시점을 엇갈려 동시 전환 방지
 */

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

interface Props {
  images?: string[];
  alt: string;
  /** 슬라이드 교체 간격 (ms), 기본 3500 */
  intervalMs?: number;
  /** 카드별 시작 딜레이 (ms) — 동시 전환 방지 */
  initialDelay?: number;
  /** 모달용 tall 비율이 필요할 때 true */
  tall?: boolean;
}

/* 사진 없을 때 보여줄 플레이스홀더 프레임 */
const PH_FRAMES = [
  {
    bg: "bg-gradient-to-br from-[#060f2a] via-[#081730] to-[#0a1e4a]",
    accent: "text-sky-400/25",
    grid: true,
  },
  {
    bg: "bg-gradient-to-tr from-[#071828] via-[#0c2255] to-[#071020]",
    accent: "text-indigo-300/25",
    grid: false,
  },
  {
    bg: "bg-gradient-to-bl from-[#040d1e] via-[#061428] to-[#0d2060]",
    accent: "text-sky-300/20",
    grid: true,
  },
];

export default function CardSlider({
  images = [],
  alt,
  intervalMs = 3500,
  initialDelay = 0,
  tall = false,
}: Props) {
  const [current, setCurrent]   = useState(0);
  const [visible, setVisible]   = useState(false);
  const containerRef            = useRef<HTMLDivElement>(null);
  const timerRef                = useRef<ReturnType<typeof setTimeout> | null>(null);

  const count = images.length || PH_FRAMES.length;

  /* ── IntersectionObserver: 화면 밖이면 타이머 정지 ── */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* ── 자동 슬라이드 ── */
  const tick = useCallback(() => {
    setCurrent(prev => (prev + 1) % count);
  }, [count]);

  useEffect(() => {
    if (!visible) return;
    // 카드별 시작 딜레이 적용
    const startTimer = setTimeout(() => {
      tick();                              // 첫 전환
      timerRef.current = setInterval(tick, intervalMs);
    }, initialDelay);

    return () => {
      clearTimeout(startTimer);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [visible, tick, intervalMs, initialDelay]);

  const aspectClass = tall ? "aspect-video" : "aspect-video";

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${aspectClass} overflow-hidden bg-[#060f2a]`}
    >
      {images.length > 0 ? (
        /* ── 실제 이미지 슬라이드 ── */
        images.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <Image
              src={src}
              alt={`${alt} ${i + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        ))
      ) : (
        /* ── 애니메이션 플레이스홀더 ── */
        PH_FRAMES.map((frame, i) => (
          <div
            key={i}
            className={`absolute inset-0 ${frame.bg}
              transition-opacity duration-700 ease-in-out`}
            style={{ opacity: i === current ? 1 : 0 }}
          >
            {frame.grid && (
              <div className="absolute inset-0 grid-bg opacity-20" />
            )}
            {i === 0 && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
                <ImageIcon className={`w-7 h-7 ${frame.accent}`} />
                <span className={`text-[9px] eng tracking-widest ${frame.accent}`}>
                  PHOTO PLACEHOLDER
                </span>
              </div>
            )}
            {/* 각 프레임마다 미묘한 광선 효과 */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: i === 1
                  ? "radial-gradient(ellipse at 80% 20%, rgba(56,189,248,0.12) 0%, transparent 60%)"
                  : i === 2
                  ? "radial-gradient(ellipse at 20% 80%, rgba(99,102,241,0.12) 0%, transparent 60%)"
                  : "none",
              }}
            />
          </div>
        ))
      )}

      {/* ── 도트 인디케이터 ── */}
      <div className="absolute bottom-2 inset-x-0 flex justify-center gap-1.5 z-10">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`슬라이드 ${i + 1}`}
            className={`h-1 rounded-full transition-all duration-300
              ${i === current
                ? "w-4 bg-sky-400/80"
                : "w-1.5 bg-white/25 hover:bg-white/40"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
