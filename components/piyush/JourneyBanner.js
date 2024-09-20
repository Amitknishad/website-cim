// components/UnionCommerceBanner.tsx
import { Box, Typography, Grid, Paper } from '@mui/material';
import Image from 'next/image';

const JourneyBanner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'relative',
        backgroundColor: 'white', // Light background,
        width:"100vw"
      }}
    >
      {/* Background Layer 1 */}
      <Box
        sx={{
          position: 'absolute',
          width: '85%',
          height: '85%',
          borderRadius: '80px 0 0 0',
          backgroundColor: '#fdeacc', // Lightest orange shade
          bottom: '0%',
          right: '0%',
        }}
      />

      {/* Background Layer 2 */}
      <Box
        sx={{
          position: 'absolute',
          width: '70%',
          height: '70%',
          borderRadius: '80px 0 0 0',
          backgroundColor: '#fcd1a0', // Medium orange shade
          bottom: '0%',
          right: '0%',
        }}
      />

      {/* Background Layer 3 */}
      <Box
        sx={{
          position: 'absolute',
          width: '55%',
          height: '55%',
          borderRadius: '80px 0 0 0',
          backgroundColor: '#fd9432', // Darkest orange shade
          bottom: '0%',
          right: '0%',
        }}
      />

      {/* Paper with Content */}
      <Paper
        elevation={3}
        sx={{
          width: '85%',
          maxWidth: '1200px',
          padding: 4,
          position: 'relative',
          zIndex: 1,
          bgcolor: 'transparent', // Paper has no background to show layered background behind
          overflow: 'hidden', // Ensures clean edges
        }}
      >
        <Grid container spacing={2}>
          {/* Left Section with Number "30" and Image */}
          <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
            <Box
              sx={{ fontSize: '120px', fontWeight: 'bold', color: '#fd9432' }}
            >
              30
            </Box>
            <Box sx={{ position: 'absolute', top: '50px', left: '50px' }}>
              <Image
                src="/piyush.jpeg" // Add your image paths accordingly
                alt="Train and industry"
                width={300}
                height={300}
              />
            </Box>
            <Typography
              variant="h5"
              sx={{ mt: 3, color: '#fd9432', fontWeight: 'bold' }}
            >
              Years in
            </Typography>
            <Typography
              variant="h3"
              sx={{ color: '#fd9432', fontWeight: 'bold' }}
            >
              Union Commerce and Industry
            </Typography>
          </Grid>

          {/* Right Section with Person Image */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <Image
              src="/piyush.jpeg" // Replace with the image URL
              alt="Person Image"
              width={200}
              height={300}
              style={{ borderRadius: '50%' }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default JourneyBanner;
