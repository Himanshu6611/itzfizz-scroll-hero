'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, ExternalLink, Filter } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Automotive' | 'AI & Web3' | 'Motion Design' | 'E-Commerce';
  impactMetric: string;
  metricLabel: string;
  tags: string[];
  gradient: string;
  previewCode: string;
  description: string;
}

const PROJECTS: Project[] = [
  {
    id: 'veloce',
    title: 'VELOCE HYPERDRIVE',
    subtitle: 'Next-Gen 3D Automotive Configurator',
    category: 'Automotive',
    impactMetric: '+184%',
    metricLabel: 'Session Engagement',
    tags: ['GSAP 3', 'WebGL 3D', 'Next.js 15', 'Tailwind'],
    gradient: 'from-[#d8fa4b]/20 via-[#455c0e]/30 to-black',
    previewCode: '01 // PROTOTYPE',
    description:
      'Engineered an ultra-low latency real-time car customizer for luxury EV brands with cinematic camera choreography and instant spec calculations.',
  },
  {
    id: 'aura',
    title: 'AURA NEURAL',
    subtitle: 'Spatial AI Canvas & Interaction Model',
    category: 'AI & Web3',
    impactMetric: '3.8M',
    metricLabel: 'Monthly Active Sessions',
    tags: ['Motion & Physics', 'TypeScript', 'Fluid UI', 'Core Web Vitals'],
    gradient: 'from-[#38ef7d]/20 via-[#11998e]/20 to-black',
    previewCode: '02 // SPATIAL AI',
    description:
      'Pioneered human-computer micro-gestures and generative canvas feedback loops for a leading AI research institute in San Francisco.',
  },
  {
    id: 'kinetic',
    title: 'KINETIC LABS',
    subtitle: 'Kinetic Web Experience & Design System',
    category: 'Motion Design',
    impactMetric: '100/100',
    metricLabel: 'Lighthouse Score',
    tags: ['ScrollTrigger', 'Zero Layout Shift', 'SVG Morphing'],
    gradient: 'from-[#f12711]/20 via-[#f5af19]/20 to-black',
    previewCode: '03 // DESIGN SYSTEM',
    description:
      'Complete overhaul of a high-growth fintech motion architecture. Transformed static dashboards into kinetic, delight-driven workflows.',
  },
  {
    id: 'chronos',
    title: 'CHRONOS PROTOCOL',
    subtitle: 'Institutional Liquidity & Asset Hub',
    category: 'AI & Web3',
    impactMetric: '$1.4B+',
    metricLabel: 'Volume Processed',
    tags: ['Full-Stack React 19', 'Edge Routing', 'High Security'],
    gradient: 'from-[#00c6ff]/20 via-[#0072ff]/20 to-black',
    previewCode: '04 // FINTECH HUB',
    description:
      'A hyper-secure trading interface with sub-100ms updates, customized sound haptics, and responsive data visualization graphs.',
  },
];

export function ProjectsShowcase() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const categories = ['All', 'Automotive', 'AI & Web3', 'Motion Design'];

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="relative py-28 px-6 lg:px-16 bg-[#0e110b] border-t border-white/10">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#d8fa4b]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#d8fa4b] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#d8fa4b]" />
              <span>02 // SELECTED WORK</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-[#f5f7ee]">
              Digital experiences that <br />
              <span className="text-[#d8fa4b]">command attention.</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-[#8b9282] mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> FILTER:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#d8fa4b] text-[#0b0d09] font-bold shadow-[0_0_15px_rgba(216,250,75,0.3)]'
                    : 'bg-white/5 text-[#a8b394] hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative rounded-2xl border border-white/10 bg-[#141810]/70 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-[#d8fa4b]/40 hover:shadow-[0_15px_40px_-10px_rgba(216,250,75,0.15)] flex flex-col justify-between"
            >
              {/* Card visual preview banner */}
              <div className={`relative h-60 w-full bg-gradient-to-br ${project.gradient} border-b border-white/5 p-6 flex flex-col justify-between overflow-hidden`}>
                {/* Tech grid texture */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#d8fa4b_1px,transparent_1px)] [background-size:16px_16px]" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 rounded-full bg-black/50 border border-white/10 text-[#d8fa4b]">
                    {project.previewCode}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white/70 group-hover:bg-[#d8fa4b] group-hover:text-black group-hover:rotate-45 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Floating Metric Highlight */}
                <div className="relative z-10 self-start bg-black/70 backdrop-blur-md border border-[#d8fa4b]/30 rounded-xl px-4 py-2 shadow-lg">
                  <div className="text-2xl font-black font-display text-[#d8fa4b] leading-tight">
                    {project.impactMetric}
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#a8b394]">
                    {project.metricLabel}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-xs font-mono text-[#d8fa4b]/80 uppercase tracking-widest mb-1.5">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white group-hover:text-[#d8fa4b] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#a8b394] font-medium mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-sm leading-relaxed text-[#8b9282] line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-6 pt-5 border-t border-white/5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-[#b4baa9] border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-r from-[#171c12] via-[#1a2113] to-[#171c12] p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#d8fa4b]/10 border border-[#d8fa4b]/30 flex items-center justify-center text-[#d8fa4b]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-white">
                Looking for tailored interactive case studies?
              </div>
              <div className="text-xs text-[#8b9282]">
                We build private prototypes and interactive demos for selective partnerships.
              </div>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-[#d8fa4b] hover:text-black transition-all text-xs font-bold tracking-wider"
          >
            REQUEST ARCHIVE ACCESS <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
