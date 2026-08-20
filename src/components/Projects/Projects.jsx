import React from 'react';
import { Cpu, Check, Layers } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function Projects() {
  const { projects } = portfolioData;
  const featured = projects.find(p => p.featured) || projects[0];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-cyan-700 dark:text-cyan-400 tracking-wider uppercase mb-2 font-bold">Applied Engineering</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Selected Featured Projects</p>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 font-medium">
            Real-world deployments integrating state-of-the-art computer vision models with scalable full-stack pipelines.
          </p>
        </div>

        {/* Featured Project Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-sm max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-100 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60 text-indigo-900 dark:text-indigo-300 text-xs font-mono font-bold">
                <Cpu className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>Featured Full-Stack AI Platform</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">{featured.title}</h3>
                <p className="text-xs sm:text-sm font-bold text-cyan-700 dark:text-cyan-400 mt-1">{featured.subtitle}</p>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {featured.description}
              </p>

              {/* Architecture Breakdown */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono uppercase text-slate-600 dark:text-slate-400 flex items-center gap-1.5 font-bold">
                  <Layers className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>System Architecture:</span>
                </span>
                {featured.architecture.map((arch, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                    <Check className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 mt-0.5 shrink-0" />
                    <span>{arch}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {featured.technologies.map((tech, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-slate-100 dark:bg-slate-900 text-indigo-900 dark:text-indigo-300 border border-slate-300 dark:border-slate-800">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Action Links */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold shadow-md shadow-cyan-600/20 transition-all hover:scale-105"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View GitHub Repository</span>
                </a>
              </div>
            </div>

            {/* Visual Specs Panel */}
            <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-900/90 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
              <h4 className="text-xs font-mono uppercase text-slate-600 dark:text-slate-400 font-bold tracking-wider">Deployment & Performance</h4>
              
              <div className="p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1 shadow-sm">
                <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Diagnostic Model</div>
                <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{featured.stats.accuracy}</div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1 shadow-sm">
                <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Deployment Architecture</div>
                <div className="text-sm font-bold text-cyan-600 dark:text-cyan-400">{featured.stats.deployment}</div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1 shadow-sm">
                <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Inference Response</div>
                <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400">{featured.stats.latency}</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}