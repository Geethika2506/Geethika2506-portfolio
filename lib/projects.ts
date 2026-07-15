import {
  Brain,
  Briefcase,
  Code2,
  Cpu,
  FileText,
  Network,
  Scale,
  TrendingUp,
  Zap,
} from "lucide-react";

export const currentWork = [
  {
    title: "Atlas Core",
    subtitle: "AI knowledge graph pipeline",
    category: "Knowledge Graph · AI Research",
    description:
      "Transforms unstructured news into a temporal Neo4j graph with GPT extraction, entity resolution, Wikidata linking, and MCP-based querying.",
    highlight: "Temporal graph pipeline with MCP natural-language querying",
    year: "2026",
    icon: Network,
    inProgress: true,
    caseStudy: "/projects/atlas",
    level: 1,
    progress: 72,
    unlocked: true,
  },
  {
    title: "Mercurio",
    subtitle: "AI executive report generator",
    category: "Agentic AI · Reporting",
    description:
      "Conversational app that turns natural-language briefs into traceable HTML reports via multi-agent planning and quality validation.",
    highlight: "Multi-agent planning with traceable executive reports",
    year: "2026",
    icon: FileText,
    inProgress: true,
    level: 2,
    progress: 58,
    unlocked: true,
  },
  {
    title: "Cerberos",
    subtitle: "Private equity dealflow platform",
    category: "Private Equity · LLM Workflow",
    description:
      "PE workflow for teaser intake, NDA-gated screening, company matching, and Mercurio-powered research across the deal lifecycle.",
    highlight: "End-to-end PE dealflow from teaser to thesis",
    year: "2026",
    icon: Briefcase,
    inProgress: true,
    level: 3,
    progress: 45,
    unlocked: true,
  },
  {
    title: "Aegis",
    subtitle: "Executive decision quality tool",
    category: "Decision Intelligence",
    description:
      "Structured decision proposals with AI-generated committee checklists, post-mortem learning, and Decision Quality Score metrics.",
    highlight: "Decision Quality Score metrics for executive committees",
    year: "2026",
    icon: Scale,
    inProgress: true,
    level: 4,
    progress: 38,
    unlocked: true,
  },
  {
    title: "Equity Curve Lifecycle",
    subtitle: "Trading strategy governance",
    category: "Quantitative Trading · Data Engineering",
    description:
      "Versioning system for strategy equity curves with Beta / Prod / Deprecated / Retired states and full change traceability.",
    highlight: "Full lifecycle governance for trading strategy curves",
    year: "2026",
    icon: TrendingUp,
    inProgress: true,
    level: 5,
    progress: 52,
    unlocked: true,
  },
];

export const featuredProjects = [
  {
    title: "Intelligent Exam Proctoring",
    subtitle: "Computer vision monitoring system",
    category: "Computer Vision",
    description:
      "CV system using object detection and head-pose estimation to flag unauthorized devices and gaze deviations during exams.",
    highlight: "Multi-signal detection pipeline for real-time proctoring",
    year: "2026",
    link: "https://github.com/Geethika2506/-Computer-Vision-Proctoring-System",
    icon: Cpu,
  },
  {
    title: "AI Skincare Recommendation",
    subtitle: "ML recommendation chatbot",
    category: "Machine Learning",
    description:
      "Personalized skincare suggestions using user behavior analysis, predictive modeling, and a conversational interface.",
    highlight: "Behavior-driven recommendations with chatbot UX",
    year: "2026",
    link: "https://github.com/Geethika2506/SkinCares",
    icon: Brain,
  },
  {
    title: "NLP Research",
    subtitle: "LLM reliability study",
    category: "LLMs & Transformers",
    description:
      "Analyzed alignment drift and failure modes in large language models to improve robustness and reliability.",
    highlight: "Systematic evaluation of LLM failure modes",
    year: "2026",
    link: "https://github.com/Geethika2506/NLP-project",
    icon: Zap,
  },
  {
    title: "Credit Card Fraud Detection",
    subtitle: "Imbalanced classification model",
    category: "Machine Learning",
    description:
      "Machine learning pipeline to detect fraudulent credit card transactions on highly imbalanced financial data.",
    highlight: "Built for skewed real-world transaction data",
    year: "2023",
    link: "https://github.com/Geethika2506/Creditcard-fraud-detection-Machine-Learning-final-project",
    icon: Brain,
  },
];

export type ProjectItem = {
  title: string;
  subtitle?: string;
  category: string;
  description: string;
  highlight?: string;
  year: string;
  icon: typeof Brain;
  link?: string;
  liveDemo?: string;
  inProgress?: boolean;
  caseStudy?: string;
  level?: number;
  progress?: number;
  unlocked?: boolean;
  trailerUrl?: string;
  trailerPoster?: string;
};
