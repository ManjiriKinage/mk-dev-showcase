import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative overflow-hidden rounded-3xl border border-hairline bg-card p-1"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-brand opacity-0 blur-2xl transition group-hover:opacity-20" />
      <div className="rounded-[calc(theme(borderRadius.3xl)-4px)] bg-surface p-6">
        <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-2xl border border-hairline">
          <div className="absolute inset-0 bg-gradient-brand opacity-20" />
          <div className="grid-bg absolute inset-0 opacity-40" />
          <div className="absolute inset-0 grid place-items-center">
            <span className="font-display text-6xl font-black tracking-tight text-white/90 drop-shadow-lg">
              {project.name}
            </span>
          </div>
          <div className="absolute right-3 top-3 rounded-full bg-black/40 px-2.5 py-1 font-mono text-[10px] text-white/80 backdrop-blur">
            {project.year}
          </div>
        </div>

        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="truncate text-xl font-semibold">{project.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
          </div>
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="shrink-0 rounded-full border border-hairline p-2 text-muted-foreground transition hover:border-primary hover:text-foreground"
            aria-label={`Open ${project.name} case study`}
          >
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <span
              key={t}
              className="rounded-md border border-hairline bg-background/50 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2">
          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-brand px-3 py-1.5 text-xs font-semibold text-white"
          >
            Case study <ArrowUpRight className="h-3 w-3" />
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-hairline px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground"
            >
              <Github className="h-3 w-3" /> Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
