
import React from 'react';

const Partners: React.FC = () => {
  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6">
        <p className="text-center text-slate-400 font-black uppercase tracking-[0.3em] text-sm mb-16">Global Technical Partners</p>
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Key Industry Partners */}
          <div className="text-3xl font-black text-slate-800 tracking-tighter">Trimble</div>
          <div className="text-3xl font-black text-slate-800 tracking-tighter">STMicroelectronics</div>
          <div className="text-3xl font-black text-slate-800 tracking-tighter">MediaTek</div>
          <div className="text-3xl font-black text-slate-800 tracking-tighter">QUECTEL</div>
          <div className="text-4xl font-black text-blue-600 tracking-tighter">ASCEN</div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
