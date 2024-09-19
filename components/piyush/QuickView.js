"use client"
import React, { useState } from 'react';
import { Box, Card, Typography, useMediaQuery, IconButton } from '@mui/material';
import { PlayCircleOutline, PauseCircleOutline } from '@mui/icons-material';
import Slider from 'react-slick';
import { styled } from '@mui/system';

// Import slick carousel CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Video items
const items = [
    { video: '/quickpiyush.mp4', title: 'Event 1' },
    { video: '/quickpiyush.mp4', title: 'Event 2' },
    { video: '/quickpiyush.mp4', title: 'Event 3' },
    { video: '/quickpiyush.mp4', title: 'Event 4' },
    { video: '/quickpiyush.mp4', title: 'Event 5' },
];

// Styled Box for the orange underline
const OrangeLine = styled('div')(({ theme }) => ({
    borderTop: '3px solid orange',
    width: '50%',
    display: 'inline-block',
    verticalAlign: 'middle',
}));

export default function QuickView() {
    const isMobile = useMediaQuery('(max-width: 600px)'); // Mobile responsive check

    // Slider settings for the carousel
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 2 : 5, // Shows 1 video on mobile, 3 on desktop
        slidesToScroll: 1,
        autoplay: true, // No autoplay
        arrows: false, // No arrows for navigation
        centerMode: true,
        centerPadding: isMobile ? '20px' : '40px',
    };

    return (
        <Box sx={{ padding: '20px', backgroundColor: 'white', overflow: 'hidden' }}>
            {/* Header with orange line */}
            <Box textAlign="start" mb={4} display="flex" alignItems="center">
                <Typography
                    variant="h4"
                    component="span"
                    sx={{
                        fontWeight: 'bold',
                        marginRight: '10px',
                        color: '#f27c21',
                        fontSize: '40px',
                    }}
                >
                    Quick View
                </Typography>

                {/* Orange line */}
                <OrangeLine />

                {/* Circle at the end */}
                <Box
                    sx={{
                        width: '10px',
                        height: '10px',
                        backgroundColor: '#f27c21',
                        borderRadius: '50%',
                    }}
                />
            </Box>


            {/* Slider for videos */}
            <Slider {...settings}>
                {items.map((item, index) => (
                    <VideoCard key={index} video={item.video} title={item.title} isMobile={isMobile} />
                ))}
            </Slider>
        </Box>
    );
}

// VideoCard Component to handle the individual video cards
function VideoCard({ video, title, isMobile }) {
    const [isPlaying, setIsPlaying] = useState(false); // Track if video is playing
    const videoRef = React.useRef(null);

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <Box px={isMobile ? 2 : 3} boxSizing="border-box">
            <Card
                sx={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    maxWidth: '100%',
                    margin: '0 auto',
                    position: 'relative', // Needed for overlay
                }}
            >
                {/* Video element */}
                <video
                    ref={videoRef}
                    src={video}
                    title={title}
                    style={{
                        width: isMobile ? '240px' : '300px', // Narrow width for vertical reel style
                        height: isMobile ? '300px' : '400px', // Tall height for reel look
                        objectFit: 'cover',
                        borderRadius: '12px',
                        display: 'block',
                        margin: '0 auto', // Center the video on the card
                    }}
                />

                {/* Play/Pause Button Overlay */}
                <IconButton
                    onClick={handlePlayPause}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Slightly transparent background
                        color: 'white',
                        zIndex: 1,
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        },
                    }}
                >
                    {isPlaying ? <PauseCircleOutline sx={{ fontSize: '64px' }} /> : <PlayCircleOutline sx={{ fontSize: '64px' }} />}
                </IconButton>
            </Card>
        </Box>
    );
}
