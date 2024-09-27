// pages/index.js
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import HeaderWithLine from './HeaderWithLine';
import Link from 'next/link';
// import Layout from "../components/Layout";

export default function Press() {
    const articles = [
        {
            title: "Burying Past Baggage",
            description: "Biggest outcome of talks with USTR.",
            date: "September 17, 2024",
            image: "/piyush.jpeg",
        },
        {
            title: "Global Community at WTO",
            description: "Ensuring timely and equitable availability.",
            date: "Septes/article2ember 17, 2024",
            image: "/piyush.jpeg",
        },
        {
            title: "Global Community at WTO",
            description: "Ensuring timely and equitable availability.",
            date: "Septes/article2ember 17, 2024",
            image: "/piyush.jpeg",
        }, {
            title: "Global Community at WTO",
            description: "Ensuring timely and equitable availability.",
            date: "Septes/article2ember 17, 2024",
            image: "/piyush.jpeg",
        }, {
            title: "Global Community at WTO",
            description: "Ensuring timely and equitable availability.",
            date: "Septes/article2ember 17, 2024",
            image: "/piyush.jpeg",
        }, {
            title: "Global Community at WTO",
            description: "Ensuring timely and equitable availability.",
            date: "Septes/article2ember 17, 2024",
            image: "/piyush.jpeg",
        }, {
            title: "Global Community at WTO",
            description: "Ensuring timely and equitable availability.",
            date: "Septes/article2ember 17, 2024",
            image: "/piyush.jpeg",
        }, {
            title: "Global Community at WTO",
            description: "Ensuring timely and equitable availability.",
            date: "Septes/article2ember 17, 2024",
            image: "/piyush.jpeg",
        }, {
            title: "Global Community at WTO",
            description: "Ensuring timely and equitable availability.",
            date: "Septes/article2ember 17, 2024",
            image: "/piyush.jpeg",
        }, {
            title: "Global Community at WTO",
            description: "Ensuring timely and equitable availability.",
            date: "Septes/article2ember 17, 2024",
            image: "/piyush.jpeg",
        }, {
            title: "Global Community at WTO",
            description: "Ensuring timely and equitable availability.",
            date: "Septes/article2ember 17, 2024",
            image: "/piyush.jpeg",
        }, {
            title: "Global Community at WTO",
            description: "Ensuring timely and equitable availability.",
            date: "Septes/article2ember 17, 2024",
            image: "/piyush.jpeg",
        },
        // More articles...
    ];

    return (
        <>
            {/* <Layout /> */}
            <Container sx={{ mt: 4 }}>
                <Grid container spacing={4}>
                    {articles.map((article, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={article.image}
                                    alt={article.title}
                                />
                                <CardContent>
                                    <Typography variant="h6">{article.title}</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {article.description}
                                    </Typography>
                                    <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                                        {article.date}
                                    </Typography>
                                    <Button href="#" sx={{ mt: 2 }} variant="contained" color="primary">
                                        Read More
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                
            </Container>
        </>
    );
}
