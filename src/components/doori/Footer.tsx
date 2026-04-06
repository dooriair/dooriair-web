import Image from "next/image";

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

        {/* ── Info (hidden on small screens) ── */}
        <p className="hidden sm:block text-gray-400 text-[11px] leading-tight truncate">
          경기도 시흥시 새우개2길 28 · TEL 031-452-1131 ·{" "}
          <a
            href="mailto:dooriair@hanmail.net"
            className="text-blue-600 eng font-semibold hover:underline underline-offset-2"
          >
            dooriair@hanmail.net
          </a>
        </p>

        {/* ── Copyright ── */}
        <span className="text-gray-400 text-[11px] eng tracking-wide flex-shrink-0">
          © 2013–{year} DOORI Co., Ltd.
        </span>
      </div>
    </footer>
  );
}
