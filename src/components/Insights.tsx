"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const insights = [
  {
    tag: "LMIA",
    title: "Truth About LMIA Jobs",
    duration: "8 min read",
  },
  {
    tag: "Express Entry",
    title: "CRS Myths Debunked",
    duration: "6 min read",
  },
  {
    tag: "PR Journey",
    title: "PGWP to PR Success Story",
    duration: "12 min read",
  },
  {
    tag: "Reality Check",
    title: "Avoiding Common PR Mistakes",
    duration: "10 min read",
  },
  {
    tag: "PNP",
    title: "Province-Wise Strategy Guide",
    duration: "15 min read",
  },
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
    <section id="insights" className="relative py-20 sm:py-28">
      <div className="relative z-10 max-w-6xl 2xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-10 sm:mb-14 gap-6">
            <div>
              <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-4">
                Content Hub
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight">
                Decoded Insights.
              </h2>
            </div>
            <div className="hidden sm:flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 border border-white/15 hover:border-white/40 hover:bg-white/5 flex items-center justify-center transition-all duration-300"
                aria-label="Scroll left"
                style={{ borderRadius: 0 }}
              >
                <svg
                  className="w-4 h-4 text-white/70"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 border border-white/15 hover:border-white/40 hover:bg-white/5 flex items-center justify-center transition-all duration-300"
                aria-label="Scroll right"
                style={{ borderRadius: 0 }}
              >
                <svg
                  className="w-4 h-4 text-white/70"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </AnimatedSection>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-6 px-6 sm:mx-0 sm:px-0 pb-2"
        >
          {insights.map((insight, i) => (
            <AnimatedSection key={insight.title} delay={i * 0.08}>
              <motion.a
                href="#insights"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                className="group relative min-w-[240px] sm:min-w-[280px] aspect-[4/5] overflow-hidden cursor-pointer snap-start flex-shrink-0 bg-[#0a0a0a] border border-[#1c1c1c] hover:border-[#2e2e2e] transition-colors duration-300 block"
                style={{ borderRadius: 0 }}
              >
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-black/60" />

                {/* Play triangle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border border-white/30 group-hover:border-white/60 flex items-center justify-center transition-all duration-300 backdrop-blur-sm bg-black/20">
                    <svg
                      className="w-4 h-4 text-white ml-0.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Tag top-left */}
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-white/50 border border-white/20 px-2 py-1">
                    {insight.tag}
                  </span>
                </div>

                {/* Title at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <p className="font-display text-base sm:text-lg leading-snug text-white/90 mb-1">
                    {insight.title}
                  </p>
                  <p className="text-[11px] text-white/40 tracking-wide">
                    {insight.duration}
                  </p>
                </div>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
