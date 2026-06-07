import { site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 sm:px-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-fg-subtle">
          © {year} {site.name}
        </p>
        <p className="font-mono text-xs text-fg-subtle">
          Designed and built in Seattle · Next.js + Tailwind
        </p>
      </div>
    </footer>
  );
}
