'use client';

import { Box, FormControl, FormHelperText, TextField, Button } from '@mui/material';
import React from 'react';

const ContactForm = () => {
    return (
        <Box component="form">
            <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <Button
                variant="contained"
                color="primary"
                type="submit"
            >
                Submit
            </Button>
        </Box>
    );
}

export default ContactForm;
