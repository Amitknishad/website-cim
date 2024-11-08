import ContactHeading from "@/components/contact/ContactHeading";
import ContactForm from "@/components/contact/ContactForm";

import Footer from "@/components/piyush/FooterSection";
import Header from "@/components/piyush/Header";
import Navbar from "@/components/piyush/Navbar";
import { Box } from "@mui/material";
import React from "react";
import SignUpNewsLetter from "@/components/contact/SignUpNewsLetter";

const ContactUs=()=>{
    return(
      <Box>
          <Header/>
          <Navbar/>
          <ContactHeading/>
          <ContactForm/>
          <SignUpNewsLetter/>
          <Footer/>
      </Box>


    )
}
export default ContactUs