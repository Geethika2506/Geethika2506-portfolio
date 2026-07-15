export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix public asset paths for GitHub Pages subpath hosting. */
export function assetPath(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

export const siteConfig = {
  name: "Geethika Reddy Konda",
  title: "Geethika Reddy Konda | AI/ML Engineer",
  description:
    "Ambitious Computer Science and Artificial Intelligence student with a growth mindset and hands-on experience in real-time application development. I apply algorithms, AI technologies, and ML engineering principles to build intelligent, production-ready systems in collaborative teams.",
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
  get heroVideo() {
    return assetPath("/hero.mp4");
  },
  githubProfile: "https://github.com/Geethika2506",
};

export const navSections = [
  { id: "about", label: "Bio-Link", shortLabel: "About" },
  { id: "projects", label: "Data Archives", shortLabel: "Projects" },
  { id: "experience", label: "Mission Log", shortLabel: "Experience" },
  { id: "skills", label: "Tech Stack", shortLabel: "Skills" },
] as const;
