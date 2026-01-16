import React from 'react';
import { Language } from '../../App';

// Updated to accept lang prop to fix TypeScript error in App.tsx
const CompanyPage: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <div className="pt-24 animate-fadeIn">
      {/* Hero Section */}
      <section className="relative py-32 bg-blue-900 text-white">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover opacity-20" alt="Office Background" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6">{lang === 'ko' ? '회사소개' : 'About Us'}</h1>
          <p className="text-xl md:text-2xl font-light text-blue-100 italic">
            {lang === 'ko' ? '"위치 정보의 가치를 더해 세상을 연결합니다."' : '"Connecting the world by adding value to positioning information."'}
          </p>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000" alt="CEO Message" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-4xl font-black text-blue-950 mb-8">{lang === 'ko' ? 'CEO 인사말' : 'CEO Greeting'}</h2>
              <div className="text-slate-600 space-y-6 text-lg font-medium leading-relaxed">
                <p>{lang === 'ko' 
                  ? '(주)아센코리아는 2005년 설립 이래 GNSS 전문 기업으로 한 길만을 걸어왔습니다.'
                  : 'ASCENKOREA has walked the single path as a GNSS specialized company since its establishment in 2005.'}</p>
                <p>{lang === 'ko'
                  ? '단순한 모듈 공급을 넘어, 고객사의 시스템에 최적화된 하드웨어 설계와 소프트웨어 통합을 지원하며 국내외 유수의 기업들과 파트너십을 맺고 있습니다.'
                  : 'Beyond simple module supply, we support hardware design and software integration optimized for our clients\' systems, partnering with leading domestic and international companies.'}</p>
                <p>{lang === 'ko'
                  ? '초정밀 위치 결정 기술은 미래 자율주행, 스마트 모빌리티의 핵심입니다. 아센코리아는 신뢰할 수 있는 데이터와 독보적인 기술력으로 내일의 세상을 설계합니다.'
                  : 'Ultra-precision positioning technology is the core of future autonomous driving and smart mobility. ASCENKOREA designs the world of tomorrow with reliable data and unrivaled technical expertise.'}</p>
                <p className="pt-4 text-blue-900 font-bold">{lang === 'ko' ? '대표이사 황국연' : 'CEO Gookyeon Hwang'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-blue-950">{lang === 'ko' ? '비전 및 핵심가치' : 'Vision & Core Values'}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: lang === 'ko' ? '기술 혁신' : 'Tech Innovation', desc: lang === 'ko' ? '최신 GNSS 트렌드를 선도하는 R&D 역량' : 'R&D capabilities leading the latest GNSS trends', icon: '🚀' },
              { title: lang === 'ko' ? '고객 신뢰' : 'Customer Trust', desc: lang === 'ko' ? '검증된 품질과 철저한 기술 지원' : 'Proven quality and thorough technical support', icon: '🤝' },
              { title: lang === 'ko' ? '글로벌 표준' : 'Global Standards', desc: lang === 'ko' ? '세계 최고 수준의 솔루션 공급' : 'Supplying world-class solutions', icon: '🌍' },
            ].map((v, i) => (
              <div key={i} className="bg-white p-12 rounded-3xl shadow-sm text-center border border-slate-100">
                <div className="text-6xl mb-6">{v.icon}</div>
                <h3 className="text-2xl font-black text-blue-900 mb-4">{v.title}</h3>
                <p className="text-slate-500 font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyPage;