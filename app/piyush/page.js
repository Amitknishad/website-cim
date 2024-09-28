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
import LatestNews from "@/components/piyush/NewsList";
import GallerySection from "@/components/piyush/GallerySections";
import Footer from "@/components/piyush/FooterSection";
import Press from "@/components/piyush/Press"
import InternationalCoverageSection from "../../components/piyush/InternationalCoverageSection";

const Home = () => {

    return (
        <Box>
            <Header />
            <Navbar />
            <CarouselComponent />
            <LatestNews />
            <Vision />
            <Achievements />
            <QuoteSection />
            {/* <JourneyBanner /> */}
            <QuickView />
            <GallerySection />
            <InternationalCoverageSection/>
            <Press/>
            <Footer />

            {/* <About /> */}
        </Box>
    )
}

export default Home;