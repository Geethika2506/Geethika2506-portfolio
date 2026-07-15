"use client";

import { motion } from "framer-motion";
import {
  AnimatedSection,
  StaggerGrid,
  StaggerItem,
} from "@/components/motion/AnimatedSection";

const experiences = [
  {
    role: "AI Research Intern",
    company: "Whitehole",
    location: "San Sebastian, Spain",
    date: "Jul 2026 – Dec 2026",
    description:
      "Contributing to AI-powered platforms spanning knowledge graphs, agentic reporting, private equity workflows, decision governance, and quantitative trading infrastructure.",
    projects: [
      {
        name: "Atlas Core",
        description:
          "Transforms unstructured news into a temporal Neo4j knowledge graph — GPT extraction, entity resolution, near-real-time graph updates, and MCP-based natural-language querying.",
      },
      {
        name: "Mercurio",
        description:
          "Conversational report app that turns natural-language briefs into traceable executive HTML reports via multi-agent planning, multi-source evidence collection, and LLM quality validation.",
      },
      {
        name: "Cerberos",
        description:
          "Private equity dealflow platform — LLM-assisted teaser intake, NDA-gated access, investment screening, company matching, and Mercurio-powered research through Teaser → Research → Thesis → Fund raising.",
      },
      {
        name: "Aegis",
        description:
          "Decision quality system for executive committees — structured proposals, AI-generated discussion checklists, post-mortem learning, and Decision Quality Score (DQS) metrics.",
      },
      {
        name: "Equity Curve Lifecycle",
        description:
          "Versioning and governance for discretionary trading strategy equity curves — Beta / Prod / Deprecated / Retired lifecycle, change traceability, and named sign-off workflows.",
      },
    ],
  },
  {
    role: "AI and Software Engineering Intern",
    company: "SILK Cashback",
    location: "Madrid, Spain",
    date: "Feb 2026 – April 2026",
    description:
      "Diagnosed and resolved bugs across a Python/FastAPI backend and Flutter frontend. Built and deployed an AI-powered product recommendation chatbot using LangChain and LLMs.",
  },
  {
    role: "Technical Coordinator",
    company: "IE Coding Club",
    location: "Madrid, Spain",
    date: "Oct 2025 – Present",
    description:
      "Coordinated technical workshops focusing on AI and programming. Supported peer project development and debugging initiatives.",
  },
  {
    role: "Data Sourcing & AI Development Intern",
    company: "Exprs Techno Logistics",
    location: "Hyderabad, India",
    date: "Jun 2025 – Aug 2025",
    description:
      "Improved search by organizing sponsor data and using prompt engineering. Refined UI content flows based on user feedback to increase usability.",
  },
];

const skills = [
  "Python",
  "SQL",
  "Java",
  "C",
  "Machine Learning",
  "Deep Learning",
  "Generative AI",
  "Prompt Engineering",
  "NLP",
  "Computer Vision",
  "Recommendation Systems",
  "Knowledge Graphs",
  "Neo4j",
  "MongoDB",
  "Entity Resolution",
  "LLMs",
  "Agentic AI",
  "FastAPI",
  "Flutter",
  "Git",
  "AWS",
  "Azure",
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="cyber-section text-white py-24 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
              Experience
            </h2>
          </AnimatedSection>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <AnimatedSection key={exp.role + exp.company} delay={idx * 0.06}>
                <div className="relative pl-6 border-l border-violet-500/30 group">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + idx * 0.05, type: "spring", stiffness: 320, damping: 20 }}
                    className={`absolute w-3 h-3 rounded-full -left-[6.5px] top-2 ${
                      idx === 0
                        ? "bg-cyan-400 shadow-[0_0_12px_rgba(0,212,255,0.8)]"
                        : "bg-violet-400/80"
                    }`}
                  />
                  {idx === 0 && (
                    <motion.div
                      className="absolute w-3 h-3 rounded-full -left-[6.5px] top-2 bg-cyan-400"
                      animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ repeat: Infinity, duration: 2.4 }}
                    />
                  )}
                  <h3 className="text-2xl font-semibold group-hover:text-white transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-violet-200/80 mt-1">
                    {exp.company} — {exp.location}
                  </p>
                  <p className="text-sm font-mono text-violet-400/60 mt-2 mb-4 uppercase tracking-wider">
                    {exp.date}
                  </p>
                  <p className="text-violet-200/60 leading-relaxed">{exp.description}</p>
                  {"projects" in exp && exp.projects && (
                    <ul className="mt-5 space-y-3">
                      {exp.projects.map((project, pIdx) => (
                        <motion.li
                          key={project.name}
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.08 + pIdx * 0.05 }}
                          whileHover={{ x: 6, borderColor: "rgba(0,212,255,0.35)" }}
                          className="rounded-xl cyber-card p-4 transition-colors hover:bg-violet-950/40 cursor-default"
                        >
                          <p className="text-sm font-semibold text-white">
                            {project.name}
                          </p>
                          <p className="mt-1.5 text-sm text-violet-200/60 leading-relaxed">
                            {project.description}
                          </p>
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <div id="skills">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
              Skills & Tech
            </h2>
          </AnimatedSection>

          <StaggerGrid className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <StaggerItem key={skill}>
                <motion.span
                  whileHover={{
                    scale: 1.06,
                    backgroundColor: "rgba(0, 212, 255, 0.12)",
                    borderColor: "rgba(0, 212, 255, 0.35)",
                    color: "#67e8f9",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-block px-5 py-3 rounded-lg bg-violet-950/40 border border-violet-500/25 text-violet-200/80 text-sm font-medium cursor-default"
                >
                  {skill}
                </motion.span>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </div>
    </section>
  );
}
