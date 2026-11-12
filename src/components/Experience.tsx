import React, { useState } from 'react';
import {
  Code,
  Terminal,
  Play,
  RotateCcw,
  Check,
  ExternalLink,
  Flame,
  Lightbulb,
  Github,
  Sparkles,
} from 'lucide-react';
import { ACTIVITIES_DATA, SAMPLE_CODE_SNIPPETS, PERSONAL_INFO } from '../data/portfolioData';
import { CodeSnippet } from '../types/portfolio';

export const Experience: React.FC = () => {
  const [activeSnippetIndex, setActiveSnippetIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showOutput, setShowOutput] = useState(true);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const activeSnippet: CodeSnippet = SAMPLE_CODE_SNIPPETS[activeSnippetIndex];

  const handleRunCode = () => {
    setIsRunning(true);
    setShowOutput(false);
    setTimeout(() => {
      setIsRunning(false);
      setShowOutput(true);
    }, 450);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="experience" className="py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            <span>Experience & Activities</span>
            <span aria-hidden="true">·</span>
            <span>Early Engineering Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Practical Coding & Innovation Activities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Honest record of technical self-study, hackathons, ideathons, and continuous code experimentation as a first-year student.
          </p>
        </div>

        {/* Hackathon Photo Showcase & Journey Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-slate-800 relative group min-h-[300px]">
            <img
              src={PERSONAL_INFO.hackathonImage}
              alt="Hackathon and Ideathon Collaboration"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080D1C] via-[#080D1C]/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/30 border border-blue-400/40 text-cyan-300 text-xs font-semibold mb-2">
                <Flame className="w-3.5 h-3.5" />
                <span>Ideathons & Hackathons Explorer</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Collaborative Student Ideation
              </h3>
              <p className="text-xs text-slate-300 mt-1 max-w-md">
                Active enthusiasm for collegiate team brainstorms, rapid technical pitching, and collaborative problem solving.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            {ACTIVITIES_DATA.slice(0, 2).map((activity) => (
              <div
                key={activity.id}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all flex-1"
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wide">
                    {activity.type}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{activity.period}</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">{activity.title}</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {activity.description}
                </p>
                <div className="space-y-1.5 border-t border-slate-800/80 pt-3">
                  {activity.highlights.map((highlight) => (
                    <div key={highlight} className="text-xs text-slate-400 flex items-start gap-2">
                      <span className="text-cyan-400 font-bold">›</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Repository Highlight & Remaining Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-cyan-400">Open-Source Code</span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                python-file Repository
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                My daily collection of Python exercises, algorithmic drills, and modular scripts hosted publicly on GitHub.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/40 rounded-xl transition-all"
              >
                <span>View on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wide">
                Self-Directed Learning
              </span>
              <span className="text-xs text-slate-400 font-mono">Continuous</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">
              {ACTIVITIES_DATA[3].title}
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              {ACTIVITIES_DATA[3].description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-800/80">
              {ACTIVITIES_DATA[3].highlights.map((h, i) => (
                <div key={i} className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 text-xs text-slate-400">
                  <span className="text-cyan-400 font-semibold block mb-1">0{i + 1}.</span>
                  {h}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Python Code Lab (Showcase of Practical Coding Exploration) */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl">
          {/* Lab Header */}
          <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="h-4 w-px bg-slate-700" />
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Prathap&apos;s Python Lab & Exploration Terminal</span>
              </div>
            </div>

            {/* Run & Action Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyCode}
                className="px-3 py-1.5 text-xs font-mono rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors flex items-center gap-1.5"
              >
                {copiedSnippet ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <span>Copy Code</span>
                )}
              </button>

              <button
                onClick={handleRunCode}
                disabled={isRunning}
                className="px-3.5 py-1.5 text-xs font-mono font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-md shadow-blue-600/30 transition-all flex items-center gap-1.5"
              >
                {isRunning ? (
                  <>
                    <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                    <span>Executing...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Execute Script</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Snippet Selection Tabs */}
          <div className="px-6 py-2.5 bg-slate-900/60 border-b border-slate-800/80 flex flex-wrap gap-2">
            {SAMPLE_CODE_SNIPPETS.map((snippet, idx) => (
              <button
                key={snippet.id}
                onClick={() => {
                  setActiveSnippetIndex(idx);
                  setShowOutput(true);
                }}
                className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors ${
                  activeSnippetIndex === idx
                    ? 'bg-slate-800 text-cyan-400 border border-slate-700'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {snippet.title}
              </button>
            ))}
          </div>

          {/* Code & Terminal Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-800 font-mono text-xs">
            {/* Left: Code Viewer */}
            <div className="lg:col-span-7 p-6 overflow-x-auto bg-[#080D1C]/90 text-slate-300">
              <div className="text-slate-500 mb-3 text-[11px]">
                # {activeSnippet.description}
              </div>
              <pre className="leading-relaxed">
                <code>{activeSnippet.code}</code>
              </pre>
            </div>

            {/* Right: Terminal Output Preview */}
            <div className="lg:col-span-5 p-6 bg-slate-950 text-slate-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                    Console Standard Output
                  </span>
                  <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Exit Code 0
                  </span>
                </div>

                {isRunning ? (
                  <div className="py-8 flex flex-col items-center justify-center text-slate-400 gap-2">
                    <RotateCcw className="w-5 h-5 text-cyan-400 animate-spin" />
                    <span>Running Python 3 interpreter...</span>
                  </div>
                ) : showOutput ? (
                  <pre className="text-cyan-300/90 whitespace-pre-wrap leading-relaxed">
                    {activeSnippet.output}
                  </pre>
                ) : null}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Interpreter: Python 3.12</span>
                <span>Joy University Environment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
