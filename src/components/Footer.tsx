"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-white/10 py-8 sm:py-10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-white/40 tracking-wide">
            Canada Decoded Inc.
          </p>

          <div className="flex items-center gap-6 text-sm text-white/40">
            <Link
              href="/terms"
              className="hover:text-white/70 transition-colors"
            >
              Terms
            </Link>
            <span className="text-white/20">|</span>
            <Link
              href="/privacy"
              className="hover:text-white/70 transition-colors"
            >
              Privacy
            </Link>
            <span className="text-white/20">|</span>
            <Link
              href="/disclaimer"
              className="hover:text-white/70 transition-colors"
            >
              Disclaimer
            </Link>
          </div>

          <p className="text-sm text-white/40">&copy; 2026</p>
        </div>
      </div>
    </motion.footer>
  );
}
