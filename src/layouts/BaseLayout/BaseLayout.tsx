import type { ReactElement } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import ArticleIcon from '@mui/icons-material/Article';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import InfoIcon from '@mui/icons-material/Info';
import LightModeIcon from '@mui/icons-material/LightMode';
import TimerIcon from '@mui/icons-material/Timer';
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import classNames from 'classnames';

import Burger, { type BurgerMenuItem } from '@/components/Burger';

import { useThemeContext } from '@/context/ThemeContext';

import styles from './BaseLayout.module.scss';

interface routingButtonsInterface {
  key: string;
  label: string;
  icon: ReactElement;
  disabled: boolean;
}

const routingButtons: routingButtonsInterface[] = [
  { key: 'about', label: 'About', icon: <InfoIcon />, disabled: false },
  { key: 'obl-naming', label: 'OBL naming', icon: <ArticleIcon />, disabled: true },
  { key: 'timer', label: 'Timer', icon: <TimerIcon />, disabled: false }
];

const BaseLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { isDark, toggleTheme } = useThemeContext();

  const handleNavButtonClick = (key: string) => {
    navigate(`/${key}`);
  };

  const burgerMenuItems: BurgerMenuItem[] = [
    ...routingButtons.map(({ key, label, disabled }) => ({
      label,
      action: () => handleNavButtonClick(key),
      disabled
    })),
    {
      label: 'theme',
      icon: isDark ? <LightModeIcon /> : <DarkModeIcon />,
      action: toggleTheme,
      noClose: true
    }
  ];

  return (
    <Box className={styles.layoutWrapper}>
      <Box className={styles.headerBackground}>
        <Box className={styles.layoutHeader}>
          <Box className={styles.headerSpacer} />

          <Stack direction="row" className={styles.navButtonsStack}>
            {routingButtons.map(({ key, label, icon, disabled }) => (
              <Button
                disabled={disabled}
                key={key}
                startIcon={icon}
                color="primary"
                onClick={() => handleNavButtonClick(key)}
                className={classNames(styles.navButton, { [styles.activeNavButton]: location.pathname === `/${key}` })}
              >
                {label}
              </Button>
            ))}
          </Stack>

          <Burger items={burgerMenuItems} />

          <IconButton onClick={toggleTheme} color="primary" className={styles.themeToggle}>
            {isDark ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Box>
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
