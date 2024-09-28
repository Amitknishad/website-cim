import { Tab, Tabs, Box, Typography, Button, Container, Card, CardContent, Link } from '@mui/material';
import React, { useState } from 'react';
import Slider from "react-slick";
import Image from 'next/image';

const Press = () => {

    const [tabValue, setTabValue] = useState(0);
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    // Slider settings for react-slick
    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6, // Show 6 cards in a row
        slidesToScroll: 6, // Scroll 6 cards at a time
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4, // Show 4 cards on medium screens
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2, // Show 2 cards on smaller screens
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1, // Show 1 card on very small screens
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const pressItems = [
        {
            title: "Piyush Goyal returns as Union minister in new avatar as first time Lok Sabha member",
            date: "September 17, 2024",
            imgUrl: "/latestNews1.jpg",
            link: "/news/1",
        },
        {
            title: "Auto component sector on road to reach $100bn export target by 2030 : Piyush Goyal - DST - Daily",
            date: "September 17, 2024",
            imgUrl: "/latestNews2.jpg",
            link: "/news/2",
        },
        {
            title: "San Francisco: Union minister Piyush Goyal arrives in San Francisco; begins bilateral with IPEF partner",
            date: "September 17, 2024",
            imgUrl: "/latestNews3.jpg",
            link: "/news/3",
        },
        {
            title: "Auto component sector on road to reach $100bn export target by 2030 : Piyush Goyal - DST - Daily",
            date: "September 17, 2024",
            imgUrl: "/latestNews2.jpg",
            link: "/news/2",
        },
        {
            title: "San Francisco: Union minister Piyush Goyal arrives in San Francisco; begins bilateral with IPEF partner",
            date: "September 17, 2024",
            imgUrl: "/latestNews3.jpg",
            link: "/news/3",
        },
        {
            title: "Piyush Goyal returns as Union minister in new avatar as first time Lok Sabha member",
            date: "September 17, 2024",
            imgUrl: "/latestNews1.jpg",
            link: "/news/1",
        },
        {
            title: "Piyush Goyal returns as Union minister in new avatar as first time Lok Sabha member",
            date: "September 17, 2024",
            imgUrl: "/latestNews1.jpg",
            link: "/news/1",
        },
        {
            title: "Auto component sector on road to reach $100bn export target by 2030 : Piyush Goyal - DST - Daily",
            date: "September 17, 2024",
            imgUrl: "/latestNews2.jpg",
            link: "/news/2",
        },
        {
            title: "San Francisco: Union minister Piyush Goyal arrives in San Francisco; begins bilateral with IPEF partner",
            date: "September 17, 2024",
            imgUrl: "/latestNews3.jpg",
            link: "/news/3",
        },
        {
            title: "Auto component sector on road to reach $100bn export target by 2030 : Piyush Goyal - DST - Daily",
            date: "September 17, 2024",
            imgUrl: "/latestNews2.jpg",
            link: "/news/2",
        },
        {
            title: "San Francisco: Union minister Piyush Goyal arrives in San Francisco; begins bilateral with IPEF partner",
            date: "September 17, 2024",
            imgUrl: "/latestNews3.jpg",
            link: "/news/3",
        },
        {
            title: "Piyush Goyal returns as Union minister in new avatar as first time Lok Sabha member",
            date: "September 17, 2024",
            imgUrl: "/latestNews1.jpg",
            link: "/news/1",
        },
    ];

    const articlesItems = [
        { title: "Article 1", date: "September 18, 2024", imgUrl: "/latestNews1.jpg", link: "/article/1" },
        { title: "Article 2", date: "September 19, 2024", imgUrl: "/latestNews2.jpg", link: "/article/2" },
        { title: "Article 1", date: "September 18, 2024", imgUrl: "/latestNews1.jpg", link: "/article/1" },
        { title: "Article 2", date: "September 19, 2024", imgUrl: "/latestNews2.jpg", link: "/article/2" },
        { title: "Article 1", date: "September 18, 2024", imgUrl: "/latestNews1.jpg", link: "/article/1" },
        { title: "Article 2", date: "September 19, 2024", imgUrl: "/latestNews2.jpg", link: "/article/2" },
        { title: "Article 1", date: "September 18, 2024", imgUrl: "/latestNews1.jpg", link: "/article/1" },
        { title: "Article 2", date: "September 19, 2024", imgUrl: "/latestNews2.jpg", link: "/article/2" },
        { title: "Article 1", date: "September 18, 2024", imgUrl: "/latestNews1.jpg", link: "/article/1" },
        { title: "Article 2", date: "September 19, 2024", imgUrl: "/latestNews2.jpg", link: "/article/2" },
        { title: "Article 1", date: "September 18, 2024", imgUrl: "/latestNews1.jpg", link: "/article/1" },
        { title: "Article 2", date: "September 19, 2024", imgUrl: "/latestNews2.jpg", link: "/article/2" }, 
    ];

    const blogsItems = [
        { title: "Blog Post 1", date: "September 20, 2024", imgUrl: "/latestNews1.jpg", link: "/blog/1" },
        { title: "Blog Post 2", date: "September 21, 2024", imgUrl: "/latestNews2.jpg", link: "/blog/2" },
        { title: "Blog Post 1", date: "September 20, 2024", imgUrl: "/latestNews1.jpg", link: "/blog/1" },
        { title: "Blog Post 2", date: "September 21, 2024", imgUrl: "/latestNews2.jpg", link: "/blog/2" },
        { title: "Blog Post 1", date: "September 20, 2024", imgUrl: "/latestNews1.jpg", link: "/blog/1" },
        { title: "Blog Post 2", date: "September 21, 2024", imgUrl: "/latestNews2.jpg", link: "/blog/2" },
        { title: "Blog Post 1", date: "September 20, 2024", imgUrl: "/latestNews1.jpg", link: "/blog/1" },
        { title: "Blog Post 2", date: "September 21, 2024", imgUrl: "/latestNews2.jpg", link: "/blog/2" },
        { title: "Blog Post 1", date: "September 20, 2024", imgUrl: "/latestNews1.jpg", link: "/blog/1" },
        { title: "Blog Post 2", date: "September 21, 2024", imgUrl: "/latestNews2.jpg", link: "/blog/2" },
        { title: "Blog Post 1", date: "September 20, 2024", imgUrl: "/latestNews1.jpg", link: "/blog/1" },
        { title: "Blog Post 2", date: "September 21, 2024", imgUrl: "/latestNews2.jpg", link: "/blog/2" },
    ];

    // Function to select which array of items to display based on tabValue
    const getCurrentItems = () => {
        switch (tabValue) {
            case 0:
                return pressItems;
            case 1:
                return articlesItems;
            case 2:
                return blogsItems;
            default:
                return pressItems;
        }
    };

    const currentItems = getCurrentItems();
    const firstRowItems = currentItems.slice(0, 6);
    const secondRowItems = currentItems.slice(6, 12);
    
    return (
        <Box sx={{ backgroundColor: "#fff", width: "100%", px: 4, pb: 4, pt: 2 }}>
            {/* Tabs Section */}
            <Tabs value={tabValue} onChange={handleTabChange} sx={{
                borderBottom: "3px solid #f27c21",
                '.MuiTabs-indicator': {
                    backgroundColor: 'transparent', // Remove default indicator
                },
            }}>
                <Tab label="Press" sx={{
                    backgroundColor: tabValue === 0 ? '#f27c21' : 'white',
                    color: tabValue === 0 ? 'white' : '#f27c21',
                    '&.Mui-selected': {
                        backgroundColor: '#f27c21',
                        color: 'white',
                    },
                }} />
                <Tab label="Articles" sx={{
                    backgroundColor: tabValue === 1 ? '#f27c21' : 'white',
                    color: tabValue === 1 ? 'white' : '#f27c21',
                    '&.Mui-selected': {
                        backgroundColor: '#f27c21',
                        color: 'white',
                    },
                }} />
                <Tab label="Blog" sx={{
                    backgroundColor: tabValue === 2 ? '#f27c21' : 'white',
                    color: tabValue === 2 ? 'white' : '#f27c21',
                    '&.Mui-selected': {
                        backgroundColor: '#f27c21',
                        color: 'white',
                    },
                }} />
            </Tabs>

            {/* First Row */}
            <Box sx={{ mt: 2 }}>
                <Slider {...sliderSettings}>
                    {firstRowItems.map((item, index) => (
                        <div key={index} style={{ padding: "0 20px" }}> {/* Increased horizontal padding */}
                            <Card sx={{
                                height: 280, backgroundColor: "#fff", textAlign: "left", boxShadow: 3, borderRadius: 2,
                                overflow: "hidden", marginLeft: "10px"
                            }}>
                                <Box sx={{ width: "100%", height: "150px", overflow: "hidden", position: "relative" }}>
                                    <Image
                                        src={item.imgUrl}
                                        alt={item.title}
                                        layout="fill"
                                        objectFit="cover"
                                        style={{ borderRadius: "5px 5px 0 0" }}
                                    />
                                </Box>
                                <CardContent sx={{ padding: "12px 12px" }}> {/* Adjusted padding */}
                                    <Typography variant="subtitle2" sx={{
                                        fontSize: "0.95rem", fontWeight: 400,
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                        height: "3.2rem", // Restricting height for two lines
                                    }}>
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        sx={{ textAlign: "right", fontSize: "0.8rem", marginTop: "10px" }}
                                    >
                                        {item.date}
                                    </Typography>
                                </CardContent>
                                <CardContent sx={{ padding: "0 16px 10px" }}>
                                    <Link
                                        href={item.link}
                                        underline="hover"
                                        sx={{ fontSize: "0.85rem", color: "#FF5733", fontWeight: 500 }}
                                    >
                                        Read More
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </Slider>

                {/* Second Row */}
                {secondRowItems.length > 0 && (
                    <Box sx={{ mt: 2 }}>
                        <Slider {...sliderSettings}>
                            {secondRowItems.map((item, index) => (
                                <div key={index} style={{ padding: "0 20px" }}> {/* Increased horizontal padding */}
                                    <Card sx={{
                                        height: 280, backgroundColor: "#fff", textAlign: "left", boxShadow: 3,
                                        borderRadius: 2,
                                        overflow: "hidden",
                                        marginLeft: "10px"
                                    }}>
                                        <Box sx={{ width: "100%", height: "150px", overflow: "hidden", position: "relative" }}>
                                            <Image
                                                src={item.imgUrl}
                                                alt={item.title}
                                                layout="fill"
                                                objectFit="cover"
                                                style={{ borderRadius: "5px 5px 0 0" }}
                                            />
                                        </Box>
                                        <CardContent sx={{ padding: "12px 12px" }}> {/* Adjusted padding */}
                                            <Typography variant="subtitle2" sx={{
                                                fontSize: "0.95rem", fontWeight: 400,
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                display: "-webkit-box",
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: "vertical",
                                                height: "3.2rem", // Restricting height for two lines
                                            }}>
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="textSecondary"
                                                sx={{ textAlign: "right", fontSize: "0.8rem", marginTop: "10px" }}
                                            >
                                                {item.date}
                                            </Typography>
                                        </CardContent>
                                        <CardContent sx={{ padding: "0 16px 10px" }}>
                                            <Link
                                                href={item.link}
                                                underline="hover"
                                                sx={{ fontSize: "0.85rem", color: "#FF5733", fontWeight: 500 }}
                                            >
                                                Read More
                                            </Link>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </Slider>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default Press;