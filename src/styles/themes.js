import { createTheme } from '@mui/material/styles';
import { colors } from './tokens/colors';
import { typographyTokens as type } from './tokens/typography';
import { spacing } from './tokens/spacing';

const theme = createTheme({
  custom: { spacing },
  palette: {
    primary: {
      main: colors.brand.primary.main,
      contrastText: colors.neutral.white,
    },

    success: {
      main: colors.feedback.success.main,
      contrastText: colors.neutral.white,
    },

    warning: {
      main: colors.feedback.warning.main,
      contrastText: colors.neutral.white,
    },

    grey: {
      500: colors.neutral.mediumGray,
    },

    text: {
      primary: colors.neutral.black,
      secondary: colors.neutral.darkGray,
      disabled: colors.neutral.lightGray,
    },

    divider: colors.neutral.veryLightGray,
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
      color: colors.neutral.mediumGray,
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
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableElevation: true,
      },

      styleOverrides: {
        root: ({ theme }) => ({
          minWidth: 111,
          padding: `${spacing.xs}rem ${spacing.md}rem`,
          borderRadius: 8,
          fontSize: type.sizes.sm,
          fontWeight: type.weight.bold,
          lineHeight: 1,

          '&.Mui-disabled': {
            backgroundColor: theme.palette.divider,
            color: theme.palette.text.disabled,
          },
        }),
      },
    },

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
          // padding: `${spacing.xs + 2}rem ${spacing.sm}rem`,
          lineHeight: 1,
        },

        multiline: {
          padding: `${spacing.sm}rem`,
          alignItems: 'flex-start',
        },

        inputMultiline: {
          padding: 0,
          lineHeight: 1,
        },
      },
    },
  },
});

export default theme;
