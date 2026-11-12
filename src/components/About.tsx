import React from 'react';
import { Terminal, Sparkles, Layout, Users, BookOpen, Compass, Lightbulb, Rocket } from 'lucide-react';
import { PERSONAL_INFO, CORE_PILLARS } from '../data/portfolioData';

export const About: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-blue-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-cyan-300" />;
      case 'Users':
        return <Users className="w-5 h-5 text-blue-400" />;
      default:
        return <Lightbulb className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            <span>About The Journey</span>
            <span aria-hidden="true">·</span>
            <span>First-Year Exploration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Building Strong Computational Foundations for Tomorrow’s AI
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Every breakthrough in artificial intelligence starts with a curious mind, disciplined code, and an appetite for tackling challenging problems from the ground up.
          </p>
        </div>

        {/* 2-Column Split: Narrative & Verified Student Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base">
            <p>
              I am currently pursuing my <strong className="text-white font-semibold">Bachelor of Technology (B.Tech) in Computer Science Engineering with a specialization in Artificial Intelligence</strong> at Joy University. Entering my first year, my goal is to build deep foundational mastery in algorithmic problem solving and Python programming.
            </p>
            <p>
              My fascination with computer science stems from the transformative potential of <strong className="text-cyan-300 font-semibold">Generative AI and automated intelligence</strong>. Rather than simply using tools as a consumer, I am driven to understand the core logic, mathematics, and data flows that power intelligent software.
            </p>
            <p>
              Beyond the classroom, I actively pursue hackathons and ideathons. These events provide the ideal crucible to test emerging technical concepts, collaborate with ambitious teammates, and turn preliminary ideas into structured problem-solving blueprints.
            </p>

            {/* Verified Student Information Card */}
            <div className="p-5 mt-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 space-y-3">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <Compass className="w-4 h-4 text-cyan-400" />
                Verified Academic Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex flex-col gap-0.5">
                  <span className="text-slate-400">Current Institution</span>
                  <span className="text-white font-medium">{PERSONAL_INFO.institution}</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-slate-400">Undergraduate Degree</span>
                  <span className="text-white font-medium">{PERSONAL_INFO.degree}</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-slate-400">Specialization</span>
                  <span className="text-cyan-300 font-medium">Computer Science (AI)</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-slate-400">Academic Standing</span>
                  <span className="text-white font-medium">1st Year · 1st Semester</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics & Learning Mindset Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-blue-500/40 transition-all duration-300">
              <span className="text-3xl font-extrabold text-cyan-400 font-mono tabular-nums">01</span>
              <h4 className="mt-2 text-sm font-semibold text-white">Year of Engineering</h4>
              <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                Focused on foundational mathematics, logic, and core Python scripting at Joy University.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300">
              <span className="text-3xl font-extrabold text-blue-400 font-mono tabular-nums">100%</span>
              <h4 className="mt-2 text-sm font-semibold text-white">Curiosity Driven</h4>
              <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                Consistently experimenting with new tools, Generative AI models, and coding patterns.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300">
              <span className="text-3xl font-extrabold text-cyan-300 font-mono tabular-nums">2+</span>
              <h4 className="mt-2 text-sm font-semibold text-white">Core Tech Tracks</h4>
              <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                Developing parallel proficiency in Python algorithms and modern responsive Web Development.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 hover:border-blue-500/40 transition-all duration-300">
              <span className="text-3xl font-extrabold text-blue-500 font-mono tabular-nums">&infin;</span>
              <h4 className="mt-2 text-sm font-semibold text-white">Continuous Growth</h4>
              <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                Committed to iterative improvement through regular coding drills and hackathon challenges.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            <span>Core Pillars of My Exploration</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CORE_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="group p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    {getIcon(pillar.iconName)}
                  </div>
                  <h4 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-cyan-400/80">
                  Focus Area 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
