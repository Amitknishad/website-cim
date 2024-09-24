import React from 'react';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import { signOut} from 'next-auth/react';
import Home from '@mui/icons-material/Home';
import PersonPin from '@mui/icons-material/PersonPin';
import EventNote from '@mui/icons-material/EventNote';
import ContactPhone from '@mui/icons-material/ContactPhone';
import LocalActivity from '@mui/icons-material/LocalActivity';

import { Box, AppBar, Avatar, BottomNavigation, BottomNavigationAction, Button, Card, Container, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Paper, Stack, Toolbar, Typography, Menu, MenuItem } from '@mui/material';

import LoadingLayout from './LoadingLayout';
import { colorPrimary } from '../styles/colors';
import { Groups, JoinFull, ReportProblem } from '@mui/icons-material';

export default function LayoutXYZ (props) {

    let BrowserComponent = (props) => {

        let router = useRouter();
        let pageTitle = props?.pageTitle || "कार्यक्रम";

        const [ selectedTab, setSelectedTab] = React.useState(props?.selectedTab);
        const [ isDesktop, setIsDesktop ] = React.useState(false);

        let listItems = [
            {
                'pageTitle' : 'कैलेंडर / कार्यक्रम',
                'pagePath' : '/programs',
                'icon' : <EventNote />
            },
            {
                'pageTitle' : 'मिलना चाहते हैं',
                'pagePath' : '/meetings',
                'icon' : <LocalActivity />
            },
            {
                'pageTitle' : 'वार्ता / आग्रहकर्ता सूची',
                'pagePath' : '/calllogs',
                'icon' : <ContactPhone />
            },
            {
                'pageTitle' : 'विवाह आमंत्रण सूची',
                'pagePath' : '/marriages',
                'icon' : <JoinFull />
            },
            {
                'pageTitle' : 'शोक सूची',
                'pagePath' : '/condolence',
                'icon' : <ReportProblem />
            },
            {
                'pageTitle' : 'कार्यकर्ता सूची',
                'pagePath' : '/workers',
                'icon' : <Groups />
            }
        ];

        React.useEffect( ()=> {
            if(window && window?.innerWidth>1200 ) setIsDesktop(true);
        }, []);
    
        let openPage = React.useCallback( (pagePath) => {
            router.push(pagePath);
        }, []);

        

    // ################################ ################################ ################################        
    // ################################ ################################ ################################

    let HeaderComponent = (props) => {
        
        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (event) => setAnchorEl(event.currentTarget); // onClick={ ()=> openPage('/admin/') }
        const handleClose = () =>  setAnchorEl(null);

        return(<AppBar elevation={0} position='sticky'
            sx={{ leftt: isDesktop ? "33.33%" : 0, width: "100%", top:0 }} >
            <Toolbar variant='dense' 
                sx={{ zIndex:0, position: 'relative', p:"4px" }}  >
                <IconButton onClick={ ()=> openPage('/home') } > <Home sx={{color:'white'}} /></IconButton>
                <Typography variant='h4' sx={{pl:1, flexGrow:1}} >{pageTitle}</Typography>                
                <IconButton onClick={handleClick} > <PersonPin sx={{color:'white'}} /></IconButton>

                <Menu id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem onClick={ ()=> router.push('/admin') } >Admin Panel</MenuItem>
                    <MenuItem onClick={ async()=> {
                        localStorage.removeItem('loginUser');
                        await signOut();
                    } }>Logout</MenuItem>
                </Menu> 

                {/* <RadioGroup row value={'byDate'}
                    sx={{ 
                        flexGrow:1,
                        ".MuiFormControlLabel-label":{
                            fontSize: isDesktop ? "16px" : "12px"
                        },
                        '.Mui-checked': {
                            color: "yellow",
                        },
                    }}
                >
                    <FormControlLabel label="तिथि के अनुसार" value="byDate"  control={<Radio />}  />
                    <FormControlLabel label="विधानसभा के अनुसार" value="byAC" control={<Radio />}  />
                </RadioGroup> */}

                {
                    (router?.asPath?.includes('home')) && <Button variant='contained' color='secondary'>प्रस्तावित (कभी भी )</Button>
                }
                
                {/* <IconButton > <AccountCircle sx={{color:'white'}} /></IconButton> */}
            </Toolbar>      
        </AppBar>);
    }

    let MainComponent = (props) => {

        return (<Container maxWidth={false} disableGutters >
            <HeaderComponent {...props } />
            {/* <Toolbar variant='dense'  /> */}
            <Box
                sx={{
                    pb: isDesktop ? 0 : 7, 
                    px:0, pt:0,   
                    height: isDesktop ? "95vh" : "93vh",
                    overflowX: 'hidden', overflowX: 'auto',
                    background: colorPrimary[50],
                    // boxShadoww : `0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)`
                }}
            >  { props.children } </Box>    
             
        </Container>)
    }
    
    // ################################ ################################ ################################        
    // ################################ ################################ ################################

    let SideComponent = () => {
        return ( <Card square elevation={0} sx={{ height:"99.99vh", width: "100%", zIndex:999, p:0,
            background: `linear-gradient(0deg, ${colorPrimary[50]}, ${colorPrimary[50]}, ${colorPrimary[500]} )`
            // background: colorPrimary[50], 
            }} >
            <Stack direction={'row-reverse'}>
                <Box component={'img'} src='/assets/images/header_oms.jpg' sx={{ width: '102%', objectFit: "contain", background: colorPrimary[700], minHeight : "11vh" }}/>
            </Stack>                        
            <List disablePadding >
                {
                    listItems.map( (rowItem, INDEX) => (<div key={rowItem?.pageTitle} >
                        <ListItem key={rowItem?.pageTitle}
                            sx={{ 
                                p : "6px", 
                                "background" :(router.asPath == rowItem.pagePath) ? colorPrimary[500] : 'transparent', 
                                ".MuiAvatar-root": { background: 'transparent' }, 
                                // ":hover" : {
                                //     ".MuiAvatar-root": { background: colorPrimary[100] },
                                // },
                            }} 
                        >
                            <ListItemButton onClick={ ()=> openPage(rowItem.pagePath) } >
                                <Avatar variant='rounded'
                                    sx={{
                                        mr:2, color: 'black',
                                        background:(router.asPath == rowItem.pagePath) ? colorPrimary[100] : colorPrimary[50] 
                                    }}  >{rowItem.icon}</Avatar>
                                <ListItemText primary={ <Typography variant='h3' >{ rowItem.pageTitle}</Typography> }  />
                                
                            </ListItemButton>
                        </ListItem><Divider sx={{ opacity: 0.4 }} /></div>
                    ) )
                }
            </List>
        </Card> );
    }

    // ################################ ################################ ################################        
    // ################################ ################################ ################################

    let BottomNav = (props) => {

        let handleTabChange = (newValue) => {
            try {            
                setSelectedTab(newValue);
                let pagePath = listItems[newValue]?.pagePath;
                router.push(pagePath);
                console.log("handleTabChange => pagePath : "+pagePath);
            } catch (error) {
                console.log("handleTabChange => error : "+error?.message);
            }
        }

       
        return (<>
            <Paper elevation={3} square={isDesktop}
                sx={{ 
                    position: 'fixed', 
                    top: isDesktop ? 0 : 'auto', 
                    bottom: !isDesktop ? 0 : 'auto', 
                    left: 0, 
                    right: 0 
                    }} 
                >
                <BottomNavigation showLabels value={selectedTab}
                    onChange={(event, newValue) => handleTabChange(newValue) }
                    sx={{
                        background: isDesktop ? colorPrimary[900] : 'white',
                        "& .MuiBottomNavigationAction-root":{
                            minWidth: "72px"
                        }
                    }}
                >
                    
                    {
                        listItems.map( (rowItem, INDEX) => (
                            <BottomNavigationAction key={INDEX+1}  label={rowItem?.pageTitle} icon={rowItem?.icon} />
                        ))
                    }
                </BottomNavigation>
            </Paper>
        </>)
    }

    // ################################ ################################ ################################        
    // ################################ ################################ ################################

        return(<Box id="csDiv" sx={{height:"99.99vh", overflow:'hidden'}} >
            <Container maxWidth='md' disableGutters >
                <Grid container spacing={0} >
                    {
                        isDesktop && <Grid item xs={4} >
                            <SideComponent {...props} />
                        </Grid>
                    }
                    <Grid item xs={12} lg={8} >
                        <Box sx={{ background: "white", width: "100%", height:"100%" }} >
                            <MainComponent {...props} />
                            {/* { !isDesktop && <BottomNav id='bottomNav' /> }      */}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>);
    }

    // ################################ ################################ ################################        
    // ################################ ################################ ################################
    // ################################ ################################ ################################
    // ################################ ################################ ################################

    return(<LoadingLayout><BrowserComponent {...props} /></LoadingLayout>);

}