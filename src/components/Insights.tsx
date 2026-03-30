"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import GrainOverlay from "./GrainOverlay";

const insights = [
  { title: "Truth About LMIA Jobs" },
  { title: "CRS Myths Debanked" },
  { title: "PGWP to PR Success Story" },
  { title: "Avoiding Common PR Mistakes" },
];

export default function Insights() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -280 : 280,
      behavior: "smooth",
    });
  };

  return (
    <section id="insights" className="relative py-10 sm:py-14 bg-black">
      <GrainOverlay />

      <div className="relative z-10 max-w-5xl 2xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <div className="flex-1 h-px bg-white/10" />
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl tracking-tight text-center whitespace-nowrap">
              Decoded Insights
            </h2>
            <div className="flex-1 h-px bg-white/10" />
          </div>
        </AnimatedSection>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          >
            {insights.map((insight, i) => (
              <AnimatedSection key={insight.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                  className="group relative min-w-[200px] sm:min-w-[220px] aspect-[4/5] overflow-hidden cursor-pointer snap-start flex-shrink-0 bg-black border border-[#1f1f1f] hover:border-[#2a2a2a] transition-colors duration-300"
                  style={{ borderRadius: 0 }}
                >
                  {/* Play triangle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-white/70 group-hover:text-white transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>

                  {/* Title at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <p className="text-xs sm:text-sm font-medium leading-snug text-white/80">
                      {insight.title}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Scroll arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Scroll right"
          >
            <svg
              className="w-3.5 h-3.5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
