import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';
import { Briefcase, Landmark, ExternalLink, Mail, Linkedin } from 'lucide-react';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.offsetTop - 64; // Navbar height offset
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-[#0A0A0A] text-[#FFFFFF] min-h-screen selection:bg-blue-500/30 selection:text-white custom-scrollbar flex flex-col justify-between">
      {/* Implements global sticky header & CV binder */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Corporate Divisions */}
      <main className="flex-grow">
        {/* HERO BLOCK */}
        <Hero onScrollToSection={handleScrollToSection} />

        {/* ABOUT NARRATIVE + BEN-TO REVEAL COUNTERS */}
        <About />

        {/* PROFESSIONAL TENURE TIMELINE */}
        <Experience />

        {/* CORE SKILL MATRIX MATS */}
        <Skills />

        {/* CASE STUDY PORTFOLIO & SPEC CARDS */}
        <Projects />

        {/* SECURE DIRECT CONNEC-T INTAKE FORM */}
        <Contact />
      </main>

      {/* HIGH-END BUSINESS PORTAL FOOTER */}
      <footer className="bg-[#0A0A0A] border-t border-[#2A2A2A] py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* typographic representation matching header brand */}
            <div className="flex items-center gap-2.5 mb-4 select-none">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span className="font-sans font-bold tracking-widest text-[#FFFFFF] text-xs uppercase">
                SANJAY KUMAR
              </span>
            </div>
            
            <p className="font-sans text-xs text-[#B8B8B8] max-w-sm leading-normal">
              © 2026 Sanjay Kumar. Executive Data &amp; CRM Portfolio. <br /> All operational rights and case briefings verified under corporate parameters.
            </p>
          </div>

          {/* Social Channels / Policies anchor */}
          <div className="flex flex-row gap-6">
            <a
              href="www.linkedin.com/in/sanjaymarketer"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-wider text-[#B8B8B8] hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('about');
              }}
              className="font-mono text-[10px] uppercase tracking-wider text-[#B8B8B8] hover:text-[#FFFFFF] transition-colors"
            >
              Privacy Summary
            </a>
          </div>
        </div>
      </footer>

      {/* DETAILED RESUME DOSSIER OVERLAY */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
