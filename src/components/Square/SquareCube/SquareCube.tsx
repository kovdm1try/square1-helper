import type { CSSProperties, FC } from 'react';
import { useMemo } from 'react';

import type { Block } from '@/components/Square/SquareWrapper/SquareWrapper';

import styles from './SquareCube.module.scss';

const EDGE_PATH =
  'M 2.6794919243112,10 ' +
  'L 25.8819045102521,96.5925826289068 ' +
  'A 4 4 0 0 1 23.2673012021038 100 ' +
  'L -23.2673012021038,100 ' +
  'A 4 4 0 0 1 -25.8819045102521 96.5925826289068 ' +
  'L -2.6794919243112,10 A 3 3 0 0 1 2.6794919243112 10 ' +
  'Z';

const EDGE_SIDE_PATH =
  'M 25.8819045102521,96.5925826289068\n' +
  '  L 28.260,105.468\n' +
  '  A 2 2 0 0 1 26.778 107.4\n' +
  '  L -26.778,107.4\n' +
  '  A 2 2 0 0 1 -28.260 105.468\n' +
  '  L -25.8819045102521,96.5925826289068\n' +
  '  Z';

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

const CORNER_SIDE_PATH_1 =
  'M 96.5925826289068,25.8819045102521' +
  'L 105.468,28.260' +
  'A 4 4 0 0 1 107.4 30.7745495495494' +
  'L 107.4,105.47' +
  'A 4 4 0 0 1 106.8273701580361 106.8273701580361' +
  'L 96.5925826289068,96.5925826289068' +
  'Z';

const CORNER_SIDE_PATH_2 =
  'M 25.8819045102521,96.5925826289068' +
  'L 28.260,105.468' +
  'A 4 4 0 0 0 30.7745495495494 107.4' +
  'L 105.47,107.4' +
  'A 4 4 0 0 0 106.8273701580361 106.8273701580361' +
  'L 96.5925826289068,96.5925826289068' +
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
  ['w', 'white'],
  ['c', 'rgb(50, 82, 168)'],
  ['r', 'rgb(168, 50, 50)'],
  ['o', 'rgb(235, 119, 52)'],
  ['g', 'rgb(50, 168, 62)']
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
  console.log(processedBlocks);

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
          {block.blockType === 1 && block.sideColor && (
            <path d={EDGE_SIDE_PATH} fill={COLORS.get(block.sideColor)} stroke="black" strokeWidth="2" />
          )}
          {block.blockType === 2 && block.sideColor && (
            <>
              <path d={CORNER_SIDE_PATH_1} fill={COLORS.get(block.sideColor[0])} transform="rotate(60)" />
              <path d={CORNER_SIDE_PATH_2} fill={COLORS.get(block.sideColor[1])} transform="rotate(60)" />
              <path
                d="M 25.8819045102521,96.5925826289068
                 L 96.5925826289068,96.5925826289068
                 L 96.5925826289068,25.8819045102521
                 L 105.468,28.260
                 A 4 4 0 0 1 107.4 30.7745495495494
                 L 107.4,105.47
                 A 4 4 0 0 1 106.8273701580361 106.8273701580361
                 A 4 4 0 0 1 105.47 107.4
                 L 30.7745495495494,107.4
                 A 4 4 0 0 1 28.260 105.468
                 Z"
                fill="transparent"
                stroke="black"
                strokeWidth="2"
                transform="rotate(60)"
              />
              <line
                x1="106.8273701580361"
                y1="106.8273701580361"
                x2="96.592582628906"
                y2="96.592582628906"
                strokeWidth="2"
                stroke="black"
                strokeLinecap="round"
                transform="rotate(60)"
              />
            </>
          )}
        </g>
      ))}
    </svg>
  );
};

export default SquareCube;
