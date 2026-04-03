import { Phone, MapPin, Mail } from "lucide-react";

const CHANNELS = [
  {
    icon: <Phone className="w-5 h-5" />,
    label: "대표 전화",
    value: "031-452-1131",
    sub: "FAX 031-452-1132",
    href: "tel:031-452-1131",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "공장 및 사무소",
    value: "경기도 시흥시 새우개2길 28",
    sub: "(포동)",
    href: null,
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "이메일 문의",
    value: "dooriair@hanmail.net",
    sub: "클릭하여 메일 보내기",
    href: "mailto:dooriair@hanmail.net",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <div className="flex items-center gap-3 justify-center mb-4">
          <span className="block h-px w-8 bg-blue-600" />
          <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-blue-600">
            CONTACT
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-black text-[#0a1e4a] mb-4">
          프로젝트 문의 · 기술 상담
        </h2>
        <p className="text-gray-400 mb-14 text-[15px]">
          현장 진단부터 설계·시공·A/S까지 — 주식회사 두리가 함께합니다.
        </p>

        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          {CHANNELS.map(({ icon, label, value, sub, href }) => {
            const inner = (
              <>
                <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-700
                  flex items-center justify-center text-white shadow-sm">
                  {icon}
                </div>
                <span className="text-gray-400 text-xs tracking-wide">{label}</span>
                {/* 이메일만 eng 모노 폰트 + 강조 */}
                {href?.startsWith("mailto:") ? (
                  <span className="eng text-blue-600 font-bold text-sm text-center
                    leading-snug tracking-wide break-all">
                    {value}
                  </span>
                ) : (
                  <span className="text-gray-800 font-bold text-sm text-center leading-snug">
                    {value}
                  </span>
                )}
                <span className="text-gray-400 text-xs">{sub}</span>
              </>
            );

            const base = `bg-slate-50 border border-slate-100 p-7 flex flex-col items-center gap-3
              card-hover hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50 w-full`;

            return href ? (
              <a key={label} href={href} className={base}>
                {inner}
              </a>
            ) : (
              <div key={label} className={base}>
                {inner}
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:031-452-1131"
            className="inline-flex items-center gap-2.5 px-10 py-4
              bg-[#0a1e4a] hover:bg-blue-800 text-white font-bold text-sm
              shadow-lg shadow-blue-900/20 hover:shadow-xl hover:shadow-blue-800/30
              transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            031-452-1131 전화 문의
          </a>
          <a
            href="mailto:dooriair@hanmail.net"
            className="inline-flex items-center gap-2.5 px-10 py-4
              border border-blue-300 text-blue-700 hover:bg-blue-50
              font-bold text-sm eng tracking-wide transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
            dooriair@hanmail.net
          </a>
        </div>
      </div>
    </section>
  );
}
