import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { Section } from "@/components/Section";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Manjiri Kinage" },
      { name: "description", content: "Get in touch with Manjiri Kinage — software developer in Pune, India." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Section
      eyebrow="Contact"
      title={<>Let's <span className="text-gradient">talk</span></>}
      description="Open to internships, full-time roles, and collaborations on hard software problems."
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name">
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input"
                placeholder="Your name"
              />
            </Field>
            <Field label="Email">
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                placeholder="you@example.com"
              />
            </Field>
          </div>
          <Field label="Message" className="mt-4">
            <textarea
              rows={6}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="input resize-none"
              placeholder="What are you building?"
            />
          </Field>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-elegant"
            >
              <Send className="h-4 w-4" /> Send message
            </button>
            {sent && <span className="text-sm text-muted-foreground">Thanks — your email app should open with the message ready to send.</span>}
          </div>
        </form>

        <div className="space-y-3">
          <ContactRow icon={<Mail className="h-4 w-4" />} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
          <ContactRow icon={<MapPin className="h-4 w-4" />} label="Location" value={profile.location} />
          <ContactRow icon={<Github className="h-4 w-4" />} label="GitHub" value="ManjiriKinage" href={profile.github} />
          <ContactRow icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" value="manjiri-kinage" href={profile.linkedin} />

          <div className="glass overflow-hidden rounded-2xl">
            <div className="relative aspect-[4/3]">
              <div className="grid-bg absolute inset-0 opacity-40" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <MapPin className="mx-auto h-6 w-6 text-primary" />
                  <div className="mt-2 font-semibold">Pune, India</div>
                  <div className="text-xs text-muted-foreground">Based in Pune, open to remote & relocation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          background: color-mix(in oklab, var(--background) 70%, transparent);
          border: 1px solid var(--hairline);
          padding: 0.7rem 0.9rem;
          font-size: 0.9rem;
          color: var(--foreground);
          outline: none;
          transition: border-color 150ms;
        }
        .input:focus { border-color: var(--brand); box-shadow: 0 0 0 3px color-mix(in oklab, var(--brand) 20%, transparent); }
        .input::placeholder { color: var(--muted-foreground); }
      `}</style>
    </Section>
  );
}

function Field({ label, className = "", children }: { label: string; className?: string; children: React.ReactNode }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <div className="glass flex items-center gap-3 rounded-2xl px-4 py-3">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-surface text-primary">{icon}</span>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="truncate text-sm">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="block transition hover:brightness-110">
      {inner}
    </a>
  ) : (
    inner
  );
}
