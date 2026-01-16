
import React, { useState, useEffect } from 'react';
import { ViewState, Language } from '../App';

interface HeaderProps {
  setView: (view: ViewState) => void;
  currentView: ViewState;
  lang: Language;
  setLang: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ setView, currentView, lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = currentView === 'home';
  const logoColor = isScrolled || !isHome ? 'text-slate-900' : 'text-white';

  const menuItems = {
    ko: [
      { id: 'company', label: '회사소개' },
      { id: 'products', label: '제품안내' },
      { id: 'tech', label: '핵심기술' },
      { id: 'support', label: '고객지원' },
    ],
    en: [
      { id: 'company', label: 'About Us' },
      { id: 'products', label: 'Products' },
      { id: 'tech', label: 'Technology' },
      { id: 'support', label: 'Support' },
    ]
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHome ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <button 
          onClick={() => setView('home')} 
          className="flex items-center gap-3 group outline-none"
        >
          <div className="flex items-center gap-2">
            <svg 
              viewBox="0 0 100 80" 
              className={`w-10 h-auto transition-all duration-300 group-hover:scale-105 ${logoColor}`}
              fill="currentColor"
            >
              <path d="M50 0L95 80H78L50 28L22 80H5L50 0Z" />
              <path d="M38 52H62V64H38V52Z" />
            </svg>
            <div className="flex flex-col leading-none pt-1">
              <span className={`text-[1.75rem] font-[900] tracking-[-0.08em] transition-colors duration-300 ${logoColor}`}>
                <span className="tracking-[0.02em]">ASCEN</span>
                <span className="text-blue-600 ml-1">KOREA</span>
              </span>
            </div>
          </div>
        </button>
        
        <nav className="hidden md:flex items-center gap-8">
          {menuItems[lang].map((item) => (
            <button
              key={item.id}
              onClick={() => setView(item.id as ViewState)}
              className={`${isScrolled || !isHome ? 'text-slate-600' : 'text-slate-200'} hover:text-blue-600 transition-colors font-bold text-base ${currentView === item.id ? 'text-blue-600' : ''}`}
            >
              {item.label}
            </button>
          ))}
          
          <div className="flex items-center gap-3 ml-4 border-l border-slate-200 pl-6">
            <button 
              onClick={() => setLang('ko')} 
              className={`text-sm font-black transition-all ${lang === 'ko' ? 'text-blue-600' : logoColor + ' opacity-40 hover:opacity-100'}`}
            >
              KO
            </button>
            <span className={`${logoColor} opacity-20`}>|</span>
            <button 
              onClick={() => setLang('en')} 
              className={`text-sm font-black transition-all ${lang === 'en' ? 'text-blue-600' : logoColor + ' opacity-40 hover:opacity-100'}`}
            >
              EN
            </button>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-full font-black transition-all">
            {lang === 'ko' ? '문의하기' : 'Inquiry'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
