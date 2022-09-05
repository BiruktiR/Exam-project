import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Container } from '@mui/material';

// icon import
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import EventIcon from '@mui/icons-material/Event';
import WcIcon from '@mui/icons-material/Wc';
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';

export default function General() {
  return (
    <Box component='main' sx={{ flexGrow: 1, py: 4, width: '100%' }}>
        <Container maxWidth="lg">
        <Typography
            sx={{ mb: 3 }}
            variant="h4"
        >
            Profile
        </Typography>
        <Grid container spacing={2}>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={3}>
        <Typography variant='h6'>
            <WcIcon/> Name: Helen lorde
            </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={3}>
            <Typography variant='h6'>
            <EmailIcon/> Email: katrin@gmail.com
            </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={3}>
        <Typography variant='h6'>
            <PhoneIcon/> Phone Number:  0978345433
            </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={3}>
        <Typography variant='h6'>
            <EventIcon/> Birth Date: 11/22/2000
            </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={3}>
        <Typography variant='h6'>
            <WcIcon/> Gender: female
            </Typography>
        </Grid>
        {/* <Grid item xs={6} sm={6} md={4} lg={4} xl={3}>
        <Typography variant='h6'>
            <HomeIcon/> House Number: 342
            </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={3}>
        <Typography variant='h6'>
            <LocationCityIcon/> Kebele: 11
            </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={3}>
        <Typography variant='h6'>
            <LocationCityIcon/> Woreda: 01
            </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={3}>
        <Typography variant='h6'>
            <LocationCityIcon/> Sub-City: Arada
            </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={3}>
        <Typography variant='h6'>
            <LocationCityIcon/> Town: Addis Ababa
            </Typography>
        </Grid> */}
      </Grid>
        </Container>
    </Box>
  );
}
