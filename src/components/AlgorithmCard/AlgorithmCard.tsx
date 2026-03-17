import type { FC } from 'react';

import { Box } from '@mui/material';

import type { Algorithm } from '@/data/algorithms';

import styles from './AlgorithmCard.module.scss';

const AlgorithmCard: FC<Algorithm> = ({ topSide, bottomSide, algorithmName, algorithm }) => {
  return (
    <Box className={styles.cardWrapper}>
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
