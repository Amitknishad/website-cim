// components/Footer.js
import { Grid, Typography, IconButton, Box, TextField, Button, Avatar } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
    return (
        <Box component="footer" sx={{ backgroundColor: '#f37021', color: '#fff', py: 4, px: 2 }}>
            <Grid container spacing={4} justifyContent="space-between">

                {/* Top Section: Image, Name, and Description */}
                <Grid item xs={12} container justifyContent={{ xs: 'center', md: 'flex-start' }} alignItems="center" direction="row" sx={{ mb: 3 }}>
                    <Avatar
                        src="/piyush.jpeg"
                        alt="Piyush Goyal"
                        sx={{ width: 80, height: 80, mb: 1 }}
                    />
                    <Typography variant="h6" align="start" marginLeft="20px">
                        Piyush Goyal
                        <Typography variant="body2" align="center">
                            Union Commerce and Industry Minister & North Mumbai Lok Sabha MP
                        </Typography>
                    </Typography>
                </Grid>

                {/* Main Content Sections */}
                <Grid container item xs={12} spacing={4} justifyContent="space-between">

                    {/* Contact Us */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="h6" gutterBottom>
                            Contact Us
                        </Typography>
                        <Box display="flex" alignItems="center" mb={1}>
                            <LocationOnIcon sx={{ mr: 1 }} />
                            <Typography variant="body2">
                                8, Teen Murti Marg, New Delhi – 110 011
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mb={1}>
                            <LocationOnIcon sx={{ mr: 1 }} />
                            <Typography variant="body2">
                                28, Sonnmarg, Laxmibai Jagmohandas Marg, Mumbai – 400 006
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <EmailIcon sx={{ mr: 1 }} />
                            <Typography variant="body2">
                                Email: piyush.goyal@gov.in
                            </Typography>
                        </Box>
                    </Grid>

                    {/* About Section */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="h6" gutterBottom>
                            About
                        </Typography>
                        <Typography variant="body2">Biography</Typography>
                        <Typography variant="body2">Journey</Typography>
                        <Typography variant="body2">Achievements</Typography>
                    </Grid>

                    {/* My Views Section */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="h6" gutterBottom>
                            My Views
                        </Typography>
                        <Typography variant="body2">Visions</Typography>
                        <Typography variant="body2">Articles</Typography>
                        <Typography variant="body2">Blog</Typography>
                        <Typography variant="body2">Quotes</Typography>
                    </Grid>

                    {/* Press Section */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="h6" gutterBottom>
                            Press
                        </Typography>
                        <Typography variant="body2">Latest news</Typography>
                        <Typography variant="body2">Popular</Typography>
                        <Typography variant="body2">Speeches</Typography>
                        <Typography variant="body2">International Coverage</Typography>
                        <Typography variant="body2">Quick Views</Typography>
                    </Grid>

                    {/* Gallery Section */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="h6" gutterBottom>
                            Gallery
                        </Typography>
                        <Typography variant="body2">Video</Typography>
                        <Typography variant="body2">Images</Typography>
                        <Typography variant="body2">Old Images</Typography>
                    </Grid>

                    {/* Join Us */}
                    <Grid item xs={12} sm={6} md={2}>
                        <Typography variant="h6" gutterBottom>
                            Join Us
                        </Typography>
                        <Typography variant="body2">As Member</Typography>
                        <Typography variant="body2">As Volunteer</Typography>
                        <Typography variant="body2">Share Your Ideas</Typography>
                    </Grid>

                </Grid>

                {/* Bottom Section: Stay Connected and Newsletter */}
                <Grid container item xs={12} spacing={2} sx={{ mt: 4 }} justifyContent="space-between">

                    {/* Social Media Icons */}
                    <Grid item xs={12} md={6} container alignItems="center" justifyContent="flex-start">
                        <Typography variant="h6" gutterBottom>
                            Stay Connected
                        </Typography>
                        <IconButton href="#" color="inherit">
                            <InstagramIcon />
                        </IconButton>
                        <IconButton href="#" color="inherit">
                            <FacebookIcon />
                        </IconButton>
                        <IconButton href="#" color="inherit">
                            <YouTubeIcon />
                        </IconButton>
                    </Grid>

                    {/* Newsletter Subscription */}
                    <Grid item xs={12} md={6} container justifyContent="flex-end" alignItems="center">
                        <Box
                            sx={{
                                width: 300,
                                height: 120,
                                backgroundColor: '#fff', // White background color
                                borderRadius: '15px', // Rounded borders
                                padding: 2, // Add padding inside the box
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Light shadow for depth
                            }}
                        >
                            <Typography
                                variant="subtitle1"
                                gutterBottom
                                sx={{ color: '#f37021', fontWeight: 'bold' }} // Orange text color
                            >
                                NEWS LETTER
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ color: '#f37021', marginBottom: '5px' }} // Orange text color
                            >
                                Get Latest News & Update
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <TextField
                                    variant="outlined"
                                    placeholder="E-mail"
                                    size="small"
                                    sx={{
                                        backgroundColor: '#FEE9DC', // Light orange background
                                        borderRadius: '5px',
                                        input: { padding: '5px' }, // Adjust input padding
                                        width: '150px'
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    sx={{
                                        ml: 1,
                                        backgroundColor: '#f37021', // Orange button color
                                        color: '#fff', // White text color
                                        borderRadius: '5px',
                                        textTransform: 'none', // Remove uppercase style
                                        padding: '5px'
                                    }}
                                >
                                    Subscribe
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
