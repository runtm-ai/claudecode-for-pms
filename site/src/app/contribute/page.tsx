import Link from 'next/link';
import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { RepoCTA } from '@/components/ui/RepoCTA';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { SITE } from '@/lib/tokens';

export const metadata = {
  title: 'Contribute',
  description:
    'How to add a skill, fix a practice, or rewrite a template. We curate, we don’t gatekeep. Drive-by PRs welcome.',
};

export default function ContributePage() {
  return (
    <>
      <section className="brand-mesh">
        <div className="max-w-3xl mx-auto px-5 pt-14 pb-12 sm:pt-16 sm:pb-16">
          <p className="eyebrow-pill">Contribute</p>
          <h1 className="headline-xl mt-5">
            Help us make this useful to the next PM.
          </h1>
          <p className="text-base sm:text-lg text-text-muted mt-5 leading-relaxed">
            The repo is MIT. The site is open source. We curate, we
            don&rsquo;t gatekeep &mdash; a drive-by PR is welcome.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 pt-10 pb-6">
        <SectionEyebrow>What we accept</SectionEyebrow>
        <div className="prose-runtime mt-4">
          <ul>
            <li>
              <strong>New skills.</strong> One <code>SKILL.md</code> per PR, using the
              seven-section format the six starter skills follow. Add an attribution
              footer. Edit{' '}
              <code>site/src/content/skills.json</code> to surface it on{' '}
              <a href="/skills/">/skills</a>.
            </li>
            <li>
              <strong>Better practice pages.</strong> If a practice MDX file in{' '}
              <code>site/src/content/best-practices/</code> is wrong, outdated, or
              missing context, file an issue or send a PR. Cite a public source.
            </li>
            <li>
              <strong>Template improvements.</strong> If <code>templates/CLAUDE.md</code> or
              any of the <code>pr_flow/</code> rules would be clearer with one more
              section, propose it.
            </li>
            <li>
              <strong>Fixes &amp; improvements.</strong> Broken links, typos, tightened
              copy, a11y fixes. Small ones get merged fast.
            </li>
            <li>
              <strong>Translations.</strong> English-only in V1. If you want to translate,
              open an issue first so we can plan routing.
            </li>
          </ul>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 py-6">
        <SectionEyebrow>What we don&rsquo;t accept</SectionEyebrow>
        <div className="prose-runtime mt-4">
          <ul>
            <li>Marketing for your product. We have nothing against you &mdash; just keep it out of the playbook.</li>
            <li>Unverified claims or anything you can&rsquo;t link to a public source.</li>
            <li>Skills that re-package a tool&rsquo;s manual. Skills encode judgment.</li>
            <li>Skills that require a paid service to install.</li>
            <li>Anything that turns this into a course or gated content.</li>
            <li>Breaking changes to the template file paths. Other tools depend on them.</li>
          </ul>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 py-6">
        <SectionEyebrow>How to open a PR</SectionEyebrow>
        <div className="prose-runtime mt-4">
          <ol>
            <li>
              Fork{' '}
              <a href={SITE.repo} target="_blank" rel="noopener noreferrer">
                runtm-ai/claudecode-for-pms
              </a>
              .
            </li>
            <li>Branch off <code>main</code>. Keep the change small.</li>
            <li>Run the site locally to check formatting:</li>
          </ol>
        </div>
        <CodeBlock
          code={`git clone ${SITE.repo}.git
cd claudecode-for-pms/site
npm install
npm run dev    # http://localhost:3000`}
          snippetId="contribute-clone"
          label="local dev"
        />
        <div className="prose-runtime mt-4">
          <ol start={4}>
            <li>
              For a new skill, name the PR <code>add: skills/&lt;name&gt;</code>.
            </li>
            <li>
              For a new practice, name it <code>add: best-practices/&lt;slug&gt;</code>.
            </li>
            <li>Open the PR with a 2-3 sentence description (what + why). We respond within a week.</li>
          </ol>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 py-6">
        <SectionEyebrow>Secrets</SectionEyebrow>
        <div className="prose-runtime mt-4">
          <p>
            Never commit a real API key. The repo ships with{' '}
            <a
              href={`${SITE.repo}/blob/main/.gitleaks.toml`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>.gitleaks.toml</code>
            </a>
            {' '}&mdash; wire it as a pre-commit hook before your first commit. Use{' '}
            <code>.env.local</code> (gitignored) and <code>$&#123;VAR&#125;</code>
            {' '}substitution in <code>.mcp.json</code>. The full playbook is in{' '}
            <Link href="/best-practices/secrets/">practice 07</Link>, including how we
            burned ourselves on day zero.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 py-6">
        <SectionEyebrow>Voice</SectionEyebrow>
        <div className="prose-runtime mt-4">
          <ul>
            <li>Plainspoken, declarative, period-ending sentences.</li>
            <li>
              No buzzwords. Banned-words list lives in{' '}
              <a
                href={`${SITE.repo}/blob/main/templates/CLAUDE.md`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <code>templates/CLAUDE.md</code>
              </a>
              .
            </li>
            <li>Active verbs, specific nouns.</li>
          </ul>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 py-6">
        <SectionEyebrow>Code of conduct</SectionEyebrow>
        <div className="prose-runtime mt-4">
          <p>
            We follow the{' '}
            <a
              href="https://www.contributor-covenant.org/version/2/1/code_of_conduct/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contributor Covenant
            </a>
            . Be kind, assume good faith, leave the playbook better than you
            found it. The reviewer is volunteering their afternoon &mdash;
            disagreements get resolved on the issue thread, not in comments on
            the diff.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-20">
        <RepoCTA context="contribute" />
      </section>
    </>
  );
}
