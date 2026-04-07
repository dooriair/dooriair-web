"use client";

import { MapPin, Phone, Printer, Mail } from "lucide-react";

/* ── SNS 링크 ─────────────────────────────────────────
   주소를 바꾸려면 아래 두 줄만 수정하면 됩니다.
──────────────────────────────────────────────────────── */
const BLOG_URL    = "https://blog.naver.com/dooriair22";
const YOUTUBE_URL = "https://www.youtube.com/@%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EB%91%90%EB%A6%AC";

const CONTACT = [
  { icon: <MapPin  className="w-3.5 h-3.5 flex-shrink-0" />, text: "경기도 시흥시 새우개2길 28 (포동)", href: null },
  { icon: <Phone   className="w-3.5 h-3.5 flex-shrink-0" />, text: "TEL 031-452-1131",                 href: "tel:031-452-1131" },
  { icon: <Printer className="w-3.5 h-3.5 flex-shrink-0" />, text: "FAX 031-452-1132",                 href: null },
  { icon: <Mail    className="w-3.5 h-3.5 flex-shrink-0" />, text: "dooriair@hanmail.net",             href: "mailto:dooriair@hanmail.net" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="fixed bottom-0 inset-x-0 z-40 bg-[#0a1e4a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">

        {/* ── 왼쪽: 연락처 세로 배치 ── */}
        <div className="flex flex-col gap-0.5 min-w-0">
          {CONTACT.map(({ icon, text, href }) => {
            const cls = `flex items-center gap-1.5 text-white/55 hover:text-white
              text-[12px] sm:text-[13px] leading-tight transition-colors duration-200 eng`;
            const inner = (
              <>
                <span className="text-sky-400/70 flex-shrink-0">{icon}</span>
                <span className="truncate">{text}</span>
              </>
            );
            /* 주소·팩스는 링크 없이, 전화·이메일은 클릭 가능 */
            return href ? (
              <a key={text} href={href} className={cls + " hover:text-sky-300"}>
                {inner}
              </a>
            ) : (
              <span key={text} className={cls}>
                {inner}
              </span>
            );
          })}
        </div>

        {/* ── 오른쪽: SNS + Copyright ── */}
        <div className="flex flex-col items-end gap-2 flex-shrink-0">

          {/* SNS 아이콘 행 */}
          <div className="flex items-center gap-3">

            {/* 네이버 블로그 */}
            <a
              href={BLOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="주식회사 두리 블로그"
              className="flex items-center gap-1.5
                text-white/45 hover:text-[#03C75A] transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z"/>
              </svg>
              <span className="hidden md:inline text-[12px] font-bold tracking-wide">블로그</span>
            </a>

            <span className="w-px h-3 bg-white/20" />

            {/* 유튜브 */}
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="주식회사 두리 TV 유튜브"
              className="flex items-center gap-1.5
                text-white/45 hover:text-[#FF0000] transition-colors duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span className="hidden md:inline text-[12px] font-bold tracking-wide">유튜브</span>
            </a>
          </div>

          {/* Copyright */}
          <span className="text-white/25 text-[11px] eng tracking-wide whitespace-nowrap">
            © 2013–{year} DOORI Co., Ltd.
          </span>
        </div>

      </div>
    </footer>
  );
}
