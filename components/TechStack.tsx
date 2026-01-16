import React, { useState, useEffect } from 'react';
import { Language } from '../App';

// Updated to accept lang prop to fix TypeScript error in App.tsx
const TechStack: React.FC<{ lang: Language }> = ({ lang }) => {
  // 1. SNR Data (위성 신호 강도) & Peaks
  const [snrData, setSnrData] = useState<number[]>([42, 38, 45, 30, 48, 41, 35, 44]);
  const [snrPeaks, setSnrPeaks] = useState<number[]>([42, 38, 45, 30, 48, 41, 35, 44]);
  
  // 2. Skyplot Data
  const [satPositions, setSatPositions] = useState<{r: number, t: number, id: string}[]>([]);
  // 3. Position Deviation
  const [scatterPoints, setScatterPoints] = useState<{x: number, y: number}[]>([]);
  // 4. DOP Stats
  const [stats, setStats] = useState({ hdop: 0.48, accuracy: 0.008 });
  // 5. Phase Wave Offset
  const [waveOffset, setWaveOffset] = useState(0);

  const satNames = ['G01', 'G12', 'R05', 'E11', 'C02', 'G09', 'C04', 'R18'];

  // 초기 위성 위치 설정
  useEffect(() => {
    const initialSats = Array.from({ length: 12 }, (_, i) => ({
      r: Math.random() * 80 + 10,
      t: Math.random() * 360,
      id: `S${i+1}`
    }));
    setSatPositions(initialSats);
  }, []);

  // 데이터 시뮬레이션 루프
  useEffect(() => {
    const interval = setInterval(() => {
      // SNR & Peaks 업데이트
      setSnrData(prev => {
        const next = prev.map(v => Math.min(50, Math.max(20, v + (Math.random() - 0.5) * 6)));
        setSnrPeaks(currentPeaks => currentPeaks.map((p, i) => {
          if (next[i] > p) return next[i]; // 새로운 고점이면 업데이트
          return Math.max(next[i], p - 0.5); // 아니면 서서히 하락
        }));
        return next;
      });
      
      // 스캐터 포인트 업데이트
      setScatterPoints(prev => {
        const newPoint = { x: (Math.random() - 0.5) * 35, y: (Math.random() - 0.5) * 35 };
        return [...prev.slice(-20), newPoint];
      });

      // 통계치 업데이트
      setStats(prev => ({
        hdop: parseFloat((0.44 + Math.random() * 0.08).toFixed(2)),
        accuracy: parseFloat((0.007 + Math.random() * 0.004).toFixed(3))
      }));

      // 위성 위치 회전
      setSatPositions(prev => prev.map(s => ({ ...s, t: s.t + 0.15 })));
      
      // 웨이브 애니메이션 속도 제어
      setWaveOffset(prev => prev + 1.5);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  // SNR 바 색상 계산 함수
  const getSnrColor = (val: number) => {
    if (val > 40) return 'from-cyan-400 to-blue-500';
    if (val > 30) return 'from-blue-400 to-indigo-500';
    return 'from-orange-400 to-red-500';
  };

  return (
    <section id="tech" className="py-32 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: GNSS Command Center Visual */}
          <div className="relative group">
            <div className="absolute -inset-10 bg-blue-500/10 rounded-full blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className="relative z-10 bg-[#0a0f1e] rounded-[3rem] p-8 shadow-2xl border border-white/10 backdrop-blur-md">
              
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-6">
                <div className="flex gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-[10px] font-black text-blue-400/80 tracking-[0.2em] uppercase italic">System: Live Monitoring</span>
                  <div className="px-4 py-1.5 bg-green-500/20 border border-green-500/40 rounded-full text-[10px] font-black text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.2)]">RTK FIXED</div>
                </div>
              </div>

              {/* Main Visualization Grid */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                
                {/* 1. SNR Bar Chart with Peak Hold */}
                <div className="bg-white/[0.03] rounded-3xl p-6 border border-white/5 relative overflow-hidden group/card">
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/50 scale-y-0 group-hover/card:scale-y-100 transition-transform origin-top"></div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase mb-6 tracking-widest flex items-center gap-2">
                    <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                    1. Signal SNR (dB-Hz)
                  </h4>
                  <div className="flex items-end h-28 gap-2">
                    {snrData.map((val, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-3 h-full relative">
                        <div className="w-full bg-slate-800/50 rounded-t-sm relative h-full">
                          {/* Main Bar */}
                          <div 
                            className={`absolute bottom-0 w-full bg-gradient-to-t ${getSnrColor(val)} transition-all duration-150 rounded-t-sm shadow-[0_0_15px_rgba(59,130,246,0.3)]`}
                            style={{ height: `${(val/50)*100}%` }}
                          />
                          {/* Peak Hold Line */}
                          <div 
                            className="absolute bottom-0 w-full h-[2px] bg-white/80 transition-all duration-300 z-10"
                            style={{ bottom: `${(snrPeaks[i]/50)*100}%` }}
                          />
                        </div>
                        <span className="text-[8px] font-black text-slate-500 tracking-tighter">{satNames[i]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Skyplot */}
                <div className="bg-white/[0.03] rounded-3xl p-6 border border-white/5 flex flex-col items-center justify-center relative group/card">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest self-start">
                    <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                    2. Constellation
                  </h4>
                  <div className="w-28 h-28 rounded-full border border-white/10 relative bg-slate-900/20 backdrop-blur-sm">
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-px h-full bg-white/5"></div>
                       <div className="w-full h-px bg-white/5"></div>
                       <div className="w-16 h-16 rounded-full border border-white/5"></div>
                       <div className="w-8 h-8 rounded-full border border-white/10 animate-pulse"></div>
                    </div>
                    {satPositions.map(s => (
                      <div 
                        key={s.id}
                        className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.8)] transition-all duration-500"
                        style={{ 
                          left: '50%', 
                          top: '50%',
                          transform: `rotate(${s.t}deg) translate(${s.r/1.8}px) rotate(-${s.t}deg)`
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* 3. Deviation Scatter Plot */}
                <div className="bg-white/[0.03] rounded-3xl p-6 border border-white/5 group/card">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase mb-4 tracking-widest">
                    <span className="w-1 h-1 bg-cyan-500 rounded-full"></span>
                    3. Position Error
                  </h4>
                  <div className="w-full h-24 bg-slate-950/80 rounded-xl relative overflow-hidden border border-white/10 flex items-center justify-center">
                    <div className="absolute w-px h-full bg-white/5"></div>
                    <div className="absolute w-full h-px bg-white/5"></div>
                    {scatterPoints.map((p, i) => (
                      <div 
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                        style={{ 
                          left: `calc(50% + ${p.x}px)`, 
                          top: `calc(50% + ${p.y}px)`,
                          opacity: (i + 1) / scatterPoints.length,
                          transform: `scale(${(i + 1) / scatterPoints.length})`
                        }}
                      />
                    ))}
                    <div className="absolute bottom-1 right-2 text-[7px] font-mono text-cyan-400/40 uppercase tracking-tighter">Scale: 1cm/div</div>
                  </div>
                </div>

                {/* 4. DOP Trend */}
                <div className="bg-white/[0.03] rounded-3xl p-6 border border-white/5 group/card">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase mb-6 tracking-widest">
                    <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                    4. Geometry DOP
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] text-slate-500 font-black">HDOP</span>
                      <span className="text-2xl font-black text-white italic tracking-tighter">{stats.hdop}</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-700 shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
                        style={{ width: `${(1.2/stats.hdop)*50}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-[8px] font-black text-blue-400/60 uppercase">
                      <span>Condition</span>
                      <span className="animate-pulse">Excellent</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Enhanced Carrier Phase Sync Waveform */}
              <div className="bg-blue-600/5 rounded-[2rem] p-6 border border-blue-500/10 relative overflow-hidden group/card">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-blue-400 animate-spin-slow">
                    <path d="M12 2V4M12 20V22M4 12H2M22 12H20M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4 className="text-[10px] font-black text-blue-400/60 uppercase mb-6 tracking-[0.2em] italic flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></span>
                  5. Carrier Phase Multi-Band Synchronization
                </h4>
                <div className="relative h-16 overflow-hidden bg-slate-950/30 rounded-lg border border-white/5">
                  {[
                    { color: 'rgba(59,130,246,0.9)', speed: 0.8, amp: 12, freq: 0.05 },
                    { color: 'rgba(34,211,238,0.6)', speed: 1.2, amp: 18, freq: 0.08 },
                    { color: 'rgba(99,102,241,0.4)', speed: 1.8, amp: 10, freq: 0.12 }
                  ].map((wave, idx) => (
                    <svg key={idx} className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                      <path 
                        d={`M 0 32 ${Array.from({length: 40}, (_, i) => {
                          const x = i * 15;
                          const y = 32 + Math.sin((i + waveOffset * wave.speed) * wave.freq) * wave.amp;
                          return `L ${x} ${y}`;
                        }).join(' ')}`} 
                        fill="none" 
                        stroke={wave.color} 
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        className="transition-all duration-300"
                      />
                    </svg>
                  ))}
                  {/* Sync Center Line */}
                  <div className="absolute top-1/2 left-0 w-full h-px bg-white/5"></div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-6">
                   <div className="text-center p-2 bg-white/5 rounded-xl border border-white/5">
                     <span className="block text-[8px] font-black text-slate-500 uppercase mb-1">Band L1</span>
                     <span className="text-xs font-black text-blue-400 italic tracking-widest animate-pulse">LOCKED</span>
                   </div>
                   <div className="text-center p-2 bg-white/5 rounded-xl border border-white/5">
                     <span className="block text-[8px] font-black text-slate-500 uppercase mb-1">Band L2</span>
                     <span className="text-xs font-black text-blue-400 italic tracking-widest animate-pulse delay-75">LOCKED</span>
                   </div>
                   <div className="text-center p-2 bg-white/5 rounded-xl border border-white/5">
                     <span className="block text-[8px] font-black text-slate-500 uppercase mb-1">Band L5</span>
                     <span className="text-xs font-black text-blue-400 italic tracking-widest animate-pulse delay-150">LOCKED</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Descriptive Content */}
          <div className="animate-fadeIn">
            <div className="inline-block px-5 py-2 mb-8 bg-blue-600/10 text-blue-600 rounded-full text-xs font-black tracking-[0.2em] uppercase italic border border-blue-600/20">
              Technical Excellence
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-10 text-blue-950 leading-[1.05] tracking-tighter">
              {lang === 'ko' ? <>정밀함의 차이가 <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">성능을 결정합니다</span></> 
                : <>Precision Makes <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">the Performance</span></>}
            </h2>
            <p className="text-slate-600 text-xl leading-relaxed mb-12 font-medium">
              {lang === 'ko' 
                ? '아센코리아의 기술력은 수치 그 이상의 신뢰를 제공합니다. 다중 주파수 동기화와 자체 RTK 알고리즘을 통해 글로벌 스탠다드를 뛰어넘는 위치 결정 솔루션을 경험해 보세요.'
                : 'ASCENKOREA\'s technology provides reliability beyond numbers. Experience positioning solutions that exceed global standards through multi-frequency synchronization and our proprietary RTK algorithms.'}
            </p>
            
            <div className="space-y-6">
              {[
                { 
                  title: lang === 'ko' ? '실시간 분석 통합 기술' : 'Real-time Integrated Analysis', 
                  body: lang === 'ko' ? 'SNR, DOP 등 핵심 지표의 동적 모니터링을 통한 최적의 위성 선택' : 'Optimal satellite selection through dynamic monitoring of key metrics such as SNR and DOP',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                },
                { 
                  title: lang === 'ko' ? '초정밀 RTK 시스템 통합' : 'Ultra-Precision RTK Integration', 
                  body: lang === 'ko' ? 'cm 단위의 오차를 보장하는 최첨단 멀티 콘스텔레이션 수신 솔루션' : 'State-of-the-art multi-constellation reception solution ensuring cm-level accuracy',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.004 9.004 0 018.716 2.253M12 3a9.004 9.004 0 00-8.716 2.253m0 0A11.015 11.015 0 0112 10.5c2.181 0 4.198-.636 5.898-1.733" />
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-8 p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all group">
                  <div className="w-16 h-16 bg-slate-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-blue-950 mb-3">{item.title}</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechStack;