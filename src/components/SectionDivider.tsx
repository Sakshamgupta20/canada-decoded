"use client";

import { motion } from "framer-motion";

export default function SectionDivider({ star = false }: { star?: boolean }) {
  return (
    <div className="relative flex items-center justify-center py-1 bg-black">
      <motion.div
        className="w-full h-px bg-white/15"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      {star && (
        <motion.div
          className="absolute"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 4-pointed star */}
            <path
              d="M8 0L8.9 6.1L16 8L8.9 9.9L8 16L7.1 9.9L0 8L7.1 6.1L8 0Z"
              fill="white"
              fillOpacity="0.25"
            />
          </svg>
        </motion.div>
      )}
    </div>
  );
}
