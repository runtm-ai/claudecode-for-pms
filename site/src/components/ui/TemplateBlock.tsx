import { CodeBlock } from './CodeBlock';

type Props = {
  path: string;
  content: string;
  excerpt?: boolean;
  href?: string;
};

const PREVIEW_LINES = 18;

export function TemplateBlock({ path, content, excerpt, href }: Props) {
  const display = excerpt
    ? content.split('\n').slice(0, PREVIEW_LINES).join('\n') +
      (content.split('\n').length > PREVIEW_LINES ? '\n…' : '')
    : content;

  return (
    <div className="card-content">
      <div className="flex items-center justify-between gap-3 mb-3">
        <code className="font-mono text-sm text-text">{path}</code>
        {href && (
          <a
            href={href}
            className="text-xs text-text-soft hover:text-text underline underline-offset-2"
          >
            View on GitHub
          </a>
        )}
      </div>
      <CodeBlock code={display} snippetId={path} />
    </div>
  );
}
