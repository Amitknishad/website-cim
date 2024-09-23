import React from "react";
import { Card, CardContent, Typography, Link, Box, Container } from "@mui/material";
import Image from "next/image";
import HeaderWithLine from "./HeaderWithLine";
import Slider from "react-slick";

// Sample data for news items (Total of 12 news)
const newsItems = [
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

const LatestNews = () => {
    // Split the array into two rows, with 6 cards each
    const firstRowItems = newsItems.slice(0, 6);
    const secondRowItems = newsItems.slice(6, 12);

    return (
        <Box sx={{ backgroundColor: "#fff", width: "100%", px: 4, pb: 4, pt: 2 }}>
            <Typography variant="h4" align="start" gutterBottom>
                <HeaderWithLine heading="Latest News" />
            </Typography>

            <Container maxWidth="lg" sx={{ py: 4}}>
                {/* First Row */}
                <Slider {...sliderSettings}>
                    {firstRowItems.map((item, index) => (
                        <div key={index} style={{ padding: "0 20px" }}> {/* Increased horizontal padding */}
                            <Card sx={{
                                height: 280, backgroundColor: "#fff", textAlign: "left", boxShadow: 3, borderRadius: 2,
                                overflow: "hidden", marginLeft:"10px"
                            }}>
                                <Image
                                    src={item.imgUrl}
                                    alt={item.title}
                                    width={300}
                                    height={100}
                                    layout="responsive"
                                    style={{ borderRadius: "5px 5px 0 0" }}
                                />
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
                <Slider {...sliderSettings}>
                    {secondRowItems.map((item, index) => (
                        <div key={index} style={{ padding: "0 20px" }}> {/* Increased horizontal padding */}
                            <Card sx={{
                                height: 280, backgroundColor: "#fff", textAlign: "left", boxShadow: 3,
                                borderRadius: 2,
                                overflow: "hidden",
                                marginLeft:"10px"
                            }}>
                                <Image
                                    src={item.imgUrl}
                                    alt={item.title}
                                    width={300}
                                    height={100}
                                    layout="responsive"
                                    style={{ borderRadius: "5px 5px 0 0" }}
                                />
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
                                        sx={{ textAlign: "right", fontSize: "0.8rem", marginTop: "5px" }}
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
            </Container>
        </Box>
    );
};

export default LatestNews;
