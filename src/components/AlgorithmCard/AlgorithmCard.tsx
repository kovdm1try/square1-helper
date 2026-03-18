import type { FC } from 'react';

import { Box } from '@mui/material';

import type { Algorithm } from '@/data/algorithms';

import styles from './AlgorithmCard.module.scss';

interface AlgorithmCardProps extends Algorithm {
  animationDelay?: number;
}

const AlgorithmCard: FC<AlgorithmCardProps> = ({
  topSide,
  bottomSide,
  algorithmName,
  algorithm,
  animationDelay = 0
}) => {
  return (
    <Box className={styles.cardWrapper} style={{ animationDelay: `${animationDelay}s` }}>
      <Box className={styles.algorithmName}>{algorithmName}</Box>
      <Box className={styles.shape}>
        <Box className={styles.cubeShape}>{topSide}</Box>
        <Box className={styles.cubeShape}>{bottomSide}</Box>
      </Box>
      <Box className={styles.algorithm}>
        <Box className={styles.textWrapper}>{algorithm}</Box>
      </Box>
    </Box>
  );
};

export default AlgorithmCard;
