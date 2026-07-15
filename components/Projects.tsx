"use client";

import { type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import LevelCaseStudy from "@/components/LevelCaseStudy";
import {
  AnimatedSection,
  StaggerGrid,
  StaggerItem,
} from "@/components/motion/AnimatedSection";
import {
  currentWork,
  featuredProjects,
  type ProjectItem,
} from "@/lib/projects";
import { siteConfig } from "@/lib/site";

function BonusProjectCard({ project }: { project: ProjectItem }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 260, damping: 22 });
  const springY = useSpring(rotateY, { stiffness: 260, damping: 22 });

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(x * 14);
    rotateX.set(-y * 14);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const cardClassName =
    "group relative flex flex-col h-[440px] p-8 rounded-xl cyber-card border-violet-500/25 overflow-hidden transition-colors duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(0,212,255,0.08)]";

  const IconComponent = project.icon;

  const content = (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-violet-600/5 via-transparent to-[#0a0612]/60 z-0" />
      <div className="relative z-10 flex justify-between items-start mb-6">
        <motion.div
          whileHover={{ rotate: 8, scale: 1.08 }}
          className="w-12 h-12 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center"
        >
          <IconComponent className="w-6 h-6 text-cyan-300 group-hover:text-cyan-200 transition-colors" />
        </motion.div>
        <span className="px-3 py-1 rounded font-mono text-xs text-violet-300 bg-violet-500/10 border border-violet-500/25">
          {project.year}
        </span>
      </div>
      <div className="relative z-10 flex flex-col flex-grow justify-between">
        <div>
          <p className="text-violet-400/70 font-mono text-xs uppercase tracking-widest mb-2">
            {project.category}
          </p>
          <h3 className="text-2xl font-semibold tracking-tight mb-1 text-white">{project.title}</h3>
          {project.subtitle && (
            <p className="text-sm text-cyan-300/60 italic mb-3">{project.subtitle}</p>
          )}
          <p className="text-sm text-violet-200/60 leading-relaxed line-clamp-3">
            {project.description}
          </p>
          {project.highlight && (
            <p className="mt-3 text-xs font-mono text-emerald-400/90 border-l-2 border-emerald-400/40 pl-3">
              {project.highlight}
            </p>
          )}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-6 border-t border-violet-500/20">
          <span className="text-xs text-violet-400/50">Open source</span>
          <div className="flex items-center gap-2">
            {project.link && (
              <span className="w-9 h-9 rounded-lg border border-cyan-400/30 flex items-center justify-center group-hover:bg-cyan-400/20 group-hover:text-cyan-100 transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );

  const motionProps = {
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    style: { rotateX: springX, rotateY: springY, transformPerspective: 900 },
    whileHover: { y: -6 },
    transition: { type: "spring" as const, stiffness: 260, damping: 22 },
  };

  if (project.link) {
    return (
      <motion.a
        {...motionProps}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClassName}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.article {...motionProps} className={cardClassName}>
      {content}
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen cyber-section text-white py-24 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400/70 mb-4">
            Mission Select
          </p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 neon-text">
            Active Missions
          </h2>
          <p className="text-xl text-violet-200/60 max-w-2xl">
            Whitehole research & engineering — click a level to unlock the trailer
            and mission briefing.
          </p>
        </AnimatedSection>

        <div className="space-y-4 mb-24">
          {currentWork.map((project, i) => (
            <LevelCaseStudy key={project.title} project={project} index={i} />
          ))}
        </div>

        <AnimatedSection className="mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-violet-400/70 mb-4">
            Bonus Levels
          </p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-violet-200/60 max-w-2xl">
            Selected open-source work across AI, computer vision, and machine learning.
          </p>
        </AnimatedSection>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <StaggerItem key={project.title}>
              <BonusProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerGrid>

        <AnimatedSection>
          <motion.a
            href={siteConfig.githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            className="inline-flex items-center gap-3 rounded-xl border border-violet-500/30 bg-violet-950/30 px-8 py-5 text-violet-200 hover:text-white hover:border-cyan-400/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <Code2 className="w-5 h-5 text-cyan-400" />
            <span>
              <span className="block font-semibold text-white">More on GitHub</span>
              <span className="text-sm text-violet-400/60">
                11+ additional projects including full-stack, RL, and mobile apps
              </span>
            </span>
            <ArrowUpRight className="w-5 h-5 ml-4 text-cyan-400" />
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
