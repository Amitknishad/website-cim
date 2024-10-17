"use client";
// https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import { Box, Button, Container, IconButton, Stack } from '@mui/material';
import { colorPrimary } from '../../styles/colors';
import { AccountBox, AccountCircle, Person } from '@mui/icons-material';

export default function WebPage() {

  const router = useRouter();

  return ( <Container disableGutters maxWidth={'md'} >        
      
      <Stack spacing={0} sx={{ height : '100vh', alignContent: 'center', 
        // background: `linear-gradient(0deg, #FFFFFF, ${colorPrimary[50]}, ${colorPrimary[700]} )`,
        background: `linear-gradient(0deg, ${colorPrimary[50]}, ${colorPrimary[100]}, ${colorPrimary[500]} )`
      }} >

        <Box component={'img'} src='/assets/images/be_bjp_member.jpg'
          sx={{ objectFit: 'contain', width : '100%' }} />
        <Box component={'img'} src='/assets/images/banner_hcm.jpeg'
          sx={{ objectFit: 'contain', width : '100%', borderRadius:2 }} />

        <Box sx={{ position: 'absolute', top : '60%', left: { xs:"30%", lg: "40%" }  }} >
          <Button variant='contained' size='large' onClick={ ()=> { router.push('/call-list')
            // window.location.href = '/call-list'
          } } > कॉल सूचि देखें </Button>
        </Box>

        <Box sx={{ position: 'absolute', top : '0', left: { xs:"1%", lg: "20%", xl: "25%" }  }} >
          <IconButton onClick={ ()=> { router.push('/account')} } >
            <AccountCircle sx={{ color:'white', border: `1px solid ${colorPrimary[500]}` ,  width : { xs:32, lg: 64 } , height : { xs:32, lg: 64 } }} />
          </IconButton>
        </Box>

        {/* <Stack spacing={3} sx={{ px: { xs:6, lg:16, xl:32 } }} >
          {
            datalist.map( (rowItem) => (<Button key={rowItem.label} fullWidth variant='contained' size='large' disabled={rowItem?.disabled}
              color={ rowItem.bgColor} endIcon={<ReadMore /> } 
              onClick={ ()=> handleClick(rowItem) } sx={{ height : { xs: "7vh" , md: "5vh" }, fontSize: "2vh" }}
            >{rowItem.label}</Button>))
          }
        </Stack> */}
    </Stack> 
  </Container>);
}
