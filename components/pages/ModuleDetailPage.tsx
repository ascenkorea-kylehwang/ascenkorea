
import React from 'react';
// Fix: Import ViewState and Language from types instead of App
import { ViewState, Language } from '../../types';

const ModuleDetailPage: React.FC<{ lang: Language; setView: (v: ViewState) => void }> = ({ lang, setView }) => {
  return (
    <div className="pt-24 animate-fadeIn">
      <section className="bg-blue-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <button 
            onClick={() => setView('home')}
            className="mb-12 inline-flex items-center gap-3 text-blue-300 hover:text-white transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 group-hover:-translate-x-2 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span className="font-black text-sm uppercase tracking-widest">{lang === 'ko' ? '홈으로' : 'Home'}</span>
          </button>
          <span className="text-blue-300 font-black tracking-widest uppercase mb-4 block italic">Core Component</span>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Trimble GNSS<br />High-Precision Modules</h1>
          <p className="text-xl md:text-2xl font-medium text-blue-100 max-w-3xl leading-relaxed">
            {lang === 'ko' 
              ? '세계 최고 수준의 정밀도를 자랑하는 Trimble GNSS 엔진을 만나보세요. RTK, MSS 서비스를 통한 cm급 위치 정확도를 제공합니다.'
              : 'Meet the Trimble GNSS engine boasting world-class precision. We provide cm-level position accuracy through RTK and MSS services.'}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <h2 className="text-4xl font-black text-blue-950 mb-10">{lang === 'ko' ? '최고의 성능, 안정적인 수신' : 'Best Performance, Stable Reception'}</h2>
              <p className="text-slate-600 text-lg font-medium leading-relaxed mb-10">
                {lang === 'ko'
                  ? '아센코리아가 공급하는 Trimble 모듈은 L1, L2, L5 전 대역을 지원하며, 도시 협곡과 같은 열악한 환경에서도 안정적인 수신 성능을 보장합니다. ZED-F9P와 같은 글로벌 베스트셀러부터 산업용 특화 모듈까지 다양한 라인업을 보유하고 있습니다.'
                  : 'Trimble modules supplied by ASCENKOREA support all L1, L2, and L5 bands and ensure stable reception performance even in harsh environments such as urban canyons. We have a diverse lineup from global bestsellers like ZED-F9P to industry-specific modules.'}
              </p>
              <ul className="space-y-6">
                {(lang === 'ko' ? [
                  "CM 단위의 고정밀 RTK 위치 결정 솔루션",
                  "다중 주파수(Multi-band) 동시 수신 지원",
                  "다양한 산업 규격 인터페이스(UART, USB, SPI)",
                  "저전력 설계로 장시간 작동 가능"
                ] : [
                  "CM-level high-precision RTK positioning solution",
                  "Multi-band concurrent reception support",
                  "Various industrial standard interfaces (UART, USB, SPI)",
                  "Low-power design for long-term operation"
                ]).map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-800 font-bold">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-[10px]">✓</div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" alt="Module Detail" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModuleDetailPage;
