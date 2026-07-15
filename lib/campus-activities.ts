import {
  Globe,
  Headset,
  Leaf,
  Rocket,
  Users,
  type LucideIcon,
} from "lucide-react";

export type CampusActivity = {
  title: string;
  description: string;
  date: string;
  icon: LucideIcon;
  highlight?: string;
};

export const campusActivities: CampusActivity[] = [
  {
    title: "IE Sustainability Lab",
    description:
      "Proposed ESG data model in collaboration with Designit (Wipro) for impact measurement.",
    date: "Jun 2023",
    icon: Leaf,
  },
  {
    title: "IEU Mentor",
    description: "Assisted incoming IE students with onboarding and campus transition.",
    date: "2024 – 2025",
    icon: Users,
  },
  {
    title: "IE Shadowing",
    description:
      "Collaborated on VR initiatives, supported campus events, and conducted surveys to improve student experience.",
    date: "Sep 2024 – 2025",
    icon: Headset,
  },
  {
    title: "IE India Club",
    description:
      "Organised cultural and networking events, managed social media, and designed marketing materials at IE University.",
    date: "2023 – 2026",
    icon: Globe,
  },
  {
    title: "IE Venture Bootcamp",
    description: "Co-developed and pitched a startup idea; selected runner-up in Venture Bootcamp.",
    date: "Apr 2025",
    icon: Rocket,
    highlight: "Runner-up",
  },
];
