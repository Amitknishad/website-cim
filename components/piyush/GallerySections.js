// pages/index.js
import { useState } from 'react';
import { Box, Tabs, Tab, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dummy data for Videos, Images, and Live streams
const videoData = [
  {
    title: "My 100-day report card for North Mumbai #100DaysOfModi3",
    date: "September 17, 2024",
    duration: "03:04",
    image: "/static/video-thumbnail1.jpg",
    videoUrl: "https://www.youtube.com/embed/-y5KcWXpdKE?si=MI_oQtuOnvSCYvax"
  },
  {
    title: "Asian Champions 2024: हर देशवासी...",
    date: "September 17, 2024",
    duration: "00:13",
    image: "/static/video-thumbnail2.jpg",
    videoUrl: "https://www.youtube.com/embed/live_stream?channel=UC8butISFwT-Wl7EV0hUK0BQ"
  },
  {
    title: "My 100-day report card for North Mumbai #100DaysOfModi3",
    date: "September 17, 2024",
    duration: "03:04",
    image: "/static/video-thumbnail1.jpg",
    videoUrl: "https://www.youtube.com/embed/-y5KcWXpdKE?si=MI_oQtuOnvSCYvax"
  },
  {
    title: "Asian Champions 2024: हर देशवासी...",
    date: "September 17, 2024",
    duration: "00:13",
    image: "/static/video-thumbnail2.jpg",
    videoUrl: "https://www.youtube.com/embed/live_stream?channel=UC8butISFwT-Wl7EV0hUK0BQ"
  },
  // Add more video data here
];

const imageData = [
  {
    title: "Dummy Image 1",
    date: "September 17, 2024",
    imageUrl: "/static/dummy-image1.jpg",
  },
  {
    title: "Dummy Image 2",
    date: "September 18, 2024",
    imageUrl: "/static/dummy-image2.jpg",
  },
  // Add more image data here
];

const liveData = [
  {
    title: "Live Stream 1",
    date: "September 19, 2024",
    imageUrl: "/static/live-thumbnail1.jpg",
    liveUrl: "https://www.youtube.com/embed/live_stream?channel=UC8butISFwT-Wl7EV0hUK0BQ"
  },
  {
    title: "Live Stream 2",
    date: "September 20, 2024",
    imageUrl: "/static/live-thumbnail2.jpg",
    liveUrl: "https://www.youtube.com/embed/live_stream?channel=UC8butISFwT-Wl7EV0hUK0BQ"
  },
  // Add more live data here
];

export default function GallerySection() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const getDataForTab = () => {
    if (tabValue === 0) return videoData;
    if (tabValue === 1) return imageData;
    if (tabValue === 2) return liveData;
    return [];
  };

  const currentData = getDataForTab();
  const mainItem = currentData[0];
  const restItems = currentData.slice(1);

  // Slider settings for react-slick
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <Box sx={{ backgroundColor: "white", p: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h4"
          align="center"
          color="primary"
          component="span"
          sx={{
            fontWeight: 'bold',
            marginRight: '10px',
            color: '#f27c21',
            fontSize: {
              xs: '24px',
              sm: '30px',
              md: '35px',
              lg: '40px',
            },
          }}
        >
          Gallery Sections
        </Typography>
        <Tabs value={tabValue} onChange={handleTabChange} centered sx={{ pr: 2 }}>
          <Tab label="Videos" />
          <Tab label="Images" />
          <Tab label="Live" />
        </Tabs>
      </Box>

      {/* Gallery Content */}
      <Box mt={3}>
        {currentData.length > 0 && (
          <Grid container spacing={3}>
            {/* Main item section */}
            <Grid item xs={12} md={8}>
              <Card>
                {tabValue === 0 && (
                  <CardMedia
                    component="iframe"
                    src={mainItem.videoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    sx={{ height: 400 }}
                  />
                )}
                {tabValue === 1 && (
                  <CardMedia
                    component="img"
                    image={mainItem.imageUrl}
                    title="Main Image"
                    sx={{ height: 400 }}
                  />
                )}
                {tabValue === 2 && (
                  <CardMedia
                    component="iframe"
                    src={mainItem.liveUrl}
                    title="Live video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    sx={{ height: 400 }}
                  />
                )}
                <CardContent>
                  <Typography variant="body1" color="textSecondary">
                    {mainItem.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Right section with vertical scrolling */}
            <Grid item xs={12} md={4}>
              <Box sx={{ maxHeight: 400, overflow: 'hidden' }}>
                <Slider {...sliderSettings}>
                  {restItems.map((item, index) => (
                    <Card key={index} sx={{ mb: 2 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <CardMedia
                            component="img"
                            image={item.imageUrl || item.image}
                            alt={item.title}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <CardContent>
                            <Typography variant="body2" color="textSecondary">{item.date}</Typography>
                            <Typography variant="subtitle2">{item.title}</Typography>
                          </CardContent>
                        </Grid>
                      </Grid>
                    </Card>
                  ))}
                </Slider>
                {/* More View */}
                <Typography variant="body2" color="primary" align="right" sx={{ mt: 2 }}>
                  More View
                </Typography>
              </Box>
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
}
