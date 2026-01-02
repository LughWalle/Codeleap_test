import { createTheme } from '@mui/material/styles';
import { baseTheme } from './baseTheme';
import { colors } from '../tokens/colors';
import { getComponentsOverrides } from './components';

export const lightTheme = createTheme({
  ...baseTheme,

  palette: {
    mode: 'light',

    background: {
      default: colors.neutral.light.background,
      paper: colors.neutral.light.surface,
    },

    primary: {
      main: colors.brand.primary.main,
    },

    secondary: {
      main: colors.brand.secondary.main,
    },

    text: {
      primary: colors.neutral.light.textPrimary,
      secondary: colors.neutral.light.textSecondary,
      disabled: colors.neutral.light.textDisabled,
    },

    divider: colors.neutral.light.border,
  },

  components: getComponentsOverrides('light'),
});
