import { useState, useRef } from 'react';
import { Box, Tabs, Tab, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'; // For images in next.js

// Dummy data
const videoData = [
  {
    title: "My 100-day report card for North Mumbai #100DaysOfModi3",
    date: "September 17, 2024",
    duration: "03:04",
    image: "/static/video-thumbnail1.jpg",
    videoUrl: "https://www.youtube.com/embed/-y5KcWXpdKE?si=MI_oQtuOnvSCYvax"
  },
  {
    title: "My 100-day report card for North Mumbai #100DaysOfModi3",
    date: "September 17, 2024",
    duration: "03:04",
    image: "/static/video-thumbnail1.jpg",
    videoUrl: "https://www.youtube.com/embed/-y5KcWXpdKE?si=MI_oQtuOnvSCYvax"
  },
  {
    title: "My 100-day report card for North Mumbai #100DaysOfModi3",
    date: "September 17, 2024",
    duration: "03:04",
    image: "/static/video-thumbnail1.jpg",
    videoUrl: "https://www.youtube.com/embed/-y5KcWXpdKE?si=MI_oQtuOnvSCYvax"
  },
  {
    title: "My 100-day report card for North Mumbai #100DaysOfModi3",
    date: "September 17, 2024",
    duration: "03:04",
    image: "/static/video-thumbnail1.jpg",
    videoUrl: "https://www.youtube.com/embed/-y5KcWXpdKE?si=MI_oQtuOnvSCYvax"
  },
  {
    title: "My 100-day report card for North Mumbai #100DaysOfModi3",
    date: "September 17, 2024",
    duration: "03:04",
    image: "/static/video-thumbnail1.jpg",
    videoUrl: "https://www.youtube.com/embed/-y5KcWXpdKE?si=MI_oQtuOnvSCYvax"
  },
  {
    title: "My 100-day report card for North Mumbai #100DaysOfModi3",
    date: "September 17, 2024",
    duration: "03:04",
    image: "/static/video-thumbnail1.jpg",
    videoUrl: "https://www.youtube.com/embed/-y5KcWXpdKE?si=MI_oQtuOnvSCYvax"
  },
  // more data...
];
const imageData = [
  { title: "Dummy Image 1", date: "September 17, 2024", imageUrl: "/piyush1.jpeg" },
  { title: "Dummy Image 1", date: "September 17, 2024", imageUrl: "/piyush1.jpeg" },
  { title: "Dummy Image 1", date: "September 17, 2024", imageUrl: "/piyush1.jpeg" },
  { title: "Dummy Image 1", date: "September 17, 2024", imageUrl: "/piyush1.jpeg" },
  { title: "Dummy Image 1", date: "September 17, 2024", imageUrl: "/piyush1.jpeg" },
  { title: "Dummy Image 1", date: "September 17, 2024", imageUrl: "/piyush1.jpeg" },

  // more data...
];
const liveData = [
  {
    title: "Live Stream 1",
    date: "September 19, 2024",
    imageUrl: "/static/live-thumbnail1.jpg",
    liveUrl: "https://www.youtube.com/embed/live_stream?channel=UC8butISFwT-Wl7EV0hUK0BQ"
  },
  // more data...
];

export default function GallerySection() {
  const [tabValue, setTabValue] = useState(0);
  const [playingVideoIndex, setPlayingVideoIndex] = useState(null); // To track playing video iframe index
  const iframeRefs = useRef([]); // Track iframe refs to stop them

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    stopAllVideos();
  };

  const getDataForTab = () => {
    if (tabValue === 0) return videoData;
    if (tabValue === 1) return imageData;
    if (tabValue === 2) return liveData;
    return [];
  };

  const stopAllVideos = () => {
    // Stop all iframe videos
    iframeRefs.current.forEach((iframe) => {
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      }
    });
    setPlayingVideoIndex(null);
  };

  const handleVideoPlay = (index) => {
    if (playingVideoIndex !== index) {
      stopAllVideos(); // Stop the previous video before playing a new one
      setPlayingVideoIndex(index);
    }
  };

  const currentData = getDataForTab();
  const mainItem = currentData[0];
  const restItems = currentData.slice(1);

  // Slider settings for react-slick
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // Show 3 items
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    adaptiveHeight: false // Disable adaptive height to fix the height issue
  };

  const renderCardMedia = (item, index, isMain = false) => {
    if (tabValue === 0 || tabValue === 2) {
      const url = tabValue === 0 ? item.videoUrl : item.liveUrl;
      return (
        <CardMedia
          component="iframe"
          src={url}
          title={item.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          sx={{ height: isMain ? 400 : 120 }} // Control height for main vs. right-side video
          ref={(el) => {
            if (el) iframeRefs.current[index] = el;
          }}
          onLoad={() => handleVideoPlay(index)}
        />
      );
    } else if (tabValue === 1) {
      // Handle Images
      return (
        <Box sx={{ position: "relative", height: isMain ? 400 : 120, width: "100%" }}>
          <Image
            src={item.imageUrl}
            alt={item.title}
            layout="fill"
            objectFit="cover" // Change from "cover" to "contain" to fit the image inside the container
          />
        </Box>
      );
    }
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
            fontSize: { xs: '24px', sm: '30px', md: '35px', lg: '40px' },
          }}
        >
          Gallery Sections
        </Typography>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="Videos" sx={{
            border: "1px solid #f27c21",
            backgroundColor: tabValue === 0 ? '#f27c21' : 'white',
            color: tabValue === 0 ? 'white' : '#f27c21',
            '&.Mui-selected': {
              backgroundColor: '#f27c21',  // Ensures the background color is orange when selected
              color: 'white'  // Ensures the text color is white when selected
            }
          }} />
          <Tab label="Images" sx={{
            border: "1px solid #f27c21",
            backgroundColor: tabValue === 1 ? '#f27c21' : 'white',
            color: tabValue === 1 ? 'white' : '#f27c21',
            '&.Mui-selected': {
              backgroundColor: '#f27c21',  // Ensures the background color is orange when selected
              color: 'white'  // Ensures the text color is white when selected
            }
          }} />
          <Tab label="Live" sx={{
            border: "1px solid #f27c21",
            backgroundColor: tabValue === 2 ? '#f27c21' : 'white',
            color: tabValue === 2 ? 'white' : '#f27c21',
            '&.Mui-selected': {
              backgroundColor: '#f27c21',  // Ensures the background color is orange when selected
              color: 'white'  // Ensures the text color is white when selected
            }
          }} />
        </Tabs>
      </Box>

      {/* Gallery Content */}
      <Box mt={3}>
        {currentData.length > 0 && (
          <Grid container spacing={3}>
            {/* Main item (left side) */}
            <Grid item xs={12} md={8}>
              <Card sx={{ width: "100%", height: "auto" }}> {/* Adjust width and height to fit the container */}
                {renderCardMedia(mainItem, 0, true)}
                <CardContent>
                  <Typography variant="body1" color="textSecondary">
                    {mainItem.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Right section with vertical slick slider */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  maxHeight: 400,
                  display: 'flex',  // Ensure content remains in column layout
                  flexDirection: 'column',
                  minHeight: 400,   // Set a minimum height to prevent layout shift
                  '& .slick-track': { // Ensure the slick slider's inner elements also respect vertical layout
                    display: 'flex',
                    flexDirection: 'column'
                  }
                }}
              >
                <Slider key={tabValue} {...sliderSettings}>
                  {restItems.map((item, index) => (
                    <Card key={index + 1} sx={{ mb: 2 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          {renderCardMedia(item, index + 1)}
                        </Grid>
                        <Grid item xs={6}>
                          <CardContent>
                            <Typography variant="body2" color="textSecondary">
                              {item.date}
                            </Typography>
                            <Typography variant="subtitle2">{item.title}</Typography>
                          </CardContent>
                        </Grid>
                      </Grid>
                    </Card>
                  ))}
                </Slider>
                <Typography variant="body2" color="#f27c21" align="right" sx={{ mt: 2, textDecoration: "underline", pb:4 }}>
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
