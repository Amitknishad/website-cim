// components/Footer.js
import { Grid, Typography, IconButton, Box, TextField, Button, Avatar, Container } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import XIcon from '@mui/icons-material/X';


export default function Footer() {
    return (
        <Box backgroundColor="white">
            <Box component="footer" sx={{ backgroundColor: '#ff7e54', color: '#fff', py: 6, px: 4, borderRadius: "50px 50px 0 0" }}>
                <Container>
                    <Grid container spacing={6} justifyContent="space-between">

                        {/* Top Section: Image, Name, and Description */}
                        <Grid item xs={12} container justifyContent={{ xs: 'center', md: 'flex-start' }} alignItems="center" direction="row" sx={{ mb: 4 }}>
                            <Avatar
                                src="/piyush.jpeg"
                                alt="Piyush Goyal"
                                sx={{ width: 90, height: 90, mb: 1 }}
                            />
                            <Typography variant="h5" align="start" marginLeft="20px" textAlign={{ xs: 'center', md: 'start' }}>
                                Piyush Goyal
                                <Typography variant="body1" align="left" sx={{ fontSize: '16px' }}>
                                    Union Commerce and Industry Minister & North Mumbai Lok Sabha MP
                                </Typography>
                            </Typography>
                        </Grid>

                        {/* Main Content Sections */}
                        <Grid container item xs={12} spacing={6} justifyContent="space-between">

                            {/* Contact Us */}
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant="h6" gutterBottom sx={{ fontSize: '18px', fontWeight: 'bold' }}>
                                    Contact Us
                                </Typography>
                                <Box display="flex" alignItems="center" mb={2}>
                                    <LocationOnIcon sx={{ mr: 1 }} />
                                    <Typography variant="body2" sx={{ fontSize: '16px' }}>
                                        8, Teen Murti Marg, New Delhi – 110 011
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center" mb={2}>
                                    <LocationOnIcon sx={{ mr: 1 }} />
                                    <Typography variant="body2" sx={{ fontSize: '16px' }}>
                                        28, Sonnmarg, Laxmibai Jagmohandas Marg, Mumbai – 400 006
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center">
                                    <EmailIcon sx={{ mr: 1 }} />
                                    <Typography variant="body2" sx={{ fontSize: '16px' }}>
                                        Email: piyush.goyal@gov.in
                                    </Typography>
                                </Box>
                            </Grid>

                            {/* Quick Links Section */}
                            <Grid item xs={12} sm={6} md={4}>
                                <Typography variant="h6" gutterBottom sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                                    Quick Links
                                </Typography>
                                <Typography variant="body2" sx={{ fontSize: '16px', mb: 1 }}>About</Typography>
                                <Typography variant="body2" sx={{ fontSize: '16px', mb: 1 }}>My Views</Typography>
                                <Typography variant="body2" sx={{ fontSize: '16px', mb: 1 }}>Press</Typography>
                                <Typography variant="body2" sx={{ fontSize: '16px', mb: 1 }}>Gallery</Typography>
                                <Typography variant="body2" sx={{ fontSize: '16px', mb: 1 }}>Join us</Typography>
                            </Grid>

                            {/* Social Media and Newsletter Section */}
                            <Grid item xs={12} sm={6} md={4} display="flex" flexDirection="column" alignItems={{ xs: 'center', md: 'flex-start' }}>

                                {/* Newsletter Subscription */}
                                <Box
                                    sx={{
                                        width: { xs: '100%', sm: '320px' },
                                        backgroundColor: '#fff',
                                        borderRadius: '15px',
                                        padding: 2,
                                        mt: 3,
                                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                                    }}
                                >
                                    {/* <Typography
                                        variant="subtitle1"
                                        gutterBottom
                                        sx={{ color: '#f37021', fontWeight: 'bold' }}
                                    >
                                        NEWSLETTER
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: '#f37021', marginBottom: '8px' }}
                                    >
                                        Get Latest News & Update
                                    </Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'start', flexDirection:'row', alignItems: 'center', }}>
                                        <TextField
                                            variant="outlined"
                                            placeholder="E-mail"
                                            size="small"
                                            sx={{
                                                backgroundColor: '#FEE9DC',
                                                borderRadius: '5px',
                                                input: { padding: '6px' },
                                                width: { xs: '60%', sm: '230px', md: '240px' },
                                                mb: { xs: 2, sm: 0 },
                                            }}
                                        />
                                        <Button
                                            variant="contained"
                                            sx={{
                                                ml: { xs: 0, sm: 2 },
                                                mt: { xs: 2, sm: 0 },
                                                backgroundColor: '#f37021',
                                                color: '#fff',
                                                borderRadius: '5px',
                                                textTransform: 'none',
                                                padding: '5px 16px',
                                            }}
                                        >
                                            Subscribe
                                        </Button>
                                    </Box> */}
                                    <Typography
                                        variant="subtitle1"
                                        gutterBottom
                                        sx={{ color: '#f37021', fontWeight: 'bold' }}
                                    >
                                        NEWS LETTER
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: '#f37021', marginBottom: '8px' }}
                                    >
                                        Get Latest News & Update
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <TextField
                                            variant="outlined"
                                            placeholder="E-mail"
                                            size="small"
                                            sx={{
                                                backgroundColor: '#FEE9DC',
                                                borderRadius: '5px',
                                                input: { padding: '6px' },
                                                width: '230px'
                                            }}
                                        />
                                        <Button
                                            variant="contained"
                                            sx={{
                                                ml: 2,
                                                backgroundColor: '#f37021',
                                                color: '#fff',
                                                borderRadius: '5px',
                                                textTransform: 'none',
                                                padding: '5px 16px'
                                            }}
                                        >
                                            Subscribe
                                        </Button>
                                        </Box>
                                </Box>

                                {/* Social Media */}
                                <Typography variant="h6" gutterBottom sx={{ fontSize: '18px', fontWeight: 'bold', mt: 3 }}>
                                    Stay Connected
                                </Typography>
                                <Box>
                                    <IconButton href="#" color="inherit" sx={{ mr: 1 }}>
                                        <InstagramIcon fontSize="large" />
                                    </IconButton>
                                    <IconButton href="#" color="inherit" sx={{ mr: 1 }}>
                                        <FacebookIcon fontSize="large" />
                                    </IconButton>
                                    <IconButton href="#" color="inherit" sx={{ mr: 1 }}>
                                        <XIcon fontSize="large" />
                                    </IconButton>
                                    <IconButton href="#" color="inherit" sx={{ mr: 1 }}>
                                        <YouTubeIcon fontSize="large" />
                                    </IconButton>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Footer Bottom Section */}
                    <Box sx={{ mt: 4, textAlign: 'center' }}>
                        <Typography variant="caption" sx={{ color: '#fff' }}>
                            Copyright ©2024. All rights reserved. | <a href="/privacy-policy" style={{ color: '#fff', textDecoration: 'underline' }}>Privacy policy</a>
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
