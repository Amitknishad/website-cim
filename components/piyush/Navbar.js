"use client";
import React, { useState, useEffect, useRef } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Typography,
  Drawer,
  useMediaQuery,
  InputBase,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false); // To track if the search bar is open
  const [searchTerm, setSearchTerm] = useState(''); // Controlled search input
  const [isSticky, setIsSticky] = useState(false); // To track if the navbar should be sticky

  const navbarRef = useRef(null); // Reference to the navbar element
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // For mobile view
  const router = useRouter(); // Router for navigation

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen); // Toggle the search bar
  };

  const handleNavigation = (path) => {
    router.push(path); // Navigate to the specified path
    if (drawerOpen) {
      setDrawerOpen(false); // Close drawer on mobile after navigation
    }
  };

  // Add scroll event listener to make the navbar sticky when scrolled past its position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > navbarRef.current?.offsetTop) {
        setIsSticky(true); // Make the navbar sticky
      } else {
        setIsSticky(false); // Return the navbar to normal
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <AppBar
        position={isSticky ? 'fixed' : 'static'}
        ref={navbarRef}
        style={{
          backgroundColor: '#ff7e54',
          top: isSticky ? 0 : 'auto',
          zIndex: theme.zIndex.drawer + 1,
          transition: 'top 0.5s ease', // Smooth transition for the navbar's position
        }}
      >
        <Toolbar>
          {/* For Desktop view */}
          {!isMobile && (
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '30px',
              }}
            >
              <Button color="inherit" onClick={() => handleNavigation('/piyush')}>
                Home
              </Button>
              <Button color="inherit" onClick={() => handleNavigation('/vision')}>
                Vision
              </Button>
              <Button color="inherit" onClick={() => handleNavigation('/about')}>
                About
              </Button>
              <Button color="inherit" onClick={() => handleNavigation('/myviews')}>
                My Views
              </Button>
              <Button color="inherit" onClick={() => handleNavigation('/press')}>
                Press
              </Button>
              <Button color="inherit" onClick={() => handleNavigation('/gallery')}>
                Gallery
              </Button>
              <Button color="inherit" onClick={() => handleNavigation('/contact')}>
                Contact
              </Button>

              {/* Expanding Search Icon and Input */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {searchOpen && (
                  <InputBase
                    sx={{
                      width: searchOpen ? '300px' : '0px',
                      transition: 'width 0.3s ease-in-out',
                      opacity: searchOpen ? 1 : 0,
                      backgroundColor: 'white',
                      borderRadius: '30px',
                      padding: '5px 10px',
                    }}
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                )}
                <IconButton sx={{ backgroundColor: 'white' }} color="inherit" onClick={handleSearchClick}>
                  <SearchIcon sx={{ color: '#ff7e54' }} />
                </IconButton>
              </Box>
            </Box>
          )}

          {/* For Mobile view */}
          {isMobile && (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {/* Logo or any branding can go here */}
              </Typography>
              <IconButton color="inherit" edge="end" onClick={toggleDrawer}>
                {drawerOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </>
          )}
        </Toolbar>

        {/* Drawer for mobile menu */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
          <Box sx={{ width: 250, padding: 2 }}>
            <IconButton onClick={toggleDrawer}>
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" component="div">
              Menu
            </Typography>
            <Button color="inherit" onClick={() => handleNavigation('/piyush')}>
              Home
            </Button>
            <Button color="inherit" onClick={() => handleNavigation('/vision')}>
              Vision
            </Button>
            <Button color="inherit" onClick={() => handleNavigation('/about')}>
              About
            </Button>
            <Button color="inherit" onClick={() => handleNavigation('/myviews')}>
              My Views
            </Button>
            <Button color="inherit" onClick={() => handleNavigation('/press')}>
              Press
            </Button>
            <Button color="inherit" onClick={() => handleNavigation('/gallery')}>
              Gallery
            </Button>
            <Button color="inherit" onClick={() => handleNavigation('/contact')}>
              Contact
            </Button>
          </Box>
        </Drawer>
      </AppBar>
    </>
  );
};

export default Navbar;
