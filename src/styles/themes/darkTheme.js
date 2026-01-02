import { createTheme } from '@mui/material/styles';
import { baseTheme } from './baseTheme';
import { colors } from '../tokens/colors';
import { getComponentsOverrides } from './components';

export const darkTheme = createTheme({
  ...baseTheme,

  palette: {
    mode: 'dark',

    background: {
      default: colors.neutral.dark.background,
      paper: colors.neutral.dark.surface,
    },

    primary: {
      main: colors.brand.primary.main,
    },

    secondary: {
      main: colors.brand.secondary.main,
    },

    text: {
      primary: colors.neutral.dark.textPrimary,
      secondary: colors.neutral.dark.textSecondary,
      disabled: colors.neutral.dark.textDisabled,
    },

    divider: colors.neutral.dark.border,
  },

  components: getComponentsOverrides('dark'),
});
