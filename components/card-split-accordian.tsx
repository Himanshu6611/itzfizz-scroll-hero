'use client';

import React, { useState, type FC } from 'react';
import { motion, MotionConfig, type Transition } from 'motion/react';
import { ChevronDown, Sparkles, Layers, Cpu, Compass, Rocket } from 'lucide-react';
import useMeasure from 'react-use-measure';

export interface AccordionItemData {
  id: number;
  tag: string;
  title: string;
  icon: React.ReactNode;
  content: string;
  deliverables: string[];
}

interface AccordionItemProps {
  item: AccordionItemData;
  setOpenId: (id: number | null) => void;
  index: number;
  total: number;
  openIndex: number;
}

interface AccordionProps {
  items?: AccordionItemData[];
}

const springTransition: Transition = {
  type: 'spring',
  stiffness: 450,
  damping: 40,
  mass: 0.9,
};

const STUDIO_CAPABILITIES: AccordionItemData[] = [
  {
    id: 1,
    tag: '01 // MOTION & KINETICS',
    title: 'GSAP & Scroll-Driven Kinetic Web',
    icon: <Sparkles className="w-5 h-5 text-[#d8fa4b]" />,
    content:
      'We engineer immersive scroll-driven choreographies, timeline interpolations, and physics-based interactions that captivate visitors without degrading frame rates.',
    deliverables: ['Custom GSAP ScrollTrigger Timelines', 'WebGL & Canvas Micro-interactions', '60-120 FPS Fluid Animations', 'Hardware Accelerated Transforms'],
  },
  {
    id: 2,
    tag: '02 // ARCHITECTURE',
    title: 'High-Performance Next.js Engineering',
    icon: <Cpu className="w-5 h-5 text-[#d8fa4b]" />,
    content:
      'Rock-solid modern web architecture built with Next.js 15, React 19, and Tailwind CSS. Ultra-optimized asset pipelines, zero layout shifts, and 100/100 Core Web Vitals.',
    deliverables: ['Static Site Generation (SSG)', 'Micro-second TTFB & Edge Delivery', 'TypeScript Type-Safe Architecture', 'Semantic & Accessible UI Standards'],
  },
  {
    id: 3,
    tag: '03 // ART DIRECTION',
    title: 'Interactive 3D & Digital Brand Systems',
    icon: <Layers className="w-5 h-5 text-[#d8fa4b]" />,
    content:
      'Bespoke digital design systems, dark-mode luxury aesthetics, spatial depth layers, and custom vector graphics designed to establish authority in saturated markets.',
    deliverables: ['Design Systems & Token Architecture', 'Custom Vector & SVG Assets', 'Typography & Palette Choreography', 'Responsive Multi-Device Scaling'],
  },
  {
    id: 4,
    tag: '04 // CONVERSION',
    title: 'UX Strategy & Conversion Engineering',
    icon: <Compass className="w-5 h-5 text-[#d8fa4b]" />,
    content:
      'Aesthetics backed by behavioral science. We eliminate friction, guide user attention through intentional focal hierarchy, and turn passive visitors into engaged clients.',
    deliverables: ['Attention Heatmap Alignment', 'Frictionless Action Funnels', 'Engaging Interactive Proof Points', 'Data-Driven Micro-copy'],
  },
  {
    id: 5,
    tag: '05 // DEPLOYMENT',
    title: 'Global Delivery & Production Launch',
    icon: <Rocket className="w-5 h-5 text-[#d8fa4b]" />,
    content:
      'Seamless automated CI/CD pipelines targeting GitHub Pages, Vercel, and enterprise cloud networks with zero downtime and automated regression checks.',
    deliverables: ['Automated GitHub Actions Pipelines', 'Automated SEO & Social Graph Meta', 'Cross-Browser Cross-Platform QA', 'Self-Documenting Codebases'],
  },
];

