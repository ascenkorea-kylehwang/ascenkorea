import React from 'react';
import { Language } from '../../App';

// Updated to accept lang prop to fix TypeScript error in App.tsx
const TechnologyPage: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <div className="pt-24 animate-fadeIn">
      <section className="py-24 bg-blue-950 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black mb-6">{lang === 'ko' ? '핵심기술' : 'Core Tech'}</h1>
          <p className="text-xl text-blue-300">{lang === 'ko' ? '정밀함을 향한 끊임없는 연구와 기술의 집약' : 'Constant research and technical integration for precision'}</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          {[
            {
              title: lang === 'ko' ? 'RTK 고정밀 위치 결정' : 'RTK High-Precision Positioning',
              desc: lang === 'ko' 
                ? '기준국과 이동국 간의 위성 신호 위상차를 실시간으로 분석하여 cm 단위의 오차 범위 내에서 위치 정보를 제공합니다. 아센코리아는 다양한 멀티밴드(L1/L2/L5) 지원을 통해 신뢰도를 극대화합니다.'
                : 'By analyzing the phase difference of satellite signals between the base station and the rover in real-time, we provide position information within cm-level error margin. ASCENKOREA maximizes reliability through various multi-band (L1/L2/L5) support.',
              image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800'
            },
            {
              title: lang === 'ko' ? '안테나 성능 최적화 (RF Tuning)' : 'Antenna Performance Optimization (RF Tuning)',
              desc: lang === 'ko'
                ? '고객사의 기구 설계에 따라 달라지는 RF 환경을 시뮬레이션하고, 능동/수동 안테나의 매칭 회로를 최적화하여 최적의 수신 감도를 구현하는 RF 기술 서비스를 제공합니다.'
                : 'We simulate RF environments that vary according to customer\'s mechanical design and optimize matching circuits for active/passive antennas to provide RF technical services that achieve optimal reception sensitivity.',
              image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
            }
          ].map((item, i) => (
            <div key={i} className={`flex flex-col lg:flex-row gap-16 items-center mb-32 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <img src={item.image} className="rounded-3xl shadow-2xl w-full h-[400px] object-cover" alt={item.title} />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-black text-blue-950 mb-6">{item.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;