"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Palette, Mic2, Plane, Trophy, type LucideIcon } from "lucide-react";
import {
  AnimatedSection,
  StaggerGrid,
  StaggerItem,
} from "@/components/motion/AnimatedSection";
import { campusActivities } from "@/lib/campus-activities";
import { assetPath } from "@/lib/site";

type Activity = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  imagePosition?: string;
};

const personalActivities: Activity[] = [
  {
    title: "Travelling",
    description:
      "Exploring coastlines, cities, and new cultures beyond campus.",
    image: "/interests/travelling.png",
    icon: Plane,
    imagePosition: "85% 55%",
  },
  {
    title: "Badminton",
    description:
      "Competitive and recreational play — focus, reflexes, and staying active.",
    image: "/interests/badminton.png",
    icon: Trophy,
    imagePosition: "50% 55%",
  },
  {
    title: "Art",
    description:
      "Gallery visits, installations, and visual creativity outside engineering.",
    image: "/interests/art.png",
    icon: Palette,
  },
  {
    title: "Entrepreneurship",
    description:
      "IE startup ecosystem — panels, founders, and building with impact.",
    image: "/interests/entrepreneurship.png",
    icon: Mic2,
  },
];

function CampusActivityCard({
  title,
  description,
  date,
  icon: Icon,
  highlight,
  index,
}: (typeof campusActivities)[number] & { index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06 }}
      whileHover={{ x: 6 }}
      className="relative rounded-xl cyber-card border-violet-500/25 p-6 transition-colors hover:border-cyan-400/30"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/10">
          <Icon className="h-5 w-5 text-cyan-300" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            {highlight && (
              <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-300">
                {highlight}
              </span>
            )}
          </div>
          <p className="font-mono text-[11px] uppercase tracking-wider text-violet-400/70">
            {date}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-violet-200/65">
            {description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function ActivityCard({
  title,
  description,
  image,
  icon: Icon,
  imagePosition = "center",
}: Activity) {
  const [hasImage, setHasImage] = useState(true);

  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="group relative h-[320px] w-full overflow-hidden rounded-xl border border-violet-500/25 bg-violet-950/20 cyber-card"
    >
      <div className="absolute inset-0">
        {hasImage ? (
          <Image
            src={assetPath(image)}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ objectPosition: imagePosition }}
            sizes="(max-width: 768px) 100vw, 50vw"
            onError={() => setHasImage(false)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-white/[0.02]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end p-6">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-sm">
          <Icon className="h-5 w-5 text-cyan-300" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-300">
          {description}
        </p>
      </div>
    </motion.article>
  );
}

export default function Extracurricular() {
  return (
    <section
      id="interests"
      className="cyber-section text-white py-24 px-6 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mb-12">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-cyan-400/70">
            Campus & Leadership
          </p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            IE University Initiatives
          </h2>
          <p className="max-w-2xl text-violet-200/60">
            Mentorship, sustainability, entrepreneurship, and community building
            across IE University.
          </p>
        </AnimatedSection>

        <div className="mb-24 space-y-4">
          {campusActivities.map((activity, i) => (
            <CampusActivityCard key={activity.title} {...activity} index={i} />
          ))}
        </div>

        <AnimatedSection className="mb-12">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-cyan-400/70">
            Beyond code
          </p>
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Extracurricular Activities
          </h2>
          <p className="max-w-2xl text-violet-200/60">
            Sports, travel, art, and the IE entrepreneurship community — how I
            recharge and stay inspired.
          </p>
        </AnimatedSection>

        <StaggerGrid className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {personalActivities.map((activity) => (
            <StaggerItem key={activity.title} className="h-[320px]">
              <ActivityCard {...activity} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
