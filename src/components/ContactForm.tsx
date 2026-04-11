"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Replace with your Web3Forms access key (or set NEXT_PUBLIC_WEB3FORMS_KEY env var)
const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("subject", "New inquiry — Canada Decoded");
    formData.append("from_name", "Canada Decoded Website");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Honeypot */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
          tabIndex={-1}
          aria-hidden="true"
        />

        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs tracking-[0.2em] text-white/50 uppercase mb-2"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            disabled={status === "submitting"}
            placeholder="Jane Doe"
            className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 focus:border-white/60 focus:outline-none text-white placeholder:text-white/25 text-base transition-colors disabled:opacity-50"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs tracking-[0.2em] text-white/50 uppercase mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={status === "submitting"}
            placeholder="you@example.com"
            className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 focus:border-white/60 focus:outline-none text-white placeholder:text-white/25 text-base transition-colors disabled:opacity-50"
          />
        </div>

        {/* Interest */}
        <div>
          <label
            htmlFor="interest"
            className="block text-xs tracking-[0.2em] text-white/50 uppercase mb-2"
          >
            What do you need help with?
          </label>
          <select
            id="interest"
            name="interest"
            required
            disabled={status === "submitting"}
            className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 focus:border-white/60 focus:outline-none text-white text-base transition-colors disabled:opacity-50 appearance-none cursor-pointer"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='white' stroke-opacity='0.5' stroke-width='1.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 4px center",
              paddingRight: "24px",
            }}
          >
            <option value="" className="bg-black">
              Select a topic…
            </option>
            <option value="Working in Canada" className="bg-black">
              Working in Canada
            </option>
            <option value="Business & Self-Employment" className="bg-black">
              Business & Self-Employment
            </option>
            <option value="LMIA & Job Offer Strategy" className="bg-black">
              LMIA & Job Offer Strategy
            </option>
            <option value="PR Pathway Comparison" className="bg-black">
              PR Pathway Comparison
            </option>
            <option value="1:1 Consultation" className="bg-black">
              1:1 Consultation
            </option>
            <option value="Reality Check & Case Review" className="bg-black">
              Reality Check & Case Review
            </option>
            <option value="Other" className="bg-black">
              Other
            </option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs tracking-[0.2em] text-white/50 uppercase mb-2"
          >
            Tell us about your situation
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            disabled={status === "submitting"}
            placeholder="Share your background, current status, and the questions you need answered…"
            className="w-full px-0 py-3 bg-transparent border-0 border-b border-white/20 focus:border-white/60 focus:outline-none text-white placeholder:text-white/25 text-base transition-colors resize-none disabled:opacity-50"
          />
        </div>

        {/* Submit */}
        <div className="pt-4">
          <motion.button
            type="submit"
            disabled={status === "submitting" || status === "success"}
            whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
            whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ borderRadius: 0 }}
          >
            {status === "submitting" ? (
              <>
                <span className="w-3 h-3 border border-black/40 border-t-black rounded-full animate-spin" />
                Sending…
              </>
            ) : status === "success" ? (
              <>Sent — we&rsquo;ll be in touch</>
            ) : (
              <>
                Send Message
                <svg
                  width="20"
                  height="10"
                  viewBox="0 0 24 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 5H22M22 5L18 1M22 5L18 9"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </>
            )}
          </motion.button>
        </div>

        {/* Status messages */}
        <AnimatePresence>
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm text-white/60 pt-2"
            >
              Thank you — your message has been received. We&rsquo;ll respond within
              1&ndash;2 business days.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm text-red-400/80 pt-2"
            >
              {errorMessage}
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
