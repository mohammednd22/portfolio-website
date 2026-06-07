import { about } from "@/lib/content";
import { Marquee } from "./Marquee";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <SectionHeading index="01" eyebrow="About" title="A short version." />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7 space-y-4 text-fg-muted text-lg leading-relaxed text-pretty">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-5 space-y-8">
            <dl className="divide-y divide-border border-y border-border">
              {about.facts.map((f) => (
                <div
                  key={f.label}
                  className="grid grid-cols-3 gap-4 py-4 text-sm"
                >
                  <dt className="font-mono uppercase tracking-wider text-xs text-fg-subtle">
                    {f.label}
                  </dt>
                  <dd className="col-span-2 text-fg">{f.value}</dd>
                </div>
              ))}
            </dl>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle mb-3">
                Stack
              </h3>
              <Marquee items={[...about.stack]} duration={16} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
