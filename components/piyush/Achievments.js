// pages/index.js
import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';
import TrainIcon from '@mui/icons-material/Train';
import BusinessIcon from '@mui/icons-material/Business';
import PublicIcon from '@mui/icons-material/Public';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HeaderWithLine from './HeaderWithLine';

const achievements = [
  {
    icon: <BoltIcon fontSize="large" />,
    title: "Power & Renewable Energy Sector",
    description:
      "Electrification of Villages: As the Minister of Power, Coal, New and Renewable Energy (2014–2017), Piyush Goyal played a key role in the electrification of all Indian villages, achieving this target ahead of schedule.",
  },
  {
    icon: <TrainIcon fontSize="large" />,
    title: "Railways Transformation",
    description:
      "As the Minister of Railways (2017–2021), Goyal spearheaded the modernization of the Indian Railways, focusing on electrification, infrastructure development, and improving operational efficiency.",
  },
  {
    icon: <BusinessIcon fontSize="large" />,
    title: "Commerce and Industry",
    description:
      "Boosting Exports: As the Minister of Commerce and Industry (2019–present), Goyal has focused on improving India's export performance and trade relations.",
  },
  {
    icon: <BusinessIcon fontSize="large" />,
    title: "Environmental Conservation",
    description:
      "Goyal has promoted several green initiatives and policies aimed at sustainable development, particularly in the energy and railway sectors.",
  },
  {
    icon: <PublicIcon fontSize="large" />,
    title: "Public Service and Political Leadership",
    description:
      "Goyal has been a member of the Rajya Sabha (Upper House of the Indian Parliament) since 2010 and represents the state of Maharashtra.",
  },
  {
    icon: <AttachMoneyIcon fontSize="large" />,
    title: "Finance and Corporate Affairs",
    description:
      "Goyal briefly held the charge of the Ministry of Finance in 2019, during which he presented an Interim Budget, announcing various social welfare measures.",
  },
];

export default function Home() {
  const [expanded, setExpanded] = useState(null);

  const handleExpandClick = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <Box sx={{ backgroundColor: "white", padding: 4 }}>
      <HeaderWithLine heading="Achievements" />

      {/* Adjusting the Grid system */}
      <Grid container spacing={2} justifyContent="flex-start">
        {achievements.map((item, index) => (
          <Grid
            item
            key={index}
            xs={12}       // Full width on extra-small screens
            sm={6}        // Two cards per row on small screens
            md={4}        // Three cards per row on medium screens
            lg={4}        // Three cards per row on large screens
            sx={{
              display: 'flex',
              justifyContent: 'center', // Center card in its grid cell
            }}
          >
            <Card
              sx={{
                width: '100%',         // Ensure the card stretches to fill the grid item
                borderRadius: "20px",   // Rounded corners for the card
                color: '#f27c21',       // Font color
                display: 'flex',        // Flex layout for card content
                flexDirection: 'column',// Content direction
                justifyContent: 'space-between', // Ensure proper spacing
                boxShadow: 3,           // Box shadow for elevation effect
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <Box
                    component="span"
                    sx={{
                      backgroundColor: "#f27c21",
                      color: "white",
                      borderRadius: "0 0 20px 20px",
                      padding: "8px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: "8px",
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography variant="h6" component="div" style={{ fontWeight: 'bold' }}>
                    {item.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" style={{ fontSize: '0.875rem', color: '#f27c21' }}>
                  {item.description}
                </Typography>
              </CardContent>
              <Box display="flex" justifyContent="flex-end">
                <IconButton
                  onClick={() => handleExpandClick(index)}
                  aria-expanded={expanded === index}
                  aria-label="show more"
                  sx={{ color: "#f27c21" }}
                >
                  <ExpandMoreIcon />
                </IconButton>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
