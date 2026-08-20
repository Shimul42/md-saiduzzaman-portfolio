import React from 'react';
import { BookMarked, Award, Users, Calendar } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function Publications() {
  const { publications } = portfolioData;

  return (
    <section id="publications" className="py-20 bg-slate-100/60 dark:bg-slate-950/60 border-y border-slate-200 dark:border-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-cyan-700 dark:text-cyan-400 tracking-wider uppercase mb-2 font-bold">Conference Research</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Publications & Conference Proceedings</p>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 font-medium">
            Academic conference papers presented at competitive undergraduate computing forums.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800/60">
                  <Award className="w-3.5 h-3.5" />
                  {pub.status}
                </span>
                <span className="flex items-center gap-1 text-xs font-mono text-slate-600 dark:text-slate-400 font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  {pub.year}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                {pub.title}
              </h3>

              <div className="flex items-center gap-2 text-xs font-bold text-indigo-700 dark:text-indigo-400 mb-3">
                <BookMarked className="w-4 h-4 shrink-0" />
                <span>{pub.conference}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                {pub.summary}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium">
                  <Users className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>Authors: <strong className="text-slate-900 dark:text-white">Md. Saiduzzaman</strong> (Author)</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {pub.tags.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 dark:bg-slate-900 text-cyan-800 dark:text-cyan-300 border border-slate-300 dark:border-slate-800">
                      {t}
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