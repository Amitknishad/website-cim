import React from "react";

import Header from "../../components/piyush/Header"
import Navbar from "../../components/piyush/Navbar"
import FilterBar from "../../components/myviews/FilterBar"

import FooterSection from "../../components/piyush/FooterSection"
import HeaderOption from "../../components/press/HeaderOption"
import { Box } from "@mui/material";
import VideoCard from "../../components/gallery/VideoCard";
import ImageCard from "@/components/myviews/ImageCard";

const Gallery = () =>{
    const imageData = ['/gallery/galleryImg1.jpg', '/gallery/galleryImg2.jpeg', '/gallery/galleryImg3.jpeg', '/gallery/galleryImg4.avif', '/gallery/galleryImg5.jpeg', '/gallery/galleryImg7.avif',
        '/gallery/galleryImg8.jpg', '/gallery/galleryImg9.png', '/gallery/galleryImg10.png', '/gallery/galleryImg11.avif', '/gallery/galleryImg12.jpeg', '/gallery/galleryImg13.jpg','/gallery/galleryImg14.jpg',
        '/gallery/galleryImg15.avif','/gallery/galleryImg16.png','/gallery/galleryImg17.png','/gallery/galleryImg19.png','/gallery/galleryImg20.jpeg','/gallery/galleryImg21.png','/gallery/galleryImg22.png',




        
      ]
      
    return(
       <Box>
       <Header/>
       <Navbar/>
       <FilterBar/>
       <HeaderOption/>
        
        <VideoCard/>
        <ImageCard imageData={imageData} heading='Images'/>
        <FooterSection/>
       </Box>

    )
}
export default Gallery