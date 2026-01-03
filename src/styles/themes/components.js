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
        root: ({ theme }) => ({
          minHeight: 36,
          padding: theme.spacing(1, 3),
          borderRadius: theme.shape.borderRadius,
          fontWeight: type.weight.bold,

          transition: theme.motion.duration.base,

          '&.Mui-disabled': {
            backgroundColor: theme.palette.action.disabledBackground,
            color: theme.palette.action.disabled,
          },
        }),
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
