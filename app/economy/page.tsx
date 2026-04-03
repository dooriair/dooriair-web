export default function EconomyPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a1e4a] text-white p-6 leading-relaxed">
      <div className="max-w-3xl w-full text-center space-y-8">
        <h1 className="text-5xl font-black tracking-tight text-blue-400 mb-2">경제성</h1>
        <p className="text-lg font-medium text-blue-200 uppercase tracking-widest italic">Optimized Economy</p>
        
        <div className="space-y-6 py-10 border-y border-white/10">
          <h2 className="text-3xl font-extrabold text-white leading-snug">
            "불필요한 거품을 걷어내고, <br/> 
            <span className="text-blue-400">최고의 결과값만 남깁니다.</span>"
          </h2>
          
          <p className="text-xl font-light text-gray-300">
            기존 업체들의 관행적인 오버 스펙과 불필요한 시스템 비용을 과감히 제거했습니다. [cite: 34] <br/>
            효율적인 기업 운영을 통해 고객에게 <span className="font-bold text-white text-2xl text-orange-400">최소한의 비용으로 압도적인 결과</span>를 증명합니다. [cite: 35]
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
          <p className="text-lg">
            <span className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded-md font-bold mb-3">설득 포인트</span><br/>
            초기 투자비 절감은 물론, 장기적인 <span className="font-bold text-blue-300 text-xl">에너지 효율 개선</span>을 통해 <br/>
            실질적인 운영비 감소를 경험하게 해드립니다. [cite: 19]
          </p>
        </div>

        <a href="/" className="inline-block mt-8 px-10 py-4 bg-blue-600 rounded-full hover:bg-blue-500 transition-all font-black text-lg shadow-[0_0_20px_rgba(37,99,235,0.4)]">
          메인으로 돌아가기
        </a>
      </div>
    </div>
  );
}