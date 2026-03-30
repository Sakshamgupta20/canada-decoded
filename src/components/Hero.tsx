"use client";

import { motion } from "framer-motion";

// Generate light ray lines converging from bottom-right
function generateRays() {
  const rays: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    opacity: number;
    width: number;
    delay: number;
  }[] = [];

  // Convergence point (bottom-right area)
  const cx = 92; // % from left
  const cy = 85; // % from top

  // Main bright rays spreading upward-left from the convergence point
  const mainAngles = [-75, -68, -60, -52, -44, -36, -28, -20, -12, -5, 3, 10];
  mainAngles.forEach((angle, i) => {
    const rad = (angle * Math.PI) / 180;
    const length = 70 + Math.random() * 25;
    const x2 = cx + Math.cos(rad) * length;
    const y2 = cy + Math.sin(rad) * length;
    rays.push({
      x1: cx,
      y1: cy,
      x2,
      y2,
      opacity: 0.15 + Math.random() * 0.25,
      width: 0.3 + Math.random() * 0.5,
      delay: i * 0.08,
    });
  });

  // Secondary thinner rays for density
  for (let i = 0; i < 20; i++) {
    const angle = -80 + Math.random() * 95;
    const rad = (angle * Math.PI) / 180;
    const length = 40 + Math.random() * 50;
    const x2 = cx + Math.cos(rad) * length;
    const y2 = cy + Math.sin(rad) * length;
    rays.push({
      x1: cx + (Math.random() - 0.5) * 3,
      y1: cy + (Math.random() - 0.5) * 3,
      x2,
      y2,
      opacity: 0.04 + Math.random() * 0.12,
      width: 0.2 + Math.random() * 0.3,
      delay: 0.3 + i * 0.04,
    });
  }

  return rays;
}

const rays = generateRays();

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Light rays SVG */}
      <div className="absolute inset-0">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Glow filter for the bright convergence point */}
            <radialGradient id="glow" cx="92%" cy="85%" r="15%">
              <stop offset="0%" stopColor="white" stopOpacity="0.35" />
              <stop offset="30%" stopColor="white" stopOpacity="0.08" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Subtle glow at convergence point */}
          <rect width="100" height="100" fill="url(#glow)" />

          {/* Light ray lines */}
          {rays.map((ray, i) => (
            <motion.line
              key={i}
              x1={ray.x1}
              y1={ray.y1}
              x2={ray.x2}
              y2={ray.y2}
              stroke="white"
              strokeOpacity={ray.opacity}
              strokeWidth={ray.width}
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: {
                  duration: 1.5,
                  delay: ray.delay,
                  ease: "easeOut",
                },
                opacity: {
                  duration: 0.4,
                  delay: ray.delay,
                },
              }}
            />
          ))}
        </svg>
      </div>

      {/* Subtle particle dust */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-[1px] bg-white rounded-full"
            style={{
              left: `${30 + Math.random() * 65}%`,
              top: `${10 + Math.random() * 60}%`,
            }}
            animate={{
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20 sm:pt-40 sm:pb-32 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight max-w-3xl"
        >
          Canada Isn&apos;t Complicated.
          <br />
          It&apos;s Just Not Explained Properly.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-6 sm:mt-8 text-base sm:text-lg text-white/50 max-w-md leading-relaxed"
        >
          We decode pathways, break down real strategies,
          <br className="hidden sm:block" />
          and connect you to the right opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-8 sm:mt-10 flex flex-wrap gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-7 py-3.5 bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
          >
            Book a Strategy Call
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-7 py-3.5 border border-white/30 text-white text-sm font-medium tracking-wide hover:border-white/60 hover:bg-white/5 transition-all"
          >
            Explore Pathways
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}
