import SquareWrapper from '@/components/Square/SquareWrapper';

import { type Algorithm } from '@/data/algorithms';

import { processedScramble } from '@/lib/timerUtils';

export const EOAlgorithms: Algorithm[] = [
  {
    topSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'y', sideColor: 'c' },
          { blockType: 2, color: 'y', sideColor: ['r', 'c'] },
          { blockType: 1, color: 'y', sideColor: 'r' },
          { blockType: 2, color: 'y', sideColor: ['c', 'o'] },
          { blockType: 1, color: 'y', sideColor: 'o' },
          { blockType: 2, color: 'y', sideColor: ['o', 'g'] },
          { blockType: 1, color: 'w', sideColor: 'o' },
          { blockType: 2, color: 'y', sideColor: ['g', 'r'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
      />
    ),
    bottomSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'y', sideColor: 'g' },
          { blockType: 2, color: 'w', sideColor: ['o', 'c'] },
          { blockType: 1, color: 'w', sideColor: 'c' },
          { blockType: 2, color: 'w', sideColor: ['c', 'r'] },
          { blockType: 1, color: 'w', sideColor: 'r' },
          { blockType: 2, color: 'w', sideColor: ['r', 'g'] },
          { blockType: 1, color: 'w', sideColor: 'g' },
          { blockType: 2, color: 'w', sideColor: ['g', 'o'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
      />
    ),
    algorithm: processedScramble('(1,0) / (3,0) / (3,0) / (-1,-1) / (-2,1) / (-3,0) / (-1,0)'),
    algorithmName: '1-1'
  },
  {
    topSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'w', sideColor: 'o' },
          { blockType: 2, color: 'y', sideColor: ['r', 'c'] },
          { blockType: 1, color: 'y', sideColor: 'c' },
          { blockType: 2, color: 'y', sideColor: ['c', 'o'] },
          { blockType: 1, color: 'w', sideColor: 'r' },
          { blockType: 2, color: 'y', sideColor: ['o', 'g'] },
          { blockType: 1, color: 'y', sideColor: 'g' },
          { blockType: 2, color: 'y', sideColor: ['g', 'r'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
      />
    ),
    bottomSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'y', sideColor: 'r' },
          { blockType: 2, color: 'w', sideColor: ['o', 'c'] },
          { blockType: 1, color: 'w', sideColor: 'c' },
          { blockType: 2, color: 'w', sideColor: ['c', 'r'] },
          { blockType: 1, color: 'y', sideColor: 'o' },
          { blockType: 2, color: 'w', sideColor: ['r', 'g'] },
          { blockType: 1, color: 'w', sideColor: 'g' },
          { blockType: 2, color: 'w', sideColor: ['g', 'o'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
      />
    ),
    algorithm: processedScramble('(1,0) / (-1,-1) / (0,1)'),
    algorithmName: 'I-I'
  },
  {
    topSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'y', sideColor: 'r' },
          { blockType: 2, color: 'y', sideColor: ['r', 'c'] },
          { blockType: 1, color: 'w', sideColor: 'o' },
          { blockType: 2, color: 'y', sideColor: ['c', 'o'] },
          { blockType: 1, color: 'w', sideColor: 'g' },
          { blockType: 2, color: 'y', sideColor: ['o', 'g'] },
          { blockType: 1, color: 'y', sideColor: 'g' },
          { blockType: 2, color: 'y', sideColor: ['g', 'r'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
      />
    ),
    bottomSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'y', sideColor: 'c' },
          { blockType: 2, color: 'w', sideColor: ['o', 'c'] },
          { blockType: 1, color: 'w', sideColor: 'c' },
          { blockType: 2, color: 'w', sideColor: ['c', 'r'] },
          { blockType: 1, color: 'w', sideColor: 'r' },
          { blockType: 2, color: 'w', sideColor: ['r', 'g'] },
          { blockType: 1, color: 'y', sideColor: 'o' },
          { blockType: 2, color: 'w', sideColor: ['g', 'o'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
      />
    ),
    algorithm: processedScramble('(1,0) / (-4,-1) / (1,1) / (3,0) / (-1,0)'),
    algorithmName: 'L-L'
  },
  {
    topSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'y', sideColor: 'c' },
          { blockType: 2, color: 'y', sideColor: ['r', 'c'] },
          { blockType: 1, color: 'w', sideColor: 'o' },
          { blockType: 2, color: 'y', sideColor: ['c', 'o'] },
          { blockType: 1, color: 'w', sideColor: 'r' },
          { blockType: 2, color: 'y', sideColor: ['o', 'g'] },
          { blockType: 1, color: 'y', sideColor: 'r' },
          { blockType: 2, color: 'y', sideColor: ['g', 'r'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
      />
    ),
    bottomSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'y', sideColor: 'g' },
          { blockType: 2, color: 'w', sideColor: ['o', 'c'] },
          { blockType: 1, color: 'w', sideColor: 'c' },
          { blockType: 2, color: 'w', sideColor: ['c', 'r'] },
          { blockType: 1, color: 'y', sideColor: 'o' },
          { blockType: 2, color: 'w', sideColor: ['r', 'g'] },
          { blockType: 1, color: 'w', sideColor: 'g' },
          { blockType: 2, color: 'w', sideColor: ['g', 'o'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
      />
    ),
    algorithm: processedScramble('(1,0) / (3,0) / (3,0) / (-1,-1) / (-2,1) / (-4,-1) / (0,1)'),
    algorithmName: 'L-I'
  },
  {
    topSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'w', sideColor: 'o' },
          { blockType: 2, color: 'y', sideColor: ['r', 'c'] },
          { blockType: 1, color: 'y', sideColor: 'r' },
          { blockType: 2, color: 'y', sideColor: ['c', 'o'] },
          { blockType: 1, color: 'w', sideColor: 'g' },
          { blockType: 2, color: 'y', sideColor: ['o', 'g'] },
          { blockType: 1, color: 'y', sideColor: 'c' },
          { blockType: 2, color: 'y', sideColor: ['g', 'r'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
      />
    ),
    bottomSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'y', sideColor: 'g' },
          { blockType: 2, color: 'w', sideColor: ['o', 'c'] },
          { blockType: 1, color: 'w', sideColor: 'c' },
          { blockType: 2, color: 'w', sideColor: ['c', 'r'] },
          { blockType: 1, color: 'w', sideColor: 'r' },
          { blockType: 2, color: 'w', sideColor: ['r', 'g'] },
          { blockType: 1, color: 'y', sideColor: 'o' },
          { blockType: 2, color: 'w', sideColor: ['g', 'o'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
      />
    ),
    algorithm: processedScramble('(1,0) / (-3,0) / (3,0) / (-1,-1) / (-3,0) / (3,0) / (0,1)'),
    algorithmName: 'I-L'
  },
  {
    topSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'w', sideColor: 'o' },
          { blockType: 2, color: 'y', sideColor: ['r', 'c'] },
          { blockType: 1, color: 'w', sideColor: 'g' },
          { blockType: 2, color: 'y', sideColor: ['c', 'o'] },
          { blockType: 1, color: 'y', sideColor: 'o' },
          { blockType: 2, color: 'y', sideColor: ['o', 'g'] },
          { blockType: 1, color: 'w', sideColor: 'r' },
          { blockType: 2, color: 'y', sideColor: ['g', 'r'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
      />
    ),
    bottomSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'y', sideColor: 'o' },
          { blockType: 2, color: 'w', sideColor: ['o', 'c'] },
          { blockType: 1, color: 'w', sideColor: 'c' },
          { blockType: 2, color: 'w', sideColor: ['c', 'r'] },
          { blockType: 1, color: 'y', sideColor: 'c' },
          { blockType: 2, color: 'w', sideColor: ['r', 'g'] },
          { blockType: 1, color: 'y', sideColor: 'r' },
          { blockType: 2, color: 'w', sideColor: ['g', 'o'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
      />
    ),
    algorithm: processedScramble('(1,0) / (3,0) / (3,0) / (-1,-1) / (-3,0) / (-3,0) / (0,1)'),
    algorithmName: '3-3'
  },
  {
    topSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'w', sideColor: 'o' },
          { blockType: 2, color: 'y', sideColor: ['r', 'c'] },
          { blockType: 1, color: 'w', sideColor: 'c' },
          { blockType: 2, color: 'y', sideColor: ['c', 'o'] },
          { blockType: 1, color: 'w', sideColor: 'r' },
          { blockType: 2, color: 'y', sideColor: ['o', 'g'] },
          { blockType: 1, color: 'w', sideColor: 'g' },
          { blockType: 2, color: 'y', sideColor: ['g', 'r'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
      />
    ),
    bottomSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'y', sideColor: 'r' },
          { blockType: 2, color: 'w', sideColor: ['o', 'c'] },
          { blockType: 1, color: 'y', sideColor: 'c' },
          { blockType: 2, color: 'w', sideColor: ['c', 'r'] },
          { blockType: 1, color: 'y', sideColor: 'o' },
          { blockType: 2, color: 'w', sideColor: ['r', 'g'] },
          { blockType: 1, color: 'y', sideColor: 'g' },
          { blockType: 2, color: 'w', sideColor: ['g', 'o'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
      />
    ),
    algorithm: processedScramble('(1,0) / (-1,-1) / (-2,4) / (-1,-1) / (1,0)'),
    algorithmName: '4-4'
  }
];
