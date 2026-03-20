import type { FC } from 'react';

import SquareCube from '@/components/Square/SquareCube';

import styles from './SquareWrapper.module.scss';
import CorrCenterLayer from '@/assets/correctCenterLayer.svg?react';
import SliceLine from '@/assets/sliceLine.svg?react';

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
  showSlice?: boolean;
}

const SquareWrapper: FC<SquareWrapperProps> = ({
  blocks,
  startRotate = 0,
  scale = 1,
  rotateOnHover = 0,
  svgSize = 280,
  showCenter = true,
  showSlice = false
}) => {
  const overlayOffset = (svgSize - 280) / 2;
  const hasSides = blocks.some((b) => b.sideColor !== undefined);
  const centerStyle = { top: overlayOffset, left: overlayOffset, ...(hasSides && { transform: 'scale(1.081)' }) };

  return (
    <div className={styles.wrapper} style={{ zoom: scale, width: svgSize, height: svgSize }}>
      {showCenter && <CorrCenterLayer className={styles.center} style={centerStyle} />}
      <SquareCube blocks={blocks} rotate={startRotate} rotateOnHover={rotateOnHover} svgSize={svgSize} />
      {showSlice && <SliceLine className={styles.sliceline} width={svgSize} height={svgSize} />}
    </div>
  );
};

export default SquareWrapper;
