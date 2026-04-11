"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const features = [
  "No False Promises — Just Clear Direction",
  "Opportunities Aligned With Your PR Goals",
  "Vetted Before You Even See Them",
  "Built Through Real Industry Connections",
  "Clarity Before Commitment",
  "Quality Over Quantity — Always",
];

// Curved arcs converging at the right side — same family as Hero light rays.
const arcs = [
  { d: "M 0,40 Q 220,90 600,210", o: 0.26, w: 1.0, delay: 0 },
  { d: "M 0,110 Q 240,120 600,210", o: 0.32, w: 1.2, delay: 0.06 },
  { d: "M 0,180 Q 260,170 600,210", o: 0.36, w: 1.0, delay: 0.12 },
  { d: "M 0,250 Q 280,230 600,210", o: 0.3, w: 0.85, delay: 0.18 },
  { d: "M 0,310 Q 290,290 600,210", o: 0.22, w: 0.7, delay: 0.24 },
  // secondary whispers
  { d: "M 0,80 Q 230,100 600,210", o: 0.13, w: 0.5, delay: 0.08 },
  { d: "M 0,150 Q 250,150 600,210", o: 0.15, w: 0.5, delay: 0.15 },
  { d: "M 0,220 Q 270,200 600,210", o: 0.13, w: 0.45, delay: 0.22 },
  { d: "M 0,280 Q 290,260 600,210", o: 0.1, w: 0.4, delay: 0.28 },
];

// Star nodes positioned along beams + a few constellations
const nodes = [
  { cx: 600, cy: 210, r: 3.5, star: 28, delay: 0.8 }, // convergence
  { cx: 420, cy: 175, r: 2.6, star: 18, delay: 0.95 },
  { cx: 480, cy: 230, r: 2.2, star: 14, delay: 1.05 },
  { cx: 320, cy: 145, r: 2.2, star: 14, delay: 1.1 },
  { cx: 360, cy: 250, r: 2, star: 12, delay: 1.18 },
  { cx: 200, cy: 110, r: 1.8, star: 10, delay: 1.25 },
  { cx: 240, cy: 220, r: 1.6, star: 9, delay: 1.3 },
  { cx: 530, cy: 130, r: 1.8, star: 10, delay: 1.35 },
];

export default function AccessMatters() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] items-center gap-12 lg:gap-16 py-16 sm:py-20 lg:py-24">
          {/* Left content */}
          <AnimatedSection>
            <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-4">
              Why Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.08]">
              Access Matters.
            </h2>
            <motion.div
              className="mt-4 h-px bg-white/25 origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ width: "48px" }}
            />
            <p className="mt-6 text-white/50 text-sm sm:text-[15px] leading-relaxed max-w-md">
              We don&rsquo;t just hand you information — we open doors to the
              right people, opportunities, and pathways.
            </p>
            <ul className="mt-8 sm:mt-9 space-y-3.5">
              {features.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: 0.25 + i * 0.07, duration: 0.5 }}
                  className="flex items-start gap-3 text-sm sm:text-[15px] text-white/70 leading-relaxed"
                >
                  <svg
                    className="w-4 h-4 text-white/45 flex-shrink-0 mt-[3px]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Right - Constellation graphic */}
          <AnimatedSection delay={0.1}>
            <div className="relative w-full h-[260px] sm:h-[340px] lg:h-[440px] -mr-6 sm:-mr-8 lg:-mr-16 2xl:-mr-20">
              <svg
                viewBox="0 0 660 360"
                fill="none"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient
                    id="am-bloom"
                    cx="600"
                    cy="210"
                    r="160"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="white" stopOpacity="0.4" />
                    <stop offset="25%" stopColor="white" stopOpacity="0.12" />
                    <stop offset="60%" stopColor="white" stopOpacity="0.03" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient
                    id="am-ambient"
                    cx="50%"
                    cy="55%"
                    r="65%"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0%" stopColor="white" stopOpacity="0.025" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                  <filter
                    id="am-glow"
                    x="-200%"
                    y="-200%"
                    width="500%"
                    height="500%"
                  >
                    <feGaussianBlur stdDeviation="5" />
                  </filter>
                  <filter
                    id="am-soft"
                    x="-100%"
                    y="-100%"
                    width="300%"
                    height="300%"
                  >
                    <feGaussianBlur stdDeviation="2" />
                  </filter>
                  <filter
                    id="am-star-glow"
                    x="-100%"
                    y="-100%"
                    width="300%"
                    height="300%"
                  >
                    <feGaussianBlur stdDeviation="1.2" />
                  </filter>
                </defs>

                {/* Ambient backdrop */}
                <rect width="660" height="360" fill="url(#am-ambient)" />
                <rect width="660" height="360" fill="url(#am-bloom)" />

                {/* Bloom layer behind beams */}
                <g filter="url(#am-glow)" opacity="0.45">
                  {arcs.slice(0, 5).map((arc, i) => (
                    <motion.path
                      key={`g-${i}`}
                      d={arc.d}
                      stroke="white"
                      strokeOpacity={arc.o * 0.5}
                      strokeWidth={arc.w * 3}
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{
                        duration: 2.2,
                        delay: arc.delay,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    />
                  ))}
                </g>

                {/* Soft layer */}
                <g filter="url(#am-soft)" opacity="0.55">
                  {arcs.slice(0, 8).map((arc, i) => (
                    <motion.path
                      key={`s-${i}`}
                      d={arc.d}
                      stroke="white"
                      strokeOpacity={arc.o * 0.4}
                      strokeWidth={arc.w * 1.8}
                      fill="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{
                        duration: 2.2,
                        delay: arc.delay,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    />
                  ))}
                </g>

                {/* Sharp arcs */}
                {arcs.map((arc, i) => (
                  <motion.path
                    key={`a-${i}`}
                    d={arc.d}
                    stroke="white"
                    strokeOpacity={arc.o}
                    strokeWidth={arc.w}
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      pathLength: {
                        duration: 2.2,
                        delay: arc.delay,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      },
                      opacity: { duration: 0.4, delay: arc.delay },
                    }}
                  />
                ))}

                {/* Star flares */}
                {nodes.map((n, i) => (
                  <g key={`star-${i}`}>
                    <motion.line
                      x1={n.cx - n.star}
                      y1={n.cy}
                      x2={n.cx + n.star}
                      y2={n.cy}
                      stroke="white"
                      strokeWidth="0.8"
                      filter="url(#am-star-glow)"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.55 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ delay: n.delay, duration: 0.5 }}
                    />
                    <motion.line
                      x1={n.cx}
                      y1={n.cy - n.star}
                      x2={n.cx}
                      y2={n.cy + n.star}
                      stroke="white"
                      strokeWidth="0.8"
                      filter="url(#am-star-glow)"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.55 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ delay: n.delay, duration: 0.5 }}
                    />
                  </g>
                ))}

                {/* Bright node points */}
                {nodes.map((n, i) => (
                  <motion.circle
                    key={`n-${i}`}
                    cx={n.cx}
                    cy={n.cy}
                    r={n.r}
                    fill="white"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: n.delay, duration: 0.4 }}
                  />
                ))}

                {/* Pulsing ring at convergence */}
                <motion.circle
                  cx={600}
                  cy={210}
                  r={10}
                  fill="none"
                  stroke="white"
                  strokeOpacity="0.18"
                  strokeWidth="0.6"
                  animate={{ r: [10, 26, 10], opacity: [0.2, 0, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </svg>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
