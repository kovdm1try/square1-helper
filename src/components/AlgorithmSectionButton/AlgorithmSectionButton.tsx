import type { FC, ReactNode } from 'react';

import { Box, Button, Tooltip } from '@mui/material';
import classNames from 'classnames';

import styles from './AlgorithmSectionButton.module.scss';

export type section = {
  title: string;
  fullTitle: string;
  isEnable: boolean;
  cubeView: ReactNode;
};

const AlgorithmSectionButton: FC<section> = ({ title, fullTitle, isEnable, cubeView }) => {
  return (
    <Tooltip title={!isEnable ? 'Coming soon' : ''} arrow enterTouchDelay={0}>
      <Button className={classNames(styles.sectionButton, { [styles.notEnable]: !isEnable })} disableRipple={!isEnable}>
        <Box className={styles.cubeShow}>{cubeView}</Box>
        <Box className={styles.titlesContainer}>
          <Box className={styles.title}>{title}</Box>
          <Box className={styles.fullTitle}>{fullTitle ? `(${fullTitle})` : ''}</Box>
        </Box>
      </Button>
    </Tooltip>
  );
};

export default AlgorithmSectionButton;
