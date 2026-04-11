import SquareWrapper from '@/components/Square/SquareWrapper';

import type { Algorithm } from '@/data/algorithms';

import { processedScramble } from '@/lib/timerUtils';

export const ParityAlgorithms: Algorithm[] = [
  {
    topSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'y', sideColor: 'g' },
          { blockType: 2, color: 'y', sideColor: ['r', 'c'] },
          { blockType: 1, color: 'y', sideColor: 'c' },
          { blockType: 2, color: 'y', sideColor: ['c', 'o'] },
          { blockType: 1, color: 'y', sideColor: 'o' },
          { blockType: 2, color: 'y', sideColor: ['o', 'g'] },
          { blockType: 1, color: 'y', sideColor: 'r' },
          { blockType: 2, color: 'y', sideColor: ['g', 'r'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
        showSlice={true}
      />
    ),
    bottomSide: <></>,
    algorithm: processedScramble(
      '/ (-3,0) / (0,3) / (0,-3) / (0,3) / (2,0) / (0,2) / (-2,0) / (4,0) / (0,-2) / (0,2) / (-1,4) / (0,-3) / (0,3)'
    ),
    algorithmName: 'Adj Parity',
    showBottomSide: false
  },
  {
    topSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'y', sideColor: 'r' },
          { blockType: 2, color: 'y', sideColor: ['r', 'c'] },
          { blockType: 1, color: 'y', sideColor: 'g' },
          { blockType: 2, color: 'y', sideColor: ['c', 'o'] },
          { blockType: 1, color: 'y', sideColor: 'o' },
          { blockType: 2, color: 'y', sideColor: ['o', 'g'] },
          { blockType: 1, color: 'y', sideColor: 'c' },
          { blockType: 2, color: 'y', sideColor: ['g', 'r'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
        showSlice={true}
      />
    ),
    bottomSide: <></>,
    algorithm: processedScramble(
      '/ (3,3) / (-1,0) / (2,-4) / (4,-2) / (0,-2) / (-4,2) / (1,-5) / (3,0) / (3,3) / (3,0)'
    ),
    algorithmName: 'Opp Parity',
    showBottomSide: false
  },
  {
    topSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'y', sideColor: 'c' },
          { blockType: 2, color: 'y', sideColor: ['r', 'c'] },
          { blockType: 1, color: 'y', sideColor: 'o' },
          { blockType: 2, color: 'y', sideColor: ['c', 'o'] },
          { blockType: 1, color: 'y', sideColor: 'g' },
          { blockType: 2, color: 'y', sideColor: ['o', 'g'] },
          { blockType: 1, color: 'y', sideColor: 'r' },
          { blockType: 2, color: 'y', sideColor: ['g', 'r'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
        showSlice={true}
      />
    ),
    bottomSide: <></>,
    algorithm: processedScramble(
      '(0,-1) / (-2,-2) / (2,0) / (-3,-3) / (0,1) / (-2,-2) / (0,-2) / (2,2) / (0,-1) / (3,3) / (3,3)'
    ),
    algorithmName: 'O+ Parity',
    showBottomSide: false
  },
  {
    topSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'y', sideColor: 'g' },
          { blockType: 2, color: 'y', sideColor: ['r', 'c'] },
          { blockType: 1, color: 'y', sideColor: 'r' },
          { blockType: 2, color: 'y', sideColor: ['c', 'o'] },
          { blockType: 1, color: 'y', sideColor: 'c' },
          { blockType: 2, color: 'y', sideColor: ['o', 'g'] },
          { blockType: 1, color: 'y', sideColor: 'o' },
          { blockType: 2, color: 'y', sideColor: ['g', 'r'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
        showSlice={true}
      />
    ),
    bottomSide: <></>,
    algorithm: processedScramble(
      '/ (-3,-3) / (0,1) / (-2,-2) / (0,2) / (2,2) / (0,-1) / (3,3) / (-2,0) / (2,2) / (-3,-2)'
    ),
    algorithmName: 'O- Parity',
    showBottomSide: false
  },
  {
    topSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'y', sideColor: 'c' },
          { blockType: 2, color: 'y', sideColor: ['r', 'c'] },
          { blockType: 1, color: 'y', sideColor: 'g' },
          { blockType: 2, color: 'y', sideColor: ['c', 'o'] },
          { blockType: 1, color: 'y', sideColor: 'r' },
          { blockType: 2, color: 'y', sideColor: ['o', 'g'] },
          { blockType: 1, color: 'y', sideColor: 'o' },
          { blockType: 2, color: 'y', sideColor: ['g', 'r'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
        showSlice={true}
      />
    ),
    bottomSide: <></>,
    algorithm: processedScramble(
      '(0,-1) / (1,-2) / (-4,0) / (0,3) / (1,0) / (3,-2) / (-4,0) / (-4,0) / (-2,2) / (-1,0) / (0,-3) / (-3,0)'
    ),
    algorithmName: 'W Parity',
    showBottomSide: false
  }
];
