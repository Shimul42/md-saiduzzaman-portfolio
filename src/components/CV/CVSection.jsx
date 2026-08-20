import React, { useState } from 'react';
import { FileText, FileDown, Eye, QrCode } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import QRCodeModal from './QRCodeModal';

export default function CVSection() {
  const { cv } = portfolioData;
  const [showQR, setShowQR] = useState(false);

  return (
    <section id="cv" className="py-20 bg-slate-100/60 dark:bg-slate-950/60 border-y border-slate-200 dark:border-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 text-center relative overflow-hidden shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-cyan-500/20">
            <FileText className="w-7 h-7" />
          </div>

          <h2 className="text-xs font-mono text-cyan-700 dark:text-cyan-400 tracking-wider uppercase mb-2 font-bold">Official Credentials</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Curriculum Vitae</p>
          
          <p className="text-sm text-slate-700 dark:text-slate-300 max-w-xl mx-auto leading-relaxed mb-8 font-medium">
            Download my latest academic CV for detailed information about my education, research, publications, projects, and technical skills.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a
              href={cv.assetPath}
              download="Md_Saiduzzaman_Academic_CV.pdf"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/25 transition-all hover:scale-105"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Academic CV</span>
            </a>

            <a
              href={cv.assetPath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-xs font-bold transition-all hover:scale-105 shadow-sm"
            >
              <Eye className="w-4 h-4" />
              <span>View CV in Browser</span>
            </a>

            <button
              onClick={() => setShowQR(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 hover:bg-cyan-50 dark:hover:bg-cyan-950/60 text-cyan-800 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/30 text-xs font-bold transition-all hover:scale-105 shadow-sm"
            >
              <QrCode className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Digital Profile QR Code</span>
            </button>
          </div>

          <p className="text-[11px] font-mono text-slate-600 dark:text-slate-400 font-semibold">
            Current Document: <span className="text-slate-900 dark:text-slate-300">{cv.fileName}</span> (Updated {cv.lastUpdated})
          </p>
        </div>

      </div>

      {showQR && <QRCodeModal onClose={() => setShowQR(false)} />}
    </section>
  );
}