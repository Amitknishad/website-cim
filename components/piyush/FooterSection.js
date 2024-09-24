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
      <Grid container spacing={4}>
        
        {/* Left Section: Image, Name, and Description (Separate Row) */}
        <Grid item xs={12} container justifyContent="start" direction="row" alignItems="center">
          <Avatar
            src="/piyush.jpeg"
            alt="Piyush Goyal"
            sx={{ width: 80, height: 80, mb: 2 }}
          />
          <Typography variant="h6" gutterBottom align="start" sx={{pl:2}}>
            Piyush Goyal
          <Typography variant="body2" align="center">
            Union Commerce and Industry Minister & North Mumbai Lok Sabha MP
          </Typography>
          </Typography>

        </Grid>

        {/* Middle Section: Contact, About, Views, Press, Gallery */}
        <Grid item xs={12} md={6} alignItems="center">
          <Grid container spacing={4}>
            
            {/* Contact Us */}
            <Grid item xs={12} sm={4}>
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

            {/* About */}
            <Grid item xs={12} sm={2}>
              <Typography variant="h6" gutterBottom>
                About
              </Typography>
              <Typography variant="body2">Biography</Typography>
              <Typography variant="body2">Journey</Typography>
              <Typography variant="body2">Achievements</Typography>
            </Grid>

            {/* My Views */}
            <Grid item xs={12} sm={2}>
              <Typography variant="h6" gutterBottom>
                My Views
              </Typography>
              <Typography variant="body2">Visions</Typography>
              <Typography variant="body2">Articles</Typography>
              <Typography variant="body2">Blog</Typography>
              <Typography variant="body2">Quotes</Typography>
            </Grid>

            {/* Press */}
            <Grid item xs={12} sm={2}>
              <Typography variant="h6" gutterBottom>
                Press
              </Typography>
              <Typography variant="body2">Latest news</Typography>
              <Typography variant="body2">Popular</Typography>
              <Typography variant="body2">Speeches</Typography>
              <Typography variant="body2">International Coverage</Typography>
              <Typography variant="body2">Quick Views</Typography>
            </Grid>

            {/* Gallery */}
            <Grid item xs={12} sm={2}>
              <Typography variant="h6" gutterBottom>
                Gallery
              </Typography>
              <Typography variant="body2">Video</Typography>
              <Typography variant="body2">Images</Typography>
              <Typography variant="body2">Old Images</Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Right Section: Join Us, Social Media, Newsletter */}
        <Grid item xs={12} md={3}>
          <Grid container spacing={2}>
            
            {/* Join Us */}
            <Grid item xs={12} sm={12}>
              <Typography variant="h6" gutterBottom>
                Join Us
              </Typography>
              <Typography variant="body2">As Member</Typography>
              <Typography variant="body2">As Volunteer</Typography>
              <Typography variant="body2">Share Your Ideas</Typography>
            </Grid>

            {/* Social Media Icons (Align to the Right) */}
            <Grid item xs={12} sm={12} container justifyContent="flex-end">
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
            <Grid item xs={12} sm={12}>
              <Typography variant="h6" gutterBottom>
                Newsletter
              </Typography>
              <TextField 
                variant="outlined" 
                placeholder="E-mail" 
                size="small" 
                sx={{ backgroundColor: 'transparent', border: '1px solid #fff', borderRadius: 1, color: '#fff', input: { color: '#fff' } }} 
                fullWidth
              />
              <Button 
                variant="contained" 
                sx={{ mt: 1, backgroundColor: '#fff', color: '#f37021', width: '100%' }}>
                Subscribe
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
