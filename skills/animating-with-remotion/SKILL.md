---
name: animating-with-remotion
description: |
  Building product animations, onboarding walkthroughs, feature demos, or
  tutorial videos with Remotion. Use when the user says "create a Remotion
  animation", "animate my product", "build an onboarding video", "make a
  product demo video", "create a tutorial walkthrough", "render a feature
  launch video", or "set up Remotion".
allowed-tools:
  - Read
  - Write
  - Edit
  - Bash
---

# Rule: Animating with Remotion

## Goal

Turn a PM's storyboard into a working Remotion composition that renders to
MP4 or GIF. Remotion compiles React to video — deterministic, version-controlled,
re-renderable. The PM edits the storyboard like a PRD; the video re-renders
on each change. No editing suite. No render farm.

## Setup (first time)

```bash
npx create-video@latest      # scaffold a new Remotion project
cd my-video && npm install
```

Adding to an existing repo:

```bash
npm install remotion @remotion/renderer
```

Before writing any composition, read `skills/your-brand/SKILL.md` and
create `src/shared.tsx` (see next section).

## Design tokens: `src/shared.tsx`

All brand values and reusable animation helpers live in one file. Import
from here — never hardcode hex or font strings in composition files.

```tsx
// src/shared.tsx

export const COLORS = {
  primary:     '#YOUR_PRIMARY',   // brand accent
  primarySoft: '#YOUR_SOFT',      // tinted backgrounds
  text:        '#18181b',         // headlines, body
  textMuted:   '#52525b',         // secondary copy
  textSoft:    '#71717a',         // captions
  border:      '#e4e4e7',
  cardBg:      '#ffffff',
  success:     '#10b981', successSoft: '#d1fae5',
  info:        '#3b82f6', infoSoft:    '#dbeafe',
  warning:     '#f59e0b', warningSoft: '#fef3c7',
  error:       '#ef4444', errorSoft:   '#fee2e2',
} as const;

export const FONT      = '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
export const FONT_MONO = '"SF Mono", "JetBrains Mono", Menlo, monospace';

// Reusable animation helpers
export const fadeIn = (frame: number, start = 0, duration = 20) =>
  Math.min(1, Math.max(0, (frame - start) / duration));

export const slideUp = (frame: number, start = 0, distance = 30) => {
  const t = Math.min(1, Math.max(0, (frame - start) / 20));
  return `translateY(${(1 - t) * distance}px)`;
};
```

### Logo handling

Store logo files in `public/logos/`. Use Remotion's `staticFile()` — never
a raw `<img src="...">` path.

```tsx
import { Img, staticFile } from 'remotion';

// Light backgrounds — use as-is
<Img src={staticFile('logos/your-logo.png')} style={{ height: 24 }} />

// Dark backgrounds — CSS filter invert instead of a separate white asset
<Img src={staticFile('logos/your-logo.png')}
     style={{ height: 24, filter: 'invert(1)' }} />
```

**2000px rule:** Any image file over 2000px on either side will crash the
Remotion renderer. Check before adding assets:

```bash
# Check a file (Mac)
sips -g pixelWidth -g pixelHeight public/logos/your-logo.png

# Downscale to 1024px (Mac)
sips -Z 1024 public/logos/your-logo.png

# Linux equivalent
convert public/logos/your-logo.png -resize 1024x1024 public/logos/your-logo.png
```

1024px is safe and plenty — logos render at 16–32px in compositions.

## Storyboard format

Ask the PM for a storyboard before writing any code:

```
Scene 1 — 0–2s
  Background: [brand bg / screenshot / gradient]
  Left: [headline copy]
  Right: [visual — screenshot, icon, diagram]
  VO (optional): "Here's how to get started."

Scene 2 — 2–5s
  ...
```

Clarify before starting: total duration, what animates in vs. out, any
voiceover or caption text, and which screenshots or icons appear.

## Composition scaffold

**`src/Root.tsx`** — register compositions here, one per video:

