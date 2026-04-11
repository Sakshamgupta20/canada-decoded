"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import SectionBackdrop from "./SectionBackdrop";

interface LegalLayoutProps {
  eyebrow?: string;
  title: string;
  lastUpdated?: string;
  children: ReactNode;
}

export default function LegalLayout({
  eyebrow = "Legal",
  title,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <section className="relative pt-32 sm:pt-40 pb-24 sm:pb-32 lg:pb-36 overflow-hidden bg-black">
      <SectionBackdrop orb="top-right" />

      <div className="relative z-10 max-w-7xl 2xl:max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-14"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-white/40 hover:text-white/70 transition-colors"
          >
            <svg
              className="w-3 h-3"
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
            Back to home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mb-14 sm:mb-16"
        >
          <p className="text-[11px] sm:text-xs tracking-[0.3em] text-white/45 uppercase mb-6 sm:mb-7">
            {eyebrow}
          </p>
          <h1 className="font-display text-[2.25rem] sm:text-[2.75rem] md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] leading-[1.04] tracking-[-0.02em] max-w-[16ch]">
            {title}
          </h1>
          {lastUpdated && (
            <p className="mt-7 text-[11px] tracking-[0.2em] uppercase text-white/40">
              Last updated · {lastUpdated}
            </p>
          )}
          <motion.div
            className="mt-10 h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="legal-content max-w-3xl"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
