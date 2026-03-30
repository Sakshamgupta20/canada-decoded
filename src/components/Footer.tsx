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
      className="border-t border-white/8 py-7"
    >
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 2xl:px-20">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 text-xs text-white/35">
          <p className="tracking-wide">Canada Decoded Inc.</p>

          <div className="flex items-center gap-5">
            <Link href="/terms" className="hover:text-white/60 transition-colors">
              Terms
            </Link>
            <span className="text-white/15">|</span>
            <Link href="/privacy" className="hover:text-white/60 transition-colors">
              Privacy
            </Link>
            <span className="text-white/15">|</span>
            <Link href="/disclaimer" className="hover:text-white/60 transition-colors">
              Disclaimer
            </Link>
          </div>

          <p>&copy; 2026</p>
        </div>
      </div>
    </motion.footer>
  );
}
