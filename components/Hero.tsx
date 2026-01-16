
import React, { useEffect, useState } from 'react';
import { Language } from '../App';

const Hero: React.FC<{ lang: Language }> = ({ lang }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const shoot = () => {
    // @ts-ignore
    if (window.confetti) {
      // @ts-ignore
      window.confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#3b82f6', '#60a5fa', '#ffffff']
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#020617]">
      {/* Space Background Layer */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px) scale(1.1)` }}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-transparent to-[#020617]"></div>
      </div>

      {/* Satellite Constellation Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <svg className="w-full h-full opacity-40" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="500" cy="500" r="400" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" />
          <circle cx="500" cy="500" r="320" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1" strokeDasharray="5 10" />
          <ellipse cx="500" cy="500" rx="450" ry="200" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" transform="rotate(45 500 500)" />
          <g className="animate-orbital-1">
            <circle cx="900" cy="500" r="4" fill="#60a5fa">
               <animateMotion path="M 0 0 C 400 -200 600 -200 1000 0" dur="15s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-blue-600/20 border border-blue-400/30 mb-10 animate-fadeIn backdrop-blur-md">
            <span className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-blue-500"></span>
            </span>
            <span className="text-blue-300 text-sm font-black uppercase tracking-[0.3em] italic">
              {lang === 'ko' ? '인공위성 기반 위치 결정' : 'Space-Based Positioning'}
            </span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-[950] text-white leading-[0.9] tracking-[-0.06em] mb-12 animate-slideUp">
            {lang === 'ko' ? <>미래를 <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white">탐험하다</span> <br />ASCEN과 함께.</> 
              : <>NAVIGATE <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white">THE FUTURE</span> <br />WITH ASCEN.</>}
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed mb-14 max-w-2xl animate-fadeIn delay-300 drop-shadow-md">
            {lang === 'ko' ? 
              <>(주)아센코리아는 인공위성 신호를 cm 단위의 정밀 데이터로 전환하여 <br className="hidden md:block" /> 자율주행과 초연결 사회의 위치 결정 기준을 재정의합니다.</> :
              <>ASCENKOREA redefines positioning standards for autonomous driving and hyper-connected society by converting satellite signals into cm-level precise data.</>}
          </p>

          <div className="flex flex-col sm:flex-row gap-8 animate-fadeIn delay-500">
            <button 
              onClick={shoot}
              className="group bg-blue-600 hover:bg-blue-500 text-white px-14 py-6 rounded-full font-black text-2xl transition-all transform hover:scale-105 shadow-[0_0_60px_rgba(37,99,235,0.4)] flex items-center justify-center gap-4"
            >
              {lang === 'ko' ? '기술력 확인하기' : 'Explore Tech'}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-7 h-7 group-hover:translate-x-2 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
            <button className="bg-white/5 hover:bg-white/10 backdrop-blur-xl text-white border border-white/20 px-14 py-6 rounded-full font-black text-2xl transition-all hover:border-white/40 shadow-2xl">
              {lang === 'ko' ? '제품 카탈로그' : 'Catalog'}
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-50">
        <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.5em] vertical-text">SCROLL</span>
        <div className="w-0.5 h-16 bg-gradient-to-b from-blue-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
