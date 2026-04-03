import { Wind } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#040c1e] border-t border-blue-950/80">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <Wind className="w-4 h-4 text-sky-400" />
              <span className="text-white font-black text-[15px] eng">
                주식회사 두리 ·{" "}
                <span className="text-sky-400">DOORIAIR ENGINEERING</span>
              </span>
            </div>
            <p className="text-blue-400/40 text-xs leading-[1.9]">
              경기도 시흥시 새우개2길 28 (포동) · TEL 031-452-1131 · FAX 031-452-1132<br />
              사업자등록번호 706-87-00813 · 대표 임종명, 조진형 (공동대표)
            </p>
          </div>
          <div className="text-blue-400/30 text-xs eng tracking-wide">
            © 2013 – {year} DOORI Co., Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
