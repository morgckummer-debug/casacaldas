import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE_URL } from "@/lib/seo";

const BASE_URL = SITE_URL;

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${BASE_URL}/</loc>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${BASE_URL}/" />
    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}/en" />
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${BASE_URL}/en</loc>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${BASE_URL}/" />
    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}/en" />
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});