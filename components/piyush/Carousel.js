"use client";
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { Box, Typography, useMediaQuery } from '@mui/material';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  {
    label: 'Image 1',
    imgPath: '/banner1.jpg',
  },
  {
    label: 'Image 2',
    imgPath: '/banner2.jpg',
  },
  {
    label: 'Image 3',
    imgPath: '/banner3.jpg',
  },
  {
    label: 'Image 4',
    imgPath: '/banner4.jpg',
  },
];


function CarouselComponent() {
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
          bottom: '10px', // Keep dots close to the bottom
          right: '10px',  // Move dots to the right corner
          display: 'flex',
          justifyContent: 'flex-end', // Align dots to the right
          alignItems: 'center',
          width: 'auto',
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
          backgroundColor: i === settings.currentSlide ? '#ff6f00' : 'gray', // Change active dot color
        }}
      />
    ),
  };

  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ width: '100vw', position: 'relative', backgroundColor: 'white' }}>
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
                  width: '100%',
                  position: 'relative',
                  paddingTop: '40%', // Adjust aspect ratio to remove extra padding
                }}
              >
                <Image
                  src={image.imgPath}
                  alt={image.label}
                  layout="fill"
                  objectFit="cover" // Change object fit to fill the space
                  quality={100}
                  priority
                />
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>      
    </Box>
  );
}

export default CarouselComponent;
