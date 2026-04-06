import type { Metadata } from "next";
import { Phone, Printer, Mail, MapPin, Navigation } from "lucide-react";

export const metadata: Metadata = {
  title: "오시는 길 | 주식회사 두리 — DOORIAIR ENGINEERING",
  description: "경기도 시흥시 새우개2길 28 (포동) · TEL 031-452-1131",
};

/* ── 길 찾기 링크 ──────────────────────────────────────────────
   주소가 바뀌면 아래 두 상수만 수정하세요.
────────────────────────────────────────────────────────────── */
const NAVER_MAP_URL =
  "https://map.naver.com/v5/search/%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%8B%9C%ED%9D%A5%EC%8B%9C%20%EC%83%88%EC%9A%B0%EA%B0%9C2%EA%B8%B8%2028";
const KAKAO_MAP_URL =
  "https://map.kakao.com/link/search/경기도 시흥시 새우개2길 28";
const GOOGLE_EMBED_URL =
  "https://maps.google.com/maps?q=경기도+시흥시+새우개2길+28+포동&hl=ko&z=16&output=embed";

const INFO = [
  {
    icon: <MapPin className="w-6 h-6" />,
    label: "주소",
    value: "경기도 시흥시 새우개2길 28 (포동)",
    href: null,
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: "대표 전화",
    value: "031-452-1131",
    href: "tel:031-452-1131",
  },
  {
    icon: <Printer className="w-6 h-6" />,
    label: "팩스",
    value: "031-452-1132",
    href: null,
  },
  {
    icon: <Mail className="w-6 h-6" />,
    label: "이메일",
    value: "dooriair@hanmail.net",
    href: "mailto:dooriair@hanmail.net",
  },
];

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">

      {/* ── Page Banner ── */}
      <div className="pt-[68px] bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <span className="text-[11px] font-bold tracking-[0.25em] text-blue-500 uppercase">
            / Location
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0a1e4a] mt-2">
            오시는 길
          </h1>
          <p className="text-gray-400 text-sm mt-1.5">
            주식회사 두리 본사 · 공장 위치 안내
          </p>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-6 py-10 pb-24">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* ── 지도 ── */}
          <div className="flex-1 min-h-[340px] lg:min-h-[480px] rounded-none overflow-hidden
            border border-gray-200 shadow-sm bg-white">
            <iframe
              src={GOOGLE_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "340px", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="주식회사 두리 위치"
            />
          </div>

          {/* ── 정보 패널 ── */}
          <div className="lg:w-[380px] flex-shrink-0 flex flex-col gap-5">

            {/* 연락처 카드들 */}
            <div className="bg-white border border-gray-100 shadow-sm divide-y divide-gray-50">
              {INFO.map(({ icon, label, value, href }) => {
                const inner = (
                  <div className="flex items-start gap-4 px-6 py-5">
                    <span className="text-blue-600 flex-shrink-0 mt-0.5">{icon}</span>
                    <div>
                      <p className="text-[12px] font-semibold text-gray-400 tracking-wide uppercase mb-1">
                        {label}
                      </p>
                      <p className={`text-[17px] font-bold leading-snug
                        ${href ? "text-[#0a1e4a] hover:text-blue-600" : "text-[#0a1e4a]"}
                        ${label === "이메일" ? "eng break-all text-[15px]" : ""}
                        ${label === "대표 전화" || label === "팩스" ? "eng tracking-wide" : ""}
                      `}>
                        {value}
                      </p>
                    </div>
                  </div>
                );

                return href ? (
                  <a key={label} href={href} className="block transition-colors hover:bg-blue-50/50">
                    {inner}
                  </a>
                ) : (
                  <div key={label}>{inner}</div>
                );
              })}
            </div>

            {/* 운영 시간 */}
            <div className="bg-[#0a1e4a] px-6 py-5">
              <p className="text-sky-300 text-[11px] font-bold tracking-[0.22em] uppercase mb-3">
                운영 시간
              </p>
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-white/60 text-[14px]">평일</span>
                  <span className="text-white font-bold text-[15px]">09:00 – 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60 text-[14px]">토요일</span>
                  <span className="text-white font-bold text-[15px]">09:00 – 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60 text-[14px]">일·공휴일</span>
                  <span className="text-white/40 text-[15px]">휴무</span>
                </div>
              </div>
            </div>

            {/* 길 찾기 버튼 */}
            <div className="flex flex-col gap-3">
              <a
                href={NAVER_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-4
                  bg-[#03C75A] hover:bg-[#02a84a] text-white
                  font-bold text-[15px] tracking-wide
                  shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Navigation className="w-5 h-5" />
                네이버 지도로 길 찾기
              </a>
              <a
                href={KAKAO_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-4
                  bg-[#FEE500] hover:bg-[#f0d800] text-[#3C1E1E]
                  font-bold text-[15px] tracking-wide
                  shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Navigation className="w-5 h-5" />
                카카오맵으로 길 찾기
              </a>
            </div>
          </div>
        </div>

        {/* ── 교통 안내 ── */}
        <div className="mt-8 bg-white border border-gray-100 shadow-sm px-6 py-6">
          <p className="text-[12px] font-bold tracking-[0.22em] text-blue-500 uppercase mb-4">
            교통 안내
          </p>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
            {[
              { means: "자가용", desc: "서해안고속도로 시흥IC 진출 후 포동 방면 약 5분" },
              { means: "대중교통", desc: "수인분당선 신천역 1번 출구 → 버스 환승 약 10분" },
              { means: "주차", desc: "공장 내 주차 가능 (방문 전 연락 권장)" },
              { means: "내비게이션", desc: "'시흥 새우개2길 28' 또는 '주식회사 두리' 검색" },
            ].map(({ means, desc }) => (
              <div key={means} className="flex gap-3">
                <span className="flex-shrink-0 text-[12px] font-bold text-blue-600 w-20">{means}</span>
                <span className="text-[14px] text-gray-600 leading-relaxed">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
