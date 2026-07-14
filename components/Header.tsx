"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Users, Mail, Menu, X, Download } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { navSections, siteConfig } from "@/lib/site";

const socialLinks = [
  { icon: Code2, href: siteConfig.github, label: "GitHub" },
  { icon: Users, href: siteConfig.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
];

function NavLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`group relative text-sm font-medium py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm ${
        active ? "text-white" : "text-gray-300 hover:text-white"
      }`}
    >
      {label}
      <span
        className={`absolute -bottom-0.5 left-0 h-px bg-white transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </a>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(navSections.map((s) => s.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
          scrolled
            ? "bg-[#121212]/95 backdrop-blur-xl border-white/15 shadow-lg shadow-black/20"
            : "bg-[#121212]/70 backdrop-blur-md border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-4 flex justify-between items-center gap-4">
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="text-2xl font-bold hover:text-gray-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
          >
            Geethika
          </motion.a>

          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex gap-6" aria-label="Main">
              {navSections.map((link) => (
                <NavLink
                  key={link.id}
                  href={`#${link.id}`}
                  label={link.label}
                  active={active === link.id}
                />
              ))}
            </nav>

            <a
              href={siteConfig.resumePath}
              download
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold text-white hover:bg-white hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>

            <div className="flex gap-4 pl-4 border-l border-white/10">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <motion.button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            whileTap={{ scale: 0.92 }}
            onClick={() => setMenuOpen((open) => !open)}
            className="lg:hidden text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              onClick={(e) => e.stopPropagation()}
              aria-label="Mobile"
              className="absolute right-0 top-0 h-full w-[min(88vw,320px)] bg-[#0f0f0f] border-l border-white/10 p-8 pt-24 flex flex-col gap-8"
            >
              <div className="flex flex-col gap-5">
                {navSections.map((link, i) => (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06 }}
                    onClick={() => setMenuOpen(false)}
                    className={`text-2xl font-medium transition-colors ${
                      active === link.id ? "text-white" : "text-gray-200 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <a
                href={siteConfig.resumePath}
                download
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-5 py-3 text-sm font-semibold"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>

              <div className="flex gap-5 pt-4 border-t border-white/10">
                {socialLinks.map((link, i) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:border-white/40 transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
