import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, MapPin, Send, CheckCircle2, PhoneCall } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'CRM & Data Analytics Consulting',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate pristine secure enterprise transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({
        name: '',
        email: '',
        subject: 'CRM & Data Analytics Consulting',
        message: ''
      });

      // Clear success dialog after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#141414] border-t border-[#2A2A2A] overflow-hidden">
      {/* Decorative Boardroom Blue Ambient Lighting */}
      <div className="absolute -bottom-80 -right-80 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute -top-80 -left-80 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Coordinates Left: 5 Columns */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-mono text-[10px] text-blue-400 uppercase tracking-widest block mb-3 font-semibold">
                Direct Communication //
              </span>
              <h2 className="font-sans font-black text-3xl sm:text-4xl text-[#FFFFFF] tracking-tight uppercase mb-4 leading-none">
                LET'S CONNECT
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#B8B8B8] leading-relaxed">
                Open to conversations regarding strategic alignments, corporate integrations, CRM auditing, and data visualization consultancies.
              </p>
            </div>

            {/* List of Contact Cards */}
            <div className="space-y-4">
              
              {/* Email Card */}
              <div className="flex items-center gap-4 bg-[#0A0A0A] border border-[#2A2A2A] p-4 rounded hover:border-blue-500/40 transition-colors group">
                <div className="h-10 w-10 rounded bg-blue-500/10 border border-blue-500/15 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/25 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[8px] text-[#B8B8B8] uppercase tracking-wider block">
                    Communication
                  </span>
                  <a
                    href="mailto:sanjaykaushik535@gmail.com"
                    className="font-sans font-bold text-sm text-white hover:text-blue-400 transition-colors"
                  >
                    sanjaykaushik535@gmail.com
                  </a>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="flex items-center gap-4 bg-[#0A0A0A] border border-[#2A2A2A] p-4 rounded hover:border-blue-500/40 transition-colors group">
                <div className="h-10 w-10 rounded bg-blue-500/10 border border-blue-500/15 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/25 transition-all">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[8px] text-[#B8B8B8] uppercase tracking-wider block">
                    LinkedIn 
                  </span>
                  <a
                    href="https://linkedin.com/in/sanjaymarketer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans font-bold text-sm text-white hover:text-blue-400 transition-colors"
                  >
                    www.linkedin.com/in/sanjaymarketer


                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-4 bg-[#0A0A0A] border border-[#2A2A2A] p-4 rounded hover:border-blue-500/40 transition-colors group">
                <div className="h-10 w-10 rounded bg-blue-500/10 border border-blue-500/15 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/25 transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[8px] text-[#B8B8B8] uppercase tracking-wider block">
                    Location 
                  </span>
                  <span className="font-sans font-bold text-sm text-white">
                    Chennai, Tamil Nadu, India
                  </span>
                </div>
              </div>

            </div>

            {/* Consulting methodology coordinate visual */}
            <div className="border-t border-[#2A2A2A]/60 pt-6 opacity-30 font-mono text-[9px] text-[#B8B8B8] leading-normal">
              SECURE_TLS_ESTABLISHED
              <br />
              PING_SUBNET: OK // PORT: 3000
            </div>
          </div>

          {/* Form Side: 7 Columns */}
          <div className="lg:col-span-7 bg-[#0A0A0A] border border-[#2A2A2A] rounded p-6 md:p-8 relative">
            
            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 bg-[#0A0A0A]/95 z-20 flex flex-col items-center justify-center p-6 text-center"
                >
                  <div className="h-12 w-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-sans font-bold text-lg text-white mb-2 uppercase">
                    Transmission Acknowledged
                  </h3>
                  <p className="font-sans text-sm text-[#B8B8B8] max-w-sm mb-6">
                    Thank you. Your strategic brief has successfully completed transmission. Sanjay Kumar will evaluate and respond to coordinates within 24 operational business hours.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="font-mono text-xs text-blue-400 hover:text-blue-300 underline"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-5">
              <h3 className="font-mono text-[10px] text-[#FFFFFF] uppercase tracking-wider mb-6 pb-2 border-b border-[#2A2A2A] block">
                Corporate Inquiry Portal //
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[9px] text-blue-400 uppercase tracking-widest block mb-2 font-semibold">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Full Name / Brand"
                    className="w-full bg-[#141414] border border-[#2A2A2A] px-4 py-3 rounded text-sm text-white focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all placeholder:text-[#B8B8B8]/40"
                  />
                </div>
                <div>
                  <label className="font-mono text-[9px] text-blue-400 uppercase tracking-widest block mb-2 font-semibold">
                    Professional Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="professional@domain.com"
                    className="w-full bg-[#141414] border border-[#2A2A2A] px-4 py-3 rounded text-sm text-white focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all placeholder:text-[#B8B8B8]/40"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-[9px] text-blue-300 uppercase tracking-widest block mb-2">
                  Scope Focus
                </label>
                <select
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full bg-[#141414] border border-[#2A2A2A] px-4 py-3 rounded text-sm text-white focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
                >
                  <option value="CRM Operations &amp; Lead Management">CRM Operations &amp; Lead Management</option>
                  <option value="Business Intelligence &amp; Power BI">Business Intelligence &amp; Power BI</option>
                  <option value="Marketing Campaign Analytics &amp; Auditing">Marketing Campaign Analytics &amp; Auditing</option>
                  <option value="Mathematical Modeling &amp; Research">Mathematical Modeling &amp; Research</option>
                  <option value="General Strategic Engagement">General Strategic Engagement</option>
                </select>
              </div>

              <div>
                <label className="font-mono text-[9px] text-blue-400 uppercase tracking-widest block mb-2 font-semibold">
                  Statement of Intent *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="How can Sanjay Kumar optimize your organizational datasets or pipelines?"
                  className="w-full bg-[#141414] border border-[#2A2A2A] px-4 py-3 rounded text-sm text-white focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all placeholder:text-[#B8B8B8]/40 resize-none h-32 custom-scrollbar"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full justify-center flex items-center gap-2 bg-blue-500 hover:bg-blue-600 active:scale-[0.98] disabled:bg-blue-500/50 disabled:cursor-wait text-white font-sans font-semibold text-xs tracking-wider uppercase py-4 border border-blue-400/20 rounded shadow-md transition-all duration-300"
              >
                <span>{isSubmitting ? 'Transmitting brief...' : 'Send Message'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

          </div>

        </div>
      </div>
    </section>
  );
}
