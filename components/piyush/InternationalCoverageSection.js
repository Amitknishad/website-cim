// pages/index.js

import { Grid, Typography, Card, CardMedia, CardContent, Box } from '@mui/material';
import HeaderWithLine from './HeaderWithLine';
import Link from 'next/link';

export default function InternationalCoverageSection() {
    const newsData = [
        {
            title: "Piyush Goyal holds bilateral meetings with counterparts on sidelines of IPEF",
            image: "/international1.jpg", // Updated image path
            date: "September 17, 2024",
            category: "Top News"
        },
        {
            title: "Another bilateral meeting with key figures in Asia",
            image: "/international2.jpg", // Updated image path
            date: "September 17, 2024",
            category: "Top News"
        },
        {
            title: "European counterparts engage in high-level talks",
            image: "/international3.jpg", // Updated image path
            date: "September 17, 2024",
            category: "Top News"
        },
        {
            title: "New Trade Agreements Discussed with Global Leaders",
            image: "/piyush.jpeg", // Additional data for testing
            date: "September 18, 2024",
            category: "Top News"
        }
    ];

    // Ensure only 3 items are shown
    const displayedNews = newsData.slice(0, 3);

    return (
        <Box sx={{ padding: 4, backgroundColor: 'white' }}>
            {/* Title */}
            <HeaderWithLine heading='International Coverage' />

            {/* Main Grid */}
            <Grid container spacing={2}>
                {displayedNews.length > 0 && (
                    <>
                        {/* Main News Section (Large Image) */}
                        <Grid item xs={12} md={8}>
                            <Card sx={{ position: 'relative' }}>
                                <CardMedia
                                    component="img"
                                    height="508"
                                    image={displayedNews[0].image}
                                    alt={displayedNews[0].title}
                                    sx={{
                                        objectFit: 'cover', // Ensures the image covers the area properly
                                    }}
                                />
                                {/* Overlay Content with Gradient */}
                                <CardContent sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    color: 'white',
                                    background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)', // Gradient background
                                    padding: '8px 16px',
                                }}>
                                    <Typography variant="overline" sx={{
                                        backgroundColor: '#f27c21',
                                        padding: '4px 8px',
                                        fontSize: "14px"
                                    }}>
                                        {displayedNews[0].category}
                                    </Typography>
                                    <Typography variant="h6" sx={{ mt: 1 }}>
                                        {displayedNews[0].title.slice(0, 80) + '...'}
                                    </Typography>
                                    <Typography variant="caption" color="darkgray"   sx={{
                                        position: 'absolute',
                                        right: 16,
                                        bottom: 16,
                                        fontWeight: 'bold',
                                    }}>
                                        {displayedNews[0].date}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Side News Section (Small Images) */}
                        <Grid item xs={12} md={4} container spacing={1}>
                            {displayedNews.slice(1, 3).map((news, index) => (
                                <Grid item xs={12} key={index}>
                                    <Card sx={{ position: 'relative' }}>
                                        <CardMedia
                                            component="img"
                                            height="250"
                                            image={news.image}
                                            alt={news.title}
                                            sx={{
                                                objectFit: 'cover', // Ensures image fits well
                                            }}
                                        />
                                        {/* Overlay Content with Gradient */}
                                        <CardContent sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            color: 'white',
                                            background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)', // Gradient background
                                            padding: '8px 16px',
                                        }}>
                                            <Typography variant="overline" sx={{
                                                backgroundColor: '#f27c21',
                                                padding: '4px 8px',
                                                fontSize: "14px"
                                            }}>
                                                {news.category}
                                            </Typography>
                                            <Typography variant="subtitle1" sx={{ mt: 1, width: "70%" }}>
                                                {news.title.slice(0, 60) + '...'}
                                            </Typography>
                                            <Typography variant="caption" color="darkgray"  sx={{
                                                position: 'absolute',
                                                right: 16,
                                                bottom: 16,
                                                fontWeight: 'bold',
                                            }}>
                                                {news.date}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </>
                )}
            </Grid>
            <Box textAlign="right" mt={4} color="#f27c21" sx={{ textDecoration: 'underline' }}>
                <Link
                    href="/"
                    underline="hover"
                    sx={{
                        fontSize: "0.85rem",
                        color: "#f27c21",
                        fontWeight: 500,
                        textDecoration: 'underline',
                    }}
                >
                    More View
                </Link>
            </Box>
        </Box>
    );
}
