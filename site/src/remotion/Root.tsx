import { Composition } from 'remotion';
import { CodeForPMs } from './CodeForPMs';

export const RemotionRoot = () => (
  <Composition
    id="CodeForPMs"
    component={CodeForPMs}
    durationInFrames={300}
    fps={30}
    width={900}
    height={540}
  />
);
