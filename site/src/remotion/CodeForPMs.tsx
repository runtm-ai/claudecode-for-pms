import { AbsoluteFill, Sequence, useCurrentFrame, interpolate } from 'remotion';
import { SceneSplash } from './scenes/SceneSplash';
import { SceneWelcome } from './scenes/SceneWelcome';
import { SceneSession } from './scenes/SceneSession';
import { C, MONO } from './tokens';

const TerminalFrame = ({ children, frame: _frame }: { children: React.ReactNode; frame: number }) => {
  // Static 3D tilt — consistent across frames → much better GIF compression
  const rotateY = -5;
  const rotateX = 2;

  return (
    <div style={{
      position: 'absolute',
      left: '50%', top: '50%',
      transform: `translate(-50%, -50%) perspective(1100px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
      width: 730,
      height: 430,
      borderRadius: 11,
      background: C.bg,
      boxShadow: [
        '0 50px 100px rgba(0,0,0,0.35)',
        '0 25px 50px rgba(0,0,0,0.25)',
        '0 8px 20px rgba(0,0,0,0.2)',
        '0 0 0 1px rgba(255,255,255,0.09)',
      ].join(', '),
      overflow: 'hidden',
    }}>
      {/* macOS chrome */}
      <div style={{
        height: 38,
        background: C.chrome,
        display: 'flex', alignItems: 'center',
        paddingLeft: 14, gap: 7,
        borderBottom: `1px solid ${C.borderSubtle}`,
        flexShrink: 0,
      }}>
        <div style={{ width: 12, height: 12, borderRadius: 6, background: '#ff5f57' }} />
        <div style={{ width: 12, height: 12, borderRadius: 6, background: '#febc2e' }} />
        <div style={{ width: 12, height: 12, borderRadius: 6, background: '#28c840' }} />
        <span style={{ fontFamily: MONO, fontSize: 12, color: C.textMuted, marginLeft: 10 }}>Claude Code</span>
      </div>
      {/* Scenes */}
      <div style={{ height: 392, position: 'relative', overflow: 'hidden' }}>
        {children}
      </div>
    </div>
  );
};

export const CodeForPMs = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: 'transparent' }}>
      <TerminalFrame frame={frame}>
        <Sequence from={0} durationInFrames={100}>
          <SceneSplash />
        </Sequence>
        <Sequence from={100} durationInFrames={100}>
          <SceneWelcome />
        </Sequence>
        <Sequence from={200} durationInFrames={100}>
          <SceneSession />
        </Sequence>
      </TerminalFrame>
    </AbsoluteFill>
  );
};
