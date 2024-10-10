import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import Image from 'next/image';

const VisionDetails = () => {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      {/* First Section */}
      <Grid 
        container 
        spacing={4} 
        sx={{ padding: '1rem', maxWidth: '1200px', margin: 'auto' }}
      >
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom 
            sx={{ color: '#f2682a', fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' }, fontFamily: 'Roboto, Arial, sans-serif' }}
          >
            Shiri Piyush Goyal’s Vision for a New India
          </Typography>
          <Typography variant="body1" sx={{ color: '#000', fontSize: { xs: '1rem', md: '1.25rem' }, fontFamily: 'Roboto, Arial, sans-serif' }}>
            At the heart of Shiri Piyush Goyal’s approach is the idea of a "New India." This concept envisions 
            a strong economy powered by robust infrastructure, a self-reliant manufacturing sector, and a 
            digital ecosystem that connects every corner of the country. His vision is rooted in creating a 
            sustainable, inclusive, and future-ready nation.
            <br />
            Goyal’s vision for India is closely aligned with national initiatives such as "Make in India," 
            "Digital India," and "Vocal for Local." His emphasis on innovation, sustainability, and 
            modernization aims to make India a global powerhouse in the coming decades.
          </Typography>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <Box 
            sx={{ 
              width: '100%', 
              height: { xs: '300px', md: '400px' }, 
              position: 'relative', 
              overflow: 'hidden' 
            }}
          >
            <Image
              src="/atalVision.jpg"  // replace with your image path
              alt="Shiri Piyush Goyal"
              layout="fill"
              objectFit="contain"
              priority
            />
          </Box>
        </Grid>
      </Grid>

      {/* Second Section (New Content) */}
      <Grid 
        container 
        spacing={4} 
        sx={{ padding: '1rem', maxWidth: '1200px', margin: 'auto', marginTop: '2rem', backgroundColor: '#f7f7f7', borderRadius: '8px' }}
      >
        {/* Image Section */}
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <Box 
            sx={{ 
              width: '100%', 
              height: { xs: '300px', md: '400px' }, 
              position: 'relative', 
              overflow: 'hidden' 
            }}
          >
            <Image
              src="/vision2.jpg"  // replace with your image path
              alt="Infrastructure Development"
              layout="fill"
              objectFit="contain"
              priority
            />
          </Box>
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography 
            variant="h5" 
            component="h2" 
            gutterBottom 
            sx={{ color: '#f2682a', fontWeight: 'bold', fontSize: { xs: '1.25rem', md: '1.75rem' }, fontFamily: 'Roboto, Arial, sans-serif' }}
          >
            Infrastructure Development: Building a Strong Foundation for a New India
          </Typography>
          <Typography variant="body1" sx={{ color: '#000', fontSize: { xs: '1rem', md: '1.25rem' }, fontFamily: 'Roboto, Arial, sans-serif' }}>
            A critical aspect of Goyal's vision is the transformation of India’s infrastructure. Recognizing that infrastructure 
            is the backbone of any thriving economy, he has made significant strides in modernizing the country’s transport 
            systems, especially Indian Railways, and enhancing connectivity through highways and ports.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VisionDetails;
