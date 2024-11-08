import { Box, Container, Typography, TextField, IconButton, InputAdornment } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import React from "react";

const SignUpNewsLetter = () => {
    return (
        <Box sx={{backgroundColor:'white',height:'100%',pb:8}}>
            <Box sx={{ backgroundColor: '#ff7e54', display: 'flex', justifyContent: 'center', alignItems: 'center', py: 8, mx:4 }}>
            <Container maxWidth="sm" sx={{ textAlign: 'center', color: '#fff' }}>
                <Typography variant="h2" component="h1" gutterBottom>
                    Sign up to our newsletter
                </Typography>
                <Typography variant="body3" sx={{ mb: 3 }}>
                    Receive the latest news, updates, and many other things <br/> every week.
                </Typography>
                <TextField
                    variant="outlined"
                    placeholder="Enter your email address"
                    fullWidth
                    InputProps={{
                        sx: { backgroundColor: '#fff', borderRadius: '50px', mt:4 },
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton edge="end" color="primary">
                                    <SendIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Container>
        </Box>

        </Box>
    );
}

export default SignUpNewsLetter;