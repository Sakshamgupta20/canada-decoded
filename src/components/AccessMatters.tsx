"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import GrainOverlay from "./GrainOverlay";

const features = [
  "Verified Employers",
  "Trusted Professionals",
  "Real Opportunities",
];

// Dense dot grid
const dots: [number, number][] = [];
for (let row = 0; row < 16; row++) {
  for (let col = 0; col < 22; col++) {
    dots.push([col * 30 + 10, row * 20 + 8]);
  }
}

// Connection lines — long diagonals and shorter links
const connections = [
  // Long diagonal lines spanning the graphic
  [0, 280, 650, 10],
  [0, 200, 650, 50],
  [50, 0, 620, 310],
  [200, 0, 650, 200],
  [0, 100, 500, 310],
  // Horizontal / near-horizontal lines
  [0, 150, 650, 130],
  [100, 60, 650, 80],
  [0, 230, 550, 250],
  // Shorter cross links between nodes
  [180, 80, 380, 150],
  [380, 150, 550, 80],
  [250, 200, 450, 250],
  [320, 50, 500, 180],
  [150, 180, 350, 100],
  [400, 100, 580, 200],
  [100, 120, 300, 240],
  [450, 50, 600, 150],
  [200, 250, 400, 180],
  [500, 130, 630, 260],
];

// Nodes — bright star intersections
const nodes = [
  { cx: 180, cy: 80, r: 4, star: 28 },
  { cx: 320, cy: 130, r: 5.5, star: 35 },
  { cx: 480, cy: 90, r: 5, star: 32 },
  { cx: 550, cy: 160, r: 5, star: 32 },
  { cx: 400, cy: 210, r: 4, star: 26 },
  { cx: 250, cy: 200, r: 4.5, star: 28 },
  { cx: 130, cy: 160, r: 3.5, star: 22 },
  { cx: 600, cy: 80, r: 3.5, star: 22 },
  { cx: 350, cy: 60, r: 3, star: 18 },
  { cx: 500, cy: 250, r: 3.5, star: 22 },
  { cx: 150, cy: 250, r: 3, star: 18 },
  { cx: 620, cy: 200, r: 3, star: 16 },
];

export default function AccessMatters() {
  return (
    <section id="about" className="relative overflow-hidden bg-black">
      <GrainOverlay />
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] items-center min-h-[280px] sm:min-h-[320px] py-12 sm:py-16">
          {/* Left content */}
          <AnimatedSection>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-tight">
              Access Matters.
            </h2>
            <ul className="mt-4 sm:mt-5 space-y-2.5">
              {features.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2.5 text-sm sm:text-base text-white/70"
                >
                  <svg
                    className="w-3.5 h-3.5 text-white/50 flex-shrink-0"
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
                  {feature}
                </motion.li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Right - Network graphic */}
          <AnimatedSection delay={0.1}>
            <div className="relative w-full h-[280px] sm:h-[320px] -mr-6 sm:-mr-8 lg:-mr-12">
              <svg
                viewBox="0 0 660 320"
                fill="none"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Soft circular glow */}
                  <filter id="am-glow" x="-300%" y="-300%" width="700%" height="700%">
                    <feGaussianBlur stdDeviation="6" />
                  </filter>
                  {/* Bright node with glow merge */}
                  <filter id="am-node" x="-200%" y="-200%" width="500%" height="500%">
                    <feGaussianBlur stdDeviation="2" result="b" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  {/* Star cross flare filter */}
                  <filter id="am-star" x="-100%" y="-100%" width="300%" height="300%">
                    <feGaussianBlur stdDeviation="1.5" />
                  </filter>
                  <radialGradient id="am-ambient" cx="50%" cy="45%" r="60%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.04" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Ambient glow */}
                <rect width="660" height="320" fill="url(#am-ambient)" />

                {/* Dot grid */}
                {dots.map(([x, y], i) => (
                  <motion.circle
                    key={`d-${i}`}
                    cx={x}
                    cy={y}
                    r={0.9}
                    fill="white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.25 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 + i * 0.001, duration: 0.2 }}
                  />
                ))}

                {/* Connection lines */}
                {connections.map(([x1, y1, x2, y2], i) => (
                  <motion.line
                    key={`l-${i}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="white"
                    strokeOpacity={i < 8 ? 0.12 : 0.18}
                    strokeWidth={i < 8 ? 0.6 : 0.8}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.04 }}
                  />
                ))}

                {/* Star cross flares at each node (4-pointed star) */}
                {nodes.map((n, i) => (
                  <g key={`star-${i}`}>
                    {/* Horizontal flare */}
                    <motion.line
                      x1={n.cx - n.star}
                      y1={n.cy}
                      x2={n.cx + n.star}
                      y2={n.cy}
                      stroke="white"
                      strokeWidth="0.8"
                      filter="url(#am-star)"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.5 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + i * 0.06, duration: 0.4 }}
                    />
                    {/* Vertical flare */}
                    <motion.line
                      x1={n.cx}
                      y1={n.cy - n.star}
                      x2={n.cx}
                      y2={n.cy + n.star}
                      stroke="white"
                      strokeWidth="0.8"
                      filter="url(#am-star)"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.5 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + i * 0.06, duration: 0.4 }}
                    />
                  </g>
                ))}

                {/* Circular glow behind nodes */}
                {nodes.map((n, i) => (
                  <motion.circle
                    key={`g-${i}`}
                    cx={n.cx}
                    cy={n.cy}
                    r={n.star * 0.6}
                    fill="white"
                    filter="url(#am-glow)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.25 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + i * 0.06, duration: 0.5 }}
                  />
                ))}

                {/* Bright node points */}
                {nodes.map((n, i) => (
                  <motion.circle
                    key={`n-${i}`}
                    cx={n.cx}
                    cy={n.cy}
                    r={n.r}
                    fill="white"
                    filter="url(#am-node)"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + i * 0.06, duration: 0.3 }}
                  />
                ))}

                {/* Pulsing ring on central node */}
                <motion.circle
                  cx={320}
                  cy={130}
                  r={12}
                  fill="none"
                  stroke="white"
                  strokeOpacity="0.1"
                  strokeWidth="0.5"
                  animate={{ r: [12, 25, 12], opacity: [0.15, 0, 0.15] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                />
              </svg>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
