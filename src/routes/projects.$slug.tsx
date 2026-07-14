import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.name} — Manjiri Kinage` },
          { name: "description", content: loaderData.project.summary },
          { property: "og:title", content: `${loaderData.project.name} — Case study` },
          { property: "og:description", content: loaderData.project.summary },
        ]
      : [{ title: "Project — Manjiri Kinage" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => (
    <div className="container-page py-32 text-center">
      <h1 className="text-4xl font-bold">Project not found</h1>
      <Link to="/projects" className="mt-6 inline-block text-primary underline">
        Back to projects
      </Link>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();

  return (
    <article>
      {/* HERO */}
      <section className="container-page pt-12">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> All projects
        </Link>

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary">
              {project.year} · Team of {project.team}
            </div>
            <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              {project.name}
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">{project.tagline}</p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {project.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-brand px-4 py-2 text-sm font-semibold text-white"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-hairline bg-surface px-4 py-2 text-sm font-semibold"
                >
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              )}
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Tech stack
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span key={s} className="rounded-md border border-hairline px-2 py-1 font-mono text-[11px]">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* banner */}
        <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-3xl border border-hairline">
          <div className="absolute inset-0 bg-gradient-brand opacity-25" />
          <div className="grid-bg absolute inset-0 opacity-40" />
          <div className="absolute inset-0 grid place-items-center">
            <span className="font-display text-7xl font-black text-white/90 sm:text-8xl">
              {project.name}
            </span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container-page mt-16 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-10">
          <Block title="Problem">{project.problem}</Block>
          <Block title="Challenges">
            <ul className="ml-4 list-disc space-y-1 text-muted-foreground">
              {project.challenges.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </Block>
          <Block title="Solutions">
            <ul className="ml-4 list-disc space-y-1 text-muted-foreground">
              {project.solutions.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </Block>

          <Block title="Architecture">
            <div className="grid gap-4 sm:grid-cols-3">
              {["Client", "API", "Data"].map((t) => (
                <div key={t} className="glass rounded-2xl p-4 text-center">
                  <div className="font-mono text-xs text-muted-foreground">{t}</div>
                  <div className="mt-2 h-24 rounded-lg border border-dashed border-hairline" />
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Architecture & database diagrams — placeholders for detailed system design docs.
            </p>
          </Block>

          <Block title="Screenshots">
            <div className="grid gap-3 sm:grid-cols-2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="relative aspect-video overflow-hidden rounded-xl border border-hairline bg-surface">
                  <div className="grid-bg absolute inset-0 opacity-30" />
                  <div className="absolute inset-0 grid place-items-center font-mono text-xs text-muted-foreground">
                    screenshot {i + 1}
                  </div>
                </div>
              ))}
            </div>
          </Block>

          <div className="grid gap-6 sm:grid-cols-2">
            <Block title="Lessons">
              <ul className="ml-4 list-disc space-y-1 text-muted-foreground">
                {project.lessons.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </Block>
            <Block title="Future">
              <ul className="ml-4 list-disc space-y-1 text-muted-foreground">
                {project.future.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </Block>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="glass rounded-2xl p-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Features
            </div>
            <ul className="mt-3 space-y-1.5 text-sm">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-brand" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </article>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight">
        <span className="text-gradient">/</span> {title}
      </h2>
      <div className="mt-4 text-base text-muted-foreground">{children}</div>
    </div>
  );
}
