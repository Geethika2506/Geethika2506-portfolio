"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ExternalLink,
  Lock,
  Play,
  Unlock,
} from "lucide-react";
import type { ProjectItem } from "@/lib/projects";

function TrailerPanel({ project }: { project: ProjectItem }) {
  const Icon = project.icon;

  if (project.trailerUrl) {
    return (
      <video
        src={project.trailerUrl}
        controls
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover"
        poster={project.trailerPoster}
      />
    );
  }

  return (
    <div className="relative flex h-full min-h-[220px] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a0a2e] via-[#0d0820] to-[#051525]">
      <div className="cyber-grid absolute inset-0 opacity-30" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
        animate={{ x: ["-100%", "200%"] }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
      />
      <div className="relative z-10 flex flex-col items-center gap-4 px-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 shadow-[0_0_30px_rgba(0,212,255,0.2)]">
          <Icon className="h-8 w-8 text-cyan-300" />
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400/80">
          Mission briefing · {project.title}
        </p>
        <p className="max-w-md text-sm leading-relaxed text-violet-200/70">
          {project.description}
        </p>
      </div>
    </div>
  );
}

export default function LevelCaseStudy({
  project,
  index,
}: {
  project: ProjectItem;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const levelNum = (project.level ?? index + 1).toString().padStart(2, "0");
  const progress = project.progress ?? (project.inProgress ? 55 : 100);
  const unlocked = project.unlocked !== false;
  const Icon = project.icon;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06 }}
      className={`group relative overflow-hidden rounded-xl border backdrop-blur-md transition-colors ${
        unlocked
          ? "border-violet-500/30 bg-violet-950/20 hover:border-cyan-400/40"
          : "border-violet-900/40 bg-violet-950/10 opacity-70"
      }`}
    >
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 via-violet-500 to-transparent opacity-60" />

      <button
        type="button"
        disabled={!unlocked}
        onClick={() => unlocked && setExpanded((v) => !v)}
        className="flex w-full items-start gap-4 p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-inset disabled:cursor-not-allowed"
        aria-expanded={expanded}
      >
        <div
          className={`flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg border font-mono text-xs ${
            unlocked
              ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-300"
              : "border-violet-700/50 bg-violet-900/30 text-violet-500"
          }`}
        >
          <span className="text-[9px] uppercase tracking-wider opacity-60">Lvl</span>
          <span className="text-lg font-bold">{levelNum}</span>
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            {unlocked ? (
              <Unlock className="h-3.5 w-3.5 text-emerald-400" />
            ) : (
              <Lock className="h-3.5 w-3.5 text-violet-500" />
            )}
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-400/70">
              {project.category}
            </span>
            {project.inProgress && (
              <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-300">
                Active
              </span>
            )}
          </div>

          <h3 className="text-xl font-semibold text-white md:text-2xl">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="mt-0.5 text-sm italic text-cyan-300/70">{project.subtitle}</p>
          )}

          <div className="mt-4">
            <div className="mb-1.5 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-violet-400/60">
              <span>Mission progress</span>
              <span className="text-cyan-300">{progress}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-violet-950/80 ring-1 ring-violet-500/20">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + index * 0.08, ease: "easeOut" }}
                className="relative h-full rounded-full bg-gradient-to-r from-violet-600 via-cyan-400 to-emerald-400"
              >
                <div className="absolute inset-0 animate-pulse bg-white/20" />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-center gap-2 pt-1">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-900/30">
            <Icon className="h-5 w-5 text-violet-300" />
          </div>
          {unlocked && (
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.25 }}
            >
              <ChevronDown className="h-5 w-5 text-cyan-400/70" />
            </motion.div>
          )}
        </div>
      </button>

      <AnimatePresence>
        {expanded && unlocked && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-violet-500/20"
          >
            <div className="p-4 pt-0 md:p-6 md:pt-0">
              <div className="mb-4 overflow-hidden rounded-lg border border-cyan-400/20 ring-1 ring-violet-500/10">
                <div className="flex items-center gap-2 border-b border-violet-500/20 bg-violet-950/40 px-4 py-2">
                  <Play className="h-3.5 w-3.5 fill-cyan-400 text-cyan-400" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300/80">
                    Trailer · Click to expand
                  </span>
                </div>
                <TrailerPanel project={project} />
              </div>

              {project.highlight && (
                <p className="mb-4 border-l-2 border-emerald-400/50 pl-3 font-mono text-xs text-emerald-300/90">
                  {project.highlight}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-3">
                {project.caseStudy && (
                  <Link
                    href={project.caseStudy}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-violet-400/40 bg-violet-500/10 px-4 py-2 text-xs font-semibold text-violet-100 transition-colors hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    Full case study
                  </Link>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-400/30 px-4 py-2 text-xs text-cyan-200 transition-colors hover:bg-cyan-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    Live demo
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-violet-500/30 px-4 py-2 text-xs text-violet-200 transition-colors hover:bg-violet-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                  >
                    Source code
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
