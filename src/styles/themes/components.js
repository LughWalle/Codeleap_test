import { colors } from '../tokens/colors';
import { spacing } from '../tokens/spacing';
import { typographyTokens as type } from '../tokens/typography';

export function getComponentsOverrides(mode) {
  const isDark = mode === 'dark';

  return {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          minHeight: 36,
          padding: `${spacing.xs}rem ${spacing.md}rem`,
          borderRadius: 8,
          fontWeight: type.weight.bold,

          transition: 'background-color 200ms ease',

          '&.Mui-disabled': {
            backgroundColor: colors.brand.primary.disabled,
          },
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
  };
}
