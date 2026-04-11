"use client";

import { motion } from "framer-motion";

// Curved arcs sweeping from upper-left to convergence at lower-right.
// Each arc has an `id` so a particle can ride along it via <animateMotion>.
const arcs = [
  // Main visible curves
  { id: "p0", d: "M 200,0 Q 600,150 1150,450", opacity: 0.25, width: 1.0, delay: 0, particleDur: 7.5, particleDelay: 0.0 },
  { id: "p1", d: "M 350,0 Q 650,120 1150,450", opacity: 0.3, width: 1.2, delay: 0.06, particleDur: 6.8, particleDelay: 1.2 },
  { id: "p2", d: "M 500,0 Q 750,100 1150,450", opacity: 0.35, width: 1.0, delay: 0.12, particleDur: 8.2, particleDelay: 0.5 },
  { id: "p3", d: "M 650,0 Q 850,80 1150,450", opacity: 0.3, width: 0.8, delay: 0.18, particleDur: 7.2, particleDelay: 2.1 },
  { id: "p4", d: "M 780,0 Q 920,100 1150,450", opacity: 0.2, width: 0.7, delay: 0.24, particleDur: 6.5, particleDelay: 1.8 },

  // Secondary curves
  { id: "p5", d: "M 280,0 Q 620,140 1150,450", opacity: 0.12, width: 0.5, delay: 0.08, particleDur: 9.0, particleDelay: 3.0 },
  { id: "p6", d: "M 430,0 Q 700,110 1150,450", opacity: 0.15, width: 0.5, delay: 0.15, particleDur: 8.5, particleDelay: 0.8 },
  { id: "p7", d: "M 580,0 Q 800,90 1150,450", opacity: 0.12, width: 0.4, delay: 0.22, particleDur: 7.8, particleDelay: 2.5 },
  { id: "p8", d: "M 720,0 Q 900,90 1150,450", opacity: 0.1, width: 0.4, delay: 0.28, particleDur: 6.2, particleDelay: 1.5 },

  // Faint whisper curves
  { id: "p9", d: "M 150,0 Q 580,160 1150,450", opacity: 0.06, width: 0.3, delay: 0.1, particleDur: 9.5, particleDelay: 4.0 },
  { id: "p10", d: "M 850,0 Q 960,100 1150,450", opacity: 0.08, width: 0.3, delay: 0.3, particleDur: 5.8, particleDelay: 2.8 },
  { id: "p11", d: "M 950,0 Q 1020,120 1150,450", opacity: 0.06, width: 0.2, delay: 0.34, particleDur: 5.5, particleDelay: 3.5 },
];

