import React from 'react';
import { motion } from 'motion/react';
import { BarChart3, Workflow, Target, Terminal, Check } from 'lucide-react';
import { skillCategories } from '../data';

// Map icon strings to actual Lucide component icons
const iconMap = {
  BarChart3: BarChart3,
  Hub: Workflow,
  AdsClick: Target,
  Terminal: Terminal,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#141414] border-y border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="font-mono text-[10px] text-blue-400 uppercase tracking-widest block mb-3 font-semibold">
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-[#FFFFFF] tracking-tight uppercase mb-4">
            CORE COMPETENCIES
          </h2>
          <p className="font-sans text-sm text-[#B8B8B8] max-w-lg mx-auto">
            Cross-functional capabilities bridging mathematical principles, business intelligence engines, and algorithmic digital media acquisitions.
          </p>
        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon] || BarChart3;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0A0A0A] border border-[#2A2A2A] rounded p-6 hover:border-blue-500/40 hover:shadow-[0_4px_30px_rgba(59,130,246,0.05)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Block with subtle growth on hover */}
                  <div className="h-10 w-10 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="font-sans font-bold text-base text-white tracking-tight uppercase mb-6">
                    {category.title}
                  </h3>

                  {/* Skill Bullet Sub-items */}
                  <ul className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="flex items-center gap-2.5 group/item">
                        <span className="h-1 w-1 rounded-full bg-blue-500 group-hover/item:scale-150 transition-transform" />
                        <span className="font-sans text-xs sm:text-sm text-[#B8B8B8] group-hover/item:text-white transition-colors">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subtle consulting design lines on the absolute bottom of each card */}
                <div className="mt-8 pt-4 border-t border-[#2A2A2A]/50 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
                  <span className="font-mono text-[8px] text-[#B8B8B8]">
                  </span>
                  <span className="font-mono text-[8px] text-blue-400">
                    
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
