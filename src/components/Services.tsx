import React, { useState } from 'react';
import {
  FileCode2,
  Laptop,
  Sparkles,
  Workflow,
  BrainCircuit,
  ArrowRight,
  CheckCircle,
  Wrench,
} from 'lucide-react';
import { DEVELOPING_CAPABILITIES } from '../data/portfolioData';
import { DevelopingCapability } from '../types/portfolio';

export const Services: React.FC = () => {
  const [selectedCapability, setSelectedCapability] = useState<DevelopingCapability | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCode2':
        return <FileCode2 className="w-6 h-6 text-cyan-400" />;
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-blue-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-cyan-300" />;
      case 'Workflow':
        return <Workflow className="w-6 h-6 text-blue-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-6 h-6 text-cyan-400" />;
      default:
        return <FileCode2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            <span>Developing Capabilities</span>
            <span aria-hidden="true">·</span>
            <span>Learning In Action</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Practical Capabilities & Emerging Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Represented honestly as developing foundational abilities. Open to collaborative student projects, academic hackathons, and mentored coding opportunities.
          </p>
        </div>

        {/* 5 Developing Capabilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEVELOPING_CAPABILITIES.map((cap) => (
            <div
              key={cap.id}
              onClick={() => setSelectedCapability(cap)}
              className="group cursor-pointer rounded-2xl bg-slate-900/70 border border-slate-800 p-7 hover:border-cyan-500/40 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header with Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/25 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getServiceIcon(cap.iconName)}
                  </div>
                  <span className="text-2xl font-mono font-bold text-slate-700 group-hover:text-cyan-400/80 transition-colors">
                    {cap.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {cap.description}
                </p>

                {/* Focus Areas list preview */}
                <div className="mt-5 space-y-1.5">
                  {cap.focusAreas.slice(0, 3).map((area) => (
                    <div key={area} className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Interactive Trigger */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                <span>View Details & Tools</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}

          {/* Collaborative Callout Card */}
          <div className="rounded-2xl bg-gradient-to-br from-blue-950/40 via-slate-900/70 to-slate-900 border border-blue-500/30 p-7 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-300 mb-6">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Looking for a Hackathon Teammate?
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                I am eager to collaborate with fellow students, developers, and designers on upcoming hackathons, college projects, and creative AI ideations.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-white transition-colors"
              >
                <span>Propose a Project or Teammate Role</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Capability Modal */}
        {selectedCapability && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          >
            <div className="relative w-full max-w-lg rounded-2xl bg-[#0D1527] border border-cyan-500/40 p-6 sm:p-8 shadow-2xl">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                    {getServiceIcon(selectedCapability.iconName)}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-cyan-400">
                      Capability {selectedCapability.number}
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {selectedCapability.title}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCapability(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                {selectedCapability.description}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                    Key Exploration Areas
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedCapability.focusAreas.map((area) => (
                      <div
                        key={area}
                        className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs text-slate-300 flex items-center gap-2"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                    Tools & Environments
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCapability.toolsUsed.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs font-mono bg-slate-900 text-slate-300 px-3 py-1 rounded-md border border-slate-800"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedCapability(null)}
                  className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
