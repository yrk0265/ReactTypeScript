import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { InputLabel,OutlinedInput,FilledInput,InputAdornment,IconButton   } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@material-ui/core/styles';
const useStyles=makeStyles((theme) => ({
  searchPlacement:{
      [theme.breakpoints.between("xs","sm")]:{
        marginBottom:"0px",
        marginLeft:"20px !important",
        padding:"0px",
        width: '20ch'
      },
      [theme.breakpoints.between("sm","md")]:{
        marginBottom:"0px",
        marginLeft:"20px !important",
        padding:"0px",
        width: '20ch'
      },
      [theme.breakpoints.between("md","lg")]:{
        marginBottom:"0px",
        marginLeft:"10px !important",
        padding:"0px",
        width: '20ch'
      },
      [theme.breakpoints.between("lg","xl")]:{
        marginBottom:"0px",
        marginLeft:"10px !important",
        padding:"0px",
        width: '20ch'
      }
  }
}));   
export default function StickyFooter() {
  const classes=useStyles();
    return (
        <Box
          component="footer"
          sx={{
            marginTop:"20px",
            marginBottom:"0px",
            paddingLeft:"0px",
            backgroundColor: "white",
            bottom: 0
          }}
        >
        <FormControl className={ classes.searchPlacement } variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type='text'
            value=''
            //onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle search visibility"
                  edge="end"
                >
                <SearchIcon />              
                </IconButton>
              </InputAdornment>
            }
            label="Search"
          />
        </FormControl>
        </Box>
    );
  }