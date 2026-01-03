import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './app/App';
import { Providers } from './Providers';
import { ThemeProvider } from './styles/themes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Providers>
        <App />
      </Providers>
    </ThemeProvider>
  </StrictMode>
);
