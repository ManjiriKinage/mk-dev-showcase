import { createFileRoute } from "@tanstack/react-router";
import { Award } from "lucide-react";
import { Section } from "@/components/Section";
import { achievements, certificates } from "@/data/portfolio";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — Manjiri Kinage" },
      { name: "description", content: "Awards, achievements, and certificates of Manjiri Kinage." },
    ],
  }),
  component: Achievements,
});

function Achievements() {
  return (
    <>
      <Section
        eyebrow="Achievements"
        title={<>Milestones & <span className="text-gradient">recognition</span></>}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a) => (
            <div key={a.title} className="group relative overflow-hidden rounded-2xl border border-hairline bg-card p-6">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-15 blur-2xl transition group-hover:opacity-30" />
              <Award className="h-6 w-6 text-primary" />
              <h3 className="mt-3 text-lg font-bold">{a.title}</h3>
              <div className="mt-1 text-sm text-foreground">{a.detail}</div>
              <div className="mt-1 text-xs text-muted-foreground">{a.org}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Certificates"
        title={<>Credentials & <span className="text-gradient">courses</span></>}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c) => (
            <div key={c.name} className="glass rounded-2xl p-5">
              <div className="text-xs font-mono uppercase tracking-widest text-primary">{c.issuer}</div>
              <div className="mt-2 font-semibold leading-snug">{c.name}</div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
