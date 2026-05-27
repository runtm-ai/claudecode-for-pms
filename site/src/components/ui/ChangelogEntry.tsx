type Props = {
  date: string;
  version: string;
  title: string;
  children: React.ReactNode;
};

export function ChangelogEntry({ date, version, title, children }: Props) {
  return (
    <article className="card-content">
      <div className="flex items-baseline gap-3 mb-2">
        <span className="font-mono text-xs text-text-soft">{date}</span>
        <span className="text-xs px-2 py-0.5 border border-border rounded text-text-soft">
          v{version}
        </span>
      </div>
      <h2 className="text-xl font-semibold text-text">{title}</h2>
      <div className="prose-runtime mt-3">{children}</div>
    </article>
  );
}
