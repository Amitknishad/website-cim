import { Box, Typography } from '@mui/material'
import React from 'react' 

const ContactHeading=()=>{
    return(
        <Box sx={{backgroundColor:'#fab1a0'}}>
            <Typography varient='h4' sx={{textAlign:'center',
                 padding:'65px 0 65px',
                color:'white',
                fontWeight:'bold',
                fontSize:{
                    xs:'35px',
                    sm:'40px',
                    md:'50px',
                    lg: '60px'
                }

            }}>
                Contact Us

            </Typography>
           
        </Box>
    )
}
export default ContactHeading