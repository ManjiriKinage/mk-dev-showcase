import { createFileRoute } from "@tanstack/react-router";
import { Trophy } from "lucide-react";
import { Section } from "@/components/Section";
import { hackathons } from "@/data/portfolio";

export const Route = createFileRoute("/hackathons")({
  head: () => ({
    meta: [
      { title: "Hackathons — Manjiri Kinage" },
      { name: "description", content: "Hackathon results and projects by Manjiri Kinage — HackSpark Top 4, HackOverflow Top 10." },
    ],
  }),
  component: Hackathons,
});

function Hackathons() {
  return (
    <Section
      eyebrow="Hackathons"
      title={<>Ship <span className="text-gradient">under pressure</span></>}
      description="National-level competitions where I built and shipped complete products in days."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {hackathons.map((h) => (
          <div key={h.name} className="group relative overflow-hidden rounded-3xl border border-hairline bg-card p-6 sm:p-8">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-brand opacity-20 blur-3xl transition group-hover:opacity-30" />
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary">
              <Trophy className="h-3.5 w-3.5" /> {h.result}
            </div>
            <h3 className="mt-2 text-2xl font-bold">{h.name}</h3>
            <div className="mt-1 text-sm text-muted-foreground">Project: <span className="text-foreground">{h.project}</span></div>
            <p className="mt-4 text-sm text-muted-foreground">{h.desc}</p>

            <div className="mt-6 grid grid-cols-3 gap-2">
              {["Team", "Stage", "Judges"].map((tag) => (
                <div key={tag} className="relative aspect-square overflow-hidden rounded-xl border border-hairline bg-surface">
                  <div className="grid-bg absolute inset-0 opacity-30" />
                  <div className="absolute inset-0 grid place-items-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {tag}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
