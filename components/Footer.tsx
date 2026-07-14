"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Users, Mail, Phone } from "lucide-react";
import {
  AnimatedSection,
  StaggerGrid,
  StaggerItem,
} from "@/components/motion/AnimatedSection";
import { siteConfig } from "@/lib/site";

const socialLinks = [
  { icon: Code2, label: "GitHub", href: siteConfig.github },
  { icon: Users, label: "LinkedIn", href: siteConfig.linkedin },
  { icon: Mail, label: "Email", href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Phone", href: `tel:${siteConfig.phone}` },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 text-white py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <AnimatedSection>
            <h3 className="text-2xl font-bold mb-3">Geethika</h3>
            <p className="text-gray-400 leading-relaxed">
              AI & Full-Stack Developer passionate about building intelligent
              solutions and scalable applications.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {[
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Experience", href: "#experience" },
                { label: "Skills", href: "#skills" },
                { label: "Atlas Case Study", href: "/projects/atlas/", internal: true },
                { label: "Blog", href: "/blog/building-temporal-knowledge-graphs/", internal: true },
              ].map((link) => (
                <li key={link.href}>
                  {link.internal ? (
                    <Link
                      href={link.href}
                      className="inline-block transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 4, color: "#ffffff" }}
                      className="inline-block transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                    >
                      {link.label}
                    </motion.a>
                  )}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-gray-400">
                <motion.a
                  href={`mailto:${siteConfig.email}`}
                  whileHover={{ x: 4, color: "#ffffff" }}
                  className="inline-block transition-colors break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                >
                  {siteConfig.email}
                </motion.a>
              </p>
              <p className="text-gray-400">
                <motion.a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4, color: "#ffffff" }}
                  className="inline-block transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                >
                  linkedin.com/in/geethikareddykonda
                </motion.a>
              </p>
              <p className="text-gray-400">
                <motion.a
                  href={`tel:${siteConfig.phone}`}
                  whileHover={{ x: 4, color: "#ffffff" }}
                  className="inline-block transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                >
                  +34 635 280 385
                </motion.a>
              </p>
            </div>
          </AnimatedSection>
        </div>

        <div className="border-t border-white/10 pt-8">
          <StaggerGrid className="flex justify-center gap-6 mb-8">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <StaggerItem key={link.label}>
                  <motion.a
                    href={link.href}
                    target={link.label === "Email" || link.label === "Phone" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    whileHover={{
                      scale: 1.12,
                      y: -4,
                      backgroundColor: "#ffffff",
                      color: "#000000",
                      borderColor: "#ffffff",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="group w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                </StaggerItem>
              );
            })}
          </StaggerGrid>

          <AnimatedSection delay={0.1}>
            <p className="text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} Geethika. All rights reserved.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </footer>
  );
}
