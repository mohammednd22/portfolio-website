"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useRef } from "react";
import { hero, site } from "@/lib/content";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Apple-style "zoom out" on scroll: name shrinks and fades, hero gently lifts.
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.86]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16"
    >
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 -z-10 bg-spotlight"
        aria-hidden
      />
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-grid [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
        aria-hidden
      />

      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <motion.div
          style={{ scale, opacity, y }}
          className="origin-top-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-fg-muted"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            {hero.eyebrow}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif-display mt-6 text-5xl leading-[1.02] sm:text-6xl md:text-7xl lg:text-[96px] text-balance text-fg"
          >
            {hero.name.replace(/\.$/, "")}
            <span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-fg-muted text-pretty"
          >
            {hero.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href={hero.primaryCta.href}
              className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-bg transition-all hover:bg-accent-soft ring-focus"
            >
              {hero.primaryCta.label}
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href={hero.secondaryCta.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border-strong bg-surface px-5 py-3 text-sm text-fg transition-all hover:border-accent hover:text-accent ring-focus"
            >
              {hero.secondaryCta.label}
            </a>

            <div className="ml-1 hidden sm:flex items-center gap-1 pl-3 border-l border-border">
              <SocialLink href={site.socials.github} label="GitHub">
                <Github className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={site.socials.linkedin} label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={`mailto:${site.email}`} label="Email">
                <Mail className="h-4 w-4" />
              </SocialLink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-fg-subtle"
          >
            <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
            Scroll
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-md text-fg-muted transition-colors hover:bg-elevated hover:text-accent ring-focus"
    >
      {children}
    </a>
  );
}
