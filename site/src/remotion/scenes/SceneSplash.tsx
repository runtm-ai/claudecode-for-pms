import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';
import { C, MONO, SANS } from '../tokens';
import { TEXT_PATH } from '../assets';

export const SceneSplash = () => {
  const frame = useCurrentFrame();

  // Whole text block slides up + fades in: f0-28
  const textOp = interpolate(frame, [0, 28], [0, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });
  const textY = interpolate(frame, [0, 28], [36, 0], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });

  // "for PMs" fades in below: f28-48
  const forPMsOp = interpolate(frame, [28, 48], [0, 1], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });
  const forPMsY = interpolate(frame, [28, 48], [10, 0], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });

  // Login caption types in: f44-78
  const loginFull = '🎉 Login successful. Press Enter to continue';
  const chars = Math.floor(
    interpolate(frame, [44, 78], [0, loginFull.length], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' })
  );

  // Scene fade out: f88-100
  const sceneOp = interpolate(frame, [88, 100], [1, 0], { extrapolateRight: 'clamp', extrapolateLeft: 'clamp' });

  return (
    <AbsoluteFill style={{ backgroundColor: C.bg, opacity: sceneOp }}>
      {/* Main content — centered */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column',
        alignItems: 'flex-start', justifyContent: 'center',
        padding: '20px 50px 60px',
      }}>
        {/* Pixel-art CLAUDE CODE text */}
        <div style={{
          opacity: textOp,
          transform: `translateY(${textY}px)`,
          width: '88%',
        }}>
          <svg
            viewBox="0 0 56 24"
            style={{ width: '100%', height: 'auto', display: 'block' }}
            fill={C.orange}
          >
            <path clipRule="evenodd" fillRule="evenodd" d={TEXT_PATH} />
          </svg>
        </div>

        {/* "for PMs" tagline */}
        <div style={{
          marginTop: 16,
          opacity: forPMsOp,
          transform: `translateY(${forPMsY}px)`,
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <div style={{
            width: 3, height: 22, background: C.purple, borderRadius: 2,
          }} />
          <span style={{
            fontFamily: SANS, fontSize: 20, fontWeight: 700,
            color: C.purple, letterSpacing: '0.03em',
          }}>
            for PMs
          </span>
        </div>
      </div>

      {/* Login caption at bottom */}
      <div style={{
        position: 'absolute', bottom: 22, left: 50,
        fontFamily: MONO, fontSize: 14, color: C.textMuted,
      }}>
        {loginFull.slice(0, chars)}
      </div>
    </AbsoluteFill>
  );
};
