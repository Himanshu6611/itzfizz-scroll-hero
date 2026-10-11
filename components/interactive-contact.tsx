'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles, Mail, MessageSquare, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';

export function InteractiveContact() {
  const [selectedBudget, setSelectedBudget] = useState('$25k - $50k');
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'GSAP Motion & Kinetic Web',
  ]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const budgets = ['$10k - $25k', '$25k - $50k', '$50k - $100k', '$100k+'];
  const servicesList = [
    'GSAP Motion & Kinetic Web',
    'Next.js 15 Full-Stack',
    '3D WebGL Configurator',
    'Brand & Design System',
    'UX Conversion Audit',
  ];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 px-6 lg:px-16 bg-[#0b0d09] border-t border-white/10 overflow-hidden">
      {/* Background glow circle */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#d8fa4b]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Studio Pitch & Direct Contacts */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#d8fa4b] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#d8fa4b]" />
                <span>06 // INITIATE PARTNERSHIP</span>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white mb-6">
                Let&apos;s build what&apos;s <br />
                <span className="text-[#d8fa4b]">next together.</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-[#8b9282] mb-8">
                Ready to transform your digital presence into a fluid, unforgettable kinetic experience? Share your timeline and goals with us.
              </p>

              {/* Quick Contact Badges */}
              <div className="space-y-4 mb-8">
                <a
                  href="mailto:hello@itzfizz.com"
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-[#13170f]/70 hover:border-[#d8fa4b]/40 hover:bg-[#161a12] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#d8fa4b]/10 border border-[#d8fa4b]/20 flex items-center justify-center text-[#d8fa4b] group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono tracking-wider text-[#8b9282]">DIRECT INQUIRIES</div>
                    <div className="text-sm font-bold text-white group-hover:text-[#d8fa4b] transition-colors">
                      hello@itzfizz.com
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-[#13170f]/70">
                  <div className="w-10 h-10 rounded-lg bg-[#d8fa4b]/10 border border-[#d8fa4b]/20 flex items-center justify-center text-[#d8fa4b]">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono tracking-wider text-[#8b9282]">RESPONSE SLA</div>
                    <div className="text-sm font-bold text-white">Within 24 business hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-white/10 flex items-center gap-4 text-[#8b9282]">
              <span className="text-xs font-mono">CONNECT:</span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-[#d8fa4b] hover:text-black transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-[#d8fa4b] hover:text-black transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-[#d8fa4b] hover:text-black transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-[#13180f]/90 backdrop-blur-xl p-8 sm:p-10 shadow-2xl relative">
              {isSubmitted ? (
                <div className="py-16 text-center animate-in fade-in zoom-in-95 duration-400">
                  <div className="w-16 h-16 rounded-full bg-[#d8fa4b]/20 border border-[#d8fa4b] flex items-center justify-center text-[#d8fa4b] mx-auto mb-6 shadow-[0_0_30px_rgba(216,250,75,0.4)]">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-3">
                    Inquiry Received, {name || 'Partner'}!
                  </h3>
                  <p className="text-[#a8b394] text-sm max-w-md mx-auto mb-8 leading-relaxed">
                    Our creative engineering team will analyze your project brief and return with interactive wireframes and discovery questions within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="px-6 py-2.5 rounded-full border border-white/20 text-xs font-mono tracking-wider hover:bg-[#d8fa4b] hover:text-black hover:border-[#d8fa4b] transition-all cursor-pointer"
                  >
                    SUBMIT ANOTHER BRIEF ↺
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  {/* Service selection */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#a8b394] mb-3">
                      1. Select Desired Capabilities
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {servicesList.map((srv) => {
                        const isSelected = selectedServices.includes(srv);
                        return (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => toggleService(srv)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#d8fa4b] text-[#0b0d09] font-bold shadow-[0_0_12px_rgba(216,250,75,0.25)]'
                                : 'bg-white/5 text-[#b4baa9] hover:bg-white/10 border border-white/5'
                            }`}
                          >
                            {srv} {isSelected ? '✓' : '+'}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget selection */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#a8b394] mb-3">
                      2. Anticipated Project Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setSelectedBudget(b)}
                          className={`py-2 px-3 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer border text-center ${
                            selectedBudget === b
                              ? 'bg-[#d8fa4b]/15 border-[#d8fa4b] text-[#d8fa4b]'
                              : 'bg-white/[0.03] border-white/10 text-[#8b9282] hover:border-white/20 hover:text-white'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#8b9282] mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#d8fa4b] focus:ring-1 focus:ring-[#d8fa4b] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#8b9282] mb-2">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#d8fa4b] focus:ring-1 focus:ring-[#d8fa4b] transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#8b9282] mb-2">
                      Project Goals & Timeline
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about the interactive features, animations, or launch deadlines..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#d8fa4b] focus:ring-1 focus:ring-[#d8fa4b] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#d8fa4b] hover:bg-[#c6ea3c] text-[#0b0d09] font-bold text-sm tracking-widest font-mono flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_25px_rgba(216,250,75,0.35)] hover:scale-[1.01] cursor-pointer"
                  >
                    <span>TRANSMIT PROJECT BRIEF</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Global Footer */}
        <footer className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#8b9282] gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d8fa4b]" />
            <span>ITZFIZZ DIGITAL STUDIO © {new Date().getFullYear()}</span>
            <span className="text-white/20">|</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-[#d8fa4b] transition-colors">
              BACK TO TOP ↑
            </a>
            <span className="text-[#d8fa4b]/80">DESIGNED FOR MAXIMUM VELOCITY</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
