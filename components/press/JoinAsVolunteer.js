import { Box, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const JoinAsVolunteer = () => {
    return (
        <Box sx={{ backgroundColor: '#ff7e54', color: 'white' }}>
            <Container>
                <Typography variant="body1">SIGN UP TO VOLUNTEER TODAY. </Typography>
                <Typography Varient="h4" sx={{
                    fontWeight: 'bold',
                    fontSize: {
                        xs: '24px',
                        sm: '30px',
                        md: '35px',
                        lg: '40px',
                    },
                }}>Join As a Volunteer to create <br />
                    positive change in society.

                </Typography>

                <Grid container spacing={2} >
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}></Grid>





                </Grid>
            </Container>
        </Box>
    )
}
export default JoinAsVolunteer
