// pages/index.js
import React, { useState } from 'react';
import { Grid, Button, Box, Typography, Link } from '@mui/material';
import NewsCard from './NewsCard';
import UpcomingEvents from './UpcomingEvents';
import styled from '@emotion/styled';

// Sample data for news
const newsData = [
    { title: 'New opportunities in digitalisation, trade with Australia', date: 'September 17, 2024', image: '/piyushAus.jpg', description: 'Union Minister Piyush Goyal emphasised the growing economic ties. Both sides discussed various avenues for collaboration. Key areas included digitalisation and infrastructure investment. India aims to boost...' },
    { title: 'India-Australia trade talks progress', date: 'September 16, 2024', image: '/piyushAus.jpg', description: 'Discussions on enhancing bilateral trade relations. The joint talks also explored opportunities in agriculture, mining, and clean energy. Both countries expressed...' },
    { title: 'Economic growth strategies discussed', date: 'September 15, 2024', image: '/piyushAus.jpg', description: 'Leaders from both nations focused on future economic strategies. Key sectors include digital technology, infrastructure, and clean energy initiatives. Additional resources to...' },
    { title: 'New opportunities in digitalisation, trade with Australia', date: 'September 17, 2024', image: '/piyushAus.jpg', description: 'Union Minister Piyush Goyal emphasised the growing economic ties. Both sides discussed various avenues for collaboration. Key areas included digitalisation and infrastructure investment. India aims to boost...' },
    { title: 'India-Australia trade talks progress', date: 'September 16, 2024', image: '/piyushAus.jpg', description: 'Discussions on enhancing bilateral trade relations. The joint talks also explored opportunities in agriculture, mining, and clean energy. Both countries expressed...' },
    { title: 'Economic growth strategies discussed', date: 'September 15, 2024', image: '/piyushAus.jpg', description: 'Leaders from both nations focused on future economic strategies. Key sectors include digital technology, infrastructure, and clean energy initiatives. Additional resources to...' },
];

// Sample data for upcoming events
const eventData = [
    { title: '19th India-Australia Joint Ministerial Commission', date: '23-25 Sept 2024', description: 'Discuss enhancing trade and investment relations between the two countries.' },
    { title: 'Tech Summit 2024', date: '28-30 Oct 2024', description: 'Technology leaders from both countries to discuss digital collaboration.' },
    { title: 'Economic Forum', date: '10-12 Nov 2024', description: 'Economic leaders meet to discuss international trade policies.' },
];

// Function to truncate text after 30 words
const truncateDescription = (text) => {
    const words = text.split(' ');
    return words.length > 30 ? words.slice(0, 30).join(' ') + '...' : text;
};

const NewsList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Calculate total pages
    const totalPages = Math.ceil(newsData.length / itemsPerPage);

    // Paginated data
    const paginatedNews = newsData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Styled Box for the orange underline
    const OrangeLine = styled('div')(({ theme }) => ({
        borderTop: '3px solid #ff7e54',
        width: '50%',
        display: 'inline-block',
        verticalAlign: 'middle',
    }));

    const OrangeLineEvents = styled('div')(({ theme }) => ({
        borderTop: '3px solid #ff7e54',
        width: '70%',
        display: 'inline-block',
        verticalAlign: 'middle',
        [theme.breakpoints.up('md')]: {
            width: '100%',
        },
    }));

    return (
        <Box sx={{ backgroundColor: "white", padding: 4 }}>
            <Box>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 'bold',
                        marginRight: '10px',
                        color: '#ff7e54',
                        fontSize: {
                            xs: '24px',
                            sm: '30px',
                            md: '35px',
                            lg: '40px',
                        },
                    }}
                >
                    Latest News
                </Typography>
                <OrangeLine />
            </Box>
            
                {/* Left Side: News List */}

                <Box sx={{ marginTop: 2, backgroundColor: "#FFE8E8", p: 4 }}>
                <Grid container spacing={4} >
                    {paginatedNews.map((news, index) => (
                        <Grid item xs={12} md={6}>
                            <NewsCard
                                key={index}
                                title={news.title}
                                date={news.date}
                                image={news.image}
                                description={truncateDescription(news.description)}
                            />
                        </Grid>
                    ))}
                    </Grid>

                    {currentPage < totalPages ? (
                        <Box textAlign="right" mt={4}>
                            <Link
                                href="#"
                                underline="hover"
                                sx={{
                                    fontSize: "0.85rem",
                                    color: "#ff7e54",
                                    fontWeight: 500,
                                    textDecoration: 'underline', // This will add the underline
                                }}
                            >
                                More View
                            </Link>
                        </Box>
                    ) : (
                        <Box textAlign="right" mt={4}>
                            <Link href="/more-news" passHref legacyBehavior>
                                <Button variant="outlined">View All News</Button>
                            </Link>
                        </Box>
                    )}
                </Box>
          

            {/* Right Side: Upcoming Events */}
            {/* <Grid item xs={12} md={4}>
                <Box>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 'bold',
                        marginRight: '10px',
                        color: '#ff7e54',
                        fontSize: {
                            xs: '24px',
                            sm: '24px',
                            md: '25px',
                            lg: '30px',
                        },
                    }}
                >
                    Our Upcoming Events
                </Typography>
                <OrangeLineEvents />
            </Box>
                    <UpcomingEvents events={eventData} />
                    <Box textAlign="right" mt={4}>
                                <Link
                                    href="#"
                                    underline="hover"
                                    sx={{
                                        fontSize: "0.85rem",
                                        color: "#ff7e54",
                                        fontWeight: 500,
                                        textDecoration: 'underline', // This will add the underline
                                    }}
                                >
                                    More View
                                </Link>
                            </Box>
                </Grid> */}
        
        </Box >
    );
};

export default NewsList;

