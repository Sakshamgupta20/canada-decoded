"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const insights = [
  {
    title: "Truth About LMIA Jobs",
    gradient: "from-amber-900/40 to-stone-900/60",
  },
  {
    title: "CRS Myths Debanked",
    gradient: "from-slate-800/60 to-zinc-900/60",
  },
  {
    title: "PGWP to PR Success Story",
    gradient: "from-stone-800/50 to-neutral-900/60",
  },
  {
    title: "Avoiding Common PR Mistakes",
    gradient: "from-zinc-800/50 to-stone-900/60",
  },
  {
    title: "Express Entry Explained",
    gradient: "from-neutral-800/50 to-zinc-900/60",
  },
];

export default function Insights() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="insights" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12 sm:mb-16">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/20" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-center whitespace-nowrap">
              Decoded Insights
            </h2>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/20" />
          </div>
        </AnimatedSection>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory -mx-6 px-6 sm:-mx-0 sm:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {insights.map((insight, i) => (
              <AnimatedSection key={insight.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative min-w-[260px] sm:min-w-[280px] aspect-[4/3] rounded-sm overflow-hidden cursor-pointer snap-start flex-shrink-0"
                >
                  {/* Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${insight.gradient}`}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-500" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5 text-white ml-0.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-sm sm:text-base font-medium leading-snug">
                      {insight.title}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Scroll button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full items-center justify-center hover:bg-white/20 transition-colors hidden sm:flex"
            aria-label="Scroll right"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
