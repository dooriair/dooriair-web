/* ================================================================
   두리 제품 데이터
   각 제품의 상세 설명을 이 파일에서 직접 수정하면 됩니다.

   수정 가이드:
   - specs            : 사양표 항목 (label / value 쌍)
   - features         : 기술 특징 및 설계 포인트 (불렛 포인트)
   - designHighlights : 설계 특징 섹션 (title + desc, 상세 제품용)
   - coreTechnology   : 핵심 기술 섹션 (title + desc, 상세 제품용)
   - applications     : 주요 적용 분야 (카테고리 + 세부 항목)
   - expertNote       : 베테랑의 한마디
================================================================ */

export interface ApplicationGroup {
  category: string;
  items: string[];
}

export interface DetailSection {
  title: string;
  desc: string;
}

export interface Product {
  cat: string;
  badge: string | null;
  name: string;
  desc: string;
  clients: string;
  specs: { label: string; value: string }[];
  features: string[];
  /** 상세 설계 특징 (선택). 있으면 features 대신 이것을 표시 */
  designHighlights?: DetailSection[];
  /** 핵심 기술 (선택) */
  coreTechnology?: DetailSection[];
  /** applications가 문자열 배열이면 단순 태그, ApplicationGroup 배열이면 카테고리별 표시 */
  applications: string[] | ApplicationGroup[];
  expertNote: string;
  /** 모달 하단 CTA 버튼 텍스트 (기본값: "이 장비 기술 상담하기") */
  ctaLabel?: string;
  /**
   * 카드·모달 이미지 슬라이더용 사진 경로 배열
   * 예: ["/images/products/heatpump-1.jpg", "/images/products/heatpump-2.jpg"]
   * 비워두면 애니메이션 플레이스홀더가 표시됩니다.
   */
  images?: string[];
}

