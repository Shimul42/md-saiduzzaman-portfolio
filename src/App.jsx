import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Research from './components/Research/Research';
import Publications from './components/Publications/Publications';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Certificates from './components/Certificates/Certificates';
import CVSection from './components/CV/CVSection';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import AIChatModal from './components/AIChat/AIChatModal';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen relative flex flex-col justify-between">
        <Navbar onOpenAI={() => setIsAIChatOpen(true)} />
        
        <main className="flex-1">
          <Hero onOpenAI={() => setIsAIChatOpen(true)} />
          <About />
          <Research />
          <Publications />
          <Projects />
          <Skills />
          <Certificates />
          <CVSection />
          <Contact />
        </main>

        <Footer />

        {/* Floating Quick AI Button */}
        <button
          onClick={() => setIsAIChatOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-xl shadow-cyan-500/25 hover:scale-105 transition-all"
        >
          <Sparkles className="w-4 h-4 animate-spin" />
          <span>Ask My AI</span>
        </button>

        {/* Dedicated Grounded AI Modal */}
        <AIChatModal
          isOpen={isAIChatOpen}
          onClose={() => setIsAIChatOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}