```tsx
import { Composition } from 'remotion';
import { ProductDemo } from './ProductDemo';

export const RemotionRoot = () => (
  <Composition
    id="ProductDemo"
    component={ProductDemo}
    durationInFrames={180}   // 6s at 30fps
    fps={30}
    width={1280}
    height={720}
  />
);
```

**Left-headline / right-visual layout** — the most proven pattern for
product demos. Headline on the left drives the narrative; the right side
shows the UI or diagram animating in.

```tsx
import { AbsoluteFill, Sequence, useCurrentFrame, useVideoConfig, interpolate, spring } from 'remotion';
import { COLORS, FONT, fadeIn, slideUp } from './shared';

export const ProductDemo = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.cardBg }}>
    <Sequence from={0}  durationInFrames={90}><Scene1 /></Sequence>
    <Sequence from={90} durationInFrames={90}><Scene2 /></Sequence>
  </AbsoluteFill>
);

const Scene1 = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardScale = spring({ frame, fps, config: { damping: 14 } });

  return (
    <AbsoluteFill style={{ display: 'flex', padding: 60, gap: 48 }}>

      {/* Left column — headline + eyebrow */}
      <div style={{ flex: '0 0 420px', display: 'flex', flexDirection: 'column',
                    justifyContent: 'center', gap: 16,
                    opacity: fadeIn(frame), transform: slideUp(frame) }}>
        <p style={{ fontFamily: FONT, fontSize: 13, fontWeight: 600,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    color: COLORS.primary }}>
          New in 2.0
        </p>
        <h1 style={{ fontFamily: FONT, fontSize: 44, fontWeight: 600,
                     letterSpacing: '-0.02em', color: COLORS.text, margin: 0 }}>
          Your headline here
        </h1>
        <p style={{ fontFamily: FONT, fontSize: 17, color: COLORS.textMuted,
                    lineHeight: 1.6, margin: 0 }}>
          Supporting copy — one or two sentences max.
        </p>
      </div>

      {/* Right column — card / screenshot */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center',
                    justifyContent: 'center',
                    transform: `scale(${cardScale})` }}>
        <div style={{
          background: COLORS.cardBg,
          borderRadius: 16,
          border: `1px solid ${COLORS.border}`,
          boxShadow: '0 1px 2px rgba(0,0,0,.05), 0 4px 6px -2px rgba(0,0,0,.10)',
          padding: 32,
          width: '100%',
          maxWidth: 580,
        }}>
          {/* Your screenshot, diagram, or UI mockup */}
        </div>
      </div>

    </AbsoluteFill>
  );
};
```

## Animation primitives

| Primitive | Use it for | Example |
|---|---|---|
| `interpolate(frame, [in, out], [from, to])` | Opacity, scale, position | `interpolate(frame, [0, 20], [0, 1])` |
| `spring({ frame, fps, config })` | Bouncy card entrances, natural motion | `spring({ frame, fps, config: { damping: 14 } })` |
| `useCurrentFrame()` | Drive any animation off playback time | `const frame = useCurrentFrame()` |
| `useVideoConfig()` | Read fps, width, height — never hardcode | `const { fps, width } = useVideoConfig()` |
| `<Sequence from={N}>` | Start a sub-scene at frame N | Scene cuts without re-mounting parent |
| `<AbsoluteFill>` | Full-bleed layer | Stacks like `position: absolute; inset: 0` |

Always pass `extrapolateRight: 'clamp'` to `interpolate` unless the
animation should continue past its endpoint.

**Frame budget at 30fps:**

| Timing | Frames | Use for |
|---|---|---|
| Card spring in | 0–25 | Entrance animation |
| Text fade + slide | 5–25 | Headline reveal |
| Content reveals | 25–120 | Staggered list items, badges |
| Payoff | 90–150 | Key metric, completion state |
| Hold final frame | 150–180 | Static thumbnail |

**Video durations:**

