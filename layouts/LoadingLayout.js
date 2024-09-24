"use client";
import { useState, useEffect } from 'react';
import Home from '@mui/icons-material/Home';
import PersonPin from '@mui/icons-material/PersonPin';
import { AppBar, Box, CircularProgress, Container, IconButton, Stack, Toolbar, Typography } from '@mui/material';

export default function LayoutXYZ (props) {

    console.log("Loading layout");

    const [isClient, setIsClient] = useState(false);
    useEffect( ()=> { setIsClient(true) }, [] );

    if (isClient) return (<div id="clientRoot" > { props.children } </div>);
    
    return (<Container disableGutters maxWidth={'xl'} >

        <Stack justifyContent={'center'} alignItems={'center'}
        sx={{ height : "99vh", width : '100vw' }} >
            <Box component={'img'} src='/favicon.png' 
                sx={{ width : "320px" }}
            />
        </Stack>

        {/* <AppBar position='sticky' sx={{top:0}} >
            <Toolbar variant='dense' sx={{ zIndex:0, position: 'relative', p:"4px" }} >
                <IconButton><Home sx={{color:'white'}} /> </IconButton>
                <Typography sx={{flexGrow:1}} >कार्य एवं संवाद प्रबंधन </Typography>
                <IconButton><PersonPin sx={{color:'white'}} /> </IconButton>
            </Toolbar>
        </AppBar>
        <Stack justifyContent= "center" alignItems={'center'}  
            sx={{ width: "100vw", height: "99vh" }} >            
            <CircularProgress></CircularProgress>
        </Stack> */}
    </Container>);    
}
