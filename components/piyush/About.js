import { Grid, Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import QuoteSection from './QuoteSection';

export default function About() {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: 'white',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          p: { xs: 2, sm: 4 },
          maxWidth: '100vw',
          margin: 'auto',
          overflow: 'hidden',
        }}
      >
        <Grid container spacing={2} alignItems="center">
          {/* Image Container - 50% width on larger screens */}
          <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                width: '100%',
                maxWidth: { xs: '150px', sm: '200px' }, // Control max size based on screen size
                position: 'relative',
                borderRadius: '50%',
                backgroundColor: '#f57300', // Orange background for the circle
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                padding: '10px', // Padding inside the circle for the image
                aspectRatio: '1/1', // Keeps the image circular
              }}
            >
              <Image
                src="/piyush.jpeg" // Replace with actual image path
                alt="Piyush Goyal"
                layout="fill"
                objectFit="cover"
                style={{ borderRadius: '50%' }} // Ensure the image stays circular
              />
            </Box>
          </Grid>

          {/* Content Box */}
          <Grid item xs={12} sm={7}>
            <Box sx={{ ml: { sm: '20px' }, textAlign: { xs: 'center', sm: 'left' } }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#E17000' }}>
                About
              </Typography>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Piyush Goyal
              </Typography>
              <Typography variant="body1" paragraph>
                Piyush Goyal (60) is the Union Minister of Commerce & Industry and Member of Parliament, North Mumbai Lok Sabha. He has previously served as the Leader of the House in Rajya Sabha and helmed the Ministry of Consumer Affairs and Food & Public Distribution, Textiles, Railways, Finance, Corporate Affairs, Coal, Power, New & Renewable Energy, and Mines.
              </Typography>

              {/* Horizontal Line */}
              <Box
                sx={{
                  width: '50px',
                  height: '3px',
                  backgroundColor: '#f57300',
                  margin: { xs: '10px auto 20px auto', sm: '10px 0 20px 0' }, // Centered for mobile screens
                }}
              />

              <Button
                variant="outlined"
                color="warning"
                sx={{
                  mt: 1,
                  px: 4,
                  py: 1,
                  textTransform: 'none',
                  borderColor: '#f57300',
                  color: '#f57300',
                  borderRadius: "25px",
                  padding: "20px 50px",
                  fontWeight: "bold",
                  fontSize: "18px",
                  '&:hover': {
                    borderColor: '#E17000',
                    backgroundColor: '#f57300',
                    color: "white"
                  },
                }}
              >
                View Journey
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <QuoteSection />
    </Box>
  );
}
