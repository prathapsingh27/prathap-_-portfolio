import React, { useState, useEffect } from 'react';
import { ArrowDown, Mail, Github, Linkedin, Sparkles, Terminal, Code2, Radio, Activity, Eye } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [liveScannerActive, setLiveScannerActive] = useState(true);

  // Professional cinematic text slide rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentTitleIndex((prev) => (prev + 1) % PERSONAL_INFO.titles.length);
        setIsTransitioning(false);
      }, 350);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const handleSelectTitle = (index: number) => {
    if (index === currentTitleIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentTitleIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Calculate subtle 3D tilt (-8 to +8 degrees)
    const rY = ((x - centerX) / centerX) * 8;
    const rX = -((y - centerY) / centerY) * 8;
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:py-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col space-y-8">
          {/* Ambient Kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-medium text-cyan-300 shadow-sm shadow-cyan-500/10 w-fit">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>B.Tech CSE (AI) · Joy University · 1st Year</span>
          </div>

          {/* Name & Profile Picture Lockup: Profile Pic directly beside the name */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 lg:gap-10">
            {/* Live Animated Profile Picture Card */}
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: 'transform 0.15s ease-out',
              }}
              className="relative shrink-0 w-36 h-44 sm:w-44 sm:h-52 md:w-52 md:h-60 lg:w-56 lg:h-64 cursor-pointer group"
            >
              {/* Live Breathing Outer Aura */}
              <div
                className="absolute -inset-2 rounded-3xl opacity-75 blur-xl transition-all duration-700 animate-live-breathing pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, #22D3EE 0%, #2563EB 50%, rgba(37,99,235,0) 75%)',
                }}
              />

              {/* Continuous Live Rotating Conic Laser Border */}
              <div className="absolute -inset-[2px] rounded-2xl overflow-hidden pointer-events-none z-0">
                <div
                  className="absolute -inset-[100%] animate-spin-slow opacity-90"
                  style={{
                    background:
                      'conic-gradient(from 0deg, transparent 0deg, #2563EB 50deg, #22D3EE 110deg, transparent 180deg, #3B82F6 230deg, #22D3EE 290deg, transparent 360deg)',
                  }}
                />
              </div>

              {/* Futuristic Glass Container */}
              <div className="relative z-10 w-full h-full rounded-2xl bg-gradient-to-b from-slate-900/95 via-slate-950/98 to-[#080D1C] p-2 border border-slate-700/70 shadow-2xl backdrop-blur-xl flex flex-col">
                {/* Profile Image with Live Holographic Scanning Beam */}
                <div className="relative flex-1 w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800/90 group">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt="Rasaputra Prathap Singh - Aspiring AI Engineer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Subtle Tech Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D1C]/85 via-transparent to-transparent pointer-events-none" />

                  {/* Live Holographic Scanner Sweep */}
                  {liveScannerActive && (
                    <div className="absolute inset-x-0 h-14 pointer-events-none animate-scan z-20">
                      <div className="h-[2px] w-full bg-cyan-300 shadow-[0_0_12px_#22D3EE,0_0_6px_#38BDF8]" />
                      <div className="h-full w-full bg-gradient-to-b from-cyan-400/20 via-cyan-400/5 to-transparent" />
                    </div>
                  )}

                  {/* Corner Accent Tech Decals with active glowing pulse */}
                  <div className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400 shadow-[0_0_6px_#22D3EE] pointer-events-none" />
                  <div className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
                  <div className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-400 shadow-[0_0_6px_#22D3EE] pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Name, Roles & Academic Standing directly beside the photo */}
            <div className="flex-1 space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Hello, I&apos;m{' '}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}
                </span>
              </h1>

              {/* Professional Cinematic Role Slider */}
              <div className="flex flex-col gap-2 pt-0.5">
                <div className="h-10 sm:h-12 flex items-center overflow-hidden">
                  <div
                    className={`transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center ${
                      isTransitioning
                        ? 'opacity-0 -translate-y-3 blur-[2px]'
                        : 'opacity-100 translate-y-0 blur-0'
                    }`}
                  >
                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-100 bg-clip-text text-transparent tracking-tight">
                      {PERSONAL_INFO.titles[currentTitleIndex]}
                    </span>
                  </div>
                </div>

                {/* Refined Role Switcher Indicators */}
                <div className="flex items-center gap-2 pt-0.5">
                  {PERSONAL_INFO.titles.map((title, idx) => (
                    <button
                      key={title}
                      onClick={() => handleSelectTitle(idx)}
                      aria-label={`Select role: ${title}`}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        currentTitleIndex === idx
                          ? 'w-8 bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.7)]'
                          : 'w-2 bg-slate-700/80 hover:bg-slate-500'
                      }`}
                    />
                  ))}
                  <span className="text-[11px] font-mono text-slate-500 ml-2">
                    0{currentTitleIndex + 1} / 0{PERSONAL_INFO.titles.length}
                  </span>
                </div>
              </div>

              {/* Joy University Verified Standing Badge */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span className="text-white font-medium">Joy University CSE (AI)</span>
                  <span className="text-slate-500">·</span>
                  <span className="text-slate-400">Class of 2027 · 1st Semester</span>
                </div>
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-2.5 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Active Learner
                </span>
              </div>
            </div>
          </div>

          {/* Professional Bio */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl text-pretty font-normal">
            {PERSONAL_INFO.bio}
          </p>

          {/* Interactive Glowing CTAs & Social Links */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => handleScrollTo('about')}
              className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <span>Explore My Journey</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/50 rounded-xl transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Contact Me</span>
            </button>

            {/* Quick Social Links */}
            <div className="flex items-center gap-2.5 pl-0 sm:pl-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Unboxed Tech Indicator & Live Scanner Toggle */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800/80 text-xs text-slate-400 font-mono">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <span className="text-cyan-400 font-semibold">Current Stack:</span>
              <span>Python 3</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>HTML5 / CSS3</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Generative AI Tools</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Algorithmic Logic</span>
            </div>

            <button
              onClick={() => setLiveScannerActive(!liveScannerActive)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-colors"
              title="Toggle Holographic Scanner"
            >
              <Eye className="w-3.5 h-3.5 text-cyan-400" />
              <span>Scanner: {liveScannerActive ? 'Active' : 'Paused'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
