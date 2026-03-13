import type { CSSProperties, FC } from 'react';
import { useMemo } from 'react';

import styles from './SquareCube.module.scss';

type Block = {
  blockType: 1 | 2;
  color: 'y' | 'w' | 'b';
};

const EDGE_PATH =
  'M 2.6794919243112,10 ' +
  'L 25.8819045102521,96.5925826289068 ' +
  'A 4 4 0 0 1 23.2673012021038 100 ' +
  'L -23.2673012021038,100 ' +
  'A 4 4 0 0 1 -25.8819045102521 96.5925826289068 ' +
  'L -2.6794919243112,10 A 3 3 0 0 1 2.6794919243112 10 ' +
  'Z';

const CORNER_PATH =
  'M 10,2.6794919243112 ' +
  'L 96.5925826289068,25.8819045102521 ' +
  'A 4 4 0 0 1 100 30.3225372841204 ' +
  'L 100,96.4723819589914 ' +
  'A 4 4 0 0 1 96.4723819589914 100 ' +
  'L 30.3225372841204 100 ' +
  'A 4 4 0 0 1 25.8819045102521 96.5925826289068 ' +
  'L 2.6794919243112,10 A 7 7 0 0 1 10 2.6794919243112 ' +
  'Z';

const PIECE_ANGLE: Record<1 | 2, number> = {
  1: 30,
  2: 60
};

const DEFAULT_BLOCKS: Block[] = [
  { blockType: 1, color: 'y' },
  { blockType: 2, color: 'y' },
  { blockType: 1, color: 'y' },
  { blockType: 2, color: 'y' },
  { blockType: 1, color: 'y' },
  { blockType: 2, color: 'y' },
  { blockType: 1, color: 'y' },
  { blockType: 2, color: 'y' }
];

const COLORS = new Map([
  ['y', 'yellow'],
  ['b', 'rgb(70, 70, 70)'],
  ['w', 'white']
]);

interface SquareCubeProps {
  blocks: Block[];
  rotate: number;
  rotateOnHover: number;
}

type BlockWithRotate = {
  block: Block;
  blockRotate: number;
};

const SquareCube: FC<SquareCubeProps> = ({ blocks, rotate, rotateOnHover }) => {
  const svgSize = 280;
  const centerCord = Math.round(svgSize / 2);

  const processedBlocks: BlockWithRotate[] = useMemo(() => {
    const blocksSum = blocks.reduce((sum, b) => sum + b.blockType, 0);
    const validBlocks = blocks.length >= 6 && blocks.length <= 10 && blocksSum === 12 ? blocks : DEFAULT_BLOCKS;

    return validBlocks.reduce<{ result: BlockWithRotate[]; curRotate: number }>(
      (acc, curBlock) => ({
        result: [...acc.result, { block: curBlock, blockRotate: acc.curRotate }],
        curRotate: acc.curRotate + PIECE_ANGLE[curBlock.blockType]
      }),
      { result: [], curRotate: 0 }
    ).result;
  }, [blocks]);

  return (
    <svg
      className={styles.side}
      width={svgSize}
      height={svgSize}
      style={
        {
          '--rotate': `${rotate % 360}deg`,
          '--rotate-on-hover': `${(rotate + rotateOnHover) % 360}deg`
        } as CSSProperties
      }
    >
      <circle cx={centerCord} cy={centerCord} r={10} fill="black" />
      {processedBlocks.map(({ block, blockRotate }, index) => (
        <g key={index} transform={`translate(${centerCord}, ${centerCord}) rotate(${blockRotate})`}>
          <path
            d={[EDGE_PATH, CORNER_PATH][block.blockType - 1]}
            fill={COLORS.get(block.color)}
            stroke="black"
            strokeWidth="2"
            transform={`rotate(${block.blockType === 2 ? 60 : 0})`}
          />
        </g>
      ))}
    </svg>
  );
};

export default SquareCube;
