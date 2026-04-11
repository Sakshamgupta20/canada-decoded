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
    <section className="relative pt-32 sm:pt-40 pb-24 sm:pb-32 lg:pb-36 overflow-hidden bg-[#0b0b0d]">
      <SectionBackdrop orb="top-right" />

      {/* Spotlight behind the headline: gives the eye a clear focal anchor */}
      <div
        className="absolute pointer-events-none -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] opacity-80"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.035) 28%, rgba(255,255,255,0.012) 50%, transparent 72%)",
        }}
      />

      {/* Warm low-light wash so the page isn't monochrome black */}
      <div
        className="absolute pointer-events-none inset-x-0 bottom-0 h-[60%]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(255,210,170,0.05) 0%, rgba(255,200,160,0.018) 30%, transparent 60%)",
        }}
      />

      {/* Edge vignette: darkens corners so the center feels lit */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />

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
