
import React from 'react';
// Fix: Import ViewState and Language from types instead of App
import { ViewState, Language } from '../../types';

const AntennaDetailPage: React.FC<{ lang: Language; setView: (v: ViewState) => void }> = ({ lang, setView }) => {
  return (
    <div className="pt-24 animate-fadeIn">
      <section className="bg-slate-900 py-32 text-white">
        <div className="container mx-auto px-6">
          <button 
            onClick={() => setView('home')}
            className="mb-12 inline-flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 group-hover:-translate-x-2 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span className="font-black text-sm uppercase tracking-widest">{lang === 'ko' ? '홈으로' : 'Home'}</span>
          </button>
          <span className="text-blue-400 font-black tracking-widest uppercase mb-4 block italic">RF Engineering</span>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">High Performance<br />GNSS Antennas</h1>
          <p className="text-xl md:text-2xl font-medium text-slate-400 max-w-3xl leading-relaxed">
            {lang === 'ko'
              ? '아센코리아의 안테나 기술력은 수신 환경의 한계를 극복합니다. 직접 설계하고 생산하는 고성능 안테나 라인업을 확인하세요.'
              : 'ASCENKOREA\'s antenna technology overcomes the limitations of reception environments. Check out our high-performance antenna lineup designed and produced in-house.'}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                title: lang === 'ko' ? "측량 등급" : "Survey Grade", 
                desc: lang === 'ko' ? "RTK 및 측량에 적합한 고성능 초크 링 및 지오데틱 안테나" : "High-performance choke ring and geodetic antennas suitable for RTK and surveying",
                img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
              },
              { 
                title: lang === 'ko' ? "차량용" : "Automotive", 
                desc: lang === 'ko' ? "차량용 IATF16949 인증 규격에 부합하는 내장/외장 안테나" : "Internal/external antennas meeting automotive IATF16949 certification standards",
                img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000"
              },
              { 
                title: lang === 'ko' ? "IoT 및 모바일" : "IoT & Mobile", 
                desc: lang === 'ko' ? "초소형 패치 안테나 및 커스텀 기구 설계 대응 지원" : "Support for ultra-small patch antennas and custom mechanical design",
                img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000"
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 group">
                <div className="h-64 overflow-hidden">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-black text-blue-950 mb-4">{item.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AntennaDetailPage;
