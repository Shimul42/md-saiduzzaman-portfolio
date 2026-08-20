import React from 'react';
import { Microscope, Dna, Activity, HeartPulse, Sparkles, CheckCircle } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function Research() {
  const { research } = portfolioData;

  const getStatusBadge = (statusType, status) => {
    if (statusType === 'preparation') {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-800/60">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          {status}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-100 dark:bg-cyan-950/60 text-cyan-900 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800/60">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
        {status}
      </span>
    );
  };

  const getIcon = (id) => {
    switch (id) {
      case 'thesis-tb': return <Dna className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'emotion-recognition': return <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'wesad-stress': return <Activity className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case 'heart-disease-xai': return <HeartPulse className="w-5 h-5 text-rose-600 dark:text-rose-400" />;
      default: return <Microscope className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
    }
  };

  return (
    <section id="research" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-cyan-700 dark:text-cyan-400 tracking-wider uppercase mb-2 font-bold">Scientific Contributions</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Research & Ongoing Work</p>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 font-medium">
            Peer-reviewed investigations and applied machine learning methodologies across computational biology, vision, and physiological signal analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {research.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-sm border border-slate-200 dark:border-slate-800 transition-all group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    {getIcon(item.id)}
                  </div>
                  {getStatusBadge(item.statusType, item.status)}
                </div>

                <span className="text-xs font-mono font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wide">
                  {item.domain}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1 mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="space-y-1.5 mb-6">
                  <span className="text-[11px] font-mono font-bold uppercase text-slate-600 dark:text-slate-400">Methodology & Workflow:</span>
                  {item.methodology.map((m, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 mt-0.5 shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-slate-800">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}