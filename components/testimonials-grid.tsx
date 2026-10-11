'use client';

import React from 'react';
import { Star, Quote, Award, CheckCircle } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  metricsResult: string;
  avatarInitials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'The scroll-driven hero created by ITZFIZZ elevated our luxury launch from an ordinary landing page to an experiential art piece. Our conversion shot up by 180% within 48 hours.',
    name: 'Julian Vance',
    role: 'Chief Experience Officer',
    company: 'Veloce Automobili',
    metricsResult: '+184% Conversion',
    avatarInitials: 'JV',
  },
  {
    quote:
      'Most web developers sacrifice performance when adding GSAP animations. ITZFIZZ engineered a 120 FPS experience with zero jank and a 100/100 Lighthouse score.',
    name: 'Seraphina Lin',
    role: 'Head of Brand & Product',
    company: 'Aura Spatial Systems',
    metricsResult: '100/100 Core Vitals',
    avatarInitials: 'SL',
  },
  {
    quote:
      'Working with ITZFIZZ felt like collaborating with a top-tier digital lab. Flawless attention to letter-spacing, timing curves, and pixel-perfect responsiveness.',
    name: 'Marcus K.',
    role: 'Managing Partner',
    company: 'Zenith Ventures',
    metricsResult: '2.4x Faster Launch',
    avatarInitials: 'MK',
  },
];

export function TestimonialsGrid() {
  return (
    <section id="reviews" className="relative py-28 px-6 lg:px-16 bg-[#0e120a] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#d8fa4b] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#d8fa4b]" />
              <span>05 // INDUSTRY ACCLAIM</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-[#f5f7ee]">
              Validated by founders & <br />
              <span className="text-[#d8fa4b]">digital leaders worldwide.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-3 self-start md:self-auto">
            <Award className="w-6 h-6 text-[#d8fa4b]" />
            <div>
              <div className="flex items-center gap-1 text-[#d8fa4b]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#d8fa4b]" />
                ))}
                <span className="text-xs font-bold font-mono ml-1 text-white">4.9 / 5.0</span>
              </div>
              <div className="text-[11px] font-mono text-[#8b9282]">Verified Clutch & Partner Rating</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-white/10 bg-[#13170e]/80 backdrop-blur-md p-8 flex flex-col justify-between hover:border-[#d8fa4b]/30 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-9 h-9 rounded-xl bg-[#d8fa4b]/10 border border-[#d8fa4b]/20 flex items-center justify-center text-[#d8fa4b]">
                    <Quote className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#d8fa4b] px-2.5 py-1 rounded bg-[#d8fa4b]/10 border border-[#d8fa4b]/20 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> {t.metricsResult}
                  </span>
                </div>

                <p className="text-sm md:text-base leading-relaxed text-[#c3caa2] mb-8 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="border-t border-white/10 pt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1b2214] border border-[#d8fa4b]/30 flex items-center justify-center font-bold font-mono text-xs text-[#d8fa4b]">
                  {t.avatarInitials}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{t.name}</div>
                  <div className="text-xs text-[#8b9282]">{t.role} • {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