const AccordionItem: FC<AccordionItemProps> = ({
  item,
  setOpenId,
  index,
  total,
  openIndex,
}) => {
  const [ref, bounds] = useMeasure();
  const isOpen = index === openIndex;

  const isFirst = index === 0;
  const isLast = index === total - 1;
  const isBeforeOpen = index === openIndex - 1;
  const isAfterOpen = index === openIndex + 1;
  const isAlone = (isAfterOpen && isLast) || (isBeforeOpen && isFirst);

  const BORDER_WIDTH = '1px';
  const BORDER_STYLE = 'solid';
  const borderTopWidth = isFirst || isAfterOpen || isOpen ? BORDER_WIDTH : '0px';
  const borderBottomWidth = isLast || isBeforeOpen || isOpen ? BORDER_WIDTH : '0px';

  let borderTopLeftRadius = 0;
  let borderTopRightRadius = 0;
  let borderBottomLeftRadius = 0;
  let borderBottomRightRadius = 0;

  if (isOpen || isAlone) {
    borderTopLeftRadius = 16;
    borderTopRightRadius = 16;
    borderBottomLeftRadius = 16;
    borderBottomRightRadius = 16;
  } else if (isBeforeOpen) {
    borderBottomLeftRadius = 16;
    borderBottomRightRadius = 16;
  } else if (isAfterOpen) {
    borderTopLeftRadius = 16;
    borderTopRightRadius = 16;
  } else if (isFirst) {
    borderTopLeftRadius = 16;
    borderTopRightRadius = 16;
  } else if (isLast) {
    borderBottomLeftRadius = 16;
    borderBottomRightRadius = 16;
  }

  return (
    <MotionConfig transition={springTransition}>
      <motion.li layout className="list-none">
        <motion.div
          animate={{
            borderTopLeftRadius,
            borderTopRightRadius,
            borderBottomLeftRadius,
            borderBottomRightRadius,
            backgroundColor: isOpen ? 'rgba(24, 29, 20, 0.95)' : 'rgba(16, 20, 13, 0.7)',
            borderColor: isOpen ? 'rgba(216, 250, 75, 0.4)' : 'rgba(255, 255, 255, 0.08)',
          }}
          className="overflow-hidden border-solid backdrop-blur-md transition-shadow duration-300 will-change-transform"
          style={{
            borderTopWidth,
            borderBottomWidth,
            borderLeftWidth: BORDER_WIDTH,
            borderRightWidth: BORDER_WIDTH,
            borderStyle: BORDER_STYLE,
            marginBlock: isOpen ? '14px' : '0px',
            boxShadow: isOpen ? '0 12px 36px -10px rgba(216,250,75,0.12)' : 'none',
          }}
        >
          <button
            type="button"
            onClick={() => setOpenId(isOpen ? null : item.id)}
            className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
            aria-expanded={isOpen}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#0d100b]">
                {item.icon}
              </div>
              <div>
                <span className="block text-[10px] font-mono tracking-widest text-[#a8b394]">
                  {item.tag}
                </span>
                <span className={`text-base font-semibold transition-colors md:text-lg ${isOpen ? 'text-[#d8fa4b]' : 'text-[#f5f7ee]'}`}>
                  {item.title}
                </span>
              </div>
            </div>

            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors ${
                isOpen ? 'border-[#d8fa4b]/50 bg-[#d8fa4b]/10 text-[#d8fa4b]' : 'border-white/10 text-[#8b9282]'
              }`}
            >
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </button>

          <motion.div
            initial={false}
            animate={{
              height: isOpen ? bounds.height : 0,
              opacity: isOpen ? 1 : 0,
            }}
            className="overflow-hidden will-change-transform"
          >
            <div ref={ref} className="px-6 pb-6 pt-1">
              <p className="text-sm leading-relaxed text-[#b4baa9] md:text-base">
                {item.content}
              </p>
              <div className="mt-4 border-t border-white/5 pt-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#d8fa4b]/80">
                  Key Deliverables
                </span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {item.deliverables.map((deliv, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center rounded-md border border-white/10 bg-black/40 px-2.5 py-1 text-xs text-[#d8dfcb]"
                    >
                      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-[#d8fa4b]" />
                      {deliv}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.li>
    </MotionConfig>
  );
};

export const AccordionApp: FC<AccordionProps> = ({ items }) => {
  const defaultItems = items ?? STUDIO_CAPABILITIES;
  const [openId, setOpenId] = useState<number | null>(1);
  const openIndex = defaultItems.findIndex((item) => item.id === openId);

  return (
    <div className="w-full">
      <ul className="mx-auto w-full max-w-4xl space-y-0 p-0">
        {defaultItems.map((item, index) => (
          <AccordionItem
            key={item.id}
            item={item}
            setOpenId={setOpenId}
            index={index}
            total={defaultItems.length}
            openIndex={openIndex}
          />
        ))}
      </ul>
    </div>
  );
};
