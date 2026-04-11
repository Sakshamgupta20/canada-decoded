"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Community() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="relative z-10 max-w-5xl 2xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20 text-center">
        <AnimatedSection>
          <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-4">
            Community
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight">
            Real Conversations. Real People.
          </h2>
          <motion.div
            className="mx-auto mt-5 h-px bg-white/20 origin-center"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            style={{ width: "56px" }}
          />
          <p className="mt-6 text-white/50 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Beyond the screen, we believe in real connections — building a
            community where your journey matters and your questions get honest
            answers.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
