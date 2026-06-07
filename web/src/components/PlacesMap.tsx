"use client";

import { motion } from "framer-motion";
import { NA_COUNTRIES, NA_CITIES, NA_VIEWBOX } from "@/lib/na-paths";
import { Reveal } from "./Reveal";

// Color used for "current location" — distinct from the navy accent.
const CURRENT_COLOR = "#10b981";

export function PlacesMap() {
  return (
    <section className="relative pt-4 pb-16 sm:pt-6 sm:pb-24 scroll-mt-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <Reveal className="mb-6 sm:mb-8">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-fg-muted">
            <span className="h-px w-10 bg-border-strong" />
            <span>Places</span>
          </div>
          <h2 className="font-serif-display mt-3 text-3xl sm:text-4xl text-fg leading-tight">
            Cities I've lived and worked in.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
            <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />

            <svg
              viewBox={`0 0 ${NA_VIEWBOX.width} ${NA_VIEWBOX.height}`}
              className="relative block w-full h-auto"
              role="img"
              aria-label="A map of North America showing Vancouver, Seattle, Toronto and Ottawa."
            >
              {/* Real continent outlines: Canada, USA, Mexico */}
              <g>
                {NA_COUNTRIES.map((c) => (
                  <path
                    key={c.id}
                    d={c.d}
                    fill="var(--color-fg)"
                    fillOpacity={0.07}
                    stroke="var(--color-border-strong)"
                    strokeWidth={0.9}
                    strokeLinejoin="round"
                  />
                ))}
              </g>

              {/* City markers */}
              {NA_CITIES.map((city, i) => {
                const color = city.isCurrent
                  ? CURRENT_COLOR
                  : "var(--color-accent)";
                // Push labels of cities clustered in pairs apart from each other.
                // Vancouver above its dot, Seattle below; Ottawa above, Toronto below.
                const labelBelow = city.name === "Seattle" || city.name === "Toronto";

                return (
                  <motion.g
                    key={city.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0 }}
                    transition={{
                      delay: 0.2 + i * 0.12,
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {/* Animated ping */}
                    <circle
                      cx={city.x}
                      cy={city.y}
                      r={5}
                      fill={color}
                      opacity={0.3}
                    >
                      <animate
                        attributeName="r"
                        from={5}
                        to={city.isCurrent ? 26 : 20}
                        dur={city.isCurrent ? "2s" : "2.6s"}
                        begin={`${i * 0.45}s`}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        from={city.isCurrent ? 0.55 : 0.4}
                        to={0}
                        dur={city.isCurrent ? "2s" : "2.6s"}
                        begin={`${i * 0.45}s`}
                        repeatCount="indefinite"
                      />
                    </circle>

                    {/* Halo + solid dot */}
                    <circle
                      cx={city.x}
                      cy={city.y}
                      r={city.isCurrent ? 7 : 5.5}
                      fill="var(--color-bg)"
                      stroke={color}
                      strokeWidth={1.5}
                    />
                    <circle
                      cx={city.x}
                      cy={city.y}
                      r={city.isCurrent ? 3.5 : 2.5}
                      fill={color}
                    />

                    {/* City name */}
                    <text
                      x={city.x}
                      y={labelBelow ? city.y + 22 : city.y - 14}
                      textAnchor="middle"
                      fontFamily="var(--font-mono)"
                      fontSize={12}
                      fontWeight={600}
                      fill="var(--color-fg)"
                      letterSpacing={1.4}
                    >
                      {city.name.toUpperCase()}
                    </text>

                    {/* "Current" badge on Seattle */}
                    {city.isCurrent && (
                      <text
                        x={city.x}
                        y={city.y + 36}
                        textAnchor="middle"
                        fontFamily="var(--font-mono)"
                        fontSize={9}
                        fontWeight={600}
                        fill={CURRENT_COLOR}
                        letterSpacing={1.8}
                      >
                        ● CURRENT
                      </text>
                    )}
                  </motion.g>
                );
              })}
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
