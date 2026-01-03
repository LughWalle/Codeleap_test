import { primitives as p } from './colors.primitives';

/* ----------------------------
 * Base semantic (default)
 * ---------------------------- */
const baseSemantic = {
  brand: {
    primary: p.blue[500],
    primaryHover: p.blue[600],
    secondary: p.sky[500],
  },

  background: {
    default: p.gray[50],
    surface: p.white,
  },

  text: {
    primary: p.gray[900],
    secondary: p.gray[700],
    disabled: p.gray[500],
    inverse: p.white,
  },

  border: {
    default: p.gray[300],
  },

  feedback: {
    success: p.green[500],
    warning: p.yellow[500],
    error: p.red[500],
  },

  state: {
    focus: p.blue[300],
    disabled: p.gray[500],
  },
};

/* ----------------------------
 * Theme overrides
 * ---------------------------- */
export const semanticColorMaps = {
  light: baseSemantic,

  dark: {
    ...baseSemantic,

    background: {
      default: p.gray[900],
      surface: p.gray[700],
    },

    text: {
      primary: p.white,
      secondary: p.gray[300],
      disabled: p.gray[500],
      inverse: p.black,
    },

    border: {
      default: p.gray[700],
    },

    state: {
      ...baseSemantic.state,
      focus: p.blue[500],
      disabled: p.gray[700],
    },
  },

  forest: {
    ...baseSemantic,

    brand: {
      ...baseSemantic.brand,
      primary: p.green[500],
      primaryHover: p.green[600],
    },

    background: {
      default: p.green[900],
      surface: p.green[700],
    },

    text: {
      primary: p.white,
      secondary: p.green[100],
      disabled: p.green[300],
      inverse: p.black,
    },

    border: {
      default: p.green[700],
    },

    state: {
      ...baseSemantic.state,
      focus: p.sky[300],
      disabled: p.green[300],
    },
  },
};
