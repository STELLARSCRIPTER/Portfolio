import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Database, Award, ArrowRight, Table } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (id: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  const techBadges = [
    'Power BI',
    'Excel',
    'CRM Operations',
    'Meta Ads',
    'Google Ads',
    'Data Analysis'
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] pt-16 flex items-center bg-[#0A0A0A] overflow-hidden blueprint-grid"
    >
      {/* Decorative Interactive/Background Vectors */}
      <div className="absolute inset-0 z-0 opacity-[0.14] pointer-events-none">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <radialGradient id="blueGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueGlow)" className="opacity-40 animate-pulse" />
          
          {/* McKinsey/Deloitte Styled Structured Trendlines */}
          <line x1="10%" y1="20%" x2="90%" y2="20%" stroke="#2A2A2A" strokeWidth="1" />
          <line x1="20%" y1="10%" x2="20%" y2="90%" stroke="#2A2A2A" strokeWidth="1" />
          <line x1="80%" y1="10%" x2="80%" y2="90%" stroke="#2A2A2A" strokeWidth="1" />
          
          {/* Mathematical mathematical function plot overlays representing his math post-grad background */}
          <path
            d="M 120,400 Q 250,220 500,450 T 880,180 T 1300,320"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="1.5"
            strokeDasharray="4 8"
            className="opacity-70"
          />
          <path
            d="M 120,450 Q 300,550 620,250 T 1100,500"
            fill="none"
            stroke="#1E40AF"
            strokeWidth="1"
            className="opacity-50"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 w-full py-12 md:py-20">
        {/* Left Side Info - spanning 7 columns */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#141414] border border-[#2A2A2A] rounded-sm max-w-max mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-ping" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#B8B8B8]">
              Professional Portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#FFFFFF] leading-[1.1] mb-6 uppercase"
          >
            Driving Business Growth <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">
               Through Data & Analytics
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans font-semibold text-sm sm:text-base tracking-wider text-blue-400 mb-6 uppercase"
          >
            CRM & DATA ANALYST • BUSINESS INTELLIGENCE • MARKETING ANALYTICS
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-sans font-normal text-sm sm:text-base leading-relaxed text-[#B8B8B8] max-w-xl mb-10"
          >
            Data analytics professional with a Master’s in Mathematics and experience in CRM operations, campaign analytics, and business intelligence. Focused on turning business data into actionable insights that drive growth and strategic decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <button
              onClick={() => onScrollToSection('experience')}
              className="group flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 active:scale-95 text-[#FFFFFF] font-sans font-semibold text-xs tracking-wider uppercase px-6 py-3.5 border border-blue-400/20 rounded shadow-[0_4px_24px_rgba(59,130,246,0.2)] transition-all duration-300"
            >
              <span>View Experience</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onScrollToSection('projects')}
              className="flex items-center justify-center gap-2 bg-[#141414] hover:bg-[#1E1E1E] active:scale-95 text-[#FFFFFF] font-sans font-semibold text-xs tracking-wider uppercase px-6 py-3.5 border border-[#2A2A2A] rounded transition-all duration-300"
            >
              <span>View Projects</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="border-t border-[#2A2A2A] pt-6"
          >
            <p className="font-mono text-[10px] text-[#B8B8B8] uppercase tracking-wider mb-3">
              Core Competency Pillars //
            </p>
            <div className="flex flex-wrap gap-2">
              {techBadges.map((badge, index) => (
                <span
                  key={index}
                  className="font-mono text-[11px] text-[#B8B8B8] bg-[#141414] px-3 py-1 border border-[#2A2A2A] rounded-sm hover:border-blue-500/50 hover:text-white transition-colors cursor-default"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side Portrait Layout - spanning 5 columns */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[380px] p-4 bg-[#141414] border border-[#2A2A2A] rounded shadow-2xl overflow-hidden group"
          >
            {/* Dark technical grid line background inside image frame */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Portrait Image container with delicate overlay */}
            <div className="relative z-10 w-full overflow-hidden border border-[#2A2A2A] bg-[#0A0A0A] group-hover:border-blue-500/40 transition-colors duration-500">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6WdPcB7ljjCZYLzuXqHOnCG3Wnn0hILIPXZi4FZHV_vYoOuojiQv_5DgBWm3orMhiaZ0jBQvAVdraaW-ljnz1_nUkYb9tkFR0Pp8biMjLsHvpomV7R1VQ2VzX3tEQ3uAdFx0k7WA0kzReNCZ-ZtT4IB9lCycxbv2ZcKzOk5aZVsGS10EJL94FKlaEFvNN9Js5C2bRdWbqzIqNFaibUnSJex0m78so4PNPxfrDhOkou1ZnZSQzyYDyX37_Ym-Bxm_099_437Ya8A"
                alt="Sanjay Kumar Portrait representation"
                className="w-full h-auto filter grayscale opacity-90 transition-all duration-1000 ease-in-out group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
            </div>

            {/* Consulting & Business intelligence UI Elements (No Fake statistics) */}
            <div className="absolute -bottom-2 -left-2 z-20 bg-[#141414] border border-[#2A2A2A] px-4 py-3 rounded shadow-xl flex items-center gap-3">
              <div className="p-1.5 rounded-sm bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <Database className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-[#B8B8B8] uppercase tracking-widest leading-none">
                  Data Architecture
                </span>
                <span className="font-sans font-bold text-[11px] text-white">
                  CRM Operations Model
                </span>
              </div>
            </div>

            <div className="absolute -top-2 -right-2 z-20 bg-[#141414] border border-[#2A2A2A] px-4 py-3 rounded shadow-xl flex items-center gap-3">
              <div className="p-1.5 rounded-sm bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-[#B8B8B8] uppercase tracking-widest leading-none">
                  Campaign Auditing
                </span>
                <span className="font-sans font-bold text-[11px] text-white">
                  Analytical Decisioning
                </span>
              </div>
            </div>

            {/* Elegant consulting grid coordinate visual element */}
            <div className="absolute bottom-4 right-4 z-20 text-right opacity-30 font-mono text-[8px] text-[#B8B8B8] pointer-events-none">
              GRID: MATH_STOCH_1.06
              <br />
              COORD: 11.025.CRM
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
