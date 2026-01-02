import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './app/App';
import { ThemeProvider } from './styles/themes/ThemeContext';
import { Providers } from './Providers';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Providers>
        <App />
      </Providers>
    </ThemeProvider>
  </StrictMode>
);
