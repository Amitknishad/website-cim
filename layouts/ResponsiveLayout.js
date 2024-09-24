import React from 'react';
import { Box, Container, Stack } from '@mui/material';

import DesktopLayout from './DesktopLayout';
import MobileLayout from './MobileLayout';

export default function LayoutXYZ (props) {

    console.log("Responsive layout");
    const [windowWidth, setWindowWidth] = React.useState(0);

    React.useEffect( ()=> {
        setWindowWidth(window?.innerWidth);
        // if(window && window?.innerWidth>600 ) setIsDesktop(true);
    }, []);

    if(!windowWidth){
        return (<Container disableGutters maxWidth={false} >
            <Stack justifyContent={'center'} alignItems={'center'}
            sx={{ height : "99vh", width : '100vw' }} >
                <Box component={'img'} src='/favicon.png' 
                    sx={{ width : "320px" }}
                />
            </Stack>
        </Container>);    
    }

    if(windowWidth < 600) return (<MobileLayout  {...props} ></MobileLayout>);
    else return (<DesktopLayout  {...props} ></DesktopLayout>);

}