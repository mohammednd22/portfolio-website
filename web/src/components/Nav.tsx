"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { nav, site } from "@/lib/content";

export function Nav() {
  const [active, setActive] = useState<string>(nav[0].id);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-bg/70 border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2.5 ring-focus rounded"
          aria-label="Home"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md border border-border-strong bg-elevated text-sm font-serif-display text-accent transition-colors group-hover:border-accent">
            M
          </span>
          <span className="hidden sm:inline text-sm font-medium tracking-tight">
            {site.shortName} Noureddine
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative px-3 py-2 text-sm text-fg-muted transition-colors hover:text-fg ring-focus rounded"
            >
              <span className="font-mono text-[10px] text-accent/80 mr-1.5">
                {item.index}
              </span>
              {item.label}
              {active === item.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-2 -bottom-px h-px bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.resumeHref}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 rounded-md border border-border-strong bg-elevated px-3.5 py-2 text-sm text-fg transition-all hover:border-accent hover:text-accent ring-focus"
          >
            Resume
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden grid h-9 w-9 place-items-center rounded-md border border-border-strong bg-elevated text-fg hover:border-accent ring-focus"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="md:hidden border-t border-border bg-bg/95 backdrop-blur-xl"
        >
          <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 rounded-md px-3 py-3 text-base text-fg-muted hover:bg-elevated hover:text-fg"
              >
                <span className="font-mono text-xs text-accent">{item.index}</span>
                {item.label}
              </a>
            ))}
            <a
              href={site.resumeHref}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-md border border-border-strong bg-elevated px-4 py-3 text-sm hover:border-accent hover:text-accent"
            >
              Resume
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
