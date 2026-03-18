import { type FC, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, Button, Grid, Typography } from '@mui/material';

import AlgorithmCard from '@/components/AlgorithmCard';

import { SectionNames } from '@/data';
import { ALGORITHMS } from '@/data/algorithms';

import styles from './AlgorithmsPage.module.scss';
import { calcDelay } from '@/lib/algorithmsPage';

interface AlgorithmsPageProps {
  sectionName: string;
}
const CARD_WIDTH = 280;

const AlgorithmsPage: FC<AlgorithmsPageProps> = ({ sectionName }) => {
  const navigate = useNavigate();
  const contentRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);

  const onBackButtonClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    const ro = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentBoxSize[0].inlineSize);
    });

    ro.observe(container);
    return () => ro.disconnect();
  }, []);

  return (
    <Box className={styles.pageWrapper}>
      <Box className={styles.sectionHeader}>
        <Button variant="text" color="primary" onClick={onBackButtonClick} className={styles.backButton}>
          <ArrowBackIosNewIcon fontSize="large" className={styles.icon} />
        </Button>
        <Typography className={styles.sectionName}>{SectionNames.get(sectionName)}</Typography>
        <Box className={styles.spacer} />
      </Box>
      <Box className={styles.content} ref={contentRef}>
        <Grid container className={styles.sectionsGrid}>
          {(ALGORITHMS.get(sectionName) ?? []).map(({ topSide, bottomSide, algorithm, algorithmName }, index) => (
            <AlgorithmCard
              key={`${algorithmName}-${sectionName}-${index}`}
              topSide={topSide}
              bottomSide={bottomSide}
              algorithm={algorithm}
              algorithmName={algorithmName}
              animationDelay={calcDelay(CARD_WIDTH, containerWidth, index)}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AlgorithmsPage;
