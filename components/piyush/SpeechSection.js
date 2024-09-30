// pages/index.js
import { Container, Grid, Card, CardContent, Typography, CardMedia, Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import HeaderWithLine from './HeaderWithLine';


export default function SpeechSection() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return (
        <Box sx={{ backgroundColor: 'white' , p:4 }}>
           
                {/* Main Section */}
                {/* <Typography variant="h4" gutterBottom style={{ padding:'20px', fontWeight: 'bold', color: '#f57c00' }}>
                    Speech
                </Typography> */}
                <HeaderWithLine heading='Speech' widthArea='40%' />

                <Grid container spacing={2}>
                    {/* Featured Speeches */}
                    <Grid item xs={12} md={8}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image="/piyush.jpeg"
                                        alt="Speech"
                                    />
                                    <CardContent>
                                        <Typography variant="overline" p={0.8} color="white" backgroundColor='#f27c21' width='auto'>
                                            Top News
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            Piyush Goyal holds bilateral meetings with counterparts on sidelines of IPEF
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image="/piyush.jpeg"
                                        alt="Speech"
                                    />
                                    <CardContent>
                                        <Typography variant="overline"  p={0.8} color="white" backgroundColor='#f27c21' width='auto'>
                                            Top News
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            Piyush Goyal holds bilateral meetings with counterparts on sidelines of IPEF
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            {/* Videos Section */}
                            <Grid item xs={12} sm={6}>
                                <Card sx={{display:'flex'}}>
                                    <CardMedia
                                        component="iframe"
                                        height="200"
                                        src="https://www.youtube.com/embed/GGZFx06SwKk?si=Wb4XAdsDxWZzoMK9"
                                        title="Video"
                                    />
                                    <CardContent>
                                        <Typography variant="subtitle1">
                                            My 100-day report card for North Mumbai #100DaysOfModi3
                                        </Typography>
                                        <Typography variant="caption" color="textSecondary">
                                            September 17, 2024
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Card sx={{display:'flex'}}>
                                    <CardMedia
                                        component="iframe"
                                        height="200"
                                        src="https://www.youtube.com/embed/GGZFx06SwKk?si=Wb4XAdsDxWZzoMK9"
                                        title="Video"
                                    />
                                    <CardContent>
                                        <Typography variant="subtitle1">
                                            My 100-day report card for North Mumbai #100DaysOfModi3
                                        </Typography>
                                        <Typography variant="caption" color="textSecondary">
                                            September 17, 2024
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>


                            <Grid item xs={12} sm={6}>
                                <Card sx={{display:'flex'}}>
                                    <CardMedia
                                        component="iframe"
                                        height="200"
                                        src="https://www.youtube.com/embed/QZbVwOJ88Xo?si=OkfFBe1IqObjjgTv"
                                        title="Video"
                                    />
                                    <CardContent>
                                        <Typography variant="subtitle1">
                                            Asian Champions 2024 हर देशवासी को गौरवान्वित करने वाली जीत
                                        </Typography>
                                        <Typography variant="caption" color="textSecondary">
                                            September 17, 2024
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Card sx={{display:'flex'}}>
                                    <CardMedia
                                        component="iframe"
                                        height="200"
                                        src="https://www.youtube.com/embed/QZbVwOJ88Xo?si=OkfFBe1IqObjjgTv"
                                        title="Video"
                                    />
                                    <CardContent>
                                        <Typography variant="subtitle1">
                                            Asian Champions 2024 हर देशवासी को गौरवान्वित करने वाली जीत
                                        </Typography>
                                        <Typography variant="caption" color="textSecondary">
                                            September 17, 2024
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* Popular Speech Sidebar */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ borderBottom: '2px solid #f57c00', mb: 2  }}>
                            <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold', color: '#f27c21',fontSize:'28px' }}>
                                Popular Speech
                            </Typography>
                        </Box>

                        {[1, 2, 3, 4, 5].map((item, index) => (
                            <Card key={index} sx={{ mb: 2, p:1, backgroundColor:'#F5F5F5' }} >
                                <Box sx={{display:'flex', alignItems:'center' }}>
                                    <Typography variant='h6' sx={{width:'70px', height:'70px', backgroundColor:'#FFE8E8', color:'#f27c21', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center' }}>
                                        {index+1}
                                    </Typography>

                               
                                <CardContent>
                                    <Box sx={{justifyContent:'space-between', alignItems:'center', display:'flex'}} >
                                        <Typography variant="body2" component='span' p={0.3} color="white" backgroundColor='#f27c21' width='auto' >
                                            {item === 1 ? '145K View' : item === 2 ? '99K View' : item === 3 ? '60K View' : item === 4 ? '55K View' : '33K View'}
                                        </Typography>
                                        <Typography variant="caption" color="textSecondary">
                                            September 17, 2024
                                        </Typography>
                                    </Box>
                                    <Typography variant="subtitle2">
                                        Startup India should move out of Invest India’s ambit, says Piyush Goyal
                                    </Typography>

                                </CardContent>
                                </Box>
                            </Card>
                        ))}

                        {/* More View */}
                        <Typography
                            variant="body2"
                            color="#f27c21"
                            style={{ cursor: 'pointer', textAlign: 'right', textDecoration:'underline'}}
                        >
                            More View
                        </Typography>
                    </Grid>
                </Grid>
            
        </Box>
    );
}
