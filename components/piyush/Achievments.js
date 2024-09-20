import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, IconButton, Box, Collapse } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';
import TrainIcon from '@mui/icons-material/Train';
import BusinessIcon from '@mui/icons-material/Business';
import PublicIcon from '@mui/icons-material/Public';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import HeaderWithLine from './HeaderWithLine';

const achievements = [
  {
    icon: <BoltIcon fontSize="large" />,
    title: "Power & Renewable Energy Sector",
    description:
      "Electrification of Villages: As the Minister of Power, Coal, New and Renewable Energy (2014–2017), Piyush Goyal played a key role in the electrification of all Indian villages, achieving this target ahead of schedule.",
    expandedContent: `More details about achievements in the Power & Renewable Energy sector...`,
  },
  {
    icon: <TrainIcon fontSize="large" />,
    title: "Railways Transformation",
    description:
      "As the Minister of Railways (2017–2021), Goyal spearheaded the modernization of the Indian Railways, focusing on electrification, infrastructure development, and improving operational efficiency.",
    expandedContent: `More details about Railways Transformation achievements...`,
  },
  {
    icon: <BusinessIcon fontSize="large" />,
    title: "Commerce and Industry",
    description:
      "Boosting Exports: As the Minister of Commerce and Industry (2019–present), Goyal has focused on improving India's export performance and trade relations.",
    expandedContent: `More details about achievements in Commerce and Industry...`,
  },
  {
    icon: <BusinessIcon fontSize="large" />,
    title: "Environmental Conservation",
    description:
      "Goyal has promoted several green initiatives and policies aimed at sustainable development, particularly in the energy and railway sectors.",
    expandedContent: `More details about Environmental Conservation...`,
  },
  {
    icon: <PublicIcon fontSize="large" />,
    title: "Public Service and Political Leadership",
    description:
      "Goyal has been a member of the Rajya Sabha (Upper House of the Indian Parliament) since 2010 and represents the state of Maharashtra.",
    expandedContent: `More details about Public Service and Political Leadership...`,
  },
  {
    icon: <AttachMoneyIcon fontSize="large" />,
    title: "Finance and Corporate Affairs",
    description:
      "Goyal briefly held the charge of the Ministry of Finance in 2019, during which he presented an Interim Budget, announcing various social welfare measures.",
    expandedContent: `More details about Finance and Corporate Affairs...`,
  },
];

export default function Home() {
  const [expandedRow, setExpandedRow] = useState(null);

  const handleExpandClick = (index) => {
    setExpandedRow(expandedRow === index ? null : index); // Toggle expand for selected row
  };

  const handleCloseExpand = () => {
    setExpandedRow(null); // Close the expanded row
  };

  return (
    <Box sx={{ backgroundColor: "white", padding: 4 }}>
      <HeaderWithLine heading="Achievements" />

      {/* Adjusting the Grid system */}
      <Grid container spacing={2}>
        {achievements.map((item, index) => (
          <React.Fragment key={index}>
            {/* Row with 3 cards */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  borderRadius: "20px",
                  color: expandedRow === index ? '#000' : '#f27c21', // Card color changes on click
                  boxShadow: 3,
                  border: expandedRow === index ? '2px solid #f27c21' : 'none', // Highlight the clicked card
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between', // Evenly space content inside the card
                  height: '100%', // Ensures equal card height
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
                    aria-expanded={expandedRow === index}
                    aria-label="show more"
                    sx={{ color: "#f27c21" }}
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </Box>
              </Card>
            </Grid>

            {/* Expanded content - Spanning full width below the cards */}
            {(index + 1) % 3 === 0 || index === achievements.length - 1 ? (
              <Grid item xs={12} key={`expanded-${index}`}>
                <Collapse in={expandedRow !== null && expandedRow <= index && expandedRow >= index - 2} timeout="auto" unmountOnExit>
                  <Box
                    sx={{
                      padding: 2,
                      backgroundColor: "white", // Background white for expanded section
                      borderRadius: "10px",
                      boxShadow: 2,
                      marginTop: 2,
                      position: "relative",
                      maxWidth: expandedRow !== null && achievements[expandedRow].expandedContent.trim().length > 0 ? '90%' : '60%', // Adjust width dynamically
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}
                  >
                    {/* Close Button (top-right) */}
                    <IconButton
                      onClick={handleCloseExpand}
                      sx={{
                        position: 'absolute',
                        top: 4,
                        right: 4,
                        borderRadius: '50%',
                        backgroundColor: '#ff5722',
                        color: 'white',
                        width: 30,
                        height: 30,
                        boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
                      }}
                    >
                      <CloseIcon />
                    </IconButton>

                    {expandedRow !== null && expandedRow <= index && expandedRow >= index - 2 && (
                      <Typography variant="body1" sx={{ color: '#000' }}>
                        {achievements[expandedRow].expandedContent.trim().length > 0
                          ? achievements[expandedRow].expandedContent
                          : "No further details available."}
                      </Typography>
                    )}
                  </Box>
                </Collapse>
              </Grid>
            ) : null}
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
}
