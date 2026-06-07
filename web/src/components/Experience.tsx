import Image from "next/image";
import { experience, type SummaryPart } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <SectionHeading index="02" eyebrow="Experience" title="Where I've worked." />

        <ol className="divide-y divide-border border-y border-border">
          {experience.map((job, i) => (
            <Reveal key={`${job.company}-${i}`} delay={i * 0.04}>
              <article className="grid gap-4 py-8 sm:grid-cols-[140px_1fr] sm:gap-8">
                <p className="font-mono text-xs uppercase tracking-wider text-fg-subtle sm:pt-2">
                  {job.period}
                </p>

                <div className="flex gap-5">
                  {job.logo && (
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-border bg-white">
                      <Image
                        src={job.logo}
                        alt={`${job.company} logo`}
                        fill
                        sizes="48px"
                        className="object-contain p-1.5"
                      />
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif-display text-2xl sm:text-3xl text-fg leading-tight">
                      {job.role}{" "}
                      <span className="text-accent">· {job.company}</span>
                    </h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-wider text-fg-subtle">
                      {job.location}
                    </p>
                    <p className="mt-3 text-fg-muted leading-relaxed">
                      <RenderSummary parts={job.summary} />
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {job.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-[10px] text-fg-muted"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function RenderSummary({ parts }: { parts: SummaryPart[] }) {
  return (
    <>
      {parts.map((part, i) =>
        typeof part === "string" ? (
          <span key={i}>{part}</span>
        ) : (
          <a
            key={i}
            href={part.href}
            target="_blank"
            rel="noreferrer"
            className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent transition-colors"
          >
            {part.text}
          </a>
        ),
      )}
    </>
  );
}
