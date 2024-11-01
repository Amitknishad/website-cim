// Add "use client" at the top to ensure this file is treated as a Client Component.
"use client";

import { Box, Card, CardContent, CardMedia, Container, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

const BookletsDocuments = (props) => {
    const bookletMediaContent = [
        { image: '/gallery/bookletImg1.png', title: '9 year booklet - textiles', pdfURL: '/gallery/galleryBook1.pdf' },
        { image: '/gallery/bookletImg2.png', title: 'One Year Achievement Booklet English', pdfURL: '/gallery/galleryBook2.pdf' },
        { image: '/gallery/bookleteImg3.png', title: 'Five Year Achievements English', pdfURL: '/gallery/galleryBook3.pdf' }
    ];

    const handleDownload = (pdfURL) => {
        const link = document.createElement('a');
        link.href = pdfURL;
        link.download = pdfURL.split('/').pop(); // Uses the actual filename for download
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Box sx={{ backgroundColor: 'white', py: 8 }}>
            <Container>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 'bold',
                        marginRight: '10px',
                        py: 4,
                        color: '#ff7e54',
                        fontSize: {
                            xs: '24px',  // Small screens (mobile)
                            sm: '30px',  // Medium screens (tablets)
                            md: '35px',  // Large screens (laptops)
                            lg: '40px',  // Extra-large screens (desktops)
                        },
                    }}
                >
                    {props?.heading}
                </Typography>
                <Grid container spacing={2}>
                    {bookletMediaContent.map((booklet, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card>
                                <CardMedia
                                    component='img'
                                    image={booklet.image}
                                    alt={booklet.title}
                                    sx={{ height: 200, objectFit: "cover", borderRadius: "10px" }}
                                />
                                <CardContent sx={{ backgroundColor: '#ff7e54', height: '100px', position: 'relative' }}>
                                    <Typography
                                        sx={{
                                            color: 'white',
                                            fontWeight: 'bold',
                                            fontSize: '20px'
                                        }}
                                    >
                                        {booklet.title}
                                    </Typography>
                                    <IconButton 
                                        sx={{ position: 'absolute', right: 0, bottom: 0,color:'white',fontSize:'14px' }}
                                        onClick={() => handleDownload(booklet.pdfURL)}
                                    >
                                       Download.pdf 
                                        <DownloadForOfflineIcon sx={{ fontSize: '30px', }} />


                                    </IconButton>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default BookletsDocuments;
