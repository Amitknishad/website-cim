"use client";

import Header from "@/components/piyush/Header";
import Navbar from "@/components/piyush/Navbar";
import CarouselComponent from "@/components/piyush/Carousel";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import About from "../about/page";
import Achievements from "@/components/piyush/Achievments";
import Vision from "@/components/piyush/Vision";



const Home = () => {

    return (
        <Box>
            <Header />
            <Navbar />
            <CarouselComponent />
            <About />
            <Achievements />
            <Vision />
        </Box>
    )
}

export default Home;