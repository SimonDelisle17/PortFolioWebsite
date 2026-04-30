import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f5c842',
      light: '#f9d96e',
      dark: '#c9a030',
    },
    secondary: {
      main: '#e8e0d0',
      light: '#f5f0e8',
      dark: '#c8bfaf',
    },
    background: {
      default: '#0e0d0c',
      paper: '#161412',
    },
    text: {
      primary: '#f0ece4',
      secondary: '#8c8272',
    },
    divider: 'rgba(245, 200, 66, 0.12)',
  },
  typography: {
    fontFamily: "'DM Sans', 'Segoe UI', system-ui, -apple-system, sans-serif",
    h1: {
      fontFamily: "'Fraunces', Georgia, serif",
      fontSize: '4.5rem',
      fontWeight: 700,
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: "'Fraunces', Georgia, serif",
      fontSize: '2.8rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: "'Fraunces', Georgia, serif",
      fontSize: '1.9rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.2rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
        'html, body': {
          margin: 0,
          padding: 0,
          backgroundColor: '#0e0d0c',
          color: '#f0ece4',
        },
        '::-webkit-scrollbar': {
          width: '6px',
        },
        '::-webkit-scrollbar-track': {
          background: '#0e0d0c',
        },
        '::-webkit-scrollbar-thumb': {
          background: 'rgba(245, 200, 66, 0.3)',
          borderRadius: '3px',
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: 'rgba(245, 200, 66, 0.5)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 500,
          fontFamily: "'DM Sans', sans-serif",
          letterSpacing: 0,
          transition: 'all 0.2s ease',
        },
        contained: {
          background: '#f5c842',
          color: '#0e0d0c',
          boxShadow: 'none',
          '&:hover': {
            background: '#f9d96e',
            boxShadow: 'none',
            transform: 'translateY(-1px)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        outlined: {
          borderColor: 'rgba(245, 200, 66, 0.4)',
          color: '#f5c842',
          '&:hover': {
            borderColor: '#f5c842',
            backgroundColor: 'rgba(245, 200, 66, 0.06)',
          },
        },
        text: {
          color: '#f0ece4',
          '&:hover': {
            backgroundColor: 'rgba(240, 236, 228, 0.06)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '18px',
          border: '1px solid rgba(240, 236, 228, 0.07)',
          background: '#161412',
          boxShadow: '0 1px 3px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.2)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.5), 0 16px 40px rgba(0,0,0,0.3)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
          fontSize: '0.75rem',
        },
        outlined: {
          borderColor: 'rgba(240, 236, 228, 0.15)',
          color: '#8c8272',
          '&:hover': {
            backgroundColor: 'rgba(240, 236, 228, 0.06)',
            borderColor: 'rgba(240, 236, 228, 0.3)',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'scale(1.08)',
          },
        },
      },
    },
  },
});
