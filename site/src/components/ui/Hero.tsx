import Link from 'next/link';

type Props = {
  eyebrow: string;
  headline: string;
  subhead: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function Hero({ eyebrow, headline, subhead, primaryCta, secondaryCta }: Props) {
  return (
    <section className="brand-mesh">
      <div className="max-w-6xl mx-auto px-5 pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-20 md:pb-28">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1.05fr_1fr] items-center">
          <div>
            <p className="eyebrow-pill">{eyebrow}</p>
            <h1 className="headline-xl mt-5 max-w-2xl">{headline}</h1>
            <p className="text-base sm:text-lg text-text-muted mt-5 max-w-xl leading-relaxed">
              {subhead}
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link href={primaryCta.href} className="btn-primary w-full sm:w-auto">
                {primaryCta.label}
              </Link>
              {secondaryCta && (
                <Link href={secondaryCta.href} className="btn-secondary w-full sm:w-auto">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
            <p className="text-xs text-text-soft mt-4">
              MIT licensed. Apache-2.0 attribution included in every shipped skill.
            </p>
          </div>
          <div className="relative">
            <img
              src="/hero-animation.apng"
              alt="Claude Code for PMs — 3-scene terminal animation"
              className="w-full"
              style={{ maxWidth: 820 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
