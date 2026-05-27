import type { MetadataRoute } from 'next';
import { PRACTICES } from '@/lib/practices';
import { SITE } from '@/lib/tokens';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    '',
    '/best-practices',
    '/skills',
    '/templates',
    '/resources',
    '/contribute',
    '/changelog',
  ];

  return [
    ...staticRoutes.map((r) => ({
      url: `${SITE.url}${r}/`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: r === '' ? 1 : 0.7,
    })),
    ...PRACTICES.map((p) => ({
      url: `${SITE.url}/best-practices/${p.slug}/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
