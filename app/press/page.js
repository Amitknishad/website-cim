import { Box } from "@mui/material";
import React from "react";
import HeaderOption from "../../components/press/HeaderOption";
import Header from "../../components/piyush/Header";
import Navbar from "../../components/piyush/Navbar"
import FooterSection from "../../components/piyush/FooterSection"

const Press = () => {
    return(
        <Box>
            <Header/>
            <Navbar/>
            
            <HeaderOption/>
            <FooterSection/>
            
        </Box>
    )

}
export default Press