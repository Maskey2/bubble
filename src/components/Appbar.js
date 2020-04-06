import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

export default function ElevateAppBar(props) {
    return (
        <React.Fragment>
            <AppBar position="sticky" style={{ backgroundColor: 'black', color: 'white' }}>
                <Toolbar>
                    <Typography variant="h6" style={{ fontFamily: 'Comic Neue' }}>Bubble Trouble</Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </React.Fragment>
    );
}
