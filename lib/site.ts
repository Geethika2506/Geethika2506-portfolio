export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix public asset paths for GitHub Pages subpath hosting. */
export function assetPath(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

export const siteConfig = {
  name: "Geethika Reddy Konda",
  title: "Geethika Reddy Konda | AI & Software Engineer",
  description:
    "CS & AI student at IE University building knowledge graphs, agentic AI systems, and full-stack applications. AI Research Intern at Whitehole.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://geethika2506.github.io/Geethika2506-portfolio",
  github: "https://github.com/Geethika2506",
  linkedin: "https://www.linkedin.com/in/geethikareddykonda/",
  email: "gkonda.ieu2023@student.ie.edu",
  phone: "+34635280385",
  get resumePath() {
    return assetPath("/resume.pdf");
  },
  githubProfile: "https://github.com/Geethika2506",
};

export const navSections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
] as const;
