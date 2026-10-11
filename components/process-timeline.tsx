'use client';

import React, { useState } from 'react';
import { Eye, Code2, Gauge, Zap, CheckCircle2 } from 'lucide-react';

interface Step {
  number: string;
  phase: string;
  title: string;
  icon: React.ReactNode;
  duration: string;
  summary: string;
  highlights: string[];
}

const STEPS: Step[] = [
  {
    number: '01',
    phase: 'DISCOVERY & KINETIC CHOREOGRAPHY',
    title: 'Deconstruct & Wireframe Motion',
    icon: <Eye className="w-5 h-5 text-[#d8fa4b]" />,
    duration: 'Week 1',
    summary:
      'We map out narrative scroll beats, interaction friction points, and physics curves before touching production code.',
    highlights: ['Scroll storyboarding', 'Easing curve benchmarks', 'Asset optimization strategy'],
  },
  {
    number: '02',
    phase: 'ENGINEERING & TIMELINES',
    title: 'GSAP ScrollTrigger Architecture',
    icon: <Code2 className="w-5 h-5 text-[#d8fa4b]" />,
    duration: 'Week 2-3',
    summary:
      'Every timeline is linked directly to scroll scrub with zero memory leaks, using transform3d and will-change GPU offloading.',
    highlights: ['Hardware accelerated SVG', 'Scrubbed interpolation', 'Responsive breakpoints'],
  },
  {
    number: '03',
    phase: 'PERFORMANCE OPTIMIZATION',
    title: 'Frame-Rate & Vitals Tuning',
    icon: <Gauge className="w-5 h-5 text-[#d8fa4b]" />,
    duration: 'Week 4',
    summary:
      'We stress-test across low-end mobile devices and 144Hz monitors, locking in a flawless 60-120 FPS experience.',
    highlights: ['Zero layout shifts (CLS < 0.01)', 'Tree-shaken JS bundles', 'Prefetching & dynamic imports'],
  },
  {
    number: '04',
    phase: 'PRODUCTION DEPLOYMENT',
    title: 'Continuous Delivery & Launch',
    icon: <Zap className="w-5 h-5 text-[#d8fa4b]" />,
    duration: 'Continuous',
    summary:
      'Automated GitHub Actions pipelines with zero-downtime edge deployments to GitHub Pages / Vercel.',
    highlights: ['GitHub Actions CI/CD', 'Open Graph social meta', 'Full WCAG accessibility'],
  },
];

export function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="relative py-28 px-6 lg:px-16 bg-[#0b0d09] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#d8fa4b] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#d8fa4b]" />
            <span>04 // METHODOLOGY & ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-[#f5f7ee]">
            Engineered for speed. <br />
            <span className="text-[#d8fa4b]">Choreographed for emotion.</span>
          </h2>
          <p className="mt-4 text-[#8b9282] text-sm md:text-base leading-relaxed">
            Our 4-step kinetic engineering framework turns standard static web pages into mesmerizing scroll-driven journeys.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`relative rounded-2xl p-7 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#181d13] border-[#d8fa4b]/50 shadow-[0_10px_30px_rgba(216,250,75,0.12)]'
                    : 'bg-[#12150f]/60 border-white/10 hover:border-white/20 hover:bg-[#141810]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black font-mono text-[#d8fa4b]">
                      {step.number}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#8b9282]">
                        {step.duration}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-black/40 flex items-center justify-center border border-white/10">
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  <div className="text-[10px] font-mono tracking-widest text-[#a8b394] mb-2 uppercase">
                    {step.phase}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#8b9282] leading-relaxed mb-6">
                    {step.summary}
                  </p>
                </div>

                {/* Highlights */}
                <div className="border-t border-white/5 pt-4 space-y-2">
                  {step.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#b4baa9]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d8fa4b] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
