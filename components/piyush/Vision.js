import { Box, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

// Header Component (reuse your header code here)
const OrangeLine = styled('div')(({ theme }) => ({
    borderTop: '3px solid orange',
    width: '50%',
    display: 'inline-block',
    verticalAlign: 'middle',
}));

const Header = ({ heading }) => (
    <Box textAlign="start" mb={1} px={4} pt={4} display="flex" alignItems="center">
        <Typography
            variant="h4"
            component="span"
            sx={{
                fontWeight: 'bold',
                marginRight: '10px',
                color: '#f27c21',
                fontSize: {
                    xs: '24px', // Small screens (mobile)
                    sm: '30px', // Medium screens (tablets)
                    md: '35px', // Large screens (laptops)
                    lg: '40px', // Extra-large screens (desktops)
                },
            }}
        >
            {heading}
        </Typography>

        {/* Orange line */}
        <OrangeLine />

        {/* Circle at the end */}
        <Box
            sx={{
                width: '10px',
                height: '10px',
                backgroundColor: '#f27c21',
                borderRadius: '50%',
            }}
        />
    </Box>
);

// Vision Section Component
const VisionSection = () => {
    const items = [
        {
            title: 'Transforming India into a Global Powerhouse',
            image: '/piyush1.jpeg', // Replace with actual image path
        },
        {
            title: 'Strengthening Infrastructure and Logistics',
            image: '/piyush2.jpeg',
        },
        {
            title: 'Ease of Doing Business',
            image: '/piyush3.jpeg',
        },
        {
            title: 'Inclusive Economic Growth',
            image: '/piyush4.jpeg',
        },
    ];

    return (
        <Box p={4} sx={{ overflow: 'hidden', backgroundColor:"white" }}> {/* Prevents unwanted scrolling */}
            {/* Vision Title */}
            <Header heading="Vision" />

            <Typography
                variant="body1"
                sx={{
                    mb: 4,
                    color: '#f27c21', // Orange text as shown in the image
                    fontWeight: 'bold',
                    textAlign: 'left', // Left align the paragraph
                    ml: { xs: 2, md: 4 }, // Add slight margin-left to push it off-center
                    fontSize: {
                        xs: '16px',  // Small screens
                        sm: '18px',  // Medium screens
                        md: '20px',  // Large screens
                    },
                }}
            >
                Piyush Goyal's vision as a senior leader and minister has always centered around sustainable growth,
                economic development, infrastructure modernization, and digital empowerment. His focus areas include:
            </Typography>

            {/* Grid for Vision Areas */}
            <Grid container spacing={0} sx={{ mb: 4 }}> {/* Remove spacing between items */}
                {items.map((item, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card sx={{ position: 'relative', boxShadow: 'none', borderRadius: 0 }}>
                            <CardMedia
                                component="img"
                                image={item.image}
                                alt={item.title}
                                sx={{
                                    height: {
                                        xs: '200px', // Small screens
                                        sm: '300px', // Medium screens
                                        md: '400px', // Large screens
                                        lg: '65vh',  // Height relative to viewport height
                                    },
                                    filter: 'brightness(0.7)', // Darkens the image for better text visibility
                                }}
                            />
                            <CardContent
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay behind text
                                    color: 'white',
                                    textAlign:"center"
                                }}
                            >
                                <Typography variant="h6">{item.title}</Typography>
                                <Button
                                    variant="contained"
                                    sx={{
                                        mt: 2,
                                        backgroundColor: 'white',
                                        color: '#f27c21', // Orange text on white background
                                        '&:hover': {
                                            backgroundColor: '#f27c21',
                                            color: 'white', // Hover effect
                                        },
                                    }}
                                >
                                    Read More
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

// Main Page Component
const VisionPage = () => (
    <Box>
        <VisionSection />
    </Box>
);

export default VisionPage;
