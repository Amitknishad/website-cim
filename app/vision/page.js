import React from 'react'
import VisionDetails from '../../components/vision/visionSection'
import { Box } from '@mui/material';
import Navbar from "@/components/piyush/Navbar";
import Header from "@/components/piyush/Header";
import Footer from '@/components/piyush/FooterSection';

const Vision = () => {
    return (
        <Box>
            <Header />
            <Navbar />
            <VisionDetails />
            <Footer />
        </Box>
    )
}

export default Vision