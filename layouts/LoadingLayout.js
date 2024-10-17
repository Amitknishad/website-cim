"use client";
// https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Home from '@mui/icons-material/Home';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { colorPrimary } from '@/styles/colors';
import { AppBar, Box, CircularProgress, Container, IconButton, Stack, Toolbar, Typography } from '@mui/material';

export default function LayoutXYZ (props) {

    const router = useRouter();
    let pageTitle = props?.pageTitle || "कॉल सूचि";
    
    const [isClient, setIsClient] = useState(false);
    useEffect( ()=> { setIsClient(true) }, []);

    return (<Container disableGutters maxWidth={'md'} sx={{ height: '99.99vh' }} >
        <AppBar elevation={0} style={{ position: 'fixed', top:0, background : colorPrimary[500], zIndex:2 }}  >
            <Toolbar variant='dense' sx={{ zIndex:0, position: 'relative', p:"4px" }} >
                <IconButton onClick={ ()=> router.back() } ><ArrowBack sx={{color:'white'}} /> </IconButton>
                <Typography sx={{flexGrow:1}} >{pageTitle}</Typography>
                <IconButton onClick={ ()=> router.push('/home') } ><Home sx={{color:'white'}} /> </IconButton>
            </Toolbar>
        </AppBar>

        { isClient ? ( <Box sx={{ minHeight: "92vh" }} >{ props.children }</Box> ) : (<Stack justifyContent= "center" alignItems={'center'}  
            sx={{ width: "100vw", minHeight: "92vh" }} >            
            <CircularProgress></CircularProgress>
        </Stack>) }

    </Container>);    
}
