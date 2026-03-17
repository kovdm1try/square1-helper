import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, Button, Grid, Typography } from '@mui/material';

import AlgorithmCard from '@/components/AlgorithmCard';

import { SectionNames } from '@/data';

import styles from './AlgorithmsPage.module.scss';

interface AlgorithmsPageProps {
  sectionName: string;
}

const AlgorithmsPage: FC<AlgorithmsPageProps> = ({ sectionName }) => {
  const navigate = useNavigate();

  const onBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <Box className={styles.pageWrapper}>
      <Box className={styles.sectionHeader}>
        <Button variant="text" color="primary" onClick={onBackButtonClick} className={styles.backButton}>
          <ArrowBackIosNewIcon fontSize="large" className={styles.icon} />
        </Button>
        <Typography className={styles.sectionName}>{SectionNames.get(sectionName)}</Typography>
        <Box className={styles.spacer} />
      </Box>
      <Box className={styles.content}>
        <Grid container className={styles.sectionsGrid}>
          <AlgorithmCard />
        </Grid>
      </Box>
    </Box>
  );
};

export default AlgorithmsPage;
