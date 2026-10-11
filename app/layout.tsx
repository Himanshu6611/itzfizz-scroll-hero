import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ITZFIZZ — Kinetic Hero Experience & Interactive Studio",
  description: "Award-winning scroll-driven motion and digital design studio. Letter-spaced hero typography, GSAP ScrollTrigger kinetics, and high-performance frontend architecture.",
  keywords: ["GSAP", "ScrollTrigger", "Motion Design", "Next.js 15", "React 19", "Itzfizz", "Tailwind CSS"],
  authors: [{ name: "ITZFIZZ Creative Studio" }],
  openGraph: {
    title: "ITZFIZZ — Kinetic Hero Experience & Interactive Studio",
    description: "Letter-spaced kinetic hero experience with GSAP ScrollTrigger performance.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0d09",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-[#0b0d09] text-[#f5f7ee] antialiased selection:bg-[#d8fa4b] selection:text-[#0b0d09]">
        {children}
      </body>
    </html>
  );
}
