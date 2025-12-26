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
    MuiTypography: {
      styleOverrides: {
        root: {
          margin: 0,
        }
      }
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableElevation: true,
      },

      styleOverrides: {
        root: ({ theme }) => ({
          maxWidth: 120,
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
      variants: [
        {
          props: { variant: 'outlined', color: 'inherit' },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.common?.white || '#fff',
            border: `1px solid ${theme.palette.text.primary}`,
            color: theme.palette.text.primary,

            '&:hover': {
              backgroundColor: theme.palette.action.hover,
              borderColor: theme.palette.text.primary,
            },
          }),
        },
        {
          props: { variant: 'outlined', color: 'primary' },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.neutral?.white || '#fff',
            border: `1px solid ${theme.palette.primary.main}`,
            color: theme.palette.primary.main,

            '&:hover': {
              backgroundColor: theme.palette.action.hover,
              borderColor: theme.palette.primary.main,
            },
          }),
        },
        {
          props: { variant: 'outlined', color: 'success' },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.neutral?.white || '#fff',
            border: `1px solid ${theme.palette.success.main}`,
            color: theme.palette.success.main,
          }),
        },
        {
          props: { variant: 'outlined', color: 'warning' },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.neutral?.white || '#fff',
            border: `1px solid ${theme.palette.warning.main}`,
            color: theme.palette.warning.main,
          }),
        },
      ],
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
          paddingInline: `${spacing.sm + 0.26}rem`, // 10.6px
        },

        input: {
          height: 32,
          padding: 0,
          lineHeight: 1,
        },

        multiline: {
          paddingBlock: `${spacing.sm - 0.1}rem`,
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
