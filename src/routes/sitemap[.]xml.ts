import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { nav } from "@/data/portfolio";
import { projects } from "@/data/portfolio";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          ...nav.map((n) => ({ path: n.to, changefreq: "weekly", priority: n.to === "/" ? "1.0" : "0.8" })),
          { path: "/achievements", changefreq: "monthly", priority: "0.7" },
          ...projects.map((p) => ({ path: `/projects/${p.slug}`, changefreq: "monthly", priority: "0.6" })),
        ];
        const urls = entries.map(
          (e) =>
            `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
        );
        const xml =
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
