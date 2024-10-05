import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Box, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


// Styles for the Timeline Container
const TimelineContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 0',  // More padding for visual balance
    backgroundColor: '#FFF7E6', // Light cream background to match the image
});

const YearLine = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    marginBottom: '40px',  // Space between the timeline and the content
    '&:after': {
        content: '""',
        width: '90%',
        height: '2px',
        backgroundColor: '#FFC107', // Orange line
        position: 'absolute',
        top: '50%',
        zIndex: 1,
    },
}));

const YearButton = styled(Box)(({ theme }) => ({
    zIndex: 2,
    backgroundColor: '#FFC107',  // Orange color for the year button
    color: '#fff',
    padding: '8px 16px',
    borderRadius: '50%',
    fontWeight: 'bold',
    cursor: 'pointer',
    margin: '0 10px',
    fontSize: '1.2rem',
    '&:hover': {
        backgroundColor: '#FFB300',
    },
}));

const TimelineYear = styled(Box)({
    textAlign: 'center',
});

const TimelineItem = ({ year, title, content, imageUrl }) => {
    return (
        <Grid item>
            <Card style={{ maxWidth: 400, margin: '0 auto', backgroundColor: '#FFF' }}>
                <CardMedia
                    component="img"
                    height="250"
                    image={imageUrl}
                    alt={title}
                />
                <CardContent>
                    <Typography variant="h6" style={{ fontWeight: 'bold', color: '#333' }}>
                        {year}
                    </Typography>
                    <Typography variant="subtitle1" style={{ fontWeight: '500', color: '#333' }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" style={{ color: '#555' }}>
                        {content}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

const TimelineSection = () => {
    const timelineData = [
        {
            year: '1964',
            title: 'Born in Mumbai',
            content: 'Piyush Goyal was born in Mumbai, Maharashtra...',
            imageUrl: '/piyush.jpeg',
        },
        {
            year: '1964',
            title: 'Born in Mumbai',
            content: 'Piyush Goyal was born in Mumbai, Maharashtra...',
            imageUrl: '/piyush.jpeg',
        },
        {
            year: '1964',
            title: 'Born in Mumbai',
            content: 'Piyush Goyal was born in Mumbai, Maharashtra...',
            imageUrl: '/piyush.jpeg',
        },
       

        // Add more timeline items as needed
    ];

    return (
        <Box sx={{padding:4, backgroundColor:"white"}}>
            <Typography variant="h4" align="center" gutterBottom style={{ color: '#FF7043', fontWeight: 'bold', fontSize:"2.5rem" }}>
                Timeline of Minister Piyush Goyal
            </Typography>

            <TimelineContainer>
                {/* Year Navigation */}
                <YearLine>
                    <IconButton aria-label="previous" style={{ position: 'absolute', left: 0 }}>
                        <ArrowBackIosIcon style={{ color: '#FF7043' }} />
                    </IconButton>
                    {timelineData.map((item, index) => (
                        <YearButton key={index}>{item.year}</YearButton>
                    ))}
                    <IconButton aria-label="next" style={{ position: 'absolute', right: 0 }}>
                        <ArrowForwardIosIcon style={{ color: '#FF7043' }} />
                    </IconButton>
                </YearLine>

                {/* Timeline Content */}
                <Grid container spacing={4} justifyContent="center">
                    {timelineData.map((item, index) => (
                        <TimelineYear key={index}>
                            <TimelineItem {...item} />
                        </TimelineYear>
                    ))}
                </Grid>
            </TimelineContainer>
        </Box>
    );
};

export default TimelineSection;
