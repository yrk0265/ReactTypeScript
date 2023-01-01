import React,{Suspense,lazy} from 'react';
import StickyHeader from "./components/stickyheader/stickyheader";
import BoxRect from "./components/header/headermsg";
import DropDowns from "./components/dropdownsidebars/dropdown";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import StickyFooter from './components/footer/footer';
const Gridbox =React.lazy(()=>import('./components/grid/grid'));
const useStyles = makeStyles((theme) => ({
  divreSize:{
    [theme.breakpoints.between("xs","sm")]:{
      display:"column",
      marginLeft:"20px"
    },
    [theme.breakpoints.between("sm","md")]:{
      display:"column",
      marginLeft:"20px"
    },
    [theme.breakpoints.between("md","lg")]:{
      display:"flex",
      marginLeft:"10px"
    },
    [theme.breakpoints.between("lg","xl")]:{
      display:"flex",
      marginLeft:"10px"
    }
  }
}));
function App() {
  const classes = useStyles();
  return (
    <div>
      <StickyHeader/>  
      <BoxRect/>
       <Box className={classes.divreSize}>
         <DropDowns/>
         <Suspense fallback={<div>please wait....</div>}>
            <Gridbox/>
         </Suspense> 
        </Box> 
      <StickyFooter/>
    </div>
  );
}

export default App;
