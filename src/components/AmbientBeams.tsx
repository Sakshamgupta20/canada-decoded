"use client";

import { motion } from "framer-motion";

type Variant = "top-right" | "top-left" | "center" | "bottom-right";

interface AmbientBeamsProps {
  variant?: Variant;
  intensity?: number; // 0..1
  className?: string;
}

// Pre-computed curve sets — each variant converges at a focal point.
// Coordinate space is 1200 × 600.
const variants: Record<
  Variant,
  { focal: [number, number]; arcs: { d: string; o: number; w: number; delay: number }[] }
> = {
  "top-right": {
    focal: [1080, 110],
    arcs: [
      { d: "M 0,500 Q 400,350 1080,110", o: 0.22, w: 1.0, delay: 0 },
      { d: "M 0,420 Q 450,300 1080,110", o: 0.26, w: 1.1, delay: 0.06 },
      { d: "M 0,340 Q 500,260 1080,110", o: 0.3, w: 0.95, delay: 0.12 },
      { d: "M 0,260 Q 550,220 1080,110", o: 0.24, w: 0.8, delay: 0.18 },
      { d: "M 0,180 Q 600,180 1080,110", o: 0.18, w: 0.7, delay: 0.24 },
      { d: "M 0,460 Q 430,320 1080,110", o: 0.1, w: 0.45, delay: 0.08 },
      { d: "M 0,300 Q 520,240 1080,110", o: 0.12, w: 0.45, delay: 0.16 },
    ],
  },
  "top-left": {
    focal: [120, 110],
    arcs: [
      { d: "M 1200,500 Q 800,350 120,110", o: 0.22, w: 1.0, delay: 0 },
      { d: "M 1200,420 Q 750,300 120,110", o: 0.26, w: 1.1, delay: 0.06 },
      { d: "M 1200,340 Q 700,260 120,110", o: 0.3, w: 0.95, delay: 0.12 },
      { d: "M 1200,260 Q 650,220 120,110", o: 0.24, w: 0.8, delay: 0.18 },
      { d: "M 1200,180 Q 600,180 120,110", o: 0.18, w: 0.7, delay: 0.24 },
      { d: "M 1200,460 Q 770,320 120,110", o: 0.1, w: 0.45, delay: 0.08 },
      { d: "M 1200,300 Q 680,240 120,110", o: 0.12, w: 0.45, delay: 0.16 },
    ],
  },
  center: {
    focal: [600, 300],
    arcs: [
      { d: "M 0,80 Q 300,180 600,300", o: 0.18, w: 0.9, delay: 0 },
      { d: "M 0,200 Q 350,250 600,300", o: 0.22, w: 1.0, delay: 0.06 },
      { d: "M 0,520 Q 300,420 600,300", o: 0.18, w: 0.9, delay: 0.1 },
      { d: "M 1200,80 Q 900,180 600,300", o: 0.18, w: 0.9, delay: 0.04 },
      { d: "M 1200,200 Q 850,250 600,300", o: 0.22, w: 1.0, delay: 0.1 },
      { d: "M 1200,520 Q 900,420 600,300", o: 0.18, w: 0.9, delay: 0.14 },
    ],
  },
  "bottom-right": {
    focal: [1080, 480],
    arcs: [
      { d: "M 0,80 Q 450,200 1080,480", o: 0.22, w: 1.0, delay: 0 },
      { d: "M 0,160 Q 500,260 1080,480", o: 0.26, w: 1.1, delay: 0.06 },
      { d: "M 0,260 Q 550,320 1080,480", o: 0.3, w: 0.95, delay: 0.12 },
      { d: "M 0,360 Q 600,400 1080,480", o: 0.24, w: 0.8, delay: 0.18 },
      { d: "M 0,120 Q 480,240 1080,480", o: 0.1, w: 0.45, delay: 0.08 },
      { d: "M 0,300 Q 580,360 1080,480", o: 0.12, w: 0.45, delay: 0.16 },
    ],
  },
};

export default function AmbientBeams({
  variant = "top-right",
  intensity = 0.6,
  className = "",
}: AmbientBeamsProps) {
  const { focal, arcs } = variants[variant];
  const [fx, fy] = focal;
  const id = `ab-${variant}`;

  return (
    <svg
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient
          id={`${id}-bloom`}
          cx={fx}
          cy={fy}
          r="180"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="white" stopOpacity={0.18 * intensity} />
          <stop offset="40%" stopColor="white" stopOpacity={0.05 * intensity} />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-soft`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* Bloom */}
      <rect width="1200" height="600" fill={`url(#${id}-bloom)`} />

      {/* Soft glow layer */}
      <g filter={`url(#${id}-soft)`} opacity={0.5 * intensity}>
        {arcs.slice(0, 5).map((arc, i) => (
          <motion.path
            key={`s-${i}`}
            d={arc.d}
            stroke="white"
            strokeOpacity={arc.o * 0.4}
            strokeWidth={arc.w * 1.6}
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-80px" }}
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
          key={i}
          d={arc.d}
          stroke="white"
          strokeOpacity={arc.o * intensity}
          strokeWidth={arc.w}
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
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

      {/* Convergence dot */}
      <motion.circle
        cx={fx}
        cy={fy}
        r="2.5"
        fill="white"
        opacity={0.7 * intensity}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.7 }}
      />
    </svg>
  );
}
