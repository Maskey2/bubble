import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center" style={{ fontFamily: 'Comic Neue' }}>
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Bubble Trouble
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" style={{ fontFamily: 'Comic Neue' }} gutterBottom>

            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" style={{ fontFamily: 'Comic Neue' }}>
                Bubble Trouble to make your life without troubles.
        </Typography>
            <Copyright />
        </footer>
    )
}
export default Footer