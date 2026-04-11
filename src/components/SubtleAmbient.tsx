"use client";

import { motion } from "framer-motion";

// Fixed positions (in vw / vh units) and twinkle timings — no Math.random
// at runtime so SSR and client render identically.
const dots = [
  { left: "8vw", top: "12vh", size: 1.5, dur: 4.6, delay: 0 },
  { left: "22vw", top: "28vh", size: 1.0, dur: 5.4, delay: 1.2 },
  { left: "14vw", top: "62vh", size: 1.2, dur: 4.0, delay: 0.6 },
  { left: "6vw", top: "84vh", size: 1.0, dur: 5.8, delay: 2.0 },
  { left: "32vw", top: "8vh", size: 0.9, dur: 5.0, delay: 1.6 },
  { left: "44vw", top: "44vh", size: 1.1, dur: 4.4, delay: 0.4 },
  { left: "38vw", top: "78vh", size: 0.9, dur: 5.6, delay: 2.4 },
  { left: "58vw", top: "16vh", size: 1.0, dur: 4.8, delay: 0.9 },
  { left: "66vw", top: "52vh", size: 1.3, dur: 5.2, delay: 1.8 },
  { left: "72vw", top: "82vh", size: 0.9, dur: 4.2, delay: 0.3 },
  { left: "82vw", top: "22vh", size: 1.1, dur: 5.6, delay: 2.2 },
  { left: "88vw", top: "58vh", size: 1.0, dur: 4.6, delay: 1.0 },
  { left: "92vw", top: "8vh", size: 0.8, dur: 5.0, delay: 2.8 },
  { left: "50vw", top: "92vh", size: 1.0, dur: 4.8, delay: 1.4 },
];

export default function SubtleAmbient() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: d.left,
            top: d.top,
            width: `${d.size}px`,
            height: `${d.size}px`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.08, 0.32, 0.08] }}
          transition={{
            duration: d.dur,
            delay: d.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
