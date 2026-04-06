import Image from "next/image";

/* ── SNS 링크 ─────────────────────────────────────────
   주소를 바꾸려면 아래 두 줄만 수정하면 됩니다.
──────────────────────────────────────────────────────── */
const BLOG_URL    = "https://blog.naver.com/dooriair22";
const YOUTUBE_URL = "https://www.youtube.com/@%EC%A3%BC%EC%8B%9D%ED%9A%8C%EC%82%AC%EB%91%90%EB%A6%AC";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="fixed bottom-0 inset-x-0 z-40 bg-white border-t border-gray-200 h-14">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between gap-4">

        {/* ── Logo ── */}
        <Image
          src="/images/logo.png"
          alt="주식회사 두리"
          width={100}
          height={28}
          className="h-6 w-auto object-contain flex-shrink-0"
        />

        {/* ── Info (sm 이상에서만 표시) ── */}
        <p className="hidden sm:block text-gray-400 text-[11px] leading-tight truncate">
          경기도 시흥시 새우개2길 28 · TEL 031-452-1131 ·{" "}
          <a
            href="mailto:dooriair@hanmail.net"
            className="text-blue-600 eng font-semibold hover:underline underline-offset-2"
          >
            dooriair@hanmail.net
          </a>
        </p>

        {/* ── SNS 채널 ── */}
        <div className="flex items-center gap-3 flex-shrink-0">

          {/* 네이버 블로그 */}
          <a
            href={BLOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="주식회사 두리 블로그"
            className="group flex items-center gap-1.5
              text-gray-400 hover:text-[#03C75A] transition-colors duration-200"
          >
            {/* 네이버 N 아이콘 */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z"/>
            </svg>
            <span className="hidden md:inline text-[11px] font-semibold tracking-wide">
              두리 블로그
            </span>
          </a>

          <span className="w-px h-3.5 bg-gray-200" />

          {/* 유튜브 */}
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="주식회사 두리 TV 유튜브"
            className="group flex items-center gap-1.5
              text-gray-400 hover:text-[#FF0000] transition-colors duration-200"
          >
            {/* 유튜브 아이콘 */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span className="hidden md:inline text-[11px] font-semibold tracking-wide">
              두리 TV
            </span>
          </a>
        </div>

        {/* ── Copyright ── */}
        <span className="hidden sm:inline text-gray-400 text-[11px] eng tracking-wide flex-shrink-0">
          © 2013–{year} DOORI Co., Ltd.
        </span>
      </div>
    </footer>
  );
}
