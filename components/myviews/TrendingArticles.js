"use client";
import React, { useState } from 'react';
import { Container, Grid, Typography, Pagination, Box } from '@mui/material';

const articlesData = [
  { id: 1, title: 'Piyush Goyal on LinkedIn: In my post budget interview...', date: '08/03/2024', time: '5:30am', image: '/piyush.jpeg' },
  { id: 2, title: 'Budget Highlights: Understanding the key changes...', date: '08/03/2024', time: '6:00am', image: '/piyush.jpeg' },
  { id: 3, title: 'Trade Negotiations: India\'s next steps in global trade...', date: '08/03/2024', time: '6:30am', image: '/piyush.jpeg' },
  { id: 4, title: 'Key Takeaways from the Budget Presentation...', date: '08/03/2024', time: '7:00am', image: '/piyush.jpeg' },
  { id: 5, title: 'Growth and Sustainability: Focus of the Budget...', date: '08/03/2024', time: '7:30am', image: '/piyush.jpeg'},
  { id: 6, title: 'Sector-wise breakdown of the Budget Allocation...', date: '08/03/2024', time: '8:00am', image: '/piyush.jpeg'},
  { id: 7, title: 'Healthcare and Education: Key budgetary changes...', date: '08/03/2024', time: '8:30am', image: '/piyush.jpeg'},
  { id: 8, title: 'Financial Inclusion in the latest Budget...', date: '08/03/2024', time: '9:00am', image: '/piyush.jpeg'},
  {id: 9, title: 'Boost for MSMEs: Budget insights...', date: '08/03/2024', time: '9:30am', image: '/piyush.jpeg'},
  { id: 10, title: 'Post-Budget Industry Reactions...', date: '08/03/2024', time: '10:00am', image: '/piyush.jpeg'},
  { id: 11, title: 'Infrastructure Investment: A closer look at Budget allocations...', date: '08/03/2024', time: '10:30am', image: '/piyush.jpeg'},
  { id: 12, title: 'Digital India: Key steps forward from the Budget...', date: '08/03/2024', time: '11:00am', image: '/piyush.jpeg'},
];

const TrendingArticles = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 9; // Number of items per page
  const totalPages = Math.ceil(articlesData.length / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  // Paginate the articles based on the current page
  const paginatedArticles = articlesData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box sx={{ backgroundColor: "white", padding: 4 }}>
      <Container>
        <Typography variant="h4" gutterBottom style={{ color: '#ff5722' }}>
          Top Trending Articles
        </Typography>

        {/* Articles Grid */}
        <Grid container spacing={3}>
          {paginatedArticles.map((article) => (
            <Grid item xs={12} sm={6} md={4} key={article.id}>
              <Box sx={{ textAlign: 'left' }}>
                {/* Article Image */}
                <img
                  src={article.image}
                  alt={article.title}
                  style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                />
                {/* Article Details */}
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {article.date} - {article.time}
                </Typography>
                <Typography variant="h6" component="h2" gutterBottom>
                  {article.title}
                </Typography>
              </Box>
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

export default TrendingArticles;
