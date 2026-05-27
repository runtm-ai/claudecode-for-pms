import { listMDX } from '@/lib/content';
import { SITE } from '@/lib/tokens';

export const dynamic = 'force-static';

function escape(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const entries = listMDX('changelog').sort((a, b) =>
    String(b.frontmatter.date).localeCompare(String(a.frontmatter.date))
  );

  const items = entries
    .map((e) => {
      const date = new Date(String(e.frontmatter.date)).toUTCString();
      const title = escape(String(e.frontmatter.title));
      const link = `${SITE.url}/changelog/`;
      const description = escape(e.body.slice(0, 600));
      return `    <item>
      <title>${title}</title>
      <link>${link}</link>
      <guid isPermaLink="false">${e.slug}</guid>
      <pubDate>${date}</pubDate>
      <description>${description}</description>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escape(SITE.name)} — Changelog</title>
    <link>${SITE.url}/changelog/</link>
    <description>${escape(SITE.description)}</description>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
