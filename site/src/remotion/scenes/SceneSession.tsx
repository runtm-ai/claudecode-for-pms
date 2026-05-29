import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { C, MONO, SANS } from '../tokens';
import { MASCOT_PATH } from '../assets';

const TASKS = [
  'Auto-detect country from billing address',
  'Rate-limit card retries — 3 per 10 min',
  'Audit CVV paths in payment service',
  'Gate new checkout behind feature flag',
];

const RobotTiny = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill={C.orange}>
    <path clipRule="evenodd" fillRule="evenodd" d={MASCOT_PATH} />
  </svg>
);

const Checkbox = ({ checked, checkFrame, frame }: { checked: boolean; checkFrame: number; frame: number }) => {
  const progress = checked
    ? interpolate(frame, [checkFrame, checkFrame + 12], [0, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' })
    : 0;
  const bg = progress > 0.5 ? C.green : 'transparent';
  const border = progress > 0.5 ? C.green : C.borderMid;
  const scale = progress > 0 ? interpolate(progress, [0, 0.5, 1], [1, 1.3, 1]) : 1;

  return (
    <div style={{
      width: 14, height: 14, borderRadius: 3,
      border: `1.5px solid ${border}`,
      background: bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
      transform: `scale(${scale})`,
    }}>
      {progress > 0.5 && (
        <span style={{ color: C.bg, fontSize: 9, fontWeight: 900, lineHeight: 1 }}>✓</span>
      )}
    </div>
  );
};

export const SceneSession = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Fade in: f0-10
  const fadeIn = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });

  // Header slides down: f0-14
  const headerY = interpolate(frame, [0, 14], [-16, 0], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });
  const headerOp = interpolate(frame, [0, 14], [0, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });

  // User prompt: f5-20
  const userFull = '> Read prd-checkout.md and generate tasks';
  const userChars = Math.floor(
    interpolate(frame, [5, 20], [0, userFull.length], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' })
  );

  // Claude response streams in: f22-42
  const replyFull = "I'll read prd-checkout.md. Generated 4 tasks from the requirements — ready to process one at a time.";
  const replyChars = Math.floor(
    interpolate(frame, [22, 42], [0, replyFull.length], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' })
  );

  // Bash card: f38-50
  const bashOp = interpolate(frame, [38, 50], [0, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });
  const bashY = interpolate(frame, [38, 50], [8, 0], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });

  // Tasks appear one by one: stagger by 4 frames each
  const taskOpacities = TASKS.map((_, i) =>
    interpolate(frame, [48 + i * 4, 58 + i * 4], [0, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' })
  );
  const taskYs = TASKS.map((_, i) =>
    interpolate(frame, [48 + i * 4, 58 + i * 4], [8, 0], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' })
  );

  // Checkboxes flip: task0 at f64, task1 at f74
  const check0Frame = 64;
  const check1Frame = 74;

  // Status bar: f80-90
  const statusOp = interpolate(frame, [80, 90], [0, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });

  // Final prompt cursor blink
  const cursorVisible = frame >= 100 && Math.floor(frame / 20) % 2 === 0;

  return (
    <AbsoluteFill style={{ backgroundColor: C.bg, opacity: fadeIn }}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '0 0 0 0' }}>

        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '12px 20px 10px',
          borderBottom: `1px solid ${C.borderSubtle}`,
          opacity: headerOp, transform: `translateY(${headerY}px)`,
        }}>
          <RobotTiny />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{ fontFamily: MONO, fontSize: 13, fontWeight: 700, color: C.text }}>
              Claude Code <span style={{ color: C.textMuted, fontWeight: 400 }}>v2.0.26</span>
            </span>
            <span style={{ fontFamily: MONO, fontSize: 10, color: C.textDim }}>
              Sonnet 4.5 · Claude Pro · /project/tasks/
            </span>
          </div>
        </div>

        {/* Scrollable content */}
        <div style={{ flex: 1, padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 8, overflow: 'hidden' }}>

          {/* User prompt */}
          <div style={{ fontFamily: MONO, fontSize: 12.5, color: C.text }}>
            {userFull.slice(0, userChars)}
          </div>

          {/* Claude response */}
          {replyChars > 0 && (
            <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <div style={{ width: 8, height: 8, borderRadius: 4, background: C.green, flexShrink: 0, marginTop: 4 }} />
              <span style={{ fontFamily: MONO, fontSize: 11.5, color: C.text, lineHeight: 1.55 }}>
                {replyFull.slice(0, replyChars)}
              </span>
            </div>
          )}

          {/* Bash tool card */}
          {bashOp > 0 && (
            <div style={{
              opacity: bashOp, transform: `translateY(${bashY}px)`,
              marginLeft: 16,
            }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <div style={{ width: 8, height: 8, borderRadius: 4, background: C.orange, flexShrink: 0, marginTop: 3 }} />
                <div>
                  <span style={{ fontFamily: MONO, fontSize: 11.5, color: C.text }}>
                    <span style={{ color: C.orange }}>Bash</span>
                    <span style={{ color: C.textMuted }}>(cat tasks/prd-checkout.md)</span>
                  </span>
                  <div style={{ fontFamily: MONO, fontSize: 10.5, color: C.textDim, marginTop: 2, paddingLeft: 12 }}>
                    └  Read successfully ✓
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Task list */}
          <div style={{ marginLeft: 16, marginTop: 2, display: 'flex', flexDirection: 'column', gap: 5 }}>
            {TASKS.map((task, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                opacity: taskOpacities[i], transform: `translateY(${taskYs[i]}px)`,
              }}>
                <Checkbox
                  checked={i < 2}
                  checkFrame={i === 0 ? check0Frame : check1Frame}
                  frame={frame}
                />
                <span style={{
                  fontFamily: MONO, fontSize: 11.5,
                  color: i < 2 && frame >= (i === 0 ? check0Frame + 12 : check1Frame + 12) ? C.textDim : C.text,
                  textDecoration: i < 2 && frame >= (i === 0 ? check0Frame + 12 : check1Frame + 12) ? 'line-through' : 'none',
                }}>
                  {task}
                </span>
              </div>
            ))}
          </div>

          {/* Status bar */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginLeft: 16, marginTop: 4,
            opacity: statusOp,
          }}>
            <span style={{ fontFamily: MONO, fontSize: 10.5, color: C.textMuted }}>2 / 4 tasks done</span>
            <span style={{ fontFamily: MONO, fontSize: 10, fontWeight: 700, color: C.purple, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              In progress
            </span>
          </div>

          {/* Prompt */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 2, marginTop: 4 }}>
            <span style={{ fontFamily: MONO, fontSize: 13, color: C.textMuted }}>{'> '}</span>
            {cursorVisible && (
              <span style={{ width: 8, height: 15, background: C.text, display: 'inline-block' }} />
            )}
          </div>

          {/* Shortcuts */}
          <div style={{ fontFamily: MONO, fontSize: 10.5, color: C.textDim }}>
            ? for shortcuts
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
