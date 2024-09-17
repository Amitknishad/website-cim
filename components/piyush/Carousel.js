"use client";
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../../styles/carousel.module.css'; // Import custom CSS module

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
    arrows: true, // Enable Next and Prev arrows
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // 3 seconds per slide
    pauseOnHover: true,
    swipeToSlide: true, // Allow swiping between slides
    appendDots: dots => (
      <div
        style={{
          position: 'absolute',
          bottom: '20px', // Position 20px from the bottom
          right: '20px',  // Position 20px from the right
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

  return (
    <Box sx={{ width: '100%', height: '100vh', position: 'relative', marginBottom: "40px" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index} sx={{ position: 'relative', height: '100vh' }}>
            <Image
              src={image.imgPath}
              alt={image.label}
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default CarouselComponent;
