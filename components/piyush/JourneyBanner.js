import { Box, Typography } from '@mui/material';

export default function PublicLife() {
  return (
    <Box sx={{padding:4, backgroundColor:"white"}}>
    <Box
      sx={{
        backgroundColor: '#FF6F3D',
        padding: '20px',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        maxWidth: '800px',
        margin: '0 auto',
        color: '#fff',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '10px', width:"100%", marginTop:'-70px' }}>
        <Typography variant="h1" sx={{ fontSize: { xs: '6rem', sm: '12rem' }, fontWeight: 'bold', margin: '0' }}>
          30
        </Typography>
        <Box sx={{marginTop:"20px"}}>
          <Typography variant="h4" sx={{ margin: '0', fontSize: { xs: '1.5rem', sm: '2rem' } }}>
            YEARS IN
          </Typography>
          <Typography variant="h4" sx={{ marginBottom: '20px', fontSize: { xs: '1.5rem', sm: '2rem' } }}>
            PUBLIC LIFE
          </Typography>
        </Box>
      </Box>
      <Typography variant="body1" sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}>
        A JOURNEY FROM BOARD OF INDIA'S LARGEST COMMERCIAL BANKS TO UNION HOME MINISTER
        UNION COMMERCE AND INDUSTRY MINISTER & NORTH MUMBAI LOK SABHA MP
      </Typography>
    </Box>
    </Box>
  );
}
