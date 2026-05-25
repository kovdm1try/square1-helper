import SquareWrapper from '@/components/Square/SquareWrapper';

import type { Algorithm } from '@/data/algorithms';

import { processedScramble } from '@/lib/timerUtils';

export const CPAlgorithms: Algorithm[] = [
  {
    topSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'y', sideColor: 'o' },
          { blockType: 2, color: 'y', sideColor: ['r', 'c'] },
          { blockType: 1, color: 'y', sideColor: 'c' },
          { blockType: 2, color: 'y', sideColor: ['o', 'g'] },
          { blockType: 1, color: 'y', sideColor: 'g' },
          { blockType: 2, color: 'y', sideColor: ['g', 'r'] },
          { blockType: 1, color: 'y', sideColor: 'r' },
          { blockType: 2, color: 'y', sideColor: ['c', 'o'] }
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
          { blockType: 1, color: 'w', sideColor: 'o' },
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
        showSlice={true}
        flipSlice={true}
      />
    ),
    algorithm: processedScramble('/ (3,-3) / (-3,0) / (0,3) / (0,-3) / (0,3) /'),
    algorithmName: 'Adj / Solved'
  },
  {
    topSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'y', sideColor: 'g' },
          { blockType: 2, color: 'y', sideColor: ['c', 'o'] },
          { blockType: 1, color: 'y', sideColor: 'o' },
          { blockType: 2, color: 'y', sideColor: ['r', 'c'] },
          { blockType: 1, color: 'y', sideColor: 'c' },
          { blockType: 2, color: 'y', sideColor: ['g', 'r'] },
          { blockType: 1, color: 'y', sideColor: 'r' },
          { blockType: 2, color: 'y', sideColor: ['o', 'g'] }
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
          { blockType: 1, color: 'w', sideColor: 'o' },
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
        showSlice={true}
        flipSlice={true}
      />
    ),
    algorithm: processedScramble('/ (3,3) / (-3,0) / (3,3) / (-3,0) / (3,3) /'),
    algorithmName: 'Opp / Solved'
  },
  {
    topSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'y', sideColor: 'r' },
          { blockType: 2, color: 'y', sideColor: ['r', 'c'] },
          { blockType: 1, color: 'y', sideColor: 'c' },
          { blockType: 2, color: 'y', sideColor: ['c', 'o'] },
          { blockType: 1, color: 'y', sideColor: 'o' },
          { blockType: 2, color: 'y', sideColor: ['o', 'g'] },
          { blockType: 1, color: 'y', sideColor: 'g' },
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
          { blockType: 1, color: 'w', sideColor: 'g' },
          { blockType: 2, color: 'w', sideColor: ['g', 'o'] },
          { blockType: 1, color: 'w', sideColor: 'c' },
          { blockType: 2, color: 'w', sideColor: ['c', 'r'] },
          { blockType: 1, color: 'w', sideColor: 'o' },
          { blockType: 2, color: 'w', sideColor: ['o', 'c'] },
          { blockType: 1, color: 'w', sideColor: 'r' },
          { blockType: 2, color: 'w', sideColor: ['r', 'g'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
        showSlice={true}
        flipSlice={true}
      />
    ),
    algorithm: processedScramble('/ (3,-3) / (0,3) / (-3,0) / (3,0) / (-3,0) /'),
    algorithmName: 'Solved / Adj'
  },
  {
    topSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'y', sideColor: 'r' },
          { blockType: 2, color: 'y', sideColor: ['r', 'c'] },
          { blockType: 1, color: 'y', sideColor: 'c' },
          { blockType: 2, color: 'y', sideColor: ['c', 'o'] },
          { blockType: 1, color: 'y', sideColor: 'o' },
          { blockType: 2, color: 'y', sideColor: ['o', 'g'] },
          { blockType: 1, color: 'y', sideColor: 'g' },
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
          { blockType: 1, color: 'w', sideColor: 'c' },
          { blockType: 2, color: 'w', sideColor: ['c', 'r'] },
          { blockType: 1, color: 'w', sideColor: 'o' },
          { blockType: 2, color: 'w', sideColor: ['o', 'c'] },
          { blockType: 1, color: 'w', sideColor: 'g' },
          { blockType: 2, color: 'w', sideColor: ['g', 'o'] },
          { blockType: 1, color: 'w', sideColor: 'r' },
          { blockType: 2, color: 'w', sideColor: ['r', 'g'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
        showSlice={true}
        flipSlice={true}
      />
    ),
    algorithm: processedScramble('/ (3,3) / (0,3) / (3,3) / (0,3) / (3,3) /'),
    algorithmName: 'Solved / Opp'
  },
  {
    topSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'y', sideColor: 'r' },
          { blockType: 2, color: 'y', sideColor: ['r', 'c'] },
          { blockType: 1, color: 'y', sideColor: 'c' },
          { blockType: 2, color: 'y', sideColor: ['o', 'g'] },
          { blockType: 1, color: 'y', sideColor: 'g' },
          { blockType: 2, color: 'y', sideColor: ['c', 'o'] },
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
    bottomSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'w', sideColor: 'g' },
          { blockType: 2, color: 'w', sideColor: ['g', 'o'] },
          { blockType: 1, color: 'w', sideColor: 'c' },
          { blockType: 2, color: 'w', sideColor: ['c', 'r'] },
          { blockType: 1, color: 'w', sideColor: 'r' },
          { blockType: 2, color: 'w', sideColor: ['r', 'g'] },
          { blockType: 1, color: 'w', sideColor: 'o' },
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
    algorithm: processedScramble('/ (0,-3) / (3,3) / (-3,0) /'),
    algorithmName: 'Adj / Adj'
  },
  {
    topSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'y', sideColor: 'o' },
          { blockType: 2, color: 'y', sideColor: ['r', 'c'] },
          { blockType: 1, color: 'y', sideColor: 'c' },
          { blockType: 2, color: 'y', sideColor: ['g', 'r'] },
          { blockType: 1, color: 'y', sideColor: 'r' },
          { blockType: 2, color: 'y', sideColor: ['o', 'g'] },
          { blockType: 1, color: 'y', sideColor: 'g' },
          { blockType: 2, color: 'y', sideColor: ['c', 'o'] }
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
          { blockType: 1, color: 'w', sideColor: 'o' },
          { blockType: 2, color: 'w', sideColor: ['o', 'c'] },
          { blockType: 1, color: 'w', sideColor: 'c' },
          { blockType: 2, color: 'w', sideColor: ['c', 'r'] },
          { blockType: 1, color: 'w', sideColor: 'g' },
          { blockType: 2, color: 'w', sideColor: ['g', 'o'] },
          { blockType: 1, color: 'w', sideColor: 'r' },
          { blockType: 2, color: 'w', sideColor: ['r', 'g'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
        showSlice={true}
        flipSlice={true}
      />
    ),
    algorithm: processedScramble('/ (3,0) / (-3,0) / (3,0) / (-3,0) /'),
    algorithmName: 'Opp / Adj'
  },
  {
    topSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'y', sideColor: 'g' },
          { blockType: 2, color: 'y', sideColor: ['r', 'c'] },
          { blockType: 1, color: 'y', sideColor: 'c' },
          { blockType: 2, color: 'y', sideColor: ['c', 'o'] },
          { blockType: 1, color: 'y', sideColor: 'o' },
          { blockType: 2, color: 'y', sideColor: ['g', 'r'] },
          { blockType: 1, color: 'y', sideColor: 'r' },
          { blockType: 2, color: 'y', sideColor: ['o', 'g'] }
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
          { blockType: 1, color: 'w', sideColor: 'o' },
          { blockType: 2, color: 'w', sideColor: ['o', 'c'] },
          { blockType: 1, color: 'w', sideColor: 'g' },
          { blockType: 2, color: 'w', sideColor: ['g', 'o'] },
          { blockType: 1, color: 'w', sideColor: 'r' },
          { blockType: 2, color: 'w', sideColor: ['r', 'g'] },
          { blockType: 1, color: 'w', sideColor: 'c' },
          { blockType: 2, color: 'w', sideColor: ['c', 'r'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
        showSlice={true}
        flipSlice={true}
      />
    ),
    algorithm: processedScramble('/ (0,-3) / (0,3) / (0,-3) / (0,3) /'),
    algorithmName: 'Adj / Opp'
  },
  {
    topSide: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'y', sideColor: 'o' },
          { blockType: 2, color: 'y', sideColor: ['r', 'c'] },
          { blockType: 1, color: 'y', sideColor: 'c' },
          { blockType: 2, color: 'y', sideColor: ['g', 'r'] },
          { blockType: 1, color: 'y', sideColor: 'r' },
          { blockType: 2, color: 'y', sideColor: ['o', 'g'] },
          { blockType: 1, color: 'y', sideColor: 'g' },
          { blockType: 2, color: 'y', sideColor: ['c', 'o'] }
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
          { blockType: 1, color: 'w', sideColor: 'r' },
          { blockType: 2, color: 'w', sideColor: ['r', 'g'] },
          { blockType: 1, color: 'w', sideColor: 'c' },
          { blockType: 2, color: 'w', sideColor: ['c', 'r'] },
          { blockType: 1, color: 'w', sideColor: 'o' },
          { blockType: 2, color: 'w', sideColor: ['o', 'c'] },
          { blockType: 1, color: 'w', sideColor: 'g' },
          { blockType: 2, color: 'w', sideColor: ['g', 'o'] }
        ]}
        scale={0.8}
        startRotate={0}
        svgSize={220}
        showCenter={false}
        showSlice={true}
        flipSlice={true}
      />
    ),
    algorithm: processedScramble('/ (-3,3) / (3,-3) /'),
    algorithmName: 'Opp / Opp'
  }
];
