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

Before writing any composition, wire brand tokens. Read `skills/your-brand/SKILL.md`
and create `src/brand.ts`:

```ts
export const BRAND = {
  primary: '#YOUR_PRIMARY_COLOR',
  bg: '#FFFFFF',
  text: '#111827',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  mono: '"SF Mono", "JetBrains Mono", monospace',
} as const;
```

## Storyboard format

Ask the PM for a storyboard before writing any code. Format:

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
    durationInFrames={180}   // 6s at 30fps — good for feature demos
    fps={30}
    width={1280}
    height={720}
  />
);
```

**`src/ProductDemo.tsx`** — split scenes into sub-components, use `<Sequence>` to place them in time:

```tsx
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from 'remotion';
import { BRAND } from './brand';

export const ProductDemo = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: BRAND.bg }}>
      <Sequence from={0} durationInFrames={90}>
        <Scene1 />
      </Sequence>
      <Sequence from={90} durationInFrames={90}>
        <Scene2 />
      </Sequence>
    </AbsoluteFill>
  );
};

const Scene1 = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const translateY = spring({ frame, fps, config: { damping: 14 } });

  return (
    <AbsoluteFill
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity,
        transform: `translateY(${(1 - translateY) * 40}px)`,
      }}
    >
      <h1 style={{ fontFamily: BRAND.fontFamily, color: BRAND.text }}>
        Your headline here
      </h1>
    </AbsoluteFill>
  );
};
```

## Animation primitives

| Primitive | Use it for | Example |
|---|---|---|
| `interpolate(frame, [in, out], [from, to])` | Opacity, scale, position — linear | `interpolate(frame, [0, 20], [0, 1])` |
| `spring({ frame, fps, config })` | Bouncy entrances, natural motion | `spring({ frame, fps, config: { damping: 14 } })` |
| `useCurrentFrame()` | Drive any animation off playback time | `const frame = useCurrentFrame()` |
| `useVideoConfig()` | Read fps, width, height — never hardcode | `const { fps, width } = useVideoConfig()` |
| `<Sequence from={N}>` | Start a sub-scene at frame N | Scene cuts without re-mounting parent |
| `<AbsoluteFill>` | Full-bleed layer — use for backgrounds and overlays | Stacks like CSS `position: absolute; inset: 0` |

Always pass `extrapolateRight: 'clamp'` to `interpolate` unless the
animation should continue past its defined endpoint.

**Frame budget at 30fps:**

| Video type | Duration | Frames |
|---|---|---|
| Feature announcement | 6s | 180 |
| Onboarding walkthrough | 15s | 450 |
| Tutorial / how-to | 30s | 900 |

## Render

```bash
# Live preview with hot-reload
npx remotion studio

# Render to MP4 (for web, email attachment, Loom replacement)
npx remotion render src/index.ts ProductDemo out/demo.mp4

# High-quality source for GIF conversion (2× scale, low CRF)
npx remotion render src/index.ts ProductDemo out/demo-hq.mp4 --scale=2 --crf=16

# Convert to GIF — good for Product Hunt, social, email clients that block video
ffmpeg -i out/demo-hq.mp4 \
  -vf "fps=24,scale=1280:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=256[p];[s1][p]paletteuse=dither=sierra2_4a" \
  out/demo.gif
```

GIF note: the ffmpeg filter generates a 256-color palette per video for best
quality. `sierra2_4a` dither handles gradients without banding.

## Anti-patterns

- **Async inside components.** Remotion renders frame-by-frame synchronously.
  No `await`, no `fetch`, no `useEffect` — all data must be props or constants.
- **CSS transitions or animations.** They don't execute during render. Use
  `interpolate` or `spring` driven by `useCurrentFrame()` instead.
- **Hardcoded fps.** Always `const { fps } = useVideoConfig()` and derive
  frame counts from it. Hardcoded `30` breaks if anyone changes the composition.
- **One giant component.** Split each scene into its own component. Use
  `<Sequence>` to place them in time. Long single components are hard to edit.
- **Skipping the storyboard.** Write the storyboard before any code. Changing
  scene durations after animations are built costs real time.
- **Images wider than 2000px.** Any `<Img>` source exceeding 2000px on either
  side can crash the renderer. Downscale before importing.

## PM ↔ developer workflow

1. PM writes the storyboard (scenes, durations, copy, screenshots to include).
2. Claude scaffolds `Root.tsx`, scene components, and `brand.ts` from the storyboard.
3. PM opens `npx remotion studio` — live preview, no build step.
4. PM edits copy and durations directly; developer adjusts animations.
5. Final render: MP4 for web / Loom replacement, GIF for email and social.

For most products, one Remotion project covers onboarding, launch, and
tutorial needs. Once the scaffold exists, re-rendering after a UI change
is a one-liner.

## Attribution

Patterns adapted from [Remotion docs](https://www.remotion.dev/docs) and
production experience building PH launch assets. The ffmpeg GIF pipeline
is adapted from the Remotion community cookbook.
