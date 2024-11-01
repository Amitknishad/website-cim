'use client'
import { Box, Button, Card, CardMedia, Container, Grid, IconButton, Pagination, Typography } from '@mui/material'
import React, { useState } from 'react'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

const ImageCard = (props) => {

    const [page, setPage] = useState(1);
    const itemsPerPage = 9; // Number of items per page
    const totalPages = Math.ceil(props?.imageData.length / itemsPerPage);

    const handleChange = (event, value) => {
        setPage(value);
    };

    // Paginate the articles based on the current page
    const paginatedImages = props?.imageData.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    // Function to handle image download
    const handleDownload = (image) => {
        const link = document.createElement('a');
        link.href = image;
        link.download = 'image.jpg'; // Default name for the downloaded image
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Box sx={{ backgroundColor: "white", padding: 4 }}>
            <Container>
                <Typography
                    variant="h4"
                    component="span"
                    sx={{
                        fontWeight: 'bold',
                        marginRight: '10px',
                        py: 2,
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

                {/* Quotes Grid */}
                <Grid container spacing={3} sx={{ marginTop: '15px' }}>
                    {paginatedImages.map((image, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ height: "100%", display: "flex", flexDirection: "column", position: "relative" }}>
                                {/* Quotes Image */}
                                <CardMedia
                                    component="img"
                                    image={image}
                                    alt='image'
                                    sx={{ height: 200, objectFit: "cover", borderRadius: "10px" }}
                                />
                                {
                                    props?.downloadable ?
                                        <IconButton 
                                            sx={{ position: 'absolute', right: 0, bottom: 0 }}
                                            onClick={() => handleDownload(image)}
                                        >
                                            <DownloadForOfflineIcon sx={{ color: 'orange', fontSize: '40px' }} />
                                        </IconButton>
                                        : ""
                                }
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                {/* Pagination Control */}
                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handleChange}
                    color="primary"
                    sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
                />
            </Container>
        </Box>
    )
}

export default ImageCard;
