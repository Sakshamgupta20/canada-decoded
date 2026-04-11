"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionBackdrop from "./SectionBackdrop";

const steps = [
  {
    n: "01",
    title: "Discovery",
    description:
      "We start with your story. Your background, goals, constraints, and the myths you've already heard.",
  },
  {
    n: "02",
    title: "Decode",
    description:
      "We break down the actual system: the rules, the gaps, and the pathways that fit your profile.",
  },
  {
    n: "03",
    title: "Strategy",
    description:
      "A personalized roadmap with real timelines, real risks, and real options. No templated nonsense.",
  },
  {
    n: "04",
    title: "Connect",
    description:
      "When you're ready, we connect you to verified employers, trusted professionals, and real opportunities.",
  },
];

export default function Approach() {
  return (
    <section className="relative overflow-hidden bg-black py-24 sm:py-28 lg:py-36 border-t border-white/10">
      <SectionBackdrop orb="top-left" />

      <div className="relative z-10 max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
        {/* Header */}
        <AnimatedSection>
          <p className="text-[11px] sm:text-xs tracking-[0.3em] text-white/45 uppercase mb-6 sm:mb-7">
            Our Approach
          </p>
          <h2 className="font-display text-[2rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.75rem] 2xl:text-[4.25rem] leading-[1.04] tracking-[-0.02em] max-w-[18ch]">
            Clarity in Four Steps.
          </h2>
          <p className="mt-7 sm:mt-8 text-[15px] sm:text-base text-white/50 max-w-xl leading-relaxed">
            A process built around honesty, not hype. Every engagement follows
            the same four steps. No shortcuts, no upsells.
          </p>
        </AnimatedSection>

        {/* Horizon rule */}
        <motion.div
          className="mt-14 sm:mt-16 h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
        />

        {/* Steps grid */}
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06]">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: 0.1 + i * 0.08,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="group relative bg-black p-7 sm:p-9 hover:bg-[#070707] transition-colors duration-500"
            >
              <div className="flex items-baseline justify-between mb-8">
                <span className="font-display text-[10px] text-white/35 tracking-[0.2em]">
                  {s.n}
                </span>
                <span className="text-[10px] text-white/25 tracking-[0.2em] uppercase">
                  Step
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl tracking-tight mb-3">
                {s.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
