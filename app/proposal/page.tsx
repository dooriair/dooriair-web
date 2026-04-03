export default function ProposalPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a1e4a] text-white p-6 leading-relaxed">
      <div className="max-w-3xl w-full text-center space-y-8">
        <h1 className="text-5xl font-black tracking-tight text-blue-400 mb-2">제안성</h1>
        <p className="text-lg font-medium text-blue-200 uppercase tracking-widest italic">Strategic Proposal</p>
        
        <div className="space-y-6 py-10 border-y border-white/10">
          <h2 className="text-3xl font-extrabold text-white leading-snug">
            "단순한 견적이 아닙니다.<br/> 
            <span className="text-blue-400">현장의 미래를 설계합니다.</span>"
          </h2>
          
          <p className="text-xl font-light text-gray-300">
            범용 공기조화기부터 고효율 히트펌프까지, 우리는 단순히 장비를 파는 것이 아니라 
            귀하의 <span className="font-bold text-white text-2xl">현장 특성과 운용 효율을 극대화</span>할 수 있는 
            <span className="underline decoration-blue-500 decoration-4 underline-offset-8 font-bold"> '최적의 공조 생태계'</span>를 제안합니다.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
          <p className="text-lg">
            <span className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded-md font-bold mb-3">설득 포인트</span><br/>
            <span className="font-bold text-blue-300 text-xl">20년 현장 데이터 분석</span>을 통해 에너지 낭비는 줄이고 <br/>
            성능은 <span className="text-2xl text-white font-black">1%까지</span> 끌어올리는 맞춤형 설계를 약속합니다.
          </p>
        </div>

        <a href="/" className="inline-block mt-8 px-10 py-4 bg-blue-600 rounded-full hover:bg-blue-500 transition-all font-black text-lg shadow-[0_0_20px_rgba(37,99,235,0.4)]">
          메인으로 돌아가기
        </a>
      </div>
    </div>
  );
}