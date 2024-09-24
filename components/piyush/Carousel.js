"use client";
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { Box, Typography, useMediaQuery } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd'; // Example icon
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// const images = [
//   {
//     label: 'Image 1',
//     imgPath: '/piyush1.jpeg',
//   },
//   {
//     label: 'Image 2',
//     imgPath: '/piyush2.jpeg',
//   },
//   {
//     label: 'Image 3',
//     imgPath: '/piyush3.jpeg',
//   },
//   {
//     label: 'Image 4',
//     imgPath: '/piyush4.jpeg',
//   },
//   {
//     label: 'Image 5',
//     imgPath: '/piyush5.jpeg',
//   },
// ];

const images = [
  {
    label: 'Image 1',
    imgPath: '/clickableBanner.jpeg',
  },
  {
    label: 'Image 2',
    imgPath: '/piyush2.jpeg',
  },
  {
    label: 'Image 3',
    imgPath: '/piyush3.jpeg',
  },
  {
    label: 'Image 4',
    imgPath: '/piyush4.jpeg',
  },
  {
    label: 'Image 5',
    imgPath: '/piyush5.jpeg',
  },
];

// Cards Data
const cardData = [
  {
    title: 'Join as Member',
    description: 'Become a member and help shape a better future together.',
    icon: <PersonAddIcon sx={{ fontSize: '50px', color: '#ff6f00' }} />, // Styled Icon
    textColor: '#ff6f00', // Orange color
  },
  {
    title: 'Join as Volunteer',
    description: 'Join as a volunteer to create positive change in society.',
    icon: <VolunteerActivismIcon sx={{ fontSize: '50px', color: '#ff6f00' }} />,
    textColor: '#ff6f00',
  },
  {
    title: 'Share Your Idea',
    description: 'Share your idea and contribute to meaningful change in the community.',
    icon: <LightbulbIcon sx={{ fontSize: '50px', color: '#ff6f00' }} />,
    textColor: '#ff6f00',
  },
];


function CarouselComponent() {
  // Slider settings for react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
    appendDots: dots => (
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: 'gray',
        }}
      />
    ),
  };



  // Detect mobile screen size (example: max-width 600px)
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ width: '100vw', position: 'relative', backgroundColor:"white" }}>
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <Box
              key={index}
              sx={{
                width: '100%',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  width: '100%', // Full width for the image container
                  position: 'relative',
                  paddingTop: '56.25%', // This maintains a 16:9 aspect ratio
                }}
              >
                <Image
                  src={image.imgPath}
                  alt={image.label}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  priority
                />
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
  {/* Cards Section with Overlap */}
  <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          position: 'relative',
          marginTop: '-30px', // Overlap effect
          zIndex: 2,
          flexDirection: isMobile ? 'column' : 'row', // Stack vertically on mobile
          padding: isMobile ? '20px 0' : '0 30px',
        }}
      >
        {cardData.map((card, index) => (
          <Box
            key={index}
            sx={{
              width: isMobile ? '80%' : '30%', // Full width on mobile
              minHeight: '250px', // Ensure cards have the same height
              padding: '20px',
              textAlign: 'center',
              borderRadius: '10px',
              boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
              backgroundColor: '#fff',
              margin: isMobile ? '10px 0' : '0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              '&:hover': {
                boxShadow: '0px 6px 15px rgba(0,0,0,0.15)',
              },
            }}
          >
            {/* Icon */}
            <Box
              sx={{
                width: '80px',
                height: '80px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: card.backgroundColor,
                borderRadius: '50%',
                marginBottom: '10px',
              }}
            >
            {card.icon}
            </Box>
            {/* Title */}
            <Typography
              variant="h6"
              sx={{
                marginTop: '10px',
                color: card.textColor, // Set text color based on data
                fontWeight: 'bold',
              }}
            >
              {card.title}
            </Typography>
            {/* Description */}
            <Typography
              sx={{
                color: '#f27c21', // Description text color
                marginTop: '10px',
              }}
            >
              {card.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default CarouselComponent;
