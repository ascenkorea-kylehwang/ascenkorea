
import React from 'react';
// Fix: Import Language from types instead of App
import { Language } from '../../types';

// Updated to accept lang prop to fix TypeScript error in App.tsx
const ProductsPage: React.FC<{ lang: Language }> = ({ lang }) => {
  const products = [
    {
      category: 'Trimble Modules',
      title: 'High-Precision RTK Module',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
      specs: lang === 'ko' 
        ? ['CM 단위 정밀도', '멀티밴드 L1/L2/L5', '동시 수신(All GNSS)']
        : ['CM Level Precision', 'Multi-band L1/L2/L5', 'Concurrent Reception (All GNSS)']
    },
    {
      category: 'Antennas',
      title: 'Active Patch Antenna',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800',
      specs: lang === 'ko'
        ? ['고이득/저노이즈 LNA', '차량용 규격(IATF16949)', '맞춤형 케이블 길이']
        : ['High Gain/Low Noise LNA', 'Automotive Standard (IATF16949)', 'Custom Cable Length']
    },
    {
      category: 'Receivers',
      title: 'USB GNSS Receiver',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800',
      specs: lang === 'ko'
        ? ['Plug & Play 통합형', '내구성이 강한 IP67 설계', 'NMEA 데이터 출력']
        : ['Plug & Play Integrated', 'Durable IP67 Design', 'NMEA Data Output']
    }
  ];

  return (
    <div className="pt-24 animate-fadeIn">
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6">{lang === 'ko' ? '제품안내' : 'Products'}</h1>
          <p className="text-xl font-medium text-slate-400">{lang === 'ko' ? '신뢰성 높은 GNSS 하드웨어 라인업' : 'Reliable GNSS Hardware Lineup'}</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((p, i) => (
              <div key={i} className="group overflow-hidden rounded-3xl border border-slate-100 hover:shadow-2xl transition-all duration-500">
                <div className="h-64 overflow-hidden">
                  <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={p.title} />
                </div>
                <div className="p-10">
                  <span className="text-blue-600 font-bold text-sm uppercase tracking-widest">{p.category}</span>
                  <h3 className="text-2xl font-black text-blue-950 mt-2 mb-6">{p.title}</h3>
                  <ul className="space-y-3 mb-8">
                    {p.specs.map((s, si) => (
                      <li key={si} className="flex items-center gap-2 text-slate-500 font-medium">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        {s}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-4 bg-blue-50 text-blue-600 font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all">
                    {lang === 'ko' ? '카탈로그 보기' : 'View Catalog'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
