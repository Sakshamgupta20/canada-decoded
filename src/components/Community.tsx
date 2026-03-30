"use client";

import AnimatedSection from "./AnimatedSection";
import GrainOverlay from "./GrainOverlay";

export default function Community() {
  return (
    <section className="relative py-14 sm:py-20 bg-black">
      <GrainOverlay />
      <div className="relative z-10 max-w-5xl 2xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20 text-center">
        <AnimatedSection>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-tight">
            Real Conversations. Real People.
          </h2>
          <p className="mt-3 text-white/40 text-sm sm:text-[15px] max-w-lg mx-auto leading-relaxed">
            Beyond the screen, we believe in real connections and building a
            community where your journey matters.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
