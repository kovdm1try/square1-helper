import type { ReactElement } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import ArticleIcon from '@mui/icons-material/Article';
import InfoIcon from '@mui/icons-material/Info';
import TimerIcon from '@mui/icons-material/Timer';
import { Box, Button, Stack, Typography } from '@mui/material';
import classNames from 'classnames';

import styles from './BaseLayout.module.scss';

interface routingButtonsInterface {
  key: string;
  label: string;
  icon: ReactElement;
}

const routingButtons: routingButtonsInterface[] = [
  { key: 'about', label: 'About', icon: <InfoIcon /> },
  { key: 'obl-naming', label: 'OBL naming', icon: <ArticleIcon /> },
  { key: 'obl-timer', label: 'OBL timer', icon: <TimerIcon /> }
];

const BaseLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavButtonClick = (key: string) => {
    navigate(`/${key}`);
  };

  return (
    <Box className={styles.layoutWrapper}>
      <Box className={styles.layoutHeader}>
        <Stack direction="row" className={styles.navButtonsStack}>
          {routingButtons.map(({ key, label, icon }) => (
            <Button
              key={key}
              startIcon={icon}
              color="secondary"
              onClick={() => handleNavButtonClick(key)}
              className={classNames(styles.navButton, { [styles.activeNavButton]: location.pathname === `/${key}` })}
            >
              {label}
            </Button>
          ))}
        </Stack>
      </Box>
      <Box className={styles.layoutContent}>
        <Outlet />
      </Box>
      <Box className={styles.layoutFooter} alignContent="center" justifyContent="center">
        <Typography component="div">
          {`Copyright © ${new Date().getFullYear()} by `} <a href="https://github.com/kovdm1try">kovdm1try</a>
        </Typography>
      </Box>
    </Box>
  );
};

export default BaseLayout;
