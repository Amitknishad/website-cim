import * as React from 'react';
import { Card, CardMedia, Typography, useMediaQuery, IconButton } from '@mui/material';
import Slider from 'react-slick';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

// Import slick carousel CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Image items
const items = [
  { image: '/carousel1.jpg', title: 'Event 1' },
  { image: '/carousel2.jpg', title: 'Event 2' },
  { image: '/carousel3.jpg', title: 'Event 3' },
  { image: '/carousel4.jpg', title: 'Event 4' },
  { image: '/carousel5.jpg', title: 'Event 5' },
];

// Custom next button component
function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <IconButton
        className={className}
        style={{
          ...style,
          display: 'block',
          right: '10px',
          zIndex: 1,
          top: '50%',
          transform: 'translate(0, -50%)',
          backgroundColor: '#ff5722',
          color: 'white',
          padding: '10px',
          borderRadius: '50%',
        }}
        onClick={onClick}
      >
        <ArrowForwardIos />
      </IconButton>
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <IconButton
        className={className}
        style={{
          ...style,
          display: 'block',
          left: '10px',
          zIndex: 1,
          top: '50%',
          transform: 'translate(0, -50%)',
          backgroundColor: '#ff5722',
          color: 'white',
          padding: '10px',
          borderRadius: '50%',
        }}
        onClick={onClick}
      >
        <ArrowBackIos />
      </IconButton>
    );
  }
  

export default function QuickView() {
  const isMobile = useMediaQuery('(max-width: 600px)'); // Mobile responsive check

  // Slider settings for the carousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Ensure arrows are enabled
    nextArrow: <NextArrow />, // Custom next button
    prevArrow: <PrevArrow />, // Custom prev button
    centerMode: true,
    centerPadding: isMobile ? '20px' : '40px',
  };
  

  return (
    <div style={{ padding: '20px', background: 'white', overflow: 'hidden' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Quick View
      </Typography>

      {/* Slider for images */}
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} style={{ padding: isMobile ? '10px' : '15px', boxSizing: 'border-box' }}>
            <Card
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                maxWidth: isMobile ? '90%' : '90%', // Keep the width consistent
                margin: '0 auto', // Center the cards
              }}
            >
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                style={{
                  height: isMobile ? '220px' : '300px', // Adjust height dynamically for mobile
                  objectFit: 'cover',
                  borderRadius: '12px', // Rounded corners for images
                }}
              />
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}
