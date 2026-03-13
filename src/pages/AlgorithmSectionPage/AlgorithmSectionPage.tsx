import { Box, Grid } from '@mui/material';

import AlgorithmSectionButton from '@/components/AlgorithmSectionButton';
import type { section } from '@/components/AlgorithmSectionButton/AlgorithmSectionButton';
import SquareWrapper from '@/components/Square/SquareWrapper';

import styles from './AlgorithmSectionPage.module.scss';

const SECTIONS: section[] = [
  {
    title: 'OBL',
    fullTitle: 'Orient Both Layers',
    isEnable: false,
    cubeView: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'w' },
          { blockType: 2, color: 'w' },
          { blockType: 1, color: 'y' },
          { blockType: 2, color: 'y' },
          { blockType: 1, color: 'w' },
          { blockType: 2, color: 'w' },
          { blockType: 1, color: 'w' },
          { blockType: 2, color: 'y' }
        ]}
        scale={0.8}
      />
    )
  },
  {
    title: 'CS',
    fullTitle: 'Cube Shape',
    isEnable: false,
    cubeView: (
      <SquareWrapper
        blocks={[
          { blockType: 2, color: 'w' },
          { blockType: 1, color: 'y' },
          { blockType: 2, color: 'y' },
          { blockType: 1, color: 'y' },
          { blockType: 1, color: 'y' },
          { blockType: 2, color: 'w' },
          { blockType: 1, color: 'y' },
          { blockType: 1, color: 'w' },
          { blockType: 1, color: 'w' }
        ]}
        startRotate={30}
        scale={0.8}
      />
    )
  },
  {
    title: 'CO',
    fullTitle: 'Corner Orientation',
    isEnable: false,
    cubeView: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'b' },
          { blockType: 2, color: 'y' },
          { blockType: 1, color: 'b' },
          { blockType: 2, color: 'y' },
          { blockType: 1, color: 'b' },
          { blockType: 2, color: 'y' },
          { blockType: 1, color: 'b' },
          { blockType: 2, color: 'y' }
        ]}
        scale={0.8}
      />
    )
  },
  {
    title: 'CP',
    fullTitle: 'Corner Permutation',
    isEnable: false,
    cubeView: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'b' },
          { blockType: 2, color: 'y' },
          { blockType: 1, color: 'b' },
          { blockType: 2, color: 'y' },
          { blockType: 1, color: 'b' },
          { blockType: 2, color: 'y' },
          { blockType: 1, color: 'b' },
          { blockType: 2, color: 'y' }
        ]}
        scale={0.8}
      />
    )
  },
  {
    title: 'Parity',
    fullTitle: '',
    isEnable: false,
    cubeView: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'y' },
          { blockType: 2, color: 'y' },
          { blockType: 1, color: 'y' },
          { blockType: 2, color: 'y' },
          { blockType: 1, color: 'y' },
          { blockType: 2, color: 'y' },
          { blockType: 1, color: 'y' },
          { blockType: 2, color: 'y' }
        ]}
        scale={0.8}
      />
    )
  },
  {
    title: 'EP',
    fullTitle: 'Edge Permutation',
    isEnable: false,
    cubeView: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'w' },
          { blockType: 2, color: 'b' },
          { blockType: 1, color: 'w' },
          { blockType: 2, color: 'b' },
          { blockType: 1, color: 'y' },
          { blockType: 2, color: 'b' },
          { blockType: 1, color: 'y' },
          { blockType: 2, color: 'b' }
        ]}
        scale={0.8}
      />
    )
  },
  {
    title: 'CSP',
    fullTitle: 'Cube Shape Parity',
    isEnable: false,
    cubeView: (
      <SquareWrapper
        blocks={[
          { blockType: 1, color: 'w' },
          { blockType: 1, color: 'y' },
          { blockType: 1, color: 'y' },
          { blockType: 1, color: 'y' },
          { blockType: 1, color: 'w' },
          { blockType: 1, color: 'w' },
          { blockType: 1, color: 'w' },
          { blockType: 1, color: 'y' },
          { blockType: 2, color: 'y' },
          { blockType: 2, color: 'y' }
        ]}
        scale={0.8}
      />
    )
  }
];

const AlgorithmSectionPage = () => {
  return (
    <Box className={styles.sectionsGridWrapper}>
      <Grid container className={styles.sectionsGrid}>
        {SECTIONS.map(({ title, fullTitle, isEnable, cubeView }) => (
          <AlgorithmSectionButton
            key={`section-button-${title}`}
            title={title}
            fullTitle={fullTitle}
            isEnable={isEnable}
            cubeView={cubeView}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default AlgorithmSectionPage;
