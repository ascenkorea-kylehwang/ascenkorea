
import React from 'react';
import { ViewState, Language } from '../App';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  lang: Language;
  bgImage: string;
  icon: React.ReactNode;
  onClick: () => void;
}

// Fixed: Defined as React.FC to correctly handle React-specific props like 'key'
const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, category, lang, bgImage, icon, onClick }) => (
  <div 
    onClick={onClick}
    className="relative group h-[550px] rounded-[3rem] overflow-hidden cursor-pointer shadow-2xl transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(8,145,178,0.3)] border border-slate-200"
  >
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <div 
        className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out scale-100 group-hover:scale-110"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
    </div>

    {/* Content */}
    <div className="absolute inset-0 z-20 p-12 flex flex-col justify-end">
      <div className="mb-8">
         <div className="w-14 h-14 bg-cyan-600/20 backdrop-blur-xl text-cyan-400 border border-cyan-400/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500 transform group-hover:rotate-[360deg]">
            {icon}
         </div>
         <span className="text-xs font-black text-cyan-400 uppercase tracking-[0.4em] mb-3 block italic">
            {category}
         </span>
         <h3 className="text-3xl md:text-4xl font-black mb-6 text-white leading-tight">
            {title}
         </h3>
         <p className="text-slate-300 leading-relaxed font-medium text-lg line-clamp-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            {description}
         </p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="h-0.5 w-0 group-hover:w-12 bg-cyan-500 transition-all duration-700"></div>
        <span className="text-white text-sm font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity delay-300">
            {lang === 'ko' ? '사례 연구' : 'Case Study'}
        </span>
      </div>
    </div>
  </div>
);

const Projects: React.FC<{ setView: (v: ViewState) => void; lang: Language }> = ({ setView, lang }) => {
  const content = {
    ko: {
      title: '미래를 앞당기는 프로젝트',
      sub: '아센코리아의 정밀 위치 결정 기술은 전 세계 다양한 산업 현장에서 혁신을 실현하고 있습니다.',
      items: [
        {
          id: 'project-infra',
          category: 'Smart Infrastructure',
          title: '스마트 시티 교량 모니터링',
          desc: 'cm 단위의 미세 변위를 실시간으로 감지하여 대형 구조물의 안전을 24시간 감시하는 초정밀 모니터링 시스템을 구축했습니다.',
          bg: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1000'
        },
        {
          id: 'project-mobility',
          category: 'Future Mobility',
          title: '자율주행 셔틀 인프라 구축',
          desc: '도심 환경의 복잡한 신호 간섭을 극복하고, 레벨 4 자율주행을 위한 실시간 RTK 보정 정보 네트워크를 성공적으로 구현했습니다.',
          bg: 'https://images.unsplash.com/photo-1555617766-c94804975da3?auto=format&fit=crop&q=80&w=1000'
        },
        {
          id: 'project-mapping',
          category: 'Digital Twin',
          title: '고정밀 3D 지형 매핑',
          desc: '드론 및 모바일 매핑 시스템을 활용하여 도시 전체의 디지털 트윈을 구축하기 위한 초정밀 위치 기반 데이터를 제공합니다.',
          bg: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=1000'
        }
      ]
    },
    en: {
      title: 'Pioneering Projects',
      sub: "ASCENKOREA's precision positioning technology is realizing innovation in various industrial sites worldwide.",
      items: [
        {
          id: 'project-infra',
          category: 'Smart Infrastructure',
          title: 'Smart City Bridge Monitoring',
          desc: 'We established a high-precision monitoring system that monitors the safety of large structures 24/7 by detecting cm-level displacements.',
          bg: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1000'
        },
        {
          id: 'project-mobility',
          category: 'Future Mobility',
          title: 'Autonomous Shuttle Infrastructure',
          desc: 'Successfully implemented a real-time RTK correction information network for Level 4 autonomous driving, overcoming urban signal interference.',
          bg: 'https://images.unsplash.com/photo-1555617766-c94804975da3?auto=format&fit=crop&q=80&w=1000'
        },
        {
          id: 'project-mapping',
          category: 'Digital Twin',
          title: 'High-Precision 3D Mapping',
          desc: 'Provides high-precision location-based data for building digital twins of entire cities using drones and mobile mapping systems.',
          bg: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=1000'
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <section id="projects-showcase" className="py-40 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-24 animate-fadeIn">
          <h2 className="text-5xl md:text-7xl font-[950] mb-10 text-slate-900 leading-tight tracking-tight">
            {t.title}
          </h2>
          <p className="text-slate-500 text-2xl font-medium leading-relaxed">
            {t.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {t.items.map((item, i) => (
            <ProjectCard
              key={i}
              lang={lang}
              category={item.category}
              title={item.title}
              description={item.desc}
              bgImage={item.bg}
              onClick={() => setView(item.id as ViewState)}
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8">
                  {i === 0 && <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-4a2 2 0 114 0v4M7 9h2M15 9h2M7 13h2M15 13h2" />}
                  {i === 1 && <path d="M18.36 6.64a9 9 0 11-12.73 0M12 2v10M12 22a10 10 0 100-20" />}
                  {i === 2 && <path d="M9 20l-5-5 5-5M15 4l5 5-5 5M4 15h16" />}
                </svg>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
