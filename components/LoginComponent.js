"use client";
import React from 'react';
// https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';

import { Button, Card, Container, Grid, SwipeableDrawer, TextField, Typography } from "@mui/material";

// import useFirebaseAuth from '../../hooks/useFirebaseAuth';
import { firebase, auth } from "../lib/firebase";
import { Cached, Home, KeyboardDoubleArrowRight } from '@mui/icons-material';
// import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

// import FirebaseUIReact from "firebaseui-react";

export default function ComponentXYZ( props ) {

  const router = useRouter();
  // let setIsLoggedIn = props?.setIsLoggedIn || function(){};
  // console.log("ComponentXYZ => setIsLoggedIn: "+setIsLoggedIn);

  let [ isOpen, setIsOpen ] = React.useState(true);
  const toggleDrawer = (state) => setIsOpen(state);

  let [inputNumber, setInputNumber] = React.useState(""); 
  let [inputOTP, setInputOTP] = React.useState(""); 

  let [ loading, setLoading ] = React.useState(false); 
  let [ otpSent, setOtpSent] = React.useState(false); 

  React.useEffect( () => {
    try{

      if(!window.recaptchaVerifier) {

        window.recaptchaVerifier =  new firebase.auth.RecaptchaVerifier( 'sign-in-button', {
          'size': 'invisible',
          'callback': (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // console.log("reCAPTCHA solved => response: "+response);
          window.recaptchaWidgetId = response;
        },
        'expired-callback': () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          console.log("WebPage => Response expired");
        }});
      }

      window.recaptchaVerifier.render().then((widgetId) => {
        window.recaptchaWidgetId = widgetId;
        // console.log("window.recaptchaVerifier.render => widgetId: "+widgetId);
      });

      window.recaptchaVerifier.verify().then((token) => {
        window.recaptchaToken = token;
        // console.log("window.recaptchaVerifier.verify => token: "+token);
      });

      // console.log("WebPage => window.recaptchaVerifier : "+window.recaptchaVerifier);

    }catch(error){
      console.log("WebPage => Error : "+error?.message);
    }
  }, []); // , authState

  // ####################### ####################### ####################### #######################
  // ####################### ####################### ####################### #######################
  // ####################### ####################### ####################### #######################
  // ####################### ####################### ####################### #######################

  let fireSendOTP = async() => {
    try {      
      const appVerifier = window?.recaptchaVerifier;
      // console.log("fireSendOTP => appVerifier : "+appVerifier);
      const phoneValue = '+91' + inputNumber;
      setLoading(true);
      let confirmationResult = await firebase.auth().signInWithPhoneNumber(phoneValue, appVerifier);
      // console.log("signInWithPhoneNumber => window.confirmationResult : "+confirmationResult);
      if(!confirmationResult){
        window?.location?.reload();
        return;
      }

      window.confirmationResult = confirmationResult;
      setOtpSent(true);
      setLoading(false);
          
    } catch (error) {
      console.log("fireSendOTP => Error : "+error?.message);
      window?.location?.reload();
    }
  }

  let fireVerifyOTP = async() => {
    try {      
      setLoading(true);
      let result = await window.confirmationResult.confirm(inputOTP);
      let fcmUser  = result?.user;
      // console.log("fireVerifyOTP => fcmUser : "+JSON.stringify(fcmUser));    
      // { "uid": "XpmFVFOAvBdSSWQCIHchUI1C5c03", "emailVerified": false,  "isAnonymous": false, "createdAt": "1654782520195", "lastLoginAt": "1728991876021", "appName": "[DEFAULT]", 
      // "phoneNumber": "+918787080394", "providerData" : [{}], "stsTokenManager" : {}
      // }
      setLoading(false);    
      // setIsLoggedIn(true);  
    } catch (error) {
      console.log("fireVerifyOTP => Error : "+error?.message);
      window?.location?.reload();
    }
  }

  // ####################### ####################### ####################### #######################
  // ####################### ####################### ####################### #######################
  // ####################### ####################### ####################### #######################
  // ####################### ####################### ####################### #######################

  const config = {
    signInOptions: ["phonenumber"],
  };

  return (<SwipeableDrawer open={isOpen} anchor='bottom' 
    onClose={ ()=> toggleDrawer(false) } 
    onOpen={ ()=> toggleDrawer(true) } >
    
    <Container disableGutters maxWidth={'md'} >

      {/* <FirebaseUIReact auth={auth} config={config} /> */}
      {/* <div id="sign-in-button" ></div> */}

      <Card square elevation={0} sx={{ minHeight: '92vh', pt:2 }} >

        <Grid container spacing={1} justifyContent={'center'} >

          <Grid item xs={10} >
            <Typography sx={{py:2}} >{`आप लॉगिन नहीं हैं ... कृपया नीचे दिए गए बॉक्स में अपना मोबाइल नं. भर कर लॉगिन करें।`}</Typography>
          </Grid>

          <Grid item xs={10} > <TextField fullWidth label={'मोबाइल नं.'} type='number' value={inputNumber} 
            onChange={ (event)=> setInputNumber(event?.target?.value) }
          /> </Grid>
          
          <Grid item xs={6} />
          
          <Grid item xs={4} alignSelf={'flex-end'} > <Button fullWidth size='small' variant='outlined' endIcon={ <KeyboardDoubleArrowRight /> } sx={{px:0}}
            disabled={!inputNumber || inputNumber?.length !==10 || loading } 
            onClick={fireSendOTP} >ओटीपी भेंजे</Button>
          </Grid>
          
          <Grid item xs={10} > <TextField fullWidth label={'ओटीपी'} disabled={ loading || !otpSent } value={inputOTP} sx={{mt:2}} 
            onChange={ (event)=> setInputOTP(event?.target?.value) } /> 
          </Grid>
          
          <Grid item xs={7} > <Button fullWidth variant='contained' endIcon={ <KeyboardDoubleArrowRight /> } sx={{px:0, mt:3}} 
            disabled={!inputOTP || inputOTP?.length<4 || loading }            
            onClick={fireVerifyOTP}>वेरीफाई करें</Button> </Grid>

          <Grid item xs={7} > <Button fullWidth variant='outlined' size='small' color='secondary' endIcon={ <Cached /> } sx={{px:0, mt:2}} 
            disabled={loading } onClick={ ()=> window.location.reload() }>री-लोड / री-फ्रेश </Button> </Grid>

          <Grid item xs={7} > <Button fullWidth variant='outlined' size='small' endIcon={ <Home /> } sx={{px:0, mt:2}} 
            disabled={loading } onClick={ ()=> router.push('/home') }>होम पेज</Button> </Grid>

          <Grid item xs={10}><Card elevation={0} sx={{py:8}} /></Grid>

        </Grid>

      </Card>
    </Container>

  </SwipeableDrawer>);
}