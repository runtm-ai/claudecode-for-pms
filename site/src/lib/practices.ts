import { listMDX } from './content';

export type Practice = {
  slug: string;
  number: number;
  title: string;
  blurb: string;
  related: string[];
};

export const PRACTICES: Practice[] = listMDX('best-practices')
  .map((doc) => ({
    slug: doc.slug,
    number: doc.frontmatter.number as number,
    title: doc.frontmatter.title as string,
    blurb: doc.frontmatter.blurb as string,
    related: (doc.frontmatter.related as string[]) ?? [],
  }))
  .sort((a, b) => a.number - b.number);

export const getPractice = (slug: string): Practice | undefined =>
  PRACTICES.find((p) => p.slug === slug);
