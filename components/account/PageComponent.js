"use client";
import React from 'react';
import { Box, Button, Card, Container, Grid, Stack, TextField } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';

import { colorPrimary } from '../../styles/colors';
import { useFetchWrapper } from '../../hooks/useFetchWrapper';
import { useFirebaseAuthState } from '../../lib/useFirebaseAuthState';

export default function ComponentXYZ(props) {  

  const { fireLogout } = useFirebaseAuthState();
  const fetchWrapper = useFetchWrapper();

  // let [ pageData, setPageData ] = React.useState([]);
  let [ userData, setUserData ] = React.useState({});

  React.useEffect( ()=> {
    fetchPageData();          
  }, []);

  const fetchPageData = async() => {
    try {
      let apiRes = await fetchWrapper.post( '/api/withsecret?path=sangathan', { } );
      if(apiRes && apiRes?.response && Array.isArray(apiRes?.response) && apiRes?.response?.length > 0 ) setUserData(apiRes?.response[0]);
    } catch (error) {
      console.log(`fetchPageData => error : ${ error?.message}`);
    }
  }
  
  return (<Container disableGutters maxWidth={'md'} >        
      
    <Stack spacing={0} sx={{ minHeight : '94vh', alignContent: 'center', 
      background: `linear-gradient(0deg, ${colorPrimary[0]}, ${colorPrimary[500]} )`
    }} >

      {/* <Box component={'img'} src='/assets/images/be_bjp_member.jpg'
        sx={{ objectFit: 'contain', width : '100%' }} /> */}
      
      <Box component={'img'} src='/assets/images/banner_hcm.jpeg'
        sx={{ objectFit: 'contain', width : '100%', borderTopLeftRadius: 16, borderTopRightRadius: 16 }} />

      <Card square elevation={0} sx={{py:2}} >
        <Grid container justifyContent={'center'} spacing={3} >
          <Grid item xs={10} ><TextField fullWidth variant='standard' label='पूरा नाम' value={userData?.W_NAME} InputLabelProps={{ shrink:true }}  /></Grid>
          <Grid item xs={5} ><TextField fullWidth variant='standard' label='मोबाइल नं.' value={userData?.PHONE1} InputLabelProps={{ shrink:true }}  /></Grid>
          <Grid item xs={5} ><TextField fullWidth variant='standard' label='वर्तमान पद/जिम्मेदारी' value={userData?.W_ROLE} InputLabelProps={{ shrink:true }}  /></Grid>

          <Grid item xs={5} ><TextField fullWidth variant='standard' label='राज्य' value={userData?.ST_NO} InputLabelProps={{ shrink:true }}  /></Grid>
          <Grid item xs={5} ><TextField fullWidth variant='standard' label='जिला' value={userData?.DISTT_NAME} InputLabelProps={{ shrink:true }}  /></Grid>
          <Grid item xs={5} ><TextField fullWidth variant='standard' label='लोकसभा क्षेत्र' value={userData?.PC_NO} InputLabelProps={{ shrink:true }}  /></Grid>
          <Grid item xs={5} ><TextField fullWidth variant='standard' label='विधानसभा क्षेत्र' value={userData?.AC_NO} InputLabelProps={{ shrink:true }}  /></Grid>          
          
          <Grid item xs={5} ><TextField fullWidth variant='standard' label='मण्डल का नाम ' value={userData?.MANDAL_NAME} InputLabelProps={{ shrink:true }}  /></Grid>
          <Grid item xs={5} ><TextField fullWidth variant='standard' label='शक्ति केंद्र का नाम ' value={userData?.SK_NAME} InputLabelProps={{ shrink:true }}  /></Grid>
          
          <Grid item xs={5} ><TextField fullWidth variant='standard' label='बूथ नं.' value={userData?.PS_NO} InputLabelProps={{ shrink:true }}  /></Grid>
          <Grid item xs={5} ><TextField fullWidth variant='standard' label='बूथ का नाम ' value={userData?.PS_NAME} InputLabelProps={{ shrink:true }}  /></Grid>

          <Grid item xs={10} >
            <TextField fullWidth multiline minRows={2} variant='standard' label='बूथ स्थान' value={userData?.PS_ADDRESS} 
              InputLabelProps={{ shrink:true }}  /></Grid>

          <Grid item xs={6} > <Button fullWidth variant='contained' size='large' endIcon={ <ExitToApp /> } sx={{px:0, mt:2}} 
            onClick={ fireLogout } >लॉग आउट</Button> </Grid>

          <Grid item xs={10}><Card elevation={0} sx={{pb:2}} /></Grid>

        </Grid>
      </Card>

  </Stack> 
</Container>);
}