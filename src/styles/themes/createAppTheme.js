import { createTheme } from '@mui/material/styles';
import { baseTheme } from './baseTheme';
import { getComponentsOverrides } from './components';
import { semanticColorMaps } from '../tokens/colors.semantic.map';

export function createAppTheme({ id, mode }) {
  const semanticColors = semanticColorMaps[id];

  if (!semanticColors) {
    throw new Error(`Theme "${id}" not found in semanticColorMaps`);
  }

  return createTheme({
    ...baseTheme,

    palette: {
      mode,

      primary: {
        main: semanticColors.brand.primary,
        contrastText: semanticColors.text.inverse,
      },

      secondary: {
        main: semanticColors.brand.secondary,
      },

      background: {
        default: semanticColors.background.default,
        paper: semanticColors.background.surface,
      },

      text: {
        primary: semanticColors.text.primary,
        secondary: semanticColors.text.secondary,
        disabled: semanticColors.text.disabled,
      },

      divider: semanticColors.border.default,

      action: {
        disabled: semanticColors.state.disabled,
        disabledBackground: semanticColors.state.disabled,
        focus: semanticColors.state.focus,
      },

      success: { main: semanticColors.feedback.success },
      warning: { main: semanticColors.feedback.warning },
      error: { main: semanticColors.feedback.error },
    },

    components: getComponentsOverrides(),
  });
}
