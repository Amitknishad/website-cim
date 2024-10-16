"use client"
import { useState } from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import JourneyBanner from '@/components/piyush/JourneyBanner';
import Footer from '@/components/piyush/FooterSection';
import Header from '@/components/piyush/Header';
import Navbar from '@/components/piyush/Navbar';

export default function About() {
  // State to track if content is expanded
  const [expanded, setExpanded] = useState(false);

  // Toggle function to expand/collapse the content
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ backgroundColor: 'white' }}>
      <Header />
      <Navbar />
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
              {!expanded ? (
                <>
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
                      color: '#ff7e54',
                      borderRadius: "35px",
                      padding: "13px 45px",
                      fontWeight: "bold",
                      fontSize: "16px",
                      '&:hover': {
                        borderColor: '#E17000',
                        backgroundColor: '#ff7e54',
                        color: "white"
                      },
                    }}
                    onClick={handleToggle} // Toggle function
                  >
                    {expanded ? 'READ LESS' : 'READ MORE'}
                  </Button>
                </>
              ) : null}
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
              }}
            >
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

        {/* Expanded Content */}
        {expanded && (
          <Box sx={{ mt: 4 }}>
            <Grid container spacing={2}>
              {/* First Column */}
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" fontWeight="bold">
                  Key Milestones During His Tenure
                </Typography>
                <Typography variant="body2" paragraph>
                  Under his leadership, India achieved record-breaking exports of about $778 billion in 2023-24. He played a pivotal role in negotiating the Free Trade Agreement (FTA) with the UAE, the fastest-negotiated FTA globally, and the India-Australia Economic Cooperation and Trade Agreement (ECTA), highlighting his trade and negotiation skills. In over a decade, he is also steering the India-EFTA Trade and Economic Partnership Agreement (TEPA), with the ambition to increase the investment of $100 billion in various industries.
                </Typography>
                <Typography variant="body2" paragraph>
                  As a proponent of industrial growth, Goyal initiated 12 Industrial Smart Cities across 10 states with special economic zones, technology parks, and research hubs. These initiatives paved the way for better infrastructure and modernization of India's industrial ecosystem.
                </Typography>
              </Grid>

              {/* Second Column */}
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" fontWeight="bold">
                  Political and Social Journey
                </Typography>
                <Typography variant="body2" paragraph>
                  Starting his political journey as a BJP Karyakarta four decades ago in Mumbai, Piyush Goyal learned the values of nationalism and public service. He has contributed to the BJP’s growth and leadership through various roles. He was also mentored by stalwarts like Atal Bihari Vajpayee.
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  Personal Life
                </Typography>
                <Typography variant="body2" paragraph>
                  Piyush Goyal has an exceptional academic background with degrees in Commerce, Law, and Chartered Accountancy, and has played a significant role in the corporate sector before his political journey. He is also actively involved in numerous philanthropic activities through NGOs.
                </Typography>
              </Grid>
            </Grid>

            {/* Horizontal Line and READ LESS Button */}
            <Box sx={{ textAlign: 'right', mt: 4 }}>
              <Box
                sx={{
                  width: '50px',
                  height: '3px',
                  backgroundColor: '#f57300',
                  margin: '0 0 20px auto',
                }}
              />

              <Button
                variant="outlined"
                color="warning"
                sx={{
                  px: 4,
                  py: 1,
                  textTransform: 'none',
                  borderColor: '#f57300',
                  color: '#ff7e54',
                  borderRadius: "35px",
                  padding: "13px 45px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  '&:hover': {
                    borderColor: '#E17000',
                    backgroundColor: '#ff7e54',
                    color: "white"
                  },
                }}
                onClick={handleToggle}
              >
                {expanded ? 'READ LESS' : 'READ MORE'}
              </Button>
            </Box>
          </Box>
        )}
      </Box>
      <JourneyBanner />
      <Footer />
    </Box>
  );
}
