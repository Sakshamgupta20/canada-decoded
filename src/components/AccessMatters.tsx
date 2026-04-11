"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const features = [
  { n: "01", label: "No False Promises — Just Clear Direction" },
  { n: "02", label: "Opportunities Aligned With Your PR Goals" },
  { n: "03", label: "Vetted Before You Even See Them" },
  { n: "04", label: "Built Through Real Industry Connections" },
  { n: "05", label: "Clarity Before Commitment" },
  { n: "06", label: "Quality Over Quantity — Always" },
];

export default function AccessMatters() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black py-24 sm:py-28 lg:py-36 border-t border-white/10"
    >
      {/* ── Gradient mesh background ───────────────────────────────────── */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: "1200px",
          height: "1200px",
          right: "-300px",
          top: "-300px",
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 30%, transparent 65%)",
        }}
        animate={{ x: [0, -35, 0], y: [0, 25, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: "900px",
          height: "900px",
          left: "-200px",
          bottom: "-200px",
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.012) 30%, transparent 65%)",
        }}
        animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
        transition={{ duration: 36, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle 12-column grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
          <div className="relative w-full h-full">
            {[...Array(13)].map((_, i) => (
              <div
                key={i}
                className="absolute top-0 bottom-0 w-px bg-white/[0.025]"
                style={{ left: `${(i / 12) * 100}%` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Content ────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
        {/* Header */}
        <AnimatedSection>
          <p className="text-[11px] sm:text-xs tracking-[0.3em] text-white/45 uppercase mb-6 sm:mb-7">
            Why Us
          </p>
          <h2 className="font-display text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.75rem] xl:text-[4.5rem] 2xl:text-[5rem] leading-[1.04] tracking-[-0.02em] max-w-[14ch]">
            Access Matters.
          </h2>
          <p className="mt-7 sm:mt-8 text-[15px] sm:text-base text-white/50 max-w-xl leading-relaxed">
            We don&rsquo;t just hand you information — we open doors to the
            right people, opportunities, and pathways. Six principles shape
            everything we do.
          </p>
        </AnimatedSection>

        {/* Horizon rule */}
        <motion.div
          className="mt-14 sm:mt-16 h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        />

        {/* Feature grid — 2 columns on desktop */}
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24">
          {features.map((feature, i) => (
            <motion.div
              key={feature.n}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: 0.1 + i * 0.06,
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group flex items-baseline gap-5 sm:gap-7 py-5 sm:py-6 border-b border-white/10"
            >
              <span className="font-display text-[10px] sm:text-xs text-white/35 tracking-[0.2em] flex-shrink-0">
                {feature.n}
              </span>
              <span className="text-[15px] sm:text-base text-white/75 leading-snug tracking-tight group-hover:text-white transition-colors duration-300">
                {feature.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
