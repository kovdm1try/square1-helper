import type { FC } from 'react';

import SquareCube from '@/components/Square/SquareCube';

import styles from './SquareWrapper.module.scss';
import CorrCenterLayer from '@/assets/correctCenterLayer.svg?react';

type Block = {
  blockType: 1 | 2;
  color: 'y' | 'w' | 'b';
};

interface SquareWrapperProps {
  blocks: Block[];
  startRotate?: number;
  scale?: number;
  rotateOnHover?: number;
}

const SquareWrapper: FC<SquareWrapperProps> = ({ blocks, startRotate = 0, scale = 1, rotateOnHover = 0 }) => {
  return (
    <div className={styles.wrapper} style={{ zoom: scale }}>
      <CorrCenterLayer className={styles.center} />
      <SquareCube blocks={blocks} rotate={startRotate} rotateOnHover={rotateOnHover} />
    </div>
  );
};

export default SquareWrapper;
