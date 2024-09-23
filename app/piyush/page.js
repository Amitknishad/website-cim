"use client";

import Header from "@/components/piyush/Header";
import Navbar from "@/components/piyush/Navbar";
import CarouselComponent from "@/components/piyush/Carousel";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import About from "../about/page";
import Achievements from "@/components/piyush/Achievments";
import Vision from "@/components/piyush/Vision";
import QuoteSection from "@/components/piyush/QuoteSection";
import JourneyBanner from "@/components/piyush/JourneyBanner";
import QuickView from "@/components/piyush/QuickView";
import LatestNews from "@/components/piyush/LatestNews";



const Home = () => {

    return (
        <Box>
            <Header />
            <Navbar />
            <CarouselComponent />
            <Vision />
            <Achievements />
            <QuoteSection />
            <JourneyBanner />
            <QuickView />
            {/* <About /> */}
            <LatestNews />
        </Box>
    )
}

export default Home;