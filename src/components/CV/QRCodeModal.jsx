import React, { useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { X, QrCode, Download, ExternalLink } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function QRCodeModal({ onClose }) {
  // Use current live website origin dynamically, or fall back to custom domain
  const domain = (typeof window !== 'undefined' && window.location.origin) 
    ? window.location.origin 
    : (portfolioData.personal.domainUrl || 'https://md-saiduzzaman.vercel.app');

  const qrRef = useRef(null);

  const downloadQR = () => {
    if (!qrRef.current) return;
    const svg = qrRef.current.querySelector('svg');
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      canvas.width = 300;
      canvas.height = 300;
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 20, 20, 260, 260);
      
      const pngFile = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = 'Md_Saiduzzaman_Portfolio_QR.png';
      downloadLink.href = pngFile;
      downloadLink.click();
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md rounded-2xl glass-panel border border-slate-700 p-6 shadow-2xl text-center space-y-5">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-cyan-400">
            <QrCode className="w-5 h-5" />
            <span className="text-sm font-bold text-white">Physical CV Integration QR</span>
          </div>
          <button 
            onClick={onClose} 
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed">
          Scan to explore my digital academic profile. Place this QR code on your printed physical CV to bridge directly to this live website.
        </p>

        {/* QR Code Frame */}
        <div 
          ref={qrRef} 
          className="p-4 bg-white rounded-2xl w-fit mx-auto shadow-inner border border-slate-200 flex items-center justify-center"
        >
          <QRCodeSVG
            value={domain}
            size={180}
            level="H"
            includeMargin={false}
          />
        </div>

        {/* Live URL Display */}
        <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-400 break-all flex items-center justify-center gap-1.5">
          <span>{domain}</span>
          <a href={domain} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-300">
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={downloadQR}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-xs font-bold text-white transition-all shadow-md shadow-cyan-600/20"
          >
            <Download className="w-4 h-4" />
            <span>Download PNG for CV</span>
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}