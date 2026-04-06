/* ── SNS 링크 ─────────────────────────────────────────
   주소를 바꾸려면 아래 두 줄만 수정하면 됩니다.
──────────────────────────────────────────────────────── */
const BLOG_URL    = "https://blog.naver.com/dooriair22";
const YOUTUBE_URL = "https://www.youtube.com/@%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EB%91%90%EB%A6%AC";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="fixed bottom-0 inset-x-0 z-40 bg-[#0a1e4a] border-t border-white/10 h-16">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between gap-6">

        {/* ── 연락처 정보 ── */}
        <div className="flex items-center gap-5 min-w-0">
          <span className="hidden sm:block text-white/60 text-[14px] tracking-wide whitespace-nowrap">
            경기도 시흥시 새우개2길 28
          </span>
          <span className="hidden sm:block w-px h-3.5 bg-white/20 flex-shrink-0" />
          <a
            href="tel:031-452-1131"
            className="text-white text-[14px] font-bold eng tracking-wide
              hover:text-sky-300 transition-colors duration-200 whitespace-nowrap"
          >
            TEL 031-452-1131
          </a>
          <span className="hidden md:block w-px h-3.5 bg-white/20 flex-shrink-0" />
          <a
            href="mailto:dooriair@hanmail.net"
            className="hidden md:block text-sky-300 text-[14px] font-semibold eng tracking-wide
              hover:text-white transition-colors duration-200"
          >
            dooriair@hanmail.net
          </a>
        </div>

        {/* ── SNS 채널 ── */}
        <div className="flex items-center gap-4 flex-shrink-0">

          {/* 네이버 블로그 */}
          <a
            href={BLOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="주식회사 두리 블로그"
            className="flex items-center gap-2
              text-white/50 hover:text-[#03C75A] transition-colors duration-200"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z"/>
            </svg>
            <span className="hidden md:inline text-[13px] font-bold tracking-wide">
              두리 블로그
            </span>
          </a>

          <span className="w-px h-4 bg-white/20" />

          {/* 유튜브 */}
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="주식회사 두리 TV 유튜브"
            className="flex items-center gap-2
              text-white/50 hover:text-[#FF0000] transition-colors duration-200"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span className="hidden md:inline text-[13px] font-bold tracking-wide">
              두리 TV
            </span>
          </a>

          <span className="hidden sm:block w-px h-4 bg-white/20" />

          {/* Copyright */}
          <span className="hidden sm:inline text-white/30 text-[13px] eng tracking-wide">
            © 2013–{year} DOORI
          </span>
        </div>

      </div>
    </footer>
  );
}
