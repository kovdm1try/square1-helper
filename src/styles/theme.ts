import { createTheme } from '@mui/material/styles';

import vars from './variables.module.scss';

const commonPalette = {
  primary: {
    main: vars.colorPrimary,
    contrastText: vars.colorBlack
  },
  secondary: {
    main: vars.colorSecondary,
    contrastText: vars.colorWhite
  },
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
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: 'inherit'
        }
      }
    }
  }
};

export const darkTheme = createTheme({
  ...commonOptions,
  palette: {
    ...commonPalette,
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
    mode: 'light',
    background: {
      default: vars.colorBgLight,
      paper: vars.colorSurfaceLight
    }
  }
});
