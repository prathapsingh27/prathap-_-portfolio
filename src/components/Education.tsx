import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpenCheck, CheckCircle2, Building2 } from 'lucide-react';
import { EDUCATION_DATA, PERSONAL_INFO } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative z-10 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            <span>Academic Timeline</span>
            <span aria-hidden="true">·</span>
            <span>Undergraduate Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Academic Background & Specialized Coursework
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Formal education at Joy University providing rigorous training in computational thinking, software engineering, and the principles of Artificial Intelligence.
          </p>
        </div>

        {/* Education Highlight Card with Campus Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Main Academic Timeline Card */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Institution & Status Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {EDUCATION_DATA.institution}
                    </h3>
                    <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Tamil Nadu, India</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-medium text-cyan-300">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{EDUCATION_DATA.timeline}</span>
                  </span>
                </div>
              </div>

              {/* Degree Title & Department */}
              <div className="py-6 space-y-2">
                <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wide">
                  Degree Program
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-white">
                  {EDUCATION_DATA.degree}
                </h4>
                <p className="text-base font-medium text-slate-300">
                  {EDUCATION_DATA.field}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="text-white font-medium bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">
                    {EDUCATION_DATA.currentSemester}
                  </span>
                  <span>·</span>
                  <span className="text-cyan-400">Active Full-Time Student</span>
                </div>
              </div>

              {/* Overview */}
              <p className="text-sm text-slate-300 leading-relaxed pt-2 border-t border-slate-800/80">
                {EDUCATION_DATA.overview}
              </p>
            </div>

            {/* Verification Marker */}
            <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                Enrolled Student ID Verified
              </span>
              <span className="font-mono text-slate-500">First-Year Cohort</span>
            </div>
          </div>

          {/* Campus Architecture Photography */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 relative group min-h-[320px] flex flex-col">
            <div className="relative flex-1 w-full overflow-hidden">
              <img
                src={PERSONAL_INFO.campusImage}
                alt="Joy University Engineering Campus"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080D1C] via-[#080D1C]/40 to-transparent" />
            </div>

            <div className="p-5 bg-slate-950/90 border-t border-slate-800/80 relative z-10">
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 mb-1">
                <Building2 className="w-4 h-4" />
                <span>Joy University Campus · Fransis Block</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Academic engineering facility hosting computer science labs, collaborative classrooms, and student innovation areas.
              </p>
            </div>
          </div>
        </div>

        {/* Foundational Coursework Grid */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <BookOpenCheck className="w-5 h-5 text-cyan-400" />
              <span>Core Foundational Coursework</span>
            </h3>
            <span className="text-xs text-slate-400 font-mono">Curriculum Subjects</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {EDUCATION_DATA.coursework.map((course) => (
              <div
                key={course.code}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-900/90 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-cyan-400 font-semibold bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded">
                    {course.code}
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">Semester 1</span>
                </div>
                <h4 className="text-sm font-semibold text-white mt-1">
                  {course.title}
                </h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {course.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
