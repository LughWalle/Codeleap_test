import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7695EC',
      contrastText: '#FFFFFF',
    },

    success: {
      main: '#47B960',
      contrastText: '#FFFFFF',
    },

    warning: {
      main: '#FF5151',
      contrastText: '#FFFFFF',
    },

    grey: {
      500: '#777777',
    },

    text: {
      primary: '#1A1A1A',
      secondary: '#777777',
    },

    divider: '#E0E0E0',
  },

  typography: {
    fontFamily: 'Roboto, sans-serif',

    h1: {
      fontSize: '2.2rem',
      fontWeight: 700,
    },

    h2: {
      fontSize: '1.8rem',
      fontWeight: 600,
    },

    body1: {
      fontSize: '1.6rem',
      lineHeight: 1.6,
    },

    body2: {
      fontSize: '1.4rem',
      lineHeight: 1.5,
      color: '#777777',
    },

    button: {
      fontSize: '1.4rem',
      fontWeight: 600,
      textTransform: 'none',
    },
  },

  shape: {
    borderRadius: 8,
  },
});

export default theme;
