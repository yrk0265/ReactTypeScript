import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { Toolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import './stickyheader.css';
// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     title:{
//         flexGrow: 1,
//     },
//     headercolor:{
//         backgroundColor: '#ffffff !important',
//         color:'black'
//     }
// }));
function StickyHeader() {
   //const classes = useStyles();
    return (
        <div className="root">
            <AppBar position="static" className="headercolor">
            <Toolbar>
            <Typography variant="h6" className="title">
            </Typography>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              className="icongray">
                        <AccountCircleIcon />
                        </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default StickyHeader;