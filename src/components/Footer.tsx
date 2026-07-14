import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import { nav, profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-hairline">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-sm font-bold text-white">
              {profile.initials}
            </span>
            <span className="font-semibold">{profile.name}</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">{profile.tagline}</p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Quick Links
          </h4>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-muted-foreground transition hover:text-foreground">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Elsewhere</h4>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-foreground hover:bg-surface"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-foreground hover:bg-surface"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="glass inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-foreground hover:bg-surface"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-hairline">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}. Crafted with care in Pune.</p>
          <p className="font-mono">// built with TanStack Start · React · Tailwind · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
