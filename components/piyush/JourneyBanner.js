// pages/public-life.js

import { Box, Typography } from '@mui/material';

export default function PublicLife() {
  return (
    <Box

      sx={{
        backgroundColor: '#FF6F3D',
        padding: '20px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        textAlign: 'start',
        maxWidth: '600px',
        margin: '0 auto',
        color: '#fff',
      }}
    >
      <Box sx={{display:'flex', justifyContent:'start', alignItems:'center'}}>
      <Typography variant="h1" sx={{ fontSize: '5rem', fontWeight: 'bold', margin: '0' }}>
        30
      </Typography>
      <Typography variant="h4" sx={{ margin: '0', fontSize: '2rem' }}>
        YEARS IN
      </Typography>
      <Typography variant="h4" sx={{ marginBottom: '20px', fontSize: '2rem' }}>
        PUBLIC LIFE
      </Typography>
      </Box>
      <Typography variant="h1" sx={{ fontSize: '5rem', fontWeight: 'bold', margin: '0' }}>
        30
      </Typography>
      <Typography variant="h4" sx={{ margin: '0', fontSize: '2rem' }}>
        YEARS IN
      </Typography>
      <Typography variant="h4" sx={{ marginBottom: '20px', fontSize: '2rem' }}>
        PUBLIC LIFE
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '1.1rem', maxWidth: '500px' }}>
        A JOURNEY FROM BOARD OF INDIA'S LARGEST COMMERCIAL BANKS TO UNION HOME MINISTER
        UNION COMMERCE AND INDUSTRY MINISTER & NORTH MUMBAI LOK SABHA MP
      </Typography>
    </Box>
  );
}
