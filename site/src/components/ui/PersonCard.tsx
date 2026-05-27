type Props = {
  name: string;
  role: string;
  quote?: string;
  link: string;
  linkLabel: string;
};

export function PersonCard({ name, role, quote, link, linkLabel }: Props) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="card-content">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-accent-soft text-accent font-semibold flex items-center justify-center text-sm">
          {initials}
        </div>
        <div>
          <p className="font-semibold text-text leading-tight">{name}</p>
          <p className="text-xs text-text-soft">{role}</p>
        </div>
      </div>
      {quote && (
        <blockquote className="text-sm text-text-muted mt-4 italic leading-relaxed">
          &ldquo;{quote}&rdquo;
        </blockquote>
      )}
      <a
        href={link}
        className="text-sm font-medium text-accent mt-4 inline-block underline underline-offset-2"
      >
        {linkLabel} &rarr;
      </a>
    </div>
  );
}
