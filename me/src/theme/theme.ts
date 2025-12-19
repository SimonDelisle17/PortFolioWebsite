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
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '0',
            height: '0',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            transform: 'translate(-50%, -50%)',
            transition: 'width 0.6s, height 0.6s',
          },
          '&:hover::before': {
            width: '300px',
            height: '300px',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #00d4ff, #ffc107)',
          color: '#0a0f1e',
          boxShadow: '0 4px 20px rgba(0, 212, 255, 0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, #00a8cc, #ffa000)',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 32px rgba(0, 212, 255, 0.5)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        outlined: {
          borderWidth: '1.5px',
          '&:hover': {
            borderWidth: '1.5px',
            backgroundColor: 'rgba(0, 212, 255, 0.05)',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 24px rgba(0, 212, 255, 0.2)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          border: '1px solid rgba(0, 212, 255, 0.1)',
          background: 'linear-gradient(135deg, rgba(18, 24, 41, 0.95), rgba(18, 24, 41, 0.9))',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            borderColor: 'rgba(0, 212, 255, 0.3)',
            transform: 'translateY(-8px)',
            boxShadow: '0 20px 60px rgba(0, 212, 255, 0.25)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          fontWeight: 500,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
        outlined: {
          '&:hover': {
            backgroundColor: 'rgba(0, 212, 255, 0.08)',
            borderColor: '#00d4ff',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'scale(1.1)',
          },
          '&:active': {
            transform: 'scale(0.95)',
          },
        },
      },
    },
  },
});
