import type { ComponentType, FC } from 'react';

import { Box } from '@mui/material';

import styles from './SquareCube.module.scss';
import Sq1Bl1W from '@/assets/square1-block1-white.svg?react';
import Sq1Bl1Y from '@/assets/square1-block1-yellow.svg?react';
import Sq1Bl2W from '@/assets/square1-block2-white.svg?react';
import Sq1Bl2Y from '@/assets/square1-block2-yellow.svg?react';

type block = {
  blockType: 1 | 2;
  color: 'y' | 'w';
};

const BLOCK_MAP: Record<string, ComponentType> = {
  '1-w': Sq1Bl1W,
  '1-y': Sq1Bl1Y,
  '2-w': Sq1Bl2W,
  '2-y': Sq1Bl2Y
};

const SQUARE_SIDE: block[] = [
  { blockType: 2, color: 'y' },
  { blockType: 1, color: 'y' },
  { blockType: 2, color: 'y' },
  { blockType: 1, color: 'y' },
  { blockType: 2, color: 'y' },
  { blockType: 1, color: 'y' },
  { blockType: 2, color: 'y' },
  { blockType: 1, color: 'y' }
];

interface SquareCubeInterface {
  blocks: block[];
  rotate: number;
}

const SquareCube: FC<SquareCubeInterface> = ({ blocks, rotate }) => {
  const processedRotate: number = rotate % 360;
  const blocksSum: number = blocks.reduce((sum, curBlock) => sum + curBlock.blockType, 0);
  const processedBlocks: block[] = blocks.length >= 6 && blocks.length <= 10 && blocksSum === 12 ? blocks : SQUARE_SIDE;

  return (
    <Box className={styles.wrapper} sx={{ rotate: processedRotate }}>
      {processedBlocks.map((block, index) => {
        const Component = BLOCK_MAP[`${block.blockType}-${block.color}`];
        return (
          <div key={index}>
            <Component />
          </div>
        );
      })}
    </Box>
  );
};

export default SquareCube;
