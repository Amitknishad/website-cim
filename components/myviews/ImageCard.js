'use client'
import { Box, Card, CardMedia, Container, Grid, Pagination, Typography } from '@mui/material'
import React, { useState } from 'react'

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
                            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                                {/* Quotes Image */}
                                <CardMedia
                                    component="img"
                                    image={image}
                                    alt='image'
                                    sx={{ height: 200, objectFit: "cover", borderRadius: "10px" }}
                                />

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
export default ImageCard