import { type FC, type ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Tooltip } from '@mui/material';
import classNames from 'classnames';

import styles from './AlgorithmSectionButton.module.scss';

export type section = {
  title: string;
  fullTitle: string;
  isEnable: boolean;
  cubeView: ReactNode;
  url: string;
};

const AlgorithmSectionButton: FC<section> = ({ title, fullTitle, isEnable, cubeView, url }) => {
  const navigate = useNavigate();
  const [tooltipOpen, setTooltipOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setTooltipOpen(false);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onClickSection = () => {
    navigate(url);
  };

  return (
    <Tooltip
      title={!isEnable ? 'Coming soon' : ''}
      arrow
      enterTouchDelay={0}
      open={tooltipOpen}
      onOpen={() => setTooltipOpen(true)}
      onClose={() => setTooltipOpen(false)}
    >
      <Button
        className={classNames(styles.sectionButton, { [styles.notEnable]: !isEnable })}
        disableRipple={!isEnable}
        onClick={isEnable ? onClickSection : undefined}
      >
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
