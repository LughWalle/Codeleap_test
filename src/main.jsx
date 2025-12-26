import { StrictMode } from 'react'
import '@fontsource-variable/roboto';
import { createRoot } from 'react-dom/client'
import App from './app/App.jsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider as MUIThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import theme from './styles/themes.js'
import { GlobalStyles } from './styles/GlobalStyles.js'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { queryClient } from './services/queryClient.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
    <QueryClientProvider client={queryClient}>
      <MUIThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <GlobalStyles />
          <App />
        </StyledThemeProvider>
      </MUIThemeProvider>
    </QueryClientProvider>
    </StyledEngineProvider>
  </StrictMode>,
)
