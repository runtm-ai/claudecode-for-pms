import { SectionEyebrow } from '@/components/ui/SectionEyebrow';
import { RepoCTA } from '@/components/ui/RepoCTA';
import { CodeBlock } from '@/components/ui/CodeBlock';
import { SITE } from '@/lib/tokens';

export const metadata = {
  title: 'Contribute',
  description:
    'How to add a skill, fix a practice, or rewrite a template. We accept PRs and we read them.',
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
            The repo is MIT. The site is open source. Send PRs against either.
          </p>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-5 pt-10 pb-10">

        <div className="prose-runtime mt-10">
          <h2>What we accept</h2>
          <ul>
            <li>
              <strong>New skills.</strong> One <code>SKILL.md</code> per PR, using the
              seven-section format the six starter skills follow. Add an attribution footer.
            </li>
            <li>
              <strong>Better practice pages.</strong> If a practice page is wrong,
              outdated, or missing context, file an issue or send a PR.
            </li>
            <li>
              <strong>Template improvements.</strong> If <code>CLAUDE.md</code> would be
              clearer with one more section, propose it.
            </li>
            <li>
              <strong>Translations.</strong> Open an issue first so we can plan structure.
            </li>
          </ul>

          <h2>What we don&rsquo;t accept</h2>
          <ul>
            <li>Skills that re-package a tool&rsquo;s manual. Skills encode judgment.</li>
            <li>Anything that adds a paid service to the cloneable repo.</li>
            <li>Breaking changes to the template file paths. Other tools depend on them.</li>
          </ul>

          <h2>How to PR</h2>
          <ol>
            <li>Fork the repo.</li>
            <li>Branch off <code>main</code>. Keep the change small.</li>
            <li>Run the site locally to check formatting:</li>
          </ol>
        </div>

        <CodeBlock
          code={`git clone ${SITE.repo}.git
cd claudecode-for-pms/site
npm install
npm run dev`}
          snippetId="contribute-clone"
        />

        <div className="prose-runtime mt-6">
          <ol start={4}>
            <li>Open a PR with a clear title. Link the practice or skill it touches.</li>
            <li>
              For a new skill, the title should be <code>add: skills/&lt;name&gt;</code>.
            </li>
          </ol>

          <h2>Code of conduct</h2>
          <p>
            Be kind, specific, and patient. The reviewer is volunteering their afternoon.
            Disagreements get resolved on the issue thread, not in comments on the diff.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-20">
        <RepoCTA context="contribute" />
      </section>
    </>
  );
}
