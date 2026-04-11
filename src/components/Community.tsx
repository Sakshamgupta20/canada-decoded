"use client";

import AnimatedSection from "./AnimatedSection";

export default function Community() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="relative z-10 max-w-5xl 2xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20 text-center">
        <AnimatedSection>
          <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-4">
            Community
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight">
            Real Conversations. Real People.
          </h2>
          <p className="mt-5 text-white/45 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Beyond the screen, we believe in real connections — building a
            community where your journey matters and your questions get honest
            answers.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
