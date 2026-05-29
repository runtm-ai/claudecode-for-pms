import { bundle } from '@remotion/bundler';
import { renderStill, selectComposition, renderFrames } from '@remotion/renderer';
import path from 'path';
import { mkdirSync } from 'fs';

mkdirSync('/tmp/frames', { recursive: true });

const bundled = await bundle({
  entryPoint: path.resolve('./src/remotion/index.ts'),
  webpackOverride: (config) => config,
});

console.log('Bundled. Selecting composition...');

const composition = await selectComposition({
  serveUrl: bundled,
  id: 'CodeForPMs',
});

console.log('Rendering', composition.durationInFrames, 'frames...');
const { assetsInfo } = await renderFrames({
  composition,
  serveUrl: bundled,
  outputDir: '/tmp/frames',
  imageFormat: 'png',
  onFrameUpdate: (f) => { if (f % 30 === 0) console.log('Frame', f); },
});

console.log('Done! Assets:', assetsInfo);
