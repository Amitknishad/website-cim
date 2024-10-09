import React from 'react'
import VisionDetails from '../../components/vision/visionSection'
import { Box } from '@mui/material';
import Navbar from "@/components/piyush/Navbar";
import Header from "@/components/piyush/Header";

const Vision = () => {
    return (
        <Box>
            <Header />
            <Navbar />
            <VisionDetails />
        </Box>
    )
}

export default Vision