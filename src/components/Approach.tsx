"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import AmbientBeams from "./AmbientBeams";

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
    <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
      {/* Subtle ambient backdrop */}
      <div className="absolute inset-0 opacity-50">
        <AmbientBeams variant="top-left" intensity={0.4} />
      </div>

      <div className="relative z-10 max-w-6xl 2xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
        <AnimatedSection>
          <div className="text-center mb-16 sm:mb-20">
            <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-4">
              Our Approach
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Clarity in Four Steps.
            </h2>
            <motion.div
              className="mx-auto mt-5 h-px bg-white/20 origin-center"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              style={{ width: "56px" }}
            />
            <p className="mt-5 text-white/45 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              A process built around honesty, not hype.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-10 lg:gap-0">
          {/* Animated connecting line — desktop */}
          <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-white/25 to-transparent origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
            />
          </div>

          {steps.map((s, i) => (
            <AnimatedSection key={s.step} delay={i * 0.12}>
              <div className="relative text-center lg:px-4">
                <div className="relative inline-flex items-center justify-center mb-6">
                  {/* Soft glow ring */}
                  <motion.span
                    className="absolute inset-0 rounded-full bg-white/5 blur-md"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
                  />
                  {/* Outer ring */}
                  <motion.span
                    className="absolute inset-[-6px] rounded-full border border-white/10"
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
                  />
                  {/* Number circle */}
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                    className="relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-black border border-white/25"
                  >
                    <span className="font-display text-sm text-white/80">
                      {s.step}
                    </span>
                  </motion.div>
                </div>
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
