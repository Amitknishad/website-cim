import React from 'react';
import { Box } from '@mui/material';
import Header from "@/components/piyush/Header";
import Navbar from "@/components/piyush/Navbar";
import Footer from "@/components/piyush/FooterSection";
import FilterBar from '../../components/myviews/FilterBar';

const myViews = () => {
  return (
    <Box>
       <Header />
       <Navbar />
       <FilterBar />
       <Footer />
    </Box>
  )
}

export default myViews