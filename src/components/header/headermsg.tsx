import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@mui/material/Button';
import { CenterFocusStrong } from '@material-ui/icons';
import { textAlign } from '@mui/system';
import { makeStyles } from '@material-ui/core/styles';
import './headermsg.css';
// const useStyles = makeStyles((theme) => ({
//   Header:{
//     textAlign:"center",
//     display:"flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     height:"100px",
//     width:"80%",
//     border: '2px solid grey',
//     backgroundColor: '#ffffff',
//       [theme.breakpoints.between("xs","sm")]:{
//           marginLeft:"20px !important",
//           marginTop:"10px",
//           marginBottom:"10px"
//         },
//         [theme.breakpoints.between("sm","md")]:{
//           marginLeft:"20px  !important",
//           marginTop:"10px",
//           marginBottom:"10px"
//         },
//         [theme.breakpoints.between("md","lg")]:{
//           margin:"10px"
//         },
//         [theme.breakpoints.between("lg","xl")]:{
//           margin:"10px"
//         }
//   }
// }));

function BoxRect(){
    return (
      <div className="header">
        <div className="divcontent"><b>Welcome SmoldersAdmin</b></div>
        &nbsp;
        <div className="divcontent">You have multiple logins to our application. You can change your role in right menu</div>
      </div>
    )
}
export default BoxRect;