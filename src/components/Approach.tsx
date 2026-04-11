"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    step: "I",
    title: "Discovery",
    description:
      "We start with your story. Your background, goals, constraints, and the myths you've already heard.",
  },
  {
    step: "II",
    title: "Decode",
    description:
      "We break down the actual system — the rules, the gaps, and the pathways that fit your profile.",
  },
  {
    step: "III",
    title: "Strategy",
    description:
      "A personalized roadmap with real timelines, real risks, and real options. No templated nonsense.",
  },
  {
    step: "IV",
    title: "Connect",
    description:
      "When you're ready, we connect you to verified employers, trusted professionals, and real opportunities.",
  },
];

export default function Approach() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="relative z-10 max-w-6xl 2xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
        <AnimatedSection>
          <div className="text-center mb-14 sm:mb-18">
            <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-4">
              Our Approach
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Clarity in Four Steps.
            </h2>
            <p className="mt-4 text-white/45 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              A process built around honesty, not hype.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-0 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-6 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          {steps.map((s, i) => (
            <AnimatedSection key={s.step} delay={i * 0.12}>
              <div className="relative text-center lg:px-4">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-black border border-white/15 mb-5"
                >
                  <span className="font-display text-sm text-white/70">
                    {s.step}
                  </span>
                </motion.div>
                <h3 className="font-display text-xl tracking-tight mb-2">
                  {s.title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed max-w-[240px] mx-auto">
                  {s.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
