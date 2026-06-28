import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Download, Briefcase, Award, FolderGit2, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const top = element.offsetTop - 64; // Navbar height
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-16 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#2A2A2A]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Name Brand */}
        <div 
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="font-sans font-bold tracking-widest text-[#FFFFFF] text-sm uppercase group-hover:text-blue-400 transition-colors">
            SANJAY KUMAR
          </span>
          <span className="hidden sm:inline font-mono text-[10px] text-[#B8B8B8] py-0.5 px-2 bg-[#141414] border border-[#2A2A2A] rounded">
            CRM &amp; ANALYTICS
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className={`font-mono text-xs tracking-wider transition-colors ${
              activeSection === 'about' ? 'text-blue-400' : 'text-[#B8B8B8] hover:text-[#FFFFFF]'
            }`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className={`font-mono text-xs tracking-wider transition-colors ${
              activeSection === 'experience' ? 'text-blue-400' : 'text-[#B8B8B8] hover:text-[#FFFFFF]'
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className={`font-mono text-xs tracking-wider transition-colors ${
              activeSection === 'skills' ? 'text-blue-400' : 'text-[#B8B8B8] hover:text-[#FFFFFF]'
            }`}
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className={`font-mono text-xs tracking-wider transition-colors ${
              activeSection === 'projects' ? 'text-blue-400' : 'text-[#B8B8B8] hover:text-[#FFFFFF]'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`font-mono text-xs tracking-wider transition-colors ${
              activeSection === 'contact' ? 'text-blue-400' : 'text-[#B8B8B8] hover:text-[#FFFFFF]'
            }`}
          >
            Contact
          </button>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 active:scale-95 text-[#FFFFFF] font-sans font-semibold text-xs tracking-wider uppercase px-4 py-2 border border-blue-400/20 rounded shadow-[0_4px_20px_rgba(59,130,246,0.15)] transition-all duration-300"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={onOpenResume}
            className="flex p-2 bg-[#141414] border border-[#2A2A2A] rounded text-[#B8B8B8] hover:text-blue-400 transition-colors"
            title="Inspect CV"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 text-[#FFFFFF] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-[#0A0A0A] border-b border-[#2A2A2A] flex flex-col p-6 gap-5 shadow-2x animate-fade-in z-45">
          <button
            onClick={() => scrollToSection('about')}
            className="text-left font-sans text-sm font-medium tracking-wider text-[#B8B8B8] hover:text-[#FFFFFF]"
          >
            About Me
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-left font-sans text-sm font-medium tracking-wider text-[#B8B8B8] hover:text-[#FFFFFF]"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-left font-sans text-sm font-medium tracking-wider text-[#B8B8B8] hover:text-[#FFFFFF]"
          >
            Skills &amp; Tech Stack
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-left font-sans text-sm font-medium tracking-wider text-[#B8B8B8] hover:text-[#FFFFFF]"
          >
            Project Portfolio
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-left font-sans text-sm font-medium tracking-wider text-[#B8B8B8] hover:text-[#FFFFFF]"
          >
            Let's Connect
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="flex items-center justify-center gap-2 w-full bg-blue-500 text-[#FFFFFF] font-sans font-bold text-xs tracking-wider uppercase py-3 border border-blue-400/20 rounded shadow-md"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV Summary</span>
          </button>
        </div>
      )}
    </nav>
  );
}
