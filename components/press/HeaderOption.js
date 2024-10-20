import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const headerData = ['Latest News', 'International News', 'Interview', 'Mumbaikar', 'Economics', 'Development', 'Technology' ]

export default function HeaderOption() {
  return (
    <Box sx={{backgroundColor:'white'}}>
        <Container>
            <Grid container spacing={2}>
                {headerData.map((header)=>(
                    <Grid item xs={4} sm={3} md={2}> 
                    <Typography variant='h4'>
                        {header}
                    </Typography>

                    </Grid>
                ))}

            </Grid>

        </Container>
    </Box>
  )
}
