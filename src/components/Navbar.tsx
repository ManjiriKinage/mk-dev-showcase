import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Menu, X, FileText } from "lucide-react";
import { nav, profile } from "@/data/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-hairline" : "bg-transparent",
      ].join(" ")}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="group flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-sm font-bold text-white shadow-elegant">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-semibold tracking-wide text-foreground sm:block">
            {profile.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={[
                  "relative rounded-lg px-3 py-1.5 text-sm transition-colors",
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                ].join(" ")}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-lg bg-surface"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden h-9 w-9 place-items-center rounded-lg text-muted-foreground transition hover:bg-surface hover:text-foreground sm:grid"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hidden h-9 w-9 place-items-center rounded-lg text-muted-foreground transition hover:bg-surface hover:text-foreground sm:grid"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={profile.resume}
            className="hidden items-center gap-1.5 rounded-lg bg-gradient-brand px-3.5 py-2 text-xs font-semibold text-white shadow-elegant transition hover:brightness-110 sm:inline-flex"
          >
            <FileText className="h-3.5 w-3.5" />
            Resume
          </a>
          <button
            aria-label="Toggle menu"
            className="grid h-9 w-9 place-items-center rounded-lg text-foreground hover:bg-surface md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden"
          >
            <div className="container-page pb-4">
              <div className="glass flex flex-col rounded-2xl p-2">
                {nav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="rounded-xl px-3 py-2 text-sm text-foreground hover:bg-surface"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={profile.resume}
                  className="mt-1 rounded-xl bg-gradient-brand px-3 py-2 text-center text-sm font-semibold text-white"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
