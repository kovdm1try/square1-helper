import { HashRouter } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';

import { ThemeContextProvider, useThemeContext } from '@/context/ThemeContext';

import Navigation from '@/navigation/Navigate';
import { darkTheme, lightTheme } from '@/styles';

const AppWithTheme = () => {
  const { isDark } = useThemeContext();

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <HashRouter>
        <Navigation />
      </HashRouter>
    </ThemeProvider>
  );
};

function App() {
  return (
    <ThemeContextProvider>
      <AppWithTheme />
    </ThemeContextProvider>
  );
}

export default App;
