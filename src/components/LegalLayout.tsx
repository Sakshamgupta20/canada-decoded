"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

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
    <section className="relative pt-32 sm:pt-40 pb-24 sm:pb-32">
      <div className="relative z-10 max-w-3xl 2xl:max-w-4xl mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors tracking-wide"
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
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 sm:mb-16"
        >
          <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-5">
            {eyebrow}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.08]">
            {title}
          </h1>
          {lastUpdated && (
            <p className="mt-5 text-white/35 text-sm">
              Last updated: {lastUpdated}
            </p>
          )}
          <div className="mt-8 h-px bg-white/10" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="legal-content"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
