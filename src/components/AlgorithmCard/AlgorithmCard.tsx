import type { FC } from 'react';

import { Box } from '@mui/material';
import classNames from 'classnames';

import type { Algorithm } from '@/data/algorithms';

import styles from './AlgorithmCard.module.scss';

type AlgorithmCardProps = Algorithm;

const AlgorithmCard: FC<AlgorithmCardProps> = ({
  topSide,
  bottomSide,
  algorithmName,
  algorithm,
  showBottomSide = true
}) => {
  return (
    <Box className={styles.cardWrapper}>
      <Box className={styles.algorithmName}>{algorithmName}</Box>
      <Box className={classNames(styles.shape, { [styles.noGap]: !showBottomSide })}>
        <Box className={styles.cubeShape}>{topSide}</Box>
        {showBottomSide && <Box className={styles.cubeShape}>{bottomSide}</Box>}
      </Box>
      <Box className={styles.algorithm}>
        <Box className={styles.textWrapper}>{algorithm}</Box>
      </Box>
    </Box>
  );
};

export default AlgorithmCard;
