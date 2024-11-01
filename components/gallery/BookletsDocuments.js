import { Box, Container, Typography } from "@mui/material";
import React from "react";

const BookletsDocuments= (props) =>{
    const bookletMediaContent = [
        {image:'/gallery/bookleteImg1.png',title:'9 year booklete - textils',pdfURL:'/gallery/galleryBook1.pdf'}
        {image:'/gallery/bookleteImg2.png',title:'OneYearAchievement Booklete English',pdfURL:'/gallery/galleryBook2.pdf'}
        {image:'/gallery/bookleteImg3.png',title:'five-year-achievements-english',pdfURL:'/gallery/galleryBook3.pdf'}


    ]
    return(
        <Box>
           <Container>
                <Typography
                    variant="h4"
                    component="span"
                    sx={{
                        fontWeight: 'bold',
                        marginRight: '10px',
                        py: 2,
                        color: '#ff7e54',
                        fontSize: {
                            xs: '24px',  // Small screens (mobile)
                            sm: '30px',  // Medium screens (tablets)
                            md: '35px',  // Large screens (laptops)
                            lg: '40px',  // Extra-large screens (desktops)
                        },
                    }}
                >
                    {props?.heading}
                </Typography>

                
                </Container>
        </Box>
    )
       
    
}
export default BookletsDocuments