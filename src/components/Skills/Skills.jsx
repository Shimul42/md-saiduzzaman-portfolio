import React from 'react';
import { Terminal, Brain, Library, Dna, Globe, Wrench } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  const categories = [
    { title: 'Programming', icon: <Terminal className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />, items: skills.programming },
    { title: 'AI & Machine Learning', icon: <Brain className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />, items: skills.ai_ml },
    { title: 'Frameworks & Libraries', icon: <Library className="w-4 h-4 text-purple-600 dark:text-purple-400" />, items: skills.frameworks_libraries },
    { title: 'Bioinformatics & AlphaFold', icon: <Dna className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />, items: skills.bioinformatics },
    { title: 'Web & APIs', icon: <Globe className="w-4 h-4 text-rose-600 dark:text-rose-400" />, items: skills.web_backend },
    { title: 'Databases & Tools', icon: <Wrench className="w-4 h-4 text-amber-600 dark:text-amber-400" />, items: skills.databases_tools },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-100/60 dark:bg-slate-950/60 border-y border-slate-200 dark:border-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-cyan-700 dark:text-cyan-400 tracking-wider uppercase mb-2 font-bold">Technical Matrix</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Skills & Competencies</p>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 font-medium">
            Concrete proficiencies across machine learning toolsets, computational biology packages, and full-stack software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    {cat.icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-800 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}