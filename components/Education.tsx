"use client";

import { GraduationCap } from "lucide-react";
import { AnimatedSection } from "@/components/motion/AnimatedSection";

export default function Education() {
  return (
    <section className="cyber-section text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400/70 mb-4">
            Education
          </p>
          <div className="flex flex-col md:flex-row md:items-center gap-6 rounded-xl cyber-card p-8">
            <div className="w-14 h-14 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center shrink-0">
              <GraduationCap className="w-7 h-7 text-cyan-300" />
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-semibold">IE University</h3>
              <p className="text-lg text-violet-200/80 mt-1">
                BSc Computer Science & Artificial Intelligence
              </p>
              <p className="text-sm font-mono text-violet-400/60 mt-2 uppercase tracking-wider">
                Madrid, Spain · Expected 2027
              </p>
            </div>
            <div className="text-sm text-violet-200/60 md:text-right max-w-xs">
              Coursework in ML, NLP, computer vision, algorithms, and software
              engineering with hands-on AI project work.
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
