import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import Slider from 'react-slick';

// Header Component (reuse your header code here)
const OrangeLine = styled('div')(({ theme }) => ({
    borderTop: '3px solid #ff7e54',
    width: '50%',
    display: 'inline-block',
    verticalAlign: 'middle',
}));

const Header = ({ heading }) => (
    <Box textAlign="start" mb={1} px={4} pt={4} display="flex" alignItems="center">
        <Typography
            variant="h4"
            component="span"
            sx={{
                fontWeight: 'bold',
                marginRight: '10px',
                color: '#ff7e54',
                fontSize: {
                    xs: '24px', // Small screens (mobile)
                    sm: '30px', // Medium screens (tablets)
                    md: '35px', // Large screens (laptops)
                    lg: '40px', // Extra-large screens (desktops)
                },
            }}
        >
            {heading}
        </Typography>

        {/* Orange line */}
        <OrangeLine />

        {/* Circle at the end */}
        <Box
            sx={{
                width: '10px',
                height: '10px',
                backgroundColor: '#ff7e54',
                borderRadius: '50%',
            }}
        />
    </Box>
);

// Vision Section Component
const VisionSection = () => {
    const items = [
        {
            title: 'Transforming India into a Global Powerhouse',
            image: '/vision1.jpg', // Replace with actual image path
        },
        {
            title: 'Strengthening Infrastructure and Logistics',
            image: '/vision2.jpg',
        },
        {
            title: 'Ease of Doing Business',
            image: '/vision3.jpg',
        },
        {
            title: 'Inclusive Economic Growth',
            image: '/vision4.jpg',
        },
    ];

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // Tablets and smaller screens
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600, // Mobile
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Box p={4} sx={{ overflow: 'hidden', backgroundColor: 'white' }}> {/* Prevents unwanted scrolling */}
            {/* Vision Title */}
            <Header heading="Vision" />

            <Typography
                variant="body1"
                sx={{
                    mb: 4,
                    color: '#ff7e54', // Orange text as shown in the image
                    fontWeight: 'bold',
                    textAlign: 'left', // Left align the paragraph
                    ml: { xs: 2, md: 4 }, // Add slight margin-left to push it off-center
                    fontSize: {
                        xs: '16px',  // Small screens
                        sm: '18px',  // Medium screens
                        md: '20px',  // Large screens
                    },
                }}
            >
                Piyush Goyal's vision as a senior leader and minister has always centered around sustainable growth,
                economic development, infrastructure modernization, and digital empowerment. His focus areas include:
            </Typography>

            {/* React Slick Slider for Vision Areas */}
            <Slider {...sliderSettings} style={{ padding: '0', margin: '0' }}>
                {items.map((item, index) => (
                    <Box key={index} sx={{ padding: '0', margin: '0' }}> {/* Removed px (padding) to eliminate space between items */}
                        <Card sx={{ position: 'relative', boxShadow: 'none', borderRadius: 0, margin: '0' }}>
                            <CardMedia
                                component="img"
                                image={item.image}
                                alt={item.title}
                                sx={{
                                    height: {
                                        xs: '450px', // Increased height for small screens
                                        sm: '500px', // Medium screens
                                        md: '550px', // Large screens
                                        lg: '80vh',  // Height relative to viewport height
                                    },
                                    width: '100%', // Full width for each image to remove space
                                    filter: 'brightness(0.7)', // Darkens the image for better text visibility
                                    margin: '0', // No margin to remove spacing
                                    padding: '0', // No padding to remove spacing
                                }}
                            />
                            <CardContent
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    color: 'white',
                                    textAlign: 'center',
                                }}
                            >
                                <Typography variant="h6">{item.title}</Typography>
                                <Button
                                    variant="contained"
                                    sx={{
                                        mt: 2,
                                        backgroundColor: 'white',
                                        color: '#ff7e54', // Orange text on white background
                                        '&:hover': {
                                            backgroundColor: '#f27c21',
                                            color: 'white', // Hover effect
                                        },
                                    }}
                                >
                                    Read More
                                </Button>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

// Main Page Component
const VisionPage = () => (
    <Box>
        <VisionSection />
    </Box>
);

export default VisionPage;
