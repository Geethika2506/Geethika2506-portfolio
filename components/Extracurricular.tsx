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

type Activity = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  imagePosition?: string;
};

const activities: Activity[] = [
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
      className="group relative h-[320px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
    >
      <div className="absolute inset-0">
        {hasImage ? (
          <Image
            src={image}
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
        <div className="mb-3 w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm">
          <Icon className="w-5 h-5 text-white/80" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-gray-300 leading-relaxed line-clamp-2">
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
      className="bg-[#121212] text-white py-24 px-6 md:px-12 lg:px-24 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="mb-12">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500 mb-4">
            Beyond code
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Extracurricular Activities
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Sports, travel, art, and the IE entrepreneurship community — how I
            recharge and stay inspired.
          </p>
        </AnimatedSection>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {activities.map((activity) => (
            <StaggerItem key={activity.title} className="h-[320px]">
              <ActivityCard {...activity} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
