// components/UpcomingEvents.js
import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

const UpcomingEvents = ({ events }) => {
    return (
        <Box sx={{ paddingLeft: 2 }}>
            {events.map((event, index) => (
                <Card key={index} sx={{ marginBottom: 2, backgroundColor: '#f27c21', borderRadius: 2, p: 1 }}>
                    <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', alignItems:"center", gap:"20px" }}>
                            <Typography variant="body2" color="#f27c21" sx={{ fontWeight: 'bold', paddingLeft: '10px', backgroundColor:"white", p:1, borderRadius:"0 0 15px 15px", textAlign:"center" }}>
                                {event.date}
                            </Typography>
                            <Typography component="span" color="white" sx={{ fontWeight: 'bold' }}>
                                {event.title}
                            </Typography>
                        </Box>
                        <Typography variant="body2" color="white" mt={1}>
                            {event.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default UpcomingEvents;
