import { Box, Typography, Grid, Paper } from '@mui/material';
import Image from 'next/image';

export default function JourneyBanner() {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5', // Light background for contrast
      }}
    >
      {/* Paper Component with Complex Background */}
      <Paper
        elevation={3}
        sx={{
          width: '90%',
          maxWidth: '1200px',
          padding: 4,
          position: 'relative',
          zIndex: 1,
          bgcolor: '#fff',
          // Correct background with specific shapes and colors matching your image
          background: `
            radial-gradient(circle at top left, #f5e0b2 40%, transparent 40%),
            radial-gradient(circle at top right, #ffcc80 40%, transparent 40%),
            radial-gradient(circle at bottom left, #f5f5f5 40%, transparent 40%),
            radial-gradient(circle at bottom right, #f57c00 40%, transparent 40%)
          `,
          borderBottomRightRadius: '100px', // Rounded bottom-right corner like in the image
          borderTopLeftRadius: '100px',    // Rounded top-left corner
          overflow: 'hidden', // Ensures clean edges for gradient
        }}
      >
        <Grid container spacing={2}>
          {/* Left Section */}
          <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
            <Box
              sx={{ fontSize: '120px', fontWeight: 'bold', color: '#f57c00' }}
            >
              30
            </Box>
            <Box sx={{ position: 'absolute', top: '50px', left: '50px' }}>
              <Image
                src="/train.png" // Add your image paths accordingly
                alt="Train and industry"
                width={300}
                height={300}
              />
            </Box>
            <Typography
              variant="h5"
              sx={{ mt: 3, color: '#f57c00', fontWeight: 'bold' }}
            >
              Years in
            </Typography>
            <Typography
              variant="h3"
              sx={{ color: '#f57c00', fontWeight: 'bold' }}
            >
              Union Commerce and Industry
            </Typography>
          </Grid>

          {/* Right Section */}
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
}
