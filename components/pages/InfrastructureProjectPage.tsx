
import React from 'react';
// Fix: Import ViewState and Language from types instead of App
import { ViewState, Language } from '../../types';

const InfrastructureProjectPage: React.FC<{ lang: Language; setView: (v: ViewState) => void }> = ({ lang, setView }) => {
  return (
    <div className="pt-24 animate-fadeIn bg-white">
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" alt="Bridge Monitoring" />
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"></div>
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
            {lang === 'ko' ? '스마트 시티 교량 모니터링' : 'Smart City Bridge Monitoring'}
          </h1>
          <div className="h-1 w-32 bg-cyan-500 mx-auto rounded-full"></div>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
            {[
              { label: 'Technology', val: 'RTK-GNSS' },
              { label: 'Precision', val: '±1.0cm' },
              { label: 'Update Rate', val: '10Hz' }
            ].map((stat, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 text-center">
                <p className="text-slate-400 font-black text-xs uppercase tracking-widest mb-3">{stat.label}</p>
                <p className="text-3xl font-black text-blue-900 italic tracking-tight">{stat.val}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-2xl max-w-none text-slate-600 font-medium leading-relaxed mb-24">
            <h2 className="text-4xl font-black text-slate-900 mb-10">
              {lang === 'ko' ? '인명과 안전을 지키는 실시간 정밀 감시' : 'Real-time Precision Monitoring for Public Safety'}
            </h2>
            <p className="mb-8">
              {lang === 'ko' 
                ? '대형 교량이나 댐과 같은 사회 기반 시설물은 미세한 구조적 변형이 대형 사고로 이어질 수 있습니다. 아센코리아는 이러한 인프라의 안전을 보장하기 위해 Trimble의 고정밀 RTK 엔진을 활용한 24시간 변위 모니터링 시스템을 구축했습니다.'
                : 'Structural deformation in infrastructure such as bridges and dams can lead to major accidents. ASCENKOREA established a 24-hour displacement monitoring system using Trimble\'s high-precision RTK engine to ensure the safety of such infrastructure.'}
            </p>
            <p>
              {lang === 'ko'
                ? '기상 조건이나 주야간 환경에 상관없이 cm 단위의 변화를 실시간으로 감지하며, 이상 징후 발생 시 관리자에게 즉각적인 경보를 전송합니다. 이는 단순한 측정 이상의 데이터 기반 안전망을 의미합니다.'
                : 'Regardless of weather conditions or day/night environments, it detects cm-level changes in real-time and sends immediate alerts to administrators when anomalies occur. This represents a data-driven safety net beyond simple measurement.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <img src="https://images.unsplash.com/photo-1545139224-79b177e607ee?auto=format&fit=crop&q=80&w=1000" className="rounded-[3rem] shadow-xl h-[400px] object-cover" />
            <img src="https://images.unsplash.com/photo-1584464431055-661704944933?auto=format&fit=crop&q=80&w=1000" className="rounded-[3rem] shadow-xl h-[400px] object-cover" />
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

export default InfrastructureProjectPage;
