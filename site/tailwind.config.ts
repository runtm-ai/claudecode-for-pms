import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,mdx}',
    './src/content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#7c3aed',
          light: '#a78bfa',
          soft: '#ede9fe',
          dark: '#5b21b6',
        },
        coral: {
          DEFAULT: '#fb7185',
          soft: '#fef3f2',
        },
        text: {
          DEFAULT: '#18181b',
          muted: '#52525b',
          soft: '#71717a',
        },
        bg: {
          dark: '#0a0a0f',
          cream: '#fafafa',
          mesh1: '#f5f3ff',
          mesh2: '#fef3f2',
        },
        border: {
          DEFAULT: '#e4e4e7',
          soft: '#f4f4f5',
        },
        success: '#10b981',
        info: '#3b82f6',
        warning: '#f59e0b',
        error: '#ef4444',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'system-ui', 'sans-serif'],
        mono: ['"SF Mono"', '"JetBrains Mono"', 'Menlo', 'monospace'],
      },
      boxShadow: {
        anchor: '4px 4px 0 #18181b',
        'anchor-hover': '2px 2px 0 #18181b',
        hero: '0 30px 60px -20px rgba(20,20,40,0.18), 0 10px 30px -10px rgba(124,58,237,0.12)',
        card: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        chip: '0 1px 3px rgba(0,0,0,0.08)',
      },
      letterSpacing: {
        tight2: '-0.02em',
        eyebrow: '0.08em',
      },
    },
  },
  plugins: [],
};

export default config;
