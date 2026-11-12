import React, { useState } from 'react';
import {
  Code,
  Globe,
  Brain,
  Compass,
  Code2,
  FileCode,
  Palette,
  Bot,
  Cpu,
  Lightbulb,
  Zap,
  Flame,
  Rocket,
  Info,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { SkillItem } from '../types/portfolio';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-cyan-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-blue-400" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-cyan-300" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-blue-400" />;
      default:
        return <Code className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getSkillIcon = (iconName: string) => {
    const iconClass = "w-5 h-5";
    switch (iconName) {
      case 'Code2':
        return <Code2 className={`${iconClass} text-cyan-400`} />;
      case 'FileCode':
        return <FileCode className={`${iconClass} text-blue-400`} />;
      case 'Palette':
        return <Palette className={`${iconClass} text-cyan-300`} />;
      case 'Bot':
        return <Bot className={`${iconClass} text-blue-400`} />;
      case 'Cpu':
        return <Cpu className={`${iconClass} text-cyan-400`} />;
      case 'Lightbulb':
        return <Lightbulb className={`${iconClass} text-amber-400`} />;
      case 'Zap':
        return <Zap className={`${iconClass} text-yellow-400`} />;
      case 'Flame':
        return <Flame className={`${iconClass} text-orange-400`} />;
      case 'Rocket':
        return <Rocket className={`${iconClass} text-cyan-400`} />;
      default:
        return <Code className={`${iconClass} text-cyan-400`} />;
    }
  };

  const getLevelBadge = (level: SkillItem['level']) => {
    switch (level) {
      case 'Foundational':
        return {
          label: 'Foundational',
          classes: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
        };
      case 'Learning':
        return {
          label: 'Currently Learning',
          classes: 'bg-blue-500/10 text-cyan-300 border-blue-500/30',
        };
      case 'Beginner':
        return {
          label: 'Beginner Explorer',
          classes: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
        };
      default:
        return {
          label: level,
          classes: 'bg-slate-800 text-slate-300 border-slate-700',
        };
    }
  };

  const filteredCategories =
    activeCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.title.toLowerCase().includes(activeCategory));

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            <span>Skill Inventory</span>
            <span aria-hidden="true">·</span>
            <span>Honest Technical Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Technical Stack & Competencies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Transparently categorized according to current development stage. No fabricated percentages or vanity ratings—just genuine, disciplined skill acquisition.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 rounded-xl bg-slate-900/80 border border-slate-800 w-fit">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            All Categories
          </button>
          <button
            onClick={() => setActiveCategory('programming')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeCategory === 'programming'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            Programming
          </button>
          <button
            onClick={() => setActiveCategory('web')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeCategory === 'web'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            Web Development
          </button>
          <button
            onClick={() => setActiveCategory('artificial')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeCategory === 'artificial'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            Artificial Intelligence
          </button>
          <button
            onClick={() => setActiveCategory('professional')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeCategory === 'professional'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-600/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            Professional Skills
          </button>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredCategories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-5 border-b border-slate-800/80 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center">
                      {getCategoryIcon(cat.iconName)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                      <p className="text-xs text-slate-400">
                        {cat.skills.length} {cat.skills.length === 1 ? 'Focus Skill' : 'Focus Skills'}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400">Track</span>
                </div>

                {/* Skills in Category */}
                <div className="space-y-4">
                  {cat.skills.map((skill) => {
                    const badge = getLevelBadge(skill.level);
                    return (
                      <div
                        key={skill.name}
                        onClick={() => setSelectedSkill(skill)}
                        className="group cursor-pointer p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-950/90 transition-all duration-200"
                      >
                        <div className="flex items-center justify-between gap-3 mb-1.5">
                          <div className="flex items-center gap-2.5">
                            <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                              {getSkillIcon(skill.iconName)}
                            </div>
                            <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          <span
                            className={`text-[11px] font-medium font-mono px-2.5 py-0.5 rounded-md border ${badge.classes}`}
                          >
                            {badge.label}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed pl-9">
                          {skill.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Detail Modal */}
        {selectedSkill && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          >
            <div className="relative w-full max-w-lg rounded-2xl bg-[#0D1527] border border-cyan-500/40 p-6 sm:p-7 shadow-2xl">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                    {getSkillIcon(selectedSkill.iconName)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{selectedSkill.name}</h3>
                    <span
                      className={`text-[11px] font-mono px-2 py-0.5 rounded border ${
                        getLevelBadge(selectedSkill.level).classes
                      }`}
                    >
                      {getLevelBadge(selectedSkill.level).label}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <p className="leading-relaxed">{selectedSkill.description}</p>
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                    <Info className="w-4 h-4" />
                    <span>Prathap&apos;s Learning Context</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Practicing via daily code exercises, coursework problem sets at Joy University, and hackathon project discussions.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
