import type { Theme } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import vars from './variables.module.scss';

const commonPalette = {
  error: {
    main: vars.colorError
  },
  success: {
    main: vars.colorSuccess
  },
  warning: {
    main: vars.colorWarning
  }
};

const commonOptions = {
  typography: {
    fontFamily: vars.fontPrimary,
    fontWeightRegular: vars.fontWeightRegular,
    fontWeightMedium: vars.fontWeightMedium,
    fontWeightBold: vars.fontWeightBold
  },
  zIndex: {
    backdrop: 10,
    loader: 11
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: 'inherit'
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: 16
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxSizing: 'border-box',
          boxShadow: 'none',
          transition: 'background-color var(--transition-base), color var(--transition-base)'
        },
        outlined: ({ theme }: { theme: Theme }) => ({
          borderWidth: '2px',
          borderColor: theme.palette.primary.main,
          opacity: 0.85,
          transition:
            'opacity var(--transition-base), background-color var(--transition-base), color var(--transition-base)',
          '&:hover': {
            opacity: 1
          }
        })
      } as const
    }
  }
};

export const darkTheme = createTheme({
  ...commonOptions,
  palette: {
    ...commonPalette,
    primary: {
      main: vars.colorPrimary,
      contrastText: vars.colorBlack
    },
    secondary: {
      main: vars.colorSecondary,
      contrastText: vars.colorWhite
    },
    mode: 'dark',
    background: {
      default: vars.colorBg,
      paper: vars.colorSurface
    }
  }
});

export const lightTheme = createTheme({
  ...commonOptions,
  palette: {
    ...commonPalette,
    primary: {
      main: vars.colorSecondary,
      contrastText: vars.colorWhite
    },
    secondary: {
      main: vars.colorPrimary,
      contrastText: vars.colorBlack
    },
    mode: 'light',
    background: {
      default: vars.colorBgLight,
      paper: vars.colorSurfaceLight
    }
  }
});
