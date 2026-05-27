export const COLORS = {
  accent: '#7c3aed',
  accentLight: '#a78bfa',
  accentSoft: '#ede9fe',
  accentDark: '#5b21b6',
  text: '#18181b',
  textMuted: '#52525b',
  textSoft: '#71717a',
  bgDark: '#0a0a0f',
  bgCream: '#fafafa',
  bgMesh1: '#f5f3ff',
  bgMesh2: '#fef3f2',
  border: '#e4e4e7',
  borderSoft: '#f4f4f5',
} as const;

export const FONTS = {
  sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
  mono: '"SF Mono", "JetBrains Mono", Menlo, monospace',
} as const;

export const SITE = {
  name: 'Claude Code for PMs',
  url: 'https://claudecodeforpms.com',
  repo: 'https://github.com/runtm-ai/claudecode-for-pms',
  cloneCmd: 'git clone https://github.com/runtm-ai/claudecode-for-pms.git',
  description:
    'Open-source templates, skills, and best practices for product managers using Claude Code.',
  runtimeUrl: 'https://runtm.com',
} as const;