export const PRODUCTS: Product[] = [
  /* ────────────────────────────────────────────────────────────
     1. 히트펌프 공기조화기  ← 상세 전문가 버전
  ──────────────────────────────────────────────────────────── */
  {
    cat: "공기조화기",
    badge: "BEST",
    name: "히트펌프 공기조화기",
    desc: "사계절 에너지 최적화 및 고정밀 온습도 제어 솔루션. 냉난방 겸용 히트펌프 시스템을 공조기에 최적화 설계하여 운전 비용을 획기적으로 절감합니다.",
    clients: "장흥문예회관 · 강동성심병원 · 국립아시아문화전당",
    images: [
      "/images/products/heatpump_ahu_1.jpg",
      "/images/products/heatpump_ahu_2.jpg",
      "/images/products/heatpump_ahu_3.jpg",
    ],
    specs: [
      { label: "방식",      value: "히트펌프 냉난방 겸용" },
      { label: "용량 범위", value: "3RT ~ 100RT (맞춤 제작)" },
      { label: "냉매",      value: "R-410A / R-32 (저GWP)" },
      { label: "제어",      value: "PLC 자동제어 연동 가능" },
      { label: "인증",      value: "우수기술기업 인증 품목" },
    ],
    features: [],   /* designHighlights 사용 시 미표시 */
    designHighlights: [
      {
        title: "Dual Cycle 에너지 최적화",
        desc: "고효율 인버터 스크롤 압축기 채택으로 부하 변동에 따른 부분 부하 운전 시 에너지 효율(COP)을 극대화합니다.",
      },
      {
        title: "정밀 온습도 제어",
        desc: "가열/냉각 코일의 PID 비례 제어 로직을 통해 ±0.5°C 이내의 정밀한 실내 환경을 유지합니다.",
      },
      {
        title: "폐열 회수 시스템 (Option)",
        desc: "배기열 회수용 열교환기(Heat Recovery Wheel 또는 Plate형) 연동 설계로 외기 도입 시 발생하는 열손실을 최소화합니다.",
      },
      {
        title: "컴팩트 모듈러 구조",
        desc: "현장 반입 조건을 고려한 프레임 분리 및 조립식 구조로 리모델링 현장 설치가 용이합니다.",
      },
    ],
    coreTechnology: [
      {
        title: "스마트 냉매 제어",
        desc: "EEV(전자식 팽창밸브) 제어를 통해 증발 및 응축 온도를 실시간 최적화하여 압축기 부하를 경감합니다.",
      },
      {
        title: "고기밀·고단열 패널",
        desc: "열교 방지(Thermal Bridge Free) 구조의 50mm PU 패널을 적용하여 내부 결로를 원천 차단하고 단열 성능을 강화했습니다.",
      },
      {
        title: "저소음 플러그 팬 (Plug Fan)",
        desc: "벨트 분진이 없는 다이렉트 구동 방식을 채택하여 청정 환경을 유지하고 유지보수 비용을 절감합니다.",
      },
    ],
    applications: [
      { category: "의료 · 제약",   items: ["병원 수술실", "격리 병동", "제약사 클린룸 (GMP)"] },
      { category: "정밀 제조",     items: ["반도체 라인", "2차 전지 생산 공정", "정밀 측정실"] },
      { category: "특수 시설",     items: ["박물관 수장고", "대형 데이터센터", "연구소 실험실"] },
    ] as ApplicationGroup[],
    expertNote:
      "히트펌프 공조기는 냉방과 난방을 하나의 기계로 해결하는 게 핵심입니다. 두리는 설계 단계부터 건물 부하를 직접 계산해 과설계 없이 딱 맞는 용량으로 납품합니다.",
  },

  /* ──────────────────────────────────────────────────────────── */
  {
    cat: "공기조화기",
    badge: null,
    name: "직팽식 공기조화기",
    desc: "현장 맞춤형 설계와 고효율 냉매 사이클로 구현하는 최적의 공조 솔루션. 별도의 기계실(냉동기, 펌프) 없이 실외기와 직접 연동하여 설치 비용을 절감하고 유지보수 편의성을 극대화합니다.",
    clients: "부산 지하철 · 삼양사 · 대구SSLM",
    images: [
      "/images/products/dx_ahu_1.jpg",
      "/images/products/dx_ahu_2.jpg",
      "/images/products/dx_ahu_3.jpg",
    ],
    specs: [
      { label: "방식",      value: "직팽식 (DX) 냉각" },
      { label: "용량 범위", value: "1RT ~ 150RT" },
      { label: "냉매",      value: "R-410A" },
      { label: "풍량",      value: "500CMH ~ 50,000CMH" },
      { label: "외함",      value: "스테인리스·아연도금 선택" },
    ],
    features: [],
    designHighlights: [
      {
        title: "Compact & Modular 프레임",
        desc: "기존 건물 리모델링 현장 등 반입구가 좁은 곳을 고려하여, 현장에서 분리·조립이 용이한 고기밀 모듈형 구조로 설계합니다.",
      },
      {
        title: "현장 맞춤형 코일 설계",
        desc: "실제 현장의 부하 계산 데이터에 근거하여 동관 및 핀(Fin)의 간격을 최적화 설계함으로써, 어떠한 환경에서도 정격 냉각·제습 성능을 보장합니다.",
      },
      {
        title: "Plug Fan & Direct Drive",
        desc: "벨트 분진이 발생하지 않는 고정압 저소음 플러그 팬을 적용하여, 실내 청정도를 유지하고 벨트 교체 등의 번거로운 유지보수를 없앴습니다.",
      },
    ],
    coreTechnology: [
      {
        title: "삼성·LG·캐리어 인버터 실외기 완벽 연동",
        desc: "메이저 제조사 인버터 실외기와 전용 통신 키트(AHU KIT)를 결합하여 실내 부하 변동에 따라 냉매 유량을 세밀하게 조절합니다. 두리의 AHU 코일 설계와 대기업 실외기의 제어 로직이 맞물릴 때 비로소 카탈로그 이상의 효율이 나옵니다.",
      },
      {
        title: "고효율 DX-Coil & 분배 설계",
        desc: "대기업 실외기의 고성능 냉매 제어 로직에 최적화된 동관 배치와 냉매 분배기(Distributor) 설계를 적용하여, 증발기 전면에서 균일한 열교환 성능을 보장합니다.",
      },
      {
        title: "유연한 단일·멀티 실외기 구성",
        desc: "현장 여건에 따라 1:1 단일 실외기 구성부터 1:N 멀티 실외기 구성까지 자유로운 설계가 가능하며, 두리만의 자동제어 로직으로 실외기 운전 상태를 실시간 모니터링합니다.",
      },
    ],
    applications: [
      { category: "상업 · 오피스",  items: ["중소형 빌딩", "오피스텔", "대형 상가 및 쇼핑몰"] },
      { category: "산업 시설",      items: ["일반 제조 공장", "물류 창고", "데이터센터 (전산실)"] },
      { category: "특수 환경",      items: ["연구소 실험실", "스튜디오", "대규모 조리 시설 (급식실)"] },
    ] as ApplicationGroup[],
    expertNote:
      "직팽식 공조기는 실외기와 코일 설계의 궁합이 전부입니다. 20년간 현장을 직접 시공하고 시운전하면서 쌓은 데이터로, 삼성·LG·캐리어 실외기 어느 것과 붙여도 정격 이상의 성능을 뽑아냅니다.",
  },
  {
    cat: "항온항습기",
    badge: null,
    name: "항온항습기",
    desc: "365일 무중단 운전과 초정밀 환경 제어를 위한 고신뢰성 시스템. 온도 ±1.0°C, 습도 ±5% 이내의 정밀도를 유지하며, 24시간 중단 없는 안정적인 운전 환경을 제공합니다.",
    clients: "국립아시아문화전당 · 롯데마트 · 롯데푸드",
    images: [
      "/images/products/precision_ac_1.jpg",
      "/images/products/precision_ac_2.jpg",
      "/images/products/precision_ac_3.jpg",
    ],
    specs: [
      { label: "온도 정확도", value: "±1.0°C 이내" },
      { label: "습도 정확도", value: "±5% RH 이내" },
      { label: "제어 범위",  value: "온도 15~30°C / 습도 30~70% RH" },
      { label: "용량",       value: "1RT ~ 30RT" },
      { label: "방식",       value: "냉각+재열 / 가습 복합 제어" },
      { label: "통신",       value: "Modbus / BACnet (BMS 연동)" },
    ],
    features: [],
    designHighlights: [
      {
        title: "고성능 가습·제습 시스템",
        desc: "응답 속도가 빠른 전극봉식 가습기(Electrode Steam Humidifier)와 재열 히터를 연동하여, 외기 변화에 관계없이 실내 항온·항습 상태를 정밀하게 유지합니다.",
      },
      {
        title: "이중 안전 보호 설계",
        desc: "압축기 고압/저압 스위치, 동파 방지 서모스탯, 가습기 과승 방지 등 다중 안전 장치를 탑재하여 장비 파손을 원천 차단합니다.",
      },
      {
        title: "고성능 청정 필터링",
        desc: "미세먼지 및 유해 물질 차단을 위해 Pre-Filter를 기본 적용하며, 현장 요구에 따라 Medium 또는 HEPA 필터를 단계별로 확장 설계할 수 있습니다.",
      },
    ],
    coreTechnology: [
      {
        title: "마이크로프로세서 통합 제어",
        desc: "자체 개발한 전용 컨트롤러를 통해 온습도 데이터를 실시간 분석하고, 압축기·히터·가습기의 가동 시간을 최적화하여 불필요한 에너지 소모를 줄입니다.",
      },
      {
        title: "원격 모니터링 및 통신",
        desc: "Modbus, BACnet 등 표준 통신 프로토콜을 지원하여, 관리실이나 스마트폰에서 장비 상태 확인 및 이상 알람 수신이 가능합니다. BMS 연동 완벽 지원.",
      },
      {
        title: "저진동·저소음 원심팬",
        desc: "정동적 밸런싱이 완료된 원심 송풍기를 적용하여, 진동에 민감한 정밀 측정 장비가 있는 현장에서도 안심하고 사용할 수 있습니다.",
      },
    ],
    applications: [
      { category: "IT · 통신",  items: ["데이터센터 (IDC)", "전산실·서버룸", "무인 교환국"] },
      { category: "연구 · 교육", items: ["정밀 측정실", "실험실 (Lab)", "대학교 연구소"] },
      { category: "문화 · 예술", items: ["박물관 수장고", "미술관 전시실", "도서관 귀중본 보관고"] },
      { category: "산업",        items: ["반도체 웨이퍼 보관실", "제약 원료 창고", "전기실·제어실"] },
    ] as ApplicationGroup[],
    expertNote:
      "국립아시아문화전당 수장고처럼 1년 365일 온습도 편차를 ±1% 이내로 묶어야 하는 곳에서는 장비 신뢰성이 곧 유물 보존 여부를 결정합니다. 두리의 항온항습기는 이중 안전 설계와 자체 컨트롤러로 그 책임을 집니다.",
  },
  {
    cat: "제어 시스템",
    badge: "BEST",
    name: "공조 자동제어 판넬",
    desc: "20년 현장 로직이 집약된 고성능 PLC 통합 제어 솔루션. 단순 기동을 넘어 에너지 절감 알고리즘과 정밀 제어 로직을 통해 공조 설비의 효율을 극대화합니다.",
    clients: "현대자동차 남양연구소(45대) · 한국전력공사 · 한화",
    images: [
      "/images/products/control_panel_1.jpg",
      "/images/products/control_panel_2.jpg",
      "/images/products/control_panel_3.jpg",
    ],
    specs: [
      { label: "제어 방식",    value: "PLC (LS산전 / Mitsubishi / Siemens)" },
      { label: "통신 프로토콜", value: "Modbus / BACnet / RS-485" },
      { label: "입·출력",     value: "AI/AO/DI/DO 확장형" },
      { label: "외함 등급",    value: "IP54 이상 (옥외형 IP65)" },
      { label: "인증",         value: "전기안전인증 KS C IEC 기준" },
    ],
    features: [],
    designHighlights: [
      {
        title: "PLC 기반 맞춤형 로직 설계",
        desc: "LS, 미쓰비시 등 신뢰성 높은 PLC를 기반으로 현장 상황에 최적화된 시퀀스 및 PID 제어 프로그래밍을 직접 수행합니다.",
      },
      {
        title: "현대자동차 남양연구소 45대 납품 검증",
        desc: "현대차 남양연구소(45대), LCT 리조트(71대) 등 고난도 현장에서 검증된 회로 설계와 제작 품질을 보장합니다.",
      },
      {
        title: "직관적 HMI / Touch 제어",
        desc: "현장 관리자가 장비 상태를 한눈에 파악하고 즉각 조치할 수 있는 그래픽 기반 터치스크린 인터페이스를 제공합니다.",
      },
    ],
    coreTechnology: [
      {
        title: "지능형 인버터 속도 제어",
        desc: "부하 변화에 따른 모터 속도(RPM)를 정밀 제어하여 불필요한 동력 소모를 30~50% 절감합니다.",
      },
      {
        title: "고품질 전장 설계 및 노이즈 방지",
        desc: "통신 장애 및 오작동을 방지하는 정밀 배선 설계와 고품질 차단기·마그네트 부품을 사용하여 고장률 제로를 지향합니다.",
      },
      {
        title: "중앙 관리 시스템(BMS) 완벽 호환",
        desc: "Modbus, BACnet 등 다양한 통신 규격을 지원하여 빌딩 자동제어 시스템과 완벽하게 연동됩니다.",
      },
    ],
    applications: [
      { category: "연구소 · 공장",    items: ["현대자동차 남양연구소형 고정밀 시설", "자동차·방산·화학 공장", "발전·에너지 시설"] },
      { category: "대규모 상업 시설", items: ["대형 리조트·호텔", "복합 쇼핑몰·오피스", "공공기관·관공서"] },
      { category: "노후 설비 개선",   items: ["에너지 절감 자동화 리모델링", "구형 제어반 PLC 교체", "스마트 BMS 연동 구축"] },
    ] as ApplicationGroup[],
    expertNote:
      "현대자동차 남양연구소 45대는 두리가 직접 회로를 설계하고 프로그래밍까지 완성한 프로젝트입니다. 단순 ON/OFF가 아닌 부하 변동에 실시간 대응하는 시퀀스 로직 — 그것이 20년 노하우의 차이입니다.",
  },
  {
    cat: "제어 시스템",
    badge: null,
    name: "인버터 판넬",
    desc: "20년 현장 로직이 집약된 고성능 인버터 통합 제어 솔루션. 모터 속도 무단 제어로 에너지를 30~50% 절감하고, 해운대 LCT 리조트 71대 납품으로 대규모 현장 신뢰성을 검증했습니다.",
    clients: "해운대LCT(71대) · 판교밸리 · KIST · CJ헬스케어",
    images: [
      "/images/products/inverter_panel_1.jpg",
      "/images/products/inverter_panel_2.jpg",
      "/images/products/inverter_panel_3.jpg",
    ],
    specs: [
      { label: "인버터",  value: "LS산전 / Mitsubishi / Yaskawa" },
      { label: "용량",    value: "0.4kW ~ 220kW" },
      { label: "전압",    value: "3상 220V / 380V / 440V" },
      { label: "통신",    value: "RS-485 / Modbus 내장" },
      { label: "보호",    value: "과전류·지락·과열 보호" },
    ],
    features: [],
    designHighlights: [
      {
        title: "PLC 기반 맞춤형 인버터 로직 설계",
        desc: "LS산전, 미쓰비시 등 신뢰성 높은 인버터를 기반으로 현장 부하 특성에 최적화된 PID 속도 제어 프로그래밍을 직접 수행합니다.",
      },
      {
        title: "해운대 LCT 리조트 71대 납품 검증",
        desc: "국내 최고층 주거 시설 LCT 리조트(71대) 등 대단위 현장에서 검증된 회로 설계와 제작 품질로 안정적인 장기 운전을 보장합니다.",
      },
      {
        title: "직관적 HMI / Touch 제어",
        desc: "현장 관리자가 인버터 운전 상태와 에너지 데이터를 한눈에 파악하고 즉각 조치할 수 있는 그래픽 기반 인터페이스를 제공합니다.",
      },
    ],
    coreTechnology: [
      {
        title: "지능형 인버터 속도 제어",
        desc: "부하 변화에 따른 모터 속도(RPM)를 정밀 제어하여 불필요한 동력 소모를 30~50% 절감합니다. 소프트 스타트로 기동 충격과 기계 마모도 최소화합니다.",
      },
      {
        title: "고품질 전장 설계 및 노이즈 방지",
        desc: "고조파 저감 필터 및 정밀 배선 설계로 통신 장애와 오작동을 원천 차단하고, 고품질 차단기·마그네트 부품으로 고장률 제로를 지향합니다.",
      },
      {
        title: "중앙 관리 시스템(BMS) 완벽 호환",
        desc: "RS-485 / Modbus 통신 내장으로 빌딩 자동제어 시스템과 완벽 연동됩니다. LS산전·Mitsubishi·Yaskawa 멀티 브랜드 모두 대응합니다.",
      },
    ],
    applications: [
      { category: "연구소 · 공장",    items: ["정밀 제조·연구 시설", "제약·식품 공장", "발전·에너지 시설"] },
      { category: "대규모 상업 시설", items: ["리조트·호텔 (LCT형)", "판교·테크노밸리", "복합 쇼핑몰·오피스"] },
      { category: "노후 설비 개선",   items: ["에너지 절감 인버터 교체", "구형 스타-델타 기동반 업그레이드", "스마트 BMS 연동 구축"] },
    ] as ApplicationGroup[],
    expertNote:
      "해운대 LCT 리조트 71대는 단일 현장 최대 납품 실적입니다. 인버터 판넬은 결국 설치 후 10년이 문제인데, 두리는 제조사로서 부품 수급과 펌웨어까지 직접 책임집니다.",
  },
  {
    cat: "A/S · 유지보수",
    badge: null,
    name: "공조시스템 유지보수",
    desc: "단순 수리를 넘어 공조 시스템 전체를 정밀 진단하고 에너지 효율을 복원하는 프리미엄 유지보수 서비스. 24시간 신속 대응과 20년 현장 노하우로 다운타임을 최소화합니다.",
    clients: "전국 150건+ 실적 (병원·공장·연구소·관공서)",
    images: [
      "/images/products/maintenance_1.jpg",
      "/images/products/maintenance_2.jpg",
      "/images/products/maintenance_3.jpg",
    ],
    specs: [
      { label: "점검 주기",  value: "월·분기·연간 맞춤 계약" },
      { label: "자격",       value: "공조냉동기계기사 · 전기기사 보유" },
      { label: "출동 범위",  value: "수도권 당일 / 전국 익일" },
      { label: "호환 기종",  value: "삼성·LG·캐리어·중소기업 AHU 전 기종" },
      { label: "서비스 범위", value: "긴급 보수·성능 개선·정기 관리 전 과정" },
    ],
    features: [],
    designHighlights: [
      {
        title: "국가자격 엔지니어 직접 출동 — 하청 없음",
        desc: "외주 인력이 아닌, 공조냉동기계기사·전기기사 국가 공인 자격증을 보유한 베테랑 엔지니어가 현장을 직접 책임집니다. 20년 노하우가 현장에서 바로 발휘됩니다.",
      },
      {
        title: "시스템 정밀 진단 및 리모델링",
        desc: "노후 공조기의 코일 세척·필터 교체부터 인버터 판넬 교체까지 시스템 전체 성능 개선(Retrofit)을 원스톱으로 지원합니다.",
      },
      {
        title: "정기 점검 및 예방 정비",
        desc: "장애 발생 후 조치가 아닌, 주기적인 데이터 분석을 통해 잠재적 고장 요인을 사전에 제거하는 맞춤형 관리 계약을 제공합니다.",
      },
    ],
    coreTechnology: [
      {
        title: "멀티 브랜드 호환 기술",
        desc: "삼성·LG·캐리어 대기업 인버터 실외기부터 중소기업 주문형 AHU까지 모든 기종의 컨트롤 로직 분석 및 수리가 가능합니다.",
      },
      {
        title: "자동제어 로직 최적화",
        desc: "오작동하는 PLC/DDC 프로그램을 현장 부하에 맞춰 재설계하여 에너지 낭비를 막고 장비 수명을 연장합니다.",
      },
      {
        title: "신속한 부품 수급 및 대응",
        desc: "다년간 축적된 부품 공급망을 통해 핵심 소모품 및 전장 부품을 최단 시간 내에 확보하여 다운타임을 최소화합니다.",
      },
    ],
    applications: [
      { category: "긴급 보수",   items: ["압축기(Comp) 교체", "냉매 누설 탐지·충전", "컨트롤러 수리"] },
      { category: "성능 개선",   items: ["노후 판넬 인버터화", "스마트 원격 감시 시스템 구축", "구형 AHU 코일·팬 교체"] },
      { category: "정기 관리",   items: ["병원 수술실·클린룸 풍량 밸런싱(TAB)", "제약 공정 온습도 보정", "연간 예방 정비 계약"] },
    ] as ApplicationGroup[],
    expertNote:
      "두리가 직접 만든 장비는 두리가 직접 고칩니다. 제조사이기 때문에 내부 회로와 냉매 사이클을 가장 잘 알고, 부품도 가장 빠르게 구합니다. 그것이 두리 A/S의 경쟁력입니다.",
    ctaLabel: "긴급 A/S 및 기술 상담 신청",
  },
];
