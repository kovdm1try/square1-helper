import SquareWrapper from '@/components/Square/SquareWrapper';

import type { Algorithm } from '@/data/algorithms';

import { processedScramble } from '@/lib/timerUtils';

export const COAlgorithms: Algorithm[] = [
  {
    topSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'y', sideColor: ['r', 'c'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'y', sideColor: ['c', 'o'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'w', sideColor: ['r', 'g'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'w', sideColor: ['g', 'o'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
        showSlice={true}
      />
    ),
    bottomSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'w', sideColor: ['o', 'c'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'w', sideColor: ['c', 'r'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'y', sideColor: ['o', 'g'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'y', sideColor: ['g', 'r'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
        showSlice={true}
        flipSlice={true}
      />
    ),
    algorithm: processedScramble('(1,0) / (-1,0)'),
    algorithmName: '2-2'
  },
  {
    topSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'y', sideColor: ['c', 'o'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'w', sideColor: ['r', 'g'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'y', sideColor: ['o', 'g'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'y', sideColor: ['g', 'r'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
        showSlice={true}
      />
    ),
    bottomSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'w', sideColor: ['o', 'c'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'w', sideColor: ['c', 'r'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'w', sideColor: ['g', 'o'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'y', sideColor: ['r', 'c'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
        showSlice={true}
        flipSlice={true}
      />
    ),
    algorithm: processedScramble('(1,0) / (3,0) / (-1,0)'),
    algorithmName: '3-1'
  },
  {
    topSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'y', sideColor: ['c', 'o'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'w', sideColor: ['r', 'g'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'y', sideColor: ['g', 'r'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'w', sideColor: ['o', 'c'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
        showSlice={true}
      />
    ),
    bottomSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'w', sideColor: ['c', 'r'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'y', sideColor: ['o', 'g'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'w', sideColor: ['g', 'o'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'y', sideColor: ['r', 'c'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
        showSlice={true}
        flipSlice={true}
      />
    ),
    algorithm: processedScramble('(1,0) / (3,3) / (-1,0)'),
    algorithmName: 'Opp-Opp'
  },
  {
    topSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'y', sideColor: ['r', 'c'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'y', sideColor: ['c', 'o'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'w', sideColor: ['g', 'o'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'w', sideColor: ['c', 'r'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
        showSlice={true}
      />
    ),
    bottomSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'y', sideColor: ['o', 'g'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'w', sideColor: ['r', 'g'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'y', sideColor: ['g', 'r'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'w', sideColor: ['o', 'c'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
        showSlice={true}
        flipSlice={true}
      />
    ),
    algorithm: processedScramble('(1,0) / (0,3) / (0,3) / (-1,0)'),
    algorithmName: 'Adj-Opp'
  },
  {
    topSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'w', sideColor: ['r', 'g'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'y', sideColor: ['o', 'g'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'w', sideColor: ['g', 'o'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'y', sideColor: ['r', 'c'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
        showSlice={true}
      />
    ),
    bottomSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'w', sideColor: ['o', 'c'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'w', sideColor: ['c', 'r'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'y', sideColor: ['g', 'r'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'y', sideColor: ['c', 'o'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
        showSlice={true}
        flipSlice={true}
      />
    ),
    algorithm: processedScramble('(1,0) / (3,0) / (3,0) / (-1,0)'),
    algorithmName: 'Opp-Adj'
  },
  {
    topSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'y', sideColor: ['c', 'o'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'w', sideColor: ['r', 'g'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'w', sideColor: ['o', 'c'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'w', sideColor: ['c', 'r'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
        showSlice={true}
      />
    ),
    bottomSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'y', sideColor: ['o', 'g'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'y', sideColor: ['g', 'r'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'w', sideColor: ['g', 'o'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'y', sideColor: ['r', 'b'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
        showSlice={true}
        flipSlice={true}
      />
    ),
    algorithm: processedScramble('(1,0) / (3,6) / (-1,0)'),
    algorithmName: '1-3'
  },
  {
    topSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'w', sideColor: ['o', 'c'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'w', sideColor: ['c', 'r'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'w', sideColor: ['r', 'g'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'w', sideColor: ['g', 'o'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
        showSlice={true}
      />
    ),
    bottomSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'y', sideColor: ['r', 'c'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'y', sideColor: ['c', 'o'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'y', sideColor: ['o', 'g'] },
          { blockType: 1, color: 'b', sideColor: 'b' },
          { blockType: 2, color: 'y', sideColor: ['g', 'r'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
        showSlice={true}
        flipSlice={true}
      />
    ),
    algorithm: processedScramble('/ (6, 6) / (-1, 1)'),
    algorithmName: '0-4'
  }
];
