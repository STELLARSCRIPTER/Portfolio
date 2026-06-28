import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Copy, Check, Download, Landmark, Megaphone, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopyText = () => {
    const resumeText = `
SANJAY KUMAR - CRM & DATA ANALYTICS PORTFOLIO
Email: sanjaykaushik535@gmail.com
LinkedIn: linkedin.com/in/sanjaymarketer
Location: Chennai, Tamil Nadu, India

EXECUTIVE SUMMARY
Data analytics professional with a Master’s in Mathematics and experience in CRM operations, campaign analytics, and business intelligence. Focused on turning business data into actionable insights that drive growth and strategic decisions.
CAREER HISTORY
1. CRM Executive - Frost & Sullivan (Dec 2025 - Present)
- CRM operations management and enterprise lead lifecycle tracking across global pipelines.
- Ensuring absolute data validation, customer data quality assurance, and compliance checks.
- Generating commercial business reporting and interactive operational dashboard generation.

2. Digital Marketing Executive - Onwords Smart Solutions (5 Months)
- Successfully deployed and managed highly optimized Meta Ads & Google Ads campaigns.
- Conducted regular campaign performance monitoring, audience targeting, and multi-layered segmentation.
- Generated performance reporting and ROI analysis to maximize advertising return on investment.

EDUCATION & ACADEMY
- MSc Postgraduate in Mathematics
Focus: Mathematical Modeling, Advanced Regression Analysis, Statistical Distributions.
    `;
    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto custom-scrollbar">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0A0A0A]/95 backdrop-blur-sm"
          />

          <div className="flex min-h-screen items-center justify-center p-4 sm:p-6 md:p-10 relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-[#141414] border border-[#2A2A2A] rounded-lg max-w-3xl w-full overflow-hidden shadow-2xl printable-resume"
            >
              {/* Header Visual Bar */}
              <div className="h-1.5 bg-blue-500 w-full print:hidden" />

              {/* Action Toolbar */}
              <div className="px-6 py-4.5 border-b border-[#2A2A2A] flex justify-between items-center bg-[#0C0C0C] print:hidden">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-400" />
                  <span className="font-sans font-bold text-xs text-white uppercase tracking-wider">
                    CV 
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyText}
                    className="flex items-center gap-1.5 text-[11px] bg-[#141414] hover:bg-[#1E1E1E] text-[#B8B8B8] hover:text-white px-3 py-1.5 border border-[#2A2A2A] rounded transition-all active:scale-95"
                    title="Copy text representation"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied' : 'Copy Text'}</span>
                  </button>
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-1.5 text-[11px] bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded transition-all active:scale-95"
                    title="Print CV summary"
                  >
                    <Printer className="w-3 h-3" />
                    <span>Print Dossier</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="rounded-full p-2 text-[#B8B8B8] hover:text-[#FFFFFF] transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Printable Body Content */}
              <div className="p-8 md:p-12 text-[#FFFFFF] bg-[#141414] font-sans print:bg-white print:text-black">
                
                {/* Header info */}
                <div className="border-b border-[#2A2A2A] pb-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 print:border-black">
                  <div>
                    <h1 className="font-sans font-black text-3xl text-white uppercase tracking-tight print:text-black">
                      Sanjay Kumar
                    </h1>
                    <p className="font-mono text-[10px] text-blue-400 uppercase tracking-widest mt-1 font-semibold print:text-blue-700">
                      CRM Operations &bull; Business Intelligence &bull; Systems Analytics
                    </p>
                  </div>
                  <div className="text-left md:text-right font-mono text-[11px] text-[#B8B8B8] space-y-1 print:text-black">
                    <div>sanjaykaushik535@gmail.com</div>
                    <div>linkedin.com/in/sanjaymarketer</div>
                    <div>Chennai, Tamil Nadu, India</div>
                  </div>
                </div>

                {/* Profile Narrative */}
                <div className="mb-8">
                  <h3 className="font-mono text-[10px] text-blue-400 uppercase tracking-wider mb-3 print:text-blue-700">
                    Executive Statement 
                  </h3>
                  <p className="text-sm text-[#B8B8B8] leading-relaxed print:text-black font-normal">
                    Mathematics postgraduate with professional experience in CRM operations, campaign analytics, Power BI reporting, and digital marketing performance analysis. Passionate about transforming business data into actionable insights that support strategic decision-making and operational excellence.
                  </p>
                </div>

                {/* Employment history */}
                <div className="mb-8 space-y-6">
                  <h3 className="font-mono text-[10px] text-blue-400 uppercase tracking-wider mb-4 print:text-blue-700">
                    Professional Experience History
                  </h3>

                  {/* Frost & Sullivan */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-sans font-black text-sm text-white print:text-black">
                          CRM Executive
                        </h4>
                        <div className="font-mono text-[11px] text-blue-400 uppercase tracking-wide print:text-blue-800">
                          Frost &amp; Sullivan
                        </div>
                      </div>
                      <span className="font-mono text-[10px] text-[#B8B8B8] print:text-black">
                        Dec 2025 - Present
                      </span>
                    </div>
                    <ul className="list-disc list-inside space-y-1.5 text-xs text-[#B8B8B8] pl-2 print:text-black">
                      <li>Managed enterprise CRM systems and automated daily lead assignments to global consultants.</li>
                      <li>Spearheaded strict data validation &amp; QA checking protocols across marketing pipelines.</li>
                      <li>Designed executive Power BI dashboard portals to map deal flows and cycle times.</li>
                    </ul>
                  </div>

                  {/* Onwords Smart Solutions */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-sans font-black text-sm text-white print:text-black">
                          Digital Marketing Executive
                        </h4>
                        <div className="font-mono text-[11px] text-blue-400 uppercase tracking-wide print:text-blue-800">
                          Onwords Smart Solutions
                        </div>
                      </div>
                      <span className="font-mono text-[10px] text-[#B8B8B8] print:text-black">
                        5 Months Tenure
                      </span>
                    </div>
                    <ul className="list-disc list-inside space-y-1.5 text-xs text-[#B8B8B8] pl-2 print:text-black">
                      <li>Deployed performance campaigns on Meta Ads &amp; Google Ads with micro-budget segmentation.</li>
                      <li>Audited audience engagement matrices, leading to localized CAC optimization gains.</li>
                      <li>Consolidated daily multichannel spreadsheets into custom automated Excel models.</li>
                    </ul>
                  </div>
                </div>

                {/* Academics */}
                <div className="mb-8">
                  <h3 className="font-mono text-[10px] text-blue-400 uppercase tracking-wider mb-3 print:text-blue-700">
                    Academic Qualifications 
                  </h3>
                  <div>
                    <h4 className="font-sans font-black text-sm text-white print:text-black">
                     Postgraduate (M.Sc.) in Mathematics
                    </h4>
                    <p className="font-mono text-[11px] text-[#B8B8B8] mt-1 print:text-black">
                      Specialization in Probability Vectors, Advanced Regression Estimators, Operational Analytics.
                    </p>
                  </div>
                </div>

                {/* Competencies summary */}
                <div>
                  <h3 className="font-mono text-[10px] text-blue-400 uppercase tracking-wider mb-3 print:text-blue-700">
                    Skills
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-[#B8B8B8] print:text-black">
                    <div>
                      <strong className="text-white print:text-black block mb-1">Analytics</strong>
                      Power BI, Excel, Data Visualization, GA4
                    </div>
                    <div>
                      <strong className="text-white print:text-black block mb-1">CRM Operations</strong>
                      Lead lifecycle tracking, Data validation, Workflows
                    </div>
                    <div>
                      <strong className="text-white print:text-black block mb-1">Marketing</strong>
                      Meta Ads Manager, Google Ads Manager, CPA Optimizing
                    </div>
                    <div>
                      <strong className="text-white print:text-black block mb-1">Languages</strong>
                      Python, SQL, Mathematical models
                    </div>
                  </div>
                </div>

              </div>

              {/* Close footer, invisible when printing layout */}
              <div className="px-6 py-4.5 bg-[#0C0C0C] border-t border-[#2A2A2A] flex justify-end gap-2 print:hidden">
                <button
                  onClick={onClose}
                  className="bg-[#141414] hover:bg-[#1E1E1E] text-white font-sans font-semibold text-xs py-2 px-6 border border-[#2A2A2A] rounded transition-all uppercase"
                >
                  Close Dossier
                </button>
              </div>

            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
