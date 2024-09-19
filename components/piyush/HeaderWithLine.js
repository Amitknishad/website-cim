import { Box, Typography } from '@mui/material';
import React from 'react'
import { styled } from '@mui/system';
const HeaderWithLine = (props) => {


    // Styled Box for the orange underline
    const OrangeLine = styled('div')(({ theme }) => ({
        borderTop: '3px solid orange',
        width: '50%',
        display: 'inline-block',
        verticalAlign: 'middle',
    }));


    return (
        <Box textAlign = "start" mb = { 4} px={4} pt={4} display = "flex" alignItems = "center" >
            <Typography
                variant="h4"
                component="span"
                sx={{
                    fontWeight: 'bold',
                    marginRight: '10px',
                    color: '#f27c21',
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

    {/* Orange line */ }
    <OrangeLine />

    {/* Circle at the end */ }
    <Box
        sx={{
            width: '10px',
            height: '10px',
            backgroundColor: '#f27c21',
            borderRadius: '50%',
        }}
    />
  </Box >
  )
}

export default HeaderWithLine