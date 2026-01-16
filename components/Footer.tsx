
import React from 'react';
import { ViewState, Language } from '../types';

interface FooterProps {
  setView: (view: ViewState) => void;
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ setView, lang }) => {
  return (
    <footer className="bg-slate-950 text-white pt-32 pb-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-24">
          <div className="col-span-1 md:col-span-3 lg:col-span-1">
            <button onClick={() => setView('home')} className="flex items-center gap-3 mb-8 outline-none group text-left">
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 100 80" className="w-10 h-auto text-white transition-transform group-hover:rotate-3" fill="currentColor">
                  <path d="M50 0L95 80H78L50 28L22 80H5L50 0Z" />
                  <path d="M38 52H62V64H38V52Z" />
                </svg>
                <div className="flex flex-col leading-none pt-1">
                  <span className="text-[1.75rem] font-[900] tracking-[-0.08em] text-white">
                    <span className="tracking-[0.02em]">ASCEN</span>
                    <span className="text-blue-500 ml-1">KOREA</span>
                  </span>
                </div>
              </div>
            </button>
            <p className="text-slate-400 leading-relaxed text-base font-medium pr-4">
              {lang === 'ko' 
                ? '(주)아센코리아는 정밀 위치 결정 기술을 통해 인류의 안전과 효율을 극대화하는 글로벌 GNSS 전문 기업입니다.'
                : 'ASCENKOREA is a global GNSS specialist company that maximizes human safety and efficiency through precision positioning technology.'}
            </p>
          </div>
          <div>
            <h4 className="font-black mb-8 text-blue-400 uppercase text-xs tracking-[0.3em]">Company</h4>
            <ul className="space-y-4 text-slate-400 text-base font-medium">
              <li><button onClick={() => setView('company')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => setView('products')} className="hover:text-white transition-colors">Our Products</button></li>
              <li><button onClick={() => setView('tech')} className="hover:text-white transition-colors">Core Tech</button></li>
              <li><button onClick={() => setView('support')} className="hover:text-white transition-colors">Contact Support</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black mb-8 text-blue-400 uppercase text-xs tracking-[0.3em]">Solutions</h4>
            <ul className="space-y-4 text-slate-400 text-base font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Trimble GNSS RTK</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Automotive Antennas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">IoT Tracking Kits</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black mb-8 text-blue-400 uppercase text-xs tracking-[0.3em]">Support</h4>
            <ul className="space-y-4 text-slate-400 text-base font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Technical Docs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Software Downloads</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black mb-8 text-blue-400 uppercase text-xs tracking-[0.3em]">Contact</h4>
            <div className="text-slate-400 leading-relaxed font-medium text-base space-y-2">
              <p>{lang === 'ko' ? '서울특별시 금천구 가산디지털단지1로 2' : '2, Gasan digital 1-ro, Seoul'}</p>
              <p>T. 1544-3818</p>
              <p>E. sales@ascen.co.kr</p>
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm font-medium">
          <p>© {new Date().getFullYear()} ASCENKOREA Co., Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
