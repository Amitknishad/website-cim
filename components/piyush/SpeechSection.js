// pages/index.js
import { Container, Grid, Card, CardContent, Typography, CardMedia, Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import HeaderWithLine from './HeaderWithLine';

export default function SpeechSection() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    // Featured speeches data
    const featuredSpeeches = [
        {
            id: 1,
            title: 'Piyush Goyal holds bilateral meetings with counterparts on sidelines of IPEF',
            date: 'September 17, 2024',
            image: '/speech1.jpg',
            category: 'Top News'
        },
        {
            id: 2,
            title: 'Piyush Goyal holds bilateral meetings with counterparts on sidelines of IPEF',
            date: 'September 17, 2024',
            image: '/speech2.jpg',
            category: 'Top News'
        }
    ];

    // Videos data
    const videos = [
        {
            id: 1,
            title: 'My 100-day report card for North Mumbai #100DaysOfModi3',
            date: 'September 17, 2024',
            videoUrl: 'https://www.youtube.com/embed/GGZFx06SwKk?si=Wb4XAdsDxWZzoMK9'
        },
        {
            id: 2,
            title: 'My 100-day report card for North Mumbai #100DaysOfModi3',
            date: 'September 17, 2024',
            videoUrl: 'https://www.youtube.com/embed/GGZFx06SwKk?si=Wb4XAdsDxWZzoMK9'
        },
        {
            id: 3,
            title: 'Asian Champions 2024 हर देशवासी को गौरवान्वित करने वाली जीत',
            date: 'September 17, 2024',
            videoUrl: 'https://www.youtube.com/embed/QZbVwOJ88Xo?si=OkfFBe1IqObjjgTv'
        },
        {
            id: 4,
            title: 'Asian Champions 2024 हर देशवासी को गौरवान्वित करने वाली जीत',
            date: 'September 17, 2024',
            videoUrl: 'https://www.youtube.com/embed/QZbVwOJ88Xo?si=OkfFBe1IqObjjgTv'
        }
    ];

    // Popular speeches data
    const popularSpeeches = [
        { id: 1, views: '145K', title: 'Startup India should move out of Invest India’s ambit, says Piyush Goyal', date: 'September 17, 2024' },
        { id: 2, views: '99K', title: 'Startup India should move out of Invest India’s ambit, says Piyush Goyal', date: 'September 17, 2024' },
        { id: 3, views: '60K', title: 'Startup India should move out of Invest India’s ambit, says Piyush Goyal', date: 'September 17, 2024' },
        { id: 4, views: '55K', title: 'Startup India should move out of Invest India’s ambit, says Piyush Goyal', date: 'September 17, 2024' },
        { id: 5, views: '33K', title: 'Startup India should move out of Invest India’s ambit, says Piyush Goyal', date: 'September 17, 2024' }
    ];

    return (
        <Box sx={{ backgroundColor: 'white', p: 4 }}>
            {/* Main Section */}
            <HeaderWithLine heading='Speech' widthArea='40%' />

            <Grid container spacing={2}>
                {/* Featured Speeches */}
                <Grid item xs={12} md={8}>
                    <Grid container spacing={2}>
                        {featuredSpeeches.map((speech) => (
                            <Grid item xs={12} sm={6} key={speech.id}>
                                <Card sx={{ position: 'relative', boxShadow: 'none', borderRadius: 0, margin: '0' }}>
                                    <CardMedia
                                        component="img"
                                        height="329"
                                        image={speech.image}
                                        alt={speech.title}
                                    />
                                    <CardContent
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            color: 'white',
                                            textAlign: 'left',
                                            background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)'
                                        }}>
                                        <Typography variant="overline" p={0.8} color="white" backgroundColor='#f27c21' width='auto'>
                                            {speech.category}
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            {speech.title}
                                        </Typography>
                                        <Typography color="textSecondary" textAlign='right'>
                                            {speech.date}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}

                        {/* Videos Section */}
                        {videos.map((video) => (
                            <Grid item xs={12} sm={6} key={video.id}>
                                <Card sx={{ display: 'flex' }}>
                                    <CardMedia
                                        component="iframe"
                                        height="200"
                                        src={video.videoUrl}
                                        title={video.title}
                                    />
                                    <CardContent>
                                        <Typography variant="subtitle1">
                                            {video.title}
                                        </Typography>
                                        <Typography variant="caption" color="textSecondary">
                                            {video.date}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                {/* Popular Speech Sidebar */}
                <Grid item xs={12} md={4}>
                    <Box sx={{ borderBottom: '2px solid #f57c00', mb: 2 }}>
                        <Typography variant="h6" gutterBottom style={{ fontWeight: 'bold', color: '#f27c21', fontSize: '28px' }}>
                            Popular Speech
                        </Typography>
                    </Box>

                    {popularSpeeches.map((speech, index) => (
                        <Card key={speech.id} sx={{ mb: 2, p: 1, backgroundColor: '#F5F5F5' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant='h6' sx={{ width: '70px', height: '70px', backgroundColor: '#FFE8E8', color: '#f27c21', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {index + 1}
                                </Typography>
                                <CardContent>
                                    <Box sx={{ justifyContent: 'space-between', alignItems: 'center', display: 'flex' }}>
                                        <Typography variant="body2" component='span' p={0.3} color="white" backgroundColor='#f27c21' width='auto'>
                                            {speech.views} View
                                        </Typography>
                                        <Typography variant="caption" color="textSecondary">
                                            {speech.date}
                                        </Typography>
                                    </Box>
                                    <Typography variant="subtitle2">
                                        {speech.title}
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    ))}

                    {/* More View */}
                    <Typography
                        variant="body2"
                        color="#f27c21"
                        style={{ cursor: 'pointer', textAlign: 'right', textDecoration: 'underline' }}
                    >
                        More View
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}
