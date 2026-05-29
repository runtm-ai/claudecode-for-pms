import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { C, MONO, SANS } from '../tokens';
import { MASCOT_PATH } from '../assets';

const RobotSmall = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill={C.orange}>
    <path clipRule="evenodd" fillRule="evenodd" d={MASCOT_PATH} />
  </svg>
);

export const SceneWelcome = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Fade in: f0-12
  const fadeIn = interpolate(frame, [0, 12], [0, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });

  // Box springs in: f2-30
  const boxScale = spring({ frame: frame - 2, fps, config: { damping: 16, stiffness: 120 }, durationInFrames: 28 });
  const boxScale2 = Math.min(1, 0.92 + boxScale * 0.08);

  // Left panel content: f15-35
  const leftOp = interpolate(frame, [15, 35], [0, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });

  // Right panel content: f28-48
  const rightOp = interpolate(frame, [28, 48], [0, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });
  const rightY = interpolate(frame, [28, 48], [10, 0], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });

  // Hint text: f45-60
  const hintOp = interpolate(frame, [45, 60], [0, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });

  // Prompt types in: f55-84
  const promptFull = 'try "fix typecheck errors"';
  const promptChars = Math.floor(
    interpolate(frame, [55, 84], [0, promptFull.length], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' })
  );

  // Cursor blink: every 20 frames
  const cursorVisible = Math.floor(frame / 20) % 2 === 0;

  // Fade out: f88-100
  const fadeOut = interpolate(frame, [88, 100], [1, 0], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });

  return (
    <AbsoluteFill style={{ backgroundColor: C.bg, opacity: fadeIn * fadeOut }}>
      {/* Tab bar */}
      <div style={{
        height: 36, background: C.chrome,
        display: 'flex', alignItems: 'center', padding: '0 12px', gap: 8,
        borderBottom: `1px solid ${C.borderSubtle}`,
      }}>
        {/* Tab */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 6,
          background: C.bg, borderRadius: '6px 6px 0 0',
          padding: '4px 12px', border: `1px solid ${C.borderSubtle}`,
        }}>
          {/* Orange square icon */}
          <div style={{ width: 14, height: 14, background: C.orange, borderRadius: 2 }} />
          <span style={{ fontFamily: MONO, fontSize: 12, color: C.text }}>Claude Code</span>
          <span style={{ fontFamily: MONO, fontSize: 12, color: C.textDim, marginLeft: 4 }}>✕</span>
        </div>
        <span style={{ fontFamily: MONO, fontSize: 14, color: C.textDim, marginLeft: 4 }}>+</span>
      </div>

      {/* Content */}
      <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
        {/* Welcome box */}
        <div style={{
          border: `1.5px solid ${C.orangeBorder}`,
          borderRadius: 8,
          overflow: 'hidden',
          transform: `scale(${boxScale2})`,
          transformOrigin: 'top center',
        }}>
          {/* Box header */}
          <div style={{
            background: C.orangeSoft,
            borderBottom: `1px solid ${C.orangeBorder}`,
            padding: '7px 14px',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <span style={{ fontFamily: MONO, fontSize: 13, color: C.orange, fontWeight: 700 }}>
              Claude Code
            </span>
            <span style={{ fontFamily: MONO, fontSize: 13, color: C.textMuted }}>v2.1.6</span>
          </div>

          {/* Box body: 2 columns */}
          <div style={{ display: 'flex', minHeight: 155 }}>
            {/* Left: welcome */}
            <div style={{
              flex: 1, padding: '16px 16px', display: 'flex', flexDirection: 'column',
              alignItems: 'center', borderRight: `1px solid ${C.borderSubtle}`,
              opacity: leftOp,
            }}>
              <RobotSmall />
              <div style={{
                fontFamily: MONO, fontSize: 14, fontWeight: 700,
                color: C.text, marginTop: 10, textAlign: 'center',
              }}>
                Welcome back Daniel!
              </div>
              <div style={{
                fontFamily: MONO, fontSize: 10, color: C.textMuted,
                marginTop: 10, textAlign: 'center', lineHeight: 1.8,
              }}>
                Sonnet 4.5 · API Usage Billing{'\n'}Why Try AI · ~\Claude Code
              </div>
            </div>

            {/* Right: tips */}
            <div style={{
              flex: '0 0 210px', padding: '14px 16px',
              opacity: rightOp, transform: `translateY(${rightY}px)`,
            }}>
              <div style={{ fontFamily: MONO, fontSize: 11, fontWeight: 700, color: C.orange, marginBottom: 6 }}>
                Tips for getting started
              </div>
              <div style={{ fontFamily: MONO, fontSize: 10.5, color: C.textMuted, lineHeight: 1.7 }}>
                Ask Claude to create a new app{'\n'}or clone a repository
              </div>
              <div style={{ fontFamily: MONO, fontSize: 11, fontWeight: 700, color: C.orange, marginTop: 12, marginBottom: 4 }}>
                Recent activity
              </div>
              <div style={{ fontFamily: MONO, fontSize: 10.5, color: C.textDim }}>
                No recent activity
              </div>
            </div>
          </div>
        </div>

        {/* Hint text */}
        <div style={{ fontFamily: MONO, fontSize: 11, color: C.textDim, opacity: hintOp }}>
          /model to try Opus 4.5
        </div>

        {/* Prompt line */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
          <span style={{ fontFamily: MONO, fontSize: 13, color: C.textMuted }}>{'> '}</span>
          <span style={{ fontFamily: MONO, fontSize: 13, color: C.text }}>
            {promptFull.slice(0, promptChars)}
          </span>
          {cursorVisible && promptChars < promptFull.length && (
            <span style={{ width: 8, height: 15, background: C.text, display: 'inline-block', marginLeft: 1 }} />
          )}
        </div>

        {/* Shortcuts hint */}
        <div style={{ fontFamily: MONO, fontSize: 11, color: C.textDim, marginTop: 2 }}>
          ? for shortcuts
        </div>
      </div>
    </AbsoluteFill>
  );
};
