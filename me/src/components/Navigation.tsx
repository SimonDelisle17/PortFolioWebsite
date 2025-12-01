import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
  Container,
  Typography,
  Avatar,
  Snackbar,
  Alert,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import { setActiveSection } from '../store/slices/navigationSlice';
import { RootState } from '../store/store';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const dispatch = useDispatch();
  const activeSection = useSelector((state: RootState) => state.navigation.activeSection);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'portfolio', label: 'PORTFOLIO' },
    { id: 'resume', label: 'RESUME' },
    { id: 'about', label: 'ABOUT' },
  ];

  const handleNavClick = (sectionId: string) => {
    dispatch(setActiveSection(sectionId));
    setMobileOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    navigator.clipboard.writeText('simon.delisle2025@gmail.com');
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const drawer = (
    <Box onClick={() => setMobileOpen(false)} sx={{ textAlign: 'center', bgcolor: 'background.paper', height: '100%' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Simon Delisle
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={() => handleNavClick(item.id)}
              selected={activeSection === item.id}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: 'rgba(10, 15, 30, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(0, 212, 255, 0.1)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo */}
            <Avatar
              sx={{
                mr: 2,
                background: 'linear-gradient(135deg, #00d4ff, #ffc107)',
                color: 'background.default',
                fontWeight: 700,
              }}
            >
              SD
            </Avatar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: { xs: 1, md: 0 }, mr: { md: 4 }, fontWeight: 700 }}
            >
              Simon Delisle
            </Typography>

            {/* Desktop Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 4 }}>
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  sx={{
                    color: activeSection === item.id ? 'primary.main' : 'text.secondary',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    letterSpacing: '1px',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: activeSection === item.id ? '100%' : 0,
                      height: '2px',
                      bgcolor: 'primary.main',
                      transition: 'width 0.3s ease',
                    },
                    '&:hover': {
                      color: 'primary.main',
                      '&::after': {
                        width: '100%',
                      },
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Contact Button */}
            <Button
              variant="outlined"
              startIcon={<PhoneIcon />}
              onClick={handleContactClick}
              sx={{
                display: { xs: 'none', md: 'flex' },
                borderRadius: '25px',
                borderColor: 'primary.main',
                color: 'primary.main',
                '&:hover': {
                  borderColor: 'primary.light',
                  bgcolor: 'rgba(0, 212, 255, 0.1)',
                },
              }}
            >
              Contact Me
            </Button>

            {/* Mobile Menu Icon */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={() => setMobileOpen(true)}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>

      {/* Toolbar Spacer */}
      <Toolbar />

      {/* Email Copied Notification */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Email copied to clipboard!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Navigation;
