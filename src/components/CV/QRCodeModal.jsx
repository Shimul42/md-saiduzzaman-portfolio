import React, { useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { X, QrCode, Download } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function QRCodeModal({ onClose }) {
  const domain = portfolioData.personal.domainUrl || window.location.origin;
  const qrRef = useRef(null);

  const downloadQR = () => {
    const svg = qrRef.current.querySelector('svg');
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width + 40;
      canvas.height = img.height + 40;
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 20, 20);
      const pngFile = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.download = 'Saiduzzaman_Portfolio_QR.png';
      downloadLink.href = pngFile;
      downloadLink.click();
    };
    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md rounded-2xl glass-panel border border-slate-700 p-6 shadow-2xl text-center space-y-5">
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-cyan-400">
            <QrCode className="w-5 h-5" />
            <span className="text-sm font-bold text-white">Physical CV Integration QR</span>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-slate-300">
          Scan to Explore My Digital Academic Profile. Place this permanent QR code on your printed physical CV to bridge directly to this website.
        </p>

        {/* QR Code Container */}
        <div ref={qrRef} className="p-6 bg-white rounded-2xl w-fit mx-auto shadow-inner border border-slate-200">
          <QRCodeSVG
            value={domain}
            size={180}
            level="H"
            includeMargin={false}
          />
        </div>

        <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-400 break-all">
          {domain}
        </div>

        <div className="flex gap-2">
          <button
            onClick={downloadQR}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-xs font-semibold text-white transition-all shadow-md shadow-cyan-600/20"
          >
            <Download className="w-4 h-4" />
            <span>Download QR for CV</span>
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}