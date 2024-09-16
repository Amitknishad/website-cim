"use client";

import Header from "@/components/piyush/Header";
import Navbar from "@/components/piyush/Navbar";
import CarouselComponent from "@/components/piyush/Carousel";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";



const Home = () => {

    return (
        <Box>
            <Header />
            <Navbar />
            <CarouselComponent />
   
        </Box>
    )
}

export default Home;