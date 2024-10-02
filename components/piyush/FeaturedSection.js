import React, { useRef, useState } from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent, IconButton, Container } from '@mui/material';
import { PlayArrow, Pause, Forward10, Replay5 } from '@mui/icons-material';

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

  return (
    <Box sx={{ flexGrow: 1, padding: 4, backgroundColor: "white" }}>
      <Container>
        <Grid container spacing={2}>
          {/* Left Side: Custom Video Player */}
          <Grid item xs={12} md={8}>
            <Container maxWidth="lg">
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  paddingTop: '73%', // Increase height slightly
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
                  color: '#f27c21', // Title text color set to orange
                  fontWeight: 'bold',
                }}
              >
                Mumbai Tak Chavadi LIVE: Piyush Goyal यांचं मुंबईसाठी कुठलं आहे व्हिजन? चावडीत चर्चा | BJP
              </Typography>
            </Container>
          </Grid>

          {/* Right Side: Images and Titles */}
          <Grid item xs={12} md={4}>
            <Container maxWidth="lg">
              <Box>
                <Card sx={{ mb: 2 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/piyush1.jpeg" // Replace with actual image path
                    alt="Image 1"
                  />
                  <CardContent>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#f27c21', // Adjust text color based on image
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
                    image="/piyush2.jpeg" // Replace with actual image path
                    alt="Image 2"
                  />
                  <CardContent>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#f27c21', // Adjust text color based on image
                        fontWeight: 'bold',
                      }}
                    >
                      Mumbai Tak Chavadi LIVE: Piyush Goyal यांचं मुंबईसाठी कुठलं आहे व्हिजन? चावडीत चर्चा | BJP
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
