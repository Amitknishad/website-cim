import React from 'react';
import { Box } from '@mui/material';
import Header from "@/components/piyush/Header";
import Navbar from "@/components/piyush/Navbar";
import Footer from "@/components/piyush/FooterSection";
import FilterBar from '@/components/myviews/FilterBar';
import TrendingArticles from "@/components/myviews/TrendingArticles";

const myViews = () => {
  return (
    <Box>
      <Header />
      <Navbar />
      <FilterBar />
      <TrendingArticles />
      <Footer />
    </Box>
  )
}

export default myViews