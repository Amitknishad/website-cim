import { Box, Typography } from '@mui/material'
import React from 'react' 

const ContactHeading=()=>{
    return(
        <Box sx={{backgroundColor:'#fab1a0'}}>
            <Typography varient='h4' sx={{textAlign:'center',
                 padding:'50px 0 50px',
                color:'white',
                fontWeight:'bold',
                fontSize:{
                    xs:'25px',
                    sm:'30px',
                    md:'40px',
                    lg: '40px'
                }

            }}>
                Contact Us

            </Typography>
           
        </Box>
    )
}
export default ContactHeading