'use client';

import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface InteractiveNavProps {
  onContactClick?: () => void;
}

export function InteractiveNav({ onContactClick }: InteractiveNavProps) {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [timeString, setTimeString] = useState('');

  // Clock in IST/Local
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll listener for sticky background blur elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Web Audio click effect
  const playClick = () => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } catch {
      // AudioContext unavailable
    }
  };

  const navLinks = [
    { label: '01. HERO', href: '#hero' },
    { label: '02. WORK', href: '#work' },
    { label: '03. CAPABILITIES', href: '#capabilities' },
    { label: '04. PROCESS', href: '#process' },
    { label: '05. REVIEWS', href: '#reviews' },
    { label: '06. CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0b0d09]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand */}
          <a
            href="#hero"
            onClick={playClick}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
            aria-label="Itzfizz Home"
          >
            <div className="w-8 h-8 rounded-lg bg-[#d8fa4b] text-[#0b0d09] font-black italic flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6">
              i
            </div>
            <span className="font-bold text-xl tracking-tight text-[#f5f7ee] group-hover:text-[#d8fa4b] transition-colors">
              itzfizz<span className="text-[#d8fa4b]">.</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-mono tracking-wider text-[#9aa28f]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={playClick}
                className="hover:text-[#d8fa4b] transition-colors duration-200 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d8fa4b] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Status & Controls */}
          <div className="flex items-center gap-3">
            {/* Live Studio Status Pill */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-mono text-[#a8b394]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d8fa4b] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d8fa4b]" />
              </span>
              <span>STUDIO</span>
              <span className="text-white/30">•</span>
              <span className="text-[#d8fa4b]">{timeString || '18:00'} IST</span>
            </div>

            {/* Sound Toggle */}
            <button
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                playClick();
              }}
              title={soundEnabled ? 'Mute sound effects' : 'Enable tactile audio'}
              className="p-2 rounded-full border border-white/10 bg-white/[0.03] text-[#a8b394] hover:text-[#d8fa4b] hover:border-[#d8fa4b]/40 transition-colors"
              aria-label="Toggle tactile sound"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-[#d8fa4b]" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={() => {
                playClick();
                if (onContactClick) onContactClick();
              }}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d8fa4b] text-[#0b0d09] text-xs font-bold tracking-wider hover:bg-[#c2e437] transition-all duration-200 shadow-[0_0_20px_rgba(216,250,75,0.3)] hover:scale-105"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>LET&apos;S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-white/10 text-white hover:text-[#d8fa4b] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0b0d09]/95 backdrop-blur-2xl flex flex-col justify-center px-8 lg:hidden animate-in fade-in duration-200">
          <nav className="flex flex-col gap-6 text-lg font-mono tracking-widest text-[#d8dfcb]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  playClick();
                  setMobileMenuOpen(false);
                }}
                className="hover:text-[#d8fa4b] transition-colors flex items-center justify-between border-b border-white/10 pb-3"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#d8fa4b]" />
              </a>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-4">
            <a
              href="#contact"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onContactClick) onContactClick();
              }}
              className="w-full text-center py-3.5 rounded-full bg-[#d8fa4b] text-[#0b0d09] font-bold text-sm tracking-widest"
            >
              LAUNCH PROJECT ↗
            </a>
          </div>
        </div>
      )}
    </>
  );
}
