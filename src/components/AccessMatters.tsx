"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const features = [
  "Verified Employers",
  "Trusted Professionals",
  "Real Opportunities",
];

export default function AccessMatters() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Access Matters.
            </h2>
            <ul className="mt-8 sm:mt-10 space-y-5">
              {features.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                  className="flex items-center gap-4 text-lg sm:text-xl text-white/80"
                >
                  <svg
                    className="w-5 h-5 text-white/60 flex-shrink-0"
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

          {/* Right - Abstract network graphic */}
          <AnimatedSection delay={0.2}>
            <div className="relative aspect-[4/3] w-full">
              <svg
                viewBox="0 0 600 450"
                fill="none"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Grid lines */}
                {[...Array(8)].map((_, i) => (
                  <motion.line
                    key={`h-${i}`}
                    x1="0"
                    y1={i * 60 + 30}
                    x2="600"
                    y2={i * 60 + 30}
                    stroke="white"
                    strokeOpacity="0.04"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: i * 0.05 }}
                  />
                ))}
                {[...Array(10)].map((_, i) => (
                  <motion.line
                    key={`v-${i}`}
                    x1={i * 65 + 20}
                    y1="0"
                    x2={i * 65 + 20}
                    y2="450"
                    stroke="white"
                    strokeOpacity="0.04"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: i * 0.05 }}
                  />
                ))}

                {/* Connection lines */}
                {[
                  [150, 120, 300, 200],
                  [300, 200, 450, 150],
                  [300, 200, 200, 320],
                  [200, 320, 400, 300],
                  [450, 150, 500, 280],
                  [400, 300, 500, 280],
                  [100, 200, 150, 120],
                  [100, 200, 200, 320],
                  [450, 150, 550, 100],
                  [300, 200, 350, 350],
                  [350, 350, 400, 300],
                ].map(([x1, y1, x2, y2], i) => (
                  <motion.line
                    key={`conn-${i}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="white"
                    strokeOpacity="0.15"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.08 }}
                  />
                ))}

                {/* Nodes */}
                {[
                  { cx: 150, cy: 120, r: 4 },
                  { cx: 300, cy: 200, r: 6 },
                  { cx: 450, cy: 150, r: 5 },
                  { cx: 200, cy: 320, r: 4 },
                  { cx: 400, cy: 300, r: 5 },
                  { cx: 500, cy: 280, r: 4 },
                  { cx: 100, cy: 200, r: 3 },
                  { cx: 550, cy: 100, r: 3 },
                  { cx: 350, cy: 350, r: 3 },
                ].map((node, i) => (
                  <motion.circle
                    key={`node-${i}`}
                    cx={node.cx}
                    cy={node.cy}
                    r={node.r}
                    fill="white"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 0.7, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                  />
                ))}

                {/* Pulsing node highlight */}
                <motion.circle
                  cx={300}
                  cy={200}
                  r={20}
                  fill="none"
                  stroke="white"
                  strokeOpacity="0.1"
                  strokeWidth="1"
                  animate={{ r: [20, 35, 20], opacity: [0.2, 0, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </svg>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
