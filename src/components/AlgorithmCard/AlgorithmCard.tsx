import { Box, Divider } from '@mui/material';

import SquareWrapper from '@/components/Square/SquareWrapper';

import styles from './AlgorithmCard.module.scss';

const AlgorithmCard = () => {
  return (
    <Box className={styles.cardWrapper}>
      <Box className={styles.shape}>
        <Box className={styles.cubeShape}>
          <SquareWrapper
            blocks={[
              { blockType: 1, color: 'y', sideColor: 'r' },
              { blockType: 2, color: 'b', sideColor: ['r', 'g'] },
              { blockType: 1, color: 'y', sideColor: 'g' },
              { blockType: 2, color: 'b', sideColor: ['g', 'o'] },
              { blockType: 1, color: 'w', sideColor: 'o' },
              { blockType: 2, color: 'b', sideColor: ['o', 'c'] },
              { blockType: 1, color: 'y', sideColor: 'c' },
              { blockType: 2, color: 'b', sideColor: ['c', 'r'] }
            ]}
            scale={0.7}
            startRotate={45}
          />
        </Box>
        <Box className={styles.cubeShape}>
          <SquareWrapper
            blocks={[
              { blockType: 1, color: 'y', sideColor: 'r' },
              { blockType: 2, color: 'b', sideColor: ['r', 'g'] },
              { blockType: 1, color: 'y', sideColor: 'g' },
              { blockType: 2, color: 'b', sideColor: ['g', 'o'] },
              { blockType: 1, color: 'w', sideColor: 'o' },
              { blockType: 2, color: 'b', sideColor: ['o', 'c'] },
              { blockType: 1, color: 'y', sideColor: 'c' },
              { blockType: 2, color: 'b', sideColor: ['c', 'r'] }
            ]}
            scale={0.7}
            startRotate={45}
          />
        </Box>
      </Box>
      <Divider />
      <Box className={styles.algorithm}>123</Box>
    </Box>
  );
};

export default AlgorithmCard;
