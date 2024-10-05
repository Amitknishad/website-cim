import React, { useRef, useState } from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, IconButton, Container, styled, Link } from '@mui/material';
import { PlayArrow, Pause, Forward10, Replay5 } from '@mui/icons-material';
import UpcomingEvents from './UpcomingEvents'



export default function DynamicVideoLayout() {
  // Reference to the video element
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to toggle play/pause
  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Function to seek forward by 15 seconds
  const seekForward = () => {
    videoRef.current.currentTime += 15;
  };

  // Function to seek backward by 5 seconds
  const seekBackward = () => {
    videoRef.current.currentTime -= 5;
  };

  const OrangeLineEvents = styled('div')(({ theme }) => ({
    borderTop: '3px solid #ff7e54',
    width: '70%',
    display: 'inline-block',
    verticalAlign: 'middle',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  }));

  const eventData = [
    { title: '19th India-Australia Joint', date: '23-25 Sep 2024', description: 'Discuss enhancing trade and investment relations between the two countries.' },
    { title: 'Tech Summit 2024', date: '28-30 Oct 2024', description: 'Technology leaders from both countries to discuss digital collaboration.' },
    { title: 'Economic Forum', date: '10-12 Nov 2024', description: 'Economic leaders meet to discuss international trade policies.' },
  ];

  return (

    <Box sx={{ flexGrow: 1, padding: 4, backgroundColor: "white" }}>
      <Container>
        <Grid container spacing={2} mt={6}>
          {/* Left Side: Custom Video Player */}
          <Grid item xs={12} md={8}>
            <Container maxWidth="lg">
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  paddingTop: '67.5%', // Increase height slightly
                  overflow: 'hidden',
                }}
              >
                {/* Video */}
                <video
                  ref={videoRef}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover', // Ensure the video covers the container without distortion
                    borderRadius: '8px',
                  }}
                  controls={false} // Hide default controls
                >
                  <source src="/quickview1.mp4" type="video/mp4" /> {/* Update this with the actual video path */}
                  Your browser does not support the video tag.
                </video>

                {/* Custom controls positioned at the center of the video */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2, // Space between icons
                    backgroundColor: 'transparent', // No blur or overlay background
                    padding: '10px',
                  }}
                >
                  {/* Custom control buttons */}
                  <IconButton onClick={seekBackward} sx={{ color: 'white' }}>
                    <Replay5 fontSize="large" />
                  </IconButton>

                  <IconButton onClick={togglePlayPause} sx={{ color: 'white' }}>
                    {isPlaying ? (
                      <Pause fontSize="large" />
                    ) : (
                      <PlayArrow fontSize="large" />
                    )}
                  </IconButton>

                  <IconButton onClick={seekForward} sx={{ color: 'white' }}>
                    <Forward10 fontSize="large" />
                  </IconButton>
                </Box>
              </Box>

              {/* Video Title */}
              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  color: '#ff7e54', // Title text color set to orange
                  fontWeight: 'bold',
                }}
              >
                Mumbai Tak Chavadi LIVE: Piyush Goyal यांचं मुंबईसाठी कुठलं आहे व्हिजन? चावडीत चर्चा | BJP
              </Typography>
            </Container>
          </Grid>

          {/* Right Side: Images and Titles */}
          {/* <Grid item xs={12} md={4}>
            <Container maxWidth="lg">
              <Box>
                <Card sx={{ mb: 2 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/featured1.jpg" // Replace with actual image path
                    alt="Image 1"
                  />
                  <CardContent>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#ff7e54', // Adjust text color based on image
                        fontWeight: 'bold',
                      }}
                    >
                      Mumbai Tak Chavadi LIVE: Piyush Goyal यांचं मुंबईसाठी कुठलं आहे व्हिजन? चावडीत चर्चा | BJP
                    </Typography>
                  </CardContent>
                </Card>

                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/featured2.jpg" // Replace with actual image path
                    alt="Image 2"
                  />
                  <CardContent>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#ff7e54', // Adjust text color based on image
                        fontWeight: 'bold',
                      }}
                    >
                      Mumbai Tak Chavadi LIVE: Piyush Goyal यांचं मुंबईसाठी कुठलं आहे व्हिजन? चावडीत चर्चा | BJP
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Container>
          </Grid> */}

          {/* Right Side: Upcoming Events */}
          <Grid item xs={12} md={4}>
            <Box sx={{marginTop:'-80px', marginBottom:'20px'}}>
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
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}
