
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import DescriptionIcon from '@mui/icons-material/Description';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Experience', to: '/experience' },
    { name: 'Projects', to: '/projects' },
    { name: 'Certifications', to: '/certifications' },
    { name: 'Resume', to: '/resume' },
  ];

  const isActive = (path) => location.pathname === path;

  // Shared styling for all desktop navigation links
  const navLinkStyle = (path) => ({
    color: isActive(path) ? '#64ffda' : 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 500,
    letterSpacing: '1px',
    padding: '0.5rem 0',
    position: 'relative',
    transition: 'color 0.3s ease',
  });

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'transparent',
        backgroundImage: 'none',
        boxShadow: 'none',
        backdropFilter: 'none',
        width: '100%',
        right: 0,
        left: 0,
        top: 0,
        zIndex: 1200,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'flex-end',
          px: { xs: 2, md: 4 },
          minHeight: '64px !important',
          backgroundColor: 'transparent',
        }}
      >
        {/* Desktop Navigation */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 4,
            alignItems: 'center',
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              style={navLinkStyle(item.to)}
            >
              {item.name}

              {isActive(item.to) && (
                <Box
                  component="span"
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: '#64ffda',
                  }}
                />
              )}
            </Link>
          ))}
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          size="large"
          edge="end"
          aria-label="Open navigation menu"
          aria-controls={open ? 'mobile-navigation-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleMenu}
          sx={{
            display: { xs: 'inline-flex', md: 'none' },
            position: 'absolute',
            right: '1rem',
            color: '#64ffda',
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Navigation Menu */}
        <Menu
          id="mobile-navigation-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            paper: {
              sx: {
                backgroundColor: 'rgba(10, 10, 10, 0.96)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(100, 255, 218, 0.2)',
                borderRadius: '12px',
                minWidth: '210px',
                mt: 1,
              },
            },
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          {navItems.map((item) => (
            <MenuItem
              key={item.to}
              component={Link}
              to={item.to}
              onClick={handleClose}
              selected={isActive(item.to)}
              sx={{
                color: isActive(item.to) ? '#64ffda' : 'white',
                py: 1.4,
                '&.Mui-selected': {
                  backgroundColor: 'rgba(100, 255, 218, 0.12)',
                },
                '&.Mui-selected:hover': {
                  backgroundColor: 'rgba(100, 255, 218, 0.18)',
                },
                '&:hover': {
                  color: '#64ffda',
                  backgroundColor: 'rgba(100, 255, 218, 0.08)',
                },
              }}
            >
              {item.to === '/resume' && (
                <DescriptionIcon
                  sx={{
                    mr: 1,
                    color: '#64ffda',
                    fontSize: '1.1rem',
                  }}
                />
              )}

              {item.name}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
