import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#040c1e] border-t border-blue-950/80">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          {/* ── Brand ── */}
          <div>
            {/* 로고 이미지 — 푸터 배경이 어두우므로 흰색(invert) 처리 */}
            <Image
              src="/images/logo.png"
              alt="주식회사 두리"
              width={140}
              height={38}
              className="h-8 w-auto object-contain opacity-85 mb-3"
            />
            <p className="text-blue-400/40 text-xs leading-[1.9]">
              경기도 시흥시 새우개2길 28 (포동) · TEL 031-452-1131 · FAX 031-452-1132<br />
              사업자등록번호 706-87-00813 ·{" "}
              <a
                href="mailto:dooriair@hanmail.net"
                className="text-sky-400/70 eng font-semibold tracking-wide
                  hover:text-sky-300 transition-colors"
              >
                dooriair@hanmail.net
              </a>
            </p>
          </div>

          {/* ── Copyright ── */}
          <div className="text-blue-400/30 text-xs eng tracking-wide flex-shrink-0">
            © 2013 – {year} DOORI Co., Ltd.<br className="sm:hidden" /> All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
