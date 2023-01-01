import axios from "axios";
import React,{ useState,useRef,useMemo,useEffect  } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import './grid.css';
import useStateWithCallbackLazy  from 'use-state-with-callback';
let i=1;
const baseURL = "https://localhost:7061/api/Login/GetAccounts?smartGroup=726700&pageNumber=";
function Gridbox() {
  const targetref=useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useStateWithCallbackLazy(false,s=>{
  }); 
  const [accounts, setAccounts] = useState([]); 
  const callbackFunction = entries =>{
    const[entry]=entries;
    setIsVisible(entry.isIntersecting);
  }
  const options = useMemo(()=>{
    return {
      root:null,
      rootMargin:'-40px',
      threshold:1
    }
  },[]);
  React.useEffect(() => {
    function getData(){
      const response=axios.get(baseURL+i).then((response) => {
        setAccounts(response.data);
      });
    }
    if(isVisible)
    {
      getData();
      setIsVisible(false);
      i=i+1;
    }
  },[isVisible]);
  React.useEffect(() => {
    const observer=new IntersectionObserver(callbackFunction,options);
    const currentTarget=targetref.current;
    if(currentTarget){
      observer.observe(currentTarget);
      }
    return ()=>{
      if(currentTarget){
        observer.unobserve(currentTarget);
      }
    }
  },[targetref,options]);
  return (
        <div className="divreSize">
          <Grid container spacing={1}>
              {
              accounts.map((_,index)=>(
                  <Grid key={index} item xs={4}>
                    <Paper key={index} style={{height:"100px"}}>
                        <img className="img" src={`img/${index+1}.jpg`} style={{height:"100%",width:"100%"}} alt="food" />
                    </Paper>
                  </Grid>
              ))
              }
               <span ref={targetref}>{!isVisible ? '': ''}</span> 
          </Grid>
        </div>
    )
    
}
export default Gridbox;