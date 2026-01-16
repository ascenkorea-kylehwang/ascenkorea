
import React from 'react';
// Fix: Import ViewState and Language from types instead of App
import { ViewState, Language } from '../../types';

const MappingProjectPage: React.FC<{ lang: Language; setView: (v: ViewState) => void }> = ({ lang, setView }) => {
  return (
    <div className="pt-24 animate-fadeIn bg-white">
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="Mapping" />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <button 
            onClick={() => setView('home')}
            className="mb-12 inline-flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 group-hover:-translate-x-2 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span className="font-black text-sm uppercase tracking-widest">{lang === 'ko' ? '홈으로 돌아가기' : 'Back to Home'}</span>
          </button>
          <h1 className="text-5xl md:text-8xl font-[950] text-white mb-8 tracking-tighter">
            {lang === 'ko' ? '고정밀 3D 지형 매핑' : 'High-Precision 3D Mapping'}
          </h1>
          <div className="h-1 w-32 bg-indigo-500 mx-auto rounded-full"></div>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-32">
             <div className="inline-block px-4 py-1 bg-indigo-100 text-indigo-600 text-xs font-black uppercase tracking-widest mb-8 rounded-full">Digital Twin Project</div>
             <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-12 leading-tight">
                {lang === 'ko' ? <>현실 세상을 디지털로 <br /> 완벽히 복제합니다.</> : <>Perfectly Replicating the <br /> Real World Digitally.</>}
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-slate-500 font-medium text-lg leading-relaxed">
                <p>
                    {lang === 'ko'
                      ? '스마트 시티와 메타버스 서비스의 기초가 되는 디지털 트윈 구축에는 방대한 양의 3D 데이터가 필요합니다. 하지만 데이터의 정확도가 낮다면 그 가치는 반감됩니다. 아센코리아는 드론과 모바일 매핑 시스템(MMS)에 탑재되는 초정밀 GNSS 솔루션을 통해 데이터의 위치적 무결성을 보장합니다.'
                      : 'Building digital twins, the foundation for smart cities and metaverse services, requires vast amounts of 3D data. However, the value is halved if data accuracy is low. ASCENKOREA ensures positional integrity of data through ultra-precision GNSS solutions mounted on drones and mobile mapping systems (MMS).'}
                </p>
                <p>
                    {lang === 'ko'
                      ? 'LiDAR 포인트 클라우드와 정밀 위치 정보를 결합하여 도시 전체를 cm 단위의 정밀도로 맵핑하며, 이는 도시 계획, 재난 시뮬레이션, 자율주행 지도 제작 등 무궁무진한 분야에 활용됩니다.'
                      : 'Combining LiDAR point clouds with precision positioning, we map entire cities with cm-level accuracy. This data is utilized in countless fields including urban planning, disaster simulation, and autonomous driving map production.'}
                </p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {[
               { img: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800', title: lang === 'ko' ? '드론 매핑' : 'Drone Mapping' },
               { img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800', title: lang === 'ko' ? '차량 매핑' : 'Vehicle Mapping' },
               { img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800', title: lang === 'ko' ? '데이터 분석' : 'Data Analysis' }
            ].map((item, i) => (
              <div key={i} className="group rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                 <div className="h-64 overflow-hidden">
                    <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 </div>
                 <div className="p-8 bg-slate-50 text-center">
                    <h4 className="font-black text-slate-800 text-xl">{item.title}</h4>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-20 bg-slate-50 text-center">
        <button 
          onClick={() => setView('home')}
          className="bg-blue-600 text-white px-12 py-5 rounded-full font-black text-xl shadow-2xl hover:bg-blue-700 transition-all transform hover:-translate-y-1"
        >
          {lang === 'ko' ? '메인 화면으로 이동' : 'Return to Home'}
        </button>
      </div>
    </div>
  );
};

export default MappingProjectPage;
