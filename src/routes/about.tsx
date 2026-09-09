import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { highlights, profile, skills, stats, timeline } from "@/data/portfolio";
import portraitAsset from "@/assets/manjiri.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Manjiri Kinage" },
      { name: "description", content: "About Manjiri Kinage — software engineer, hackathon finalist, and MCA student in Pune." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <Section
        eyebrow="About"
        title={<>Engineer first, <span className="text-gradient">student second</span>.</>}
        description={profile.summary}
      >
        <div className="grid items-start gap-10 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div className="mx-auto w-full max-w-xs">
            <div className="glass overflow-hidden rounded-3xl p-2">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface">
                <img
                  src={portraitAsset.url}
                  alt="Portrait of Manjiri Kinage"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-xl p-3">
                  <div className="text-lg font-bold text-gradient">
                    {s.value}
                    <span className="text-xs text-muted-foreground">{s.suffix}</span>
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a Software Developer based in <span className="text-foreground">Pune, India</span>, focused on
              <span className="text-foreground"> Java</span> and <span className="text-foreground">Python</span>.
              I care about clean architecture, sharp data models, and interfaces that feel obvious.
              I currently pursue an <span className="text-foreground">MCA at PES Modern College of Engineering</span>
              &nbsp;after graduating first in my class in BCA — but school is a side quest.
              The real work happens in projects, hackathons, and the code I ship every week.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="glass rounded-2xl p-4"
                >
                  <div className="text-sm font-semibold">{h.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{h.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section
        eyebrow="Toolkit"
        title={<>Skills & <span className="text-gradient">stack</span></>}
        description="Comfortable across the stack. Deeper in backend, distributed data, and integration work."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="glass rounded-2xl p-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {group}
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {items.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-hairline bg-background/60 px-2 py-1 font-mono text-[11px] hover:border-primary hover:text-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* TIMELINE */}
      <Section
        eyebrow="My journey"
        title={<>From <span className="text-gradient">first line of C</span> to shipping full-stack</>}
      >
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/50 to-transparent sm:left-1/2" />
          <ul className="space-y-8">
            {timeline.map((t, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4 }}
                className={[
                  "relative pl-12 sm:grid sm:grid-cols-2 sm:gap-8 sm:pl-0",
                  i % 2 === 0 ? "sm:text-right" : "",
                ].join(" ")}
              >
                <div className="absolute left-2.5 top-2 h-3 w-3 rounded-full bg-gradient-brand ring-4 ring-background sm:left-1/2 sm:-translate-x-1/2" />
                {i % 2 === 0 ? (
                  <>
                    <TimelineCard t={t} />
                    <div className="hidden sm:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden sm:block" />
                    <TimelineCard t={t} />
                  </>
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}

function TimelineCard({ t }: { t: { year: string; title: string; desc: string } }) {
  return (
    <div className="glass inline-block rounded-2xl p-4 text-left">
      <div className="font-mono text-[11px] uppercase tracking-widest text-primary">{t.year}</div>
      <div className="mt-1 font-semibold">{t.title}</div>
      <div className="mt-1 text-sm text-muted-foreground">{t.desc}</div>
    </div>
  );
}
