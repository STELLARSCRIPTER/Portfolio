import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Landmark, Megaphone, CheckCircle2, TrendingUp, BarChart2, Award } from 'lucide-react';
import { experienceData } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Decorative Blueprint Vector Line in Background */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-blue-500/30 via-transparent to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="mb-16 text-center lg:text-left">
          <span className="font-mono text-[10px] text-blue-400 uppercase tracking-widest block mb-3 font-semibold">
            Chronology of Impact //
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-[#FFFFFF] tracking-tight uppercase">
            PROFESSIONAL EXPERIENCE
          </h2>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-12 relative">
          
          {/* Card 1: Frost & Sullivan (CRM Executive) - Present */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
          >
            {/* Timeline Meta Column (Left) */}
            <div className="lg:col-span-3 text-left lg:text-right flex flex-row lg:flex-col justify-between items-center lg:items-end border-b lg:border-b-0 lg:border-r border-[#2A2A2A] pb-4 lg:pb-0 lg:pr-8 h-full">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#B8B8B8] block mb-1">
                  Market Research & Growth Advisory
                </span>
                <span className="font-sans font-bold text-xs text-blue-400 tracking-wider uppercase block">
                  December 2025 – Present
                </span>
              </div>
              <div className="lg:mt-6 hidden lg:block font-mono text-[9px] text-[#B8B8B8]/50">
                
              </div>
              
            </div>

            {/* Main Showcase Card Column (Right) */}
            <div className="lg:col-span-9 bg-[#141414] border border-[#2A2A2A] rounded p-6 md:p-8 hover:border-blue-500/40 hover:shadow-[0_4px_30px_rgba(59,130,246,0.05)] transition-all duration-300 relative overflow-hidden">
              {/* McKinsey Grid Backdrop */}
              <div className="absolute right-0 top-0 bottom-0 w-32 opacity-[0.03] pointer-events-none bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:12px_12px]" />
              
              {/* Header block */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#2A2A2A]">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-sm bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Landmark className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-sans font-black text-xl text-white uppercase tracking-tight">
                      CRM Executive
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      {/* Premium Text representation of Frost & Sullivan */}
                      <span className="font-mono text-xs font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-[#B8B8B8] uppercase">
                        FROST &amp; SULLIVAN
                      </span>
                      <span className="h-1 w-1 rounded-full bg-[#B8B8B8]" />
                      <span className="font-mono text-[10px] text-[#B8B8B8] uppercase">Global Growth Advisory</span>
                    </div>
                  </div>
                </div>
                {/* Duration Badge for mobile/sm */}
                <span className="sm:hidden self-start font-mono text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 uppercase rounded-sm">
                  Active Tenure
                </span>
              </div>

              {/* Responsibilities list */}
              <h4 className="font-mono text-[10px] text-[#B8B8B8] uppercase tracking-wider mb-4">
              </h4>
              <ul className="space-y-3.5 mb-8">
                {experienceData[0].responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <div className="mt-1 p-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                    <span className="font-sans text-xs sm:text-sm text-[#B8B8B8] group-hover/item:text-white transition-colors leading-relaxed">
                      {resp}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Technologies / Competencies utilized */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-[#2A2A2A]">
                {experienceData[0].tech.map((tech, i) => (
                  <span
                    key={i}
                    className="font-mono text-[10px] text-white bg-[#0A0A0A] px-3 py-1 border border-[#2A2A2A] rounded-sm hover:border-blue-500/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Onwords Smart Solutions (Digital Marketing Executive) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
          >
            {/* Timeline Meta Column (Left) */}
            <div className="lg:col-span-3 text-left lg:text-right flex flex-row lg:flex-col justify-between items-center lg:items-end border-b lg:border-b-0 lg:border-r border-[#2A2A2A] pb-4 lg:pb-0 lg:pr-8 h-full">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#B8B8B8] block mb-1">
                  Technology Systems
                </span>
                <span className="font-sans font-bold text-xs text-blue-400 tracking-wider uppercase block">
                  5 Months tenure
                </span>
              </div>
              <div className="lg:mt-6 hidden lg:block font-mono text-[9px] text-[#B8B8B8]/50">
                LOC: COIMBATORE
              </div>
            </div>

            {/* Main Showcase Card Column (Right) */}
            <div className="lg:col-span-9 bg-[#141414] border border-[#2A2A2A] rounded p-6 md:p-8 hover:border-blue-500/40 hover:shadow-[0_4px_30px_rgba(59,130,246,0.05)] transition-all duration-300 relative overflow-hidden">
              {/* Campaign Analysis Backdrop vector representation */}
              <div className="absolute right-0 top-0 bottom-0 w-32 opacity-[0.03] pointer-events-none bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:12px_12px]" />
              
              {/* Header block */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#2A2A2A]">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-sm bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Megaphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-sans font-black text-xl text-white uppercase tracking-tight">
                      Digital Marketing Executive
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-mono text-xs font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-[#B8B8B8] uppercase">
                        ONWORDS SMART SOLUTIONS
                      </span>
                      <span className="h-1 w-1 rounded-full bg-[#B8B8B8]" />
                      <span className="font-mono text-[10px] text-[#B8B8B8] uppercase">Smart Tech IoT</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Responsibilities list */}
              <h4 className="font-mono text-[10px] text-[#B8B8B8] uppercase tracking-wider mb-4">
              </h4>
              <ul className="space-y-3.5 mb-8">
                {experienceData[1].responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <div className="mt-1 p-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                    <span className="font-sans text-xs sm:text-sm text-[#B8B8B8] group-hover/item:text-white transition-colors leading-relaxed">
                      {resp}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Technologies / Competencies utilized */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-[#2A2A2A]">
                {experienceData[1].tech.map((tech, i) => (
                  <span
                    key={i}
                    className="font-mono text-[10px] text-white bg-[#0A0A0A] px-3 py-1 border border-[#2A2A2A] rounded-sm hover:border-blue-500/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
