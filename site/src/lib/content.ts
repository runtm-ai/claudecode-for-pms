import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const CONTENT_ROOT = path.join(process.cwd(), 'src', 'content');
const REPO_ROOT = path.join(process.cwd(), '..');

export type MDXDoc = {
  slug: string;
  frontmatter: Record<string, any>;
  body: string;
};

export function readMDX(dir: string, slug: string): MDXDoc | null {
  const file = path.join(CONTENT_ROOT, dir, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  return { slug, frontmatter: data, body: content };
}

export function listMDX(dir: string): MDXDoc[] {
  const root = path.join(CONTENT_ROOT, dir);
  if (!fs.existsSync(root)) return [];
  return fs
    .readdirSync(root)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, '');
      return readMDX(dir, slug)!;
    });
}

export function readRepoFile(relativePath: string): string {
  const file = path.join(REPO_ROOT, relativePath);
  if (!fs.existsSync(file)) {
    return `# ${relativePath} (not found)\n`;
  }
  return fs.readFileSync(file, 'utf8');
}

export const REPO_TEMPLATE_FILES: { path: string; label: string }[] = [
  { path: 'CLAUDE.md', label: 'PM defaults Claude loads every session' },
  { path: 'DESIGN.md', label: 'Brand tokens, voice, surface rules' },
  { path: 'pr_flow/create-prd.mdc', label: 'The PRD authoring rule' },
  { path: 'pr_flow/generate-tasks.mdc', label: 'Turn a PRD into a task list' },
  { path: 'pr_flow/process-task-list.mdc', label: 'Work the list one sub-task at a time' },
  { path: 'skills/your-brand/SKILL.md', label: 'Your team\u2019s brand-as-skill template' },
  { path: 'skills/writing-prds/SKILL.md', label: 'PRD authoring skill' },
  { path: 'skills/writing-release-notes/SKILL.md', label: 'Release notes skill' },
  { path: 'skills/writing-stakeholder-updates/SKILL.md', label: 'Weekly update skill' },
  { path: 'skills/prioritizing-features/SKILL.md', label: 'Prioritization framework picker' },
];
