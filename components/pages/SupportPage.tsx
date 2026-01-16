import React from 'react';
import ChatWidget from '../ChatWidget';
import { Language } from '../../App';

// Updated to accept lang prop to fix TypeScript error in App.tsx
const SupportPage: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <div className="pt-24 animate-fadeIn">
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-blue-950">{lang === 'ko' ? '고객지원' : 'Support'}</h1>
          <p className="text-xl text-slate-500 font-medium">{lang === 'ko' ? '필요한 모든 기술적인 도움을 드립니다.' : 'We provide all the technical help you need.'}</p>
        </div>
      </section>

      {/* Passed lang prop to ChatWidget to fix TypeScript error */}
      <ChatWidget lang={lang} />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="p-12 bg-blue-950 rounded-[3rem] text-white">
              <h3 className="text-3xl font-black mb-8">Contact Info</h3>
              <ul className="space-y-6 text-lg text-blue-100 font-medium">
                <li className="flex items-center gap-4">
                  <span className="text-blue-400">Tel:</span> 1544-3818
                </li>
                <li className="flex items-center gap-4">
                  <span className="text-blue-400">Email:</span> sales@ascen.co.kr
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-blue-400">Addr:</span> {lang === 'ko' ? '서울시 금천구 가산디지털단지1로2 우림라이온스밸리 905호' : 'Room 905, Woorim Lions Valley, 2 Gasan digital 1-ro, Geumcheon-gu, Seoul'}
                </li>
              </ul>
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              {/* Google Maps Placeholder */}
              <div className="w-full h-full bg-slate-200 flex items-center justify-center min-h-[400px] relative">
                <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" alt="Map" className="w-full h-full object-cover" />
                <div className="absolute bg-white p-6 rounded-2xl shadow-xl border border-slate-100 text-center">
                  <p className="font-black text-blue-900">{lang === 'ko' ? '아센코리아 본사' : 'ASCENKOREA HQ'}</p>
                  <p className="text-sm text-slate-500">{lang === 'ko' ? '우림라이온스밸리 905호' : 'Woorim Lions Valley #905'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;