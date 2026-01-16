
import React from 'react';
import { ViewState, Language } from '../types';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  lang: Language;
  bgImage: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, category, lang, bgImage, icon, onClick }) => (
  <div 
    onClick={onClick}
    className="relative group h-[550px] rounded-[3rem] overflow-hidden cursor-pointer shadow-2xl transition-all duration-700 border border-slate-200"
  >
    <div className="absolute inset-0 z-0">
      <div className="w-full h-full bg-cover bg-center transition-transform duration-700 scale-100 group-hover:scale-110" style={{ backgroundImage: `url('${bgImage}')` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
    </div>
    <div className="absolute inset-0 z-20 p-12 flex flex-col justify-end">
      <div className="mb-8">
         <div className="w-14 h-14 bg-cyan-600/20 backdrop-blur-xl text-cyan-400 border border-cyan-400/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-all transform group-hover:rotate-[360deg]">
            {icon}
         </div>
         <span className="text-xs font-black text-cyan-400 uppercase tracking-[0.4em] mb-3 block italic">{category}</span>
         <h3 className="text-3xl md:text-4xl font-black mb-6 text-white leading-tight">{title}</h3>
         <p className="text-slate-300 leading-relaxed font-medium text-lg opacity-0 group-hover:opacity-100 transition-all">{description}</p>
      </div>
    </div>
  </div>
);

const Projects: React.FC<{ setView: (v: ViewState) => void; lang: Language }> = ({ setView, lang }) => {
  const content = {
    ko: {
      title: '미래를 앞당기는 프로젝트',
      sub: '전 세계 다양한 산업 현장에서 혁신을 실현하고 있습니다.',
      items: [
        { id: 'project-infra', category: 'Smart Infrastructure', title: '교량 모니터링', desc: '초정밀 변위 감시 시스템', bg: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1000' },
        { id: 'project-mobility', category: 'Future Mobility', title: '자율주행 인프라', desc: 'RTK 네트워크 구축', bg: 'https://images.unsplash.com/photo-1555617766-c94804975da3?auto=format&fit=crop&q=80&w=1000' },
        { id: 'project-mapping', category: 'Digital Twin', title: '3D 지형 매핑', desc: '고정밀 데이터 서비스', bg: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=1000' }
      ]
    },
    en: {
      title: 'Pioneering Projects',
      sub: 'Realizing innovation in various industrial sites.',
      items: [
        { id: 'project-infra', category: 'Smart Infrastructure', title: 'Infrastructure Monitoring', desc: 'Precision monitoring systems', bg: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1000' },
        { id: 'project-mobility', category: 'Future Mobility', title: 'Autonomous Mobility', desc: 'RTK network implementation', bg: 'https://images.unsplash.com/photo-1555617766-c94804975da3?auto=format&fit=crop&q=80&w=1000' },
        { id: 'project-mapping', category: 'Digital Twin', title: '3D Terrain Mapping', desc: 'Precision data services', bg: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=1000' }
      ]
    }
  };

  const t = content[lang];

  return (
    <section id="projects-showcase" className="py-40 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="text-5xl md:text-7xl font-[950] mb-10 text-slate-900 tracking-tight">{t.title}</h2>
          <p className="text-slate-500 text-2xl font-medium">{t.sub}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {t.items.map((item, i) => (
            <ProjectCard key={i} lang={lang} category={item.category} title={item.title} description={item.desc} bgImage={item.bg} onClick={() => setView(item.id as ViewState)} icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8"><path d="M12 2v20M2 12h20" /></svg>} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
