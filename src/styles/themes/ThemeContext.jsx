import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { themeRegistry } from './themeRegistry';

const ThemeContext = createContext(null);

function getInitialTheme() {
  const saved = localStorage.getItem('theme');

  if (saved && themeRegistry.some(t => t.id === saved)) {
    return saved;
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

export function ThemeProvider({ children }) {
  // ✅ estado inicial síncrono
  const [themeId, setThemeId] = useState(getInitialTheme);

  // 🔄 só sincroniza mudanças externas
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const handler = (e) => {
      if (!localStorage.getItem('theme')) {
        setThemeId(e.matches ? 'dark' : 'light');
      }
    };

    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  const themeEntry = useMemo(
    () => themeRegistry.find(t => t.id === themeId) ?? themeRegistry[0],
    [themeId]
  );

  const setNextTheme = () => {
    const currentIndex = themeRegistry.findIndex(t => t.id === themeId);
    const nextIndex = (currentIndex + 1) % themeRegistry.length;
    const nextThemeId = themeRegistry[nextIndex].id;

    setThemeId(nextThemeId);
    localStorage.setItem('theme', nextThemeId);
  };

  return (
    <ThemeContext.Provider
      value={{
        themeId,
        theme: themeEntry.theme,
        themes: themeRegistry,
        setNextTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useThemeContext must be used within ThemeProvider');
  }
  return ctx;
}
