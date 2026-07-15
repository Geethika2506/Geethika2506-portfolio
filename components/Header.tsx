"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Users, Mail, Menu, X, Hexagon } from "lucide-react";
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
      className={`font-terminal text-xs uppercase tracking-[0.15em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm ${
        active ? "text-cyan-400" : "text-gray-400 hover:text-cyan-300"
      }`}
    >
      {label}
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
            ? "border-violet-500/20 bg-black/90 backdrop-blur-xl"
            : "border-transparent bg-black/40 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 md:px-12 lg:px-24">
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm"
          >
            <Hexagon className="h-5 w-5 fill-cyan-400/20 text-cyan-400" strokeWidth={1.5} />
            <span className="font-display text-sm font-bold uppercase tracking-[0.12em] text-white md:text-base">
              Geethika
            </span>
          </motion.a>

          <div className="hidden items-center gap-8 lg:flex">
            <nav className="flex gap-8" aria-label="Main">
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
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-terminal rounded border border-cyan-400/50 px-5 py-2 text-xs uppercase tracking-[0.15em] text-cyan-400 transition-colors hover:bg-cyan-400/10 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Connect
            </a>
          </div>

          <motion.button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            whileTap={{ scale: 0.92 }}
            onClick={() => setMenuOpen((open) => !open)}
            className="text-gray-400 transition-colors hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 lg:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              onClick={(e) => e.stopPropagation()}
              aria-label="Mobile"
              className="absolute right-0 top-0 flex h-full w-[min(88vw,320px)] flex-col gap-8 border-l border-violet-500/25 bg-black p-8 pt-24"
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
                    className={`font-terminal text-lg uppercase tracking-wider transition-colors ${
                      active === link.id ? "text-cyan-400" : "text-gray-300 hover:text-cyan-300"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="font-terminal inline-flex items-center justify-center rounded border border-cyan-400/50 px-5 py-3 text-sm uppercase tracking-wider text-cyan-400"
              >
                Connect
              </a>

              <div className="flex gap-5 border-t border-violet-500/20 pt-4">
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
                      className="flex h-11 w-11 items-center justify-center rounded-lg border border-violet-500/30 text-violet-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
                    >
                      <Icon className="h-5 w-5" />
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
