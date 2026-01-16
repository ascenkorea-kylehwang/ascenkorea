
import React from 'react';
// Fix: Import ViewState and Language from types instead of App
import { ViewState, Language } from '../../types';

const MobilityProjectPage: React.FC<{ lang: Language; setView: (v: ViewState) => void }> = ({ lang, setView }) => {
  return (
    <div className="pt-24 animate-fadeIn bg-white">
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1555617766-c94804975da3?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="Autonomous Driving" />
          <div className="absolute inset-0 bg-blue-950/70 backdrop-blur-md"></div>
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
          <h1 className="text-5xl md:text-8xl font-[950] text-white mb-8 tracking-tighter uppercase italic">
            {lang === 'ko' ? '자율주행 셔틀 인프라' : 'Autonomous Mobility Infra'}
          </h1>
          <div className="h-1 w-32 bg-blue-400 mx-auto rounded-full"></div>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-16 items-center mb-32">
            <div className="md:w-1/2">
                <h2 className="text-4xl font-black text-slate-900 mb-8">
                  {lang === 'ko' ? '레벨 4 자율주행을 위한 기준점' : 'Reference Point for Level 4 Autonomy'}
                </h2>
                <div className="text-slate-600 text-lg font-medium leading-relaxed space-y-6">
                    <p>
                        {lang === 'ko' 
                          ? '도심지에서의 자율주행은 수많은 빌딩 숲과 신호 간섭이라는 난관이 존재합니다. 아센코리아는 이러한 복잡한 환경에서도 차량이 자신의 위치를 cm 단위로 정확히 파악할 수 있도록 네트워크 RTK 보정 정보를 전송하는 통신 인프라를 성공적으로 구축했습니다.'
                          : 'Autonomous driving in urban areas faces challenges like high-rise buildings and signal interference. ASCENKOREA successfully established a communication infrastructure that transmits network RTK correction information, allowing vehicles to determine their position within cm-level accuracy even in complex environments.'}
                    </p>
                    <p>
                        {lang === 'ko'
                          ? '이 프로젝트는 스마트 셔틀의 안전한 차선 유지와 정류장 정밀 정차를 가능하게 하며, 미래형 교통 시스템의 중추적인 역할을 담당하고 있습니다.'
                          : 'This project enables safe lane keeping and precise stop arrivals for smart shuttles, playing a pivotal role in the transportation systems of the future.'}
                    </p>
                </div>
            </div>
            <div className="md:w-1/2">
                <div className="relative group">
                    <div className="absolute -inset-4 bg-blue-500/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000" className="relative rounded-[3rem] shadow-2xl" />
                </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[4rem] p-16 text-white mb-32 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-10 opacity-10">
                <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                </svg>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                <div>
                   <h3 className="text-2xl font-black mb-6 italic text-blue-400">Key Features</h3>
                   <ul className="space-y-4 font-bold text-slate-300">
                      <li className="flex gap-3">
                         <span className="text-blue-500">01</span>
                         {lang === 'ko' ? '초저지연(Latency < 20ms) 데이터 전송' : 'Ultra-low latency data transmission'}
                      </li>
                      <li className="flex gap-3">
                         <span className="text-blue-500">02</span>
                         {lang === 'ko' ? '다중 통신 프로토콜(LTE, 5G-V2X) 지원' : 'Support for multiple communication protocols'}
                      </li>
                      <li className="flex gap-3">
                         <span className="text-blue-500">03</span>
                         {lang === 'ko' ? '차량용 등급의 하드웨어 내구도 설계' : 'Automotive-grade hardware durability'}
                      </li>
                   </ul>
                </div>
                <div className="flex flex-col justify-center">
                   <p className="text-5xl font-black mb-4 tracking-tighter">99.9%</p>
                   <p className="text-slate-400 font-bold uppercase tracking-widest">{lang === 'ko' ? '시스템 가동 시간 보장' : 'System Uptime Guaranteed'}</p>
                </div>
             </div>
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

export default MobilityProjectPage;
