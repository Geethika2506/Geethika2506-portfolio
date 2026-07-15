"use client";

import { motion } from "framer-motion";
import { Download, MapPin, Target } from "lucide-react";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { siteConfig } from "@/lib/site";

export default function About() {
  return (
    <section
      id="about"
      className="cyber-section text-white py-24 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <AnimatedSection>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400/70 mb-4">
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Building intelligent systems that scale
          </h2>
          <div className="space-y-4 text-violet-200/60 leading-relaxed">
            <p>
              I&apos;m a Computer Science & AI student at{" "}
              <strong className="text-cyan-200/90">IE University</strong> in Madrid,
              focused on knowledge graphs, agentic AI, and production-grade
              software engineering.
            </p>
            <p>
              As an <strong className="text-cyan-200/90">AI Research Intern at Whitehole</strong>,
              I work across Atlas Core, Mercurio, Cerberos, Aegis, and quantitative
              trading infrastructure — bridging research prototypes and real
              deployments.
            </p>
            <p>
              I&apos;m looking for{" "}
              <strong className="text-cyan-200/90">software engineering roles</strong>{" "}
              where I can ship systems that are rigorous, traceable, and useful.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="rounded-xl cyber-card p-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center shrink-0">
                <Target className="w-5 h-5 text-cyan-300" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Target roles</h3>
                <p className="text-sm text-violet-200/60">
                  AI/ML Engineer · FDE · Software Engineering · Full Stack
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/30 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-violet-300" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Location</h3>
                <p className="text-sm text-violet-200/60">
                  Madrid, Spain · Open to EU roles & remote
                </p>
              </div>
            </div>
            <motion.a
              href={siteConfig.resumePath}
              download
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white hover:shadow-[0_0_20px_rgba(0,212,255,0.25)] transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
