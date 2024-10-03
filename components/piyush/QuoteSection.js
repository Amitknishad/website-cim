import { Box, Typography } from '@mui/material';

export default function QuoteSection() {
    return (
        <Box>
            <Box
                sx={{
                    backgroundColor: '#FEA47F',
                    height: '40px', // Adjust height as needed
                }}
            />

            <Box
                sx={{
                    backgroundColor: '#ff7e54', // Orange background
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '200px', // Adjust height as needed
                    textAlign: 'center',
                    px: 2, // Padding for smaller screens
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center', // Center the quote text horizontally
                        width: '100%',
                    }}
                >
                    {/* Quote Text */}
                    <Typography
                        variant="h6"
                        sx={{
                            color: 'white',
                            fontSize: { xs: '22px', sm: '24px' }, // Responsive font size
                            lineHeight: '1.5',
                        }}
                    >
                        "Good economics makes for good <br />
                        politics. We are today at the cusp <br />
                        of a development explosion."
                    </Typography>

                    {/* Author Name */}
                    <Box
                        sx={{
                            width: '100%', // Take the full width of the box
                            display: 'flex',
                            justifyContent: 'flex-end', // Align the author name to the right
                            mt: 2, // Margin for spacing from the quote
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: { xs: '14px', sm: '18px' },
                            }}
                        >
                            - Piyush Goyal
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
