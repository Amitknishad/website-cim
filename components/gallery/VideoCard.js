"use client";
import React, { useState } from "react";
import {
    Container,
    Grid,
    Typography,
    Pagination,
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
} from "@mui/material";

const VideoCard = () => {
    const [page, setPage] = useState(1);

    const VideoCardContent = [
        {
            id: 1,
            title: "Union Minister Piyush Goyal Addresses Republic Summit 2024",
            date: "09/09/2024",
            time: "12:00 PM",
            image: "./quickpiyush.mp4",
            description:
                "Union Minister Piyush Goyal addresses the audience at the Republic Summit 2024, sharing insights on India's economic journey.",
        },
        {
            id: 2,
            title: "Piyush Goyal Discusses Startup Ecosystem at Mahakumbh",
            date: "09/09/2024",
            time: "12:00 PM",
            image: "./quickpiyush.mp4",
            description:
                "The Union Minister speaks on India's booming startup ecosystem and new initiatives at the Startup Mahakumbh event.",
        },
        {
            id: 3,
            title: "Modi 3.0: Piyush Goyal Takes Oath",
            date: "09/09/2024",
            time: "12:00 PM",
            image: "./quickpiyush.mp4",
            description:
                "Piyush Goyal takes the oath for the third term under Prime Minister Modi's leadership, highlighting ongoing developmental projects.",
        },
        {
            id: 4,
            title: "Piyush Goyal Slams E-Commerce Violations",
            date: "09/09/2024",
            time: "12:00 PM",
            image: "./quickpiyush.mp4",
            description:
                "In a hard-hitting statement, the Union Minister calls out e-commerce violations affecting small businesses and retailers in India.",
        },
        {
            id: 5,
            title: "Remembering Ratan Tata: Emotional Tribute by Piyush Goyal",
            date: "09/09/2024",
            time: "12:00 PM",
            image: "./quickpiyush.mp4",
            description:
                "Union Minister Piyush Goyal reminisces fond memories with the late industrialist Ratan Tata, honoring his legacy.",
        },
        {
            id: 6,
            title: "NDA's Strong Stance in Upcoming Elections",
            date: "09/09/2024",
            time: "12:00 PM",
            image: "./quickpiyush.mp4",
            description:
                "In an exclusive interview, Piyush Goyal discusses the NDA's position and strategies for the upcoming state elections.",
        },
        {
            id: 7,
            title: "Piyush Goyal Takes Oath as Union Cabinet Minister",
            date: "09/09/2024",
            time: "12:00 PM",
            image: "./quickpiyush.mp4",
            description:
                "In a ceremony held at Rashtrapati Bhavan, Piyush Goyal takes the oath as a Union Cabinet Minister.",
        },
        {
            id: 8,
            title: "Piyush Goyal's Exclusive Interview on Times Now",
            date: "09/09/2024",
            time: "12:00 PM",
            image: "./quickpiyush.mp4",
            description:
                "Exclusive insights from Piyush Goyal's interview with Navika Kumar on Times Now about India's development plans.",
        },
        {
            id: 9,
            title: "Piyush Goyal Slams Amazon on E-Commerce Issues",
            date: "09/09/2024",
            time: "12:00 PM",
            image: "./quickpiyush.mp4",
            description:
                "Union Minister Piyush Goyal criticizes Amazon for alleged e-commerce policy violations in India, sparking debates in the industry.",
        },
    ];

    const itemsPerPage = 9; // Number of items per page
    const totalPages = Math.ceil(VideoCardContent.length / itemsPerPage);

    const handleChange = (event, value) => {
        setPage(value);
    };

    // Paginate the videos based on the current page
    const paginatedVideoCardContent = VideoCardContent.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    return (
        <Box sx={{ backgroundColor: "white", padding: 4 }}>
            <Container>
                <Grid container spacing={3} sx={{ marginTop: "15px" }}>
                    {paginatedVideoCardContent.map((video) => (
                        <Grid item xs={12} sm={6} md={4} key={video.id}>
                            <Card
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    borderRadius: 2,
                                    boxShadow: 3,
                                    backgroundColor: "#f8f9fa", // Light background color to match screenshots
                                }}
                            >
                                <CardMedia
                                    component="video"
                                    image={video.image}
                                    alt={video.title}
                                    sx={{
                                        height: { xs: 150, sm: 200 },
                                        objectFit: "cover",
                                    }}


                                />
                                <CardContent sx={{ flexGrow: 1, padding: "16px" }}>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        gutterBottom
                                        sx={{ fontSize: "0.875rem" }}
                                    >
                                        {video.date} - {video.time}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            marginY: 1,
                                            fontWeight: "bold",
                                            fontSize: "1rem",
                                            lineHeight: "1.25",
                                        }}
                                    >
                                        {video.title}
                                    </Typography>
                                    {/* <Typography
                                        variant="body2"
                                        paragraph
                                        sx={{ fontSize: "0.9rem", color: "#333" }}
                                    >
                                        {video.description.substring(0, 80) + "..."}
                                    </Typography>
                                    <Button
                                        variant="text"
                                        sx={{ textTransform: "none", color: "#f27c21" }}
                                    >
                                        Read More &gt;
                                    </Button> */}
                                </CardContent>
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
                    sx={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
                />
            </Container>
        </Box>
    );
};

export default VideoCard;
