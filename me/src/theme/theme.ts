import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00d4ff',
      light: '#4de2ff',
      dark: '#00a8cc',
    },
    secondary: {
      main: '#ffc107',
      light: '#ffd54f',
      dark: '#ffa000',
    },
    background: {
      default: '#0a0f1e',
      paper: '#121829',
    },
    text: {
      primary: '#ffffff',
      secondary: '#a8b2d1',
    },
  },
  typography: {
    fontFamily: "'Inter', 'Segoe UI', 'Roboto', system-ui, -apple-system, sans-serif",
    h1: {
      fontSize: '4rem',
      fontWeight: 800,
      lineHeight: 1.1,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: '2px',
    },
    h3: {
      fontSize: '1.8rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.3rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.8,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '30px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 32px',
        },
        contained: {
          background: 'linear-gradient(135deg, #00d4ff, #ffc107)',
          color: '#0a0f1e',
          '&:hover': {
            background: 'linear-gradient(135deg, #00a8cc, #ffa000)',
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 30px rgba(0, 212, 255, 0.3)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '15px',
          border: '1px solid rgba(0, 212, 255, 0.1)',
          background: '#121829',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: '#00d4ff',
            transform: 'translateY(-10px)',
            boxShadow: '0 10px 40px rgba(0, 212, 255, 0.2)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '15px',
          fontWeight: 500,
        },
      },
    },
  },
});
