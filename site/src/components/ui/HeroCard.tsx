const TASKS = [
  { done: true, text: 'Auto-detect country from billing address' },
  { done: true, text: 'Rate-limit card retries — 3 per 10 min' },
  { done: false, text: 'Audit CVV paths in payment service' },
  { done: false, text: 'Gate new checkout behind feature flag' },
];

function Checkbox({ done }: { done: boolean }) {
  return (
    <span
      className={`mt-0.5 w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${
        done ? 'border-success bg-success/10' : 'border-border'
      }`}
    >
      {done && <span className="text-success text-[9px] font-bold leading-none">✓</span>}
    </span>
  );
}

export function HeroCard() {
  return (
    <div className="perspective-stack w-full">
      {/* Back card — the PRD that was fed in */}
      <div className="absolute inset-0 hidden md:block">
        <div className="perspective-card-back card-hero p-5 w-[85%] ml-auto">
          <div className="flex items-center gap-1.5 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-border" />
            <span className="w-2.5 h-2.5 rounded-full bg-border" />
            <span className="w-2.5 h-2.5 rounded-full bg-border" />
            <span className="ml-2 font-mono text-[11px] text-text-soft">tasks/prd-checkout.md</span>
          </div>
          <p className="text-[10px] font-semibold uppercase tracking-eyebrow text-text-soft mb-2">
            PRD · input
          </p>
          <p className="text-sm font-semibold text-text mb-2 leading-snug">
            Mobile checkout, in one screen.
          </p>
          <ul className="space-y-1.5 text-xs text-text-muted font-mono">
            <li>§1 — Detect billing country automatically</li>
            <li>§2 — Rate-limit card retries 3 / 10 min</li>
            <li>§3 — No CVV storage at any point</li>
          </ul>
        </div>
      </div>

      {/* Front card — Claude Code's generated task list */}
      <div className="perspective-card card-hero relative p-5 sm:p-6">
        {/* macOS chrome */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-3 h-3 rounded-full bg-error/70" />
          <span className="w-3 h-3 rounded-full bg-warning/70" />
          <span className="w-3 h-3 rounded-full bg-success/70" />
          <span className="ml-2 font-mono text-xs text-text-soft">Claude Code</span>
        </div>

        {/* Claude's reply bubble */}
        <div className="flex gap-2.5 mb-4">
          <span className="w-5 h-5 rounded-full bg-accent flex-shrink-0 flex items-center justify-center mt-0.5">
            <span className="text-white text-[9px] font-bold">C</span>
          </span>
          <p className="text-xs text-text-muted leading-relaxed">
            Read <span className="font-mono text-accent">prd-checkout.md</span>. Generated 4 tasks
            from the requirements — ready to process one at a time.
          </p>
        </div>

        {/* Generated tasks */}
        <div className="bg-bg-cream rounded-lg border border-border-soft p-3 space-y-2.5">
          {TASKS.map((task, i) => (
            <div key={i} className="flex items-start gap-2.5 text-sm">
              <Checkbox done={task.done} />
              <span className={task.done ? 'text-text-soft line-through text-xs' : 'text-text text-xs'}>
                {task.text}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[11px] text-text-soft font-mono">2 / 4 tasks done</span>
          <span className="text-[10px] font-semibold uppercase tracking-eyebrow text-accent">
            In progress
          </span>
        </div>
      </div>
    </div>
  );
}
