import type { FC } from 'react';

import SquareCube from '@/components/Square/SquareCube';

import styles from './SquareWrapper.module.scss';
import CorrCenterLayer from '@/assets/correctCenterLayer.svg?react';

// c - cyan
// b - black
// r - red
// o - orange
// g - green
// y - yellow
// w - white
export type SideColor = 'b' | 'r' | 'g' | 'o' | 'c';

export type Block =
  | {
      blockType: 1;
      color: 'y' | 'w' | 'b';
      sideColor?: SideColor;
    }
  | {
      blockType: 2;
      color: 'y' | 'w' | 'b';
      sideColor?: [SideColor, SideColor];
    };

interface SquareWrapperProps {
  blocks: Block[];
  startRotate?: number;
  scale?: number;
  rotateOnHover?: number;
  svgSize?: number;
  showCenter?: boolean;
}

const SquareWrapper: FC<SquareWrapperProps> = ({
  blocks,
  startRotate = 0,
  scale = 1,
  rotateOnHover = 0,
  svgSize = 280,
  showCenter = true
}) => {
  return (
    <div className={styles.wrapper} style={{ zoom: scale, width: svgSize, height: svgSize }}>
      {showCenter && <CorrCenterLayer className={styles.center} />}
      <SquareCube blocks={blocks} rotate={startRotate} rotateOnHover={rotateOnHover} svgSize={svgSize} />
    </div>
  );
};

export default SquareWrapper;
