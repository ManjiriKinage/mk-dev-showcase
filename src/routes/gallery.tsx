import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Manjiri Kinage" },
      { name: "description", content: "Photo gallery — hackathons, college, projects, and presentations." },
    ],
  }),
  component: Gallery,
});

const cats = ["Professional", "Hackathons", "College", "Projects", "Presentations", "Certificates", "Team"];
const items = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  cat: cats[i % cats.length],
  h: [200, 280, 340, 240, 320, 260][i % 6],
}));

function Gallery() {
  return (
    <Section
      eyebrow="Gallery"
      title={<>Moments & <span className="text-gradient">memories</span></>}
      description="A visual archive of the work behind the work."
    >
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
        {items.map((it) => (
          <figure
            key={it.id}
            style={{ height: `${it.h}px` }}
            className="relative w-full overflow-hidden rounded-2xl border border-hairline bg-surface"
          >
            <div className="absolute inset-0 bg-gradient-brand opacity-10" />
            <div className="grid-bg absolute inset-0 opacity-40" />
            <figcaption className="absolute bottom-3 left-3 rounded-full bg-black/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-white/80 backdrop-blur">
              {it.cat}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
