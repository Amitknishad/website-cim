"use client";
import * as React from 'react';
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import { AppBar, Container, IconButton, Toolbar, Typography } from '@mui/material';
import { AccountCircle, CalendarMonth, ContactPhone, EventNote, Home } from '@mui/icons-material';

export default function ComponentXYZ(props) {

  let { children } = props;
  let hiddenfooter = props?.hiddenfooter || true;

  const router = useRouter();

  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, [value]);

  let HeaderComponent = ()=> {
    return(<>
      <CssBaseline />
        <AppBar position="sticky" variant='none'  
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, top:0 }}>
          <Toolbar variant='dense' >
            <IconButton onClick={ ()=> router.push('/home') } ><Home sx={{ color:'white' }} /></IconButton>
            <Typography variant="h6" noWrap component="div" sx={{flexGrow:1}} >OMS</Typography>
            <IconButton><AccountCircle sx={{ color:'white' }} /></IconButton>
          </Toolbar>
        </AppBar>
        {/* <Toolbar /> */}
    </>);
  }

  let FooterComponent = ()=> {
    return(<>
      <Paper elevation={1}
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, 
        '.MuiBottomNavigationAction-label' : { fontSize : '9px' }, 
        '.MuiBottomNavigationAction-label.Mui-selected' : { fontSize : '10px' }, 
        '.MuiButtonBase-root' : { minWidth : '64px' }  
        }} >
        <BottomNavigation showLabels value={value} 
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Celendar" icon={<CalendarMonth />} />
          <BottomNavigationAction label="Calls" icon={<ContactPhone />} />
          <BottomNavigationAction label="Programs" icon={<EventNote />} />
          <BottomNavigationAction label="Marries" icon={<ArchiveIcon />} />
          <BottomNavigationAction label="Condolance" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
    </>);
  }

  return (
    <Box sx={{ pb:9, overflow: 'hidden', height: '100vh' }} ref={ref}> 
      <Container disableGutters maxWidth={'md'} ><HeaderComponent /></Container>
      <Container disableGutters maxWidth={'md'} 
        sx={{ overflow : 'auto', 'height' : hiddenfooter ? '94vh' : '89vh', background: `linear-gradient(180deg, #FFFFFF, #EBEEFF, #1a63d3 )`, }} >{children}</Container>
      { hiddenfooter ? null : <Container disableGutters maxWidth={'md'} ><FooterComponent /></Container> }      
    </Box>
  );
}

