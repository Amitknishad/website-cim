"use client"
import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import Image from 'next/image';
import Achievements from '../piyush/Achievments';

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

      {/* Infrastructure Development */}
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

      {/* Role in Modernizing Railways and Highways */}
      <Grid
        container
        spacing={4}
        sx={{ padding: '1rem', maxWidth: '1200px', margin: 'auto', marginTop: '2rem', backgroundColor: '#fff7f0', borderRadius: '8px' }}
      >
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ color: '#f2682a', fontWeight: 'bold', fontSize: { xs: '1.25rem', md: '1.75rem' }, fontFamily: 'Roboto, Arial, sans-serif' }}
          >
            Role in Modernizing Railways and Highways
          </Typography>
          <Typography variant="body1" sx={{ color: '#000', fontSize: { xs: '1rem', md: '1.25rem' }, fontFamily: 'Roboto, Arial, sans-serif' }}>
            Spearheaded the modernization of India’s vast railway network. His efforts have led to the introduction of more
            efficient, faster trains like the Vande Bharat Express, and a focus on safety and technology integration. By
            modernizing railway stations and expanding electrification, his vision is to provide a world-class experience
            to passengers while reducing environmental impact.
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
              src="/visionPart3.jfif"  // replace with your image path
              alt="Modernizing Railways and Highways"
              layout="fill"
              objectFit="contain"
              priority
            />
          </Box>
        </Grid>
      </Grid>
      {/* Vision for the Indian Railways */}
      <Grid
        container
        spacing={4}
        sx={{ padding: '1rem', maxWidth: '1200px', margin: 'auto', marginTop: '2rem', backgroundColor: '#fff7f0', borderRadius: '8px' }}
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
              src="/visionPart4.jpg"  // replace with your image path
              alt="Vision for the Indian Railways"
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
            Vision for the Indian Railways
          </Typography>
          <Typography variant="body1" sx={{ color: '#000', fontSize: { xs: '1rem', md: '1.25rem' }, fontFamily: 'Roboto, Arial, sans-serif' }}>
            The Indian Railways holds a special place in Goyal’s agenda. He envisions a railway system that is not only fast
            and efficient but also environmentally sustainable. Electrifying the railways is one of the cornerstones of this
            vision. With 100% electrification planned for India’s broad-gauge rail network, Goyal is pushing for a green and
            energy-efficient transportation system.
          </Typography>
        </Grid>
      </Grid>
      {/* Energy Reforms Section */}
      <Grid
        container
        spacing={4}
        sx={{ padding: '1rem', maxWidth: '1200px', margin: 'auto', marginTop: '2rem', backgroundColor: '#fff7f0', borderRadius: '8px' }}
      >
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ color: '#f2682a', fontWeight: 'bold', fontSize: { xs: '1.25rem', md: '1.75rem' }, fontFamily: 'Roboto, Arial, sans-serif' }}
          >
            Energy Reforms: Powering India’s Growth
          </Typography>
          <Typography variant="body1" sx={{ color: '#000', fontSize: { xs: '1rem', md: '1.25rem' }, fontFamily: 'Roboto, Arial, sans-serif' }}>
            As the former Minister of Power, Goyal has left a lasting legacy in India’s energy sector. His vision revolves
            around renewable energy sources, particularly solar and wind energy, which have seen unprecedented growth
            under his leadership. India’s solar energy capacity has skyrocketed, positioning the country as one of the
            global leaders in renewable energy.
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
              src="/visionPart5.jpg"  // replace with your image path
              alt="Energy Reforms"
              layout="fill"
              objectFit="contain"
              priority
            />
          </Box>
        </Grid>
      </Grid>
      {/* Sustainable Economic Growth Section */}
      <Grid
        container
        spacing={4}
        sx={{ padding: '1rem', maxWidth: '1200px', margin: 'auto', marginTop: '2rem', backgroundColor: '#fff7f0', borderRadius: '8px' }}
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
              src="/vision4.jpg"  // replace with your image path
              alt="Sustainable Economic Growth"
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
            Sustainable Economic Growth
          </Typography>
          <Typography variant="body1" sx={{ color: '#000', fontSize: { xs: '1rem', md: '1.25rem' }, fontFamily: 'Roboto, Arial, sans-serif' }}>
            Economic growth, according to Goyal, must be sustainable. This means industrial growth should not come at the cost of environmental degradation. Through initiatives like "Make in India" and "Vocal for Local," Goyal promotes the development of industries that not only enhance India’s global competitiveness but also adhere to eco-friendly practices.
          </Typography>
        </Grid>
      </Grid>
      {/* Digital India: A Technologically Advanced Nation Section */}
      <Grid
        container
        spacing={4}
        sx={{ padding: '1rem', maxWidth: '1200px', margin: 'auto', marginTop: '2rem', backgroundColor: '#fff7f0', borderRadius: '8px' }}
      >
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{ color: '#f2682a', fontWeight: 'bold', fontSize: { xs: '1.25rem', md: '1.75rem' }, fontFamily: 'Roboto, Arial, sans-serif' }}
          >
            Digital India: A Technologically Advanced Nation
          </Typography>
          <Typography variant="body1" sx={{ color: '#000', fontSize: { xs: '1rem', md: '1.25rem' }, fontFamily: 'Roboto, Arial, sans-serif' }}>
            India’s future lies in digital empowerment. Expanding the nation’s digital infrastructure and making services accessible to the masses are key elements of his strategy. The push toward a cashless economy and the rapid rise of digital payment systems have been significant milestones.
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
              src="/visionPart6.jpg"  // replace with your image path
              alt="Digital India: A Technologically Advanced Nation"
              layout="fill"
              objectFit="contain"
              priority
            />
          </Box>
        </Grid>
      </Grid>
        
        <Achievements />

    </Box>
  );
};

export default VisionDetails;
