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
        scale={0.7}
        startRotate={0}
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
        scale={0.7}
        startRotate={0}
      />
    ),
    algorithm: processedScramble('(1,0) / (3,0) / (3,0) / (-1,-1) / (-2,1) / (-3,0) / (-1,0)'),
    algorithmName: '1-1'
  }
];
