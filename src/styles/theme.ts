import { createTheme } from '@mui/material/styles';

import vars from './variables.module.scss';

export const theme = createTheme({
  palette: {
    primary: {
      main: vars.colorPrimary,
      light: vars.colorPrimaryLight,
      dark: vars.colorPrimaryDark,
      contrastText: vars.colorContrast
    },
    secondary: {
      main: vars.colorSecondaryMain,
      light: vars.colorSecondaryLight,
      dark: vars.colorSecondaryDark,
      contrastText: vars.colorContrast
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
  components: {}
});
