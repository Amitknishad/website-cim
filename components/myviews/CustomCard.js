"use client";
import React, { useState } from 'react';
import { Container, Grid, Typography, Pagination, Box, Button, Card, CardContent, CardMedia } from '@mui/material';



const CustomCard = (props) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 9; // Number of items per page
  const totalPages = Math.ceil(props?.cardData.length / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  // Paginate the articles based on the current page
  const paginatedArticles = props?.cardData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box sx={{ backgroundColor: "white", padding: 4 }}>
      <Container>
        <Typography
          variant="h4"
          component="span"
          sx={{
            fontWeight: 'bold',
            marginRight: '10px',
            py:2,
            color: '#ff7e54',
            fontSize: {
              xs: '24px',  // Small screens (mobile)
              sm: '30px',  // Medium screens (tablets)
              md: '35px',  // Large screens (laptops)
              lg: '40px',  // Extra-large screens (desktops)
            },
          }}

        >
        {props?.heading}
        </Typography>

        {/* Articles Grid */}
        <Grid container spacing={3} sx={{marginTop:'15px'}}>
          {paginatedArticles.map((article) => (
            <Grid item xs={12} sm={6} md={4} key={article.id}>
              <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                {/* Article Image */}
                <CardMedia
                  component="img"
                  image={article.image}
                  alt={article.title}
                  sx={{ height: 200, objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  {/* Article Details */}
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    {article.date} - {article.time}
                  </Typography>
                  <Typography variant="h6" sx={{ marginY: 1, fontWeight: "bold" }}>
                    {article.title}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {article.description}
                  </Typography>
                  <Button variant="text" sx={{ textTransform: "none", color: "#f27c21" }}>
                    Read More &gt;
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Pagination Control */}
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChange}
          color="primary"
          sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
        />
      </Container>
    </Box>
  );
};

export default CustomCard;
