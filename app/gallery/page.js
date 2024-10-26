import React from "react";

import Header from "../../components/piyush/Header"
import Navbar from "../../components/piyush/Navbar"
import FilterBar from "../../components/myviews/FilterBar"

import FooterSection from "../../components/piyush/FooterSection"
import HeaderOption from "../../components/press/HeaderOption"
import { Box } from "@mui/material";
import VideoCard from "../../components/gallery/VideoCard";

const Gallery = () =>{
    return(
       <Box>
       <Header/>
       <Navbar/>
       <FilterBar/>
       <HeaderOption/>
        
        <VideoCard/>
        <FooterSection/>
       </Box>

    )
}
export default Gallery