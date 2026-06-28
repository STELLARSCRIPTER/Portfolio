import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Briefcase, Workflow, Check } from 'lucide-react';
import { statsData } from '../data';

function CompaniesPopup() {
  const [open, setOpen] = useState(false);
  const companies = ['Frost & Sullivan', 'Onwords Smart Solutions'];

  return (
    <div className="relative">
      <p
        className="font-sans text-[11px] text-blue-400 leading-tight cursor-pointer underline underline-offset-2 hover:text-blue-300 transition-colors"
        onClick={() => setOpen(!open)}
      >
        View companies ↗
      </p>
      {open && (
        <div className="absolute bottom-6 left-0 z-10 bg-[#141414] border border-blue-500/30 rounded p-3 shadow-lg min-w-[180px]">
          {companies.map((c, i) => (
            <p key={i} className="font-sans text-[11px] text-[#B8B8B8] py-1 border-b border-[#2A2A2A] last:border-0">
              {c}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

function Counter({ targetValue, duration = 1200, labelPrefix = "0", suffixStr = "" }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    const end = targetValue;
    if (start === end) {
      setCount(end);
      return;
    }

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 50);
    const step = Math.ceil(end / (totalMiliseconds / incrementTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [hasAnimated, targetValue, duration]);

  const formattedCount = count < 10 ? `${labelPrefix}${count}` : `${count}`;

  return (
    <div ref={elementRef} className="text-center md:text-left">
      <div className="font-mono text-3xl sm:text-4xl lg:text-5xl font-black text-blue-500 tracking-tight leading-none mb-1">
        {formattedCount}{suffixStr}
      </div>
    </div>
  );
}

export default function About() {
  const strengths = [
    'CRM Operations & Lead Management',
    'Data Analytics & Reporting',
    'Power BI Dashboard Development',
    'Campaign Performance Analysis',
    'Business Process Optimization',
    'Strategic Decision Support'
  ];

  return (
    <section id="about" className="py-24 bg-[#141414] border-y border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Narrative Content: 7 Columns */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="font-mono text-[10px] text-blue-400 uppercase tracking-widest block mb-3 font-semibold">
              Profile //
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-[#FFFFFF] tracking-tight uppercase mb-8">
              ABOUT ME
            </h2>
            
            <p className="font-sans text-sm sm:text-base leading-relaxed text-[#B8B8B8] mb-6">
              My work combines analytics, CRM operations, and business intelligence, with a strong foundation in mathematics. I use data to uncover insights that improve performance, efficiency, and customer engagement.
            </p>
            
            <p className="font-sans text-sm sm:text-base leading-relaxed text-[#B8B8B8] mb-10">
              I have experience in campaign analysis, reporting, and CRM management, helping teams make better, data-driven decisions.
            </p>

            <div className="border-t border-[#2A2A2A] pt-8">
              <h3 className="font-mono text-[11px] text-[#FFFFFF] uppercase tracking-wider mb-6">
                Core Alignment &amp; Strengths
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {strengths.map((strength, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="mt-0.5 p-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-500/20 transition-all">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-sans text-xs sm:text-sm text-[#B8B8B8] group-hover:text-white transition-colors">
                      {strength}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Bento Elements: 5 Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 w-full">
            {statsData.map((stat, idx) => {
              const hasPlus = stat.label.includes('+');
              const suffix = hasPlus ? '+' : '';
              return (
                <div
                  key={idx}
                  className="bg-[#0A0A0A] border border-[#2A2A2A] p-6 hover:border-blue-500/40 hover:shadow-[0_4px_30px_rgba(59,130,246,0.03)] transition-all duration-300 rounded flex flex-col justify-between"
                >
                  <Counter
                    targetValue={stat.value}
                    suffixStr={suffix}
                    labelPrefix="0"
                  />
                  <div className="mt-4">
                    <h4 className="font-sans font-bold text-xs sm:text-sm text-[#FFFFFF] tracking-tight mb-1 uppercase">
                      {stat.label.replace('+', '')}{stat.label.includes('Years') || stat.label.includes('Companies') || stat.label.includes('Projects') || stat.label.includes('Tools') ? '' : stat.suffix.replace(' Years Experience', '').replace(' Companies Worked', '').replace(' Projects Completed', '').replace(' Core Tools Utilized', '')}
                    </h4>
                    <p className="font-mono text-[9px] uppercase text-blue-400 tracking-wider mb-2 leading-none">
                      {stat.suffix.trim()}
                    </p>
                    {stat.suffix.trim() === 'Companies Worked' ? (
                      <CompaniesPopup />
                    ) : (
                      <p className="font-sans text-[11px] text-[#B8B8B8] leading-tight">
                        {stat.desc}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}