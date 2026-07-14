import { createFileRoute } from "@tanstack/react-router";
import { Briefcase } from "lucide-react";
import { Section } from "@/components/Section";
import { experience } from "@/data/portfolio";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Manjiri Kinage" },
      { name: "description", content: "Professional experience of Manjiri Kinage — Java Developer Intern at CodSoft." },
    ],
  }),
  component: Experience,
});

function Experience() {
  return (
    <Section
      eyebrow="Experience"
      title={<>Professional <span className="text-gradient">timeline</span></>}
      description="Where I've shipped, what I built, and the stack I used."
    >
      <div className="mx-auto max-w-3xl space-y-6">
        {experience.map((e) => (
          <div key={e.company} className="glass rounded-3xl p-6 sm:p-8">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary">
                  <Briefcase className="h-3.5 w-3.5" /> {e.company}
                </div>
                <h3 className="mt-1 text-2xl font-bold">{e.role}</h3>
                <div className="mt-1 text-sm text-muted-foreground">{e.location}</div>
              </div>
              <div className="rounded-full border border-hairline bg-background/60 px-3 py-1 font-mono text-[11px] text-muted-foreground">
                {e.period}
              </div>
            </div>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {e.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {e.stack.map((s) => (
                <span key={s} className="rounded-md border border-hairline px-2 py-1 font-mono text-[11px] text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
