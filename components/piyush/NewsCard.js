// components/NewsCard.js
import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';

const NewsCard = ({ title, date, image, description }) => {
  return (
    <Card 
      sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },  // Stacks vertically on small screens, horizontally on larger ones
        marginBottom: 2, 
        backgroundColor: '#FFE8E8',
      }}
    >
      <CardMedia
        component="img"
        sx={{ 
          width: { xs: '100%', md: 151 },  // Image width is 100% on small screens, fixed on larger ones
          height: { xs: 200, md: 'auto' },  // Define height on small screens for better responsiveness
        }}
        image={image}
        alt="news image"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
        <CardContent>
          <Typography variant="h6" component="div" sx={{fontWeight:"bold"}}>
            {title}
          </Typography>
          <Typography variant="body2" color="#383838">
            {description}
          </Typography>
          <Typography variant="caption" color="text.secondary" display="flex" alignItems="center" justifyContent="space-between">
            <Typography component="span" backgroundColor="red" borderRadius="2px" px={0.5} color="white">
              New
            </Typography>
            {date}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default NewsCard;
