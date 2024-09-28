import React from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { Box, Typography, useMediaQuery } from '@mui/material';


const JoinCards = () => {

    const cardData = [
        {
            title: 'Join as Member',
            description: 'Become a member and help shape a better future together.',
            icon: <PersonAddIcon sx={{ fontSize: '50px', color: '#ff6f00' }} />,
            textColor: '#ff6f00',
        },
        {
            title: 'Join as Volunteer',
            description: 'Join as a volunteer to create positive change in society.',
            icon: <VolunteerActivismIcon sx={{ fontSize: '50px', color: '#ff6f00' }} />,
            textColor: '#ff6f00',
        },
        {
            title: 'Share Your Idea',
            description: 'Share your idea and contribute to meaningful change in the community.',
            icon: <LightbulbIcon sx={{ fontSize: '50px', color: '#ff6f00' }} />,
            textColor: '#ff6f00',
        },
    ];


    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                position: 'relative',
                zIndex: 2,
                flexDirection: isMobile ? 'column' : 'row',
                padding: isMobile ? '20px 0' : '30px 30px',
                backgroundColor: "white"
            }}
            
        >
            {cardData.map((card, index) => (
                <Box
                    key={index}
                    sx={{
                        width: isMobile ? '80%' : '30%',
                        minHeight: '250px',
                        padding: '20px',
                        textAlign: 'center',
                        borderRadius: '10px',
                        boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                        backgroundColor: '#fff',
                        margin: isMobile ? '10px 0' : '0',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        '&:hover': {
                            boxShadow: '0px 6px 15px rgba(0,0,0,0.15)',
                        },
                    }}
                >
                    {/* Icon */}
                    <Box
                        sx={{
                            width: '80px',
                            height: '80px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: card.backgroundColor,
                            borderRadius: '50%',
                            marginBottom: '10px',
                        }}
                    >
                        {card.icon}
                    </Box>
                    {/* Title */}
                    <Typography
                        variant="h6"
                        sx={{
                            marginTop: '10px',
                            color: card.textColor,
                            fontWeight: 'bold',
                        }}
                    >
                        {card.title}
                    </Typography>
                    {/* Description */}
                    <Typography
                        sx={{
                            color: '#f27c21',
                            marginTop: '10px',
                        }}
                    >
                        {card.description}
                    </Typography>
                </Box>
            ))}
        </Box>
    )
}

export default JoinCards