import { createTheme } from '@mui/material/styles';
import { baseTheme } from './baseTheme';
import { colors } from '../tokens/colors';
import { getComponentsOverrides } from './components';

export const forestTheme = createTheme({
  ...baseTheme,

  palette: {
    mode: 'dark',

    background: {
      default: colors.neutral.forest.background,
      paper: colors.neutral.forest.surface,
    },

    primary: {
      main: colors.brand.primary.main,
      contrastText: colors.neutral.forest.textPrimary,
    },

    secondary: {
      main: colors.brand.secondary.main,
      contrastText: colors.neutral.forest.textPrimary,
    },

    text: {
      primary: colors.neutral.forest.textPrimary,
      secondary: colors.neutral.forest.textSecondary,
      disabled: colors.neutral.forest.textDisabled,
    },

    divider: colors.neutral.forest.border,
  },

  components: getComponentsOverrides('dark'),
});
