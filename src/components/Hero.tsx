"use client";

import { motion } from "framer-motion";

// Curved arcs sweeping from upper-left to convergence at lower-right
const arcs = [
  // Main visible curves
  { d: "M 200,0 Q 600,150 1150,450", opacity: 0.25, width: 1.0, delay: 0 },
  { d: "M 350,0 Q 650,120 1150,450", opacity: 0.3, width: 1.2, delay: 0.06 },
  { d: "M 500,0 Q 750,100 1150,450", opacity: 0.35, width: 1.0, delay: 0.12 },
  { d: "M 650,0 Q 850,80 1150,450", opacity: 0.3, width: 0.8, delay: 0.18 },
  { d: "M 780,0 Q 920,100 1150,450", opacity: 0.2, width: 0.7, delay: 0.24 },

  // Secondary curves
  { d: "M 280,0 Q 620,140 1150,450", opacity: 0.12, width: 0.5, delay: 0.08 },
  { d: "M 430,0 Q 700,110 1150,450", opacity: 0.15, width: 0.5, delay: 0.15 },
  { d: "M 580,0 Q 800,90 1150,450", opacity: 0.12, width: 0.4, delay: 0.22 },
  { d: "M 720,0 Q 900,90 1150,450", opacity: 0.1, width: 0.4, delay: 0.28 },

  // Faint whisper curves
  { d: "M 150,0 Q 580,160 1150,450", opacity: 0.06, width: 0.3, delay: 0.1 },
  { d: "M 850,0 Q 960,100 1150,450", opacity: 0.08, width: 0.3, delay: 0.3 },
  { d: "M 950,0 Q 1020,120 1150,450", opacity: 0.06, width: 0.2, delay: 0.34 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      {/* Light rays */}
      <svg
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="bloom" cx="1150" cy="450" r="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="white" stopOpacity="0.45" />
            <stop offset="20%" stopColor="white" stopOpacity="0.15" />
            <stop offset="50%" stopColor="white" stopOpacity="0.04" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="ambient" cx="900" cy="300" r="500" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="white" stopOpacity="0.025" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" />
          </filter>
        </defs>

        <rect width="1200" height="600" fill="url(#ambient)" />
        <rect width="1200" height="600" fill="url(#bloom)" />

        {/* Blurred glow layer */}
        <g filter="url(#glow)" opacity="0.4">
          {arcs.slice(0, 5).map((arc, i) => (
            <motion.path
              key={`g-${i}`}
              d={arc.d}
              stroke="white"
              strokeOpacity={arc.opacity * 0.5}
              strokeWidth={arc.width * 3}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.2, delay: arc.delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          ))}
        </g>

        {/* Soft glow layer */}
        <g filter="url(#soft)" opacity="0.5">
          {arcs.slice(0, 8).map((arc, i) => (
            <motion.path
              key={`s-${i}`}
              d={arc.d}
              stroke="white"
              strokeOpacity={arc.opacity * 0.4}
              strokeWidth={arc.width * 1.8}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.2, delay: arc.delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
          ))}
        </g>

        {/* Sharp lines */}
        {arcs.map((arc, i) => (
          <motion.path
            key={i}
            d={arc.d}
            stroke="white"
            strokeOpacity={arc.opacity}
            strokeWidth={arc.width}
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { duration: 2.2, delay: arc.delay, ease: [0.25, 0.46, 0.45, 0.94] },
              opacity: { duration: 0.4, delay: arc.delay },
            }}
          />
        ))}

        {/* Bright convergence dot */}
        <motion.circle
          cx="1150" cy="450" r="3"
          fill="white" opacity="0.8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20 pt-28 pb-16 sm:pt-32 sm:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-xs tracking-[0.3em] text-white/40 uppercase mb-5"
        >
          Immigration Pathways, Decoded
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-display text-[2.5rem] sm:text-5xl md:text-[3.5rem] lg:text-6xl 2xl:text-7xl leading-[1.12] tracking-[-0.01em] max-w-xl lg:max-w-2xl 2xl:max-w-3xl"
        >
          Canada Isn&rsquo;t Complicated.
          <br />
          It&rsquo;s Just Not Explained Properly.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-5 sm:mt-6 text-[15px] sm:text-base 2xl:text-lg text-white/45 max-w-sm 2xl:max-w-md leading-relaxed"
        >
          We decode pathways, break down real strategies,
          <br className="hidden sm:block" />
          and connect you to the right opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-7 sm:mt-8 flex flex-wrap gap-3"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-5 py-2.5 sm:px-7 sm:py-3 bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
          >
            Book a Strategy Call
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-5 py-2.5 sm:px-7 sm:py-3 border border-white/25 text-white text-sm font-medium tracking-wide hover:border-white/50 hover:bg-white/5 transition-all"
          >
            Explore Pathways
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
