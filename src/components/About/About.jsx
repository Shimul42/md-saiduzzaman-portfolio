import React from 'react';
import { GraduationCap, BookOpen, Layers, CheckCircle2, Target } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function About() {
  const { profile, education, researchInterests } = portfolioData;

  return (
    <section id="about" className="py-20 bg-slate-100/60 dark:bg-slate-950/60 border-y border-slate-200 dark:border-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-cyan-700 dark:text-cyan-400 tracking-wider uppercase mb-2 font-bold">Academic Profile</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">About & Research Direction</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <span>Professional & Academic Narrative</span>
              </h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                {profile.summary}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200 dark:border-slate-800 text-center">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <div className="text-xl font-bold text-cyan-600 dark:text-cyan-400 font-mono">3.65</div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400">CGPA / 4.00</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400 font-mono">2</div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400">Conf. Papers</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <div className="text-xl font-bold text-purple-600 dark:text-purple-400 font-mono">1</div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400">AlphaFold Thesis</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400 font-mono">9</div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400">Certificates</div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl shadow-sm">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>Formal Academic Degree</span>
              </h3>
              {education.map((edu, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-wrap justify-between items-baseline gap-1">
                    <h4 className="text-sm font-bold text-cyan-800 dark:text-cyan-300">{edu.degree}</h4>
                    <span className="text-xs font-mono text-slate-600 dark:text-slate-400">{edu.graduationDate}</span>
                  </div>
                  <div className="text-xs text-slate-700 dark:text-slate-300 font-semibold">{edu.institution}, {edu.location}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Achieved CGPA: <strong className="text-slate-900 dark:text-white">{edu.cgpa} / {edu.maxCgpa}</strong></div>
                  
                  <ul className="space-y-1.5 pt-3">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span>Primary Research Vectors</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {researchInterests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-200"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* High-Contrast, Vibrant Graduate Aspirations Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-indigo-50 to-cyan-50 dark:from-slate-900 dark:to-cyan-950/40 border border-indigo-200 dark:border-cyan-500/30 shadow-md">
              <div className="flex items-center gap-2 mb-2.5">
                <Target className="w-4 h-4 text-cyan-700 dark:text-cyan-400" />
                <h4 className="text-xs font-mono text-cyan-800 dark:text-cyan-300 uppercase font-bold tracking-wider">
                  Graduate Aspirations
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed font-medium">
                Seeking a competitive Master's / Ph.D. program in Computer Science & AI to pioneer explainable deep learning, structural computational biology, and robust multimodal vision systems.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}