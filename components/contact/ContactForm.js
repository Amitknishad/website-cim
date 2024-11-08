'use client';

import { Box, Grid, TextField, Button, Typography, Select, MenuItem, FormControl, InputLabel, IconButton } from '@mui/material';
import React, { useState } from 'react';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';


const ContactForm = () => {
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };

    return (
        <Box component="form" sx={{ backgroundColor: 'white', padding: 8 }}>
            <Grid container spacing={2}>
                {/* Form Section */}
                <Grid item xs={12} sm={6} md={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Name"
                                placeholder="Your Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                InputProps={{
                                    sx: { backgroundColor: '#FFF5F0', color: '#FF7E54' }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Mobile Number"
                                placeholder="Add Your"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                InputProps={{
                                    sx: { backgroundColor: '#FFF5F0', color: '#FF7E54' }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Email"
                                placeholder="Email address"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                InputProps={{
                                    sx: { backgroundColor: '#FFF5F0', color: '#FF7E54' }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth margin="normal">
                                <InputLabel sx={{ color: '#FF7E54' }}>Subject</InputLabel>
                                <Select
                                    value={subject}
                                    onChange={handleSubjectChange}
                                    displayEmpty
                                    inputProps={{
                                        sx: { backgroundColor: '#FFF5F0', color: '#FF7E54' },
                                    }}
                                >
                                    <MenuItem value="General Query">General Query</MenuItem>
                                    <MenuItem value="Feedback">Feedback</MenuItem>
                                    <MenuItem value="Share your concern">Share your concern</MenuItem>
                                    <MenuItem value="Thank you note">Thank you note</MenuItem>
                                    <MenuItem value="Support note">Support note</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                placeholder="Enter a note"
                                multiline
                                minRows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                fullWidth
                                margin="normal"
                                sx={{
                                    backgroundColor: '#FFF5F0',
                                    borderRadius: '8px',
                                    color: '#FF7E54',
                                    fontSize: '16px'
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                sx={{
                                    backgroundColor: '#FF7E54',
                                    padding: '12px 24px',
                                    borderRadius: '8px',
                                    fontSize: '16px',
                                    textTransform: 'none',
                                    width:'100%'
                                }}
                            >
                                Send a message
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Contact Information Section */}
                <Grid item xs={12} sm={6} md={6}>
                    <Box sx={{ backgroundColor: '#FF7E54', borderRadius: '16px', padding: 3 }}>
                        <Typography variant="body1" color="white" sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                            <Typography component='span' sx={{ backgroundColor: '#f27c21', p: 1, mr: 1 }}> <CallIcon /> </Typography>Call us  <br/>+91-2233443334
                        </Typography>
                        <Typography variant="body1" color="white" sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                            <Typography component='span' sx={{ backgroundColor: '#f27c21', p: 1, mr: 1 }}><MailOutlineIcon /></Typography> Email us <br/> piyush.goyal@gov.in
                        </Typography>
                        <Typography variant="body1" color="white" sx={{ marginBottom: 1 }}><Typography component='span' sx={{ backgroundColor: '#f27c21', p: 1, mr: 1 }}><LocationOnIcon /></Typography> Delhi location</Typography>
                        <Typography variant="body2" color="white" sx={{ marginBottom: 2, marginLeft: 6 }}>
                            Teen Murti Marg, New Delhi - 110 011
                        </Typography>
                        <Typography variant="body1" color="white" sx={{ marginBottom: 1 }}> <Typography component='span' sx={{ backgroundColor: '#f27c21', p: 1, mr: 1 }}><LocationOnIcon /></Typography>  Mumbai location</Typography>
                        <Typography variant="body2" color="white" sx={{ marginBottom: 2, marginLeft: 6 }}>
                            28, Sonmarg, Laxmibai Jagmohandas Marg, Nepean Sea Road, Mumbai - 400 006
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, marginTop: 2 }}>
                            <IconButton color="inherit">
                                <InstagramIcon sx={{ color: 'white', fontSize: 35, }} />  {/* Increased Icon Size */}
                            </IconButton>
                            <IconButton color="inherit">
                                <FacebookIcon sx={{ color: 'white', fontSize: 35 }} />   {/* Increased Icon Size */}
                            </IconButton>
                            <IconButton color="inherit">
                                <XIcon sx={{ color: 'white', fontSize: 35 }} />    {/* Increased Icon Size */}
                            </IconButton>
                            <IconButton color="inherit">
                                <YouTubeIcon sx={{ color: 'white', fontSize: 35 }} />    {/* Increased Icon Size */}
                            </IconButton>
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d447987.3274805382!2d76.76037232462366!3d28.69260803958832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d047309fff32f%3A0xfc5606ed1b5d46c3!2sDelhi!5e0!3m2!1sen!2sin!4v1730791355278!5m2!1sen!2sin" width="300" height="250" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                         
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.67292334256!2d72.71636992961623!3d19.08250200803847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1730791506167!5m2!1sen!2sin" width="300" height="250" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactForm;