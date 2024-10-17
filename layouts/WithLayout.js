"use client";
import React from 'react';
// https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';

import { ExitToApp, PhoneForwarded } from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';

import LoadingLayout from './LoadingLayout';
import LoginComponent from '../components/LoginComponent';
import { useFirebaseAuthState } from '../lib/useFirebaseAuthState';
import { useFetchWrapper } from '../hooks/useFetchWrapper';

export default function LayoutXYZ (props) {

    let BrowserComponent = (props) => {
        
        const [isLoggedIn, setIsLoggedIn] = React.useState(false);
        const { authState, fireLogout, fetchIdToken } = useFirebaseAuthState();
        const fetchWrapper = useFetchWrapper();

        React.useEffect( ()=> {
            if(authState && authState?.uid ) fetchPageData();            
        }, [authState]);

        const fetchPageData = async() => {
            try {
                // console.log(`fetchPageData => authState?.uid : ${authState?.uid}`); // XpmFVFOAvBdSSWQCIHchUI1C5c03
                let idToken = authState?.phoneNumber;  // await fetchIdToken(false);
                // console.log(`fetchPageData => idToken : ${idToken}`);
                let apiRes = await fetchWrapper.post( '/api/cookies?path=user/info', { cookieName: 'phoneNumber', cookieValue: idToken } );
                // console.log(`fetchPageData => apiRes : ${JSON.stringify(apiRes)}`);
                // if(apiRes && apiRes?.status && apiRes?.status == 'Success' ) setIsLoggedIn(true);
                if(apiRes && apiRes?.response && apiRes?.response && apiRes?.response?.A_FIELD && apiRes?.response?.A_FIELD?.length > 5 ) setIsLoggedIn(true);
            } catch (error) {
                console.log(`fetchPageData => error : ${ error?.message}`);
            }
        }
        
        if( authState == null ) return (<></>);

        if(authState && !authState?.uid  ) return(<Box> <div id="sign-in-button" hidden ></div>
            <LoginComponent setIsLoggedIn={setIsLoggedIn} />
        </Box>);

        if(!isLoggedIn) return ( <Stack alignItems={'center'} spacing={4}  sx={{py:8}} > 
            
            <Typography
              sx={{ whiteSpace:'pre-line', textAlign: 'center', fontSize: "16px", fontWeight: 600 }} >
                {`आप का मोबाइल नं. ${authState?.phoneNumber} \nहमारे सिस्टम में दर्ज नहीं है...\n\nकृपया नीचे दिए गए मोबाइल नं.\nपर कॉल कर अपनी आईडी बनवायें।`}
            </Typography>
            
            <Button variant='contained' size='large' endIcon={<PhoneForwarded />}
                onClick={ ()=>  window.open("tel:8787080394") }
                sx={{px:8}} >कॉल करें
            </Button> 
            
            <Typography
              sx={{ whiteSpace:'pre-line', textAlign: 'center', fontSize: "16px", fontWeight: 600 }} >
                {`या\nलॉग आउट कर \nअन्य नंबर से पुनः लॉगिन करें `}
            </Typography>

            <Button variant='outlined' size='large' endIcon={ <ExitToApp /> } sx={{px:8}}
                onClick={ fireLogout } >लॉग आउट</Button>

        </Stack>);

        return(<Box sx={{pt:{xs:6}}} >{props.children}</Box>);
    }

    return (<LoadingLayout {...props} ><BrowserComponent {...props} /></LoadingLayout>);    
}
