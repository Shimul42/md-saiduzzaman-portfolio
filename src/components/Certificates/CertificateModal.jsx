import React, { useState } from 'react';
import { X, Award, ExternalLink, Download, ZoomIn } from 'lucide-react';

export default function CertificateModal({ cert, onClose }) {
  const [imageError, setImageError] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl rounded-2xl glass-panel border border-slate-700 p-6 shadow-2xl space-y-4 max-h-[90vh] flex flex-col justify-between">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-950/80 border border-indigo-800 text-indigo-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">{cert.title}</h3>
              <p className="text-xs text-indigo-400">{cert.issuer} • {cert.year}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Image Frame */}
        <div className="flex-1 min-h-[300px] max-h-[500px] overflow-hidden rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center relative group">
          {cert.image && !imageError ? (
            <div className="relative w-full h-full flex items-center justify-center p-2">
              <img
                src={cert.image}
                alt={cert.title}
                className={`max-h-[480px] w-auto object-contain rounded-lg transition-transform duration-300 ${
                  isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
                onError={() => setImageError(true)}
              />
            </div>
          ) : (
            /* Fallback preview if image file is still missing */
            <div className="p-8 text-center flex flex-col items-center justify-center">
              <Award className="w-16 h-16 text-cyan-400/40 mb-3" />
              <h4 className="text-base font-bold text-white mb-1">{cert.title}</h4>
              <p className="text-xs text-slate-300 mb-2">{cert.issuer}</p>
              <p className="text-xs text-slate-400 max-w-md">{cert.description}</p>
              <span className="mt-4 px-3 py-1 rounded-full text-[10px] font-mono bg-slate-900 border border-slate-700 text-slate-400">
                To display original certificate image: Place image file in /public/certificates/
              </span>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-800">
          <span className="text-[11px] font-mono text-cyan-400">
            {cert.category}
          </span>
          <div className="flex items-center gap-2">
            {cert.image && !imageError && (
              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open Full Image</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-medium text-white"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}