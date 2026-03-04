import { createTheme } from '@mui/material/styles';

import vars from './variables.module.scss';

export const theme = createTheme({
  palette: {
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
  },
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
});