// Drifting stars in the dark space — fixed positions to avoid hydration mismatch.
const stars = [
  { cx: 80, cy: 60, r: 0.8, dur: 4.2, delay: 0 },
  { cx: 140, cy: 180, r: 1.0, dur: 5.5, delay: 1.2 },
  { cx: 60, cy: 320, r: 0.7, dur: 4.8, delay: 0.6 },
  { cx: 220, cy: 90, r: 0.6, dur: 6.0, delay: 2.0 },
  { cx: 90, cy: 460, r: 0.9, dur: 5.0, delay: 1.5 },
  { cx: 260, cy: 380, r: 0.7, dur: 4.5, delay: 2.8 },
  { cx: 380, cy: 540, r: 0.8, dur: 5.8, delay: 0.3 },
  { cx: 520, cy: 480, r: 0.6, dur: 4.6, delay: 1.8 },
  { cx: 700, cy: 540, r: 0.7, dur: 5.2, delay: 2.4 },
  { cx: 880, cy: 560, r: 0.6, dur: 4.0, delay: 0.9 },
  { cx: 1040, cy: 520, r: 0.5, dur: 5.6, delay: 3.0 },
  { cx: 30, cy: 220, r: 0.5, dur: 6.2, delay: 1.0 },
  { cx: 180, cy: 540, r: 0.6, dur: 4.4, delay: 2.2 },
  { cx: 460, cy: 580, r: 0.5, dur: 5.4, delay: 0.4 },
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

          {/* Aurora wave gradient (very subtle, top of canvas) */}
          <linearGradient id="aurora" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="35%" stopColor="white" stopOpacity="0.03" />
            <stop offset="55%" stopColor="white" stopOpacity="0.05" />
            <stop offset="75%" stopColor="white" stopOpacity="0.03" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>

          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" />
          </filter>
          <filter id="particle-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="1.5" />
          </filter>
        </defs>

        <rect width="1200" height="600" fill="url(#ambient)" />
        <rect width="1200" height="600" fill="url(#bloom)" />

        {/* Aurora ribbon — slow horizontal drift at top */}
        <motion.ellipse
          cx="600"
          cy="80"
          rx="700"
          ry="50"
          fill="url(#aurora)"
          animate={{ cx: [500, 700, 500] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.ellipse
          cx="600"
          cy="140"
          rx="600"
          ry="35"
          fill="url(#aurora)"
          opacity="0.6"
          animate={{ cx: [700, 500, 700] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Drifting stars in dark space */}
        {stars.map((s, i) => (
          <motion.circle
            key={`star-${i}`}
            cx={s.cx}
            cy={s.cy}
            r={s.r}
            fill="white"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.15, 0.75, 0.15] }}
            transition={{
              duration: s.dur,
              delay: s.delay + 1.0,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Hidden path defs for animateMotion */}
        <defs>
          {arcs.map((arc) => (
            <path key={`def-${arc.id}`} id={arc.id} d={arc.d} fill="none" />
          ))}
        </defs>

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

        {/* Light particles flowing along each beam toward convergence */}
        <g opacity="0">
          <animate
            attributeName="opacity"
            from="0"
            to="1"
            dur="0.8s"
            begin="2.5s"
            fill="freeze"
          />
          {arcs.map((arc) => (
            <g key={`particle-${arc.id}`}>
              {/* Glow halo */}
              <circle r="2.5" fill="white" opacity="0.4" filter="url(#particle-glow)">
                <animateMotion
                  dur={`${arc.particleDur}s`}
                  repeatCount="indefinite"
                  begin={`${arc.particleDelay}s`}
                  rotate="auto"
                >
                  <mpath href={`#${arc.id}`} />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0;0.5;0.5;0"
                  keyTimes="0;0.15;0.85;1"
                  dur={`${arc.particleDur}s`}
                  repeatCount="indefinite"
                  begin={`${arc.particleDelay}s`}
                />
              </circle>
              {/* Bright core */}
              <circle r="1.2" fill="white">
                <animateMotion
                  dur={`${arc.particleDur}s`}
                  repeatCount="indefinite"
                  begin={`${arc.particleDelay}s`}
                >
                  <mpath href={`#${arc.id}`} />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0;0.95;0.95;0"
                  keyTimes="0;0.12;0.88;1"
                  dur={`${arc.particleDur}s`}
                  repeatCount="indefinite"
                  begin={`${arc.particleDelay}s`}
                />
              </circle>
            </g>
          ))}
        </g>

        {/* Pulsing convergence bloom */}
        <motion.circle
          cx="1150"
          cy="450"
          r="40"
          fill="url(#bloom)"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Bright convergence dot */}
        <motion.circle
          cx="1150" cy="450" r="3"
          fill="white" opacity="0.8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        />

        {/* Expanding rings at convergence — rhythmic pulse outward */}
        <motion.circle
          cx="1150"
          cy="450"
          r="6"
          fill="none"
          stroke="white"
          strokeOpacity="0.4"
          strokeWidth="0.6"
          animate={{ r: [6, 30, 6], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 1 }}
        />
        <motion.circle
          cx="1150"
          cy="450"
          r="6"
          fill="none"
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="0.5"
          animate={{ r: [6, 50, 6], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeOut", delay: 2.5 }}
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
