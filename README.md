# ITZFIZZ — Kinetic Scroll-Driven Hero & Digital Experience

> Award-winning kinetic web concept crafted for the **Itzfizz Web Development Assignment**. Engineered with **Next.js 15**, **React 19**, **GSAP ScrollTrigger**, and **Tailwind CSS**.

---

## 🔗 Project Links

- **Live Webpage**: [https://himanshu6611.github.io/itzfizz-scroll-hero/](https://himanshu6611.github.io/itzfizz-scroll-hero/)
- **GitHub Repository**: [https://github.com/Himanshu6611/itzfizz-scroll-hero](https://github.com/Himanshu6611/itzfizz-scroll-hero)


---

## ✨ Features & Requirements Fulfilled

### 1. Hero Section Above the Fold (100svh)
- Fully responsive screen filling the first viewport above the fold.
- **Letter-Spaced Headline**:
  ```
  W  E  L  C  O  M  E     I  T  Z  F  I  Z  Z
  ```
  Rendered with individualized character spans with custom tracking (`0.36em`) and signature cyber-lime neon lighting (`#d8fa4b`).

### 2. Initial Load Animation
- Smooth staggered reveal using **GSAP Timelines**.
- Characters animate in progressively with `power3.out` easing, subtle vertical motion (`y: 45 -> 0`), and unblurring filter effect.
- **Impact Metrics / Statistics** directly below the headline animate sequentially with a subtle stagger delay:
  - **98%** — Client Satisfaction & Retention
  - **250+** — Kinetic Projects Delivered
  - **4.9 / 5** — Average Partner Rating
  - **2.4x** — Velocity & Impact Multiplier

### 3. Scroll-Based Animation (Core Feature)
- Tied directly to user scroll position using **GSAP ScrollTrigger** with smooth scrubbing interpolation (`scrub: 1.2`).
- **Main Visual Element (Futuristic Hypercar)**:
  - Accelerates horizontally along the horizon grid on scroll.
  - Rotates dynamically in 3D pitch perspective (`rotateZ: -3.2deg`).
  - Wheels (`.wheel-spokes-front` & `.wheel-spokes-rear`) rotate in sync with scroll velocity.
  - Laser floor grid and perspective horizons react to scroll progression.
  - Zero autoplay; 100% user-directed fluid interaction.

### 4. Added Pages & Interactive Sections ("Pages & Cheezein Add Karo")
- **01. Kinetic Hero Experience**: Letter-spaced typography, metrics cards, 3D grid stage.
- **02. Selected Work Showcase**: 4 flagship project cards with live metrics, category filter pills (Automotive, AI & Web3, Motion Design).
- **03. Core Capabilities Accordion**: Spring-animated split accordion detailing 5 studio services and key deliverable badges.
- **04. Engineering Methodology**: 4-step progressive timeline from Motion Wireframing to Zero-Jank Delivery.
- **05. Industry Acclaim**: Verified client reviews and star ratings.
- **06. Interactive Project Launcher**: Service chips selector, budget tiers, and validated brief form with confirmation toast.
- **Interactive Navigation & Audio**: Sticky glassmorphic header with live time indicator and optional tactile Web Audio click synthesizer.

### 5. Motion & Performance Guidelines
- Pure hardware-accelerated transforms (`translate3d`, `scale`, `rotate`).
- Zero layout reflows during scroll.
- Next.js 15 static export (`output: "export"`) with 100/100 Core Web Vitals.

---

## 🛠 Tech Stack

- **Framework**: Next.js 15.5 (App Router)
- **UI Engine**: React 19
- **Animation**: GSAP 3.14 + ScrollTrigger
- **Physics/Interactions**: Motion / React
- **Styling**: Tailwind CSS v4 + Vanilla CSS Design Tokens
- **Icons**: Lucide React
- **Typography**: Space Grotesk + Plus Jakarta Sans + JetBrains Mono

---

## 🚀 How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/itzfizz-scroll-hero.git
cd itzfizz-scroll-hero

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 How to Deploy to GitHub Pages (Free)

A GitHub Actions workflow is preconfigured in `.github/workflows/deploy.yml`.

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "feat: complete itzfizz scroll hero experience"
   git branch -M main
   git remote add origin https://github.com/Himanshu6611/itzfizz-scroll-hero.git
   git push -u origin main
   ```

2. **Activate GitHub Pages**:
   - Go to your repository on GitHub: `https://github.com/Himanshu6611/itzfizz-scroll-hero`
   - Click **Settings** > **Pages** (in left sidebar).
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
   - Your site will automatically build and publish at:
     `https://himanshu6611.github.io/itzfizz-scroll-hero/`

---

## 📄 License

MIT License — Crafted for the Itzfizz Web Development Showcase.
