import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Award, Target, Cpu, TrendingUp, BarChart } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectDetailsModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailsModal({ project, isOpen, onClose }: ProjectDetailsModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto custom-scrollbar">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0A0A0A]/95 backdrop-blur-sm"
          />

          {/* Modal Containment */}
          <div className="flex min-h-screen items-center justify-center p-4 sm:p-6 md:p-10 relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="bg-[#141414] border border-[#2A2A2A] rounded-lg max-w-4xl w-full overflow-hidden shadow-2xl"
            >
              {/* Header Visual Bar */}
              <div className="h-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-300 w-full" />

              {/* Toolbar */}
              <div className="px-6 py-4 border-b border-[#2A2A2A] flex justify-between items-center bg-[#0C0C0C]">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-sm">
                    {project.category}
                  </span>
                  <span className="font-sans font-medium text-xs text-[#B8B8B8]">Case Study Briefing</span>
                </div>
                <button
                  onClick={onClose}
                  className="rounded-full p-1 text-[#B8B8B8] hover:text-[#FFFFFF] hover:bg-[#1E1E1E] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Case Content */}
              <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
                
                {/* Left Side: Summary & Action Pillars (7 cols) */}
                <div className="md:col-span-7 space-y-6">
                  <div>
                    <span className="font-mono text-[9px] text-[#B8B8B8] uppercase tracking-widest leading-none block mb-1">
                      {project.subtitle}
                    </span>
                    <h3 className="font-sans font-black text-2xl lg:text-3xl text-white tracking-tight uppercase leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  <div>
                    <h4 className="font-mono text-[10px] text-blue-400 uppercase tracking-wider mb-2">
                      Executive Summary //
                    </h4>
                    <p className="font-sans text-sm text-[#B8B8B8] leading-relaxed">
                      {project.longDescription || project.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-[10px] text-blue-400 uppercase tracking-wider mb-3">
                      Strategic Deliverables &amp; Action Pillars //
                    </h4>
                    <div className="space-y-3">
                      {project.keyOutcomes?.map((outcome, idx) => (
                        <div key={idx} className="flex items-start gap-3 group">
                          <div className="mt-1 p-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/15">
                            <CheckCircle className="w-3.5 h-3.5" />
                          </div>
                          <span className="font-sans text-xs sm:text-sm text-[#B8B8B8] group-hover:text-white transition-colors">
                            {outcome}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side: KPI Cards & Deployment stack (5 cols) */}
                <div className="md:col-span-5 space-y-6 bg-[#0C0C0C] border border-[#2A2A2A] rounded p-6">
                  
                  {/* measurable outcomes metric numbers */}
                  <div>
                    <h4 className="font-mono text-[10px] text-[#FFFFFF] uppercase tracking-wider mb-4 pb-2 border-b border-[#2A2A2A] flex justify-between">
                      <span>Measurable Outcomes</span>
                      <span className="text-blue-400">MATH_STOCH</span>
                    </h4>

                    <div className="space-y-4">
                      {project.caseStudyMetrics?.map((metric, idx) => (
                        <div key={idx} className="bg-[#141414] border border-[#2A2A2A] p-4 rounded-sm flex justify-between items-center">
                          <span className="font-sans text-xs text-[#B8B8B8] pr-2">
                            {metric.label}
                          </span>
                          <span className="font-mono font-black text-lg md:text-xl text-blue-400">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* stack utilized */}
                  <div>
                    <h4 className="font-mono text-[10px] text-[#FFFFFF] uppercase tracking-wider mb-3">
                      Deployable Stack //
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-[9px] text-white bg-[#141414] border border-[#2A2A2A] px-2.5 py-1 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* professional sign-off */}
                  <div className="text-right border-t border-[#2A2A2A] pt-4 opacity-30 mt-8">
                    <span className="font-mono text-[8px] text-[#B8B8B8] block">
                      VERIFIED BY SANJAY KUMAR
                    </span>
                    <span className="font-mono text-[8px] text-[#B8B8B8] block">
                      CRM / ANALYTICS INC
                    </span>
                  </div>

                </div>

              </div>

              {/* Close Footer bar */}
              <div className="px-6 py-4.5 bg-[#0C0C0C] border-t border-[#2A2A2A] flex justify-end">
                <button
                  onClick={onClose}
                  className="bg-[#141414] hover:bg-[#1E1E1E] text-white font-sans font-semibold text-xs py-2 px-6 border border-[#2A2A2A] rounded transition-all active:scale-95 uppercase"
                >
                  Close Briefing
                </button>
              </div>

            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
