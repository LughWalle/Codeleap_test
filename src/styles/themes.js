import { createTheme } from '@mui/material/styles';
import { colors } from './tokens/colors';
import { typographyTokens as type } from './tokens/typography';
import { spacing } from './tokens/spacing';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.brand.primary,
      contrastText: colors.neutral.white,
    },

    success: {
      main: colors.feedback.success,
      contrastText: colors.neutral.white,
    },

    warning: {
      main: colors.feedback.warning,
      contrastText: colors.neutral.white,
    },

    grey: {
      500: colors.neutral.gray,
    },

    text: {
      primary: colors.neutral.black,
      secondary: colors.neutral.gray,
    },

    divider: colors.neutral.lightGray,
  },

  typography: {
    fontFamily: type.fontFamily,

    allVariants: {
      lineHeight: 1,
    },

    h1: {
      fontSize: type.sizes.xl,
      fontWeight: type.weight.bold,
    },

    h2: {
      fontSize: type.sizes.lg,
      fontWeight: type.weight.bold,
    },

    body1: {
      fontSize: type.sizes.md,
    },

    body2: {
      fontSize: type.sizes.sm,
      color: colors.neutral.gray,
    },

    button: {
      fontSize: type.sizes.sm,
      fontWeight: type.weight.bold,
      textTransform: 'none',
    },
  },

  shape: {
    borderRadius: 8,
  },

  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: type.sizes.sm,
          marginBottom: spacing.sm,
          lineHeight: 1,
          textAlign: 'left',
          color: colors.neutral.black,
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        size: 'small',
        variant: 'outlined',
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: type.sizes.sm,
          lineHeight: 1,
          alignItems: 'center',
        },

        input: {
          lineHeight: 1,
          padding: `${spacing.xs + 2}px ${spacing.sm}px`, // 6px 8px
        },

        multiline: {
          padding: spacing.sm,
          alignItems: 'flex-start',
        },

        inputMultiline: {
          lineHeight: 1,
          padding: 0,
        },
      },
    },
  },
});

export default theme;
