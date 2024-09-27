// pages/index.js

import { Grid, Typography, Card, CardMedia, CardContent, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import HeaderWithLine from './HeaderWithLine';
import Link from 'next/link';

export default function TimelineSection() {
    const newsData = [
        {
            title: "Piyush Goyal holds bilateral meetings with counterparts on sidelines of IPEF",
            image: "/piyush.jpeg",
            date: "September 17, 2024",
            category: "Top News"
        },
        {
            title: "Another bilateral meeting with key figures in Asia",
            image: "/piyush.jpeg",
            date: "September 17, 2024",
            category: "Top News"
        },
        {
            title: "European counterparts engage in high-level talks",
            image: "/piyush.jpeg",
            date: "September 17, 2024",
            category: "Top News"
        }
    ];

    return (
        <Box sx={{ padding: 4, backgroundColor: 'white' }}>
            {/* Title */}
            <HeaderWithLine heading='International Coverage' />

            {/* Main Grid */}
            <Grid container spacing={4}>
                {newsData.length > 0 && (
                    <>
                        {/* Main News Section (Large Image) */}
                        <Grid item xs={12} md={8}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="500"
                                    image={newsData[0].image}
                                    alt={newsData[0].title}
                                />
                                <CardContent>
                                    <Typography variant="overline" sx={{ width: '40px', height: '40px', color: 'white', backgroundColor: '#f27c21', p: 1 }}>
                                        {newsData[0].category}
                                    </Typography>
                                    <Typography variant="h6">
                                        {newsData[0].title}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {newsData[0].date}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Side News Section (Small Images) */}
                        <Grid item xs={12} md={4} container spacing={4}>
                            {newsData.slice(1, 3).map((news, index) => (
                                <Grid item xs={12} key={index}>
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={news.image}
                                            alt={news.title}
                                        />
                                        <CardContent>
                                            <Typography variant="overline" sx={{ width: '40px', height: '40px', color: 'white', backgroundColor: '#f27c21', p: 1 }}>
                                                {news.category}
                                            </Typography>
                                            <Typography variant="subtitle1">
                                                {news.title}
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
