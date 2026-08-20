import React, { useState } from 'react';
import { Eye, Calendar, Tag } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import CertificateModal from './CertificateModal';

export default function Certificates() {
  const { certificates } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono text-cyan-700 dark:text-cyan-400 tracking-wider uppercase mb-2 font-bold">Verified Recognition</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">Certificates & Academic Activities</p>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 font-medium">
            Conference presentations, competitive hackathons, and certified leadership workshops.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="flex items-center gap-1 font-mono text-[11px] font-bold text-cyan-700 dark:text-cyan-400">
                    <Tag className="w-3 h-3" />
                    {cert.category}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[11px] text-slate-600 dark:text-slate-400 font-semibold">
                    <Calendar className="w-3 h-3" />
                    {cert.year}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs font-bold text-indigo-700 dark:text-indigo-400 mb-2">
                  {cert.issuer}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <button
                onClick={() => setSelectedCert(cert)}
                className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-cyan-950/60 border border-slate-300 dark:border-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-cyan-700 dark:hover:text-cyan-300 transition-all shadow-sm"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Certificate Preview</span>
              </button>
            </div>
          ))}
        </div>

      </div>

      {selectedCert && (
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
}