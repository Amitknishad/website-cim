// pages/index.js
import { useState } from 'react';
import { Container, Box, Tabs, Tab, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

export default function GallerySection() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{backgroundColor:"white"}}>
      <Box>
        <Typography variant="h4" align="center" color="primary">Gallery Sections</Typography>
      </Box>

      {/* Tabs for Videos, Images, Live */}
      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <Tab label="Videos" />
        <Tab label="Images" />
        <Tab label="Live" />
      </Tabs>

      {/* Gallery Content */}
      <Box mt={3}>
        {/* Only show content when the "Videos" tab is selected */}
        {tabValue === 0 && (
          <Grid container spacing={3}>
            {/* Main video section */}
            <Grid item xs={12} md={8}>
              <Card>
                <CardMedia
                  component="iframe"
                  src="https://www.youtube.com/embed/your-video-id"
                  title="Main Video"
                  sx={{ height: 400 }}
                />
                <CardContent>
                  <Typography variant="body1" color="textSecondary">
                    आज विधि अनुसार बप्पा हमसे विदा जरूर ले रहे हैं लेकिन उनके आशीर्वाद से..
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Video List Section */}
            <Grid item xs={12} md={4}>
              {/* First Video Item */}
              <Card sx={{ mb: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <CardMedia
                      component="img"
                      image="/static/video-thumbnail1.jpg" // Use proper image URL
                      alt="Video 1"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <CardContent>
                      <Typography variant="body2" color="textSecondary">September 17, 2024</Typography>
                      <Typography variant="subtitle2">My 100-day report card for North Mumbai #100DaysOfModi3</Typography>
                      <Typography variant="caption">03:04</Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>

              {/* Second Video Item */}
              <Card sx={{ mb: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <CardMedia
                      component="img"
                      image="/static/video-thumbnail2.jpg" // Use proper image URL
                      alt="Video 2"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <CardContent>
                      <Typography variant="body2" color="textSecondary">September 17, 2024</Typography>
                      <Typography variant="subtitle2">Asian Champions 2024: हर देशवासी...</Typography>
                      <Typography variant="caption">00:13</Typography>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>

              {/* More Videos */}
              <Typography variant="body2" color="primary" align="right">
                More View
              </Typography>
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
}
