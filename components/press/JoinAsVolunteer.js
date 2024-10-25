"use client"; // If using Next.js App Router

import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const JoinAsVolunteer = () => {
  return (
    <Box sx={{ backgroundColor: "#ff7e54", color: "white", py: 4 }}>
      <Container>
        {/* Header Text */}
        <Typography variant="body1" sx={{ mb: 1 }}>
          SIGN UP TO VOLUNTEER TODAY.
        </Typography>

        {/* Title Text */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            lineHeight: 1.3,
            fontSize: {
              xs: "24px",
              sm: "30px",
              md: "35px",
              lg: "40px",
            },
          }}
        >
          Join as a volunteer to create <br />
          positive change in society.
        </Typography>

        {/* Input Fields and Button */}
        <Grid container spacing={2} sx={{ paddingTop: 3 }}>
          {/* Name Input */}
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              sx={{ borderRadius: "5px", backgroundColor: "white" }}
            />
          </Grid>

          {/* Email Input */}
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              label="Your Email"
              variant="outlined"
              sx={{ borderRadius: "5px", backgroundColor: "white" }}
            />
          </Grid>

          {/* ZIP Code Input */}
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              label="*ZIP Code"
              variant="outlined"
              sx={{ borderRadius: "5px", backgroundColor: "white" }}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12} sm={6} md={3}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                fontWeight:'bold',
                backgroundColor: "white",
                color: "#ff7e54",
                py: 1.8,
                px: 2,
                borderRadius: "5px",
                "&:hover": {
                  backgroundColor: "#ffd4ba",
                },
              }}
            >
              Join As Volunteer
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default JoinAsVolunteer;
