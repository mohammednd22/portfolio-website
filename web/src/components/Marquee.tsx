"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Marquee({
  items,
  duration = 36,
  className,
  itemClassName,
}: {
  items: string[];
  duration?: number;
  className?: string;
  itemClassName?: string;
}) {
  const renderRow = (key: string) => (
    <ul
      key={key}
      className="flex shrink-0 items-center gap-3 pr-3"
      aria-hidden={key === "b"}
    >
      {items.map((item, i) => (
        <li
          key={`${key}-${i}`}
          className={
            itemClassName ??
            "rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-xs text-fg-muted whitespace-nowrap"
          }
        >
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={`relative overflow-hidden ${
        className ?? ""
      } [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]`}
    >
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {renderRow("a")}
        {renderRow("b")}
      </motion.div>
    </div>
  );
}
