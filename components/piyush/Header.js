"use client";
// components/Header.js
import React from 'react';
import { Grid, Typography, Button, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Image from 'next/image';
import XIcon from '@mui/icons-material/X';

const Header = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      sx={{ px: 12, py: 2,  backgroundColor: 'white' }}  // Set background color to white
    >
      {/* Left Side: Image and Title */}
      <Grid item xs={12} md={6} container alignItems="center" sx={{ display: 'flex' }}>
        {/* Image on the left */}
        <Image src="/piyush.jpeg" alt="Piyush Goyal" width={80} height={80} style={{ borderRadius: '50%' }} />
        <Typography variant="h6" sx={{ marginLeft: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold',fontSize:'25px', color: '#ff7e54' }}> {/* Orange Color for Name */}
            Piyush Goyal
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ fontSize: '0.9rem', color: '#ff7e54' }}> {/* Muted subtitle */}
            Union Commerce and Industry Minister & North Mumbai Lok Sabha MP
          </Typography>
        </Typography>
      </Grid>

      {/* Right Side: Social Media Icons and Button */}
      <Grid item xs={12} md={6} container justifyContent="flex-end" alignItems="center">
        <IconButton color="inherit">
          <InstagramIcon sx={{ color: '#ff7e54', fontSize: 35 }} />  {/* Increased Icon Size */}
        </IconButton>
        <IconButton color="inherit">
          <FacebookIcon sx={{ color: '#ff7e54', fontSize: 35 }} />   {/* Increased Icon Size */}
        </IconButton>
        <IconButton color="inherit">
          <XIcon sx={{ color: '#ff7e54', fontSize: 35 }} />    {/* Increased Icon Size */}
        </IconButton>
        <IconButton color="inherit">
          <YouTubeIcon sx={{ color: '#ff7e54', fontSize: 35 }} />    {/* Increased Icon Size */}
        </IconButton>
        <Button
          variant="outlined"
          sx={{
            marginLeft: 2,
            borderColor: '#E17000',  // Orange border
            color: '#E17000',        // Orange text
            borderRadius: "20px",
            padding:"7px",
            '&:hover': {
              borderColor: '#E17000',
              backgroundColor: 'rgba(225, 112, 0, 0.1)', // Light orange hover
            },
          }}
        >
          Join as Volunteer
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
