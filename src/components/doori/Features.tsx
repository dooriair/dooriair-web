import {
  CheckCircle2, Award, Shield,
  Wind, Zap, Thermometer, Cpu, Layers, Wrench,
} from "lucide-react";

function SectionTag({ children, light = false, center = false }: {
  children: React.ReactNode; light?: boolean; center?: boolean;
}) {
  return (
    <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
      <span className={`block h-px w-8 ${light ? "bg-sky-400" : "bg-blue-600"}`} />
      <span className={`text-[11px] font-bold tracking-[0.22em] uppercase ${light ? "text-sky-300" : "text-blue-600"}`}>
        {children}
      </span>
    </div>
  );
}

/* ── About ─────────────────────────────────────────────────────────── */
export function AboutSection() {
  const services = [
    "공기조화기 설계 및 제작 (히트펌프·직팽식·항온항습기)",
    "신규 현장 공조 시스템 설계 및 시공",
    "공조 자동제어 판넬 및 인버터 판넬 제작",
    "기존 장비 유지보수 및 시스템 진단",
    "공조시설 리모델링 공사",
  ];

  const info = [
    { label: "회사명",         value: "주식회사 두리 (DOORI Co., Ltd.)" },
    { label: "사업자등록번호",  value: "706-87-00813" },
    { label: "대표이사",       value: "임종명, 조진형 (공동대표)" },
    { label: "설립일",         value: "2013년 05월 01일" },
    { label: "소재지",         value: "경기도 시흥시 새우개2길 28 (포동)" },
    { label: "업종",           value: "제조 · 도매 · 서비스" },
    { label: "대표 전화",      value: "031-452-1131 / FAX 031-452-1132" },
  ];

  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTag>ABOUT US</SectionTag>
        <div className="grid lg:grid-cols-2 gap-16 items-start mt-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0a1e4a] leading-snug mb-6">
              산업·상업 공간을 위한<br />
              <span className="text-blue-600">맞춤형 공조 솔루션</span> 기업
            </h2>
            <p className="text-gray-500 leading-[1.85] mb-5 text-[15px]">
              주식회사 두리(DOORIAIR ENGINEERING)는 2013년 설립 이후 다양한 산업환경과 상업·주거 공간에
              쾌적한 실내환경과 에너지 절약을 구현하는 공조 솔루션 전문기업입니다.
              범용 공기조화기부터 직팽식·히트펌프 공기조화기까지 현장 특성과 운용성을 고려한
              최적 시스템을 제안·설계합니다.
            </p>
            <p className="text-gray-500 leading-[1.85] mb-10 text-[15px]">
              갑과 을의 의미를 두지 않고 공존을 목표로, 고객과 협력업체에게 1등 기업으로 바로 서는 것이
              저희의 목표입니다. 다양한 경험과 노하우로 고객에게 만족이 되고 공동 성장을 꿈꾸는 기업 —
              그것이 두리의 미래입니다.
            </p>
            <ul className="space-y-3.5">
              {services.map(t => (
                <li key={t} className="flex items-start gap-3 text-gray-600 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            {info.map(({ label, value }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-4 bg-slate-50 border border-slate-100
                  border-l-2 border-l-blue-600/30 hover:border-l-blue-600 hover:bg-blue-50/30
                  transition-all duration-300"
              >
                <span className="text-blue-600 text-[11px] font-bold tracking-wide w-28 flex-shrink-0 pt-0.5 eng uppercase">
                  {label}
                </span>
                <span className="text-gray-700 text-sm">{value}</span>
              </div>
            ))}
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-100">
              <div className="w-10 h-10 bg-blue-600 flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-blue-800 font-bold text-sm">우수기술기업 인증 (NICE D&amp;B, 2018)</div>
                <div className="text-blue-500 text-xs mt-0.5">
                  공기조화/냉동기계 분야 · 공장등록증 보유 (한국산업단지공단, 2024)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── History ────────────────────────────────────────────────────────── */
export function HistorySection() {
  const items = [
    {
      year: "2024–2025", right: false, title: "공장등록 · 공공기관 확대",
      desc: "한국산업단지공단 공장등록 완료(2024.07). 서울성모병원, 한국원자력연구원, 국립재활원, 제주한화우주센터 등 납품. 자동제어판넬 누적 120건+ 달성.",
    },
    {
      year: "2022–2023", right: true, title: "대형 프로젝트 수주 확대",
      desc: "탄천종합운동장, 동원시스템즈 횡성공장, 판교 제2테크노밸리, KT&G 광주·김천·신탄진 공장 연속 수주. 조광페인트·에스엘미러텍 등 제조업 고객 확대.",
    },
    {
      year: "2019–2021", right: false, title: "전국 납품 네트워크 구축",
      desc: "부산 해운대 LCT리조트 인버터판넬 71대, CJ헬스케어 오송공장 21대, 에크프로 비엠, 삼화콘덴서 등 다양한 산업군으로 납품 범위 확대.",
    },
    {
      year: "2018", right: true, title: "우수기술기업 인증 획득 (NICE D&B)",
      desc: "기술분류 공기조화/냉동기계 분야 우수기술기업 공식 인증. 핵심기술: 공기조화기, 자동제어판넬, 항온항습기, 인버터 판넬. 삼성SDI, 한화보은 등 대기업 납품 본격화.",
    },
    {
      year: "2016–2017", right: false, title: "대규모 납품 실적 구축",
      desc: "현대자동차 남양연구소 자동제어판넬 45대, 판교밸리 인버터판넬 32대, 영풍전자 크린룸 공조기 1·2차 26대 등 대형 프로젝트 연속 수주. 인도네시아 KALSEL 해외 수출.",
    },
    {
      year: "2013", right: true, title: "주식회사 두리 설립",
      desc: "2013년 5월 1일 경기도 시흥시 설립. 인제 오토테마파크 자동제어판넬 8대, 국립아시아문화전당 항온항습기 7대 등 첫 납품으로 출발. 공조 전문기업의 역사 시작.",
    },
  ];

  return (
    <section id="history" className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTag>HISTORY</SectionTag>
        <h2 className="text-3xl sm:text-4xl font-black text-[#0a1e4a] mt-4 mb-16">두리의 걸어온 길</h2>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px
            bg-gradient-to-b from-blue-100 via-blue-400 to-blue-100 -translate-x-1/2" />

          {items.map(item => (
            <div
              key={item.year}
              className={`relative flex items-start mb-10 ${item.right ? "md:flex-row-reverse" : "md:flex-row"}`}
            >
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 mt-2">
                <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-md" />
              </div>
              <div className="hidden md:block flex-1" />
              <div
                className={`ml-14 md:ml-0 flex-1 bg-white border border-slate-100 p-6 card-hover shadow-sm
                  ${item.right ? "md:mr-10" : "md:ml-10"}`}
              >
                <span className="inline-block px-3 py-1 bg-[#0a1e4a] text-sky-300 text-xs font-bold mb-3 eng tracking-wider">
                  {item.year}
                </span>
                <h3 className="text-gray-900 font-bold text-[15px] mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Products ───────────────────────────────────────────────────────── */
export function ProductsSection() {
  const products = [
    {
      icon: <Wind className="w-6 h-6" />, cat: "공기조화기", badge: "BEST", c: "blue",
      name: "히트펌프 공기조화기",
      desc: "냉난방 겸용 히트펌프 방식. 에너지 효율 극대화. 병원·연구소·군부대 등 온도 정밀 제어 시설에 최적. 장흥문예회관, 강동성심병원, 국립아시아문화전당 납품.",
    },
    {
      icon: <Zap className="w-6 h-6" />, cat: "공기조화기", badge: null, c: "sky",
      name: "직팽식 공기조화기",
      desc: "냉매 직접 팽창 방식 고효율 공조기. 소형~대형 산업시설 다양한 용량 제작. 맥키코리아, 대구SSLM, 부산 지하철, 삼양사 등 다수 납품.",
    },
    {
      icon: <Thermometer className="w-6 h-6" />, cat: "항온항습기", badge: null, c: "blue",
      name: "항온항습기",
      desc: "온도·습도 동시 정밀 제어. 반도체·제약·박물관·수장고 전용. 국립아시아문화전당 7대, 인천 롯데마트 4대, 롯데푸드 횡성공장 납품.",
    },
    {
      icon: <Cpu className="w-6 h-6" />, cat: "제어 시스템", badge: "BEST", c: "sky",
      name: "공조 자동제어 판넬",
      desc: "PLC 기반 공조 통합 자동제어 회로 설계·제작. 현대자동차 남양연구소 45대, 신영주 한국전력공사 4대 등 대형 프로젝트 다수 납품.",
    },
    {
      icon: <Layers className="w-6 h-6" />, cat: "제어 시스템", badge: null, c: "blue",
      name: "인버터 판넬",
      desc: "모터 속도 제어로 에너지 절감 극대화. 부산 해운대 LCT리조트 71대, 판교밸리 32대, KIST 20대, CJ헬스케어 오송공장 21대 납품.",
    },
    {
      icon: <Wrench className="w-6 h-6" />, cat: "A/S · 유지보수", badge: null, c: "sky",
      name: "공조시스템 유지보수",
      desc: "공기조화기 정기점검·보수, 시스템 진단, 리모델링 공사. 공조냉동기계기사 등 국가자격 보유 엔지니어 직접 출동. 전국 150건+ 실적.",
    },
  ];

  return (
    <section id="products" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTag>PRODUCTS &amp; SERVICES</SectionTag>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-4 mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0a1e4a]">핵심 제품 및 서비스</h2>
          <p className="text-gray-400 text-sm max-w-xs">
            현장 특성에 최적화된 공조 솔루션 — 설계부터 시공·A/S까지 일괄 제공
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map(p => (
            <div
              key={p.name}
              className="group relative bg-white border border-gray-100 p-7 card-hover
                hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50/80"
            >
              {p.badge && (
                <span className="absolute top-5 right-5 px-2.5 py-0.5 bg-blue-600 text-white text-[10px] font-bold tracking-widest eng">
                  {p.badge}
                </span>
              )}
              <div
                className={`w-12 h-12 flex items-center justify-center mb-5 transition-all duration-300
                  ${p.c === "blue"
                    ? "bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white"
                    : "bg-sky-50 group-hover:bg-sky-500 text-sky-600 group-hover:text-white"}`}
              >
                {p.icon}
              </div>
              <div className="text-[10px] text-blue-500 font-bold tracking-[0.2em] mb-2 eng">{p.cat}</div>
              <h3 className="text-gray-900 font-bold text-[15px] mb-3">{p.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Certifications ─────────────────────────────────────────────────── */
export function CertificationsSection() {
  const certs = [
    { title: "우수기술기업 인증",          org: "NICE D&B (나이스디앤비)",  year: "2018" },
    { title: "공장등록증",                  org: "한국산업단지공단",          year: "2024.07" },
    { title: "공조냉동기계 기사",           org: "국가기술자격",              year: "2008" },
    { title: "공조냉동기계 산업기사 ×2",   org: "국가기술자격",              year: "1997 · 2014" },
    { title: "공업계측제어 기능사",         org: "국가기술자격",              year: "1995" },
    { title: "전기기능사 · 전기용접기능사", org: "국가기술자격",              year: "1996 · 2012" },
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTag>CERTIFICATIONS &amp; QUALIFICATIONS</SectionTag>
        <h2 className="text-2xl font-black text-[#0a1e4a] mt-4 mb-10">자격 및 인증 현황</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map(({ title, org, year }) => (
            <div
              key={title}
              className="flex items-start gap-4 bg-white border border-slate-100 p-5 card-hover hover:border-blue-100"
            >
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-gray-900 font-semibold text-sm">{title}</div>
                <div className="text-gray-400 text-xs mt-0.5">{org}</div>
                <div className="text-blue-500 text-xs font-bold mt-1.5 eng tracking-wider">{year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Export ─────────────────────────────────────────────────────────── */
export default function Features() {
  return (
    <>
      <AboutSection />
      <HistorySection />
      <ProductsSection />
      <CertificationsSection />
    </>
  );
}
