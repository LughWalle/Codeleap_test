import { spacing } from '../tokens/spacing';
import { typographyTokens as type } from '../tokens/typography';
import { motion } from '../tokens/motion';

export const baseTheme = {
  spacing: (factor) => `${factor * spacing.md}rem`,
  motion,

  shape: {
    borderRadius: 8,
  },

  typography: {
    fontFamily: type.fontFamily,

    allVariants: {
      lineHeight: type.lineHeight.normal,
    },

    h1: {
      fontSize: type.sizes.xl,
      fontWeight: type.weight.bold,
      lineHeight: type.lineHeight.tight,
    },

    h2: {
      fontSize: type.sizes.lg,
      fontWeight: type.weight.bold,
      lineHeight: type.lineHeight.tight,
    },

    body1: {
      fontSize: type.sizes.md,
      lineHeight: type.lineHeight.relaxed,
    },

    body2: {
      fontSize: type.sizes.sm,
      lineHeight: type.lineHeight.relaxed,
    },

    button: {
      fontSize: type.sizes.sm,
      fontWeight: type.weight.bold,
      textTransform: 'none',
    },
  },
};
