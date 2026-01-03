import { createAppTheme } from './createAppTheme';
export { useThemeContext, ThemeProvider } from './ThemeContext'

// THEMES
export const lightTheme  = createAppTheme({ id: 'light', mode: 'light' });
export const forestTheme = createAppTheme({ id: 'forest', mode: 'dark' });
export const darkTheme   = createAppTheme({ id: 'dark', mode: 'dark' });