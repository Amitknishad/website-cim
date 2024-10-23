"use client"
import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';

const headerData = ['Latest News', 'International News', 'Interview', 'Mumbaikar', 'Economics', 'Development', 'Technology'];

export default function HeaderOption() {
  const [activeTab, setActiveTab] = useState('Latest News');

  return (
    <Box sx={{ backgroundColor: '#fff7f3', padding: '10px 0' }}> {/* Light peach background */}
      <Container>
        <Grid container spacing={1}>
          {headerData.map((header) => (
            <Grid item xs={6} sm={4} md={2} key={header}> {/* Adjust grid for responsiveness */}
              <Box
                onClick={() => setActiveTab(header)}
                sx={{
                  backgroundColor: activeTab === header ? '#ff8551' : '#ffece6', // Active: vibrant orange, Inactive: light peach
                  color: activeTab === header ? 'white' : '#ff8551', // Active: white text, Inactive: orange text
                  padding: '8px 16px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  display: 'inline-block',
                  transition: 'background-color 0.3s ease',
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                  {activeTab === header ? '✔ ' : ''}{header}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
