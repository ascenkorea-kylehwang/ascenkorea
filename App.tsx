
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Partners from './components/Partners';
import ChatWidget from './components/ChatWidget';
import Footer from './components/Footer';
import CompanyPage from './components/pages/CompanyPage';
import ProductsPage from './components/pages/ProductsPage';
import TechnologyPage from './components/pages/TechnologyPage';
import SupportPage from './components/pages/SupportPage';
import ModuleDetailPage from './components/pages/ModuleDetailPage';
import AntennaDetailPage from './components/pages/AntennaDetailPage';
import ReceiverDetailPage from './components/pages/ReceiverDetailPage';
import InfrastructureProjectPage from './components/pages/InfrastructureProjectPage';
import MobilityProjectPage from './components/pages/MobilityProjectPage';
import MappingProjectPage from './components/pages/MappingProjectPage';
import { getDailyInsight } from './services/geminiService';

export type ViewState = 'home' | 'company' | 'products' | 'tech' | 'support' 
  | 'products-modules' | 'products-antennas' | 'products-receivers'
  | 'project-infra' | 'project-mobility' | 'project-mapping';
export type Language = 'ko' | 'en';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');
  const [lang, setLang] = useState<Language>('ko');
  const [insight, setInsight] = useState<string>('');

  useEffect(() => {
    const fetchInsight = async () => {
      const daily = await getDailyInsight(lang);
      setInsight(daily);
    };
    fetchInsight();
    
    window.scrollTo(0, 0);
  }, [view, lang]);

  const renderContent = () => {
    switch (view) {
      case 'company':
        return <CompanyPage lang={lang} />;
      case 'products':
        return <ProductsPage lang={lang} />;
      case 'tech':
        return <TechnologyPage lang={lang} />;
      case 'support':
        return <SupportPage lang={lang} />;
      case 'products-modules':
        return <ModuleDetailPage lang={lang} setView={setView} />;
      case 'products-antennas':
        return <AntennaDetailPage lang={lang} setView={setView} />;
      case 'products-receivers':
        return <ReceiverDetailPage lang={lang} setView={setView} />;
      case 'project-infra':
        return <InfrastructureProjectPage lang={lang} setView={setView} />;
      case 'project-mobility':
        return <MobilityProjectPage lang={lang} setView={setView} />;
      case 'project-mapping':
        return <MappingProjectPage lang={lang} setView={setView} />;
      default:
        return (
          <>
            <Hero lang={lang} />
            <Partners />
            {insight && (
              <div className="bg-blue-600 py-6 border-y border-white/10 shadow-lg">
                <div className="container mx-auto px-6">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm md:text-lg font-black text-white">
                    <span className="bg-white text-blue-600 px-4 py-1.5 rounded-full text-xs font-black shrink-0 tracking-widest uppercase italic">GNSS INSIGHT</span>
                    <p className="italic text-center font-bold opacity-95">"{insight}"</p>
                  </div>
                </div>
              </div>
            )}
            <Features setView={setView} lang={lang} />
            <Projects setView={setView} lang={lang} />
            <TechStack lang={lang} />
            <ChatWidget lang={lang} />
            <section className="py-40 bg-blue-950 relative overflow-hidden">
              <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-5xl md:text-7xl font-black mb-12 text-white leading-tight">
                  {lang === 'ko' ? <>정밀한 미래를 <br /> 함께 설계합니다.</> : <>Designing a Precise <br /> Future Together.</>}
                </h2>
                <button 
                  onClick={() => setView('support')}
                  className="bg-white text-blue-950 px-16 py-6 rounded-full font-black text-2xl shadow-2xl transition-all transform hover:scale-105 active:scale-95"
                >
                  {lang === 'ko' ? '상담 신청하기' : 'Request Consult'}
                </button>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen selection:bg-blue-600 selection:text-white bg-white">
      <Header setView={setView} currentView={view} lang={lang} setLang={setLang} />
      <main>
        {renderContent()}
      </main>
      <Footer setView={setView} lang={lang} />
    </div>
  );
};

export default App;
