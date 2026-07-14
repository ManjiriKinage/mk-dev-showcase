import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Manjiri Kinage" },
      { name: "description", content: "Selected projects by Manjiri Kinage — spanning security, finance, AI, and analytics." },
    ],
  }),
  component: Projects,
});

function Projects() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<string | null>(null);

  const allTags = useMemo(() => Array.from(new Set(projects.flatMap((p) => p.stack))).sort(), []);

  const filtered = projects.filter((p) => {
    const matchesQ =
      !q ||
      p.name.toLowerCase().includes(q.toLowerCase()) ||
      p.tagline.toLowerCase().includes(q.toLowerCase()) ||
      p.summary.toLowerCase().includes(q.toLowerCase());
    const matchesTag = !tag || p.stack.includes(tag);
    return matchesQ && matchesTag;
  });

  return (
    <Section
      eyebrow="Case studies"
      title={<>All <span className="text-gradient">projects</span></>}
      description="Every ship, from hackathons to full production platforms."
    >
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="glass flex w-full items-center gap-2 rounded-xl px-3 py-2 sm:max-w-sm">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search projects…"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setTag(null)}
            className={[
              "rounded-md border px-2 py-1 font-mono text-[11px]",
              !tag ? "border-primary text-foreground" : "border-hairline text-muted-foreground",
            ].join(" ")}
          >
            all
          </button>
          {allTags.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t === tag ? null : t)}
              className={[
                "rounded-md border px-2 py-1 font-mono text-[11px]",
                tag === t ? "border-primary text-foreground" : "border-hairline text-muted-foreground",
              ].join(" ")}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-16 text-center text-sm text-muted-foreground">
          No projects match your filters.
        </div>
      )}
    </Section>
  );
}
