import { spacing as spacingTokens } from '../tokens/spacing';
import { typographyTokens as type } from '../tokens/typography';
import { motion } from '../tokens/motion';

const spacingScale = {
  0: 0,
  1: spacingTokens.xs, // 0.4
  2: spacingTokens.sm, // 0.8
  3: spacingTokens.md, // 1.6
  4: spacingTokens.lg, // 2.4
  5: spacingTokens.xl, // 3.2
};

export const baseTheme = {
   spacing: (factor) => {
    const value = spacingScale[factor] ?? factor * spacingTokens.md;
    return `${value}rem`;
  },
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
