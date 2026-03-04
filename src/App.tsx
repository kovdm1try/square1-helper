import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';

import Navigation from '@/navigation/Navigate';
import { theme } from '@/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
