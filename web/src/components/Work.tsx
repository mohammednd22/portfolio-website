"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, type Project } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";

export function Work() {
  return (
    <section id="work" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading index="03" eyebrow="Work" title="Things I've built." />

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={p.highlight ? "md:col-span-2" : ""}
    >
      <TiltCard className="h-full">
        <article
          className={`group relative h-full overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-shadow hover:shadow-lg ${
            p.highlight ? "lg:grid lg:grid-cols-5 lg:gap-0" : ""
          }`}
        >
          <div
            className={`relative aspect-[16/10] overflow-hidden bg-elevated ${
              p.highlight ? "lg:col-span-3 lg:aspect-auto" : ""
            }`}
          >
            <Image
              src={p.image}
              alt={p.title}
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover grayscale transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
            />
          </div>

          <div
            className={`relative flex flex-col gap-4 p-6 sm:p-7 ${
              p.highlight ? "lg:col-span-2 lg:p-8" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
                  {p.year} {p.highlight && "· Featured"}
                </p>
                <h3 className="font-serif-display mt-1 text-2xl sm:text-3xl text-fg leading-tight">
                  {p.title}
                </h3>
              </div>
              <div className="flex gap-1">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} on GitHub`}
                    className="grid h-8 w-8 place-items-center rounded-md text-fg-muted transition-colors hover:bg-elevated hover:text-accent ring-focus"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} demo`}
                    className="grid h-8 w-8 place-items-center rounded-md text-fg-muted transition-colors hover:bg-elevated hover:text-accent ring-focus"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-fg-muted text-sm leading-relaxed">{p.blurb}</p>

            <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-border bg-elevated/50 px-2 py-0.5 font-mono text-[10px] text-fg-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </article>
      </TiltCard>
    </motion.div>
  );
}
