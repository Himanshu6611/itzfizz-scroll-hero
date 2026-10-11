import React from "react";

export function CarIllustration() {
  return (
    <svg
      className="w-full h-auto drop-shadow-[0_20px_45px_rgba(216,250,75,0.18)] select-none pointer-events-none"
      viewBox="0 0 980 370"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="High-performance futuristic sports car illustration"
    >
      <defs>
        {/* Body Paint Gradient */}
        <linearGradient id="bodyGradient" x1="50" y1="90" x2="900" y2="280" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="12%" stopColor="#eaff78" />
          <stop offset="38%" stopColor="#d8fa4b" />
          <stop offset="72%" stopColor="#87ad12" />
          <stop offset="100%" stopColor="#314006" />
        </linearGradient>

        {/* Canopy Glass Gradient */}
        <linearGradient id="glassGradient" x1="300" y1="100" x2="620" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#323e35" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#141a15" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#080c09" stopOpacity="0.95" />
        </linearGradient>

        {/* Wheel Rim Gradient */}
        <linearGradient id="rimMetal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#d8fa4b" />
          <stop offset="68%" stopColor="#7a856a" />
          <stop offset="100%" stopColor="#1a2016" />
        </linearGradient>

        {/* Neon Light Cones */}
        <linearGradient id="headlightBeam" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#d8fa4b" stopOpacity="0.95" />
          <stop offset="30%" stopColor="#d8fa4b" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#d8fa4b" stopOpacity="0" />
        </linearGradient>

        {/* Rear Light Glow */}
        <linearGradient id="taillightBeam" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="#ff3366" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ff3366" stopOpacity="0" />
        </linearGradient>

        {/* Underglow Blur Filter */}
        <filter id="underglowFilter" x="-20%" y="-40%" width="140%" height="200%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
        <filter id="headlightGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>

      {/* Ground Neon Shadow & Underglow */}
      <ellipse
        cx="490"
        cy="295"
        rx="410"
        ry="30"
        fill="#d8fa4b"
        opacity="0.28"
        filter="url(#underglowFilter)"
      />
      <ellipse
        cx="490"
        cy="300"
        rx="380"
        ry="20"
        fill="#050805"
        opacity="0.8"
      />

      {/* Headlight Projection Beam (Front - Left) */}
      <polygon
        points="130,225 0,185 0,270 130,245"
        fill="url(#headlightBeam)"
        opacity="0.75"
        filter="url(#headlightGlow)"
      />

      {/* Main Body Chassis */}
      <path
        d="M110 248 L142 208 Q172 184 252 174 L356 108 Q396 82 472 82 L616 85 Q666 90 716 138 L788 170 Q840 184 870 216 L886 254 L862 274 L114 274 Z"
        fill="url(#bodyGradient)"
        stroke="#f2ffbf"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />

      {/* Aerodynamic Side Body Contours */}
      <path
        d="M260 212 Q480 230 760 214 Q680 232 460 234 Z"
        fill="#0e1309"
        opacity="0.45"
      />
      <path
        d="M330 182 L720 182 L770 212 L280 212 Z"
        fill="#0f150e"
        opacity="0.75"
      />

      {/* Cockpit Windows (Forward & Rear Quarter) */}
      <path
        d="M320 174 L386 112 Q412 98 470 98 L534 100 L534 174 Z"
        fill="url(#glassGradient)"
        stroke="#d8fa4b"
        strokeWidth="2.2"
      />
      <path
        d="M552 100 L620 105 Q658 111 692 152 L716 174 L552 174 Z"
        fill="url(#glassGradient)"
        stroke="#d8fa4b"
        strokeWidth="2.2"
      />

      {/* Windshield Reflection Highlights */}
      <path
        d="M360 162 L430 106 L450 106 L380 162 Z"
        fill="#ffffff"
        opacity="0.32"
      />
      <path
        d="M570 162 L640 115 L654 116 L584 162 Z"
        fill="#ffffff"
        opacity="0.22"
      />

      {/* Roof Aerodynamic Fin */}
      <path
        d="M425 94 L446 72 L592 75 L618 95"
        fill="none"
        stroke="#d8fa4b"
        strokeWidth="4.5"
        strokeLinecap="round"
      />

      {/* Front Aggressive Splitter & Headlight Lens */}
      <path
        d="M120 238 Q198 220 268 228 L330 252 L132 254 Z"
        fill="#efffa7"
        opacity="0.6"
      />
      <path
        d="M148 218 L232 210"
        stroke="#ffffff"
        strokeWidth="9"
        strokeLinecap="round"
        filter="url(#headlightGlow)"
      />
      <path
        d="M152 218 L228 211"
        stroke="#d8fa4b"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Rear Aero Diffuser & Cyber Tail Light */}
      <path
        d="M800 216 L852 230"
        stroke="#ff2d55"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M848 230 L872 236"
        stroke="#ff6b8b"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Lower Rocker Panel & Side Skirt */}
      <path
        d="M118 256 Q485 284 884 256 L878 274 Q490 302 124 274 Z"
        fill="#141a12"
      />

      {/* Front Wheel Assembly */}
      <g className="wheel-front origin-[295px_268px]">
        {/* Outer Tire */}
        <circle cx="295" cy="268" r="62" fill="#060805" stroke="#48533b" strokeWidth="5.5" />
        <circle cx="295" cy="268" r="50" fill="#0d1109" />
        {/* Brake Disc with Caliper */}
        <circle cx="295" cy="268" r="41" fill="#2b3223" stroke="#d8fa4b" strokeWidth="1" strokeDasharray="4 3" />
        <path d="M265 240 Q280 228 305 232" stroke="#d8fa4b" strokeWidth="8" strokeLinecap="round" />
        {/* Rotating Alloy Rim Group */}
        <g className="wheel-spokes-front origin-[295px_268px]">
          <circle cx="295" cy="268" r="39" fill="url(#rimMetal)" stroke="#11160e" strokeWidth="3" />
          <circle cx="295" cy="268" r="14" fill="#0d120a" stroke="#d8fa4b" strokeWidth="2.5" />
          {/* Turbine Rim Blades */}
          <g stroke="#12180c" strokeWidth="7" strokeLinecap="round">
            <path d="M295 233 V303" />
            <path d="M260 268 H330" />
            <path d="M270 243 L320 293" />
            <path d="M320 243 L270 293" />
          </g>
          <g stroke="#f2ffbf" strokeWidth="2" strokeLinecap="round">
            <path d="M295 236 V300" />
            <path d="M263 268 H327" />
          </g>
        </g>
      </g>

      {/* Rear Wheel Assembly */}
      <g className="wheel-rear origin-[755px_268px]">
        {/* Outer Tire */}
        <circle cx="755" cy="268" r="62" fill="#060805" stroke="#48533b" strokeWidth="5.5" />
        <circle cx="755" cy="268" r="50" fill="#0d1109" />
        {/* Brake Disc with Caliper */}
        <circle cx="755" cy="268" r="41" fill="#2b3223" stroke="#d8fa4b" strokeWidth="1" strokeDasharray="4 3" />
        <path d="M725 240 Q740 228 765 232" stroke="#d8fa4b" strokeWidth="8" strokeLinecap="round" />
        {/* Rotating Alloy Rim Group */}
        <g className="wheel-spokes-rear origin-[755px_268px]">
          <circle cx="755" cy="268" r="39" fill="url(#rimMetal)" stroke="#11160e" strokeWidth="3" />
          <circle cx="755" cy="268" r="14" fill="#0d120a" stroke="#d8fa4b" strokeWidth="2.5" />
          {/* Turbine Rim Blades */}
          <g stroke="#12180c" strokeWidth="7" strokeLinecap="round">
            <path d="M755 233 V303" />
            <path d="M720 268 H790" />
            <path d="M730 243 L780 293" />
            <path d="M780 243 L730 293" />
          </g>
          <g stroke="#f2ffbf" strokeWidth="2" strokeLinecap="round">
            <path d="M755 236 V300" />
            <path d="M723 268 H787" />
          </g>
        </g>
      </g>

      {/* Cyberpunk Body Accent Decals */}
      <path d="M405 208 L755 208" stroke="#d8fa4b" strokeWidth="2" opacity="0.6" strokeDasharray="18 6" />
      <text x="415" y="202" fill="#d8fa4b" fontSize="8" fontFamily="monospace" letterSpacing="2" opacity="0.75">
        ITZFIZZ // PROTO-01
      </text>
    </svg>
  );
}
