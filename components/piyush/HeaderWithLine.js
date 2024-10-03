import { Box, Typography } from '@mui/material';
import React from 'react'
import { styled } from '@mui/system';
const HeaderWithLine = (props) => {


    // Styled Box for the orange underline
    const widthArea=props?.widthArea || '50%';
    const OrangeLine = styled('div')(({ theme }) => ({
        borderTop: '3px solid #ff7e54',
        width: widthArea,
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

    {/* Orange line */ }
    <OrangeLine />

    {/* Circle at the end */ }
    <Box
        sx={{
            width: '10px',
            height: '10px',
            backgroundColor: '#ff7e54',
            borderRadius: '50%',
        }}
    />
  </Box >
  )
}

export default HeaderWithLine