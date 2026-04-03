// app/expertise/page.tsx

export default function ExpertisePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a1e4a] text-white p-6 leading-relaxed">
      <div className="max-w-3xl w-full text-center space-y-8">
        <h1 className="text-5xl font-black tracking-tight text-blue-400 mb-2">전문성</h1>
        <p className="text-lg font-medium text-blue-200 uppercase tracking-widest italic">Technical Expertise</p>
        
        <div className="space-y-6 py-10 border-y border-white/10">
          <h2 className="text-3xl font-extrabold text-white leading-snug">
            "현장의 변수는 <br/> 
            <span className="text-blue-400">베테랑의 노하우로만 통제됩니다.</span>"
          </h2>
          
          <p className="text-xl font-light text-gray-300">
            다년간의 필드 경험을 가진 최정예 엔지니어 그룹이 함께합니다. 
            공조 시스템에서 발생하는 복잡한 변수들을 이론이 아닌 <br/>
            <span className="font-bold text-white text-2xl">'실전 노하우'</span>로 가장 쉽고 빠르게 해결합니다.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
          <p className="text-lg">
            <span className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded-md font-bold mb-3">설득 포인트</span><br/>
            설계부터 제작, 시운전까지 전 과정을 직접 수행하는 <br/>
            두리만의 <span className="font-bold text-blue-300 text-xl">'원스톱 엔지니어링'</span>이 귀하의 자산 가치를 지킵니다.
          </p>
        </div>

        <a href="/" className="inline-block mt-8 px-10 py-4 bg-blue-600 rounded-full hover:bg-blue-500 transition-all font-black text-lg shadow-[0_0_20px_rgba(37,99,235,0.4)]">
          메인으로 돌아가기
        </a>
      </div>
    </div>
  );
}