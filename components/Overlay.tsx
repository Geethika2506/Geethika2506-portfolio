"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { Download } from "lucide-react";
import { siteConfig } from "@/lib/site";

interface OverlayProps {
  scrollProgress: MotionValue<number>;
}

const words = "Geethika Reddy Konda".split(" ");

export default function Overlay({ scrollProgress }: OverlayProps) {
  const opacity1 = useTransform(scrollProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollProgress, [0, 0.25], [0, -100]);
  const scale1 = useTransform(scrollProgress, [0, 0.25], [1, 0.92]);
  const blur1 = useTransform(scrollProgress, [0, 0.25], [0, 8]);
  const filter1 = useTransform(blur1, (v) => `blur(${v}px)`);

  const opacity2 = useTransform(scrollProgress, [0.25, 0.35, 0.5, 0.6], [0, 1, 1, 0]);
  const y2 = useTransform(scrollProgress, [0.25, 0.6], [100, -100]);
  const x2 = useTransform(scrollProgress, [0.25, 0.5], [-40, 0]);

  const opacity3 = useTransform(scrollProgress, [0.6, 0.7, 0.85, 0.95], [0, 1, 1, 0]);
  const y3 = useTransform(scrollProgress, [0.6, 0.95], [100, -100]);
  const x3 = useTransform(scrollProgress, [0.6, 0.85], [40, 0]);

  const scrollHintOpacity = useTransform(scrollProgress, [0, 0.08, 0.14], [1, 1, 0]);
  const scrollHintY = useTransform(scrollProgress, [0, 0.14], [0, 16]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-center text-white">
      <motion.div
        style={{
          opacity: opacity1,
          y: y1,
          scale: scale1,
          filter: filter1,
        }}
        className="absolute flex flex-col items-center justify-center text-center w-full px-4"
      >
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-4 flex flex-wrap justify-center gap-x-3 gap-y-1">
          {words.map((word, i) => (
            <motion.span
              key={word + i}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="text-xl md:text-3xl font-light text-gray-300 tracking-wide"
        >
          CS & AI Student at IE University
        </motion.p>
        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          style={{ pointerEvents: "auto" }}
        >
          <motion.a
            href="#projects"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.45 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-2.5 text-sm font-medium text-white/90 backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            View my work
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            >
              ↓
            </motion.span>
          </motion.a>
          <motion.a
            href={siteConfig.resumePath}
            download
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.45 }}
            className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-2.5 text-sm font-semibold hover:bg-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <Download className="w-4 h-4" />
            Resume
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: opacity2, y: y2, x: x2 }}
        className="absolute left-6 md:left-24 max-w-lg"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-6xl font-medium mb-4 leading-tight tracking-tight"
        >
          I build AI-driven
          <br />
          <motion.span
            className="text-gray-400 italic inline-block"
            animate={{ opacity: [0.65, 1, 0.65] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            solutions.
          </motion.span>
        </motion.h2>
      </motion.div>

      <motion.div
        style={{ opacity: opacity3, y: y3, x: x3 }}
        className="absolute right-6 md:right-24 max-w-lg text-right"
      >
        <h2 className="text-4xl md:text-6xl font-medium mb-4 leading-tight tracking-tight">
          Bridging algorithms
          <br />
          <span className="text-gray-400 italic">and engineering.</span>
        </h2>
      </motion.div>

      <motion.div
        style={{ opacity: scrollHintOpacity, y: scrollHintY }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40">
          Scroll
        </span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />
      </motion.div>
    </div>
  );
}
