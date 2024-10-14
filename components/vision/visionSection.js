"use client"
import React from 'react';
import { Grid, Typography, Box, IconButton } from '@mui/material';
import Image from 'next/image';
import Achievements from '../piyush/Achievments';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from 'react-slick';

const VisionDetails = () => {

  const imageData = [
    { src: "/industry.jpg", alt: "Thermal" },
    { src: "/wind.jpg", alt: "Industry" },
    { src: "/solar.jpg", alt: "Solar Energy" },
    { src: "/port.jpg", alt: "Container Shipping" },
    { src: "/railways.jpg", alt: "Train" },
    { src: "/infrastructure.jpg", alt: "Buildings" }
  ];

  const settings = {
    dots: false,  // Set to true if you want dots under the carousel
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Number of items to show by default (for larger screens)
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200, // Large screen size
        settings: {
          slidesToShow: 4, // Show 4 images
        },
      },
      {
        breakpoint: 900, // Medium screen size
        settings: {
          slidesToShow: 3, // Show 3 images
        },
      },
      {
        breakpoint: 600, // Small screen size
        settings: {
          slidesToShow: 2, // Show 2 images
        },
      },
      {
        breakpoint: 480, // Extra small screen size
        settings: {
          slidesToShow: 1, // Show 1 image
        },
      },
    ],
  };


  return (
    <Box sx={{ backgroundColor: "white" }}>

      <Box
        sx={{
          position: 'relative',  // Ensures content inside can be positioned absolutely
          paddingBottom: '2rem',
        }}
      >
        {/* Centered title on top of the image with small orange background */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',  // Centers the text
            textAlign: 'center',
            zIndex: 2,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: '#fff',
              fontWeight: 'bold',
              padding: { xs: '0.2rem 0.5rem', sm: '0.5rem 1rem' }, // Padding adjusts based on screen size
              borderRadius: '4px',
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem' },  // Responsive font size
              lineHeight: 1.2,
            }}
          >
            VISION<br />AND ACHIEVEMENTS
          </Typography>

          {/* Small orange background box just below the text */}
          <Box
            sx={{
              width: { xs: '100%', sm: '100%', md: '100%' },  // Responsive width based on screen size
              height: { xs: '15px', sm: '20px', md: '34px' }, // Responsive height
              backgroundColor: '#ff7043',
              marginTop: { xs: '-15px', sm: '-20px', md: '-34px' },  // Negative margin to overlap the text
              borderRadius: '2px',
            }}
          />
        </Box>

        {/* Slick Slider */}
        <Slider {...settings}>
          {imageData.map((image, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: '150px', sm: '200px', md: '250px', lg: '300px' },
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </Box>
          ))}
        </Slider>
      </Box>

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
        sx={{ padding: '1rem', maxWidth: '1200px', margin: 'auto', marginTop: '8rem', backgroundColor: '#fff7f0', borderRadius: '8px' }}
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
              objectPosition='top'
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
              src="/railways.jpg"  // replace with your image path
              alt="Vision for the Indian Railways"
              layout="fill"
              objectFit="contain"
              objectPosition='top'
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
              objectPosition='top'
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
              objectPosition='top'
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
              overflow: 'hidden',
            }}
          >
            <Image
              src="/visionPart6.jpg"  // replace with your image path
              alt="Digital India: A Technologically Advanced Nation"
              layout="fill"
              objectFit="contain"
              objectPosition='top'
              priority
            />
          </Box>
        </Grid>
      </Grid>

      {/* Impactful steps taken under Minister Piyush Goyal’s tenure Section */}
      <Grid
        container
        spacing={4}
        sx={{ padding: '1rem', backgroundColor: '#ff7043', borderRadius: '8px', maxWidth: '100%', margin: 'auto', my: '6rem' }}
      >
        {/* Title */}
        <Grid item xs={12} md={12} mb={4}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 'bold', fontSize: { xs: '1.5rem', md: '2rem' }, fontFamily: 'Roboto, Arial, sans-serif', textAlign: "center", color: "#fff" }}
          >
            Impactful steps taken under<br /> Minister Piyush Goyal’s tenure
          </Typography>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              width: '100%',
              height: { xs: '300px', md: '400px' },
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '8px',
            }}
          >
            <Image
              src="/innovation.jpg"  // Replace with your image path
              alt="Impactful steps under Minister Piyush Goyal's tenure"
              layout="fill"
              objectFit="contain"
                // Ensures the full image is shown
              style={{
                objectPosition: 'top',  // Default to center
              }}
              sx={{
                objectPosition: {
                  xs: 'center', // Centered on small screens
                  sm: 'center',
                  md: 'right'  // Aligned right on medium and larger screens
                }
              }}
              priority
            />
          </Box>
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} md={6} sx={{ color: '#fff' }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: '#fff', fontWeight: 'bold', fontFamily: 'Roboto, Arial, sans-serif' }}
          >
            भारत में INNOVATION और STARTUP<br /> की क्रांति
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, fontFamily: 'Roboto, Arial, sans-serif' }}
          >
            Through Startup India, tapped the true potential of our YUVA, resulting in the no of startups increasing from just a few hundred in 2014 to now &gt; 1.4 lakh, making India the 3rd largest Startup ecosystem in the world.
            <br />
            India’s innovative talent being encouraged resulted in the number of patents increasing from just 4,227 in 2013-14 to now over record 1 lakh+ in 2023-24.
          </Typography>
        </Grid>

        {/* Carousel Buttons */}
        <Grid item xs={12} sx={{ textAlign: 'center', marginTop: '1rem' }}>
          <IconButton sx={{ backgroundColor: '#fff', color: '#ff7043', marginRight: '1rem', ':hover': { color: "#fff" } }}>
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton sx={{ backgroundColor: '#fff', color: '#ff7043', ':hover': { color: "#fff" } }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Grid>
      </Grid>




      <Achievements />

    </Box>
  );
};

export default VisionDetails;
