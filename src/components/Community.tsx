"use client";

import AnimatedSection from "./AnimatedSection";

export default function Community() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            Real Conversations. Real People.
          </h2>
          <p className="mt-5 sm:mt-6 text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Beyond the screen, we believe in real connections and building a
            community where your journey matters.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
