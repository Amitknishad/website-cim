"use client";
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { Box, useMediaQuery } from '@mui/material';
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
    imgPath: '/carousel1.jpg',
  },
  {
    label: 'Image 2',
    imgPath: '/carousel2.jpg',
  },
  {
    label: 'Image 3',
    imgPath: '/carousel3.jpg',
  },
  {
    label: 'Image 4',
    imgPath: '/carousel4.jpg',
  },
  {
    label: 'Image 5',
    imgPath: '/carousel5.jpg',
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
    <Box sx={{ width: '100vw', position: 'relative'}}>
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
  );
}

export default CarouselComponent;
