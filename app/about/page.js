import { Grid, Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import JourneyBanner from '@/components/piyush/JourneyBanner'
import Footer from '@/components/piyush/FooterSection'
import Header from '@/components/piyush/Header';
import Navbar from '@/components/piyush/Navbar';


export default function About() {
  return (
    <Box sx={{ backgroundColor: 'white' }}>
      <Header />
      <Navbar/>
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

          {/* Content Box */}
          <Grid item xs={12} sm={7}>
            <Box sx={{ ml: { sm: '22px' }, textAlign: { xs: 'center', sm: 'left' } }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#E17000' }}>
                SHRI PIYUSH GOYAL
              </Typography>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                BIOGRAPHY
              </Typography>
              <Typography variant="body1" paragraph>
                Piyush Goyal is a senior Indian politician currently serving as the Union Minister of Commerce & Industry and the Member of Parliament for North Mumbai Lok Sabha. Over his illustrious career, he has held several key portfolios in the Government of India, including the Ministry of Railways, Finance, Corporate Affairs, Consumer Affairs, Food & Public Distribution, Textiles, Coal, Power, New & Renewable Energy, and Mines. He has also served as the Leader of the House in Rajya Sabha.
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

          {/* Image Container */}
          <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                background: 'linear-gradient(to right, white 30%, #f27c21 20%)',
                width: '100%',
                height: '100%',
                borderRadius: '20px',  // Border radius added here
                overflow: 'hidden'      // Ensure the radius is applied properly
              }}>
              <Box
                sx={{
                  width: '100%',
                  maxWidth: { xs: '150px', sm: '200px' }, // Control max size based on screen size
                  height: '100%',
                  position: 'relative',
                  borderRadius: '50%',
                  backgroundColor: '#f57300', // Orange background for the circle
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'hidden',
                  padding: '10px', // Padding inside the circle for the image
                  aspectRatio: '1/1', // Keeps the image circular
                  marginLeft: '60px',
                }}
              >
                <Image
                  src="/piyushAbout.jpg" // Replace with actual image path
                  alt="Piyush Goyal"
                  layout="fill"
                  objectFit="cover"
                  style={{ borderRadius: '50%' }} // Ensure the image stays circular
                />
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Box>

      <JourneyBanner />
      <Footer />

    </Box>
  );
}
