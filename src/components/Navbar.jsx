import { AppBar, Toolbar, Box, IconButton, Menu, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import DescriptionIcon from '@mui/icons-material/Description';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const location = useLocation();
  const open = Boolean(anchorEl);

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Experience', to: '/experience' },
    { name: 'Projects', to: '/projects' },
    { name: 'Certifications', to: '/certifications' },
  ];

  const resumeLink = 'https://drive.google.com/file/d/1e1fmHu7QfNfbkoKrbOTNFinD5IcNBKer/view?usp=drive_link';

  return (
    <AppBar 
      position="fixed"
      sx={{ 
        backgroundColor: 'transparent',
        boxShadow: 'none',
        backdropFilter: 'none',
        transition: 'none',
        width: '100%',
        right: 0,
        left: 0,
        top: 0,
      }}
    >
      <Toolbar sx={{ 
        justifyContent: 'right',
        padding: '2 !important',
        minHeight: '64px !important',
        backgroundColor: 'transparent',
      }}>
        {/* Desktop Navigation - Simple Links */}
        <Box sx={{ 
          display: { xs: 'none', md: 'flex' }, 
          gap: 4,
          alignItems: 'center',
        }}>
          {navItems.map((item) => (
            <Link 
              key={item.to}
              to={item.to}
              style={{
                color: location.pathname === item.to ? '#64ffda' : 'white',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                letterSpacing: '1px',
                padding: '0.5rem 0',
                position: 'relative',
              }}
            >
              {item.name}
              {location.pathname === item.to && (
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: '#64ffda',
                }}/>
              )}
            </Link>
          ))}
          {/* Resume Button */}
          <Button
            variant="outlined"
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<DescriptionIcon />}
            sx={{
              color: '#64ffda',
              borderColor: '#64ffda',
              padding: '0.5rem 1.5rem',
              marginLeft: '1rem',
              '&:hover': {
                backgroundColor: 'rgba(100, 255, 218, 0.1)',
                borderColor: '#64ffda',
              }
            }}
          >
            Resume
          </Button>
        </Box>
        
        {/* Mobile menu button */}
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenu}
          sx={{ 
            display: { md: 'none' },
            position: 'absolute',
            right: '1rem',
          }}
        >
          <MenuIcon />
        </IconButton>
        
        {/* Mobile menu */}
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          sx={{ 
            '& .MuiPaper-root': {
              backgroundColor: 'rgba(10, 10, 10, 0.9)',
              minWidth: '200px',
            }
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
              onClick={handleClose}
              component={Link}
              to={item.to}
              selected={location.pathname === item.to}
              sx={{
                color: location.pathname === item.to ? '#64ffda' : 'white',
                '&.Mui-selected': {
                  backgroundColor: 'rgba(100, 255, 219, 0.15)',
                },
              }}
            >
              {item.name}
            </MenuItem>
          ))}
          {/* Resume Link in Mobile Menu */}
          <MenuItem 
            onClick={handleClose}
            component="a"
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'white',
              '&:hover': {
                color: '#64ffda',
              }
            }}
          >
            <DescriptionIcon sx={{ marginRight: '8px' }} />
            Resume
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;