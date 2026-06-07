import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
  children,
}: {
  index: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <Reveal className="mb-12 sm:mb-16">
      <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-fg-muted">
        <span className="text-accent">{index}</span>
        <span className="h-px w-10 bg-border-strong" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="font-serif-display mt-4 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
        {title}
      </h2>
      {children ? (
        <div className="mt-4 max-w-2xl text-fg-muted text-pretty">{children}</div>
      ) : null}
    </Reveal>
  );
}
