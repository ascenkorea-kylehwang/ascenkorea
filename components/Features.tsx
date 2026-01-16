
import React from 'react';
import { ViewState, Language } from '../App';

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  onClick: () => void;
  lang: Language;
  bgImage: string;
}

// Fixed: Defined as React.FC to correctly handle React-specific props like 'key'
const ProductCard: React.FC<ProductCardProps> = ({ title, description, icon, category, onClick, lang, bgImage }) => (
  <div 
    onClick={onClick}
    className="relative group h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.4)] border border-slate-200"
  >
    {/* Background Image - Static background */}
    <div className="absolute inset-0 z-0">
      <div 
        className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out scale-100 group-hover:scale-105"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
    </div>

    {/* Content Area */}
    <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end">
      <div className="relative mb-6">
        {/* Signal Pulse Animation behind icon */}
        <div className="absolute inset-0 w-16 h-16 bg-blue-500/40 rounded-full animate-ping opacity-0 group-hover:opacity-100" />
        <div className="w-16 h-16 bg-blue-600/30 backdrop-blur-md text-white border border-white/20 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:bg-blue-600 group-hover:scale-110">
          {icon}
        </div>
      </div>

      <span className="text-xs font-black text-blue-300 uppercase tracking-[0.4em] mb-3 block italic drop-shadow-md">
        {category}
      </span>
      <h3 className="text-3xl font-black mb-4 text-white leading-tight group-hover:translate-x-2 transition-transform duration-500">
        {title}
      </h3>
      <p className="text-slate-200/80 leading-relaxed mb-8 font-medium text-base line-clamp-3 group-hover:text-white transition-colors">
        {description}
      </p>

      <div className="flex items-center justify-between">
        <button className="text-white font-black inline-flex items-center gap-3 group-hover:gap-5 transition-all text-sm uppercase tracking-widest">
          {lang === 'ko' ? '상세 정보' : 'View Details'}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
        <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 -rotate-45 group-hover:rotate-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
        </div>
      </div>
    </div>
  </div>
);

const Features: React.FC<{ setView: (v: ViewState) => void; lang: Language }> = ({ setView, lang }) => {
  const content = {
    ko: {
      title: '혁신적인 제품 라인업',
      sub: '글로벌 GNSS 표준 Trimble과 아센코리아의 독자 기술이 만나 가장 신뢰할 수 있는 위치 정보를 제공합니다.',
      btn: '카탈로그 다운로드',
      items: [
        { 
          category: 'GNSS Module', 
          title: 'Trimble GNSS Modules', 
          desc: '초정밀 RTK부터 저전력 임베디드 모듈까지, 위성 항법의 핵심 엔진을 공급합니다.',
          bg: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=1000'
        },
        { 
          category: 'GNSS Antenna', 
          title: 'High-Gain Antennas', 
          desc: '어떤 환경에서도 끊김 없는 수신을 보장하는 아센코리아만의 RF 기술력이 담긴 안테나입니다.',
          bg: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1000'
        },
        { 
          category: 'Integrated Solution', 
          title: 'All-in-One Receivers', 
          desc: '복잡한 설정 없이 전원만으로 cm급 정밀도를 구현하는 통합 수신기 및 개발 키트입니다.',
          bg: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000'
        }
      ]
    },
    en: {
      title: 'Innovative Product Lineup',
      sub: 'Experience the most reliable positioning with Trimble standards and ASCENKOREA’s proprietary technology.',
      btn: 'Download Catalog',
      items: [
        { 
          category: 'GNSS Module', 
          title: 'Trimble GNSS Modules', 
          desc: 'We supply the core engine of satellite navigation, from high-precision RTK to low-power embedded modules.',
          bg: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=1000'
        },
        { 
          category: 'GNSS Antenna', 
          title: 'High-Gain Antennas', 
          desc: 'Antennas powered by ASCENKOREA\'s unique RF technology, ensuring seamless reception in any environment.',
          bg: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1000'
        },
        { 
          category: 'Integrated Solution', 
          title: 'All-in-One Receivers', 
          desc: 'Integrated receivers and development kits delivering cm-level precision with simple power-on.',
          bg: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000'
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <section id="products" className="py-40 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10 animate-fadeIn">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-[950] mb-10 text-blue-950 leading-[1] tracking-tight">{t.title}</h2>
            <p className="text-slate-500 text-2xl font-medium leading-relaxed">{t.sub}</p>
          </div>
          <button className="px-12 py-5 bg-blue-600 text-white font-black rounded-full hover:bg-blue-700 transition-all shadow-[0_20px_40px_rgba(37,99,235,0.3)] hover:-translate-y-1">
            {t.btn}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {t.items.map((item, i) => (
            <ProductCard 
              key={i}
              lang={lang}
              bgImage={item.bg}
              onClick={() => setView(['products-modules', 'products-antennas', 'products-receivers'][i] as ViewState)}
              category={item.category}
              title={item.title} 
              description={item.desc}
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
                  {i === 0 && <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />}
                  {i === 1 && <path d="M12 3v18M5 8l7-5 7 5M5 16l7 5 7-5" />}
                  {i === 2 && <path d="M4 6h16v12H4zM4 10h16M10 6v12" />}
                </svg>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
