import { ThemeProvider as MUIThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { QueryClientProvider } from '@tanstack/react-query';

import { useThemeContext } from './styles/themes/ThemeContext';
import { GlobalStyles } from './styles/GlobalStyles';
import { queryClient } from './services/queryClient';

export function Providers({ children }) {
  const { theme } = useThemeContext();

  if (!theme) return null;

  return (
    <StyledEngineProvider injectFirst>
      <QueryClientProvider client={queryClient}>
        <MUIThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
          </StyledThemeProvider>
        </MUIThemeProvider>
      </QueryClientProvider>
    </StyledEngineProvider>
  );
}
