import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/lib/content";

export function SideRail() {
  return (
    <>
      <aside className="fixed bottom-0 left-6 z-40 hidden xl:flex flex-col items-center gap-5 after:mt-4 after:h-24 after:w-px after:bg-border-strong">
        <a
          href={site.socials.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-fg-muted hover:text-accent hover:-translate-y-0.5 transition-all"
        >
          <Github className="h-[18px] w-[18px]" />
        </a>
        <a
          href={site.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-fg-muted hover:text-accent hover:-translate-y-0.5 transition-all"
        >
          <Linkedin className="h-[18px] w-[18px]" />
        </a>
        <a
          href={`mailto:${site.email}`}
          aria-label="Email"
          className="text-fg-muted hover:text-accent hover:-translate-y-0.5 transition-all"
        >
          <Mail className="h-[18px] w-[18px]" />
        </a>
      </aside>

      <aside className="fixed bottom-0 right-6 z-40 hidden xl:flex flex-col items-center gap-6 after:mt-4 after:h-24 after:w-px after:bg-border-strong">
        <a
          href={`mailto:${site.email}`}
          className="font-mono text-xs tracking-widest text-fg-muted hover:text-accent transition-colors [writing-mode:vertical-rl]"
        >
          {site.email}
        </a>
      </aside>
    </>
  );
}
