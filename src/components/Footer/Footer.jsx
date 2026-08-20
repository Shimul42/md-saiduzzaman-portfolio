import React from 'react';
import { portfolioData } from '../../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 space-y-2">
        <p className="font-medium text-slate-300">
          {personal.name} • {personal.title}
        </p>
        <p className="text-[11px] text-slate-400">
          Designed for Master's & Academic Fellowship Applications. Single source of truth architecture.
        </p>
      </div>
    </footer>
  );
}