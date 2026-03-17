import { memo } from 'react';

import { Box, Grid } from '@mui/material';

import AlgorithmSectionButton from '@/components/AlgorithmSectionButton';
import type { section } from '@/components/AlgorithmSectionButton/AlgorithmSectionButton';
import SquareWrapper from '@/components/Square/SquareWrapper';

import styles from './AlgorithmSectionPage.module.scss';

const SECTIONS: section[] = [
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
    ),
    url: 'cs'
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
    ),
    url: 'co'
  },
  {
    title: 'EO',
    fullTitle: 'Edge Orientation',
    isEnable: true,
    cubeView: (
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
        scale={0.8}
      />
    ),
    url: 'eo'
  },
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
    ),
    url: 'obl'
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
    ),
    url: 'cp'
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
    ),
    url: 'ep'
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
    ),
    url: 'parity'
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
    ),
    url: 'csp'
  }
];

const AlgorithmSectionPage = () => {
  return (
    <Box className={styles.sectionsGridWrapper}>
      <Grid container className={styles.sectionsGrid}>
        {SECTIONS.map(({ title, fullTitle, isEnable, cubeView, url }) => (
          <AlgorithmSectionButton
            key={`section-button-${title}`}
            title={title}
            fullTitle={fullTitle}
            isEnable={isEnable}
            cubeView={cubeView}
            url={url}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default memo(AlgorithmSectionPage);
