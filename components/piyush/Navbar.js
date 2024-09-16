"use client";
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Typography,
  Menu,
  MenuItem,
  Drawer,
  Collapse,
  useMediaQuery,
  InputBase,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(null); // To track which dropdown is open in desktop

  const [dropdownOpen, setDropdownOpen] = useState({
    about: false,
    gallery: false,
    press: false,
    myViews: false,
  });

  const [searchOpen, setSearchOpen] = useState(false); // To track if the search bar is open
  const [searchTerm, setSearchTerm] = useState(''); // Controlled search input

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // For mobile view

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDropdownToggle = (menu) => {
    setDropdownOpen({
      ...dropdownOpen,
      [menu]: !dropdownOpen[menu],
    });
  };

  // Desktop menu open
  const handleMenuOpen = (event, menuName) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(menuName);
  };

  // Desktop menu close
  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen); // Toggle the search bar
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#f27c21' }}>
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
            <Button color="inherit">Home</Button>

            {/* About dropdown */}
            <Button color="inherit" onClick={(event) => handleMenuOpen(event, 'about')}>
              About {openMenu === 'about' ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </Button>
            <Menu anchorEl={anchorEl} open={openMenu === 'about'} onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose}>About Option 1</MenuItem>
              <MenuItem onClick={handleMenuClose}>About Option 2</MenuItem>
            </Menu>

            {/* Gallery dropdown */}
            <Button color="inherit" onClick={(event) => handleMenuOpen(event, 'gallery')}>
              Gallery {openMenu === 'gallery' ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </Button>
            <Menu anchorEl={anchorEl} open={openMenu === 'gallery'} onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose}>Gallery Option 1</MenuItem>
              <MenuItem onClick={handleMenuClose}>Gallery Option 2</MenuItem>
            </Menu>

            {/* Press dropdown */}
            <Button color="inherit" onClick={(event) => handleMenuOpen(event, 'press')}>
              Press {openMenu === 'press' ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </Button>
            <Menu anchorEl={anchorEl} open={openMenu === 'press'} onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose}>Press Option 1</MenuItem>
              <MenuItem onClick={handleMenuClose}>Press Option 2</MenuItem>
            </Menu>

            <Button color="inherit">Contact</Button>

            {/* My Views dropdown */}
            <Button color="inherit" onClick={(event) => handleMenuOpen(event, 'myViews')}>
              My Views {openMenu === 'myViews' ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </Button>
            <Menu anchorEl={anchorEl} open={openMenu === 'myViews'} onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose}>My Views Option 1</MenuItem>
              <MenuItem onClick={handleMenuClose}>My Views Option 2</MenuItem>
            </Menu>

            {/* Expanding Search Icon and Input */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {searchOpen && (
                <InputBase
                  sx={{
                    width: searchOpen ? '300px' : '0px',
                    transition: 'width 0.3s ease-in-out',
                    opacity: searchOpen ? 1 : 0,
                    backgroundColor: 'white',
                    borderRadius: '4px',
                    padding: '5px 10px',
                  }}
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  inputProps={{ 'aria-label': 'search' }}
                />
              )}
              <IconButton color="inherit" onClick={handleSearchClick}>
                <SearchIcon />
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

          <MenuItem onClick={toggleDrawer}>Home</MenuItem>

          {/* About dropdown in drawer */}
          <MenuItem onClick={() => handleDropdownToggle('about')}>
            About {dropdownOpen.about ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </MenuItem>
          <Collapse in={dropdownOpen.about}>
            <Box sx={{ paddingLeft: 2 }}>
              <MenuItem>About Option 1</MenuItem>
              <MenuItem>About Option 2</MenuItem>
            </Box>
          </Collapse>

          {/* Gallery dropdown in drawer */}
          <MenuItem onClick={() => handleDropdownToggle('gallery')}>
            Gallery {dropdownOpen.gallery ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </MenuItem>
          <Collapse in={dropdownOpen.gallery}>
            <Box sx={{ paddingLeft: 2 }}>
              <MenuItem>Gallery Option 1</MenuItem>
              <MenuItem>Gallery Option 2</MenuItem>
            </Box>
          </Collapse>

          {/* Press dropdown in drawer */}
          <MenuItem onClick={() => handleDropdownToggle('press')}>
            Press {dropdownOpen.press ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </MenuItem>
          <Collapse in={dropdownOpen.press}>
            <Box sx={{ paddingLeft: 2 }}>
              <MenuItem>Press Option 1</MenuItem>
              <MenuItem>Press Option 2</MenuItem>
            </Box>
          </Collapse>

          <MenuItem onClick={toggleDrawer}>Contact</MenuItem>

          {/* My Views dropdown in drawer */}
          <MenuItem onClick={() => handleDropdownToggle('myViews')}>
            My Views {dropdownOpen.myViews ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </MenuItem>
          <Collapse in={dropdownOpen.myViews}>
            <Box sx={{ paddingLeft: 2 }}>
              <MenuItem>My Views Option 1</MenuItem>
              <MenuItem>My Views Option 2</MenuItem>
            </Box>
          </Collapse>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
