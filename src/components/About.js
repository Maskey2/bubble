import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import tin from './../img/7.jpg'
import tin2 from './../img/5.jpg'
import { Container } from '@material-ui/core';

export default function () {
    return (
        <div>
            <Container maxWidth="md" component="main" >
                <Grid container spacing={4} alignContent="center" justify="center" alignItems="center">
                    <Grid item md={5} xs={12}>
                        <img src={tin} alt="" style={{ maxWidth: '330px', border: '7px solid black' }} />
                    </Grid>
                    <Grid item md={7} xs={12}>
                        <Typography style={{ margin: '15px', fontSize: '20px', fontFamily: 'Comic Neue' }}>
                            Bubble is amazing and the luckiest dog ever.
                            Bubble is amazing and the luckiest dog ever.
                            Bubble is amazing and the luckiest dog ever.
                            Bubble is amazing and the luckiest dog ever.
                            Bubble is amazing and the luckiest dog ever.
                            Bubble is amazing and the luckiest dog ever.
                    </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={4} alignContent="center" justify="center" alignItems="center">
                    <Grid item md={7} xs={12}>
                        <Typography style={{ margin: '15px', fontSize: '20px', fontFamily: 'Comic Neue' }}>
                            Bubble is amazing and the luckiest dog ever.
                            Bubble is amazing and the luckiest dog ever.
                            Bubble is amazing and the luckiest dog ever.
                            Bubble is amazing and the luckiest dog ever.
                            Bubble is amazing and the luckiest dog ever.
                            Bubble is amazing and the luckiest dog ever.
                    </Typography>
                    </Grid>
                    <Grid item md={5} xs={12}>
                        <img src={tin2} alt="" style={{ maxWidth: '300px', border: '7px solid black' }} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}