import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Sparkles } from "lucide-react";
import { profile, stats, projects } from "@/data/portfolio";
import portraitAsset from "@/assets/manjiri.jpg.asset.json";
import { Typewriter } from "@/components/Typewriter";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manjiri Kinage — Software Developer" },
      { name: "description", content: "Portfolio of Manjiri Kinage — Software Developer specializing in Java, Python, full-stack, backend, and AI-powered systems." },
      { property: "og:title", content: "Manjiri Kinage — Software Developer" },
      { property: "og:description", content: "Full-stack engineer building scalable software, AI-powered applications, and secure backend systems." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const floatingTech = [
  "Java", "Python", "React", "Spring", "Flask", "Git", "PostgreSQL", "Tailwind",
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="container-page relative pt-16 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_420px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-muted-foreground">
              <Sparkles className="h-3 w-3 text-primary" />
              Available for internships & full-time roles
            </span>

            <p className="mt-6 font-mono text-sm text-muted-foreground">Hello, I'm</p>
            <h1 className="mt-2 text-5xl font-black tracking-tight sm:text-6xl md:text-7xl">
              <span className="text-gradient">MANJIRI</span>
              <br />
              <span className="text-foreground">KINAGE</span>
            </h1>

            <div className="mt-5 text-lg font-medium text-muted-foreground sm:text-xl">
              <span className="text-foreground">{profile.role}</span>
              <span className="mx-2 text-muted-foreground">·</span>
              <Typewriter words={profile.titles} className="text-gradient font-semibold" />
            </div>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-elegant transition hover:brightness-110"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={profile.resume}
                className="inline-flex items-center gap-2 rounded-xl border border-hairline bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary"
              >
                <Download className="h-4 w-4" /> Resume
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-xl border border-hairline text-muted-foreground hover:text-foreground"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-xl border border-hairline text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-xl p-3">
                  <div className="text-2xl font-bold tracking-tight">
                    <span className="text-gradient">{s.value}</span>
                    <span className="text-xs text-muted-foreground">{s.suffix}</span>
                  </div>
                  <div className="mt-0.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Portrait ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto aspect-square w-[320px] sm:w-[380px] lg:w-full lg:max-w-[420px]"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-25 blur-3xl" />
            <div className="absolute inset-6 rounded-full border border-hairline" />
            <div className="absolute inset-12 overflow-hidden rounded-full border border-hairline bg-surface">
              <img
                src={portraitAsset.url}
                alt="Portrait of Manjiri Kinage"
                className="h-full w-full object-cover"
              />
            </div>
            {floatingTech.map((t, i) => {
              const angle = (i / floatingTech.length) * Math.PI * 2;
              const r = 46; // percent
              const x = 50 + r * Math.cos(angle);
              const y = 50 + r * Math.sin(angle);
              return (
                <motion.div
                  key={t}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i * 0.2 }}
                >
                  <span className="glass inline-flex items-center rounded-full px-3 py-1 font-mono text-[11px] text-foreground">
                    {t}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* scroll cue */}
        <div className="mt-16 flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
          >
            scroll ↓
          </motion.div>
        </div>
      </section>

      {/* FEATURED */}
      <Section
        eyebrow="Selected work"
        title={<>Featured <span className="text-gradient">projects</span></>}
        description="Production-grade builds spanning security, finance, fitness, and analytics."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {projects.filter((p) => p.featured).slice(0, 4).map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-hairline bg-surface px-5 py-2.5 text-sm font-semibold hover:border-primary"
          >
            View all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-hairline bg-surface p-10 text-center sm:p-16">
          <div className="absolute inset-0 -z-10 bg-gradient-brand opacity-10" />
          <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let's build something <span className="text-gradient">memorable</span>.
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Open to internships, full-time roles, and collaborations on hard software problems.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-xl bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-elegant"
            >
              Get in touch
            </Link>
            <a
              href={profile.resume}
              className="rounded-xl border border-hairline bg-background px-5 py-2.5 text-sm font-semibold"
            >
              Download résumé
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
