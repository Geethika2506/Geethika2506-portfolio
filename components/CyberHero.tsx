"use client";

import { motion } from "framer-motion";
import { Download, Radio } from "lucide-react";
import ParticleField from "@/components/ParticleField";
import { siteConfig } from "@/lib/site";

const words = "Geethika Reddy Konda".split(" ");

export default function CyberHero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-cyber-bg pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#12082a]/80 via-[#0a0612] to-[#0a0612]" />
      <div className="cyber-grid absolute inset-0 opacity-40" />
      <ParticleField />
      <div className="scanlines pointer-events-none absolute inset-0 opacity-[0.04]" />

      {/* HUD corners */}
      <div className="pointer-events-none absolute inset-6 md:inset-10">
        <div className="absolute left-0 top-0 h-12 w-12 border-l-2 border-t-2 border-cyan-400/50" />
        <div className="absolute right-0 top-0 h-12 w-12 border-r-2 border-t-2 border-cyan-400/50" />
        <div className="absolute bottom-0 left-0 h-12 w-12 border-b-2 border-l-2 border-violet-500/50" />
        <div className="absolute bottom-0 right-0 h-12 w-12 border-b-2 border-r-2 border-violet-500/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-300/90"
        >
          <Radio className="h-3 w-3 animate-pulse text-cyan-400" />
          Command Center · Online
        </motion.div>

        <h1 className="mb-4 flex flex-wrap justify-center gap-x-3 gap-y-1 text-4xl font-bold tracking-tighter md:text-7xl">
          {words.map((word, i) => (
            <motion.span
              key={word + i}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15 + i * 0.08,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="neon-text bg-gradient-to-b from-white via-cyan-100 to-violet-300 bg-clip-text text-transparent"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="text-lg font-light tracking-wide text-violet-200/80 md:text-2xl"
        >
          CS & AI · IE University · Whitehole
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="mx-auto mt-4 max-w-xl text-sm text-violet-300/60 md:text-base"
        >
          AI/ML Engineer · FDE · Software Engineering · Full Stack
        </motion.p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <motion.a
            href="#projects"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.45 }}
            whileHover={{ scale: 1.03, boxShadow: "0 0 24px rgba(0,212,255,0.35)" }}
            className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/50 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-100 backdrop-blur-sm transition-colors hover:border-cyan-300 hover:bg-cyan-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Unlock missions
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
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-shadow hover:shadow-cyan-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          >
            <Download className="h-4 w-4" />
            Download dossier
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-violet-400/50">
            Move cursor to interact
          </span>
          <motion.div
            className="h-10 w-px bg-gradient-to-b from-cyan-400/60 to-transparent"
            animate={{ scaleY: [1, 0.4, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            style={{ originY: 0 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