| Type | Duration | Frames |
|---|---|---|
| Feature announcement | 6s | 180 |
| Onboarding walkthrough | 15s | 450 |
| Tutorial / how-to | 30s | 900 |

## Render

```bash
# Live preview with hot-reload
npx remotion studio

# MP4 — for web, email, Loom replacement
npx remotion render src/index.ts ProductDemo out/demo.mp4

# High-quality MP4 source for GIF conversion (2× scale, low CRF)
npx remotion render src/index.ts ProductDemo out/demo-hq.mp4 --scale=2 --crf=16 --log=error
```

### Render to GIF (for Product Hunt, social, email clients)

GIF is required for Product Hunt and renders well in email. The pipeline
below survives aggressive re-compression:

**Step 1 — Extract the final-frame poster** (becomes the static gallery thumbnail):

```bash
# Seek to just before the last frame — e.g. for a 6s video: 6 - 0.05 = 5.95
ffmpeg -y -ss 5.95 -i out/demo-hq.mp4 -frames:v 1 /tmp/poster.png
```

Do not use `-sseof` — it's unreliable across ffmpeg versions.

**Step 2 — Build the GIF with the poster prepended as a 0.5s hold:**

```bash
ffmpeg -y \
  -loop 1 -t 0.5 -i /tmp/poster.png \
  -i out/demo-hq.mp4 \
  -filter_complex "
    [0:v]scale=2560:1440,setsar=1,fps=30,format=yuv420p[poster];
    [1:v]fps=30,format=yuv420p[main];
    [poster][main]concat=n=2:v=1[combined];
    [combined]fps=24,scale=1280:-1:flags=lanczos+accurate_rnd+full_chroma_int,
    split[s0][s1];[s0]palettegen=max_colors=256:stats_mode=full[p];
    [s1][p]paletteuse=dither=sierra2_4a" \
  out/demo.gif
```

Why each flag:
- `--scale=2 --crf=16` on the MP4 — 2× source resolution; lower CRF = more pixels to downscale from
- `-loop 1 -t 0.5` — holds the final frame for 0.5s at the start so the static thumbnail shows the payoff, not the blank intro
- `fps=24` — smoother than 18fps at the same file budget
- `scale=1280:-1` — slight upscale so platform re-compression has more to work with
- `max_colors=256` — GIF format maximum; brand colors and gradients need every palette slot
- `dither=sierra2_4a` — error-diffusion dither produces sharper text than Bayer dithering

Target: under 5 MB for social. Under 10 MB for Product Hunt. Don't sacrifice quality to shrink size — PH accepts 10 MB.

## Anti-patterns

- **Async inside components.** Remotion renders frame-by-frame synchronously. No `await`, no `fetch`, no `useEffect` — all data must be props or constants.
- **CSS transitions or animations.** They don't execute during render. Use `interpolate` or `spring` driven by `useCurrentFrame()`.
- **Hardcoded fps or dimensions.** Always `const { fps, width } = useVideoConfig()`.
- **One giant component.** Split each scene into its own component. Use `<Sequence>` to place them in time.
- **Skipping the storyboard.** Changing scene durations after animations are wired costs real time.
- **Images over 2000px.** Downscale source assets before importing.
- **Hardcoded colors or fonts.** All tokens come from `shared.tsx`.

## PM ↔ developer workflow

1. PM writes the storyboard (scenes, durations, copy, which screenshots appear).
2. Claude scaffolds `Root.tsx`, scene components, and `shared.tsx` from the storyboard.
3. PM opens `npx remotion studio` — live preview, no build step.
4. PM edits copy and durations directly; developer adjusts spring configs and timing.
5. Final render: MP4 for web / Loom replacement, GIF for social and email.

One Remotion project covers onboarding, launch, and tutorial needs. Once the scaffold exists, re-rendering after a UI change is a one-liner.

## Attribution

Patterns adapted from [Remotion docs](https://www.remotion.dev/docs) and
production experience. The ffmpeg GIF pipeline and poster trick are from
the Remotion community cookbook and Runtime's PH launch workflow.
