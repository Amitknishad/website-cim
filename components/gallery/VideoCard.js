"use client"
import React, { useState } from "react";
import { Container, Grid, Typography, Pagination, Box, Button, Card, CardContent, CardMedia } from '@mui/material';



const VideoCard = () => {

    const [page, setPage] = useState(1);


    const VideoCardContent = [
        { id: 1, title: 'Piyush Goyal on LinkedIn: In my post budget interview...', date: '08/03/2024', time: '5:30am', image: './quickpiyush.mp4', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
        { id: 2, title: 'Budget Highlights: Understanding the key changes...', date: '08/03/2024', time: '6:00am', image: './quickpiyush.mp4', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
        { id: 3, title: 'Trade Negotiations: India\'s next steps in global trade...', date: '08/03/2024', time: '6:30am', image: './quickpiyush.mp4', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
        { id: 4, title: 'Key Takeaways from the Budget Presentation...', date: '08/03/2024', time: '7:00am', image: './quickpiyush.mp4', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
        { id: 5, title: 'Growth and Sustainability: Focus of the Budget...', date: '08/03/2024', time: '7:30am', image: './quickpiyush.mp4', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
        { id: 6, title: 'Sector-wise breakdown of the Budget Allocation...', date: '08/03/2024', time: '8:00am', image: './quickpiyush.mp4', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
        { id: 7, title: 'Healthcare and Education: Key budgetary changes...', date: '08/03/2024', time: '8:30am', image: './quickpiyush.mp4', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
        { id: 8, title: 'Financial Inclusion in the latest Budget...', date: '08/03/2024', time: '9:00am', image: './quickpiyush.mp4', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
        { id: 9, title: 'Boost for MSMEs: Budget insights...', date: '08/03/2024', time: '9:30am', image: './quickpiyush.mp4', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
        { id: 10, title: 'Post-Budget Industry Reactions...', date: '08/03/2024', time: '10:00am', image: './quickpiyush.mp4', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
        { id: 11, title: 'Infrastructure Investment: A closer look at Budget allocations...', date: '08/03/2024', time: '10:30am', image: './quickpiyush.mp4', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
        { id: 12, title: 'Digital India: Key steps forward from the Budget...', date: '08/03/2024', time: '11:00am', image: './quickpiyush.mp4', description: `In my post budget interview to Business Standard, I explain how the visionary budget of Amrit Kaal envisages PM Narendra Modi ji's`, },
    ]


    const itemsPerPage = 9; // Number of items per page
    const totalPages = Math.ceil(VideoCardContent.length / itemsPerPage);

    const handleChange = (event, value) => {
        setPage(value);
    };

    // Paginate the articles based on the current page
    const paginatedVideoCardContent = VideoCardContent.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    

    return (
        <Box  sx={{ backgroundColor: "white", padding: 4 }}>
            <Container>
                <Grid container spacing={3} sx={{ marginTop: '15px' }}>
                    {paginatedVideoCardContent.map((video) => (
                        <Grid item xs={12} sm={6} md={4} key={video.id}>
                            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                                {/* Article Image */}
                                <CardMedia
                                     component='video'
                                    image={video.image}
                                    alt={video.title}
                                    sx={{ height: 200, objectFit: "cover" }}
                                    autoPlay
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    {/* Article Details */}
                                    <Typography variant="body2" color="textSecondary" gutterBottom>
                                        {video.date} - {video.time}
                                    </Typography>
                                    <Typography variant="h4" sx={{ marginY: 1, fontWeight: "bold" }}>
                                        {video.title}
                                    </Typography>
                                    <Typography variant="body2" paragraph>
                                        {video.description?.substring(0, 100) + '...'}
                                    </Typography>
                                    <Button variant="text" sx={{ textTransform: "none", color: "#f27c21" }}>
                                        Read More &gt;
                                    </Button>
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
                    sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
                />
            </Container>



        </Box>

    )
}
export default VideoCard