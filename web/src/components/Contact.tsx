"use client";

import { useState } from "react";
import { Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* ignore */
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-36 scroll-mt-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-[400px] bg-spotlight" aria-hidden />

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          index="04"
          eyebrow="Contact"
          title="Get in touch."
        >
          I'm always open to a good conversation — about a role, a project, or
          something you're working on. Drop me a line.
        </SectionHeading>

        <Reveal className="grid gap-6 md:grid-cols-2">
          <a
            href={`mailto:${site.email}`}
            className="group flex flex-col gap-3 rounded-xl border border-border bg-surface p-7 transition-all hover:border-accent/60"
          >
            <div className="flex items-center justify-between">
              <Mail className="h-5 w-5 text-accent" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
                Email
              </span>
            </div>
            <p className="font-serif-display text-2xl text-fg group-hover:text-accent transition-colors">
              {site.email}
            </p>
            <p className="text-sm text-fg-muted">
              Best place to reach me. I usually respond within a day.
            </p>
            <button
              onClick={(e) => {
                e.preventDefault();
                copyEmail();
              }}
              className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-md border border-border-strong bg-elevated px-3 py-1.5 text-xs text-fg-muted hover:text-accent hover:border-accent ring-focus"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" /> Copied
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" /> Copy address
                </>
              )}
            </button>
          </a>

          <div className="grid gap-6">
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-6 transition-all hover:border-accent/60"
            >
              <div className="grid h-10 w-10 place-items-center rounded-md bg-elevated text-accent">
                <Linkedin className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
                  LinkedIn
                </p>
                <p className="text-fg group-hover:text-accent transition-colors">
                  /in/mohammednd
                </p>
              </div>
              <span className="text-fg-subtle group-hover:text-accent transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>

            <a
              href={site.socials.github}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-6 transition-all hover:border-accent/60"
            >
              <div className="grid h-10 w-10 place-items-center rounded-md bg-elevated text-accent">
                <Github className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
                  GitHub
                </p>
                <p className="text-fg group-hover:text-accent transition-colors">
                  @mohammednd22
                </p>
              </div>
              <span className="text-fg-subtle group-hover:text-accent transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
