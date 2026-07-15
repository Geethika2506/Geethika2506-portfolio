"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Network } from "lucide-react";
import HeroMediaFrame from "@/components/HeroMediaFrame";
import ParticleField from "@/components/ParticleField";
import { siteConfig } from "@/lib/site";

const featureCards = [
  {
    icon: Cpu,
    label: "Machine Learning",
    sub: "Models & pipelines",
    accent: "text-cyan-400",
    border: "border-cyan-400/20",
    bg: "bg-cyan-400/5",
  },
  {
    icon: Network,
    label: "AI Systems",
    sub: "LLMs & intelligent apps",
    accent: "text-violet-400",
    border: "border-violet-500/20",
    bg: "bg-violet-500/5",
  },
];

export default function CyberHero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-black pt-20"
    >
      <ParticleField />
      <div className="cyber-grid absolute inset-0 opacity-20" />
      <div className="scanlines pointer-events-none absolute inset-0 opacity-[0.03]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-12 md:px-12 lg:grid-cols-2 lg:gap-16 lg:px-24 lg:py-20">
        {/* Left — video frame */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 lg:order-1"
        >
          <HeroMediaFrame videoSrc={siteConfig.heroVideo} />
        </motion.div>

        {/* Right — copy */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2"
        >
          <p className="font-terminal text-sm tracking-wide text-cyan-400">
            <span className="text-cyan-500/70">&gt;_</span> IDENTITY VERIFIED
          </p>

          <h1 className="font-display mt-4 text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.4rem]">
            Crafting Digital
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              Realities
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-gray-400 md:text-lg">
            Ambitious Computer Science and Artificial Intelligence student with
            a growth mindset and hands-on experience in real-time application
            development. I apply algorithms, AI technologies, and ML engineering
            principles to build intelligent, production-ready systems in
            collaborative teams.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {featureCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className={`rounded-lg border ${card.border} ${card.bg} p-4 backdrop-blur-sm`}
                >
                  <Icon className={`mb-3 h-5 w-5 ${card.accent}`} />
                  <p className="font-terminal text-xs font-semibold uppercase tracking-wider text-white">
                    {card.label}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">{card.sub}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.a
            href={siteConfig.resumePath}
            download
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            whileHover={{ x: 4 }}
            className="font-terminal mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-cyan-400 transition-colors hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Download Full Dossier
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
