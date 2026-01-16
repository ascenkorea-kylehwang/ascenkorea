
import React from 'react';
import { ViewState, Language } from '../../App';

const ReceiverDetailPage: React.FC<{ lang: Language; setView: (v: ViewState) => void }> = ({ lang, setView }) => {
  return (
    <div className="pt-24 animate-fadeIn">
      <section className="bg-blue-950 py-32 text-white text-center">
        <div className="container mx-auto px-6">
          <button 
            onClick={() => setView('home')}
            className="mb-12 inline-flex items-center gap-3 text-blue-400 hover:text-white transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 group-hover:-translate-x-2 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span className="font-black text-sm uppercase tracking-widest">{lang === 'ko' ? '홈으로' : 'Home'}</span>
          </button>
          <span className="text-blue-400 font-black tracking-widest uppercase mb-4 block italic">All-in-One Solution</span>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">GNSS Receivers & Kits</h1>
          <p className="text-xl md:text-2xl font-medium text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {lang === 'ko'
              ? '복잡한 설계를 건너뛰고 현장에 즉시 투입하세요. 아센코리아의 통합 수신기는 전원 연결만으로 최고 수준의 데이터를 출력합니다.'
              : 'Skip complex designs and deploy immediately to the field. ASCENKOREA\'s integrated receivers output world-class data with just a power connection.'}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-blue-50 p-16 rounded-[4rem] flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
                <img src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=1000" className="rounded-3xl shadow-2xl" alt="Receiver" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-black text-blue-950 mb-8">{lang === 'ko' ? '즉시 사용 가능한 산업용 솔루션' : 'Ready-to-Use Industrial Solution'}</h2>
              <div className="space-y-6 text-slate-600 text-lg font-medium leading-relaxed">
                <p>{lang === 'ko' 
                  ? '산업용 환경에 최적화된 아센코리아의 수신기는 가혹한 환경(IP67 방진/방수)에서도 흔들림 없는 성능을 발휘합니다.'
                  : 'Optimized for industrial environments, ASCENKOREA\'s receivers deliver unwavering performance even in harsh environments (IP67 dust/waterproof).'}
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <span className="text-blue-600 font-black block mb-2 italic">DURABILITY</span>
                        <p className="text-sm">{lang === 'ko' ? '군용 등급의 진동/충격 테스트 통과' : 'Passed military-grade vibration/shock testing'}</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <span className="text-blue-600 font-black block mb-2 italic">INTERFACE</span>
                        <p className="text-sm">RS232, RS422, USB, Bluetooth {lang === 'ko' ? '지원' : 'Support'}</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReceiverDetailPage;
