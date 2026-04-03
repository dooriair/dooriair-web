export default function TrustPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a1e4a] text-white p-6 leading-relaxed">
      <div className="max-w-3xl w-full text-center space-y-8">
        <h1 className="text-5xl font-black tracking-tight text-blue-400 mb-2">신뢰성</h1>
        <p className="text-lg font-medium text-blue-200 uppercase tracking-widest italic">Unshakable Trust</p>
        
        <div className="space-y-6 py-10 border-y border-white/10">
          <h2 className="text-3xl font-extrabold text-white leading-snug">
            "갑과 을의 관계를 넘어, <br/> 
            <span className="text-blue-400">동반 성장의 파트너가 됩니다.</span>"
          </h2>
          
          <p className="text-xl font-light text-gray-300">
            주식회사 두리에 '갑'과 '을'은 없습니다. 우리는 오직 <span className="font-bold text-white text-2xl">'공존'</span>만을 목적으로 하며, 
            고객사가 성공해야 우리도 성장한다는 믿음으로 협력합니다. [cite: 30, 31]
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
          <p className="text-lg">
            <span className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded-md font-bold mb-3">설득 포인트</span><br/>
            한 번의 납품으로 끝나지 않는 철저한 사후 관리와 투명한 소통은 <br/>
            <span className="font-bold text-blue-300 text-xl">삼성, 한화 등 국내 유수 기업들</span>이 두리를 선택한 이유입니다. [cite: 187, 193]
          </p>
        </div>

        <a href="/" className="inline-block mt-8 px-10 py-4 bg-blue-600 rounded-full hover:bg-blue-500 transition-all font-black text-lg shadow-[0_0_20px_rgba(37,99,235,0.4)]">
          메인으로 돌아가기
        </a>
      </div>
    </div>
  );
}