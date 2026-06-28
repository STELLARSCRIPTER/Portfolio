import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BarChart3, LineChart, Network, KanbanSquare, Play, HelpCircle, FileBarChart, PieChart, Database, Activity } from 'lucide-react';
import { projectData } from '../data';
import { ProjectItem } from '../types';
import ProjectDetailsModal from './ProjectDetailsModal';

// Animated Vector previews as consulting-grade placeholders
function CaseStudyVectorPreview({ type }: { type: 'dashboard' | 'campaign' | 'crm' | 'bi' | 'stats' }) {
  if (type === 'dashboard') {
    return (
      <div className="w-full h-full bg-[#111111] relative flex items-center justify-center p-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#2A2A2A_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        {/* Core relational schemas preview */}
        <svg className="w-full h-32 text-blue-500/10" viewBox="0 0 200 100" fill="none" stroke="currentColor">
          <rect x="10" y="10" width="45" height="25" rx="2" stroke="#3B82F6" strokeWidth="1" fill="#141414" />
          <text x="16" y="26" fill="#FFFFFF" fontSize="6" fontFamily="monospace">STG_LEADS</text>
          
          <rect x="145" y="10" width="45" height="25" rx="2" stroke="#3B82F6" strokeWidth="1" fill="#141414" />
          <text x="151" y="26" fill="#FFFFFF" fontSize="6" fontFamily="monospace">CRM_CORP</text>
          
          <rect x="75" y="55" width="50" height="30" rx="2" stroke="#3B82F6" strokeWidth="1.5" fill="#141414" />
          <text x="81" y="70" fill="#3B82F6" fontSize="7" fontFamily="sans-serif" fontWeight="bold">FACT_METRIC</text>
          
          {/* Connector Paths */}
          <path d="M 55,22 L 75,70" stroke="#3B82F6" strokeWidth="1" strokeDasharray="2 2" className="opacity-60" />
          <path d="M 145,22 L 125,70" stroke="#3B82F6" strokeWidth="1" strokeDasharray="2 2" className="opacity-60" />
          
          {/* Subtle bar charts representing power bi */}
          <rect x="85" y="75" width="4" height="6" fill="#3B82F6" />
          <rect x="92" y="73" width="4" height="8" fill="#3B82F6" />
          <rect x="99" y="71" width="4" height="10" fill="#3B82F6" />
          <rect x="106" y="74" width="4" height="7" fill="#3B82F6" />
        </svg>
      </div>
    );
  }

  if (type === 'campaign') {
    return (
      <div className="w-full h-full bg-[#111111] relative flex items-center justify-center p-6 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
        <svg className="w-full h-32" viewBox="0 0 200 100" fill="none" stroke="currentColor">
          {/* Marketing funnel model representation */}
          <polygon points="30,10 170,10 140,35 60,35" stroke="#2A2A2A" strokeWidth="1" fill="#141414" />
          <text x="100" y="24" fill="#B8B8B8" fontSize="7" textAnchor="middle" fontFamily="sans-serif">IMPRESSIONS</text>
          
          <polygon points="60,35 140,35 120,62 80,62" stroke="#3B82F6" strokeWidth="1" fill="#141414" />
          <text x="100" y="49" fill="#3B82F6" fontSize="7" textAnchor="middle" fontFamily="sans-serif">CONVERSIONS</text>
          
          <polygon points="80,62 120,62 105,90 95,90" stroke="#60A5FA" strokeWidth="1.5" fill="#141414" />
          <text x="100" y="78" fill="#FFFFFF" fontSize="7" textAnchor="middle" fontFamily="sans-serif">ROI / CPA</text>
        </svg>
      </div>
    );
  }

  if (type === 'crm') {
    return (
      <div className="w-full h-full bg-[#111111] relative flex items-center justify-center p-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#2A2A2A_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
        <svg className="w-full h-32" viewBox="0 0 200 100" fill="none" stroke="currentColor">
          {/* Life-cycle checkpoints */}
          <circle cx="30" cy="50" r="12" stroke="#3B82F6" strokeWidth="1" fill="#141414" />
          <text x="30" y="53" fill="#B8B8B8" fontSize="8" textAnchor="middle" fontFamily="monospace">IN</text>
          
          <path d="M 42,50 L 78,50" stroke="#3B82F6" strokeWidth="1" strokeDasharray="2 2" />
          
          <circle cx="95" cy="50" r="16" stroke="#3B82F6" strokeWidth="1.5" fill="#0C0C0C" />
          <text x="95" y="53" fill="#3B82F6" fontSize="7" textAnchor="middle" fontFamily="monospace">VALIDATE</text>
          
          <path d="M 111,50 L 153,50" stroke="#3B82F6" strokeWidth="1" strokeDasharray="2 2" />
          
          <circle cx="165" cy="50" r="12" stroke="#60A5FA" strokeWidth="1" fill="#141414" />
          <text x="165" y="53" fill="#FFFFFF" fontSize="6" textAnchor="middle" fontFamily="monospace">EXEC</text>
        </svg>
      </div>
    );
  }

  if (type === 'bi') {
    return (
      <div className="w-full h-full bg-[#111111] relative flex items-center justify-center p-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#2B6CB0_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
        <svg className="w-full h-32 text-[#2A2A2A]" viewBox="0 0 200 100" fill="none" stroke="currentColor">
          {/* grid coordinates and multi-view panels representing executive dashboard layout */}
          <rect x="10" y="10" width="80" height="35" rx="1" stroke="#2A2A2A" strokeWidth="1" />
          <line x1="20" y1="20" x2="80" y2="20" stroke="#3B82F6" strokeWidth="1" />
          
          <rect x="110" y="10" width="80" height="35" rx="1" stroke="#2A2A2A" strokeWidth="1" />
          <line x1="120" y1="35" x2="180" y2="15" stroke="#60A5FA" strokeWidth="1" />
          
          <rect x="10" y="55" width="180" height="35" rx="1" stroke="#3B82F6" strokeWidth="1" fill="#141414" />
          <path d="M 20,80 Q 50,60 90,82 T 180,65" stroke="#FFFFFF" strokeWidth="1" />
        </svg>
      </div>
    );
  }

  // stats model
  return (
    <div className="w-full h-full bg-[#111111] relative flex items-center justify-center p-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#2A2A2A_1px,transparent_1px)] [background-size:12px_12px] opacity-25" />
      <svg className="w-full h-32" viewBox="0 0 200 100" fill="none" stroke="#2A2A2A">
        {/* Plotting regression / gaussian bell curve representing postgrad math */}
        <path d="M 10,90 L 190,90" stroke="#2A2A2A" strokeWidth="1" />
        <path d="M 15,90 Q 70,90 100,20 T 185,90" stroke="#3B82F6" strokeWidth="2" />
        <line x1="100" y1="20" x2="100" y2="90" stroke="#60A5FA" strokeWidth="1" strokeDasharray="3 3" />
        
        {/* data scattering nodes */}
        <circle cx="45" cy="85" r="2.5" fill="#3B82F6" className="opacity-90" />
        <circle cx="70" cy="70" r="2.5" fill="#3B82F6" className="opacity-90" />
        <circle cx="85" cy="40" r="2.5" fill="#3B82F6" className="opacity-90" />
        <circle cx="115" cy="45" r="2.5" fill="#3B82F6" className="opacity-90" />
        <circle cx="130" cy="65" r="2.5" fill="#3B82F6" className="opacity-90" />
        <circle cx="155" cy="82" r="2.5" fill="#3B82F6" className="opacity-90" />
        
        <text x="110" y="25" fill="#FFFFFF" fontSize="6" fontFamily="monospace">CORR (R) = 0.89</text>
      </svg>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenCaseStudy = (project: ProjectItem) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="projects" className="py-24 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-[10px] text-blue-400 uppercase tracking-widest block mb-3 font-semibold">
            Case Studies 
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-[#FFFFFF] tracking-tight uppercase mb-4">
            PROJECT PORTFOLIO
          </h2>
          <p className="font-sans text-sm text-[#B8B8B8] max-w-2xl">
            Selected projects demonstrating analytics, reporting, business intelligence, CRM operations, and campaign performance analysis. Each case represents data translations for real-world enterprise growth metrics.
          </p>
        </div>

        {/* Dynamic Presentation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, idx) => {
            const isLastSpan = idx === 4; // Make the 5th project layout look unique
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                className={`bg-[#141414] border border-[#2A2A2A] rounded overflow-hidden hover:border-blue-500/40 hover:shadow-[0_4px_30px_rgba(59,130,246,0.05)] transition-all duration-300 flex flex-col justify-between group ${
                  isLastSpan ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Vector Blueprint representation instead of generic/blank cards */}
                  <div className="h-48 border-b border-[#2A2A2A] relative object-cover bg-[#0A0A0A]">
                    <div className="absolute top-3 left-3 z-20 font-mono text-[8px] text-[#B8B8B8] bg-[#141414]/90 px-2 py-0.5 border border-[#2A2A2A] rounded">
                      CASE_0{idx + 1}
                    </div>
                    <CaseStudyVectorPreview type={project.imageType} />
                  </div>

                  {/* Card Info */}
                  <div className="p-6">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-blue-400 block mb-1">
                      {project.category}
                    </span>
                    <h3 className="font-sans font-black text-lg text-white mb-3 group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#B8B8B8] leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tags and CTA */}
                <div className="p-6 pt-0">
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.slice(0, 3).map((t, index) => (
                      <span
                        key={index}
                        className="font-mono text-[9px] text-[#B8B8B8] bg-[#0A0A0A] px-2 py-0.5 border border-[#2A2A2A] rounded"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="font-mono text-[9px] text-blue-400 px-1 py-0.5">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => handleOpenCaseStudy(project)}
                    className="w-full text-center bg-[#0C0C0C] hover:bg-blue-500 hover:text-white text-[#B8B8B8] font-sans font-bold text-xs py-3 border border-[#2A2A2A] rounded active:scale-95 transition-all uppercase tracking-wider"
                  >
                    View Case Study
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Case Study Details Modal */}
        <ProjectDetailsModal
          project={selectedProject}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />

      </div>
    </section>
  );
}
