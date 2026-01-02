import { useThemeContext } from './ThemeContext';

export function useThemeController() {
  const { setNextTheme } = useThemeContext();
  return { setNextTheme };
}
