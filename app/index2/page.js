"use client";
// https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import { Box, Button, Container, Stack } from '@mui/material';
import { ReadMore } from '@mui/icons-material';
import { colorPrimary } from '../../styles/colors';

export default function WebPage() {

  const router = useRouter();
  // const { status } = useSession();
  // console.log(`ThemeClient => status : ${status}`);

  let datalist = [    
    { label : 'Grievances', bgColor : 'secondary', pageURL : 'grievances', disabled : false }, // calendar  
    { label : 'जन्मदिवस', bgColor : 'primary', pageURL : '/programs', disabled : true }, // dob
    { label : 'विवाह आमंत्रण सूची', bgColor : 'primary', pageURL : '/programs', disabled : true }, // marries
    { label : 'शोक सूची', bgColor : 'primary', pageURL : '/programs', disabled : true }, // condolance
    // { label : 'आपातकालीन रेल आरक्षण सूची', bgColor : 'primary', pageURL : '/programs', disabled : true } // condolance
    { label : 'कैलेंडर / कार्यक्रम', bgColor : 'secondary', pageURL : '/programs', disabled : true }, // calendar
    { label : 'मिलना चाहतें हैं', bgColor : 'secondary', pageURL : '/programs', disabled : true }, // calllogs
    { label : 'वार्ता / आग्रहकर्ता सूची', bgColor : 'secondary', pageURL : '/programs', disabled : true },    
  ];

  let handleClick = (rowItem) => {
    try {
      let pageURL = rowItem?.pageURL || 'default';
      // router.push(pageURL);
      window.location.href = `https://${pageURL}.piyushgoyal.org.in`
    } catch (error) {}
  }

  return ( <Container disableGutters maxWidth={'md'} >        
      <Stack spacing={4} sx={{ height : '100vh', alignContent: 'center', 
        // background: `linear-gradient(0deg, #FFFFFF, ${colorPrimary[50]}, ${colorPrimary[700]} )`,
        background: `linear-gradient(0deg, ${colorPrimary[50]}, ${colorPrimary[50]}, ${colorPrimary[500]} )`
      }} >
      {/* <Box component={'img'} src='/assets/images/pg_banner.png'
        onClick={ ()=> router.push('/admin/') }
        sx={{ objectFit: 'contain', width : '100%' }} />
      <Stack spacing={3} sx={{ px: { xs:6, lg:16, xl:32 } }} >
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
