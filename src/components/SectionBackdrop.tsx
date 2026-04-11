"use client";

import { motion } from "framer-motion";

type OrbPosition =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left"
  | "center"
  | "none";

interface SectionBackdropProps {
  orb?: OrbPosition;
  grid?: boolean;
}

const orbStyles: Record<Exclude<OrbPosition, "none">, React.CSSProperties> = {
  "top-right": {
    width: "1000px",
    height: "1000px",
    right: "-300px",
    top: "-200px",
  },
  "top-left": {
    width: "900px",
    height: "900px",
    left: "-250px",
    top: "-150px",
  },
  "bottom-right": {
    width: "1000px",
    height: "1000px",
    right: "-250px",
    bottom: "-300px",
  },
  "bottom-left": {
    width: "900px",
    height: "900px",
    left: "-250px",
    bottom: "-300px",
  },
  center: {
    width: "1100px",
    height: "1100px",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
};

const orbDrift: Record<
  Exclude<OrbPosition, "none">,
  { x: number[]; y: number[]; duration: number }
> = {
  "top-right": { x: [0, -30, 0], y: [0, 20, 0], duration: 28 },
  "top-left": { x: [0, 30, 0], y: [0, 20, 0], duration: 32 },
  "bottom-right": { x: [0, -30, 0], y: [0, -20, 0], duration: 30 },
  "bottom-left": { x: [0, 30, 0], y: [0, -20, 0], duration: 30 },
  center: { x: [-20, 20, -20], y: [-15, 15, -15], duration: 34 },
};

/**
 * Shared section backdrop: 12-column architectural grid plus slowly drifting
 * gradient orb. Used across sections to create a cohesive editorial backdrop
 * without per-section decoration.
 */
export default function SectionBackdrop({
  orb = "top-right",
  grid = true,
}: SectionBackdropProps) {
  return (
    <>
      {/* Architectural 12-column grid */}
      {grid && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
            <div className="relative w-full h-full">
              {[...Array(13)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-0 bottom-0 w-px bg-white/[0.03]"
                  style={{ left: `${(i / 12) * 100}%` }}
                  initial={{ scaleY: 0, originY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 1.4,
                    delay: i * 0.03,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Drifting gradient orb */}
      {orb !== "none" && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            ...orbStyles[orb],
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.018) 25%, transparent 60%)",
          }}
          animate={{ x: orbDrift[orb].x, y: orbDrift[orb].y }}
          transition={{
            duration: orbDrift[orb].duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </>
  );
}
