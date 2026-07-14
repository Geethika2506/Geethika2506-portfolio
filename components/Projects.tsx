"use client";

import Link from "next/link";
import { type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
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

function ProjectCard({ project }: { project: ProjectItem }) {
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
    "group relative flex flex-col h-[440px] p-8 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-md overflow-hidden transition-colors duration-500 hover:border-white/30 hover:bg-white/[0.12] hover:shadow-2xl hover:shadow-white/5";

  const IconComponent = project.icon;

  const content = (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 z-0" />
      <div className="relative z-10 flex justify-between items-start mb-6">
        <motion.div
          whileHover={{ rotate: 8, scale: 1.08 }}
          className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center"
        >
          <IconComponent className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
        </motion.div>
        <div className="flex flex-col items-end gap-2">
          {project.inProgress && (
            <span className="px-3 py-1 rounded-full text-xs font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/20">
              In Progress
            </span>
          )}
          <span className="px-3 py-1 rounded-full text-xs font-mono text-gray-300 bg-white/5 border border-white/10">
            {project.year}
          </span>
        </div>
      </div>
      <div className="relative z-10 flex flex-col flex-grow justify-between">
        <div>
          <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-2">
            {project.category}
          </p>
          <h3 className="text-2xl font-semibold tracking-tight mb-1">{project.title}</h3>
          {project.subtitle && (
            <p className="text-sm text-gray-400 italic mb-3">{project.subtitle}</p>
          )}
          <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
            {project.description}
          </p>
          {project.highlight && (
            <p className="mt-3 text-xs font-mono text-emerald-400/90 border-l-2 border-emerald-500/40 pl-3">
              {project.highlight}
            </p>
          )}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-6 border-t border-white/10">
          <span className="text-xs text-gray-500">
            {project.inProgress ? "Whitehole · AI Research" : "Open source"}
          </span>
          <div className="flex items-center gap-2">
            {project.caseStudy && (
              <Link
                href={project.caseStudy}
                className="text-xs px-3 py-1.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Case study
              </Link>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo: ${project.title}`}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.link && (
              <span className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
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
      className="min-h-screen bg-[#121212] text-white py-24 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500 mb-4">
            Work
          </p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Current Work
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            AI research and engineering at Whitehole — Jul to Dec 2026.
          </p>
        </AnimatedSection>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {currentWork.map((project) => (
            <StaggerItem key={project.title}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerGrid>

        <AnimatedSection className="mb-16">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Selected open-source work across AI, computer vision, and machine learning.
          </p>
        </AnimatedSection>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <StaggerItem key={project.title}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerGrid>

        <AnimatedSection>
          <motion.a
            href={siteConfig.githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.04] px-8 py-5 text-gray-300 hover:text-white hover:border-white/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Code2 className="w-5 h-5" />
            <span>
              <span className="block font-semibold text-white">More on GitHub</span>
              <span className="text-sm text-gray-500">
                11+ additional projects including full-stack, RL, and mobile apps
              </span>
            </span>
            <ArrowUpRight className="w-5 h-5 ml-4" />
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
