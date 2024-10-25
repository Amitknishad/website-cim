import { Box, Grid, Typography, Container, Button } from "@mui/material";
import React from "react";

// EventCard Component for reusability
const EventCard = ({ date, month, year, title, description }) => (
  <Grid container spacing={2} sx={{ mb: 4 }}>
    <Grid item xs={12} sm={4} md={3} sx={{ backgroundColor: '#FFE8E8', color: '#ff7e54', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: '26px' }}>{date}</Typography>
      <Typography variant="body1">{month} {year}</Typography>
    </Grid>

    <Grid item xs={12} sm={8} md={9} sx={{ backgroundColor: '#ff7e54', color: 'white', p: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: '26px', mb: 2 }}>{title}</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography sx={{ width: '70%' }}>
          {description}
        </Typography>
        <Button sx={{ backgroundColor: 'white', color: '#ff7e54', width: '20%', textTransform: 'none' }}>
          Read More
        </Button>
      </Box>
    </Grid>
  </Grid>
);

// Main Component
const PressUpcomingEvent = ({ events }) => {
  return (
    <Box sx={{ backgroundColor: 'white', pt: 8, pb: '100px' }}>
      <Typography
        variant='h4'
        sx={{
          fontWeight: 'bold',
          color: '#ff7e54',
          textAlign: 'center',
          mb: 5,
          fontSize: {
            xs: '24px',
            sm: '30px',
            md: '35px',
            lg: '40px',
          },
        }}
      >
        Our Upcoming Events
      </Typography>

      <Container>
        {events.map((event, index) => (
          <EventCard
            key={index}
            date={event.date}
            month={event.month}
            year={event.year}
            title={event.title}
            description={event.description}
          />
        ))}
      </Container>
    </Box>
  );
};

// Sample data to pass into the component
const eventsData = [
  {
    date: '15-19',
    month: 'August',
    year: 2024,
    title: 'Human Rights Conference',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    date: '11-13',
    month: 'September',
    year: 2024,
    title: 'Economic Development',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    date: '25-26',
    month: 'October',
    year: 2024,
    title: 'Affordable, Quality Health Care',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
];

// Example of rendering component with dynamic events data
export default function DynamicPressUpcomingEvent() {
  return <PressUpcomingEvent events={eventsData} />;
}
