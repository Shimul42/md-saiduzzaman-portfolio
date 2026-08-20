import React, { useState } from 'react';
import { ArrowRight, FileDown, Sparkles, Mail, MapPin, GraduationCap, Brain, Dna } from 'lucide-react';
import NeuralCanvas from './NeuralCanvas';
import { portfolioData } from '../../data/portfolioData';

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export default function Hero({ onOpenAI }) {
  const { personal, education } = portfolioData;
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({ x: (y / rect.height) * -12, y: (x / rect.width) * 12 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      <NeuralCanvas />

      <div className="absolute top-1/4 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200 dark:bg-slate-900 border border-cyan-500/30 text-cyan-800 dark:text-cyan-300 text-xs font-mono shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Graduate Studies & AI Research</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {personal.name}
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl font-semibold gradient-text-ai">
              {personal.title}
            </p>

            {/* Tagline */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              "{personal.tagline}"
            </p>

            {/* Academic Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-medium">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-200 shadow-sm">
                <GraduationCap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                {education[0].institution} • CGPA {education[0].cgpa}/{education[0].maxCgpa}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-200 shadow-sm">
                <MapPin className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                {personal.location}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#research"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shadow-lg shadow-cyan-600/25 transition-all hover:scale-105"
              >
                <span>Explore My Research</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.cv.assetPath}
                download="Md_Saiduzzaman_Academic_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/20 transition-all hover:scale-105 cursor-pointer"
              >
                <FileDown className="w-4 h-4" />
                <span>Download CV</span>
              </a>

              <button
                onClick={onOpenAI}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-900 dark:bg-purple-950/80 dark:hover:bg-purple-900/90 border border-purple-300 dark:border-purple-500/50 dark:text-purple-300 text-xs font-semibold transition-all hover:scale-105"
              >
                <Sparkles className="w-4 h-4 text-purple-600 dark:text-cyan-400" />
                <span>Ask My AI</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:border-cyan-500 transition-all shadow-sm"
              >
                <GithubIcon className="w-5 h-5 text-slate-900 dark:text-white" />
                <span className="text-xs font-semibold">GitHub</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:border-cyan-500 transition-all shadow-sm"
              >
                <LinkedinIcon className="w-5 h-5 text-[#0a66c2]" />
                <span className="text-xs font-semibold">LinkedIn</span>
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:border-cyan-500 transition-all shadow-sm"
              >
                <Mail className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <span className="text-xs font-semibold">Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Profile Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: 'transform 0.15s ease-out'
              }}
              className="relative group cursor-pointer"
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-cyan-500/30 via-indigo-500/20 to-purple-500/30 blur-md pointer-events-none" />

              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl p-1.5 bg-gradient-to-b from-cyan-500 via-indigo-600 to-purple-600 shadow-2xl shadow-cyan-500/20">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-950 relative">
                  <img
                    src="/Profile.jpg"
                    alt={personal.name}
                    className="w-full h-full object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl glass-panel border border-slate-800 text-center">
                    <div className="text-xs font-bold text-white">Md. Saiduzzaman</div>
                    <div className="text-[10px] text-cyan-400 font-mono">AlphaFold & Vision Researcher</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-3 -left-4 px-3 py-2 rounded-xl glass-panel border border-cyan-500/40 text-cyan-700 dark:text-cyan-300 text-xs font-semibold flex items-center gap-2 shadow-lg">
                <Dna className="w-4 h-4 text-emerald-500" />
                <span>Bioinformatics</span>
              </div>

              <div className="absolute -bottom-3 -right-4 px-3 py-2 rounded-xl glass-panel border border-indigo-500/40 text-indigo-700 dark:text-indigo-300 text-xs font-semibold flex items-center gap-2 shadow-lg">
                <Brain className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Computer Vision</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}